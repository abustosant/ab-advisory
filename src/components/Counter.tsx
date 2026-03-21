'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function Counter({ target, prefix = '', suffix = '', className = '' }: Props) {
  const [value, setValue] = useState(target)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return
      animated.current = true
      setValue(0)
      const start = performance.now()
      const duration = 1800
      const animate = (ts: number) => {
        const p = Math.min((ts - start) / duration, 1)
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
        setValue(Math.round(eased * target))
        if (p < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      obs.unobserve(el)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref} className={className}>
      {prefix}{value}<span style={{ color: 'var(--blue-mid)' }}>{suffix}</span>
    </div>
  )
}
