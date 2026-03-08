'use client'
import { useState } from 'react'
import { SITE } from '@/lib/data'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(SITE.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('sent'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inp: React.CSSProperties = {
    width: '100%', padding: '11px 13px',
    border: '1.5px solid var(--border)',
    fontFamily: 'var(--font-dm,var(--sans))', fontSize: '.86rem', color: 'var(--text)',
    outline: 'none', background: '#fff', borderRadius: 0,
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }} className="form-row">
        <div style={{ marginBottom: 13 }}>
          <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Nombre completo *</label>
          <input name="nombre" type="text" placeholder="Juan Pérez" required style={inp} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
        </div>
        <div style={{ marginBottom: 13 }}>
          <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Empresa *</label>
          <input name="empresa" type="text" placeholder="Empresa S.A." required style={inp} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }} className="form-row">
        <div style={{ marginBottom: 13 }}>
          <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Email corporativo *</label>
          <input name="email" type="email" placeholder="juan@empresa.cl" required style={inp} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
        </div>
        <div style={{ marginBottom: 13 }}>
          <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Teléfono</label>
          <input name="telefono" type="tel" placeholder="+56 9 XXXX XXXX" style={inp} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
        </div>
      </div>
      <div style={{ marginBottom: 13 }}>
        <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Servicio de interés *</label>
        <select name="servicio" required style={{ ...inp, cursor: 'pointer' }} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')}>
          <option value="" disabled>Seleccione un servicio</option>
          <option>Asesoría Financiera Corporativa</option>
          <option>Contabilidad & IFRS</option>
          <option>Gestión de Recursos Humanos</option>
          <option>Múltiples servicios</option>
          <option>Consulta general</option>
        </select>
      </div>
      <div style={{ marginBottom: 13 }}>
        <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Cuéntenos su desafío</label>
        <textarea name="mensaje" placeholder="Tamaño de su empresa, desafío actual y lo que espera de esta asesoría..." style={{ ...inp, resize: 'vertical', minHeight: 104 }} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
      </div>
      <button type="submit" disabled={status === 'sending' || status === 'sent'} style={{
        width: '100%', padding: 14, background: status === 'sent' ? '#138040' : 'var(--navy)',
        color: '#fff', fontFamily: 'var(--font-dm,var(--sans))', fontSize: '.78rem',
        fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase',
        cursor: status === 'sending' ? 'wait' : 'pointer', transition: 'background .25s', border: 'none',
      }}>
        {status === 'sending' ? 'Enviando...' : status === 'sent' ? '✓ Mensaje enviado' : status === 'error' ? 'Error — intente de nuevo' : 'Enviar solicitud de diagnóstico →'}
      </button>
      <p style={{ fontSize: '.66rem', color: 'var(--text3)', textAlign: 'center', marginTop: 11 }}>
        Sus datos son confidenciales. No compartimos información con terceros.
      </p>
      <style>{`
        @media(max-width:768px){ .form-row { grid-template-columns:1fr!important; } }
      `}</style>
    </form>
  )
}
