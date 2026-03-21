# AB Advisory — Plan de mejoras post-auditoría
_Generado: 21 marzo 2026 · Basado en auditoría externa con framework boutique_

---

## PRIORIDAD 1 — INMEDIATO (afecta credibilidad o conversión hoy)

### 1.1 Crear las 3 páginas de servicio faltantes (404 activos)
- **Problema:** `/servicios/auditoria`, `/servicios/compliance` y `/servicios/due-diligence` aparecen en el menú, el footer y la homepage pero devuelven 404. Un CFO que hace clic llega a un error.
- **Acción:** Crear `page.tsx` + `Content.tsx` para cada una, siguiendo la misma estructura de financiero/contable/rrhh.
- **Archivos a crear:**
  - `src/app/servicios/auditoria/page.tsx` + `AuditoriaContent.tsx`
  - `src/app/servicios/compliance/page.tsx` + `ComplianceContent.tsx`
  - `src/app/servicios/due-diligence/page.tsx` + `DueDiligenceContent.tsx`
- **Estado:** ⏳ Pendiente

---

### 1.2 Eliminar frases de consultoría masiva del copy
- **Problema:** Tres instancias de lenguaje de "primera consulta gratis" que destruyen el posicionamiento boutique.
- **Instancias encontradas:**
  - `src/lib/data.ts` → artículo `ifrs-18-presentacion`: _"el diagnóstico inicial no tiene costo"_
  - `src/lib/data.ts` → artículo `ifrs-2025`: _"el primer análisis no tiene costo"_
  - `src/app/contacto/` → texto visible: _"Agende una reunión inicial"_ → cambiar a _"Agende una reunión de trabajo"_
- **Acción:** Reemplazar las frases en `data.ts` y en la página de contacto.
- **Estado:** ⏳ Pendiente

---

### 1.3 Eliminar adjetivos defensivos del copy principal
- **Problema:** "real" y "verdadero" son calificativos que implican que la competencia es falsa. Las firmas de élite no los usan — simplemente demuestran.
- **Instancias:**
  - H1 homepage: _"Decisiones financieras con **precisión real**"_ → propuesta: _"Decisiones financieras con respaldo técnico"_
  - H2 homepage: _"¿Listo para trabajar con un **verdadero** socio financiero?"_ → propuesta: _"¿Listo para trabajar con un socio financiero de primer nivel?"_ o eliminar la pregunta retórica
- **Estado:** ⏳ Pendiente

---

### 1.4 Métricas de RRHH sin sustancia ejecutiva
- **Problema:** `+50 Procesos internos automatizados` no dice nada relevante para un CFO. ¿50 procesos de quién? ¿En qué empresa? ¿En qué plazo?
- **Acción:** Reemplazar por una métrica con contexto y resultado verificable. Opciones:
  - _"0 observaciones en fiscalizaciones Dirección del Trabajo"_ (ya existe en la página, más fuerte)
  - _"Nómina gestionada para equipos de 30 a 500+ colaboradores"_
- **Archivos:** `src/lib/data.ts` → `METRICS` y `KPIS`, y `src/app/servicios/rrhh/RRHHContent.tsx`
- **Estado:** ⏳ Pendiente

---

## PRIORIDAD 2 — CORTO PLAZO (2–3 semanas, mejoran posicionamiento)

### 2.1 Reformular la métrica USD 15M
- **Problema:** USD 15 millones en deuda reestructurada comunica escala de SME menor. Para un CFO con deuda bancaria de USD 30M, esto puede parecer bajo. El monto único también sugiere un solo mandato aislado, no experiencia acumulada.
- **Acción:** Reemplazar por métricas de frecuencia y consistencia.
  - Opción A: _"Múltiples procesos de reestructuración bancaria con mejora de caja superior al 20%"_
  - Opción B: Reemplazar USD 15M por el número de mandatos de reestructuración ejecutados
  - Opción C: Eliminar el monto y destacar la metodología (Rolling Forecast, DCF, etc.)
- **Archivos:** `src/lib/data.ts` → `METRICS`, `src/app/nosotros/NosotrosContent.tsx`, `src/app/servicios/financiero/FinancieroContent.tsx`
- **Estado:** ⏳ Pendiente

---

### 2.2 Diferenciar métricas por área de práctica
- **Problema:** Los mismos 4 KPIs (USD 15M, 40%, +25%, 100% SII) aparecen en homepage, `/servicios/financiero` y `/servicios/contable`. Un CFO que revisa más de una página detecta el reciclaje.
- **Acción:** Cada servicio necesita sus propias credenciales:
  - **Financiero:** reestructuración, DCF, precisión de proyecciones, impacto en caja
  - **Contable:** número de consolidaciones, tiempos de cierre, auditorías Big Four sin observaciones
  - **RRHH:** dotación gestionada, cumplimiento laboral, reducción de errores en liquidaciones
  - **Auditoría:** hallazgos identificados, controles diseñados, mandatos completados
  - **Compliance:** programas implementados, capacitaciones, cumplimiento Ley 20.393
- **Estado:** ⏳ Pendiente

---

### 2.3 Añadir sección de filosofía + casos IMPACT en /nosotros
- **Problema:** La página de Nosotros tiene el CV del fundador pero no articula el _por qué_ de la firma ni demuestra resultados concretos.
- **Acción:** Añadir dos secciones a `NosotrosContent.tsx`:
  1. **"Por qué fundé AB Advisory"** — párrafo de filosofía, 3–4 líneas, en primera persona
  2. **Casos IMPACT** — 4 mini-casos anonimizados con: sector · problema · resultado (datos disponibles en `data.ts → IMPACT`)
- **Estado:** ⏳ Pendiente

---

### 2.4 Fortalecer el H1 de la página Insights
- **Problema:** El H1 actual es simplemente _"Insights"_ — una palabra genérica que no aprovecha el espacio editorial ni comunica valor al visitante.
- **Acción:** Cambiar a algo como _"Análisis técnico para equipos financieros y directivos"_ o _"Perspectivas IFRS y finanzas corporativas para la toma de decisiones"_
- **Archivo:** `src/app/insights/InsightsContent.tsx`
- **Estado:** ⏳ Pendiente

---

### 2.5 Primer caso de estudio anonimizado en /nosotros
- **Problema:** El sitio no tiene prueba social verificable (testimonios reales, logos, menciones en medios). El CV del fundador es la única evidencia.
- **Acción:** Añadir 1–2 párrafos en `/nosotros` con casos reales anonimizados:
  - Formato: [Sector] · [Tamaño empresa] · [Problema] · [Metodología aplicada] · [Resultado]
  - Ejemplo: _"Grupo industrial · 8 sociedades · Consolidación IFRS con auditor Big Four · Implementación en 5 meses · Sin observaciones en primera auditoría"_
- **Estado:** ⏳ Pendiente (requiere decisión del fundador sobre qué casos revelar)

---

## PRIORIDAD 3 — MEDIANO PLAZO (1–3 meses, diferenciación estratégica)

### 3.1 Implementar Schema.org / JSON-LD
- **Problema:** El sitio no tiene marcado estructurado. Google no puede presentar rich snippets de las FAQs, del perfil del fundador ni de los servicios. Impacto SEO significativo en búsquedas de cola larga.
- **Acción:** Añadir markup en:
  - `layout.tsx`: `LocalBusiness` con dirección, teléfono, servicios
  - `nosotros/page.tsx`: `Person` con nombre, credenciales, LinkedIn
  - Cada página de servicio: `Service` + `FAQPage`
  - Cada artículo de insights: `Article` con autor, fecha, descripción
- **Estado:** ⏳ Pendiente

---

### 3.2 Estrategia de contenido Insights (2 artículos/mes)
- **Problema:** 4 artículos no constituyen liderazgo de pensamiento. Es insuficiente para posicionamiento SEO y para demostrar profundidad técnica ante un CFO que investiga.
- **Acción:** Definir calendario editorial:
  - 2 artículos mensuales mínimo
  - Mínimo 800 palabras con posición técnica propia (no resúmenes de normas)
  - Temas prioritarios: IFRS 18 implementación práctica, reestructuración de deuda, Compliance Ley 20.393, reporting para directorios
  - Títulos que conviertan: _"Por qué la mayoría de las implementaciones IFRS en Chile fallan en el año 2"_
- **Estado:** ⏳ Pendiente

---

### 3.3 Estrategia de prueba social progresiva
- **Problema:** Cero testimonios reales, cero logos de clientes, cero menciones en medios. El único activo de confianza es el CV del fundador.
- **Acción:** En cada mandato nuevo:
  1. Solicitar una frase atribuible (cargo + sector, sin nombre de empresa)
  2. Publicar en LinkedIn del fundador como recomendación verificable
  3. Referenciar en el sitio una vez acumuladas 3+ recomendaciones reales
- **Estado:** ⏳ Pendiente (proceso continuo)

---

### 3.4 Robots.txt y Sitemap.xml
- **Problema:** No verificados. Para un sitio en Vercel con Next.js 16, el sitemap puede generarse automáticamente pero debe verificarse en Google Search Console.
- **Acción:**
  - Verificar existencia de `https://www.abadvisory.cl/sitemap.xml`
  - Verificar `https://www.abadvisory.cl/robots.txt`
  - Registrar sitio en Google Search Console si no está hecho
  - Añadir sitemap dinámico vía `src/app/sitemap.ts` si no existe
- **Estado:** ⏳ Pendiente

---

## REGISTRO DE MEJORAS COMPLETADAS

| Fecha | Mejora | Commit |
|-------|--------|--------|
| 2026-03-21 | Navbar rediseño Vicapital (hamburger + overlay fullscreen) | — |
| 2026-03-21 | Fix Counter SSR zeros (useState target) | — |
| 2026-03-21 | Eliminación de "rigor" en 8 archivos (10 instancias) | — |
| 2026-03-21 | Reemplazo tabla comparativa por 3 pilares DIFFERENTIATORS | — |
| 2026-03-21 | Sección SERVICES_ADDITIONAL (Auditoría, Compliance, Due Diligence) en homepage | 926dc5e |
| 2026-03-21 | Footer barra top gold (ex azul) + links servicios nuevos | 926dc5e |
| 2026-03-21 | Sufijo Counter hereda color (eliminado azul en M/K) | c5545db |
| 2026-03-21 | Servicios en nav overlay: lista vertical DM Sans discreta | c5545db |
| 2026-03-21 | Founder teaser reemplaza sección PARTNER PROFILE completa | — |
| 2026-03-21 | Lead Magnet IFRS 18 extraído a componente client | — |
| 2026-03-21 | H2 diferenciador: "La profundidad de una gran firma..." | — |

---

## NOTAS ESTRATÉGICAS

- **Benchmark referencial:** Kroll (ex Duff & Phelps) — credenciales por frecuencia de mandatos, no por monto único
- **Vocabulario prohibido:** "gratuito", "sin costo", "primera reunión gratis", "precio", "rigor", "real" (como calificativo defensivo), "verdadero" (en comparación implícita), "inicial" (para reuniones)
- **Audiencia objetivo:** CFOs, Gerentes Generales, Directores · empresas medianas Chile · grupos empresariales · procesos de auditoría o financing
- **Posicionamiento vigente:** "La profundidad de una gran firma. La atención de un socio exclusivo."
- **Testimonios:** NO activar los testimonios de `data.ts → TESTIMONIALS` — son ficticios
