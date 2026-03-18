'use client'
 
import Image from 'next/image'
import Link from 'next/link'
import AnimOnScroll from '@/components/AnimOnScroll'
 
const historia = [
  {
    año: '2008',
    hito: 'Titulación — UTEM',
    descripcion: 'Titulado como Contador Auditor e Ingeniero Comercial en la Universidad Tecnológica Metropolitana (UTEM), Santiago de Chile. Base técnica para una carrera en finanzas corporativas de alto nivel.',
  },
  {
    año: '2011',
    hito: 'Chief of Finances — Sitel International Chile',
    descripcion: 'Primer rol de dirección financiera en empresa multinacional de servicios. Gestión financiera local bajo estándares corporativos internacionales.',
  },
  {
    año: '2012',
    hito: 'Jefe de Contabilidad Corporativa — LATAM Airlines Group',
    descripcion: 'Contabilidad corporativa en una de las aerolíneas más complejas de Latinoamérica. Consolidación de operaciones multinacionales y reportería bajo IFRS. Enero 2012 – Mayo 2015.',
  },
  {
    año: '2015',
    hito: 'Sub-Gerente de Contabilidad Corporativa — Besalco Maquinarias S.A.',
    descripcion: 'Reestructuración de USD 15M en deuda, implementación de SAP FI/CO HANA y consolidación de 34 empresas bajo IFRS sin observaciones. Junio 2015 – Diciembre 2018.',
  },
  {
    año: '2019',
    hito: 'CFO — Grupo LatamWin',
    descripcion: 'Dirección financiera corporativa completa: modelamiento financiero, planificación estratégica, cumplimiento normativo y liderazgo de equipos de finanzas y contabilidad. Enero 2019 – Septiembre 2025.',
  },
  {
    año: '2025',
    hito: 'Fundación de AB Advisory',
    descripcion: 'Con más de 17 años en primera línea corporativa, se funda AB Advisory para llevar ese mismo nivel de excelencia técnica a empresas medianas con visión de crecimiento.',
  },
]
 
const valores = [
  {
    numero: '01',
    titulo: 'Rigor técnico sin concesiones',
    descripcion: 'Aplicamos los mismos estándares de una Big Four — IFRS, SAP, modelos DCF — pero con el compromiso personal que solo una boutique puede garantizar.',
  },
  {
    numero: '02',
    titulo: 'Transparencia radical',
    descripcion: 'Sin letra chica. Sin costos ocultos. Cada propuesta detalla alcance, plazos y honorarios. Usted aprueba cada paso antes de comenzar.',
  },
  {
    numero: '03',
    titulo: 'Orientación al resultado',
    descripcion: 'Medimos nuestro éxito en los resultados de su empresa: ahorros reales, cierres más rápidos, auditorías sin observaciones.',
  },
  {
    numero: '04',
    titulo: 'Acceso directo al experto',
    descripcion: 'Usted no habla con un analista junior. Habla directamente con un socio de la firma — el mismo profesional que ejecuta el trabajo.',
  },
]
 
const credenciales = [
  // Universidad de Chile
  { institucion: 'Universidad de Chile', credencial: 'Magíster en Información Financiero Contable', año: 'En curso · 2025–2028' },
  { institucion: 'Universidad de Chile', credencial: 'Postítulo en Información Financiero Contable', año: '2025' },
  { institucion: 'Universidad de Chile', credencial: 'Diplomado IFRS — Actualización Normativa', año: '2024' },
  { institucion: 'Universidad de Chile', credencial: 'Diplomado en Finanzas Corporativas', año: '2021' },
  { institucion: 'Universidad de Chile', credencial: 'Diplomado IFRS — Implementación Corporativa', año: '2020' },
  // UAI
  { institucion: 'Universidad Adolfo Ibáñez', credencial: 'Compliance Officer Certificado', año: '2023' },
  { institucion: 'Universidad Adolfo Ibáñez', credencial: 'Diplomado en Compliance Corporativo', año: '2022' },
  { institucion: 'Universidad Adolfo Ibáñez', credencial: 'Diplomado en Impuestos Corporativos', año: '2021' },
  // UTEM
  { institucion: 'UTEM', credencial: 'Ingeniería Comercial, mención Finanzas', año: '2011' },
  { institucion: 'UTEM', credencial: 'Contador Auditor · Titulación con Distinción', año: '2008' },
 ]
 
export default function NosotrosContent() {
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
  {/* Gradiente decorativo sutil */}
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(26,115,167,0.08) 0%, transparent 55%)',
    pointerEvents: 'none',
  }} />
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
    <AnimOnScroll direction="up">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <div style={{ width: '2.5rem', height: '2px', background: 'var(--blue, #1A73A7)' }} />
        <span style={{ color: 'var(--blue, #1A73A7)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
          QUIÉNES SOMOS
        </span>
      </div>
    </AnimOnScroll>
 
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
    }}>
      {/* Texto */}
      <div>
        <AnimOnScroll direction="up" delay={0.1}>
          <h1 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--navy, #0D2B45)',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Una firma construida sobre veinte años de trabajo real.
          </h1>
        </AnimOnScroll>
        <AnimOnScroll direction="up" delay={0.2}>
          <p style={{
            fontSize: '1.1rem',
            color: '#4A5568',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            maxWidth: '520px',
          }}>
            AB Advisory nació para cerrar la brecha entre el rigor técnico de las Big Four y la dedicación exclusiva que solo una boutique puede ofrecer.
          </p>
        </AnimOnScroll>
        <AnimOnScroll direction="up" delay={0.3}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--navy, #0D2B45)', color: '#fff',
              padding: '0.85rem 2rem', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.05em', textTransform: 'uppercase' as const,
            }}>
              Conversemos →
            </Link>
            <Link href="/#servicios" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid rgba(13,43,69,0.25)', color: 'var(--navy, #0D2B45)',
              padding: '0.85rem 2rem', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.05em', textTransform: 'uppercase' as const,
            }}>
              Ver servicios
            </Link>
          </div>
        </AnimOnScroll>
      </div>
 
      {/* Foto */}
      <AnimOnScroll direction="left" delay={0.2}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '-1rem', right: '-1rem',
            width: '100%', height: '100%',
            border: '2px solid rgba(26,115,167,0.25)',
            borderRadius: '4px', zIndex: 0,
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            borderRadius: '4px', overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(13,43,69,0.15)',
          }}>
            <Image
              src="/images/team/andres-bustos.webp"
              alt="Andrés Bustos A. — Fundador AB Advisory"
              width={480}
              height={560}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' as const }}
              priority
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(13,43,69,0.92) 0%, transparent 100%)',
              padding: '2rem 1.5rem 1.5rem',
            }}>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
                Andrés Bustos A.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                Fundador & Director — AB Advisory
              </p>
            </div>
          </div>
        </div>
      </AnimOnScroll>
    </div>
  </div>
</section>
 
{/* MÉTRICAS */}
<section style={{
  background: '#fff',
  padding: '2.5rem 2rem',
  borderBottom: '1px solid rgba(13,43,69,0.08)',
  borderTop: '1px solid rgba(13,43,69,0.08)',
}}>
  <div style={{
    maxWidth: '1200px', margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    textAlign: 'center' as const,
  }}>
    {[
      { valor: '20+', label: 'Años de experiencia' },
      { valor: 'USD 15M', label: 'Deuda reestructurada' },
      { valor: '34', label: 'Empresas bajo IFRS' },
      { valor: 'USD 500K', label: 'Ahorros anuales' },
    ].map((m) => (
      <div key={m.label}>
        <p style={{
          fontFamily: 'var(--font-playfair, Playfair Display, serif)',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 700, color: 'var(--navy, #0D2B45)', margin: 0,
        }}>{m.valor}</p>
        <p style={{ color: '#4A5568', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
          {m.label}
        </p>
      </div>
    ))}
  </div>
</section>
 
      {/* HISTORIA */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimOnScroll direction="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', background: 'var(--blue, #1A73A7)' }} />
              <span style={{ color: 'var(--blue, #1A73A7)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                TRAYECTORIA
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700, color: 'var(--navy, #0D2B45)',
              lineHeight: 1.2, marginBottom: '3.5rem',
            }}>
              Veinte años en primera línea<br />de las finanzas corporativas.
            </h2>
          </AnimOnScroll>
 
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '5.5rem', top: 0, bottom: 0,
              width: '2px', background: 'var(--canvas, #F8FAFC)',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0' }}>
              {historia.map((item, i) => (
                <AnimOnScroll key={item.año} direction="up" delay={i * 0.1}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '5rem 1fr',
                    gap: '2.5rem',
                    alignItems: 'start',
                    paddingBottom: i < historia.length - 1 ? '3rem' : 0,
                    position: 'relative',
                  }}>
                    <div style={{ textAlign: 'right' as const, paddingTop: '0.2rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                        fontSize: '1rem', fontWeight: 700,
                        color: 'var(--blue, #1A73A7)',
                      }}>{item.año}</span>
                    </div>
                    <div style={{
                      background: 'var(--canvas, #F8FAFC)',
                      borderRadius: '6px',
                      padding: '1.5rem',
                      borderLeft: '3px solid var(--blue, #1A73A7)',
                      position: 'relative',
                    }}>
                      <div style={{
                        position: 'absolute', left: '-2.65rem', top: '1.6rem',
                        width: '10px', height: '10px',
                        background: 'var(--blue, #1A73A7)',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        boxShadow: '0 0 0 3px var(--blue, #1A73A7)',
                      }} />
                      <p style={{ fontWeight: 700, color: 'var(--navy, #0D2B45)', fontSize: '1rem', margin: '0 0 0.5rem' }}>
                        {item.hito}
                      </p>
                      <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                </AnimOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* VALORES */}
      <section style={{ background: 'var(--canvas, #F8FAFC)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimOnScroll direction="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', background: 'var(--blue, #1A73A7)' }} />
              <span style={{ color: 'var(--blue, #1A73A7)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                NUESTRA FORMA DE TRABAJAR
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700, color: 'var(--navy, #0D2B45)',
              lineHeight: 1.2, marginBottom: '3.5rem',
            }}>
              Cuatro principios que guían<br />cada compromiso.
            </h2>
          </AnimOnScroll>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {valores.map((v, i) => (
              <AnimOnScroll key={v.numero} direction="up" delay={i * 0.1}>
                <div style={{
                  background: '#fff', borderRadius: '6px', padding: '2rem',
                  borderTop: '3px solid var(--blue, #1A73A7)',
                  boxShadow: '0 2px 16px rgba(13,43,69,0.06)', height: '100%',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                    fontSize: '2.5rem', fontWeight: 700,
                    color: 'rgba(13,43,69,0.08)',
                    display: 'block', marginBottom: '1rem', lineHeight: 1,
                  }}>{v.numero}</span>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--navy, #0D2B45)', marginBottom: '0.75rem' }}>
                    {v.titulo}
                  </h3>
                  <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {v.descripcion}
                  </p>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
      </section>
 
      {/* CREDENCIALES */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimOnScroll direction="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', background: 'var(--blue, #1A73A7)' }} />
              <span style={{ color: 'var(--blue, #1A73A7)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
                FORMACIÓN Y CERTIFICACIONES
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700, color: 'var(--navy, #0D2B45)',
              lineHeight: 1.2, marginBottom: '3rem',
            }}>
              Credenciales que respaldan<br />cada recomendación.
            </h2>
          </AnimOnScroll>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}>
            {credenciales.map((c, i) => (
              <AnimOnScroll key={c.credencial} direction="up" delay={i * 0.08}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  background: 'var(--canvas, #F8FAFC)',
                  borderRadius: '6px',
                  border: '1px solid rgba(13,43,69,0.06)',
                }}>
                  <div style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    background: 'var(--navy, #0D2B45)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--navy, #0D2B45)', fontSize: '0.9rem', margin: 0 }}>
                      {c.credencial}
                    </p>
                    <p style={{ color: '#4A5568', fontSize: '0.8rem', margin: '0.2rem 0 0' }}>
                      {c.institucion} · {c.año}
                    </p>
                  </div>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
      </section>
 
      {/* CTA FINAL */}
      <section style={{ background: 'var(--navy, #0D2B45)', padding: '5rem 2rem', textAlign: 'center' as const }}>
        <AnimOnScroll direction="up">
          <p style={{ color: 'var(--blue, #1A73A7)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
            CONVERSEMOS
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem',
          }}>
            ¿Listo para trabajar con un<br />verdadero socio financiero?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Cuéntenos su desafío. Un socio de la firma analizará su caso y le presentará una propuesta a medida.
          </p>
          <Link href="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--blue, #1A73A7)', color: '#fff',
            padding: '1rem 2.5rem', borderRadius: '4px',
            fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase' as const,
          }}>
            Agendar una reunión →
          </Link>
        </AnimOnScroll>
      </section>
 
    </main>
  )
}