# Bidcom Frontend Challenge

Aplicación ecommerce desarrollada con Next.js, TypeScript y TailwindCSS utilizando las APIs públicas de DummyJSON.

El proyecto fue desarrollado siguiendo una arquitectura modular inspirada en Clean Architecture, priorizando:
- reutilización de componentes,
- separación de responsabilidades,
- enfoque server-side,
- responsive design mobile-first,
- documentación de componentes con Storybook,
- y testing unitario con Vitest + Testing Library.

---

## Tech Stack

- Next.js 16
- TypeScript
- TailwindCSS v4
- Storybook
- Vitest
- Testing Library
- DummyJSON API

---

## Features

- Listado de productos responsive
- Búsqueda de productos
- Detalle de producto por SKU
- Empty states
- Paginación reusable
- Design System básico
- Storybook para documentación UI
- Tests unitarios

---

## Arquitectura

El proyecto sigue una estructura modular inspirada en Clean Architecture:

```txt
src/
├── app/
├── components/
├── modules/
│   └── products/
│       ├── application/
│       ├── domain/
│       ├── infrastructure/
│       └── presentation/
└── lib/
Capas
domain → entidades y contratos
application → casos de uso
infrastructure → acceso a APIs externas
presentation → componentes y UI
Instalación
npm install
Variables de entorno

Crear un archivo .env.local:

NEXT_PUBLIC_DUMMYJSON_API_URL=https://dummyjson.com
Scripts
npm run dev
npm run build
npm run lint
npm run test
npm run storybook
npm run build-storybook
Testing

El proyecto incluye tests unitarios con:

Vitest
Testing Library

Cobertura actual:

ProductCard
ProductGrid
SearchBar
Pagination
PriceInfo
EmptyProductsState
Storybook

La documentación de componentes está disponible mediante Storybook:

npm run storybook
Decisiones Técnicas
Server-side rendering orientado a performance y SEO.
Componentes reutilizables y desacoplados.
Arquitectura modular para escalabilidad.
Mobile-first responsive design.
Storybook como apoyo al Design System.
Testing unitario sobre componentes críticos.
API
https://dummyjson.com/products
https://dummyjson.com/products/search
https://dummyjson.com/products/categories

Después:

```bash
npm run lint