# PCPro Calculadora de Calorías

## 🚀 Sección Comercial

**¡Controla tu balance calórico de forma inteligente!** 📊

La aplicación web más simple y efectiva para registrar comidas y ejercicios, calcular calorías automáticamente y mantener un estilo de vida saludable. Desarrollada con React, TypeScript y TailwindCSS.

**Perfecta para compartir en redes sociales:**
- ✅ Interfaz ultra-simple con solo 3 campos
- ✅ Funciona offline - sin conexión requerida
- ✅ Guardado automático en el navegador
- ✅ Diseño responsive para todos los dispositivos
- ✅ Balance calórico en tiempo real

---

## 📋 Descripción y Características

### ¿Qué es PCPro Calculadora de Calorías?

Es una aplicación web moderna desarrollada con React y TypeScript que permite a los usuarios llevar un control preciso de su balance calórico diario. La aplicación se enfoca en la simplicidad y efectividad, eliminando la complejidad de otras herramientas similares.

### 🎯 Características Principales

#### 1. **Registro Intuitivo de Actividades**
- Formulario simple con 3 campos: Categoría, Actividad y Calorías
- Categorización automática entre "Comida" y "Ejercicio"
- Validación en tiempo real de los datos ingresados
- Interfaz limpia y fácil de usar

#### 2. **Seguimiento en Tiempo Real**
- Contador dinámico de calorías consumidas
- Contador dinámico de calorías quemadas en ejercicio
- Cálculo automático del balance calórico (diferencia)
- Visualización clara con colores distintivos

#### 3. **Gestión Completa de Datos**
- Lista organizada de todas las actividades registradas
- Opciones para editar cualquier entrada existente
- Función de eliminación con confirmación
- Categorización visual con colores (verde para comida, naranja para ejercicio)

#### 4. **Persistencia de Datos**
- Almacenamiento automático en localStorage del navegador
- Los datos persisten entre sesiones
- No requiere conexión a internet para funcionar
- Función de reinicio completo cuando sea necesario

#### 5. **Diseño Responsive**
- Optimizado para móviles, tablets y escritorio
- Interfaz adaptativa que se ajusta a cualquier pantalla
- Experiencia de usuario consistente en todos los dispositivos

#### 6. **Tecnología Moderna**
- Desarrollado con React 19 y TypeScript
- Estilizado con TailwindCSS 4
- Iconos de Heroicons para una interfaz profesional
- Arquitectura basada en useReducer para manejo de estado

---

## 🛠️ Sección Técnica

### Requisitos del Sistema

- **Navegador:** Cualquier navegador web moderno (Chrome, Firefox, Safari, Edge)
- **JavaScript:** Habilitado
- **Almacenamiento:** LocalStorage disponible
- **Conexión:** No requerida (funciona offline)

### Instalación y Configuración

#### Para Usuarios Finales

1. **Descarga el archivo `index.html`** de la landing page
2. **Abre el archivo** en tu navegador web favorito
3. **¡Listo!** La aplicación está funcionando

#### Para Desarrolladores

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio del proyecto
cd pcpro-calculadora-calorias

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

### Estructura del Proyecto

```
pcpro-calculadora-calorias/
├── src/
│   ├── components/
│   │   ├── Form.tsx              # Formulario de registro
│   │   ├── CalorieTracker.tsx    # Contador de calorías
│   │   ├── CalorieDisplay.tsx    # Componente de visualización
│   │   └── ActvityList.tsx       # Lista de actividades
│   ├── data/
│   │   └── categorias.ts         # Definición de categorías
│   ├── reducers/
│   │   └── activity-reducer.ts   # Lógica de estado
│   ├── types/
│   │   └── index.ts              # Definiciones de tipos
│   ├── App.tsx                   # Componente principal
│   ├── main.tsx                  # Punto de entrada
│   └── index.css                 # Estilos globales
├── docs/                         # Documentación
├── public/                       # Archivos públicos
├── index.html                    # Landing page
└── package.json                  # Configuración del proyecto
```

### Tecnologías Utilizadas

- **Frontend Framework:** React 19.1.0
- **Lenguaje:** TypeScript 5.8.3
- **Estilos:** TailwindCSS 4.1.11
- **Iconos:** Heroicons 2.2.0
- **Build Tool:** Vite 7.0.4
- **ID Generation:** UUID 11.1.0

### Uso de la Aplicación

#### 1. Registrar una Comida
1. Selecciona "Comida" en el campo Categoría
2. Escribe el nombre de la comida (ej: "Desayuno - Tostadas")
3. Ingresa las calorías (ej: 350)
4. Haz clic en "Guardar"

#### 2. Registrar Ejercicio
1. Selecciona "Ejercicio" en el campo Categoría
2. Describe la actividad (ej: "Correr 30 minutos")
3. Ingresa las calorías quemadas (ej: 300)
4. Haz clic en "Guardar"

#### 3. Monitorear el Balance
- **Calorías Consumidas:** Suma total de todas las comidas
- **Calorías de Ejercicio:** Suma total de todas las actividades físicas
- **Diferencia:** Resultado de consumidas menos quemadas

#### 4. Gestionar Actividades
- **Editar:** Haz clic en el ícono de lápiz para modificar una entrada
- **Eliminar:** Haz clic en el ícono de X para borrar una actividad
- **Reiniciar:** Usa el botón "Reiniciar App" para borrar todo el historial

### Características Técnicas Avanzadas

- **Estado Global:** Manejo centralizado con useReducer
- **Persistencia:** Sincronización automática con localStorage
- **Validación:** Controles de entrada en tiempo real
- **Optimización:** Uso de useMemo para cálculos eficientes
- **Accesibilidad:** Estructura semántica y navegación por teclado

### Soporte y Mantenimiento

- **Actualizaciones:** Disponibles según el plan adquirido
- **Soporte:** Email, teléfono (según plan)
- **Documentación:** Incluida en todos los planes
- **Garantía:** 30 días de devolución del dinero

---

## 📞 Contacto y Soporte

- **Email:** info@pcpro-calculadora.com
- **Teléfono:** +34 900 123 456
- **Ubicación:** Madrid, España
- **Horario de Soporte:** Lunes a Viernes, 9:00 - 18:00 CET

---

*Desarrollado con ❤️ para ayudarte a mantener un estilo de vida saludable*