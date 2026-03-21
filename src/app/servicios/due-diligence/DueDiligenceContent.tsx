'use client'

import Link from 'next/link'
import AnimOnScroll from '@/components/AnimOnScroll'

const COLOR = '#0F4C7A'
const NAVY = '#0D2B45'

const alcance = [
  {
    titulo: 'Due diligence financiero y contable',
    descripcion: 'Revisión exhaustiva de los estados financieros históricos, políticas contables, contingencias fiscales y estructura de capital. Identificación de ajustes al precio de transacción y riesgos no revelados en la documentación inicial.',
  },
  {
    titulo: 'Revisión de estados financieros históricos',
    descripcion: 'Análisis de los últimos 3 a 5 años de estados financieros bajo IFRS o normativa local. Evaluación de la consistencia de políticas contables, calidad de los ingresos y sostenibilidad del EBITDA declarado.',
  },
  {
    titulo: 'Identificación de contingencias y riesgos',
    descripcion: 'Mapeo de contingencias fiscales, laborales, legales y regulatorias. Cuantificación de pasivos contingentes no registrados y evaluación de su impacto en la valorización de la empresa objetivo.',
  },
  {
    titulo: 'Análisis de flujo de caja y deuda neta',
    descripcion: 'Reconciliación del EBITDA reportado con el flujo de caja operacional real. Revisión de la estructura de deuda, covenants, garantías y compromisos financieros fuera de balance.',
  },
  {
    titulo: 'Informe ejecutivo para directorio o inversionistas',
    descripcion: 'Elaboración del informe de due diligence con hallazgos priorizados, ajustes recomendados al precio, condiciones precedentes para el cierre y red flags para negociación. Formato ejecutivo adaptado al perfil de la audiencia.',
  },
  {
    titulo: 'Soporte en negociación y cierre',
    descripcion: 'Acompañamiento técnico en la negociación de representaciones y garantías (R&W), ajuste de precio post-cierre (working capital adjustment) y revisión de la documentación definitiva de la transacción.',
  },
]

const paraQuien = [
  'Inversionistas y fondos que evalúan adquisiciones en el mercado chileno',
  'Directorios que requieren una opinión técnica independiente antes de aprobar una transacción',
  'Empresas vendedoras que desean preparar un vendor due diligence para acelerar el proceso',
  'CFOs que participan en procesos de M&A y necesitan soporte técnico especializado',
  'Grupos empresariales en proceso de desinversión o reorganización corporativa',
]

const resultados = [
  { valor: 'M&A', label: 'Soporte en transacciones de compra y venta' },
  { valor: 'IFRS', label: 'Estándar de revisión de estados financieros' },
  { valor: '100%', label: 'Confidencialidad en todos los mandatos' },
  { valor: 'DDI', label: 'Informes ejecutivos para directorio e inversores' },
]

const faqs = [
  {
    pregunta: '¿Qué es un due diligence financiero y cuándo es necesario?',
    respuesta: 'Es un proceso de revisión exhaustiva de la situación financiera, contable y fiscal de una empresa antes de una transacción de compra, venta, fusión o inversión. Es necesario en cualquier proceso de M&A para identificar riesgos no revelados, validar la valorización y establecer las bases de la negociación definitiva.',
  },
  {
    pregunta: '¿Cuánto tiempo toma un due diligence financiero?',
    respuesta: 'Un due diligence estándar toma entre 3 y 6 semanas, dependiendo del tamaño de la empresa, la disponibilidad de documentación y la complejidad de la estructura societaria. Podemos adaptarnos a plazos más ajustados cuando la transacción lo requiere, sin comprometer la profundidad del análisis.',
  },
  {
    pregunta: '¿Qué es un vendor due diligence?',
    respuesta: 'Es un due diligence encargado por el vendedor antes de iniciar el proceso de venta. Permite al vendedor identificar y resolver contingencias antes de la negociación, acelerar el proceso con compradores y reducir el riesgo de renegociación del precio en las etapas finales. Es una práctica habitual en transacciones de mercado medio en Chile y Latam.',
  },
  {
    pregunta: '¿Cómo garantizan la confidencialidad del proceso?',
    respuesta: 'Operamos bajo acuerdos de confidencialidad (NDA) estrictos desde el inicio de cada mandato. Toda la documentación se maneja en entornos seguros y el acceso a la información está restringido exclusivamente al equipo asignado al proyecto. La confidencialidad es absoluta — es un principio no negociable de nuestra práctica.',
  },
]

export default function DueDiligenceContent() {
  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}>

{/* HERO */}
<section style={{
  background: 'linear-gradient(135deg, #EEF2F7 0%, #F5F7FA 50%, #EEF2F7 100%)',
  paddingTop: '7rem',
  paddingBottom: '5rem',
  position: 'relative',
  overflow: 'hidden',
}}>
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(15,76,122,0.07) 0%, transparent 55%)',
    pointerEvents: 'none',
  }} />
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>

    <AnimOnScroll direction="up">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.8rem' }}>
        <Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Inicio</Link>
        <span style={{ color: '#9CA3AF' }}>→</span>
        <Link href="/#servicios" style={{ color: '#4A5568', textDecoration: 'none' }}>Servicios</Link>
        <span style={{ color: '#9CA3AF' }}>→</span>
        <span style={{ color: COLOR }}>Due Diligence Financiero</span>
      </div>
    </AnimOnScroll>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
    }}>
      <div>
        <AnimOnScroll direction="up" delay={0.05}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '2.5rem', height: '2px', background: 'var(--gold)' }} />
            <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
              06 · DUE DILIGENCE FINANCIERO
            </span>
          </div>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.1}>
          <h1 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 700, color: 'var(--navy, #0D2B45)',
            lineHeight: 1.15, marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Decisiones de inversión con información verificada.
          </h1>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.15}>
          <p style={{
            fontSize: '1.05rem', color: '#4A5568',
            lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '500px',
          }}>
            Análisis financiero profundo para procesos de M&A, inversión o desinversión. Informes ejecutivos con hallazgos priorizados para directorio e inversionistas. Confidencialidad absoluta en cada mandato.
          </p>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.2}>
          <Link href="/contacto" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'var(--navy, #0D2B45)', color: '#fff',
            padding: '0.85rem 2rem',
            fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
            letterSpacing: '0.05em', textTransform: 'uppercase' as const,
          }}>
            Agendar una reunión →
          </Link>
        </AnimOnScroll>
      </div>

      <AnimOnScroll direction="left" delay={0.15}>
        <div style={{
          background: NAVY, padding: '2.5rem',
          borderRadius: '6px',
          boxShadow: '0 24px 60px rgba(13,43,69,0.15)',
        }}>
          <div style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
            Áreas de revisión
          </div>
          {[
            { label: 'Estados financieros', value: 'IFRS · PCGA · Normativa local' },
            { label: 'Estructura de deuda', value: 'Bancaria · Bonos · Covenants' },
            { label: 'Contingencias', value: 'Fiscal · Laboral · Legal' },
            { label: 'Calidad del EBITDA', value: 'Ajustes · Normalización · Run-rate' },
          ].map((item) => (
            <div key={item.label} style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: '1rem 0',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>{item.label}</span>
              <span style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 600, textAlign: 'right' as const, maxWidth: '55%' }}>{item.value}</span>
            </div>
          ))}
        </div>
      </AnimOnScroll>
    </div>
  </div>
</section>

      {/* RESULTADOS */}
      <section style={{ background: COLOR, padding: '2.5rem 2rem' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem', textAlign: 'center' as const,
        }}>
          {resultados.map((r) => (
            <div key={r.label}>
              <p style={{
                fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                fontWeight: 700, color: '#fff', margin: 0,
              }}>{r.valor}</p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', margin: '0.25rem 0 0', lineHeight: 1.4 }}>
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ALCANCE */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimOnScroll direction="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', background: 'var(--gold)' }} />
              <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>ALCANCE DEL SERVICIO</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700, color: NAVY, lineHeight: 1.2, marginBottom: '3rem',
            }}>¿Qué incluye el due diligence financiero?</h2>
          </AnimOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {alcance.map((item, i) => (
              <AnimOnScroll key={item.titulo} direction="up" delay={i * 0.08}>
                <div style={{
                  padding: '1.75rem', border: '1px solid rgba(13,43,69,0.08)',
                  borderTop: `3px solid ${COLOR}`, borderRadius: '6px', background: '#fff',
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: NAVY, marginBottom: '0.75rem' }}>{item.titulo}</h3>
                  <p style={{ color: '#4A5568', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{item.descripcion}</p>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section style={{ background: 'var(--canvas, #F8FAFC)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <AnimOnScroll direction="up">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '2.5rem', height: '2px', background: 'var(--gold)' }} />
                <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>PERFIL DEL CLIENTE</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700, color: NAVY, lineHeight: 1.2, marginBottom: '2rem',
              }}>¿Es este servicio para su empresa?</h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
                {paraQuien.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '20px', height: '20px', flexShrink: 0, marginTop: '2px',
                      background: COLOR, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </AnimOnScroll>

            <AnimOnScroll direction="left" delay={0.1}>
              <div style={{ background: NAVY, borderRadius: '8px', padding: '2.5rem' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '1rem', opacity: 0.6 }}>"</div>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '2rem' }}>
                  Una transacción mal analizada no solo destruye valor: puede comprometer la reputación del directorio que la aprobó. Nuestro trabajo es que eso no ocurra.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', background: COLOR,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, color: '#fff', fontSize: '0.9rem',
                  }}>AB</div>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>Andrés Bustos A.</p>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', margin: '0.15rem 0 0' }}>Fundador & Director — AB Advisory</p>
                  </div>
                </div>
              </div>
            </AnimOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AnimOnScroll direction="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', background: 'var(--gold)' }} />
              <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>PREGUNTAS FRECUENTES</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: NAVY, lineHeight: 1.2, marginBottom: '3rem',
            }}>Preguntas que nos hacen frecuentemente.</h2>
          </AnimOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.5rem' }}>
            {faqs.map((faq, i) => (
              <AnimOnScroll key={i} direction="up" delay={i * 0.08}>
                <div style={{ padding: '1.75rem', background: 'var(--canvas, #F8FAFC)', borderRadius: '6px', borderLeft: `3px solid ${COLOR}` }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: NAVY, marginBottom: '0.75rem' }}>{faq.pregunta}</h3>
                  <p style={{ color: '#4A5568', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{faq.respuesta}</p>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: NAVY, padding: '5rem 2rem', textAlign: 'center' as const }}>
        <AnimOnScroll direction="up">
          <p style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
            MANDATOS DE ASESORÍA A MEDIDA
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem',
          }}>
            ¿Tiene una transacción en curso<br />que requiere análisis independiente?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Cuéntenos el contexto de la transacción. Un socio de la firma revisará su caso bajo estricta confidencialidad y presentará una propuesta con alcance y plazos definidos.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center',
              background: COLOR, color: '#fff', padding: '1rem 2.5rem',
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>Agendar una reunión →</Link>
            <Link href="/servicios/financiero" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)',
              padding: '1rem 2.5rem',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>Ver Asesoría Financiera</Link>
          </div>
        </AnimOnScroll>
      </section>

    </main>
  )
}
