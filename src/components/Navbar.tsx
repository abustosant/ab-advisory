'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/data'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '/', label: 'Inicio' },
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
          height: 80, display: 'flex', alignItems: 'center',
          padding: '0 52px',
          transition: 'background .3s, box-shadow .3s',
          background: solid ? 'rgba(13,43,69,.97)' : 'transparent',
          backdropFilter: solid ? 'blur(20px)' : 'none',
          boxShadow: solid ? '0 1px 0 rgba(255,255,255,.06)' : 'none',
        }}
      >
        <div style={{
          maxWidth: 1180, width: '100%', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/logo_nav.png"
              alt="AB Advisory — Strategic Partners"
              style={{
                height: 52, width: 'auto', maxWidth: 190,
                filter: 'brightness(0) invert(1)',
                transition: 'opacity .3s',
              }}
            />
          </Link>

          {/* Hamburger button — always visible */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              gap: 6, padding: '8px 4px', background: 'none', border: 'none',
              cursor: 'pointer', zIndex: 1001,
            }}
          >
            <span style={{
              display: 'block', width: 26, height: 1.5,
              background: 'rgba(255,255,255,.85)',
              transition: 'transform .3s, opacity .3s',
              transform: menuOpen ? 'translateY(7.5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 26, height: 1.5,
              background: 'rgba(255,255,255,.85)',
              transition: 'opacity .3s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 26, height: 1.5,
              background: 'rgba(255,255,255,.85)',
              transition: 'transform .3s, opacity .3s',
              transform: menuOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'var(--navy)',
        zIndex: 950,
        display: 'flex', flexDirection: 'column',
        padding: '120px 10vw 60px',
        transition: 'opacity .4s, transform .4s',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-12px)',
        pointerEvents: menuOpen ? 'auto' : 'none',
      }}>
        {/* Gold top bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 2, background: 'var(--gold)',
        }} />

        {/* Nav links */}
        <nav style={{ flex: 1 }}>
          {links.map((l, i) => (
            <div key={l.href} style={{
              borderBottom: '1px solid rgba(255,255,255,.07)',
              overflow: 'hidden',
            }}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="overlay-nav-link"
                style={{
                  display: 'block',
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontWeight: 300,
                  letterSpacing: '-.01em',
                  color: 'rgba(245,243,239,.82)',
                  textDecoration: 'none',
                  padding: '18px 0',
                  transition: 'color .2s, padding-left .2s',
                  transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--gold)'
                  e.currentTarget.style.paddingLeft = '12px'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(245,243,239,.82)'
                  e.currentTarget.style.paddingLeft = '0px'
                }}
              >
                {l.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom: contact info */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 32,
          paddingTop: 40, borderTop: '1px solid rgba(255,255,255,.07)',
        }}>
          <a
            href={`mailto:${SITE.email}`}
            style={{
              fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase',
              color: 'rgba(245,243,239,.45)', textDecoration: 'none',
              transition: 'color .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,243,239,.45)'}
          >
            {SITE.email}
          </a>
          <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,.15)' }} />
          <a
            href={`https://wa.me/${SITE.phoneRaw.replace(/\D/g, '')}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase',
              color: 'rgba(245,243,239,.45)', textDecoration: 'none',
              transition: 'color .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,243,239,.45)'}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          nav { padding: 0 22px !important; }
        }
      `}</style>
    </>
  )
}
