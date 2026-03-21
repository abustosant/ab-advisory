# AB Advisory — Contexto del Proyecto

## Repositorio
- **GitHub**: `git@github.com:abustosant/ab-advisory.git` (SSH)
- **Rama principal**: `main`

## Entorno de desarrollo local (usuario)
- **Editor**: VS Codium (no VS Code)
- **OS**: Windows (PowerShell)
- **Git remote local**: SSH → `git@github.com:abustosant/ab-advisory.git`

## Sitio en producción
- **URL**: https://www.abadvisory.cl
- **Hosting**: Vercel (deploy automático al push a `main`)
- **Formulario de contacto**: Web3Forms → `contacto@abadvisory.cl`

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript 5 strict
- Tailwind CSS 4, Framer Motion 12, Lucide React

## Estructura de páginas (estado actual)
| Ruta | Contenido | Estado |
|------|-----------|--------|
| `/` | Homepage | ✅ Activo |
| `/nosotros` | Perfil del fundador Andrés Bustos A. | ✅ Activo |
| `/contacto` | Formulario Web3Forms | ✅ Activo |
| `/servicios/financiero` | Asesoría Financiera | ✅ Activo |
| `/servicios/contable` | Contabilidad & IFRS | ✅ Activo |
| `/servicios/rrhh` | Gestión de RRHH | ✅ Activo |
| `/servicios/auditoria` | Auditoría & Control Interno | ⏳ Pendiente crear |
| `/servicios/compliance` | Compliance Corporativo | ⏳ Pendiente crear |
| `/servicios/due-diligence` | Due Diligence Financiero | ⏳ Pendiente crear |
| `/insights` | Listado de artículos | ✅ Activo |
| `/insights/[slug]` | Detalle de artículo dinámico | ✅ Activo |

## Datos centralizados (`src/lib/data.ts`)
- `SITE` — config general, contacto, web3forms key
- `FOUNDER` — Andrés Bustos A., statement, expertise, sectors
- `SERVICES` — 3 servicios principales (financiero, contable, rrhh) con campos: num, category, title, description, image, items, href, cta, ctaSub, color
- `SERVICES_ADDITIONAL` — 3 servicios nuevos (auditoria 04, compliance 05, due-diligence 06) con misma estructura, sin campo image
- `DIFFERENTIATORS` — 3 pilares narrativos (Formación Big Four / Acceso directo / Honorarios transparentes)
- `METRICS`, `KPIS`, `PROCESS`, `IMPACT`, `INSIGHTS`
- `TESTIMONIALS` — existen en data.ts pero están **comentados en el JSX** (son ficticios, no activar)
- `TICKER_ITEMS` — eliminado del JSX (ya no se usa)

## Paleta de colores (`src/app/globals.css`)
- `--navy`: `#0D2B45`
- `--navy2`: `#1A3D5C`
- `--blue`: `#0F4C7A`
- `--gold`: `#C9A96E` ← color de acento principal
- `--canvas`: `#F8FAFC`
- `--text`: `#1A2E3D`
- `--text2`: `#4A6070`
- `--text3`: `#8A9FAF`
- `--border`: `#E2E8F0`

## Tipografía
- Headings: Playfair Display (serif) → `var(--serif)`
- Body: DM Sans (sans) → `var(--sans)`

## Componentes clave
- `HeroCanvas.tsx` — partículas animadas en canvas (110 nodos)
- `AnimOnScroll.tsx` — IntersectionObserver para animaciones scroll
- `Counter.tsx` — contadores animados; usa `useState(target)` (no 0) para evitar zeros en SSR
- `WhatsAppFloat.tsx` — botón flotante WhatsApp
- `ContactForm.tsx` — integración Web3Forms
- `LeadMagnetForm.tsx` — formulario Lead Magnet (checklist IFRS 18); `'use client'` obligatorio
- `Navbar.tsx` — estilo Vicapital: logo izq + hamburger der; overlay fullscreen navy con links Playfair grandes; hover gold
- `Footer.tsx` — barra superior `var(--gold)` (no azul)

## Posicionamiento y vocabulario
- Posicionamiento: **"La profundidad de una gran firma. La atención de un socio exclusivo."**
- **Nunca usar**: "rigor" (reemplazado en todos los archivos), "precio", "gratuito", "primera reunión sin costo", ni cualquier lenguaje de descuento
- Vocabulario aprobado para reemplazar "rigor": excelencia, estándar, precisión, profundidad analítica, disciplina, exigencia, solidez, criterio
- Mercado objetivo: CFOs, Gerentes Generales, Directores en Chile
- Fundador: Andrés Bustos A. — finanzas corporativas, IFRS, reestructuración de deuda

## Reglas de arquitectura Next.js
- Componentes con event handlers (`onClick`, `onSubmit`, `onFocus`, etc.) **deben tener `'use client'`**
- Páginas `page.tsx` son Server Components por defecto — extraer formularios/interactividad a archivos Client Component separados
- Acceder a `SITE` con propiedades planas: `SITE.email`, `SITE.phoneRaw` (no `SITE.contact.email`)

---

## Cambios realizados en sesión anterior (resumen)

### Navbar.tsx — Rediseño completo estilo Vicapital
- Logo izquierda + hamburger derecha (sin links inline)
- Overlay fullscreen navy con links Playfair (clamp 2–3.5rem, weight 300)
- Barra gold 2px en top del overlay
- Hover: color gold + indent paddingLeft 12px
- Footer del overlay: email + WhatsApp
- Body scroll locked al abrir

### Counter.tsx — Fix SSR zeros
- `useState(0)` → `useState(target)` para mostrar valor real antes de JS
- Reset a 0 solo dentro del IntersectionObserver antes de animar

### page.tsx — Homepage refactorizada
- Eliminados: ticker/carrusel, sección PARTNER PROFILE completa, tabla comparativa
- Añadidos: FOUNDER TEASER (cita + foto 3/4 + link /nosotros), DIFFERENTIATORS 3 pilares verticales, sección Lead Magnet
- H2 diferenciador: `"La profundidad de una gran firma.\nLa atención de un socio exclusivo."`
- Eyebrow servicios: "Asesoría financiera · contable · RRHH en Chile"
- Eyebrow proceso: "Metodología"
- Insights H2: "Análisis IFRS y Finanzas Corporativas"
- Imports actualizados: incluye `SERVICES_ADDITIONAL`, `DIFFERENTIATORS`, `FOUNDER`
- TESTIMONIALS permanecen comentados (ficticios)

### LeadMagnetForm.tsx — Componente nuevo `'use client'`
- Formulario para checklist IFRS 18
- Extraído de page.tsx para cumplir regla Server Component

### data.ts — Múltiples actualizaciones
- Eliminado `COMPARISON_TABLE`, `TICKER_ITEMS` del uso
- Añadidos: `DIFFERENTIATORS` (3 pilares), `SERVICES_ADDITIONAL` (04, 05, 06)
- SERVICES: añadidos campos `cta` y `ctaSub` a cada servicio
- `SITE.description`: "Rigor técnico" → "Excelencia técnica"
- `FOUNDER.statement`: reemplazado "rigor" con vocabulario aprobado

### Vocabulario: eliminación de "rigor" (10 instancias, 8 archivos)
- `src/lib/data.ts`, `src/app/layout.tsx`, `src/app/page.tsx`
- `src/app/servicios/financiero/FinancieroContent.tsx`
- `src/app/servicios/rrhh/RRHHContent.tsx`
- `src/components/Footer.tsx`
- `src/app/servicios/financiero/page.tsx`
- `src/app/nosotros/NosotrosContent.tsx`

---

## Tareas pendientes (próxima sesión)

### Alta prioridad
1. **Aplicar cambios del preview** (`preview-cambios.html` generado, pendiente aprobación):
   - Añadir sección `SERVICES_ADDITIONAL` al JSX de `page.tsx` (entre servicios principales y métricas)
   - `Footer.tsx`: barra top `var(--blue)` → `var(--gold)`
   - `Footer.tsx`: links Compliance y Due Diligence → `/servicios/compliance`, `/servicios/due-diligence`

2. **Crear páginas de nuevos servicios** (estructura igual que financiero/contable/rrhh):
   - `/servicios/auditoria/page.tsx` + `AuditoriaContent.tsx`
   - `/servicios/compliance/page.tsx` + `ComplianceContent.tsx`
   - `/servicios/due-diligence/page.tsx` + `DueDiligenceContent.tsx`

### Media prioridad
3. **NosotrosContent.tsx** — Añadir dos secciones:
   - Párrafo de filosofía: "Por qué fundé AB Advisory"
   - IMPACT mini-cases: 4 casos de `data.ts → IMPACT` (sector, resultado, descripción)

### Referencia
- Preview de cambios generado en: `preview-cambios.html` (raíz del proyecto, no commitear)
