'use client'

import Link from 'next/link'
import Image from 'next/image'
import AnimOnScroll from '@/components/AnimOnScroll'

const COLOR = '#1B5E3B'
const NAVY = '#0D2B45'

const alcance = [
  {
    titulo: 'Implementación y actualización IFRS/NIC',
    descripcion: 'Diagnóstico de brechas entre normativa local y IFRS, diseño del plan de convergencia e implementación completa. Actualización permanente ante cambios normativos del IASB con impacto en Chile.',
  },
  {
    titulo: 'Consolidación de grupos empresariales',
    descripcion: 'Consolidación contable de grupos con múltiples entidades — experiencia comprobada en consolidación de hasta 34 empresas simultáneas sin observaciones de auditores externos.',
  },
  {
    titulo: 'Shared Services Center contable',
    descripcion: 'Diseño e implementación de centros de servicios compartidos para grupos empresariales, estandarizando procesos, reduciendo costos y mejorando el control interno.',
  },
  {
    titulo: 'Preparación para auditorías Big Four',
    descripcion: 'Preparación técnica exhaustiva para enfrentar auditorías de Deloitte, PwC, EY y KPMG. Revisión de estados financieros, notas y documentación de soporte bajo estándares internacionales.',
  },
  {
    titulo: 'Cierre contable y reporting mensual',
    descripcion: 'Gestión del proceso de cierre mensual con metodologías que reducen los tiempos en hasta un 40%. Preparación de estados financieros bajo IFRS y normativa SII.',
  },
  {
    titulo: 'Contabilidad SAP FI/CO',
    descripcion: 'Configuración, parametrización y operación de módulos SAP FI/CO HANA. Key User certificado con experiencia en implantaciones corporativas de gran escala.',
  },
]

const paraQuien = [
  'Grupos empresariales con múltiples entidades que deben consolidar',
  'Empresas que requieren reportes bajo IFRS para bancos o socios extranjeros',
  'Compañías que enfrentan auditorías Big Four y necesitan preparación técnica',
  'CFOs que quieren reducir tiempos de cierre sin comprometer la calidad',
  'Empresas en proceso de implementación o actualización SAP FI/CO',
]

const resultados = [
  { valor: '34', label: 'Empresas consolidadas sin observaciones' },
  { valor: '40%', label: 'Reducción en tiempos de cierre' },
  { valor: '100%', label: 'Cumplimiento normativa SII e IFRS' },
  { valor: 'Big 4', label: 'Auditorías superadas sin salvedades' },
]

const faqs = [
  {
    pregunta: '¿Qué diferencia hay entre IFRS y las normas contables chilenas?',
    respuesta: 'Las IFRS (International Financial Reporting Standards) son normas internacionales emitidas por el IASB. Chile adoptó IFRS para empresas que cotizan en bolsa y grupos con reporte internacional. La diferencia principal está en el reconocimiento de activos, leasing (IFRS 16), instrumentos financieros e impuestos diferidos, entre otros.',
  },
  {
    pregunta: '¿Cuánto tiempo toma implementar IFRS en una empresa mediana?',
    respuesta: 'Un proyecto de convergencia completo toma entre 6 y 18 meses, dependiendo de la complejidad de la empresa y el nivel de preparación inicial. Lo dividimos en fases: diagnóstico, diseño, implementación y monitoreo, para minimizar el impacto operacional.',
  },
  {
    pregunta: '¿Pueden tomar a cargo la contabilidad completa de nuestra empresa?',
    respuesta: 'Sí, operamos en modalidad de outsourcing contable completo o como soporte técnico especializado al equipo interno. Definimos el alcance según sus necesidades específicas y el tamaño de su operación.',
  },
  {
    pregunta: '¿Trabajan con SAP u otros ERP?',
    respuesta: 'Tenemos certificación SAP FI/CO HANA y experiencia en implantaciones corporativas. También trabajamos con otros ERP según el sistema de su empresa. La herramienta se adapta a sus procesos, no al revés.',
  },
]

export default function ContableContent() {
  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}>

{/* HERO */}
<section style={{
  background: 'linear-gradient(135deg, #E8F4FD 0%, #F0F7FF 50%, #EAF3FB 100%)',
  paddingTop: '7rem',
  paddingBottom: '5rem',
  position: 'relative',
  overflow: 'hidden',
}}>
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: `radial-gradient(circle at 70% 30%, rgba(19,128,64,0.07) 0%, transparent 55%)`,
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
        <span style={{ color: COLOR }}>Contabilidad & IFRS</span>
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
              02 · CONTABILIDAD · IFRS
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
            Contabilidad IFRS sin observaciones. Siempre.
          </h1>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.15}>
          <p style={{
            fontSize: '1.05rem', color: '#4A5568',
            lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '500px',
          }}>
            Implementación IFRS/NIC, consolidación de grupos y outsourcing contable para empresas con exigencias de reporte internacional. Preparación técnica para auditorías Big Four.
          </p>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.2}>
          <Link
            href="/contacto"
            style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'var(--navy, #0D2B45)', color: '#fff',
              padding: '0.85rem 2rem', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.05em', textTransform: 'uppercase' as const,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1B5E3B')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--navy, #0D2B45)')}
          >
            Solicitar diagnóstico gratuito →
          </Link>
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
            src="/images/servicios/contable.webp"
            alt="Contabilidad IFRS — AB Advisory"
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

      {/* MÉTRICAS */}
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

      {/* ALCANCE */}
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
              ¿Qué incluye el servicio contable?
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
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: NAVY, marginBottom: '0.75rem' }}>
                    {item.titulo}
                  </h3>
                  <p style={{ color: '#4A5568', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                    {item.descripcion}
                  </p>
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

            {/* Quote */}
            <AnimOnScroll direction="left" delay={0.1}>
              <div style={{ background: NAVY, borderRadius: '8px', padding: '2.5rem', position: 'relative' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: COLOR, lineHeight: 1, marginBottom: '1rem', opacity: 0.6 }}>"</div>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '2rem' }}>
                  Consolidamos 34 empresas bajo IFRS sin una sola observación de auditoría. Ese es el estándar que llevamos a cada cliente.
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
          <p style={{ color: COLOR, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
            PRIMERA CONVERSACIÓN SIN COSTO
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem',
          }}>
            ¿Su contabilidad está lista para<br />una auditoría internacional?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Le ayudamos a saberlo. Diagnóstico inicial sin costo, respuesta en menos de 24 horas hábiles.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center',
              background: COLOR, color: '#fff',
              padding: '1rem 2.5rem', borderRadius: '4px',
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>
              Solicitar diagnóstico gratuito →
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