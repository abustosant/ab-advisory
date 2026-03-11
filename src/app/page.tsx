import Image from 'next/image'
import Link from 'next/link'
import HeroCanvas from '@/components/HeroCanvas'
import AnimOnScroll from '@/components/AnimOnScroll'
import Counter from '@/components/Counter'
import ContactForm from '@/components/ContactForm'
import { SITE, METRICS, KPIS, SERVICES, COMPARISON_TABLE, PROCESS, IMPACT, TESTIMONIALS, INSIGHTS, TICKER_ITEMS, FOUNDER } from '@/lib/data'

// Foto CEO desde archivo local WebP
function getPhotoSrc(): string {
  return '/images/team/andres-bustos.webp'
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, transition: 'transform .2s' }}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Home() {
  const photoSrc = getPhotoSrc()
  const doubledTicker = [...TICKER_ITEMS, ...TICKER_ITEMS]

  const eyebrowStyle: React.CSSProperties = {
    fontSize: '.63rem', fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase',
    color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16,
  }

  const sectionStyle: React.CSSProperties = { padding: '108px 0' }
  const wrapStyle: React.CSSProperties = { maxWidth: 1180, margin: '0 auto', padding: '0 52px' }

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #EBF4FD 0%, #D2E8F7 40%, #C0DDEE 70%, #B8D5E8 100%)',
      }}>
        <HeroCanvas />{/* Subtle background texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`,
          backgroundSize: 'cover', backgroundPosition: 'center 40%',
          opacity: .07, mixBlendMode: 'multiply',
        }} />
        {/* Top line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--blue)', zIndex: 2 }} />
        {/* Wave */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 2, height: 80, overflow: 'hidden' }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: 1180, margin: '0 auto', padding: '100px 52px' }}>
          <div style={{ fontSize: '.63rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <span style={{ width: 20, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
            Firma boutique · Santiago de Chile
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'center' }} className="hero-grid">
            <div>
              <h1 style={{
                fontFamily: 'var(--font-playfair,var(--serif))',
                fontSize: 'clamp(3.4rem, 6vw, 6rem)',
                fontWeight: 700, lineHeight: 1.01, letterSpacing: '-.03em',
                color: 'var(--navy)', marginBottom: 28,
              }}>
                Decisiones<br/>financieras con<br/><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>precisión real</em>
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text2)', maxWidth: 500, marginBottom: 44 }}>
                Asesoría de nivel corporativo para startups, pymes y empresas medianas en crecimiento que exigen la misma profundidad técnica que las Big Four — con la agilidad y dedicación exclusiva de una firma boutique.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contacto" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 9,
                  fontSize: '.78rem', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase',
                  padding: '13px 26px', background: 'var(--navy)', color: '#fff',
                  transition: 'all .25s',
                }} className="btn-hover-navy">
                  Conversación inicial gratuita <ArrowIcon />
                </Link>
                <Link href="#servicios" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 9,
                  fontSize: '.78rem', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase',
                  padding: '13px 26px', background: 'transparent', color: 'var(--navy)',
                  border: '1.5px solid var(--border2)', transition: 'all .25s',
                }} className="btn-hover-outline">
                  Ver servicios
                </Link>
              </div>
            </div>

            {/* Stats box */}
            <AnimOnScroll>
              <div style={{
                background: 'rgba(255,255,255,.65)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,.9)', padding: '40px 36px',
                boxShadow: '0 8px 40px rgba(13,43,69,.08)',
              }}>
                <div style={{ fontSize: '.62rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
                  Resultados comprobados
                  <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>
                {[
                  { n: '20+', l: 'Años en finanzas\ncorporativas de alto nivel' },
                  { n: 'USD 15M', l: 'En deuda\nreestructurada' },
                  { n: '34', l: 'Empresas consolidadas\nbajo IFRS sin observaciones' },
                  { n: '0', l: 'Observaciones en\nauditorías Big Four' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '18px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '2.6rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1, marginBottom: 5 }}>
                      {item.n.includes('+') || item.n.startsWith('USD') || item.n === '0'
                        ? <>{item.n.replace('+','')}<span style={{ color: 'var(--blue)' }}>{item.n.includes('+') ? '+' : ''}</span></>
                        : item.n}
                    </div>
                    <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text3)', lineHeight: 1.45 }}>
                      {item.l.split('\n').map((line, j) => <span key={j}>{line}{j === 0 && <br/>}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </AnimOnScroll>
          </div>
        </div>

        <style>{`
          .btn-hover-navy:hover { background:var(--navy2)!important; transform:translateY(-1px); }
          .btn-hover-outline:hover { background:var(--navy)!important; color:#fff!important; }
          @media(max-width:1100px){ .hero-grid { grid-template-columns:1fr!important; gap:52px!important; } }
          @media(max-width:768px){ section > div[style*="padding: 100px"] { padding:90px 22px 80px!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ CREDENTIAL BAR ═══════════════════ */}
      <div style={{ background: 'var(--navy)', height: 46, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div className="ticker-track">
          {doubledTicker.map(([label, val], i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0 30px', borderRight: '1px solid rgba(255,255,255,.07)',
              fontSize: '.68rem', color: 'rgba(255,255,255,.38)',
            }}>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--blue-mid)', flexShrink: 0 }} />
              <strong style={{ color: 'rgba(255,255,255,.7)', fontWeight: 600 }}>{label}</strong>
              {' '}{val}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════ DIFFERENTIATOR ═══════════════════ */}
      <section id="diferenciador" style={{ ...sectionStyle, background: '#fff' }}>
        <div style={wrapStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--border)' }} className="diff-grid">
            {/* Left */}
            <AnimOnScroll style={{ padding: '92px 68px 92px 0', borderRight: '1px solid var(--border)' }} className="diff-l">
              <div style={eyebrowStyle}>
                <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
                ¿Por qué AB Advisory?
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)', marginBottom: 16 }}>
                Rigor de firma internacional.<br/>Precio y dedicación de boutique.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text2)', marginBottom: 40 }}>
                Su empresa necesita rigor técnico IFRS, herramientas de gestión financiera de clase mundial, estructuración tributaria avanzada y estrategia real — no reportes básicos ni honorarios desde 80 UF/hora.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--border)' }}>
                {KPIS.map((kpi, i) => (
                  <div key={i} style={{
                    padding: '22px 20px',
                    borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                    borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                    transition: 'background .2s',
                  }} className="kpi-cell">
                    <div style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '2.1rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1, marginBottom: 5 }}>
                      {kpi.value.replace('%', '').replace('+', '')}<span style={{ color: 'var(--blue)' }}>{kpi.value.includes('+') ? '+' : kpi.value.includes('%') ? '%' : ''}</span>
                    </div>
                    <div style={{ fontSize: '.67rem', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text3)' }}>{kpi.label}</div>
                  </div>
                ))}
              </div>
            </AnimOnScroll>

            {/* Right — comparison table */}
            <AnimOnScroll delay={0.16} style={{ padding: '92px 0 92px 68px' }} className="diff-r">
              <div style={eyebrowStyle}>
                <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
                Comparativa de valor
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.25rem,2vw,1.7rem)', fontWeight: 600, color: 'var(--navy)', marginBottom: 6, lineHeight: 1.3 }}>
                ¿Qué obtiene con<br/>cada alternativa?
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.81rem', marginTop: 30 }}>
                <thead>
                  <tr>
                    <th style={{ background: 'var(--navy)', color: '#fff', padding: '11px 13px', textAlign: 'left', fontSize: '.67rem', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase' }}>Capacidad</th>
                    <th style={{ background: '#1A3D5C', color: '#fff', padding: '11px 13px', fontSize: '.67rem', fontWeight: 600, textTransform: 'uppercase', textAlign: 'center' }}>AB Advisory</th>
                    <th style={{ background: 'var(--navy)', color: '#fff', padding: '11px 13px', fontSize: '.67rem', fontWeight: 600, textTransform: 'uppercase', textAlign: 'center' }}>Ctr. Indep.</th>
                    <th style={{ background: 'var(--navy)', color: '#fff', padding: '11px 13px', fontSize: '.67rem', fontWeight: 600, textTransform: 'uppercase', textAlign: 'center' }}>Big Four</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 1 ? 'var(--canvas)' : '#fff' }}>
                      <td style={{ padding: '10px 13px', borderBottom: '1px solid var(--border)', color: 'var(--text2)' }}>{row.feature}</td>
                      <td style={{ padding: '10px 13px', borderBottom: '1px solid var(--border)', background: 'var(--blue-lt)', textAlign: 'center', color: 'var(--navy)', fontWeight: 700 }}>
                        {row.ab === 'check' && <span style={{ color: '#138040', fontWeight: 700 }}>✓</span>}
                      </td>
                      <td style={{ padding: '10px 13px', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
                        {row.indie === 'check' && <span style={{ color: '#138040', fontWeight: 700 }}>✓</span>}
                        {row.indie === 'partial' && <span style={{ fontSize: '.72rem', fontWeight: 600, color: '#996A00' }}>Básico</span>}
                        {row.indie === 'none' && <span style={{ color: 'var(--border2)' }}>—</span>}
                      </td>
                      <td style={{ padding: '10px 13px', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
                        {row.big4 === 'check' && <span style={{ color: '#138040', fontWeight: 700 }}>✓</span>}
                        {row.big4 === 'none' && <span style={{ color: 'var(--border2)' }}>—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AnimOnScroll>
          </div>
        </div>
        <style>{`
          .kpi-cell:hover { background:var(--ice)!important; }
          @media(max-width:1100px){
            .diff-grid { grid-template-columns:1fr!important; }
            .diff-l { padding:76px 0!important; border-right:none!important; border-bottom:1px solid var(--border)!important; }
            .diff-r { padding:56px 0 76px!important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section id="servicios" style={{ ...sectionStyle, background: 'var(--canvas)' }}>
        <div style={wrapStyle}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, paddingBottom: 26, borderBottom: '1px solid var(--border)' }} className="svcs-head">
            <AnimOnScroll>
              <div style={eyebrowStyle}>
                <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
                Lo que ofrecemos
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)' }}>
                Tres pilares.<br/>Un socio estratégico.
              </h2>
            </AnimOnScroll>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              fontSize: '.78rem', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase',
              padding: '13px 26px', background: 'var(--navy)', color: '#fff', flexShrink: 0,
            }}>
              Diagnóstico gratuito <ArrowIcon />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--border)' }} className="svc-grid">
            {SERVICES.map((svc, i) => (
              <AnimOnScroll key={i} delay={i * 0.08} className="svc-card" style={{
                padding: '42px 34px', borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                background: '#fff', position: 'relative', overflow: 'hidden', transition: 'background .3s',
              }}>
                <img src={svc.image} alt={svc.title} style={{ width: '100%', height: 175, objectFit: 'cover', marginBottom: 30, filter: 'grayscale(15%)', transition: 'filter .4s' }} loading="lazy" />
                <div style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 11, transition: 'color .3s' }}>
                  {svc.num} · {svc.category}
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1.25rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 11, lineHeight: 1.2, transition: 'color .3s' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '.84rem', lineHeight: 1.76, color: 'var(--text2)', marginBottom: 20, transition: 'color .3s' }}>
                  {svc.description}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 26 }}>
                  {svc.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '.77rem', color: 'var(--text2)', display: 'flex', alignItems: 'flex-start', gap: 9, transition: 'color .3s' }}>
                      <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--blue)', marginTop: 7, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={svc.href} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '.76rem', fontWeight: 600, color: 'var(--blue)', paddingTop: 17, borderTop: '1px solid var(--border)', transition: 'all .3s' }}>
                  Solicitar asesoría <ArrowIcon />
                </Link>
              </AnimOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .svc-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--blue); transform:scaleX(0); transform-origin:left; transition:transform .35s; }
          .svc-card:hover::before { transform:scaleX(1)!important; }
          .svc-card:hover { background:var(--navy)!important; }
          .svc-card:hover img { filter:grayscale(100%) brightness(.3)!important; }
          .svc-card:hover h3, .svc-card:hover p, .svc-card:hover li, .svc-card:hover a { color:rgba(255,255,255,.7)!important; }
          .svc-card:hover div[style*="var(--blue)"] { color:var(--blue-mid)!important; }
          .svcs-head { flex-wrap:wrap; gap:16px; }
          @media(max-width:1100px){ .svc-grid { grid-template-columns:1fr!important; } .svc-card { border-right:none!important; border-bottom:1px solid var(--border)!important; } }
          @media(max-width:768px){ .svcs-head { flex-direction:column!important; align-items:flex-start!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ METRICS ═══════════════════ */}
      <section style={{ background: 'var(--navy)', padding: '76px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .03, backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '0 52px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="met-grid">
            {METRICS.map((m, i) => (
              <div key={i} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.07)' : 'none', textAlign: 'center', transition: 'background .25s' }} className="met-cell">
                <Counter
                  target={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  className="met-n"
                />
                <div style={{ fontSize: '.66rem', textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.3)', lineHeight: 1.5, marginTop: 9, whiteSpace: 'pre-line' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .met-n { font-family:var(--font-playfair,var(--serif)); font-size:2.8rem; font-weight:700; color:#fff; line-height:1; }
          .met-cell:hover { background:rgba(255,255,255,.04)!important; }
          @media(max-width:1100px){
            .met-grid { grid-template-columns:1fr 1fr!important; }
            .met-cell { border-bottom:1px solid rgba(255,255,255,.07)!important; }
            .met-cell:nth-child(odd) { border-right:1px solid rgba(255,255,255,.07)!important; }
            .met-cell:nth-child(even) { border-right:none!important; }
            .met-cell:nth-last-child(-n+2) { border-bottom:none!important; }
          }
          @media(max-width:768px){ .met-grid { grid-template-columns:1fr!important; } .met-cell { border-right:none!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ PARTNER PROFILE ═══════════════════ */}
      <section id="nosotros" style={{ ...sectionStyle, background: '#fff' }}>
        <div style={wrapStyle}>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {/* Top: photo + bio */}
            <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 0, borderBottom: '1px solid var(--border)' }} className="partner-top">
              {/* Photo */}
              <AnimOnScroll direction="left" style={{ borderRight: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }} className="partner-photo-col">
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: 'var(--blue)', zIndex: 2 }} />
                {photoSrc ? (
                  <img src={photoSrc} alt={FOUNDER.name} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'top center', display: 'block', filter: 'grayscale(6%)', transition: 'transform .6s, filter .4s' }} className="partner-photo" />
                ) : (
                  <div style={{ width: '100%', aspectRatio: '4/5', background: 'var(--ice)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text3)' }}>Foto</div>
                )}
              </AnimOnScroll>

              {/* Bio */}
              <AnimOnScroll direction="right" style={{ padding: '56px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="partner-info">
                <div style={eyebrowStyle}>
                  <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
                  {FOUNDER.eyebrow}
                </div>
                <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-.025em', lineHeight: 1.05, marginBottom: 8 }}>
                  Andrés Alejandro<br/>Bustos Antil
                </h2>
                <div style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '.17em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 28 }}>
                  {FOUNDER.role}
                </div>
                <p style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1.1rem', lineHeight: 1.72, color: 'var(--text2)', fontStyle: 'italic', paddingLeft: 18, borderLeft: '3px solid var(--blue)', marginBottom: 32 }}>
                  {FOUNDER.statement}
                </p>
                <div style={{ fontSize: '.62rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 12 }}>Áreas de expertise</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 28 }}>
                  {FOUNDER.expertise.map(tag => (
                    <span key={tag} className="exp-tag" style={{ fontSize: '.74rem', fontWeight: 600, color: 'var(--navy)', padding: '6px 14px', border: '1.5px solid var(--border2)', transition: 'all .2s', cursor: 'default' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ fontSize: '.62rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 10 }}>Sectores con mayor impacto</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
                  {FOUNDER.sectors.map(s => (
                    <span key={s} style={{ fontSize: '.7rem', color: 'var(--text2)', padding: '4px 12px', background: 'var(--canvas)', border: '1px solid var(--border)' }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                  <a href={`tel:${SITE.phoneRaw}`} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '.76rem', color: 'var(--blue)', fontWeight: 500 }}>
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--blue)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.5 6.5l.91-.91a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    {SITE.phone}
                  </a>
                  <a href={`mailto:${SITE.email}`} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '.76rem', color: 'var(--blue)', fontWeight: 500 }}>
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--blue)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    {SITE.email}
                  </a>
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '.76rem', color: 'var(--blue)', fontWeight: 500 }}>
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--blue)" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                </div>
              </AnimOnScroll>
            </div>

            {/* Impact grid */}
            <div style={{ padding: '64px 0 0' }}>
              <AnimOnScroll style={{ marginBottom: 36 }}>
                <div style={eyebrowStyle}>
                  <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
                  Impacto demostrado por sector
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.25rem,2vw,1.7rem)', fontWeight: 600, color: 'var(--navy)' }}>Su trabajo habla por él</h3>
              </AnimOnScroll>
              <AnimOnScroll style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0, border: '1px solid var(--border)' }} className="impact-grid">
                {IMPACT.map((ic, i) => (
                  <div key={i} className="ic-cell" style={{
                    padding: '34px 30px',
                    borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                    borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                    background: '#fff', transition: 'background .25s',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.62rem', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 12 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                      {ic.sector}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 10, lineHeight: 1.3 }}>{ic.title}</h4>
                    <p style={{ fontSize: '.82rem', lineHeight: 1.72, color: 'var(--text2)' }}>{ic.description}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 13, padding: '5px 12px', background: 'var(--blue-lt)', borderLeft: '2px solid var(--blue)', fontSize: '.73rem', fontWeight: 700, color: 'var(--navy)' }}>
                      {ic.metric}
                    </div>
                  </div>
                ))}
              </AnimOnScroll>
            </div>
          </div>
        </div>
        <style>{`
          .partner-photo-col:hover .partner-photo { transform:scale(1.02)!important; filter:grayscale(0%)!important; }
          .exp-tag:hover { background:var(--navy)!important; color:#fff!important; border-color:var(--navy)!important; }
          .ic-cell:hover { background:var(--ice)!important; }
          @media(max-width:1100px){
            .partner-top { grid-template-columns:1fr!important; }
            .partner-photo-col { border-right:none!important; border-bottom:1px solid var(--border)!important; }
            .partner-photo { aspect-ratio:16/9!important; max-height:420px!important; }
            .partner-info { padding:40px 0!important; }
            .impact-grid { grid-template-columns:1fr!important; }
            .ic-cell { border-right:none!important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section style={{ ...sectionStyle, background: 'var(--canvas)' }}>
        <div style={wrapStyle}>
          <AnimOnScroll style={{ maxWidth: 540, margin: '0 auto 60px', textAlign: 'center' }}>
            <div style={{ ...eyebrowStyle, justifyContent: 'center' }}>
              <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
              Cómo trabajamos
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)' }}>
              Un proceso diseñado<br/>para su tranquilidad
            </h2>
          </AnimOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, border: '1px solid var(--border)' }} className="proc-grid">
            {PROCESS.map((step, i) => (
              <AnimOnScroll key={i} delay={i * 0.08} className="proc-cell" style={{ padding: '40px 30px', borderRight: i < 3 ? '1px solid var(--border)' : 'none', background: '#fff', transition: 'background .3s' }}>
                <div style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '3rem', fontWeight: 700, color: 'var(--border)', lineHeight: 1, marginBottom: 18, transition: 'color .3s' }} className="proc-num">{step.num}</div>
                <h4 style={{ fontSize: '.87rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 9, transition: 'color .3s' }} className="proc-title">{step.title}</h4>
                <p style={{ fontSize: '.79rem', lineHeight: 1.68, color: 'var(--text2)', transition: 'color .3s' }} className="proc-desc">{step.description}</p>
              </AnimOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .proc-cell:hover { background:var(--navy)!important; }
          .proc-cell:hover .proc-num { color:rgba(255,255,255,.09)!important; }
          .proc-cell:hover .proc-title { color:#fff!important; }
          .proc-cell:hover .proc-desc { color:rgba(255,255,255,.44)!important; }
          @media(max-width:1100px){ .proc-grid { grid-template-columns:1fr 1fr!important; } .proc-cell:nth-child(even){ border-right:none!important; } .proc-cell:nth-child(n+3){ border-top:1px solid var(--border)!important; } }
          @media(max-width:768px){ .proc-grid { grid-template-columns:1fr!important; } .proc-cell{ border-right:none!important; border-bottom:1px solid var(--border)!important; } .proc-cell:last-child{ border-bottom:none!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ INSIGHTS ═══════════════════ */}
      <section id="insights" style={{ ...sectionStyle, background: '#fff' }}>
        <div style={wrapStyle}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, paddingBottom: 26, borderBottom: '1px solid var(--border)' }} className="ins-head">
            <AnimOnScroll>
              <div style={eyebrowStyle}>
                <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
                Conocimiento aplicado
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)' }}>Insights Financieros</h2>
            </AnimOnScroll>
            <a href="/insights" style={{ fontSize: '.76rem', fontWeight: 600, color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>Ver todos →</a>
          </div>

          <AnimOnScroll style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, border: '1px solid var(--border)' }} className="ins-grid">
            {/* Featured */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRight: '1px solid var(--border)' }} className="ins-feat">
              <img src={INSIGHTS[0].image} alt={INSIGHTS[0].title} style={{ width: '100%', height: 400, objectFit: 'cover', filter: 'grayscale(10%)', transition: 'transform .6s, filter .4s', display: 'block' }} loading="lazy" className="ins-feat-img" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(13,43,69,.94) 0%,rgba(13,43,69,.4) 45%,transparent 70%)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--blue-mid)', marginBottom: 9 }}>{INSIGHTS[0].category}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1.2rem', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: 10 }}>{INSIGHTS[0].title}</h3>
                <div style={{ fontSize: '.67rem', color: 'rgba(255,255,255,.35)' }}>{INSIGHTS[0].author} · {INSIGHTS[0].readTime} · {INSIGHTS[0].date}</div>
              </div>
            </div>
            {/* Stack */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {INSIGHTS.slice(1).map((ins, i) => (
                <Link key={i} href={ins.href} style={{ flex: 1, padding: 22, borderBottom: i === 0 ? '1px solid var(--border)' : 'none', display: 'flex', flexDirection: 'column', gap: 10, transition: 'background .2s', textDecoration: 'none' }} className="ins-sm">
                  <img src={ins.image} alt={ins.title} style={{ width: '100%', height: 132, objectFit: 'cover', filter: 'grayscale(12%)' }} loading="lazy" />
                  <div style={{ fontSize: '.59rem', fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--blue)' }}>{ins.category}</div>
                  <h4 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '.88rem', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.36 }}>{ins.title}</h4>
                  <div style={{ fontSize: '.67rem', color: 'var(--text3)' }}>{ins.readTime} · {ins.date}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '.7rem', fontWeight: 600, color: 'var(--blue)', marginTop: 'auto' }}>Leer artículo <ArrowIcon /></div>
                </Link>
              ))}
            </div>
          </AnimOnScroll>
        </div>
        <style>{`
          .ins-feat:hover .ins-feat-img { transform:scale(1.04)!important; filter:grayscale(0%)!important; }
          .ins-sm:hover { background:var(--canvas)!important; }
          @media(max-width:1100px){ .ins-grid { grid-template-columns:1fr!important; } .ins-feat { border-right:none!important; border-bottom:1px solid var(--border)!important; } }
          @media(max-width:768px){ .ins-head { flex-direction:column!important; align-items:flex-start!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section style={{ ...sectionStyle, background: 'var(--canvas)' }}>
        <div style={wrapStyle}>
          <AnimOnScroll style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto 52px' }}>
            <div style={{ ...eyebrowStyle, justifyContent: 'center' }}>
              <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
              Testimonios
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)' }}>
              Lo que dicen quienes ya<br/>trabajan con nosotros
            </h2>
          </AnimOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--border)' }} className="test-grid">
            {TESTIMONIALS.map((t, i) => (
              <AnimOnScroll key={i} delay={i * 0.08} className="test-card" style={{ padding: '38px 30px', borderRight: i < 2 ? '1px solid var(--border)' : 'none', background: '#fff', transition: 'background .3s' }}>
                <div style={{ color: 'var(--blue)', letterSpacing: 4, fontSize: '.76rem', marginBottom: 14, transition: 'color .3s' }} className="test-stars">★★★★★</div>
                <div style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '2.4rem', lineHeight: .8, color: 'var(--border)', marginBottom: 8, transition: 'color .3s' }} className="test-q">"</div>
                <p style={{ fontSize: '.84rem', lineHeight: 1.8, color: 'var(--text2)', fontStyle: 'italic', marginBottom: 22, transition: 'color .3s' }} className="test-text">{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid var(--border)', transition: 'border-color .3s' }} className="test-author">
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '.8rem', fontWeight: 700, color: '#fff', flexShrink: 0, transition: 'background .3s' }} className="test-av">{t.initials}</div>
                  <div>
                    <div style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--navy)', transition: 'color .3s' }} className="test-name">{t.name}</div>
                    <div style={{ fontSize: '.69rem', color: 'var(--text3)', marginTop: 2, transition: 'color .3s' }} className="test-role">{t.role}</div>
                  </div>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .test-card:hover { background:var(--navy)!important; }
          .test-card:hover .test-stars { color:var(--blue-mid)!important; }
          .test-card:hover .test-q { color:rgba(255,255,255,.09)!important; }
          .test-card:hover .test-text { color:rgba(255,255,255,.52)!important; }
          .test-card:hover .test-name { color:#fff!important; }
          .test-card:hover .test-role { color:rgba(255,255,255,.32)!important; }
          .test-card:hover .test-av { background:var(--blue)!important; }
          .test-card:hover .test-author { border-top-color:rgba(255,255,255,.09)!important; }
          @media(max-width:1100px){ .test-grid { grid-template-columns:1fr!important; } .test-card { border-right:none!important; border-bottom:1px solid var(--border)!important; } .test-card:last-child { border-bottom:none!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ CTA BAND ═══════════════════ */}
      <section style={{ background: 'var(--navy)', padding: '100px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 110%, rgba(26,115,167,.18), transparent)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '0 52px' }}>
          <AnimOnScroll>
            <div style={{ ...eyebrowStyle, justifyContent: 'center', color: 'rgba(74,158,199,.9)' }}>
              <span style={{ width: 24, height: 2, background: 'rgba(74,158,199,.9)', display: 'inline-block' }} />
              Próximo paso
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3.8vw,3.1rem)', fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
              ¿Listo para trabajar con<br/>un verdadero socio financiero?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.44)', maxWidth: 450, margin: '0 auto 46px', lineHeight: 1.8 }}>
              Sin compromiso. La primera conversación es gratuita. En 45 minutos identificamos exactamente dónde podemos generar valor para su empresa.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={SITE.whatsappCTA} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#25D366', color: '#fff', fontSize: '.78rem', fontWeight: 700, padding: '13px 24px', transition: 'opacity .2s' }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp directo
              </a>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', color: 'var(--navy)', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', padding: '13px 26px' }}>
                Enviar consulta →
              </Link>
            </div>
          </AnimOnScroll>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section id="contacto" style={{ ...sectionStyle, background: '#fff' }}>
        <div style={wrapStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 0, borderTop: '1px solid var(--border)' }} className="contact-grid">
            {/* Left info */}
            <AnimOnScroll style={{ padding: '0 68px 0 0', borderRight: '1px solid var(--border)' }} className="contact-l">
              <div style={eyebrowStyle}>
                <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'inline-block' }} />
                Contacto
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)', marginBottom: 16 }}>
                Hablemos de<br/>su empresa
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text2)' }}>
                La primera conversación es gratuita. Respuesta garantizada en menos de 24 horas hábiles.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 36 }}>
                {[
                  { icon: 'phone', label: 'Teléfono / WhatsApp', value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
                  { icon: 'mail', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: 'map', label: 'Ubicación', value: SITE.location },
                  { icon: 'clock', label: 'Horario', value: SITE.schedule },
                ].map((cd, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 38, height: 38, background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {cd.icon === 'phone' && <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.5 6.5l.91-.91a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
                      {cd.icon === 'mail' && <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                      {cd.icon === 'map' && <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                      {cd.icon === 'clock' && <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                    </div>
                    <div>
                      <label style={{ fontSize: '.6rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)', fontWeight: 600 }}>{cd.label}</label>
                      {cd.href ? (
                        <a href={cd.href} style={{ display: 'block', fontSize: '.87rem', fontWeight: 600, color: 'var(--navy)', marginTop: 3 }}>{cd.value}</a>
                      ) : (
                        <p style={{ fontSize: '.87rem', fontWeight: 600, color: 'var(--navy)', marginTop: 3 }}>{cd.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimOnScroll>

            {/* Right: form */}
            <AnimOnScroll delay={0.16} style={{ paddingLeft: 68 }} className="contact-r">
              <h3 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Solicitar diagnóstico gratuito</h3>
              <p style={{ fontSize: '.82rem', color: 'var(--text2)', marginBottom: 30 }}>Sin compromiso. Respuesta en menos de 24 horas hábiles.</p>
              <ContactForm />
            </AnimOnScroll>
          </div>
        </div>
        <style>{`
          @media(max-width:1100px){
            .contact-grid { grid-template-columns:1fr!important; }
            .contact-l { padding-right:0!important; border-right:none!important; border-bottom:1px solid var(--border)!important; padding-bottom:48px!important; margin-bottom:48px!important; }
            .contact-r { padding-left:0!important; }
          }
        `}</style>
      </section>
    </>
  )
}
