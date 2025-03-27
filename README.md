# Shop Easy - React + TypeScript + Vite

Este es un proyecto basado en React, TypeScript y Vite, diseñado para proporcionar una experiencia ágil y eficiente en el desarrollo de aplicaciones web modernas.

## 🚀 Tecnologías Utilizadas

- [React](https://react.dev/) - Biblioteca para construir interfaces de usuario.
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto de JavaScript con tipado estático.
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo rápida para aplicaciones modernas.
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para diseño responsivo y estilizado.
- [ESLint](https://eslint.org/) - Linter para mantener código limpio y libre de errores.

## 📂 Estructura del Proyecto

```
shop-easy/
│-- public/               # Archivos estáticos
│-- src/
│   │-- components/       # Componentes reutilizables
│   │-- pages/            # Páginas principales de la app
│   │-- hooks/            # Hooks personalizados
│   │-- styles/           # Archivos CSS/SASS
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada de la aplicación
│-- package.json          # Dependencias y scripts
│-- vite.config.ts        # Configuración de Vite
│-- tsconfig.json         # Configuración de TypeScript
│-- .eslintrc.js          # Configuración de ESLint
│-- README.md             # Documentación del proyecto
```

## 🛠 Instalación y Configuración

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

### 3️⃣ Ejecutar el Proyecto
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/` por defecto.

## 🎨 Uso de Bootstrap

Este proyecto usa Bootstrap para los estilos. Puedes importar Bootstrap en `src/main.tsx`:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

También puedes instalarlo si aún no lo has hecho:
```bash
npm install bootstrap
```

## ✅ Buenas Prácticas
- Usa TypeScript para mantener un código tipado.
- Sigue la estructura modular de componentes.
- Usa ESLint para evitar errores de código.
- Mantén el código limpio y documentado.

## 🤝 Contribución
Si deseas contribuir, haz un fork del repositorio, crea una rama y envía un pull request con tus mejoras.

1. Fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Agregada nueva funcionalidad"`).
4. Sube los cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request en GitHub.

## 📝 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
🚀 ¡Gracias por contribuir a Shop Easy! 🎉
