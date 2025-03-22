# Prueba Front-End Inditex

## 🚀 Descripción del Proyecto

Este proyecto es una aplicación front-end construida con **React**. Para los estilos, se utiliza **Tailwind CSS**. Además, se usó **Vite** ya que simplifica la configuración y el desarrollo al ofrecer una configuración mínima por defecto. También integra **TanStack React Query** para la obtención de datos y almacenamiento en caché, **Zustand** para la gestión del estado global de la aplicación y **React Router** para la navegación entre páginas.

---

## 📦 Explicación de las Dependencias

Aquí se explica por qué se utilizan cada una de las dependencias en este proyecto:

### **Dependencias Principales**

- **react-router**: Manejo de navegación dentro de la aplicación, facilitando la gestión de páginas.
- **@tanstack/react-query**: Obtención de datos de manera eficiente y almacenamiento de los mismos en caché.
- **zustand**: Gestión del estado global de la aplicación de manera sencilla.
- **tailwindcss**: Framework CSS que permite un desarrollo rápido de UI con un estilo mínimo personalizado.
- **dompurify**: Manejo de cualquier HTML insertado dinámicamente para prevenir ataques XSS.
- **moment**: Manejo y formateo de fechas y horas de manera sencilla.

### **Dependencias de Desarrollo**

- **vite**: Una herramienta de compilación rápida que mejora la velocidad de desarrollo.
- **typescript**: Añade tipados, mejorando la fiabilidad y el mantenimiento del código.
- **@vitejs/plugin-react**: Optimiza las aplicaciones de React dentro del ecosistema de Vite.
- **eslint & eslint-plugin-react-hooks & eslint-plugin-react-refresh**: Garantiza la calidad del código aplicando buenas prácticas y detectando posibles errores.
- **@eslint/js** & **typescript-eslint**: Mejora el soporte de ESLint para proyectos TypeScript.
- **@types/react & @types/react-dom**: Proporciona definiciones de tipos de TypeScript para React.

---

## 🛠 Cómo Ejecutar el Proyecto

### **1️⃣ Instalar Dependencias**

Antes de ejecutar el proyecto, asegúrate de tener **Node.js** instalado. Luego, instala las dependencias ejecutando el comando:

```sh
npm install
```

### **2️⃣ Ejecutar en Modo Desarrollo**

Para iniciar un servidor de desarrollo ejecuta el siguiente comando:

```sh
npm run dev
```

Esto iniciará la aplicación en `http://localhost:5173` (o en un puerto diferente si está configurado).

### **3️⃣ Compilar para Producción**

Para generar una compilación optimizada para producción:

```sh
npm run build
```

Esto creará una carpeta `dist/` que contiene la aplicación compilada.

### **4️⃣ Ejecutar la Versión de Producción Localmente**

Para previsualizar la compilación de producción:

```sh
npm run preview
```

Esto sirve los archivos compilados localmente para realizar pruebas antes del despliegue.

---

Para poder probar este proyecto sin necesidad de clonar el repositorio, podés utilizar **[este enlace](https://prueba-front-end-inditex.vercel.app/)**.

