# MEMORIAS - PCPro Calculadora de Calorías

## 📝 Registro de Cambios y Decisiones Clave

### Fecha: 9 de Enero, 2025

---

## 🎯 Decisiones de Diseño Principales

### 1. **Arquitectura de la Aplicación**
**Decisión:** Usar React con useReducer para manejo de estado
**Razón:** 
- Proporciona un control centralizado del estado de la aplicación
- Facilita el manejo de acciones complejas (agregar, editar, eliminar actividades)
- Mejor escalabilidad que useState para múltiples estados relacionados

**Implementación:**
- `activity-reducer.ts`: Contiene toda la lógica de estado
- Acciones: `guardar-actividad`, `set-activeID`, `delete-activity`, `restart-app`

### 2. **Persistencia de Datos**
**Decisión:** Usar localStorage del navegador
**Razón:**
- No requiere servidor ni base de datos
- Funciona completamente offline
- Datos persisten entre sesiones
- Simplicidad de implementación

**Implementación:**
```typescript
useEffect(() => {
  if (state?.actividades) {
    localStorage.setItem('activities', JSON.stringify(state.actividades))
  }
}, [state?.actividades])
```

### 3. **Categorización Simple**
**Decisión:** Solo 2 categorías: Comida (1) y Ejercicio (2)
**Razón:**
- Mantiene la aplicación simple y fácil de usar
- Evita la complejidad de múltiples categorías
- Suficiente para el propósito principal de balance calórico

### 4. **Diseño Visual**
**Decisión:** Usar TailwindCSS con esquema de colores verde (lime)
**Razón:**
- Verde asociado con salud y bienestar
- TailwindCSS proporciona diseño responsive automático
- Clases utilitarias permiten desarrollo rápido
- Consistencia visual en toda la aplicación

---

## 🔄 Historial de Cambios

### Versión 1.0.0 - Implementación Inicial
**Fecha:** Enero 2025

#### ✅ Funcionalidades Implementadas:
1. **Formulario de Registro**
   - Campos: Categoría, Nombre de Actividad, Calorías
   - Validación en tiempo real
   - Limpieza automática después del envío

2. **Tracker de Calorías**
   - Contador de calorías consumidas
   - Contador de calorías quemadas
   - Cálculo automático de diferencia
   - Componente CalorieDisplay reutilizable

3. **Lista de Actividades**
   - Visualización de todas las actividades
   - Categorización visual con colores
   - Opciones de edición y eliminación
   - Iconos de Heroicons para acciones

4. **Persistencia de Datos**
   - Guardado automático en localStorage
   - Carga automática al iniciar la aplicación
   - Función de reinicio completo

#### 🎨 Decisiones de UI/UX:
- **Header fijo** con título y botón de reinicio
- **Sección verde** para el formulario (asociado con entrada/comida)
- **Sección gris oscura** para el tracker (neutral, informativo)
- **Sección blanca** para la lista (limpia, organizada)
- **Diseño responsive** con breakpoints md: para tablets/desktop

---

## 🚀 Creación de Landing Page
**Fecha:** 9 de Enero, 2025

### Decisión: Crear Landing Page Profesional
**Objetivo:** Comercializar el proyecto como producto vendible

#### Estructura Implementada:
1. **Sección Hero**
   - Título impactante sobre control calórico
   - Subtítulo explicativo del valor
   - CTAs principales: "Comprar Ahora" y "Ver Demo"
   - Imagen placeholder para screenshot principal

2. **Carrusel de Screenshots**
   - 6 slides con funcionalidades específicas
   - Navegación manual y automática
   - Descripciones detalladas de cada característica

3. **Funcionalidades Clave**
   - 6 tarjetas con iconos FontAwesome
   - Hover effects para interactividad
   - Descripción clara de beneficios

4. **Sección Beneficios**
   - Formato "Problema → Solución"
   - 4 comparativas principales
   - Enfoque en diferenciación competitiva

5. **Testimonios**
   - 3 reseñas ficticias con fotos de Unsplash
   - Carrusel automático cada 5 segundos
   - Calificaciones de 5 estrellas

6. **Planes de Precios**
   - 3 tiers: Básico ($19.99), Pro ($29.99), Premium ($49.99)
   - Plan Pro destacado como "MÁS POPULAR"
   - Garantía de 30 días incluida

7. **FAQ Interactivo**
   - 6 preguntas frecuentes
   - Acordeón con Alpine.js
   - Respuestas detalladas sobre funcionalidad

8. **CTA Final y Footer**
   - Llamada a la acción reforzada
   - Footer completo con enlaces y contacto
   - Información legal y redes sociales

#### Tecnologías de la Landing:
- **HTML5 semántico** para SEO
- **TailwindCSS** vía CDN para consistencia
- **Alpine.js** para interactividad
- **FontAwesome** para iconos profesionales
- **Animaciones CSS** personalizadas

---

## 📊 Métricas y Objetivos

### Objetivos de Conversión:
- **Tasa de conversión objetivo:** 3-5%
- **Plan más vendido esperado:** Pro ($29.99)
- **Público objetivo:** Personas interesadas en fitness y nutrición

### KPIs a Monitorear:
- Tiempo en página
- Scroll depth
- Clicks en CTAs
- Conversiones por plan
- Tasa de rebote

---

## 🔮 Decisiones Futuras Pendientes

### Posibles Mejoras v2.0:
1. **Base de datos de alimentos** (opcional)
2. **Gráficos de progreso** temporal
3. **Exportación de datos** (CSV, PDF)
4. **Metas calóricas** personalizables
5. **Integración con wearables** (Fitbit, Apple Watch)
6. **Modo oscuro** para mejor UX nocturna

### Consideraciones Técnicas:
- **PWA** para instalación en móviles
- **Sincronización en la nube** (opcional)
- **Múltiples perfiles** de usuario
- **Recordatorios** push

---

## 📋 Lecciones Aprendidas

### ✅ Qué Funcionó Bien:
1. **Simplicidad del diseño** - Fácil de entender y usar
2. **Persistencia local** - No requiere configuración compleja
3. **Arquitectura con useReducer** - Estado predecible y mantenible
4. **TailwindCSS** - Desarrollo rápido y responsive

### ⚠️ Desafíos Encontrados:
1. **Validación de entrada** - Asegurar datos numéricos válidos
2. **Gestión de IDs únicos** - Uso de UUID para evitar conflictos
3. **Responsive design** - Ajustar para múltiples tamaños de pantalla

### 🎯 Recomendaciones:
1. Mantener la simplicidad como principio rector
2. Priorizar la experiencia de usuario sobre funcionalidades complejas
3. Documentar todas las decisiones de diseño
4. Testear en múltiples dispositivos y navegadores

---

*Última actualización: 9 de Enero, 2025*
*Próxima revisión programada: Según feedback de usuarios*