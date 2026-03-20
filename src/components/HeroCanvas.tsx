'use client'
import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
  pulse: number
  pulseSpeed: number
  connections: number
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let nodes: Node[] = []

    const MAX_DIST = 200
    const MIN_SPEED = 0.12
    const MAX_SPEED = 0.28

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initNodes()
    }

    const initNodes = () => {
      const nodeCount = canvas.width < 768 ? 60 : 110
      const W = canvas.width
      const H = canvas.height
      nodes = Array.from({ length: nodeCount }, () => {
        // Distribute with slight center bias
        const angle = Math.random() * Math.PI * 2
        const r = Math.random()
        const bias = r * r // quadratic bias toward edges for natural spread
        const x = W * 0.5 + Math.cos(angle) * bias * W * 0.52
        const y = H * 0.5 + Math.sin(angle) * bias * H * 0.52

        const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED)
        const dir = Math.random() * Math.PI * 2
        return {
          x: Math.max(20, Math.min(W - 20, x)),
          y: Math.max(20, Math.min(H - 20, y)),
          vx: Math.cos(dir) * speed,
          vy: Math.sin(dir) * speed,
          radius: Math.random() * 2.2 + 1.2,
          baseOpacity: Math.random() * 0.35 + 0.25,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.012 + Math.random() * 0.015,
          connections: 0,
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const W = canvas.width
      const H = canvas.height

      // Update positions
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += n.pulseSpeed

        // Soft bounce with slight course correction toward canvas
        if (n.x < 10)  { n.vx += 0.05; if (n.x < 0) n.x = 0 }
        if (n.x > W - 10) { n.vx -= 0.05; if (n.x > W) n.x = W }
        if (n.y < 10)  { n.vy += 0.05; if (n.y < 0) n.y = 0 }
        if (n.y > H - 10) { n.vy -= 0.05; if (n.y > H) n.y = H }

        // Clamp speed
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy)
        if (speed > MAX_SPEED) { n.vx *= MAX_SPEED / speed; n.vy *= MAX_SPEED / speed }
        if (speed < MIN_SPEED * 0.5) { n.vx *= 1.05; n.vy *= 1.05 }

        n.connections = 0
      })

      // Draw connections first (under nodes)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = 0.28 * (1 - dist / MAX_DIST)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0, 149, 220, ${alpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
            nodes[i].connections++
            nodes[j].connections++
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulseAmt = Math.sin(n.pulse)
        const r = n.radius + pulseAmt * 0.6
        const alpha = n.baseOpacity + pulseAmt * 0.1

        // Hub nodes (many connections) get extra glow
        if (n.connections >= 4) {
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5)
          glow.addColorStop(0, `rgba(0, 169, 255, ${alpha * 0.5})`)
          glow.addColorStop(1, 'rgba(0, 169, 255, 0)')
          ctx.beginPath()
          ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        // Core dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 169, 255, ${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
