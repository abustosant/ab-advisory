'use client'

import Link from 'next/link'
import AnimOnScroll from '@/components/AnimOnScroll'
import { SITE, FOUNDER } from '@/lib/data'

export default function NosotrosContent() {
  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}>

      {/* PERFIL PRINCIPAL */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        minHeight: '100vh',
      }} className="nosotros-grid">

        {/* FOTO */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#C8DFF0',
          marginTop: '80px',
        }} className="nosotros-photo-col">
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0,
            width: '4px', background: 'var(--blue)', zIndex: 2,
          }} />
          <img
            src="/images/team/andres-bustos.webp"
            alt="Andrés Bustos A. — Fundador AB Advisory"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              minHeight: '600px',
            }}
            className="nosotros-photo"
          />
        </div>

        {/* CONTENIDO */}
        <div style={{
          padding: '0 68px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#fff',
          borderLeft: '1px solid rgba(13,43,69,0.08)',
          marginTop: '80px',
          paddingTop: '72px',
          paddingBottom: '72px',
        }} className="nosotros-content">

          <AnimOnScroll direction="up">
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem',
            }}>
              <div style={{ width: '2rem', height: '2px', background: 'var(--blue)', flexShrink: 0 }} />
              <span style={{
                color: 'var(--blue)', fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase' as const,
              }}>
                Director Fundador
              </span>
            </div>
          </AnimOnScroll>

          <AnimOnScroll direction="up" delay={0.05}>
            <h1 style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--navy, #0D2B45)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              margin: '0 0 6px',
            }}>
              Andrés<br/>Bustos A.
            </h1>
          </AnimOnScroll>

          <AnimOnScroll direction="up" delay={0.08}>
            <p style={{
              fontSize: '0.68rem', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase' as const,
              color: 'var(--blue)', margin: '0 0 32px',
            }}>
              {FOUNDER.role}
            </p>
          </AnimOnScroll>

          <AnimOnScroll direction="up" delay={0.12}>
            <p style={{
              fontFamily: 'var(--font-playfair, Playfair Display, serif)',
              fontSize: '1rem', lineHeight: 1.8,
              color: '#4A5568', fontStyle: 'italic',
              borderLeft: '3px solid var(--blue)',
              paddingLeft: '20px',
              margin: '0 0 36px',
              maxWidth: '500px',
            }}>
              {FOUNDER.statement}
            </p>
          </AnimOnScroll>

          <AnimOnScroll direction="up" delay={0.16}>
            <div style={{
              fontSize: '0.86rem', lineHeight: 1.95,
              color: '#4A5568',
              margin: '0 0 40px',
              maxWidth: '500px',
            }}>
              <p style={{ margin: '0 0 14px' }}>
                Más de <strong style={{ color: 'var(--navy, #0D2B45)', fontWeight: 600 }}>20 años en finanzas corporativas de alto nivel</strong>, con experiencia directiva en grupos multinacionales en Chile y Latinoamérica. Ha liderado procesos de reestructuración de deuda por <strong style={{ color: 'var(--navy, #0D2B45)', fontWeight: 600 }}>USD 15M</strong> y consolidación de <strong style={{ color: 'var(--navy, #0D2B45)', fontWeight: 600 }}>34 empresas bajo IFRS</strong> sin observaciones.
              </p>
              <p style={{ margin: '0 0 14px' }}>
                Trayectoria en <strong style={{ color: 'var(--navy, #0D2B45)', fontWeight: 600 }}>LATAM Airlines Group</strong>, <strong style={{ color: 'var(--navy, #0D2B45)', fontWeight: 600 }}>Besalco Maquinarias</strong> y <strong style={{ color: 'var(--navy, #0D2B45)', fontWeight: 600 }}>Grupo LatamWin</strong> como CFO.
              </p>
              <p style={{ margin: 0, color: '#6B7280', fontSize: '0.81rem', lineHeight: 1.75 }}>
                Ingeniero Comercial y Contador Auditor, UTEM. Magíster en Información Financiero Contable, Universidad de Chile. Compliance Officer Certificado, Universidad Adolfo Ibáñez.
              </p>
            </div>
          </AnimOnScroll>

          <AnimOnScroll direction="up" delay={0.2}>
            <div style={{
              display: 'flex', gap: '24px', alignItems: 'center',
              paddingTop: '28px',
              borderTop: '1px solid rgba(13,43,69,0.08)',
            }}>
              <a href={`mailto:${SITE.email}`} style={{
                fontSize: '0.78rem', color: 'var(--blue)',
                textDecoration: 'none', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '7px',
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {SITE.email}
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '0.78rem', color: 'var(--blue)',
                textDecoration: 'none', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '7px',
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </AnimOnScroll>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        background: 'var(--navy, #0D2B45)',
        padding: '5rem 2rem',
        textAlign: 'center' as const,
      }}>
        <AnimOnScroll direction="up">
          <p style={{
            color: 'var(--blue)', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '1.5rem',
          }}>
            Conversemos
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair, Playfair Display, serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '2rem',
          }}>
            ¿Listo para trabajar con un<br />verdadero socio financiero?
          </h2>
          <Link href="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--blue)', color: '#fff',
            padding: '1rem 2.5rem', borderRadius: '4px',
            fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase' as const,
          }}>
            Agendar una reunión →
          </Link>
        </AnimOnScroll>
      </section>

      <style>{`
        @media(max-width: 1024px) {
          .nosotros-grid { grid-template-columns: 1fr !important; }
          .nosotros-photo-col { margin-top: 80px !important; min-height: 420px !important; max-height: 520px !important; }
          .nosotros-photo { min-height: 420px !important; max-height: 520px !important; }
          .nosotros-content { padding: 48px 32px !important; border-left: none !important; border-top: 1px solid rgba(13,43,69,0.08) !important; }
        }
      `}</style>
    </main>
  )
}
