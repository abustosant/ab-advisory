import Link from 'next/link'

import AnimOnScroll from '@/components/AnimOnScroll'
import Counter from '@/components/Counter'
import LeadMagnetForm from '@/components/LeadMagnetForm'
import { SITE, METRICS, KPIS, SERVICES, SERVICES_ADDITIONAL, DIFFERENTIATORS, PROCESS, INSIGHTS, FOUNDER } from '@/lib/data'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, transition: 'transform .2s' }}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Home() {
 
  const eyebrowStyle: React.CSSProperties = {
    fontSize: '.63rem', fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase',
    color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16,
  }
 
  const sectionStyle: React.CSSProperties = { padding: '108px 0' }
  const wrapStyle: React.CSSProperties = { maxWidth: 1180, margin: '0 auto', padding: '0 52px' }
 
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero-section-wrap" style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 80px 90px', background: '#0A0F1C',
      }}>
        {/* Video de fondo */}
        <video autoPlay muted loop playsInline style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
          width: '100%', height: '100%', display: 'block',
          objectFit: 'cover', objectPosition: 'center 30%',
        }}>
          <source src="/hero-santiago-v2.mp4" type="video/mp4" />
        </video>

        {/* Overlay navy 65% */}
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, background: 'rgba(13,43,69,0.65)' }} />

        {/* Overlay degradado direccional */}
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1,
          background: 'linear-gradient(to right, rgba(10,15,28,0.55) 0%, rgba(10,15,28,0.25) 55%, transparent 100%), linear-gradient(to top, rgba(10,15,28,0.80) 0%, rgba(10,15,28,0.20) 40%, transparent 70%)',
        }} />

        {/* Línea dorada vertical izquierda */}
        <div className="hero-line-left" style={{
          position: 'absolute', left: 80, top: 0, bottom: 0, width: 1, zIndex: 2,
          background: 'linear-gradient(to bottom, transparent 10%, var(--gold) 40%, var(--gold) 60%, transparent 90%)',
          opacity: 0.28,
        }} />

        {/* Línea superior dorada */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--gold)', zIndex: 4, opacity: 0.45 }} />
        {/* Ola inferior → transición a sección blanca */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 4, height: 80, overflow: 'hidden' }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
          </svg>
        </div>

        {/* Contenido principal */}
        <div style={{ position: 'relative', zIndex: 3, maxWidth: 680 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <span style={{ width: 36, height: 1, background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: '.63rem', fontWeight: 500, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Firma boutique · Santiago de Chile
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-playfair,var(--serif))',
            fontSize: 'clamp(3.25rem, 6.5vw, 5.5rem)',
            fontWeight: 300, lineHeight: 1.05, letterSpacing: '-.01em',
            color: '#F5F3EF', marginBottom: 8,
          }}>
            Decisiones<br/>financieras con<br/>
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#E8C98A' }}>respaldo técnico</em>
          </h1>

          <p style={{
            fontSize: '.83rem', fontWeight: 300, lineHeight: 1.9, letterSpacing: '.02em',
            color: 'rgba(245,243,239,0.55)', maxWidth: 460, margin: '28px 0 44px',
          }}>
            Asesoría financiera, contable y de auditoría para empresas y grupos empresariales que exigen el más alto estándar técnico — con la atención personalizada y la agilidad que solo una firma boutique puede ofrecer.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              fontSize: '.72rem', fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase',
              color: '#0A0F1C', background: 'var(--gold)', padding: '14px 36px',
              transition: 'background .3s, transform .2s',
            }} className="btn-hero-primary">
              Agendar una reunión <ArrowIcon />
            </Link>
            <Link href="#servicios" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              fontSize: '.72rem', fontWeight: 400, letterSpacing: '.13em', textTransform: 'uppercase',
              color: 'rgba(245,243,239,0.75)',
              borderBottom: '1px solid rgba(201,169,110,0.4)', paddingBottom: 3,
              transition: 'color .3s, border-color .3s',
            }} className="btn-hero-secondary">
              Ver servicios
            </Link>
          </div>
        </div>

        {/* Métricas — inferior derecha */}
        <div style={{
          position: 'absolute', bottom: 90, right: 80, zIndex: 3,
          display: 'flex', gap: 44, alignItems: 'flex-end',
        }} className="hero-metrics-bar">
          {([
            { n: '20', suffix: '+', l: 'Años en finanzas\ncorporativas' },
            { n: 'USD 15', suffix: 'M', l: 'En deuda\nreestructurada' },
            { n: '34', suffix: '', l: 'Empresas bajo IFRS\nsin observaciones' },
            { n: '0', suffix: '', l: 'Observaciones en\nauditorías Big Four' },
          ] as { n: string; suffix: string; l: string }[]).flatMap((item, i) => {
            const els = []
            if (i > 0) els.push(
              <div key={`d${i}`} style={{ width: 1, height: 56, background: 'rgba(201,169,110,0.2)', alignSelf: 'center', flexShrink: 0 }} />
            )
            els.push(
              <div key={`m${i}`} style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'var(--font-playfair,var(--serif))',
                  fontSize: '2.6rem', fontWeight: 300, color: '#F5F3EF', lineHeight: 1,
                }}>
                  {item.n}<span style={{ color: 'var(--gold)', fontSize: '1.5rem' }}>{item.suffix}</span>
                </div>
                <div style={{
                  fontSize: '.55rem', fontWeight: 400, letterSpacing: '.15em',
                  textTransform: 'uppercase', color: 'rgba(245,243,239,0.4)',
                  marginTop: 6, lineHeight: 1.5,
                }}>
                  {item.l.split('\n').map((line, j) => <span key={j}>{line}{j === 0 && <br/>}</span>)}
                </div>
              </div>
            )
            return els
          })}
        </div>

        <style>{`
          .btn-hero-primary:hover { background: #E8C98A !important; transform: translateY(-1px); }
          .btn-hero-secondary:hover { color: var(--gold) !important; border-color: var(--gold) !important; }
          @media(max-width:1200px){ .hero-metrics-bar { right:36px!important; gap:28px!important; } }
          @media(max-width:920px){ .hero-metrics-bar { display:none!important; } }
          @media(max-width:768px){ .hero-section-wrap { padding:0 28px 70px!important; } .hero-line-left { display:none!important; } }
          @media(max-width:480px){ .hero-section-wrap { padding:0 18px 60px!important; } }
        `}</style>
      </section>
 

 
      {/* ═══════════════════ DIFFERENTIATOR ═══════════════════ */}
      <section id="diferenciador" style={{ ...sectionStyle, background: '#fff' }}>
        <div style={wrapStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--border)' }} className="diff-grid">
            <AnimOnScroll style={{ padding: '92px 68px 92px 0', borderRight: '1px solid var(--border)' }} className="diff-l">
              <div style={eyebrowStyle}>
                <span style={{ width: 24, height: 2, background: 'var(--gold)', display: 'inline-block' }} />
                ¿Por qué AB Advisory?
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)', marginBottom: 16 }}>
                La profundidad de una gran firma.<br/>La atención de un socio exclusivo.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text2)', marginBottom: 40 }}>
                Su empresa merece el estándar técnico que exigen los grupos empresariales de primer nivel — implementación IFRS, estructuración de deuda y estrategia financiera real — con la dedicación exclusiva de quien responde directamente y sin intermediarios.
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
 
            <AnimOnScroll delay={0.16} style={{ padding: '92px 0 92px 68px' }} className="diff-r">
              <div style={eyebrowStyle}>
                <span style={{ width: 24, height: 2, background: 'var(--gold)', display: 'inline-block' }} />
                Lo que nos distingue
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.25rem,2vw,1.7rem)', fontWeight: 600, color: 'var(--navy)', marginBottom: 36, lineHeight: 1.3 }}>
                Tres principios que definen<br/>cada mandato.
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {DIFFERENTIATORS.map((d, i) => (
                  <div key={i} style={{ paddingTop: 28, paddingBottom: 28, borderTop: '1px solid var(--border)', display: 'flex', gap: 20 }} className="diff-pillar">
                    <div style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, flexShrink: 0, opacity: 0.5, minWidth: 32 }}>{d.num}</div>
                    <div>
                      <div style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 7, letterSpacing: '.01em' }}>{d.title}</div>
                      <p style={{ fontSize: '.8rem', lineHeight: 1.72, color: 'var(--text2)', margin: 0 }}>{d.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimOnScroll>
          </div>
        </div>
        <style>{`
          .kpi-cell:hover { background:var(--ice)!important; }
          .diff-pillar:hover { background:var(--canvas)!important; margin:0 -16px; padding-left:16px!important; padding-right:16px!important; }
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
                <span style={{ width: 24, height: 2, background: 'var(--gold)', display: 'inline-block' }} />
                Asesoría financiera · contable · RRHH en Chile
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)' }}>
                Tres pilares.<br/>Un socio estratégico.
              </h2>
            </AnimOnScroll>
          </div>
 
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--border)' }} className="svc-grid">
            {SERVICES.map((svc, i) => (
              <AnimOnScroll key={i} delay={i * 0.08} className="svc-card" style={{
                padding: '42px 34px', borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                background: '#fff', position: 'relative', overflow: 'hidden', transition: 'background .3s',
              }}>
                <img src={svc.image} alt={svc.title} style={{ width: '100%', height: 175, objectFit: 'cover', marginBottom: 30, filter: 'grayscale(15%)', transition: 'filter .4s' }} loading="lazy" />
                <div style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 11, transition: 'color .3s' }}>
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
                <div style={{ paddingTop: 17, borderTop: '1px solid var(--border)' }}>
                  <Link href={svc.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '.74rem', fontWeight: 600, color: 'var(--navy)', background: 'var(--canvas)', border: '1.5px solid var(--border)', padding: '9px 16px', transition: 'all .2s' }} className="svc-cta-btn">
                    {svc.cta} <ArrowIcon />
                  </Link>
                  <p style={{ fontSize: '.67rem', color: 'var(--text3)', marginTop: 9, letterSpacing: '.03em' }}>{svc.ctaSub}</p>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .svc-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform .35s; }
          .svc-card:hover::before { transform:scaleX(1)!important; }
          .svc-card:hover { background:var(--navy)!important; }
          .svc-card:hover img { filter:grayscale(100%) brightness(.3)!important; }
          .svc-card:hover h3, .svc-card:hover p, .svc-card:hover li { color:rgba(255,255,255,.7)!important; }
          .svc-card:hover div[style*="var(--blue)"] { color:var(--blue-mid)!important; }
          .svc-cta-btn:hover { background:var(--navy)!important; color:#fff!important; border-color:var(--navy)!important; }
          .svc-card:hover .svc-cta-btn { background:rgba(255,255,255,.08)!important; color:rgba(255,255,255,.85)!important; border-color:rgba(255,255,255,.15)!important; }
          .svcs-head { flex-wrap:wrap; gap:16px; }
          @media(max-width:1100px){ .svc-grid { grid-template-columns:1fr!important; } .svc-card { border-right:none!important; border-bottom:1px solid var(--border)!important; } }
          @media(max-width:768px){ .svcs-head { flex-direction:column!important; align-items:flex-start!important; } }
          @media(max-width:480px){ .svc-card { padding:28px 20px!important; } }
        `}</style>
      </section>
 
      {/* ═══════════════════ SERVICES ADDITIONAL ═══════════════════ */}
      <section style={{ background: 'var(--navy)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .025, backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '0 52px' }}>
          <p style={{ ...eyebrowStyle, color: 'var(--gold)' }}>Soluciones complementarias</p>
          <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 400, color: '#fff', marginBottom: 48, maxWidth: 560, lineHeight: 1.35 }}>
            Servicios especializados<br />para mandatos de mayor complejidad.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.07)' }} className="add-grid">
            {SERVICES_ADDITIONAL.map((svc) => (
              <AnimOnScroll key={svc.num}>
                <div className="add-card" style={{ background: 'rgba(255,255,255,.03)', padding: '36px 32px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '.8rem', color: 'var(--gold)', opacity: .6, marginBottom: 20, letterSpacing: '.05em' }}>{svc.num}</div>
                  <div style={{ fontSize: '.6rem', textTransform: 'uppercase', letterSpacing: '.18em', color: 'rgba(255,255,255,.3)', marginBottom: 8, fontWeight: 600 }}>{svc.category}</div>
                  <h3 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1.15rem', fontWeight: 600, color: '#fff', marginBottom: 14, lineHeight: 1.3 }}>{svc.title}</h3>
                  <p style={{ fontSize: '.79rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7, marginBottom: 24, flex: 1 }}>{svc.description}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 28 }}>
                    {svc.items.map(item => (
                      <li key={item} style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.4)', display: 'flex', alignItems: 'flex-start', gap: 9, lineHeight: 1.5 }}>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--gold)', opacity: .6, marginTop: 7, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href={svc.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '.72rem', fontWeight: 600, color: 'rgba(255,255,255,.6)', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', padding: '8px 14px', transition: 'all .2s', letterSpacing: '.03em' }} className="add-cta-btn">
                      {svc.cta} <ArrowIcon />
                    </Link>
                    <p style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.22)', marginTop: 9, letterSpacing: '.03em' }}>{svc.ctaSub}</p>
                  </div>
                </div>
              </AnimOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .add-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform .35s; }
          .add-card:hover::before { transform:scaleX(1)!important; }
          .add-card:hover { background:rgba(255,255,255,.07)!important; }
          .add-cta-btn:hover { background:var(--gold)!important; color:var(--navy)!important; border-color:var(--gold)!important; }
          @media(max-width:1100px){ .add-grid { grid-template-columns:1fr 1fr!important; } }
          @media(max-width:768px){ .add-grid { grid-template-columns:1fr!important; } }
          @media(max-width:480px){ .add-card { padding:28px 20px!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ METRICS ═══════════════════ */}
      <section style={{ background: 'var(--navy)', padding: '76px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .03, backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '0 52px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="met-grid">
            {METRICS.map((m, i) => (
              <div key={i} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.07)' : 'none', textAlign: 'center', transition: 'background .25s' }} className="met-cell">
                <Counter target={m.value} prefix={m.prefix} suffix={m.suffix} className="met-n" />
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
          @media(max-width:1100px){ .met-grid { grid-template-columns:1fr 1fr!important; } .met-cell { border-bottom:1px solid rgba(255,255,255,.07)!important; } .met-cell:nth-child(odd) { border-right:1px solid rgba(255,255,255,.07)!important; } .met-cell:nth-child(even) { border-right:none!important; } .met-cell:nth-last-child(-n+2) { border-bottom:none!important; } }
          @media(max-width:768px){ .met-grid { grid-template-columns:1fr!important; } .met-cell { border-right:none!important; } }
        `}</style>
      </section>
 
      {/* ═══════════════════ FOUNDER TEASER ═══════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border)', padding: '96px 0' }}>
        <div style={wrapStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '80px', alignItems: 'center' }} className="ft-grid">

            <AnimOnScroll>
              <div style={{ width: 36, height: 2, background: 'var(--gold)', marginBottom: 36 }} />
              <blockquote style={{
                fontFamily: 'var(--font-playfair,var(--serif))',
                fontSize: 'clamp(1.15rem,2vw,1.5rem)',
                fontWeight: 300, fontStyle: 'italic',
                color: 'var(--navy)', lineHeight: 1.7,
                letterSpacing: '-.01em', marginBottom: 36,
              }}>
                {FOUNDER.statement.replace(/^"|"$/g, '')}
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--navy)' }}>{FOUNDER.name}</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 3, letterSpacing: '.03em' }}>{FOUNDER.role}</div>
                </div>
                <Link href="/nosotros" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '.74rem', fontWeight: 600, color: 'var(--blue)', letterSpacing: '.04em', borderBottom: '1px solid rgba(15,76,122,.25)', paddingBottom: 2, transition: 'color .2s, border-color .2s' }} className="ft-link">
                  Conocer al Director Fundador <ArrowIcon />
                </Link>
              </div>
            </AnimOnScroll>

            <AnimOnScroll direction="right">
              <Link href="/nosotros" style={{ display: 'block', position: 'relative', overflow: 'hidden' }} className="ft-photo-wrap">
                <img
                  src="/images/team/andres-bustos.webp"
                  alt={FOUNDER.name}
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top center', display: 'block', filter: 'grayscale(8%)', transition: 'transform .6s, filter .4s' }}
                  className="ft-photo"
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(13,43,69,0)', transition: 'background .4s' }} className="ft-overlay" />
              </Link>
            </AnimOnScroll>

          </div>
        </div>
        <style>{`
          .ft-link:hover { color:var(--navy)!important; border-color:var(--navy)!important; }
          .ft-photo-wrap:hover .ft-photo { transform:scale(1.03)!important; filter:grayscale(0%)!important; }
          .ft-photo-wrap:hover .ft-overlay { background:rgba(13,43,69,.08)!important; }
          @media(max-width:1100px){ .ft-grid { grid-template-columns:1fr!important; } }
          @media(max-width:768px){ .ft-grid { gap:40px!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section style={{ ...sectionStyle, background: 'var(--canvas)' }}>
        <div style={wrapStyle}>
          <AnimOnScroll style={{ maxWidth: 540, margin: '0 auto 60px', textAlign: 'center' }}>
            <div style={{ ...eyebrowStyle, justifyContent: 'center' }}>
              <span style={{ width: 24, height: 2, background: 'var(--gold)', display: 'inline-block' }} />
              Metodología
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)' }}>
              Un proceso diseñado<br/>para su certeza
            </h2>
          </AnimOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, border: '1px solid var(--border)' }} className="proc-grid">
            {PROCESS.map((step, i) => (
              <AnimOnScroll key={i} delay={i * 0.08} className="proc-cell" style={{ padding: '40px 30px', borderRight: i < 3 ? '1px solid var(--border)' : 'none', background: '#fff', transition: 'background .3s' }}>
                <div style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '3rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: 18, transition: 'color .3s' }} className="proc-num">{step.num}</div>
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
                <span style={{ width: 24, height: 2, background: 'var(--gold)', display: 'inline-block' }} />
                Conocimiento aplicado
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)' }}>Análisis IFRS y<br/>Finanzas Corporativas</h2>
            </AnimOnScroll>
            <a href="/insights" style={{ fontSize: '.76rem', fontWeight: 600, color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>Ver todos →</a>
          </div>
          <AnimOnScroll style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, border: '1px solid var(--border)' }} className="ins-grid">
            <Link href={INSIGHTS[0].href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', borderRight: '1px solid var(--border)' }} className="ins-feat">
              <img src={INSIGHTS[0].image} alt={INSIGHTS[0].title} style={{ width: '100%', height: '100%', minHeight: 320, objectFit: 'cover', filter: 'grayscale(10%)', transition: 'transform .6s, filter .4s', display: 'block', flex: 1 }} loading="lazy" className="ins-feat-img" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(13,43,69,.94) 0%,rgba(13,43,69,.4) 45%,transparent 70%)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 2 }}>
                <div style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--blue-mid)', marginBottom: 9 }}>{INSIGHTS[0].category}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: '1.2rem', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: 10 }}>{INSIGHTS[0].title}</h3>
                <div style={{ fontSize: '.67rem', color: 'rgba(255,255,255,.35)', marginBottom: 12 }}>{INSIGHTS[0].author} · {INSIGHTS[0].readTime} · {INSIGHTS[0].date}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '.7rem', fontWeight: 600, color: 'var(--blue-mid)' }}>Leer artículo <ArrowIcon /></div>
              </div>
            </Link>
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
 
      {/* ═══════════════════ TESTIMONIALS (desactivado — descomentar para activar) ═══════════════════ */}
      {/* <section style={{ ...sectionStyle, background: 'var(--canvas)' }}>
        <div style={wrapStyle}>
          <AnimOnScroll style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto 52px' }}>
            <div style={{ ...eyebrowStyle, justifyContent: 'center' }}>
              <span style={{ width: 24, height: 2, background: 'var(--gold)', display: 'inline-block' }} />
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
      </section> */}
 
      {/* ═══════════════════ LEAD MAGNET ═══════════════════ */}
      <section style={{ background: 'var(--canvas)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div style={wrapStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '72px', alignItems: 'center' }} className="lm-grid">
            <AnimOnScroll>
              <div style={eyebrowStyle}>
                <span style={{ width: 24, height: 2, background: 'var(--gold)', display: 'inline-block' }} />
                Documento técnico
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.5rem,2.5vw,2.1rem)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.15, marginBottom: 14, letterSpacing: '-.015em' }}>
                Checklist de transición<br/>IFRS 18 para CFOs
              </h2>
              <p style={{ fontSize: '.88rem', lineHeight: 1.8, color: 'var(--text2)', marginBottom: 24, maxWidth: 480 }}>
                La norma IFRS 18 redefine la presentación del estado de resultados con vigencia 2027. Este checklist de 28 puntos recoge los criterios de diagnóstico que aplicamos en nuestras implementaciones para identificar brechas y planificar la transición con anticipación.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  '28 puntos de control mapeados contra NIC 1 vigente',
                  'Diagnóstico de brechas por tipo de entidad',
                  'Basado en consolidaciones de hasta 34 entidades bajo IFRS',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '.81rem', color: 'var(--text2)' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', marginTop: 7, flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </AnimOnScroll>

            <AnimOnScroll delay={0.12}>
              <LeadMagnetForm />
            </AnimOnScroll>
          </div>
        </div>
        <style>{`
          @media(max-width:1100px){ .lm-grid { grid-template-columns:1fr!important; gap:40px!important; } }
        `}</style>
      </section>

      {/* ═══════════════════ CTA BAND ═══════════════════ */}
      <section style={{ background: 'var(--navy)', padding: '100px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 110%, rgba(15,76,122,.18), transparent)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '0 52px' }}>
          <AnimOnScroll>
            <div style={{ ...eyebrowStyle, justifyContent: 'center', color: 'rgba(74,158,199,.9)' }}>
              <span style={{ width: 24, height: 2, background: 'rgba(74,158,199,.9)', display: 'inline-block' }} />
              Próximo paso
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair,var(--serif))', fontSize: 'clamp(1.8rem,3.8vw,3.1rem)', fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
              Un socio de primer nivel<br/>para sus decisiones financieras.
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.44)', maxWidth: 450, margin: '0 auto 46px', lineHeight: 1.8 }}>
              Cuéntenos el desafío de su empresa. Cada consulta es evaluada directamente por un socio de la firma.
            </p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', color: 'var(--navy)', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', padding: '13px 26px' }}>
              Agendar una reunión <ArrowIcon />
            </Link>
          </AnimOnScroll>
        </div>
      </section>
    </>
  )
}