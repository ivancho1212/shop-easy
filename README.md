# Shop Easy - React + TypeScript + Vite

Este es un proyecto basado en **React, TypeScript y Vite**, diseñado para proporcionar una experiencia ágil y eficiente en el desarrollo de aplicaciones web modernas.

## 🚀 Tecnologías Utilizadas

- [React](https://react.dev/) - Biblioteca para construir interfaces de usuario.
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto de JavaScript con tipado estático.
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo rápida para aplicaciones modernas.
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para diseño responsivo y estilizado.
- [ESLint](https://eslint.org/) - Linter para mantener código limpio y libre de errores.

## 📋 Requisitos Previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

Puedes verificar tu versión de Node.js con:

```bash
node -v
```

Y de npm con:

```bash
npm -v
```

## 🛠 Instalación y Ejecución

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local.

### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/ivancho1212/shop-easy.git
cd shop-easy
```

### 2️⃣ Instalar Dependencias
```bash
npm install
```

### 3️⃣ Configuración (Opcional)
Si el proyecto requiere variables de entorno, asegúrate de crear un archivo `.env` con la configuración necesaria.

Ejemplo de `.env`:
```
VITE_API_URL=https://api.ejemplo.com
```

### 4️⃣ Ejecutar el Proyecto
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/` por defecto.

### 5️⃣ Construir para Producción
Para generar una versión optimizada del proyecto, ejecuta:

```bash
npm run build
```
Esto generará los archivos en la carpeta `dist/`, listos para desplegar en un servidor.

## 🌟 Uso de Bootstrap

Este proyecto usa Bootstrap para los estilos. Puedes importar Bootstrap en `src/main.tsx`:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

Si aún no lo tienes instalado, puedes hacerlo con:
```bash
npm install bootstrap
```

## ✅ Buenas Prácticas

- Usa TypeScript para mantener un código tipado.
- Sigue la estructura modular de componentes.
- Usa ESLint para evitar errores de código.
- Mantén el código limpio y documentado.

## 🤝 Contribución

Si deseas contribuir, sigue estos pasos:

1. **Haz un fork** del proyecto.
2. Crea una nueva rama:  
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:  
   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```
4. Sube los cambios:  
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **pull request** en GitHub.

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

🚀 **¡Gracias por contribuir a Shop Easy!** 🎉

