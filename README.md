# Nimbel Web

Sitio web oficial de Nimbel, una empresa de desarrollo de software a medida.

## 📋 Acerca del Proyecto

**Nimbel Web** es la landing page corporativa de Nimbel, diseñada para:

- Presentar los servicios de desarrollo de software a medida
- Showcasear proyectos en los que hemos trabajado
- Dar a conocer al equipo de desarrollo
- Validar la confianza del cliente en nuestras capacidades

## 🛠 Stack Tecnológico

- **Framework**: [Astro](https://astro.build) - Framework moderno para sitios estáticos y dinámicos
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utilidades CSS para diseño rápido
- **Internacionalización**: Soporte multiidioma (ES/EN) integrado en Astro
- **Font Custom**: Fuentes tipográficas personalizadas (Mortend)

## ✨ Características

- ✅ Sitio multiidioma (Español e Inglés)
- ✅ Diseño responsive (mobile-first)
- ✅ SEO optimizado con rutas consistentes
- ✅ Componentes reutilizables
- ✅ Sistema de i18n para traducciones dinámicas

## 🚀 Comenzar

### Requisitos Previos

- Node.js 18+
- pnpm (gestor de paquetes)

### Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Construir para producción
pnpm run build

# Vista previa de la build
pnpm run preview
```

El sitio estará disponible en `http://localhost:4321`

## 📂 Estructura del Proyecto

```
src/
├── components/        # Componentes reutilizables
├── i18n/             # Configuración de internacionalización
├── layouts/          # Layouts principales
├── pages/            # Páginas y rutas
│   ├── [...]locale/  # Rutas dinámicas por idioma
│   └── index.astro   # Página raíz (redirige a /es)
└── styles/           # Estilos globales

public/
├── assets/           # Imágenes y recursos estáticos
└── fonts/            # Fuentes personalizadas
```

## 🌍 Rutas

- `/es` - Página principal en español
- `/en` - Página principal en inglés

## 📝 Convenciones del Proyecto

- **Gestor de paquetes**: Usar siempre `pnpm` (no npm ni yarn)
- **Estilos**: Usar clases Tailwind estándar (`w-4` en lugar de `w-[16px]`)
- **Commits**: El `pnpm-lock.yaml` debe incluirse siempre

## 🎨 Customización

### Traducciones

Las traducciones se encuentran en `src/i18n/`:

- `es.ts` - Textos en español
- `en.ts` - Textos en inglés

Utiliza `useTranslations()` para acceder a las traducciones en componentes.

### Colores y Estilos

Los colores personalizados se definen en estilos globales. Consulta `src/styles/global.css` para variables CSS.

## 📦 Deployment

El proyecto está configurado para ser deployado como sitio estático. Compatible con:

- Vercel
- Cualquier servidor que sirva contenido estático

## 📄 Licencia

Privado - Nimbel
