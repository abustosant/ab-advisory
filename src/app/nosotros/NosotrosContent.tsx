'use client'

import Link from 'next/link'
import AnimOnScroll from '@/components/AnimOnScroll'
import { SITE, FOUNDER } from '@/lib/data'

export default function NosotrosContent() {
  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)', background: 'var(--navy)' }}>

      {/* ═══════════════════ PERFIL PRINCIPAL ═══════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 80px 100px',
        background: 'var(--navy)',
      }} className="nos-profile-section">

        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '42% 58%',
          gap: '80px',
          alignItems: 'center',
        }} className="nos-profile-grid">

          {/* FOTO */}
          <AnimOnScroll direction="left">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/team/andres-bustos.webp"
                alt="Andrés Bustos A. — Fundador AB Advisory"
                style={{
                  width: '100%',
                  maxWidth: 380,
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  borderRadius: '6px',
                  filter: 'grayscale(10%)',
                }}
              />
            </div>
          </AnimOnScroll>

          {/* CONTENIDO */}
          <AnimOnScroll direction="right">
            <h1 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(2.8rem, 5vw, 4.6rem)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '.06em',
              textTransform: 'uppercase',
              color: '#F5F3EF',
              margin: '0 0 18px',
            }}>
              Andrés<br/>Bustos A.
            </h1>

            <p style={{
              fontSize: '.63rem',
              fontWeight: 600,
              letterSpacing: '.32em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              margin: '0 0 44px',
            }}>
              Director Fundador
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: 540,
              marginBottom: '44px',
            }}>
              <p style={{
                fontSize: '.88rem', fontWeight: 300,
                lineHeight: 1.9, color: 'rgba(245,243,239,0.82)', margin: 0,
              }}>
                Fundador y Director Ejecutivo de AB Advisory. Con más de 20 años de trayectoria en finanzas corporativas de alto nivel, ha liderado procesos de reestructuración de deuda por USD 15 millones y dirigido la consolidación contable de 34 empresas bajo IFRS sin observaciones en auditorías Big Four.
              </p>

              <p style={{
                fontSize: '.88rem', fontWeight: 300,
                lineHeight: 1.9, color: 'rgba(245,243,239,0.82)', margin: 0,
              }}>
                Su carrera incluye roles directivos de primera línea como <strong style={{ color: '#F5F3EF', fontWeight: 500 }}>Jefe de Contabilidad Corporativa en LATAM Airlines Group</strong>, <strong style={{ color: '#F5F3EF', fontWeight: 500 }}>Subgerente Corporativo de Contabilidad en Grupo Besalco Maquinarias</strong> y <strong style={{ color: '#F5F3EF', fontWeight: 500 }}>CFO Corporativo en Grupo LatamWin</strong>.
              </p>

              <p style={{
                fontSize: '.88rem', fontWeight: 300,
                lineHeight: 1.9, color: 'rgba(245,243,239,0.82)', margin: 0,
              }}>
                Magíster en Información Financiero Contable, Universidad de Chile. Ingeniero Comercial y Contador Auditor, UTEM. Compliance Officer Certificado, Universidad Adolfo Ibáñez.
              </p>

              <p style={{
                fontSize: '.88rem', fontWeight: 300,
                lineHeight: 1.9, color: 'rgba(245,243,239,0.82)', margin: 0,
              }}>
                Fundó AB Advisory para ofrecer a empresas y grupos empresariales en Chile asesoría con el estándar técnico de las grandes firmas internacionales — con la dedicación exclusiva que solo una boutique puede garantizar.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={`mailto:${SITE.email}`} style={{
                fontSize: '.78rem', color: 'rgba(245,243,239,0.4)',
                textDecoration: 'none', letterSpacing: '.03em', transition: 'color .2s',
              }} className="nos-contact-link">
                {SITE.email}
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '.78rem', color: 'rgba(245,243,239,0.4)',
                textDecoration: 'none', letterSpacing: '.03em', transition: 'color .2s',
              }} className="nos-contact-link">
                LinkedIn →
              </a>
            </div>
          </AnimOnScroll>

        </div>
      </section>

      {/* ═══════════════════ TRAYECTORIA ═══════════════════ */}
      <section style={{
        background: 'var(--navy2)',
        padding: '100px 80px',
        borderTop: '1px solid rgba(201,169,110,0.12)',
      }} className="nos-tray-section">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <AnimOnScroll style={{ marginBottom: 56 }}>
            <p style={{
              fontSize: '.6rem', fontWeight: 600, letterSpacing: '.32em',
              textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16,
            }}>
              Trayectoria profesional
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 300, color: '#F5F3EF',
              lineHeight: 1.1, letterSpacing: '.02em',
              textTransform: 'uppercase',
            }}>
              Formado en los entornos<br/>más exigentes del sector.
            </h2>
          </AnimOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            borderTop: '1px solid rgba(245,243,239,0.08)',
          }} className="nos-tray-grid">
            {[
              {
                periodo: '2007 — 2018',
                empresa: 'LATAM Airlines Group',
                cargo: 'Jefe de Contabilidad Corporativa',
                detalle: 'Liderazgo del área contable corporativa en uno de los grupos aeronáuticos más grandes de Latinoamérica. Consolidación bajo IFRS, reportería a directorio y gestión de auditorías Big Four.',
              },
              {
                periodo: '2018 — 2021',
                empresa: 'Grupo Besalco Maquinarias',
                cargo: 'Subgerente Corporativo de Contabilidad',
                detalle: 'Consolidación contable bajo normas internacionales, implementación de controles internos y reestructuración de procesos financieros corporativos.',
              },
              {
                periodo: '2019 — 2021',
                empresa: 'Grupo LatamWin',
                cargo: 'CFO Corporativo',
                detalle: 'Gestión financiera corporativa integral, estructuración de deuda y reportería ejecutiva para directorio y socios del grupo empresarial.',
              },
              {
                periodo: '2021 — Presente',
                empresa: 'AB Advisory',
                cargo: 'Founder & Director Ejecutivo',
                detalle: 'Fundación de firma boutique especializada en asesoría financiera, contable y de auditoría para empresas y grupos empresariales en Chile.',
              },
            ].map((t, i) => (
              <AnimOnScroll key={i} delay={i * 0.08} className="nos-tray-card" style={{
                padding: '44px 48px',
                borderRight: i % 2 === 0 ? '1px solid rgba(245,243,239,0.06)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(245,243,239,0.06)' : 'none',
              }}>
                <p style={{
                  fontSize: '.58rem', fontWeight: 500, letterSpacing: '.2em',
                  textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 18px',
                }}>
                  {t.periodo}
                </p>
                <p style={{
                  fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                  fontSize: '1.05rem', fontWeight: 500,
                  color: '#F5F3EF', margin: '0 0 6px', lineHeight: 1.2,
                }}>
                  {t.empresa}
                </p>
                <p style={{
                  fontSize: '.65rem', fontWeight: 500, letterSpacing: '.1em',
                  textTransform: 'uppercase', color: 'rgba(245,243,239,0.45)',
                  margin: '0 0 22px',
                }}>
                  {t.cargo}
                </p>
                <div style={{ width: 24, height: 1, background: 'var(--gold)', opacity: .4, marginBottom: 20 }} />
                <p style={{
                  fontSize: '.8rem', lineHeight: 1.8, fontWeight: 300,
                  color: 'rgba(245,243,239,0.55)', margin: 0,
                }}>
                  {t.detalle}
                </p>
              </AnimOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════ FORMACIÓN & EXPERTISE ═══════════════════ */}
      <section style={{
        background: 'var(--navy)',
        padding: '100px 80px',
        borderTop: '1px solid rgba(201,169,110,0.12)',
      }} className="nos-form-section">
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
        }} className="nos-form-grid">

          <AnimOnScroll>
            <p style={{
              fontSize: '.6rem', fontWeight: 600, letterSpacing: '.32em',
              textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 36px',
            }}>
              Formación académica
            </p>
            {[
              { titulo: 'Magíster en Información Financiero Contable', inst: 'Universidad de Chile' },
              { titulo: 'Ingeniero Comercial & Contador Auditor', inst: 'Universidad Tecnológica Metropolitana' },
              { titulo: 'Compliance Officer Certificado', inst: 'Universidad Adolfo Ibáñez' },
            ].map((f, i) => (
              <div key={i} style={{
                padding: '22px 0',
                borderBottom: '1px solid rgba(245,243,239,0.08)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                  fontSize: '.95rem', fontWeight: 400,
                  color: '#F5F3EF', margin: '0 0 5px', lineHeight: 1.3,
                }}>
                  {f.titulo}
                </p>
                <p style={{
                  fontSize: '.72rem', fontWeight: 300,
                  color: 'rgba(245,243,239,0.4)', margin: 0, letterSpacing: '.04em',
                }}>
                  {f.inst}
                </p>
              </div>
            ))}
          </AnimOnScroll>

          <AnimOnScroll delay={0.1}>
            <p style={{
              fontSize: '.6rem', fontWeight: 600, letterSpacing: '.32em',
              textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 36px',
            }}>
              Áreas de expertise
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
              {FOUNDER.expertise.map(tag => (
                <span key={tag} style={{
                  fontSize: '.72rem', fontWeight: 400,
                  color: 'rgba(245,243,239,0.7)',
                  padding: '7px 16px',
                  border: '1px solid rgba(245,243,239,0.15)',
                  letterSpacing: '.04em',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <p style={{
              fontSize: '.6rem', fontWeight: 600, letterSpacing: '.32em',
              textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 24px',
            }}>
              Sectores
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {FOUNDER.sectors.map(s => (
                <span key={s} style={{
                  fontSize: '.7rem', fontWeight: 300,
                  color: 'rgba(245,243,239,0.45)',
                  padding: '5px 14px',
                  border: '1px solid rgba(245,243,239,0.09)',
                  letterSpacing: '.03em',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </AnimOnScroll>

        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section style={{
        background: 'var(--navy2)',
        padding: '100px 80px',
        textAlign: 'center',
        borderTop: '1px solid rgba(201,169,110,0.12)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
          background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(201,169,110,0.06), transparent)',
        }} />
        <AnimOnScroll style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto' }}>
          <p style={{
            fontSize: '.6rem', fontWeight: 600, letterSpacing: '.32em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '28px',
          }}>
            Próximo paso
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 300, color: '#F5F3EF',
            lineHeight: 1.1, marginBottom: '18px',
            letterSpacing: '.02em', textTransform: 'uppercase',
          }}>
            Un socio de primer nivel<br/>para sus decisiones financieras.
          </h2>
          <p style={{
            fontSize: '.83rem', fontWeight: 300,
            color: 'rgba(245,243,239,0.45)',
            lineHeight: 1.8, marginBottom: '44px',
          }}>
            Cada consulta es evaluada directamente por el socio de la firma.
          </p>
          <Link href="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--gold)', color: 'var(--navy)',
            fontSize: '.7rem', fontWeight: 600, letterSpacing: '.18em',
            textTransform: 'uppercase', padding: '14px 40px',
            transition: 'background .25s',
          }} className="nos-cta-btn">
            Agendar una reunión
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </AnimOnScroll>
      </section>

      <style>{`
        .nos-contact-link:hover { color: var(--gold) !important; }
        .nos-cta-btn:hover { background: #E8C98A !important; }
        .nos-tray-card { transition: background .25s; }
        .nos-tray-card:hover { background: rgba(245,243,239,0.03) !important; }
        @media(max-width:1024px) {
          .nos-profile-section { padding: 100px 40px 80px !important; }
          .nos-profile-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .nos-tray-section { padding: 80px 40px !important; }
          .nos-form-section { padding: 80px 40px !important; }
          .nos-form-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
        @media(max-width:768px) {
          .nos-profile-section { padding: 100px 24px 72px !important; }
          .nos-tray-section { padding: 72px 24px !important; }
          .nos-tray-grid { grid-template-columns: 1fr !important; }
          .nos-tray-card { border-right: none !important; border-bottom: 1px solid rgba(245,243,239,0.06) !important; }
          .nos-form-section { padding: 72px 24px !important; }
        }
      `}</style>
    </main>
  )
}
