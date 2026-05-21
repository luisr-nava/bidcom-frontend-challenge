# Bidcom Frontend Challenge

Aplicación ecommerce desarrollada con Next.js, TypeScript y TailwindCSS utilizando las APIs públicas de DummyJSON.

El proyecto fue desarrollado siguiendo una arquitectura modular inspirada en Clean Architecture, priorizando reutilización de componentes, separación de responsabilidades, enfoque server-side, responsive design mobile-first, documentación de componentes con Storybook y testing unitario con Vitest + Testing Library.

## Tech Stack

- Next.js 16
- TypeScript
- TailwindCSS v4
- Storybook
- Vitest
- Testing Library
- DummyJSON API

## Features

- Listado de productos responsive
- Búsqueda de productos
- Detalle de producto por SKU
- Empty state con categorías recomendadas
- Paginación reusable
- Design System básico
- Storybook para documentación UI
- Tests unitarios

## Arquitectura

El proyecto sigue una estructura modular inspirada en Clean Architecture:

```txt
src/
├── app/
├── components/
├── lib/
└── modules/
    └── products/
        ├── application/
        ├── domain/
        ├── infrastructure/
        └── presentation/
```

### Capas

- `domain`: entidades y contratos.
- `application`: casos de uso.
- `infrastructure`: acceso a APIs externas.
- `presentation`: componentes específicos del módulo.
- `components`: componentes reutilizables de UI y layout.

## Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_DUMMYJSON_API_URL=https://dummyjson.com
```

El proyecto también incluye un fallback interno a `https://dummyjson.com` si la variable no está definida.

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

La aplicación queda disponible en:

```txt
http://localhost:3000
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run lint
npm run test
npm run storybook
npm run build-storybook
```

## Testing

El proyecto incluye tests unitarios con Vitest y Testing Library.

Componentes cubiertos:

- ProductCard
- ProductGrid
- PriceInfo
- SearchBar
- EmptyProductsState
- Pagination

Ejecutar tests:

```bash
npm run test
```

## Storybook

La documentación visual de componentes está disponible con Storybook.

```bash
npm run storybook
```

Storybook queda disponible en:

```txt
http://localhost:6006
```

Para generar el build estático:

```bash
npm run build-storybook
```

## API

La información de productos se obtiene desde DummyJSON:

- `/products/search`
- `/products/categories`
- `/products/category/:category`

El listado principal utiliza el endpoint de búsqueda con `q=""`, `limit=20` y `skip` para mantener el requerimiento técnico del challenge.

## Decisiones técnicas

- Uso de App Router y componentes server-side en las páginas principales.
- Uso de `products/search` para el listado principal y búsquedas.
- Fallback por categoría cuando una búsqueda coincide con una categoría de DummyJSON.
- Componentes UI reutilizables para sostener criterios de Design System.
- Storybook como documentación visual de componentes.
- Tests unitarios sobre componentes críticos del flujo.
- Diseño responsive con enfoque mobile-first.