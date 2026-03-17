# AB Advisory — Contexto del Proyecto

## Repositorio
- **GitHub**: `git@github.com:abustosant/ab-advisory.git` (SSH)
- **Rama principal**: `main`
- **Rama de trabajo Claude**: `claude/build-advisory-website-lsSb5`

## Entorno de desarrollo local (usuario)
- **Editor**: VS Codium (no VS Code)
- **OS**: Windows (PowerShell)
- **Git remote local**: SSH → `git@github.com:abustosant/ab-advisory.git`

## Sitio en producción
- **URL**: https://www.abadvisory.cl
- **Hosting**: Vercel (recomendado en README)
- **Formulario de contacto**: Web3Forms → `contacto@abadvisory.cl`

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript 5 strict
- Tailwind CSS 4, Framer Motion 12, Lucide React

## Estructura de páginas
| Ruta | Contenido |
|------|-----------|
| `/` | Homepage (hero, servicios, métricas, testimonios, insights) |
| `/nosotros` | Perfil del fundador Andrés Bustos A. |
| `/contacto` | Formulario Web3Forms |
| `/servicios/financiero` | Asesoría Financiera |
| `/servicios/contable` | Contabilidad & IFRS |
| `/servicios/rrhh` | Gestión de RRHH |
| `/insights` | Listado de artículos |
| `/insights/[slug]` | Detalle de artículo dinámico |

## Datos centralizados
Todo el contenido vive en `src/lib/data.ts`:
- SITE (config, contacto, web3forms key)
- FOUNDER (Andrés Bustos A.)
- SERVICES (financiero, contable, rrhh)
- METRICS, KPIS, TESTIMONIALS, INSIGHTS, PROCESS, IMPACT
- TICKER_ITEMS (carrusel de credenciales)

## Paleta de colores (globals.css)
- Navy: `#0D2B45` / `#1A3D5C`
- Blue: `#1A73A7` / `#155E8A`
- Canvas BG: `#F8FAFC`
- Text: `#1A2E3D`

## Tipografía
- Headings: Playfair Display (serif)
- Body: DM Sans (sans)

## Componentes clave
- `HeroCanvas.tsx` — partículas animadas en canvas (110 nodos)
- `AnimOnScroll.tsx` — IntersectionObserver para animaciones scroll
- `Counter.tsx` — contadores animados al hacer scroll
- `WhatsAppFloat.tsx` — botón flotante WhatsApp
- `ContactForm.tsx` — integración Web3Forms
- `Navbar.tsx` — navbar fijo con cambio de estilo al hacer scroll

## Notas importantes
- El sitio está en **español chileno** (es_CL)
- Posicionamiento premium: "Rigor técnico Big Four, dedicación exclusiva"
- Fundador: Andrés Bustos A. — finanzas corporativas, IFRS, reestructuración de deuda
- Mercado objetivo: CFOs, Gerentes Generales, Directores en Chile
