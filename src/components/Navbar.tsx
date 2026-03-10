'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/data'

export default function Navbar() {
  const [solid, setSolid] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/#servicios', label: 'Servicios' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/insights', label: 'Insights' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
          height: 62, display: 'flex', alignItems: 'center',
          padding: '0 52px',
          transition: 'background .3s, box-shadow .3s',
          background: solid ? 'rgba(13,43,69,.97)' : 'transparent',
          backdropFilter: solid ? 'blur(20px)' : 'none',
          boxShadow: solid ? '0 1px 0 rgba(255,255,255,.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1180, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
<Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, textDecoration: 'none', gap: 4 }}>
  <span style={{
    fontFamily: 'var(--font-playfair, var(--serif))',
    fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-.02em',
    color: solid ? '#fff' : 'var(--navy)',
    transition: 'color .3s',
  }}>AB Advisory</span>
  <span style={{
    fontSize: '.45rem', letterSpacing: '.22em', textTransform: 'uppercase',
    color: solid ? 'rgba(255,255,255,.4)' : 'var(--blue)',
    transition: 'color .3s',
  }}>Strategic Partners</span>
</Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-links-desktop">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontSize: '.78rem', fontWeight: 500, padding: '8px 15px',
                color: solid ? 'rgba(255,255,255,.65)' : 'var(--text2)',
                transition: 'color .2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = solid ? '#fff' : 'var(--navy)')}
              onMouseLeave={e => (e.currentTarget.style.color = solid ? 'rgba(255,255,255,.65)' : 'var(--text2)')}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contacto" style={{
              fontSize: '.75rem', fontWeight: 700, padding: '8px 20px',
              marginLeft: 8,
              background: solid ? '#fff' : 'var(--navy)',
              color: solid ? 'var(--navy)' : '#fff',
              transition: 'all .2s',
            }}>
              Conversemos
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="ham-btn" style={{
            display: 'none', flexDirection: 'column', gap: 5, padding: 8,
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 1.5,
                background: solid ? 'rgba(255,255,255,.8)' : 'var(--navy)',
                transition: 'background .3s',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 62, left: 0, right: 0, bottom: 0,
          background: 'var(--navy)', padding: '40px 32px',
          display: 'flex', flexDirection: 'column', zIndex: 899,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{
              fontSize: '1.05rem', color: 'rgba(255,255,255,.75)',
              padding: '17px 0', borderBottom: '1px solid rgba(255,255,255,.07)',
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contacto" onClick={() => setMobileOpen(false)} style={{
            marginTop: 20, background: '#fff', color: 'var(--navy)',
            fontWeight: 700, textAlign: 'center', padding: 15, display: 'block',
          }}>
            Conversemos →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .ham-btn { display: flex !important; }
        }
        nav { padding: 0 52px !important; }
        @media (max-width: 768px) {
          nav { padding: 0 22px !important; }
        }
      `}</style>
    </>
  )
}
