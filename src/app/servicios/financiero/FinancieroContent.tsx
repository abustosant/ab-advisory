'use client'

import Link from 'next/link'
import Image from 'next/image'
import AnimOnScroll from '@/components/AnimOnScroll'

const COLOR = '#0284C7'
const NAVY = '#0D2B45'

const alcance = [
  {
    titulo: 'Reestructuración y refinanciamiento de deuda',
    descripcion: 'Diagnóstico de pasivos, negociación con acreedores y diseño de estructuras de deuda sostenibles. Experiencia comprobada en reestructuraciones de USD 15M con mejora del 20% en eficiencia de caja.',
  },
  {
    titulo: 'Modelos DCF, valorización y M&A support',
    descripcion: 'Construcción de modelos financieros de flujo de caja descontado, valorización de empresas y soporte en procesos de fusiones y adquisiciones con estándares internacionales.',
  },
  {
    titulo: 'Rolling Forecast 6QTR methodology',
    descripcion: 'Implementación de pronósticos financieros dinámicos a 6 trimestres, alineados con la estrategia del directorio. Reduce la incertidumbre y mejora la toma de decisiones en más de un 25%.',
  },
  {
    titulo: 'Dashboards Power BI para directorio',
    descripcion: 'Diseño e implementación de tableros ejecutivos en Power BI con KPIs financieros críticos, visualización de flujos y alertas tempranas. Información en tiempo real para decisiones de directorio.',
  },
  {
    titulo: 'Planificación financiera estratégica',
    descripcion: 'Acompañamiento en la construcción del plan financiero anual, presupuestos por área y análisis de escenarios para sustentar decisiones de inversión y crecimiento.',
  },
  {
    titulo: 'Reporting ejecutivo y de directorio',
    descripcion: 'Preparación de reportes ejecutivos mensuales con análisis de variaciones, indicadores clave y narrativa financiera clara para directorios, socios y stakeholders externos.',
  },
]

const paraQuien = [
  'CFOs y Gerentes de Finanzas que necesitan soporte técnico especializado',
  'Empresas medianas en proceso de crecimiento o restructuración',
  'Grupos empresariales que requieren consolidación y reporting ejecutivo',
  'Directorios que exigen información financiera de calidad internacional',
  'Empresas en procesos de due diligence o búsqueda de financiamiento',
]

const resultados = [
  { valor: 'USD 15M', label: 'En deuda reestructurada con mejora de caja' },
  { valor: '+25%', label: 'Precisión en proyecciones financieras' },
  { valor: '40%', label: 'Reducción en tiempos de cierre financiero' },
  { valor: '100%', label: 'Cumplimiento SII y normativa local' },
]

const faqs = [
  {
    pregunta: '¿Cuánto tiempo toma una reestructuración de deuda?',
    respuesta: 'Depende de la complejidad y número de acreedores. Un proceso típico toma entre 60 y 120 días desde el diagnóstico hasta la firma de acuerdos. Lo acompañamos en cada etapa.',
  },
  {
    pregunta: '¿Trabajan con empresas de cualquier tamaño?',
    respuesta: 'Nos especializamos en empresas medianas y grandes con dotaciones significativas y estructuras financieras complejas. Si su empresa factura sobre UF 50.000 anuales, somos el perfil adecuado.',
  },
  {
    pregunta: '¿Qué diferencia a AB Advisory de un consultor financiero independiente?',
    respuesta: 'Experiencia comprobada en roles corporativos de primera línea — CFO, Subgerente de Contabilidad en LATAM Airlines y Besalco — con las herramientas de una firma: SAP FI/CO, IFRS, Power BI y metodologías de multinacional.',
  },
  {
    pregunta: '¿Pueden integrarse con nuestro equipo interno?',
    respuesta: 'Sí. Trabajamos en modalidad de soporte al equipo existente o como responsables directos del área, según lo que su empresa necesite. Presencial en Santiago o remoto.',
  },
]

export default function FinancieroContent() {
  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}>

{/* HERO */}
<section style={{
  background: 'linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 50%, #E0F2FE 100%)',
  paddingTop: '7rem',
  paddingBottom: '5rem',
  position: 'relative',
  overflow: 'hidden',
}}>
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: `radial-gradient(circle at 70% 30%, rgba(2,132,199,0.1) 0%, transparent 55%)`,
    pointerEvents: 'none',
  }} />
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>

    {/* Breadcrumb */}
    <AnimOnScroll direction="up">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.8rem' }}>
        <Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Inicio</Link>
        <span style={{ color: '#9CA3AF' }}>→</span>
        <Link href="/#servicios" style={{ color: '#4A5568', textDecoration: 'none' }}>Servicios</Link>
        <span style={{ color: '#9CA3AF' }}>→</span>
        <span style={{ color: COLOR }}>Asesoría Financiera</span>
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
            <div style={{ width: '2.5rem', height: '2px', background: COLOR }} />
            <span style={{ color: COLOR, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
              01 · FINANZAS CORPORATIVAS
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
            Decisiones financieras con respaldo técnico real.
          </h1>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.15}>
          <p style={{
            fontSize: '1.05rem', color: '#4A5568',
            lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '500px',
          }}>
            Estructuración de deuda, modelamiento financiero y planificación estratégica para CFOs y directorios que exigen el mismo rigor técnico de las Big Four — con acceso directo al experto.
          </p>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.2}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'var(--navy, #0D2B45)', color: '#fff',
              padding: '0.85rem 2rem', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.05em', textTransform: 'uppercase' as const,
            }}>
              Agendar una reunión →
            </Link>
          </div>
        </AnimOnScroll>
      </div>

      {/* Imagen */}
      <AnimOnScroll direction="left" delay={0.15}>
        <div style={{
          borderRadius: '6px', overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(13,43,69,0.15)',
          border: '1px solid rgba(13,43,69,0.06)',
        }}>
          <Image
            src="/images/servicios/financiero.webp"
            alt="Asesoría Financiera Corporativa — AB Advisory"
            width={560}
            height={380}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' as const }}
            priority
          />
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
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 700, color: '#fff', margin: 0,
              }}>{r.valor}</p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', margin: '0.25rem 0 0', lineHeight: 1.4 }}>
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ALCANCE DEL SERVICIO */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimOnScroll direction="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', background: COLOR }} />
              <span style={{ color: COLOR, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                ALCANCE DEL SERVICIO
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700, color: NAVY,
              lineHeight: 1.2, marginBottom: '3rem',
            }}>
              ¿Qué incluye la asesoría financiera?
            </h2>
          </AnimOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {alcance.map((item, i) => (
              <AnimOnScroll key={item.titulo} direction="up" delay={i * 0.08}>
                <div style={{
                  padding: '1.75rem',
                  border: '1px solid rgba(13,43,69,0.08)',
                  borderTop: `3px solid ${COLOR}`,
                  borderRadius: '6px',
                  background: '#fff',
                  transition: 'box-shadow 0.2s',
                }}>
                  <h3 style={{
                    fontWeight: 700, fontSize: '0.95rem',
                    color: NAVY, marginBottom: '0.75rem',
                  }}>{item.titulo}</h3>
                  <p style={{
                    color: '#4A5568', fontSize: '0.875rem',
                    lineHeight: 1.7, margin: 0,
                  }}>{item.descripcion}</p>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section style={{ background: 'var(--canvas, #F8FAFC)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <AnimOnScroll direction="up">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '2.5rem', height: '2px', background: COLOR }} />
                <span style={{ color: COLOR, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                  PERFIL DEL CLIENTE
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700, color: NAVY,
                lineHeight: 1.2, marginBottom: '2rem',
              }}>
                ¿Es este servicio para su empresa?
              </h2>
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

            {/* Quote del fundador */}
            <AnimOnScroll direction="left" delay={0.1}>
              <div style={{
                background: NAVY, borderRadius: '8px',
                padding: '2.5rem', position: 'relative',
              }}>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '4rem', color: COLOR,
                  lineHeight: 1, marginBottom: '1rem',
                  opacity: 0.6,
                }}>"</div>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '1rem', lineHeight: 1.75,
                  fontStyle: 'italic', marginBottom: '2rem',
                }}>
                  Cada empresa en Chile — sin importar su tamaño — merece el mismo estándar técnico que exigen las empresas de alto desempeño global. Eso no es un privilegio: es la base para crecer con solidez.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: COLOR,
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
              <div style={{ width: '2.5rem', height: '2px', background: COLOR }} />
              <span style={{ color: COLOR, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                PREGUNTAS FRECUENTES
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: NAVY,
              lineHeight: 1.2, marginBottom: '3rem',
            }}>
              Preguntas que nos hacen frecuentemente.
            </h2>
          </AnimOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.5rem' }}>
            {faqs.map((faq, i) => (
              <AnimOnScroll key={i} direction="up" delay={i * 0.08}>
                <div style={{
                  padding: '1.75rem',
                  background: 'var(--canvas, #F8FAFC)',
                  borderRadius: '6px',
                  borderLeft: `3px solid ${COLOR}`,
                }}>
                  <h3 style={{
                    fontWeight: 700, fontSize: '0.95rem',
                    color: NAVY, marginBottom: '0.75rem',
                  }}>{faq.pregunta}</h3>
                  <p style={{
                    color: '#4A5568', fontSize: '0.875rem',
                    lineHeight: 1.7, margin: 0,
                  }}>{faq.respuesta}</p>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: NAVY, padding: '5rem 2rem', textAlign: 'center' as const }}>
        <AnimOnScroll direction="up">
          <p style={{ color: COLOR, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
            PRIMERA CONVERSACIÓN SIN COSTO
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem',
          }}>
            ¿Listo para ordenar las finanzas<br />de su empresa?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Cuéntenos su situación. Un socio de la firma analizará su caso y le presentará una propuesta a medida.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center',
              background: COLOR, color: '#fff',
              padding: '1rem 2.5rem', borderRadius: '4px',
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>
              Agendar una reunión →
            </Link>
            <Link href="/#servicios" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)',
              padding: '1rem 2.5rem', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>
              Ver todos los servicios
            </Link>
          </div>
        </AnimOnScroll>
      </section>

    </main>
  )
}