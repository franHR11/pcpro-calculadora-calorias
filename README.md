
# PCPro Calculadora de Calorías 🥗🏋️‍♂️

## 📌 DESCRIPCIÓN DEL PROYECTO

**PCPro Calculadora de Calorías** es una aplicación web moderna y eficiente diseñada para llevar un control preciso del consumo y gasto calórico diario. Permite a los usuarios registrar sus comidas y actividades físicas, obteniendo un balance calórico en tiempo real para alcanzar sus objetivos de salud y fitness.

Su enfoque profesional y minimalista la convierte en la herramienta ideal para:
- **Entusiastas del fitness** que necesitan un seguimiento calórico sin complicaciones.
- **Profesionales de la salud y nutricionistas** para monitorizar el progreso de sus clientes.
- **Cualquier persona** que busque una forma sencilla y directa de gestionar su ingesta calórica diaria.

---

## ✨ CARACTERÍSTICAS DESTACADAS

- 🥑 **Registro Dual:** Añade tanto comidas como ejercicios de forma intuitiva.
- 📊 **Balance en Tiempo Real:** Visualiza al instante tu consumo, gasto y el balance neto de calorías.
- 💾 **Persistencia Local:** Tus datos se guardan automáticamente en el navegador. ¡Sin necesidad de cuentas ni internet!
- ✏️ **Gestión Completa:** Edita y elimina registros con un solo clic.
- 📱 **Diseño Responsive:** Interfaz perfectamente adaptada a ordenadores, tablets y móviles.
- ⚙️ **Tecnología Moderna:** Construida con React 19, TypeScript y Vite para un rendimiento excepcional.

---

## ⚙️ FUNCIONALIDADES

- **Formulario Inteligente:** Un único formulario para registrar comidas y ejercicios, con campos que se adaptan a la categoría seleccionada.
- **Listado Dinámico de Actividades:** Las actividades se muestran en una lista clara y organizada, diferenciadas por color según la categoría.
- **Tracker de Calorías:** Un panel superior que resume las calorías consumidas, quemadas y la diferencia total, actualizándose al instante.
- **Persistencia de Datos:** Utiliza `localStorage` para que los datos no se pierdan al recargar la página.
- **Edición y Eliminación:** Controles directos en cada actividad para modificarla o eliminarla del registro.
- **Reinicio de la App:** Un botón para limpiar todos los datos y empezar de cero.

---

## 🔧 TECNOLOGÍAS UTILIZADAS

- ⚛️ **React 19:** Para una interfaz de usuario moderna y reactiva.
- 🧩 **TypeScript:** Para un código robusto, escalable y con tipado estático.
- ⚡ **Vite:** Entorno de desarrollo ultrarrápido y empaquetador de última generación.
- 🎨 **TailwindCSS:** Framework CSS utility-first para un diseño rápido y responsive.
- 🦸 **Heroicons:** Colección de iconos SVG de alta calidad.
- 🆔 **UUID:** Para la generación de identificadores únicos para cada actividad.
- 💾 **LocalStorage API:** Para la persistencia de datos en el navegador.

---

## 📁 ESTRUCTURA DEL PROYECTO

La estructura del proyecto está organizada para ser clara y mantenible:

```
pcpro-calculadora-calorias/
├── src/
│   ├── components/      # Componentes reutilizables (Form, CalorieTracker, etc.)
│   ├── data/            # Datos estáticos (categorías)
│   ├── reducers/        # Lógica de estado con useReducer
│   ├── types/           # Definiciones de tipos de TypeScript
│   ├── App.tsx          # Componente principal de la aplicación
│   └── main.tsx         # Punto de entrada de la aplicación
├── public/              # Archivos públicos
├── package.json         # Dependencias y scripts del proyecto
└── vite.config.ts       # Configuración de Vite
```

---

## 🚀 INSTRUCCIONES DE USO

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/pcpro-calculadora-calorias.git
    cd pcpro-calculadora-calorias/pcpro-calculadora-calorias
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener Node.js instalado. Luego, ejecuta:
    ```bash
    npm install
    ```

3.  **Levantar el entorno local:**
    Este comando iniciará el servidor de desarrollo de Vite.
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

4.  **Hacer build para producción:**
    Este comando generará una versión optimizada del proyecto en la carpeta `dist/`.
    ```bash
    npm run build
    ```

---

## 📞 SOPORTE Y CONTACTO

- **Autor:** Francisco José Herreros (franHR)
- **Email:** desarrollo@pcprogramacion.es
- **Web:** https://www.pcprogramacion.es
- **LinkedIn:** [Francisco José Herreros](https://www.linkedin.com/in/francisco-jose-herreros/)

---

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

---

## 🔝 HASHTAGS RECOMENDADOS PARA LINKEDIN

`#ReactJS #TypeScript #Vite #TailwindCSS #Frontend #WebDevelopment #CalorieTracker #FitnessApp #OpenSource #DeveloperPortfolio #franHR #PCProgramacion`
