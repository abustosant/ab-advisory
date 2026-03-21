# AB Advisory — Pendientes post-auditoría externa
_Generado: 21 marzo 2026 · Basado en auditoría con framework boutique (25+ años experiencia)_

---

## INMEDIATO — Afecta credibilidad o conversión hoy

| # | Tarea | Descripción | Archivo(s) |
|---|-------|-------------|------------|
| I-1 | **Sitemap.xml y robots.txt** | Ambos devuelven 404. Google no tiene mapa del sitio ni directivas de crawl. Crear `src/app/sitemap.ts` y `src/app/robots.ts` con la API de Next.js 15/16. | `src/app/sitemap.ts` (nuevo), `src/app/robots.ts` (nuevo) |
| I-2 | **"respaldo técnico real" en /servicios/financiero** | El H1 hardcodeado en FinancieroContent.tsx aún dice "respaldo técnico real". El adjetivo "real" fue eliminado del vocabulario pero quedó en este componente. Reemplazar por "respaldo técnico". | `src/app/servicios/financiero/FinancieroContent.tsx` |
| I-3 | **Eliminar WhatsApp del Navbar** | El botón flotante fue eliminado pero el link de WhatsApp persiste en el footer del overlay del menú. Inconsistencia de marca. Reemplazar por solo email o teléfono. | `src/components/Navbar.tsx` |
| I-4 | **Open Graph por página** | Todas las subpáginas de servicios comparten el mismo OG title y OG description genéricos. Cuando se comparte en LinkedIn, el preview es idéntico en todas. Agregar `metadata.openGraph` específico en cada `page.tsx`. | `src/app/servicios/*/page.tsx`, `src/app/insights/[slug]/page.tsx` |

---

## CORTO PLAZO — Semanas, mejoran posicionamiento

| # | Tarea | Descripción | Archivo(s) |
|---|-------|-------------|------------|
| C-1 | **Schema.org JSON-LD** | Sin structured data, Google no genera rich snippets. Implementar tres tipos: `LocalBusiness` en layout, `Person` en /nosotros, `Article` en cada insight. | `src/app/layout.tsx`, `src/app/nosotros/page.tsx`, `src/app/insights/[slug]/page.tsx` |
| C-2 | **Reformular métrica USD 15M** | "USD 15M en deuda reestructurada" puede parecer baja para el segmento objetivo (CFOs con estructuras de deuda mayores). Reemplazar por métrica de frecuencia y eficiencia: "Múltiples procesos de reestructuración bancaria con mejora documentada de caja superior al 20%". | `src/lib/data.ts` → METRICS, `src/app/servicios/financiero/FinancieroContent.tsx` |
| C-3 | **Restaurar sección Founder con retrato de autoridad** | La foto del fundador quedó reducida a un círculo de 80px. Para un modelo founder-led, es insuficiente. Restaurar retrato vertical (aspect 3/4, mínimo 200px) con credencial destacada: "Ex-Head of Corporate Accounting · LATAM Airlines Group". | `src/app/page.tsx` → sección FOUNDER TEASER |
| C-4 | **Diferenciar métricas por área de práctica** | Los mismos KPIs (USD 15M, 40%, +25%, 100% SII) aparecen en múltiples páginas. Un CFO que revisa más de una página detecta el reciclaje. Cada servicio necesita sus propias credenciales. | `src/lib/data.ts`, `src/app/servicios/*/Content.tsx` |
| C-5 | **Nosotros: "Por qué fundé AB Advisory" + casos IMPACT** | La página del fundador tiene el CV pero no articula la filosofía. Añadir párrafo de fundación (primera persona, 3–4 líneas) + 4 mini-casos anonimizados del array IMPACT en data.ts. | `src/app/nosotros/NosotrosContent.tsx` |
| C-6 | **H1 Insights: título técnico** | El H1 actual es genérico. Cambiar a "Análisis técnico para CFOs y equipos financieros" o equivalente que capture búsquedas long-tail. | `src/app/insights/InsightsContent.tsx` |

---

## MEDIANO PLAZO — Meses, diferenciación estratégica

| # | Tarea | Descripción | Archivo(s) |
|---|-------|-------------|------------|
| M-1 | **Publicar 2 artículos técnicos por mes** | 4 artículos todos de la misma fecha no constituyen liderazgo de pensamiento. Mínimo 800 palabras con posición técnica propia (no resúmenes de normas). Títulos que generen búsqueda orgánica. | `src/lib/data.ts` → INSIGHTS |
| M-2 | **Prueba social progresiva** | Cero testimonios reales, cero logos. Por cada mandato cerrado: solicitar frase atribuible (cargo + sector). Publicar en LinkedIn. Activar en el sitio con 3+ reales. Los TESTIMONIALS en data.ts son ficticios — no activar. | `src/lib/data.ts` → TESTIMONIALS, `src/app/page.tsx` |
| M-3 | **Declarar ICP explícito** | El perfil de cliente ideal no está explícito en ninguna página. Agregar en homepage y en /nosotros: tipo de empresa, tamaño, situación típica que justifica el mandato. Filtra prospectos no calificados y refuerza señal de especialización. | `src/app/page.tsx`, `src/app/nosotros/NosotrosContent.tsx` |
| M-4 | **Caso de estudio anonimizado en /nosotros** | Añadir 1–2 párrafos con casos reales: `[Sector] · [Tamaño] · [Problema] · [Metodología] · [Resultado]`. Requiere decisión del fundador sobre qué revelar. | `src/app/nosotros/NosotrosContent.tsx` |
| M-5 | **Google Search Console + verificación índice** | Verificar indexación del sitio, enviar sitemap una vez creado, revisar cobertura y errores de crawl. No requiere desarrollo pero es complemento obligatorio de I-1. | Externo: Google Search Console |

---

## Notas estratégicas

- **Vocabulario prohibido:** "rigor", "gratuito", "sin costo", "primera reunión gratis", "precio", "real" (calificativo defensivo), "verdadero" (comparación implícita), "inicial" (para reuniones)
- **Posicionamiento vigente:** "La profundidad de una gran firma. La atención de un socio exclusivo."
- **Benchmark de referencia:** Kroll (ex Duff & Phelps) — credenciales por frecuencia de mandatos, no por monto único
- **Audiencia objetivo:** CFOs, Gerentes Generales, Directores · empresas medianas Chile · grupos empresariales
- **TESTIMONIALS en data.ts son ficticios — NO activar nunca**
- **Rama de producción Vercel:** `main` — siempre pushear a `main`

---

## Registro de completados

| Fecha | Tarea | Commit |
|-------|-------|--------|
| 2026-03-21 | Crear páginas auditoria/compliance/due-diligence (fix 404) | d97eed3 |
| 2026-03-21 | Eliminar lenguaje "sin costo" + adjetivos defensivos + métrica RRHH | a166108 |
| 2026-03-21 | Homepage: limpiar estructura, reordenar navbar, simplificar founder | 8b8a9d2 |
