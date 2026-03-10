'use client'
import { useState } from 'react'
import { SITE } from '@/lib/data'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', SITE.web3formsKey)
    data.append('subject', 'Nueva solicitud de diagnóstico — AB Advisory')
    data.append('from_name', 'AB Advisory Web')

    try {
      const res = await fetch(SITE.web3forms, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const json = await res.json()
      if (res.ok && json.success) { setStatus('sent'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inp: React.CSSProperties = {
    width: '100%', padding: '11px 13px',
    border: '1.5px solid var(--border)',
    fontFamily: 'var(--font-dm,var(--sans))', fontSize: '.86rem', color: 'var(--text)',
    outline: 'none', background: '#fff', borderRadius: 0, transition: 'border-color .2s',
  }
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = 'var(--blue)')
  const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = 'var(--border)')

  if (status === 'sent') return (
    <div style={{ padding: '48px 32px', background: 'var(--blue-lt)', border: '1.5px solid var(--blue)', textAlign: 'center' }}>
      <div style={{ fontSize: '2rem', marginBottom: 12 }}>✓</div>
      <h4 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>
        Mensaje enviado correctamente
      </h4>
      <p style={{ fontSize: '.84rem', color: 'var(--text2)', lineHeight: 1.7 }}>
        Andrés revisará su consulta y le responderá en menos de 24 horas hábiles.
      </p>
      <button onClick={() => setStatus('idle')} style={{ marginTop: 20, fontSize: '.74rem', color: 'var(--blue)', fontWeight: 600, cursor: 'pointer', background: 'none', border: 'none' }}>
        Enviar otra consulta →
      </button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }} className="form-row">
        <div style={{ marginBottom: 13 }}>
          <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Nombre completo *</label>
          <input name="nombre" type="text" placeholder="Juan Pérez" required style={inp} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div style={{ marginBottom: 13 }}>
          <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Empresa *</label>
          <input name="empresa" type="text" placeholder="Empresa S.A." required style={inp} onFocus={onFocus} onBlur={onBlur} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }} className="form-row">
        <div style={{ marginBottom: 13 }}>
          <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Email corporativo *</label>
          <input name="email" type="email" placeholder="juan@empresa.cl" required style={inp} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div style={{ marginBottom: 13 }}>
          <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Teléfono</label>
          <input name="telefono" type="tel" placeholder="+56 9 XXXX XXXX" style={inp} onFocus={onFocus} onBlur={onBlur} />
        </div>
      </div>
      <div style={{ marginBottom: 13 }}>
        <label style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '.02em', marginBottom: 6, display: 'block' }}>Servicio de interés *</label>
        <select name="servicio" required style={{ ...inp, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
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
        <textarea name="mensaje" placeholder="Tamaño de su empresa, desafío actual y lo que espera de esta asesoría..." style={{ ...inp, resize: 'vertical', minHeight: 104 }} onFocus={onFocus} onBlur={onBlur} />
      </div>
      {status === 'error' && (
        <div style={{ padding: '10px 14px', background: '#FEF2F2', border: '1px solid #FECACA', fontSize: '.78rem', color: '#B91C1C', marginBottom: 13 }}>
          Hubo un error al enviar. Intente de nuevo o contáctenos por WhatsApp directamente.
        </div>
      )}
      <button type="submit" disabled={status === 'sending'} style={{
        width: '100%', padding: 14, background: 'var(--navy)', color: '#fff',
        fontFamily: 'var(--font-dm,var(--sans))', fontSize: '.78rem', fontWeight: 700,
        letterSpacing: '.07em', textTransform: 'uppercase',
        cursor: status === 'sending' ? 'wait' : 'pointer',
        transition: 'background .25s, opacity .25s', border: 'none',
        opacity: status === 'sending' ? 0.7 : 1,
      }}>
        {status === 'sending' ? 'Enviando...' : 'Enviar solicitud de diagnóstico →'}
      </button>
      <p style={{ fontSize: '.66rem', color: 'var(--text3)', textAlign: 'center', marginTop: 11 }}>
        Sus datos son confidenciales. No compartimos información con terceros.
      </p>
      <style>{`@media(max-width:768px){ .form-row { grid-template-columns:1fr!important; } }`}</style>
    </form>
  )
}
