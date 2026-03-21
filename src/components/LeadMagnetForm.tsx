'use client'

export default function LeadMagnetForm() {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '36px 32px', position: 'relative' }}>
      {/* Document preview strip */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, padding: '12px 14px', background: 'var(--canvas)', borderLeft: '3px solid var(--gold)' }}>
        <div style={{ width: 32, height: 40, background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '.52rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '.05em' }}>PDF</span>
        </div>
        <div>
          <div style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.3, marginBottom: 2 }}>Checklist IFRS 18 — Transición</div>
          <div style={{ fontSize: '.67rem', color: 'var(--text3)' }}>AB Advisory · 2026 · 8 páginas</div>
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-playfair, Playfair Display, serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 5 }}>
        Solicitar el documento
      </h3>
      <p style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 20, lineHeight: 1.5 }}>
        Disponible para CFOs y Directores Financieros.
      </p>

      <form
        style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        onSubmit={e => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Nombre y empresa"
          style={{ border: '1.5px solid var(--border)', padding: '11px 14px', fontFamily: 'DM Sans, sans-serif', fontSize: '.82rem', color: 'var(--text)', background: 'var(--canvas)', outline: 'none' }}
          onFocus={e => { e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.background = '#fff' }}
          onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--canvas)' }}
        />
        <input
          type="email"
          placeholder="correo@empresa.cl"
          style={{ border: '1.5px solid var(--border)', padding: '11px 14px', fontFamily: 'DM Sans, sans-serif', fontSize: '.82rem', color: 'var(--text)', background: 'var(--canvas)', outline: 'none' }}
          onFocus={e => { e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.background = '#fff' }}
          onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--canvas)' }}
        />
        <button
          type="submit"
          style={{ background: 'var(--navy)', color: '#fff', border: 'none', padding: '13px', fontFamily: 'DM Sans, sans-serif', fontSize: '.73rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background .2s' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--navy2)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--navy)')}
        >
          Solicitar el documento →
        </button>
      </form>

      <p style={{ fontSize: '.67rem', color: 'var(--text3)', marginTop: 12, textAlign: 'center', letterSpacing: '.02em' }}>
        Su información es tratada con estricta confidencialidad.
      </p>
    </div>
  )
}
