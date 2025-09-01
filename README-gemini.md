
# 📊 PCPro - Calculadora de Calorías

## 📌 DESCRIPCIÓN DEL PROYECTO
**PCPro - Calculadora de Calorías** es una aplicación web interactiva diseñada para llevar un registro detallado del consumo y gasto calórico diario. Permite a los usuarios añadir alimentos consumidos y actividades físicas realizadas, calculando automáticamente el balance calórico para ayudarles a alcanzar sus objetivos de salud y bienestar.

Está pensada para cualquier persona interesada en monitorizar su ingesta calórica, desde deportistas que buscan optimizar su rendimiento hasta usuarios que desean mantener un estilo de vida saludable.

## ✨ CARACTERÍSTICAS DESTACADAS
- Interfaz limpia y fácil de usar.
- Registro de comidas y ejercicios.
- Cálculo en tiempo real de calorías consumidas, quemadas y el balance total.
- Edición y eliminación de registros.
- Persistencia de datos en el navegador para que no pierdas tu progreso.
- Diseño responsivo que se adapta a cualquier dispositivo.

## ⚙️ FUNCIONALIDADES
- **Formulario de Actividades:** Permite añadir nuevas comidas o ejercicios, especificando la categoría, el nombre y la cantidad de calorías.
- **Listado de Actividades:** Muestra un resumen de todas las actividades registradas, diferenciadas por color según la categoría (comida o ejercicio).
- **Contador de Calorías:** Visualiza de forma clara las calorías consumidas, las quemadas y la diferencia neta.
- **Persistencia de Datos:** Utiliza `localStorage` para guardar las actividades, de modo que la información está disponible incluso después de cerrar el navegador.
- **Gestión de Estado:** Maneja el estado de la aplicación de forma eficiente mediante el hook `useReducer` de React.

## 🔧 TECNOLOGÍAS UTILIZADAS
- ⚛️ **React:** Biblioteca principal para la construcción de la interfaz de usuario.
- 🧩 **TypeScript:** Para un desarrollo más robusto y con tipado estático.
- ⚡ **Vite:** Entorno de desarrollo rápido y moderno.
- 🎨 **Tailwind CSS:** Framework de CSS para un diseño rápido y personalizable.
- 📦 **`useReducer`:** Para la gestión del estado de la aplicación.
- 🆔 **`uuid`:** Para la generación de identificadores únicos.
- 🦸 **`@heroicons/react`:** Para los iconos de la interfaz.

## 📁 ESTRUCTURA DEL PROYECTO
```
pcpro-calculadora-calorias/
├── src/
│   ├── components/       # Componentes de React
│   │   ├── ActvityList.tsx
│   │   ├── CalorieDisplay.tsx
│   │   ├── CalorieTracker.tsx
│   │   └── Form.tsx
│   ├── data/             # Datos estáticos (categorías)
│   │   └── categorias.ts
│   ├── reducers/         # Lógica de estado con Reducers
│   │   └── activity-reducer.ts
│   └── types/            # Definiciones de tipos de TypeScript
│       └── index.ts
├── public/               # Archivos estáticos
├── index.html            # Punto de entrada de la aplicación
├── package.json          # Dependencias y scripts
└── vite.config.ts        # Configuración de Vite
```

## 🚀 INSTRUCCIONES DE USO
1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/pcpro-calculadora-calorias.git
    ```
2.  **Instalar dependencias:**
    ```bash
    cd pcpro-calculadora-calorias/pcpro-calculadora-calorias
    npm install
    ```
3.  **Levantar el entorno local:**
    ```bash
    npm run dev
    ```
4.  **Abrir en el navegador:**
    `http://localhost:5173` (o el puerto que indique Vite)

### Scripts disponibles
-   `npm run dev`: Inicia el servidor de desarrollo.
-   `npm run build`: Compila el proyecto para producción.
-   `npm run lint`: Ejecuta el linter para revisar el código.
-   `npm run preview`: Sirve el proyecto compilado localmente.

## 📞 Soporte y Contacto
-   **🆘 Obtener Ayuda:** Para cualquier duda o problema, contacta con desarrollo@pcprogramacion.es.
-   **📅 Año:** 2025
-   **📨 Autor:** Francisco José Herreros (franHR)
-   **📧 Email:** desarrollo@pcprogramacion.es
-   **🌐 Web:** https://www.pcprogramacion.es
-   **💼 LinkedIn:** Francisco José Herreros

## 🖼️ Imágenes del proyecto
![Imagen 1](1.png)
![Imagen 2](2.png)
![Imagen 3](3.png)
![Imagen 4](4.png)
![Imagen 5](5.png)

## 🛡️ LICENCIA
**Español**
Copyright (c) 2025 Francisco José Herreros (franHR) / PCProgramación

Todos los derechos reservados.

Este software es propiedad de Francisco José Herreros (franHR), desarrollador de PCProgramación (https://www.pcprogramacion.es). No está permitido copiar, modificar, distribuir o utilizar este código, ni total ni parcialmente, sin una autorización expresa y por escrito del autor.

El acceso a este repositorio tiene únicamente fines de revisión, auditoría o demostración, y no implica la cesión de ningún derecho de uso o explotación.

Para solicitar una licencia o permiso de uso, contacta con: desarrollo@pcprogramacion.es

**English**
Copyright (c) 2025 Francisco José Herreros (franHR) / PCProgramación

All rights reserved.

This software is the property of Francisco José Herreros (franHR), developer of PCProgramación (https://www.pcprogramacion.es). It is not allowed to copy, modify, distribute or use this code, either totally or partially, without express and written authorization from the author.

Access to this repository has only review, audit or demonstration purposes, and does not imply the transfer of any right of use or exploitation.

To request a license or permission to use, contact: desarrollo@pcprogramacion.es

## 🔝 HASHTAGS RECOMENDADOS PARA LINKEDIN
`#React #TypeScript #Vite #TailwindCSS #Frontend #DesarrolloWeb #JavaScript #Portfolio #Developer #PCProgramacion`
