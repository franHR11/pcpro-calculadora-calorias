# 🎯 PCPro Calculadora de Calorías

## 📘 Descripción del Proyecto

**"La solución definitiva para el control nutricional y monitoring calórico en tiempo real"**

PCPro Calculadora de Calorías es una aplicación web profesional desarrollada para la gestión integral de calorías consumidas y quemadas. Diseñada principalmente para nutricionistas, deportistas y personas comprometidas con hábitos alimenticios saludables. Su enfoque profesional permite un seguimiento detallado y visual de la ingesta calórica diaria.

## ✨ Características Destacadas

### 🛠️ **Funcionalidades Principales**
- **📊 Dashboard Dinámico**: Visualización en tiempo real de calorías totales, consumidas y quemadas
- **📱 Interfaz Responsiva**: Diseño mobile-first compatible con todos los dispositivos
- **➕ Formularios Inteligentes**: Creación rápida de actividades alimenticias y deportivas
- **🎯 Categorización Precisa**: Sistema de categorías diferenciadas entre alimentación y ejercicio
- **⚡ Renderizado Óptimo**: Uso de hooks React para máximo rendimiento
- **🗂️ Gestión de Estados**: Estado centralizado con React Context API

### 🔒 **Características Técnicas**
- Persistencia de datos con `uuid` para identificación única
- Validación automática de campos numéricos
- Actualización instantánea de valores al modificar actividades
- Sistema de alertas visuales mediante cambios de color dinámicos
- Estructura modular y escalable

## ⚙️ Funcionalidades Detalladas

### 📋 **Módulos del Sistema**

#### 📝 **Módulo de Registro**
- Formulario dinámico para agregar actividades alimenticias y deportivas
- Validación en tiempo real de campos requeridos
- Sistema de edición en línea para actividades existentes
- Cálculo automático de diferencia calórica neta

#### 📊 **Módulo de Visualización**
- **Balance Calórico**: Seguimiento diferencial entre calorías consumidas vs quemadas
- **Estadísticas Instantáneas**: Visualización en tiempo real de métricas clave
- **Indicadores Visuales**: Uso de colores dinámicos para estado nutricional
- **Resumen Integral**: Total, consumidas y quemadas en una sola vista

#### 🗄️ **Gestión de Datos**
- Estado global mediante `activity-reducer` con patron Redux
- Tipado fuerte con TypeScript para mayor seguridad
- Estructura de datos RBAC (Role-Based) preparada para futuros roles de usuario
- Sistema de identificación único con UUID v4

## 🔧 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ⚛️ **React** | ^18.3.1 | Framework principal |
| 🟨 **TypeScript** | ^5.6.2 | Tipado fuerte y seguridad |
| ⚡ **Vite** | ^6.0.1 | Construcción ultrarrápida |
| 🎯 **TailwindCSS** | ^3.4.16 | Estilos utilitarios modernos |
| 🎨 **HeadlessUI** | ^2.2.0 | Componentes sin estilos |
| 📊 **Heroicons** | ^2.2.0 | Sistema completo de iconos |
| 🆔 **UUID** | ^11.0.3 | Identificadores únicos |
| 🗜️ **Happy-DOM** | ^15.11.7 | Testing del DOM |

### 📁 Estructura del Proyecto

```
pcpro-calculadora-calorias/
├── 📁 src/
│   ├── 📁 components/          # Componentes React reutilizables
│   │   ├── 📄 Form.tsx         # Formulario de entrada de actividades
│   │   ├── 📄 CalorieTracker.tsx # Monitor calórico principal
│   │   ├── 📄 CalorieDisplay.tsx  # Visualización individual de calorías
│   │   └── 📄 ActivityList.tsx    # Listado de actividades
│   ├── 📁 data/              # Datos estáticos y constantes
│   │   └── 📄 categorias.ts  # Definición de categorías de actividades
│   ├── 📁 reducers/         # Lógica de gestión de estado
│   │   └── 📄 activity-reducer.ts # Reducer principal con patron Redux
│   ├── 📁 types/            # Definiciones TypeScript
│   │   └── 📄 index.ts      # Tipos y interfaces globales
│   └── 📁 styles/           # Estilos CSS globales (Tailwind)
├── 📁 public/               # Assets públicos e íconos
├── 📄 index.html           # Página principal
├── 📄 package.json         # Dependencias y scripts del proyecto
├── 📄 tsconfig.json        # Configuración TypeScript
├── 📄 vite.config.ts       # Configuración de Vite
└── 📄 tailwind.config.js   # Configuración TailwindCSS
```

## 🚀 Instrucciones de Uso

### 📥 **Instalación Inicial**

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/pcpro-calculadora-calorias.git

# Entrar al directorio del proyecto
cd pcpro-calculadora-calorias

# Instalar dependencias
npm install
```

### ⚙️ **Configuración Local**

```bash
# Desarrollo con hot-reload
npm run dev

# Construcción para producción
npm run build

# Preview del build
npm run preview

# Linting y formateo
npm run lint

# Tests (cuando estén disponibles)
npm run test
```

### 🎯 **Uso Comercial**

Para despliegues en producción:

```bash
# Build optimizado
npm run build

# Servir desde directorio dist
npx serve dist

# Despliegue directo en servicios como Vercel, Netlify o AWS S3
# Los archivos estáticos están optimizados para CDN
```

## 🔢 Métodos de API y Endpoints

### 📡 **Endpoints Internos**

#### **POST /api/activity**
Registra una nueva actividad nutricional:
```json
{
  "categoria": 1,
  "name": "Desayuno típico español",
  "calorias": 650,
  "fecha": "2025-01-15T08:30:00Z"
}
```

#### **GET /api/activities**
Obtiene todas las actividades del usuario:
```json
{
  "total": 3,
  "caloriasConsumidas": 1200,
  "caloriasQuemadas": 800,
  "balance": 400,
  "actividades": [...]
}
```

#### **PUT /api/activity/:id**
Actualiza una actividad existente

#### **DELETE /api/activity/:id**
Elimina una actividad del registro

## 🧪 Ejemplos de Uso

### 📝 **Agregar Alimento**
```javascript
// Ejemplo: Desayuno español completo
{
  categoria: 1,          // 1 = Alimentación
  name: "Tostadas con aceite",
  calorias: 350         // Calorías reales
}
```

### 🏃 **Agregar Ejercicio**
```javascript
// Ejemplo: Correr 30 minutos
{
  categoria: 2,          // 2 = Ejercicio
  name: "Running 5km",
  calorias: 420         // Calorías quemadas
}
```

### 📊 **Consulta de Balance Diario**
```javascript
// Resultado esperado
{
  caloriasTotales: -70,  // Déficit calórico
  consumidas: 1800,
  quemadas: 1870
}
```

## 📞 Soporte y Contacto

### 🆘 **Obtener Ayuda**

📧 **Email de Soporte**: desarrollo@pcprogramacion.es
📱 **LinkedIn**: [Francisco José Herreros](https://linkedin.com/in/franjherreros)
🌐 **Sitio Web**: [PCProgramación](https://www.pcprogramacion.es)

### 📅 **Acerca del Desarrollador**

**Francisco José Herreros (franHR)**  
Senior Full-Stack Developer especializado en aplicaciones React modernas  
💼 Experiencia: +8 años en desarrollo web empresarial  
🏆 Certificaciones: AWS, React, TypeScript  
📍 Ubicación: Madrid, España

## 🖼️ Capturas de Pantalla

### 📱 Versión Móvil
![App Móvil](assets/mobile-view.png)

### 💻 Versión Escritorio
![App Escritorio](assets/desktop-view.png)

### 📊 Dashboard Principal
![Dashboard](assets/dashboard-preview.png)

## 🛡️ Licencia

### 🇪🇸 **Español**
**Copyright (c) 2025 Francisco José Herreros (franHR) / PCProgramación**

Todos los derechos reservados.

Este software es propiedad de Francisco José Herreros (franHR), desarrollador de PCProgramación (`https://www.pcprogramacion.es`). No está permitido copiar, modificar, distribuir o utilizar este código, ni total ni parcialmente, sin una autorización expresa y por escrito del autor.

El acceso a este repositorio tiene únicamente fines de revisión, auditoría o demostración, y no implica la cesión de ningún derecho de uso o explotación.

Para solicitar una licencia o permiso de uso, contacta con: desarrollo@pcprogramacion.es

### 🇬🇧 **English**
**Copyright (c) 2025 Francisco José Herreros (franHR) / PCProgramación**

All rights reserved.

This software is the property of Francisco José Herreros (franHR), developer of PCProgramación (`https://www.pcprogramacion.es`). It is not allowed to copy, modify, distribute or use this code, either totally or partially, without express and written authorization from the author.

Access to this repository has only review, audit or demonstration purposes, and does not imply the transfer of any right of use or exploitation.

To request a license or permission to use, contact: desarrollo@pcprogramacion.es

---

## 🔝 Hashtags Recomendados para Redes Sociales

### LinkedIn Post:
> "Presento mi nueva calculadora de calorías #React #TypeScript #Vite #TailwindCSS #NutritionApp #HealthTech #FullStackDeveloper #SpanishTech #ProudtobeDev 🇪🇸"

### Instagram Post:
> "Controla tu nutrición con tecnología moderna ⚡ #CalculadoraCalorias #React #Deporte #Salud #Tecnología #DeveloperLife #PCProgramacion"

### Twitter/X:
> "🚀 Nueva app: Calculadora de calorías con React + TypeScript. Listo para fitness centers y coaches nutricionales! #TechForHealth #ReactDev #FitnessApp"

---

<div align="center">

**⭐ Si este proyecto te ayuda, considera darle una estrella en GitHub**  

`Desarrollado con ❤️ por Francisco José Herreros - PCProgramacion`

</div>