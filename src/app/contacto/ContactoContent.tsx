'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { SITE } from '@/lib/data'

export default function ContactoContent() {

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
          if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;}
          p(cal, ar);
        };
      })(window, "https://app.cal.eu/embed/embed.js", "init");
      Cal("init", "reunion", {origin:"https://app.cal.eu"});
      Cal.ns.reunion("inline", {
        elementOrSelector:"#cal-embed-reunion",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "abadvisory/reunion",
      });
      Cal.ns.reunion("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <main style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)', background: '#fff' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #E8F4FD 0%, #F0F7FF 50%, #EAF3FB 100%)',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid rgba(13,43,69,0.08)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>

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
            marginBottom: '1.25rem',
          }}>
            Agende una reunión inicial.
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: 1.75, maxWidth: '560px', marginBottom: '1.5rem' }}>
            Seleccione el día y horario que prefiera. Un socio de la firma confirmará la reunión y se pondrá en contacto a la brevedad.
          </p>

          <a href={`mailto:${SITE.email}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.88rem', color: 'var(--blue, #1A73A7)',
            textDecoration: 'none', fontWeight: 500,
          }}>
            <span style={{ fontSize: '0.9rem' }}>✉</span>
            {SITE.email}
          </a>
        </div>
      </section>

      {/* CALENDARIO EMBED */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        <div style={{
          border: '1px solid rgba(13,43,69,0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#fff',
          boxShadow: '0 4px 24px rgba(13,43,69,0.06)',
        }}>
          {/* Header */}
          <div style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid rgba(13,43,69,0.06)',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'var(--navy, #0D2B45)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.75rem' }}>AB</span>
            </div>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--navy, #0D2B45)', fontSize: '0.9rem', margin: 0 }}>
                Reunión Inicial — AB Advisory
              </p>
              <p style={{ fontSize: '0.78rem', color: '#6B7280', margin: '0.1rem 0 0' }}>
                35 minutos · Zoom · Santiago de Chile
              </p>
            </div>
          </div>

          {/* Cal.eu embed */}
          <div
            id="cal-embed-reunion"
            style={{ width: '100%', minHeight: '600px', overflow: 'scroll' }}
          />
        </div>

        <p style={{
          textAlign: 'center' as const,
          fontSize: '0.78rem', color: '#9CA3AF',
          marginTop: '1.5rem', lineHeight: 1.6,
        }}>
          Toda consulta es estrictamente confidencial. Para consultas generales escriba a{' '}
          <a href={`mailto:${SITE.email}`} style={{ color: 'var(--blue, #1A73A7)', textDecoration: 'none' }}>
            {SITE.email}
          </a>
        </p>
      </section>

      <style>{`
        @media(max-width: 640px) {
          #cal-embed-reunion { min-height: 500px; }
        }
      `}</style>
    </main>
  )
}
