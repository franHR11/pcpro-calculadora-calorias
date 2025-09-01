# CONEXIONES_BD - PCPro Calculadora de Calorías

## 🗄️ Gestión de Datos y Almacenamiento

### Fecha: 9 de Enero, 2025

---

## 📋 Resumen del Sistema de Datos

**Tipo de Almacenamiento:** LocalStorage del Navegador  
**Base de Datos Tradicional:** No utilizada  
**Persistencia:** Local, sin servidor  
**Sincronización:** No requerida  

---

## 🏗️ Estructura de Datos

### 1. **Entidad Principal: Actividades**

```typescript
interface Actividades {
    id: string;           // UUID único generado automáticamente
    categorias: number;   // 1 = Comida, 2 = Ejercicio
    name: string;         // Nombre descriptivo de la actividad
    calorias: number;     // Cantidad de calorías (positivo)
}
```

### 2. **Entidad de Categorías**

```typescript
interface Categorias {
    id: number;    // Identificador numérico (1 o 2)
    name: string;  // "Comida" o "Ejercicio"
}
```

**Datos Estáticos:**
```typescript
export const categorias: Categorias[] = [
    { id: 1, name: 'Comida' },
    { id: 2, name: 'Ejercicio' }
];
```

---

## 💾 Implementación de Almacenamiento

### LocalStorage como "Base de Datos"

#### Clave de Almacenamiento:
- **Key:** `'activities'`
- **Formato:** JSON string del array de actividades
- **Ubicación:** Navegador del usuario

#### Operaciones CRUD Implementadas:

##### 1. **CREATE (Crear)**
```typescript
// En activity-reducer.ts
case 'guardar-actividad':
    let updatedActivities: Actividades[];
    if (state.activeId) {
        // Actualizar actividad existente
        updatedActivities = state.actividades.map(actividad =>
            actividad.id === state.activeId
                ? action.payload.nuevaActividad
                : actividad
        );
    } else {
        // Crear nueva actividad
        updatedActividades = [...state.actividades, action.payload.nuevaActividad];
    }
    return {
        ...state,
        actividades: updatedActivities,
        activeId: ''
    };
```

##### 2. **READ (Leer)**
```typescript
// En activity-reducer.ts - Estado inicial
const activitiesFromStorage = (): Actividades[] => {
    const localStorageActivities = localStorage.getItem('activities');
    return localStorageActivities ? JSON.parse(localStorageActivities) : [];
};

export const initialState: ActivityState = {
    actividades: activitiesFromStorage(),
    activeId: ''
};
```

##### 3. **UPDATE (Actualizar)**
```typescript
// Seleccionar actividad para edición
case 'set-activeID':
    return {
        ...state,
        activeId: action.payload.id
    };

// La actualización usa el mismo flujo que CREATE
// cuando activeId está presente
```

##### 4. **DELETE (Eliminar)**
```typescript
case 'delete-activity':
    return {
        ...state,
        actividades: state.actividades.filter(
            actividad => actividad.id !== action.payload.id
        )
    };
```

##### 5. **RESET (Reiniciar)**
```typescript
case 'restart-app':
    return {
        actividades: [],
        activeId: ''
    };
```

---

## 🔄 Sincronización con LocalStorage

### Guardado Automático
```typescript
// En App.tsx
useEffect(() => {
    if (state?.actividades) {
        localStorage.setItem('activities', JSON.stringify(state.actividades));
    }
}, [state?.actividades]);
```

**Características:**
- **Trigger:** Cada cambio en el array de actividades
- **Formato:** JSON.stringify() para serialización
- **Persistencia:** Automática, sin intervención del usuario
- **Recuperación:** Al cargar la aplicación

---

## 📊 Consultas y Cálculos Importantes

### 1. **Cálculo de Calorías Consumidas**
```typescript
// En CalorieTracker.tsx
const caloriesConsumed = useMemo(() =>
    actividades.reduce((total, actividad) =>
        actividad.categorias === 1 ? total + actividad.calorias : total, 0
    ), [actividades]
);
```

### 2. **Cálculo de Calorías Quemadas**
```typescript
const caloriesFire = useMemo(() =>
    actividades.reduce((total, actividad) =>
        actividad.categorias === 2 ? total + actividad.calorias : total, 0
    ), [actividades]
);
```

### 3. **Balance Calórico Total**
```typescript
const caloriesTotal = useMemo(() => 
    caloriesConsumed - caloriesFire, [actividades]
);
```

### 4. **Filtrado por Categoría**
```typescript
// Para mostrar nombre de categoría
const categoryName = useMemo(() => 
    (categoryId: Actividades['categorias']) => 
        categorias.find(cat => cat.id === categoryId)?.name ?? '', 
    [activities]
);
```

### 5. **Validación de Datos**
```typescript
// En Form.tsx
const EsValidaActividad = () => {
    const {name, calorias} = actividad;
    return name.trim() !== '' && calorias > 0;
};
```

---

## 🔍 Índices y Optimizaciones

### Optimizaciones Implementadas:

1. **useMemo para Cálculos**
   - Evita recálculos innecesarios
   - Dependencias específicas para re-renderizado eficiente

2. **UUID para IDs Únicos**
   - Previene conflictos de identificadores
   - Permite operaciones seguras de edición/eliminación

3. **Validación en Tiempo Real**
   - Previene datos inválidos en el almacenamiento
   - Mejora la experiencia de usuario

---

## 🚨 Limitaciones del Sistema Actual

### Limitaciones de LocalStorage:

1. **Capacidad:** ~5-10MB por dominio
2. **Sincronización:** Solo local, no entre dispositivos
3. **Backup:** Depende del usuario (exportar/importar)
4. **Pérdida de Datos:** Si se borra el historial del navegador

### Datos No Persistentes:
- Estado de edición (`activeId`)
- Estados temporales del formulario
- Configuraciones de UI

---

## 🔮 Migración Futura a Base de Datos

### Posible Estructura SQL (para v2.0):

```sql
-- Tabla de Usuarios (futura)
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de Categorías
CREATE TABLE categories (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(20) NOT NULL -- 'food' or 'exercise'
);

-- Tabla de Actividades
CREATE TABLE activities (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    category_id INTEGER REFERENCES categories(id),
    name VARCHAR(255) NOT NULL,
    calories INTEGER NOT NULL CHECK (calories > 0),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices para optimización
CREATE INDEX idx_activities_user_date ON activities(user_id, created_at);
CREATE INDEX idx_activities_category ON activities(category_id);
```

### Consultas SQL Equivalentes:

```sql
-- Calorías consumidas por usuario hoy
SELECT SUM(calories) as consumed_calories
FROM activities a
JOIN categories c ON a.category_id = c.id
WHERE a.user_id = ? 
  AND c.type = 'food'
  AND DATE(a.created_at) = CURRENT_DATE;

-- Calorías quemadas por usuario hoy
SELECT SUM(calories) as burned_calories
FROM activities a
JOIN categories c ON a.category_id = c.id
WHERE a.user_id = ? 
  AND c.type = 'exercise'
  AND DATE(a.created_at) = CURRENT_DATE;

-- Balance calórico diario
SELECT 
    COALESCE(SUM(CASE WHEN c.type = 'food' THEN a.calories ELSE 0 END), 0) as consumed,
    COALESCE(SUM(CASE WHEN c.type = 'exercise' THEN a.calories ELSE 0 END), 0) as burned,
    COALESCE(SUM(CASE WHEN c.type = 'food' THEN a.calories ELSE -a.calories END), 0) as balance
FROM activities a
JOIN categories c ON a.category_id = c.id
WHERE a.user_id = ?
  AND DATE(a.created_at) = CURRENT_DATE;
```

---

## 📝 Notas de Mantenimiento

### Backup y Recuperación:
- **Actual:** Usuario debe hacer capturas de pantalla
- **Recomendado:** Implementar exportación JSON
- **Futuro:** Sincronización automática en la nube

### Monitoreo:
- **Tamaño de datos:** Verificar límites de localStorage
- **Integridad:** Validar JSON al cargar
- **Performance:** Monitorear tiempo de cálculos con grandes datasets

---

*Última actualización: 9 de Enero, 2025*  
*Sistema de datos: LocalStorage v1.0*  
*Próxima revisión: Al implementar autenticación de usuarios*