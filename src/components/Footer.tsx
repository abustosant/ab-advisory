import Link from 'next/link'
import { SITE } from '@/lib/data'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', padding: '76px 0 34px' }}>
      <div style={{ height: 3, background: 'var(--blue)', marginBottom: 76 }} />
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 52px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: 52, marginBottom: 52,
        }} className="foot-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 13 }}>
              <img
                src="/logo_nav.png"
                alt="AB Advisory — Strategic Partners"
                style={{ height: 78, width: 'auto', maxWidth: 230, filter: 'brightness(0) invert(1)', opacity: 0.85 }}
              />
            </div>
            <p style={{ fontSize: '.79rem', lineHeight: 1.74, color: 'rgba(255,255,255,.3)', maxWidth: 245, marginBottom: 20 }}>
              Firma boutique de asesoría financiera, contabilidad IFRS y gestión de RRHH para empresas en Chile. Rigor técnico de multinacional. Dedicación exclusiva.
            </p>
            <div style={{ display: 'flex', gap: 7 }}>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="soc-icon">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.8">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: 16 }}>Servicios</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Asesoría Financiera', href: '/servicios/financiero' },
                { label: 'Contabilidad & IFRS', href: '/servicios/contable' },
                { label: 'Gestión de RRHH', href: '/servicios/rrhh' },
                { label: 'Compliance', href: '/contacto' },
                { label: 'Due Diligence', href: '/contacto' },
              ].map(s => (
                <li key={s.label}><Link href={s.href} className="foot-link">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: 16 }}>Empresa</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><Link href="/nosotros" className="foot-link">Director Fundador</Link></li>
              <li><Link href="/#diferenciador" className="foot-link">Por qué elegirnos</Link></li>
              <li><Link href="/insights" className="foot-link">Insights</Link></li>
              <li><Link href="/contacto" className="foot-link">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: 16 }}>Contacto</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><a href={`mailto:${SITE.email}`} className="foot-link">{SITE.email}</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="foot-link">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 9 }}>
          <span style={{ fontSize: '.67rem', color: 'rgba(255,255,255,.18)' }}>© {SITE.year} AB Advisory SpA · Santiago de Chile</span>
          <span style={{ fontSize: '.67rem', color: 'rgba(255,255,255,.18)' }}>Asesoría financiera · Contabilidad IFRS · Gestión de RRHH</span>
        </div>
      </div>

      <style>{`
        .soc-icon {
          width:32px;height:32px;background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.1);
          display:flex;align-items:center;justify-content:center;
          transition:all .2s;
        }
        .soc-icon:hover { background:var(--blue);border-color:var(--blue); }
        .foot-link { font-size:.79rem;color:rgba(255,255,255,.38);transition:color .2s;text-decoration:none; }
        .foot-link:hover { color:#fff; }
        @media(max-width:1100px){
          .foot-grid { grid-template-columns:1fr 1fr!important;gap:32px!important; }
        }
        @media(max-width:768px){
          .foot-grid { grid-template-columns:1fr!important;gap:24px!important; }
          footer div[style*="padding: 0 52px"] { padding:0 22px!important; }
        }
      `}</style>
    </footer>
  )
}