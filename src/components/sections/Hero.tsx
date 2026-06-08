import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Aspiring Embedded Systems Engineer',
  'Aspiring Robotics Software Engineer',
  'Aspiring Full-Stack Engineer',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const roleIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const tick = () => {
      const target = roles[roleIdx.current]
      if (!deleting.current) {
        charIdx.current += 1
        setDisplayed(target.slice(0, charIdx.current))
        if (charIdx.current === target.length) {
          timeout = setTimeout(() => { deleting.current = true; tick() }, 2200)
          return
        }
      } else {
        charIdx.current -= 1
        setDisplayed(target.slice(0, charIdx.current))
        if (charIdx.current === 0) {
          deleting.current = false
          roleIdx.current = (roleIdx.current + 1) % roles.length
        }
      }
      timeout = setTimeout(tick, deleting.current ? 30 : 55)
    }
    timeout = setTimeout(tick, 55)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 5vw 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '650px', height: '650px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-8%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,139,139,0.08) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px', margin: '0 auto', width: '100%',
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '4rem',
        flexWrap: 'wrap',
      }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '280px' }}>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--mono)', fontSize: '0.72rem',
              color: 'var(--success)',
              border: '1px solid rgba(0,200,150,0.25)',
              borderRadius: '4px', padding: '4px 12px', marginBottom: '1.75rem',
              letterSpacing: '0.08em',
            }}
          >
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--success)',
              animation: 'node-pulse 2s infinite',
              display: 'inline-block',
            }} />
            AVAILABLE · SJSU Computer Engineering · May 2027
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '0.5rem',
              color: 'var(--text)',
            }}
          >
            Lakshmi{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #008b8b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              S.
            </span>
            {' '}Kandala
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 'clamp(0.78rem, 1.4vw, 0.92rem)',
              color: 'var(--muted)',
              marginBottom: '2rem',
              minHeight: '1.8em',
            }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>{'>'}</span>
            <span style={{ color: 'var(--accent)' }}>{displayed}</span>
            <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
          </motion.div>

          {/* About snippet */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            style={{
              fontSize: '0.95rem',
              color: 'var(--muted)',
              maxWidth: '480px',
              lineHeight: 1.85,
              marginBottom: '2rem',
              fontWeight: 400,
            }}
          >
            Computer Engineering student at SJSU building systems across embedded AI, full-stack development, and machine learning research.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <a
              href="#projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '0.75rem 1.75rem',
                borderRadius: '6px',
                background: 'var(--accent)',
                color: '#020d0f',
                fontFamily: 'var(--sans)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
                letterSpacing: '0.03em',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,180,216,0.5)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              View Projects ↓
            </a>
          </motion.div>
        </div>

        {/* Right — headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          style={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          {/* Hexagonal headshot frame */}
          <div style={{
            width: '240px',
            height: '240px',
            position: 'relative',
          }}>
            {/* Outer glow ring */}
            <div style={{
              position: 'absolute', inset: '-4px',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              background: 'linear-gradient(135deg, rgba(0,180,216,0.6), rgba(0,139,139,0.3))',
              animation: 'blob-spin 8s ease-in-out infinite',
              zIndex: 0,
            }} />
            {/* Photo container */}
            <div style={{
              position: 'absolute', inset: '4px',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              background: 'var(--bg3)',
              overflow: 'hidden',
              zIndex: 1,
              border: '2px solid rgba(0,180,216,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Placeholder — replace src with your actual photo path */}
              <img
                src="/headshot.jpg"
                alt="Lakshmi S. Kandala"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-family:var(--mono);font-size:0.75rem;color:var(--muted);text-align:center;padding:1rem">Add headshot.jpg to /public folder</div>'
                  }
                }}
              />
            </div>
          </div>

          {/* Name badge below headshot */}
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.7rem',
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: '1px solid rgba(0,180,216,0.2)',
            borderRadius: '4px',
            padding: '4px 12px',
          }}>
            Computer Engineer
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes node-pulse { 0%,100%{transform:scale(1);opacity:0.7} 50%{transform:scale(1.4);opacity:1} }
        @keyframes blob-spin {
          0%,100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }
        @media (max-width: 768px) {
          #hero > div { flex-direction: column-reverse !important; align-items: center !important; text-align: center !important; }
          #hero h1 { font-size: 2.2rem !important; }
          #hero p { max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
