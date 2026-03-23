# IEX Frontend Base

Base frontend con React + TypeScript + Vite para un sitio escolar, orientado a componentes reutilizables.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Zustand (estado global)
- Componentes estilo `shadcn/ui` (CVA + Radix Slot + utilidades de Tailwind)

## Correr el proyecto

```bash
npm install
npm run dev
```

## Estructura recomendada

```text
src/
  app/                    # Shell principal de la app
  components/
    ui/                   # Componentes base reutilizables (Button, Card, etc.)
  features/               # Modulos por dominio funcional (dashboard, auth, etc.)
  store/                  # Zustand stores globales
  lib/                    # Utilidades compartidas (cn, helpers, etc.)
```

## Scripts

- `npm run dev`: desarrollo
- `npm run lint`: validacion ESLint
- `npm run build`: build de produccion
