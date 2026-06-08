import { useEffect, useRef } from 'react'

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Animated nodes on the grid intersections
    const nodes: { x: number; y: number; phase: number; size: number }[] = []
    const GRID = 80

    const buildNodes = () => {
      nodes.length = 0
      const cols = Math.ceil(canvas.width / GRID) + 1
      const rows = Math.ceil(canvas.height / GRID) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() < 0.08) {
            nodes.push({
              x: c * GRID,
              y: r * GRID,
              phase: Math.random() * Math.PI * 2,
              size: Math.random() * 2 + 1,
            })
          }
        }
      }
    }
    buildNodes()
    window.addEventListener('resize', buildNodes)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.012

      for (const node of nodes) {
        const alpha = (Math.sin(time + node.phase) + 1) / 2
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 180, 216, ${alpha * 0.5})`
        ctx.fill()

        // Occasional pulse ring
        if (alpha > 0.92) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(0, 180, 216, ${(alpha - 0.92) * 3})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('resize', buildNodes)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
      aria-hidden="true"
    />
  )
}