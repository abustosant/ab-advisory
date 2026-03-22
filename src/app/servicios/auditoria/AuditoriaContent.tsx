'use client'

import Link from 'next/link'
import AnimOnScroll from '@/components/AnimOnScroll'

const COLOR = '#0F4C7A'
const NAVY = '#0D2B45'

const alcance = [
  {
    titulo: 'Diseño y ejecución de auditorías internas',
    descripcion: 'Planificación y ejecución de auditorías internas bajo metodologías COSO y estándares IIA. Identificación de riesgos, evaluación de controles y emisión de informes con hallazgos y recomendaciones priorizadas.',
  },
  {
    titulo: 'Revisión de controles internos y procesos',
    descripcion: 'Evaluación del sistema de control interno por área funcional: finanzas, operaciones, compras y cumplimiento normativo. Diseño de matrices de riesgo y control alineadas con los objetivos estratégicos de la empresa.',
  },
  {
    titulo: 'Preparación para auditorías Big Four',
    descripcion: 'Acompañamiento técnico completo para enfrentar auditorías de Deloitte, PwC, EY y KPMG. Revisión previa de estados financieros, notas, documentación de soporte y respuestas a hallazgos preliminares.',
  },
  {
    titulo: 'Informes de hallazgos y recomendaciones',
    descripcion: 'Elaboración de informes ejecutivos con hallazgos clasificados por nivel de riesgo (crítico, alto, medio), causa raíz identificada, impacto estimado y recomendaciones de remediación con responsables y plazos.',
  },
  {
    titulo: 'Seguimiento de planes de remediación',
    descripcion: 'Monitoreo periódico del avance en la implementación de acciones correctivas. Reportería al directorio y al comité de auditoría con evidencia de cierre de hallazgos.',
  },
  {
    titulo: 'Auditoría de procesos financieros y contables',
    descripcion: 'Revisión específica de ciclos de ingresos, egresos, tesorería, activos fijos e inventarios. Verificación de la correcta aplicación de IFRS y normativa SII en los registros contables.',
  },
]

const paraQuien = [
  'Empresas que enfrentan auditorías Big Four y necesitan preparación técnica exhaustiva',
  'Directorios y comités de auditoría que requieren visibilidad independiente del control interno',
  'CFOs que identifican riesgos en sus procesos y buscan un diagnóstico objetivo',
  'Grupos empresariales con múltiples sociedades que deben auditar de forma integrada',
  'Empresas que han recibido hallazgos de auditores externos y necesitan remediarlos',
]

const resultados = [
  { valor: '0', label: 'Observaciones sin respuesta en procesos Big Four' },
  { valor: '34+', label: 'Entidades auditadas bajo estándares internacionales' },
  { valor: '100%', label: 'Cumplimiento normativo en mandatos ejecutados' },
  { valor: 'COSO', label: 'Marco de referencia para control interno' },
]

const faqs = [
  {
    pregunta: '¿En qué se diferencia una auditoría interna de una auditoría externa?',
    respuesta: 'La auditoría externa es realizada por una firma independiente (como las Big Four) y emite una opinión sobre los estados financieros. La auditoría interna es un proceso continuo que evalúa los controles y procesos internos para reducir riesgos operacionales y preparar a la empresa para enfrentar la auditoría externa sin sorpresas.',
  },
  {
    pregunta: '¿Cuánto tiempo toma un proceso de auditoría interna?',
    respuesta: 'Depende del alcance. Una auditoría de ciclo específico (por ejemplo, tesorería o ciclo de ingresos) puede completarse en 3 a 6 semanas. Una auditoría integral de toda la empresa toma entre 2 y 4 meses, incluyendo planificación, trabajo de campo y emisión del informe final.',
  },
  {
    pregunta: '¿Pueden acompañarnos durante una fiscalización de la CMF o SII?',
    respuesta: 'Sí. Brindamos soporte técnico durante procesos de fiscalización, preparamos la documentación requerida, coordinamos las respuestas con su equipo y acompañamos las reuniones con el organismo regulador para minimizar contingencias.',
  },
  {
    pregunta: '¿Trabajan bajo metodología COSO o IIA?',
    respuesta: 'Trabajamos bajo el marco COSO (Committee of Sponsoring Organizations) para la evaluación de control interno y seguimos los estándares profesionales del IIA (Institute of Internal Auditors) en la ejecución de auditorías. Esto garantiza comparabilidad con estándares internacionales y aceptación por auditores externos.',
  },
]

export default function AuditoriaContent() {
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
        <span style={{ color: COLOR }}>Auditoría & Control Interno</span>
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
              04 · AUDITORÍA & CONTROL INTERNO
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
            Control interno y auditoría con criterio Big Four.
          </h1>
        </AnimOnScroll>

        <AnimOnScroll direction="up" delay={0.15}>
          <p style={{
            fontSize: '1.05rem', color: '#4A5568',
            lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '500px',
          }}>
            Diseño de controles, ejecución de auditorías internas y preparación técnica para enfrentar revisiones de auditores externos con estándares de las firmas más exigentes del mercado.
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

      {/* Stat panel en lugar de imagen */}
      <AnimOnScroll direction="left" delay={0.15}>
        <div style={{
          background: NAVY, padding: '2.5rem',
          borderRadius: '6px',
          boxShadow: '0 24px 60px rgba(13,43,69,0.15)',
        }}>
          <div style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
            Marco de referencia
          </div>
          {[
            { label: 'Marco de control interno', value: 'COSO 2013' },
            { label: 'Estándares profesionales', value: 'IIA · ISACA' },
            { label: 'Normativa local', value: 'CMF · SII · DT' },
            { label: 'Experiencia Big Four', value: 'Deloitte · PwC · EY · KPMG' },
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
              <div style={{ width: '2.5rem', height: '2px', background: 'var(--gold)' }} />
              <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                ALCANCE DEL SERVICIO
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700, color: NAVY,
              lineHeight: 1.2, marginBottom: '3rem',
            }}>
              ¿Qué incluye la auditoría & control interno?
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem', alignItems: 'center',
          }}>
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
              <div style={{ background: NAVY, borderRadius: '8px', padding: '2.5rem', position: 'relative' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '1rem', opacity: 0.6 }}>"</div>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '2rem' }}>
                  El hallazgo que no se identifica antes de la auditoría externa siempre cuesta más — en tiempo, en reputación y en credibilidad ante el directorio. Prefiero encontrarlo yo primero.
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
              <div style={{ width: '2.5rem', height: '2px', background: 'var(--gold)' }} />
              <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                PREGUNTAS FRECUENTES
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: NAVY, lineHeight: 1.2, marginBottom: '3rem',
            }}>
              Preguntas que nos hacen frecuentemente.
            </h2>
          </AnimOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.5rem' }}>
            {faqs.map((faq, i) => (
              <AnimOnScroll key={i} direction="up" delay={i * 0.08}>
                <div style={{
                  padding: '1.75rem', background: 'var(--canvas, #F8FAFC)',
                  borderRadius: '6px', borderLeft: `3px solid ${COLOR}`,
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
          <p style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
            MANDATOS DE ASESORÍA A MEDIDA
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem',
          }}>
            ¿Su empresa está lista para<br />una auditoría de nivel internacional?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Cuéntenos su situación. Un socio de la firma revisará su caso y presentará una propuesta con alcance y plazos definidos.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center',
              background: COLOR, color: '#fff',
              padding: '1rem 2.5rem',
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>
              Agendar una reunión →
            </Link>
            <Link href="/servicios/compliance" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)',
              padding: '1rem 2.5rem',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase' as const,
            }}>
              Ver Compliance Corporativo
            </Link>
          </div>
        </AnimOnScroll>
      </section>

    </main>
  )
}
