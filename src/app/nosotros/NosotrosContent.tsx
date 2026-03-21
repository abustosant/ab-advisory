'use client'

import Link from 'next/link'
import AnimOnScroll from '@/components/AnimOnScroll'
import { SITE, FOUNDER } from '@/lib/data'

export default function NosotrosContent() {
  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)', background: '#fff' }}>

      {/* ═══════════════════ HERO IDENTITY ═══════════════════ */}
      <section style={{
        minHeight: '100vh', display: 'grid',
        gridTemplateColumns: '55% 45%',
        background: '#0A0F1C',
      }} className="nos-hero-grid">

        {/* LEFT — texto */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '0 72px 80px', position: 'relative',
        }} className="nos-hero-left">

          {/* Línea dorada vertical */}
          <div style={{
            position: 'absolute', left: 72, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, transparent 10%, var(--gold) 40%, var(--gold) 60%, transparent 90%)',
            opacity: 0.25,
          }} />

          <AnimOnScroll>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
              <span style={{ width: 36, height: 1, background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
              <span style={{
                fontSize: '.6rem', fontWeight: 500, letterSpacing: '.32em',
                textTransform: 'uppercase', color: 'var(--gold)',
              }}>
                Director Fundador · AB Advisory
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(3rem, 5.5vw, 5rem)',
              fontWeight: 300, lineHeight: 1.02, letterSpacing: '-.015em',
              color: '#F5F3EF', margin: '0 0 16px',
            }}>
              Andrés<br/>Bustos A.
            </h1>

            <p style={{
              fontSize: '.68rem', fontWeight: 500, letterSpacing: '.22em',
              textTransform: 'uppercase', color: 'rgba(201,169,110,0.8)',
              margin: '0 0 44px',
            }}>
              {FOUNDER.role}
            </p>

            <p style={{
              fontSize: '.88rem', fontWeight: 300, lineHeight: 1.85,
              color: 'rgba(245,243,239,0.55)', maxWidth: 440, margin: '0 0 56px',
              letterSpacing: '.01em',
            }}>
              Más de 20 años en finanzas corporativas de primer nivel. Ha liderado
              reestructuraciones de deuda, consolidaciones IFRS y transformaciones
              financieras en grupos multinacionales en Chile y Latinoamérica.
            </p>

            {/* Stats en línea */}
            <div style={{
              display: 'flex', gap: 0, borderTop: '1px solid rgba(201,169,110,0.15)',
              paddingTop: 36, marginBottom: 48,
            }} className="nos-stats">
              {[
                { n: '20+', l: 'Años de\nexperiencia' },
                { n: 'USD 15M', l: 'Deuda\nreestructurada' },
                { n: '34', l: 'Empresas\nbajo IFRS' },
              ].map((s, i) => (
                <div key={i} style={{
                  flex: 1, paddingRight: 28,
                  borderRight: i < 2 ? '1px solid rgba(201,169,110,0.12)' : 'none',
                  paddingLeft: i > 0 ? 28 : 0,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                    fontSize: '2rem', fontWeight: 300, color: '#F5F3EF', lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {s.n}
                  </div>
                  <div style={{
                    fontSize: '.55rem', fontWeight: 400, letterSpacing: '.15em',
                    textTransform: 'uppercase', color: 'rgba(245,243,239,0.35)',
                    lineHeight: 1.5,
                  }}>
                    {s.l.split('\n').map((line, j) => <span key={j}>{line}{j === 0 && <br/>}</span>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Contacto */}
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
              <a href={`mailto:${SITE.email}`} style={{
                fontSize: '.72rem', color: 'rgba(245,243,239,0.6)',
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
                transition: 'color .2s',
              }} className="nos-link">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {SITE.email}
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '.72rem', color: 'rgba(245,243,239,0.6)',
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
                transition: 'color .2s',
              }} className="nos-link">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </AnimOnScroll>
        </div>

        {/* RIGHT — foto */}
        <div style={{ position: 'relative', overflow: 'hidden' }} className="nos-hero-photo">
          <img
            src="/images/team/andres-bustos.webp"
            alt="Andrés Bustos A. — Fundador AB Advisory"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: 'top center', display: 'block',
              filter: 'grayscale(18%)',
            }}
          />
          {/* Gradiente lateral hacia el texto */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #0A0F1C 0%, rgba(10,15,28,0.3) 30%, transparent 60%)',
          }} />
          {/* Gradiente inferior */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(10,15,28,0.7) 0%, transparent 35%)',
          }} />
        </div>
      </section>

      {/* ═══════════════════ STATEMENT ═══════════════════ */}
      <section style={{
        background: '#fff',
        padding: '108px 52px',
        borderBottom: '1px solid rgba(13,43,69,0.07)',
      }}>
        <AnimOnScroll>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            {/* Ornamento dorado */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 16, marginBottom: 44,
            }}>
              <span style={{ flex: 1, maxWidth: 80, height: 1, background: 'var(--gold)', opacity: .5 }} />
              <span style={{
                width: 6, height: 6, background: 'var(--gold)', transform: 'rotate(45deg)', flexShrink: 0,
              }} />
              <span style={{ flex: 1, maxWidth: 80, height: 1, background: 'var(--gold)', opacity: .5 }} />
            </div>

            <blockquote style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.35rem, 2.5vw, 1.95rem)',
              fontWeight: 300, fontStyle: 'italic',
              lineHeight: 1.65, color: 'var(--navy, #0D2B45)',
              margin: '0 0 36px', letterSpacing: '-.01em',
            }}>
              {FOUNDER.statement}
            </blockquote>

            <cite style={{
              fontSize: '.65rem', fontWeight: 600, letterSpacing: '.22em',
              textTransform: 'uppercase', color: 'var(--gold)',
              fontStyle: 'normal',
            }}>
              Andrés Bustos A. — Fundador
            </cite>
          </div>
        </AnimOnScroll>
      </section>

      {/* ═══════════════════ TRAYECTORIA ═══════════════════ */}
      <section style={{ background: 'var(--canvas, #F8FAFC)', padding: '108px 0' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 52px' }}>

          <AnimOnScroll style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
              <span style={{
                fontSize: '.6rem', fontWeight: 600, letterSpacing: '.28em',
                textTransform: 'uppercase', color: 'var(--gold)',
              }}>
                Trayectoria profesional
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(1.7rem, 3vw, 2.6rem)',
              fontWeight: 300, lineHeight: 1.1, letterSpacing: '-.02em',
              color: 'var(--navy, #0D2B45)', maxWidth: 480,
            }}>
              Formado en los entornos<br/>más exigentes del sector.
            </h2>
          </AnimOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--border, rgba(13,43,69,.1))' }} className="tray-grid">
            {[
              {
                periodo: '2007 — 2018',
                empresa: 'LATAM Airlines Group',
                cargo: 'Subgerente de Contabilidad LATAM',
                detalle: 'Liderazgo del área contable corporativa en uno de los grupos aeronáuticos más grandes de Latinoamérica. Consolidación bajo IFRS, reportería a directorio y gestión de auditorías Big Four.',
              },
              {
                periodo: '2018 — 2021',
                empresa: 'Besalco Maquinarias',
                cargo: 'Gerente de Administración & Finanzas',
                detalle: 'Reestructuración financiera, implementación de controles internos y supervisión del proceso de consolidación contable bajo normas internacionales.',
              },
              {
                periodo: '2021 — Presente',
                empresa: 'AB Advisory',
                cargo: 'Founder & Director Ejecutivo',
                detalle: 'Fundación de firma boutique especializada en asesoría financiera, contable y de auditoría para empresas y grupos empresariales en Chile.',
              },
            ].map((t, i) => (
              <AnimOnScroll key={i} delay={i * 0.08} className="tray-card" style={{
                padding: '48px 40px',
                borderRight: i < 2 ? '1px solid var(--border, rgba(13,43,69,.1))' : 'none',
                background: '#fff', transition: 'background .3s',
              }}>
                <div style={{
                  fontSize: '.58rem', fontWeight: 500, letterSpacing: '.22em',
                  textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20,
                }}>
                  {t.periodo}
                </div>
                <div style={{
                  fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                  fontSize: '1.05rem', fontWeight: 600,
                  color: 'var(--navy, #0D2B45)', marginBottom: 6, lineHeight: 1.2,
                }}>
                  {t.empresa}
                </div>
                <div style={{
                  fontSize: '.68rem', fontWeight: 600, letterSpacing: '.1em',
                  textTransform: 'uppercase', color: 'var(--blue, #1A73A7)',
                  marginBottom: 20,
                }}>
                  {t.cargo}
                </div>
                <div style={{
                  width: 24, height: 1, background: 'var(--gold)', opacity: .5, marginBottom: 20,
                }} />
                <p style={{
                  fontSize: '.8rem', lineHeight: 1.75,
                  color: 'var(--text2, #4A5568)',
                }}>
                  {t.detalle}
                </p>
              </AnimOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FORMACIÓN & EXPERTISE ═══════════════════ */}
      <section style={{ background: '#fff', padding: '108px 0', borderTop: '1px solid var(--border, rgba(13,43,69,.07))' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 52px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--border, rgba(13,43,69,.1))' }} className="form-grid">

            {/* Formación académica */}
            <AnimOnScroll style={{ padding: '72px 68px 72px 0', borderRight: '1px solid var(--border, rgba(13,43,69,.1))' }} className="form-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
                <span style={{ width: 24, height: 1, background: 'var(--gold)' }} />
                <span style={{
                  fontSize: '.6rem', fontWeight: 600, letterSpacing: '.26em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                }}>
                  Formación académica
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { titulo: 'Magíster en Información Financiero Contable', inst: 'Universidad de Chile' },
                  { titulo: 'Ingeniero Comercial & Contador Auditor', inst: 'Universidad Tecnológica Metropolitana' },
                  { titulo: 'Compliance Officer Certificado', inst: 'Universidad Adolfo Ibáñez' },
                ].map((f, i) => (
                  <div key={i} style={{
                    padding: '24px 0',
                    borderBottom: i < 2 ? '1px solid var(--border, rgba(13,43,69,.08))' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-playfair, Playfair Display, serif)',
                      fontSize: '.95rem', fontWeight: 600,
                      color: 'var(--navy, #0D2B45)', marginBottom: 6, lineHeight: 1.3,
                    }}>
                      {f.titulo}
                    </div>
                    <div style={{
                      fontSize: '.7rem', color: 'var(--text3, #6B7280)',
                      letterSpacing: '.04em',
                    }}>
                      {f.inst}
                    </div>
                  </div>
                ))}
              </div>
            </AnimOnScroll>

            {/* Expertise & Sectores */}
            <AnimOnScroll delay={0.12} style={{ padding: '72px 0 72px 68px' }} className="form-right">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
                <span style={{ width: 24, height: 1, background: 'var(--gold)' }} />
                <span style={{
                  fontSize: '.6rem', fontWeight: 600, letterSpacing: '.26em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                }}>
                  Áreas de expertise
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
                {FOUNDER.expertise.map(tag => (
                  <span key={tag} className="exp-tag-nos" style={{
                    fontSize: '.72rem', fontWeight: 500, color: 'var(--navy, #0D2B45)',
                    padding: '7px 16px', border: '1px solid rgba(13,43,69,.18)',
                    letterSpacing: '.04em', transition: 'all .2s', cursor: 'default',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{ width: 24, height: 1, background: 'var(--gold)' }} />
                <span style={{
                  fontSize: '.6rem', fontWeight: 600, letterSpacing: '.26em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                }}>
                  Sectores
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {FOUNDER.sectors.map(s => (
                  <span key={s} style={{
                    fontSize: '.7rem', color: 'var(--text2, #4A5568)',
                    padding: '5px 13px', background: 'var(--canvas, #F8FAFC)',
                    border: '1px solid var(--border, rgba(13,43,69,.08))',
                    letterSpacing: '.03em',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </AnimOnScroll>

          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section style={{
        background: '#0A0F1C', padding: '108px 52px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,169,110,0.06), transparent)',
        }} />
        <AnimOnScroll style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <span style={{ flex: 1, maxWidth: 60, height: 1, background: 'var(--gold)', opacity: .4 }} />
            <span style={{ width: 5, height: 5, background: 'var(--gold)', transform: 'rotate(45deg)', flexShrink: 0 }} />
            <span style={{ flex: 1, maxWidth: 60, height: 1, background: 'var(--gold)', opacity: .4 }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
            fontWeight: 300, color: '#F5F3EF',
            lineHeight: 1.1, marginBottom: 20, letterSpacing: '-.01em',
          }}>
            ¿Listo para trabajar con un<br/>verdadero socio financiero?
          </h2>
          <p style={{
            fontSize: '.83rem', color: 'rgba(245,243,239,0.45)',
            lineHeight: 1.8, marginBottom: 44, fontWeight: 300,
          }}>
            Cada consulta es evaluada directamente por el socio de la firma.
          </p>
          <Link href="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--gold)', color: '#0A0F1C',
            fontSize: '.72rem', fontWeight: 600, letterSpacing: '.16em',
            textTransform: 'uppercase', padding: '14px 38px',
            transition: 'background .25s',
          }} className="nos-cta-btn">
            Agendar una reunión
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </AnimOnScroll>
      </section>

      <style>{`
        .nos-link:hover { color: var(--gold) !important; }
        .exp-tag-nos:hover { background: var(--navy, #0D2B45) !important; color: #fff !important; border-color: var(--navy, #0D2B45) !important; }
        .tray-card:hover { background: var(--canvas, #F8FAFC) !important; }
        .nos-cta-btn:hover { background: #E8C98A !important; }

        @media(max-width:1024px) {
          .nos-hero-grid { grid-template-columns: 1fr !important; }
          .nos-hero-photo { height: 65vw !important; max-height: 520px !important; order: -1 !important; margin-top: 80px !important; }
          .nos-hero-left { padding: 56px 28px 72px !important; }
          .tray-grid { grid-template-columns: 1fr !important; }
          .tray-card { border-right: none !important; border-bottom: 1px solid var(--border, rgba(13,43,69,.1)) !important; }
          .form-grid { grid-template-columns: 1fr !important; }
          .form-left { padding: 56px 0 !important; border-right: none !important; border-bottom: 1px solid var(--border, rgba(13,43,69,.1)) !important; }
          .form-right { padding: 56px 0 !important; }
        }
        @media(max-width:768px) {
          .nos-stats { flex-direction: column !important; gap: 24px !important; }
          .nos-stats > div { border-right: none !important; border-bottom: 1px solid rgba(201,169,110,0.12) !important; padding: 0 0 24px !important; }
          .nos-stats > div:last-child { border-bottom: none !important; padding-bottom: 0 !important; }
        }
      `}</style>
    </main>
  )
}
