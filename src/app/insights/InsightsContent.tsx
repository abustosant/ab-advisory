'use client'

import Link from 'next/link'
import Image from 'next/image'
import { INSIGHTS } from '@/lib/data'

export default function InsightsContent() {
  const featured = INSIGHTS.find(i => i.featured)
  const rest = INSIGHTS.filter(i => !i.featured)

  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)', background: '#fff' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #EEF2F7 0%, #F5F7FA 50%, #EEF2F7 100%)',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

          {/* BREADCRUMB */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#6B7280', marginBottom: '2rem' }}>
            <Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ color: '#9CA3AF' }}>→</span>
            <span style={{ color: 'var(--navy, #0D2B45)' }}>Insights</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '2.5rem', height: '2px', background: 'var(--blue)' }} />
            <span style={{ color: 'var(--blue)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
              Perspectivas técnicas
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--navy, #0D2B45)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Análisis técnico para<br/>CFOs y equipos financieros
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: 1.75, maxWidth: '560px' }}>
            Análisis técnico sobre IFRS, finanzas corporativas y gestión empresarial en Chile — desde la perspectiva de quien lo ha implementado en primera línea.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
          <Link href={featured.href} style={{ textDecoration: 'none', display: 'block' }} className="featured-card">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s',
            }} className="featured-inner">
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '320px' }}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                  className="featured-img"
                />
              </div>
              <div style={{ padding: '3rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{
                    padding: '0.3rem 0.75rem',
                    background: 'var(--blue-lt, #EBF4FA)',
                    color: 'var(--blue)',
                    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  }}>
                    Destacado
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{featured.category}</span>
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-playfair, Georgia, serif)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  fontWeight: 700,
                  color: 'var(--navy, #0D2B45)',
                  lineHeight: 1.3,
                  marginBottom: '1.5rem',
                }}>
                  {featured.title}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.76rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--blue)' }}>
                  Leer artículo <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* REST */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="insights-grid">
          {rest.map((ins, i) => (
            <Link key={i} href={ins.href} style={{ textDecoration: 'none', display: 'block' }} className="insight-card">
              <div style={{ border: '1px solid var(--border)', overflow: 'hidden', background: '#fff', transition: 'box-shadow 0.3s' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <Image
                    src={ins.image}
                    alt={ins.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                    className="insight-img"
                  />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--blue)', marginBottom: '0.75rem' }}>
                    {ins.category}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair, Georgia, serif)',
                    fontSize: '1.1rem', fontWeight: 700,
                    color: 'var(--navy, #0D2B45)', lineHeight: 1.35,
                    marginBottom: '1.25rem',
                  }}>
                    {ins.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>
                      {ins.date} · {ins.readTime}
                    </div>
                    <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--blue)' }}>Leer →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy, #0D2B45)', padding: '4rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.45)', marginBottom: '1rem' }}>
          ¿Necesita asesoría personalizada?
        </p>
        <h2 style={{
          fontFamily: 'var(--font-playfair, Georgia, serif)',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: 700, color: '#fff',
          marginBottom: '2rem', lineHeight: 1.2,
        }}>
          Conversemos sobre su desafío específico.
        </h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
          <Link href="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.875rem 2rem',
            background: '#fff', color: 'var(--navy, #0D2B45)',
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' as const,
            textDecoration: 'none',
          }}>
            Conversemos →
          </Link>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.875rem 2rem',
            border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const,
            textDecoration: 'none',
          }}>
            Volver al inicio
          </Link>
        </div>
      </section>

      <style>{`
        .featured-card:hover .featured-inner { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        .featured-card:hover .featured-img { transform: scale(1.03); }
        .insight-card:hover > div { box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .insight-card:hover .insight-img { transform: scale(1.04); }
        @media(max-width: 900px) {
          .featured-inner { grid-template-columns: 1fr !important; }
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
