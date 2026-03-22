'use client'

import Link from 'next/link'
import AnimOnScroll from '@/components/AnimOnScroll'

const COLOR = '#0F4C7A'
const NAVY = '#0D2B45'

const alcance = [
  {
    titulo: 'Programa de cumplimiento Ley 20.393',
    descripcion: 'Diseño e implementación del Modelo de Prevención de Delitos conforme a la Ley 20.393 (cohecho, lavado de activos, financiamiento del terrorismo, receptación). Documentación completa para certificación ante la CMF.',
  },
  {
    titulo: 'Matriz de riesgos y controles corporativos',
    descripcion: 'Identificación y evaluación de riesgos de compliance por área funcional. Diseño de la matriz de riesgos con controles asignados, frecuencia de monitoreo y responsables definidos.',
  },
  {
    titulo: 'Políticas internas y manuales de cumplimiento',
    descripcion: 'Redacción de políticas corporativas: código de conducta, política antifraude, política de regalos y conflictos de interés, política de denuncias y canal de whistleblowing conforme a regulación vigente.',
  },
  {
    titulo: 'Capacitación a equipos directivos y colaboradores',
    descripcion: 'Programas de formación presenciales y virtuales para directores, ejecutivos y colaboradores clave. Registro y certificación de asistencia para acreditar el cumplimiento ante organismos reguladores.',
  },
  {
    titulo: 'Canal de denuncias y gestión de casos',
    descripcion: 'Diseño e implementación del canal de denuncias anónimo. Protocolo de investigación y gestión de casos, con reportería al comité de compliance y al directorio.',
  },
  {
    titulo: 'Compliance laboral y normativa vigente',
    descripcion: 'Revisión del cumplimiento de la normativa laboral vigente: Código del Trabajo, Ley 20.393, Ley Karin y regulación de teletrabajo. Identificación de contingencias antes de una fiscalización.',
  },
]

const paraQuien = [
  'Empresas con exposición a riesgos de delitos económicos según Ley 20.393',
  'Grupos empresariales que requieren un programa de compliance corporativo integrado',
  'Directorios que necesitan evidencia documentada de supervisión y control',
  'Empresas que buscan certificación de su modelo de prevención ante la CMF',
  'Organizaciones con proveedores o socios internacionales que exigen estándares de compliance',
]

const resultados = [
  { valor: 'Ley 20.393', label: 'Marco normativo de referencia' },
  { valor: 'UAI', label: 'Compliance Officer Certificado' },
  { valor: 'CMF', label: 'Estándar de certificación' },
  { valor: '100%', label: 'Mandatos completados sin observaciones regulatorias' },
]

const faqs = [
  {
    pregunta: '¿Qué empresas están obligadas por la Ley 20.393?',
    respuesta: 'La Ley 20.393 establece la responsabilidad penal de las personas jurídicas por delitos de cohecho, lavado de activos, financiamiento del terrorismo y receptación, entre otros. Si bien la implementación de un Modelo de Prevención no es obligatoria, es la única eximente de responsabilidad penal. Cualquier empresa con actividad comercial significativa debería contar con uno.',
  },
  {
    pregunta: '¿Cuánto tiempo toma implementar un programa de compliance?',
    respuesta: 'Un modelo de prevención completo bajo Ley 20.393 toma entre 3 y 6 meses, incluyendo diagnóstico, diseño de políticas, implementación de controles, capacitación y documentación. Para empresas con operaciones más complejas o múltiples sociedades, el plazo puede extenderse a 9 meses.',
  },
  {
    pregunta: '¿Qué es un Compliance Officer Certificado?',
    respuesta: 'Es un profesional con formación especializada en derecho penal corporativo, sistemas de cumplimiento y gestión de riesgos. Andrés Bustos A. cuenta con la certificación de Compliance Officer de la Universidad Adolfo Ibáñez (UAI), lo que garantiza el nivel técnico y jurídico requerido para diseñar programas de compliance ante organismos reguladores.',
  },
  {
    pregunta: '¿Pueden certificar el modelo ante la CMF?',
    respuesta: 'Sí. Acompañamos el proceso completo de certificación del Modelo de Prevención ante la Comisión para el Mercado Financiero, incluyendo la preparación de la documentación, revisión técnica y coordinación con el organismo certificador.',
  },
]

export default function ComplianceContent() {
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
        <span style={{ color: COLOR }}>Compliance Corporativo</span>
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
              05 · COMPLIANCE CORPORATIVO
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
            Compliance corporativo sin zonas grises.
          </h1>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.15}>
          <p style={{
            fontSize: '1.05rem', color: '#4A5568',
            lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '500px',
          }}>
            Diseño e implementación de programas de cumplimiento normativo bajo Ley 20.393 y regulaciones sectoriales. Compliance Officer Certificado UAI con experiencia en grupos empresariales complejos.
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
            Marco normativo
          </div>
          {[
            { label: 'Prevención de delitos', value: 'Ley 20.393' },
            { label: 'Certificación profesional', value: 'Compliance Officer · UAI' },
            { label: 'Regulador de referencia', value: 'CMF · Fiscalía de Chile' },
            { label: 'Normativa laboral', value: 'Ley Karin · Código del Trabajo' },
          ].map((item) => (
            <div key={item.label} style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: '1rem 0',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>{item.label}</span>
              <span style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>{item.value}</span>
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
              <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                ALCANCE DEL SERVICIO
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700, color: NAVY, lineHeight: 1.2, marginBottom: '3rem',
            }}>
              ¿Qué incluye el programa de compliance?
            </h2>
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
                <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                  PERFIL DEL CLIENTE
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700, color: NAVY, lineHeight: 1.2, marginBottom: '2rem',
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

            <AnimOnScroll direction="left" delay={0.1}>
              <div style={{ background: NAVY, borderRadius: '8px', padding: '2.5rem' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '1rem', opacity: 0.6 }}>"</div>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '2rem' }}>
                  El compliance no es un manual en un cajón: es una cultura que se construye con políticas claras, capacitación real y liderazgo visible desde el directorio hacia abajo.
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
            ¿Su empresa tiene un programa de compliance<br />que resistiría una investigación?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Cuéntenos el estado actual de su programa. Un socio de la firma revisará su caso y presentará una propuesta con alcance y plazos definidos.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center',
              background: COLOR, color: '#fff', padding: '1rem 2.5rem',
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>Agendar una reunión →</Link>
            <Link href="/servicios/auditoria" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)',
              padding: '1rem 2.5rem',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>Ver Auditoría & Control Interno</Link>
          </div>
        </AnimOnScroll>
      </section>

    </main>
  )
}
