'use client'

import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { SITE, FOUNDER } from '@/lib/data'

export default function ContactoContent() {
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
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#6B7280', marginBottom: '2.5rem' }}>
            <Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ color: '#9CA3AF' }}>→</span>
            <span style={{ color: 'var(--navy, #0D2B45)' }}>Contacto</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '2.5rem', height: '2px', background: 'var(--blue, #1A73A7)' }} />
            <span style={{ color: 'var(--blue, #1A73A7)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
              Conversemos
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
            Diagnóstico gratuito.<br/>Sin compromiso.
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: 1.75, maxWidth: '560px' }}>
            Cuéntenos su desafío. Andrés revisará su caso personalmente y le responderá en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '5rem', alignItems: 'start' }} className="contact-grid">

          {/* Form */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: '1.4rem', fontWeight: 700,
              color: 'var(--navy, #0D2B45)', marginBottom: '0.5rem',
            }}>
              Solicitar diagnóstico
            </h2>
            <p style={{ fontSize: '0.84rem', color: '#6B7280', marginBottom: '2rem', lineHeight: 1.65 }}>
              Completa el formulario o escríbenos directamente. Toda consulta es confidencial.
            </p>
            <ContactForm />
          </div>

          {/* Info panel */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            {/* Direct contact */}
            <div style={{ border: '1px solid var(--border)', padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-playfair, Georgia, serif)',
                fontSize: '1rem', fontWeight: 700,
                color: 'var(--navy, #0D2B45)', marginBottom: '1.5rem',
              }}>
                Contacto directo
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href={`mailto:${SITE.email}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
                  <span style={{ fontSize: '1rem', marginTop: '0.1rem' }}>✉</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: '0.2rem' }}>Email</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--blue, #1A73A7)', fontWeight: 500 }}>{SITE.email}</div>
                  </div>
                </a>
                <a href={`tel:${SITE.phoneRaw}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
                  <span style={{ fontSize: '1rem', marginTop: '0.1rem' }}>☎</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: '0.2rem' }}>Teléfono</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--navy, #0D2B45)', fontWeight: 500 }}>{SITE.phone}</div>
                  </div>
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
                  <span style={{ fontSize: '1rem', marginTop: '0.1rem' }}>💬</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: '0.2rem' }}>WhatsApp</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--blue, #1A73A7)', fontWeight: 500 }}>Respuesta inmediata</div>
                  </div>
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1rem', marginTop: '0.1rem' }}>📍</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: '0.2rem' }}>Ubicación</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--navy, #0D2B45)', fontWeight: 500, lineHeight: 1.5 }}>{SITE.location}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1rem', marginTop: '0.1rem' }}>🕐</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: '0.2rem' }}>Horario</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--navy, #0D2B45)', fontWeight: 500 }}>{SITE.schedule}</div>
                  </div>
                </div>
              </div>

              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', textAlign: 'center',
                marginTop: '1.5rem', padding: '0.75rem 1.5rem',
                background: '#25D366', color: '#fff',
                fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' as const,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}>
                Escribir por WhatsApp →
              </a>
            </div>

            {/* Founder card */}
            <div style={{ border: '1px solid var(--border)', padding: '1.5rem', background: 'var(--canvas, #F5F7FA)' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9CA3AF', marginBottom: '0.75rem' }}>
                Con quien hablarás
              </div>
              <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--navy, #0D2B45)', marginBottom: '0.2rem' }}>
                {FOUNDER.name}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#6B7280', marginBottom: '0.75rem' }}>
                {FOUNDER.role}
              </div>
              <p style={{ fontSize: '0.78rem', color: '#4A5568', lineHeight: 1.65, margin: 0 }}>
                Respuesta directa del experto — sin intermediarios ni traspasos a juniors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  )
}
