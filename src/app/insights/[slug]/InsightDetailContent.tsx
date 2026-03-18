'use client'

import Link from 'next/link'
import Image from 'next/image'
import { INSIGHTS, SITE } from '@/lib/data'

type BodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

type Insight = (typeof INSIGHTS)[number]

export default function InsightDetailContent({ insight }: { insight: Insight }) {
  const others = INSIGHTS.filter(i => i.slug !== insight.slug).slice(0, 2)

  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)', background: '#fff' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #EEF2F7 0%, #F5F7FA 50%, #EEF2F7 100%)',
        paddingTop: '7rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#6B7280', marginBottom: '2rem' }}>
            <Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ color: '#9CA3AF' }}>→</span>
            <Link href="/insights" style={{ color: '#4A5568', textDecoration: 'none' }}>Insights</Link>
            <span style={{ color: '#9CA3AF' }}>→</span>
            <span style={{ color: 'var(--navy, #0D2B45)' }}>{insight.category}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '2.5rem', height: '2px', background: 'var(--blue, #1A73A7)' }} />
            <span style={{ color: 'var(--blue, #1A73A7)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
              {insight.category}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 700,
            color: 'var(--navy, #0D2B45)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}>
            {insight.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: '#9CA3AF' }}>
            <span style={{ fontWeight: 600, color: 'var(--navy, #0D2B45)' }}>{insight.author}</span>
            <span>·</span>
            <span>{insight.date}</span>
            <span>·</span>
            <span>{insight.readTime}</span>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ position: 'relative', height: '400px', marginTop: '2.5rem', overflow: 'hidden' }}>
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* BODY */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        {/* Lead */}
        <p style={{
          fontSize: '1.1rem', lineHeight: 1.85, color: '#374151',
          marginBottom: '2.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border)',
          fontStyle: 'italic',
        }}>
          {insight.description}
        </p>

        {/* Body blocks */}
        {(insight.body as BodyBlock[]).map((block, i) => {
          if (block.type === 'paragraph') {
            return (
              <p key={i} style={{ fontSize: '1rem', lineHeight: 1.85, color: '#374151', marginBottom: '1.5rem' }}>
                {block.text}
              </p>
            )
          }
          if (block.type === 'heading') {
            return (
              <h2 key={i} style={{
                fontFamily: 'var(--font-playfair, Georgia, serif)',
                fontSize: '1.3rem', fontWeight: 700,
                color: 'var(--navy, #0D2B45)',
                marginTop: '2.5rem', marginBottom: '1rem',
                lineHeight: 1.3,
              }}>
                {block.text}
              </h2>
            )
          }
          if (block.type === 'list') {
            return (
              <ul key={i} style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                    fontSize: '1rem', lineHeight: 1.75, color: '#374151',
                    marginBottom: '0.75rem',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue, #1A73A7)', marginTop: '0.65rem', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            )
          }
          return null
        })}

        {/* Author card */}
        <div style={{
          marginTop: '3rem', padding: '1.5rem',
          border: '1px solid var(--border)',
          background: 'var(--canvas, #F5F7FA)',
          display: 'flex', alignItems: 'flex-start', gap: '1.25rem',
        }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--navy, #0D2B45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>AB</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--navy, #0D2B45)', marginBottom: '0.2rem' }}>AB Advisory</div>
            <div style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.5rem' }}>Asesoría Financiera · Santiago de Chile</div>
            <p style={{ fontSize: '0.82rem', color: '#4A5568', lineHeight: 1.65, margin: 0 }}>
              Fundador de AB Advisory con 20+ años en finanzas corporativas, IFRS y reestructuración de deuda en Chile y LATAM.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '2.5rem', padding: '2rem',
          background: 'var(--navy, #0D2B45)',
          textAlign: 'center',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.84rem', marginBottom: '1rem', lineHeight: 1.65 }}>
            ¿Necesita asesoría personalizada sobre este tema?
          </p>
          <Link href="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1.75rem',
            background: '#fff', color: 'var(--navy, #0D2B45)',
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' as const,
            textDecoration: 'none',
          }}>
            Conversemos →
          </Link>
        </div>
      </article>

      {/* MORE ARTICLES */}
      {others.length > 0 && (
        <section style={{ background: 'var(--canvas, #F5F7FA)', padding: '4rem 2rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: '1.2rem', fontWeight: 700,
              color: 'var(--navy, #0D2B45)', marginBottom: '2rem',
            }}>
              Más artículos
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="more-grid">
              {others.map((ins, i) => (
                <Link key={i} href={ins.href} style={{ textDecoration: 'none' }}>
                  <div style={{ border: '1px solid var(--border)', background: '#fff', overflow: 'hidden', transition: 'box-shadow 0.3s' }} className="more-card">
                    <div style={{ position: 'relative', height: '150px', overflow: 'hidden' }}>
                      <Image src={ins.image} alt={ins.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--blue, #1A73A7)', marginBottom: '0.5rem' }}>
                        {ins.category}
                      </div>
                      <h4 style={{
                        fontFamily: 'var(--font-playfair, Georgia, serif)',
                        fontSize: '0.95rem', fontWeight: 700,
                        color: 'var(--navy, #0D2B45)', lineHeight: 1.35,
                      }}>
                        {ins.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .more-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
        @media(max-width: 640px) { .more-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  )
}
