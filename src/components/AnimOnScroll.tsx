'use client'
import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

export default function AnimOnScroll({ children, className = '', style = {}, delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'none'
        obs.unobserve(el)
      }
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const transforms: Record<string, string> = {
    up: 'translateY(26px)',
    left: 'translateX(-26px)',
    right: 'translateX(26px)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: transforms[direction],
        transition: `opacity .6s cubic-bezier(.22,.68,0,1.15) ${delay}s, transform .6s cubic-bezier(.22,.68,0,1.15) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
