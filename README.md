# Inspector4dev Landing Page

Una landing page moderna construida con Next.js 14, Tailwind CSS y Framer Motion.

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura

```
inspector4dev-landing/
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── public/              # Assets estáticos
├── next.config.js       # Configuración Next.js
├── tailwind.config.ts   # Configuración Tailwind
├── tsconfig.json        # Configuración TypeScript
└── package.json
```

## 🎨 Personalización

### Cambiar el enlace de Chrome Web Store

En `app/page.tsx`, busca el enlace del botón de descarga y reemplaza `YOUR_EXTENSION_ID`:

```tsx
href="https://chrome.google.com/webstore/detail/inspector4dev/YOUR_EXTENSION_ID"
```

### Cambiar enlaces de GitHub y contacto

Busca en el footer y la navegación los enlaces a GitHub y correo:

```tsx
href="https://github.com/inspector4dev"
href="mailto:hello@inspector4dev.com"
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. Sube el código a GitHub
2. Conecta el repositorio en [vercel.com](https://vercel.com)
3. Despliega automáticamente

### Exportación estática

```bash
npm run build
```

Los archivos estáticos estarán en la carpeta `out/` listos para subir a cualquier hosting.

## 📦 Tecnologías

- **Next.js 14** - Framework React
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **TypeScript** - Tipado

## 🎯 Características

- Diseño oscuro que coincide con la extensión
- Animaciones suaves con Framer Motion
- Totalmente responsive
- SEO optimizado
- Exportable a HTML estático
