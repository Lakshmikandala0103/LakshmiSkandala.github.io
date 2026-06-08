import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'
import { meta } from '../../data/meta'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Coursework', href: '#coursework' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = [
  'about', 'projects', 'experience',
  'leadership', 'coursework', 'certifications', 'contact',
]

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.9rem 5vw',
          background: scrolled ? 'rgba(2,13,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,180,216,0.12)' : '1px solid transparent',
          transition: 'all 0.35s ease',
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: 'var(--accent)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            marginRight: '3rem',
            flexShrink: 0,
          }}
        >
          {meta.initials}
        </a>

        <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', margin: 0, padding: 0, flex: 1 }}>
          {links.map((l) => {
            const isActive = active === l.href.replace('#', '')
            return (
              <li key={l.href} style={{ position: 'relative' }}>
                <a
                  href={l.href}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.75rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--accent)' : 'var(--muted)',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase' as const,
                    transition: 'color 0.2s',
                    paddingBottom: '2px',
                    display: 'block',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text)'
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--muted)'
                  }}
                >
                  {l.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: -2, left: 0, right: 0,
                      height: '1px',
                      background: 'var(--accent)',
                      boxShadow: '0 0 6px var(--accent)',
                    }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--accent)',
            fontSize: '1.4rem',
            marginLeft: '1rem',
            display: 'none',
            padding: 0,
          }}
          className="hamburger"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '60px', left: 0, right: 0,
              zIndex: 99,
              background: 'rgba(2,13,15,0.97)',
              borderBottom: '1px solid rgba(0,180,216,0.15)',
              padding: '1.5rem 5vw',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.9rem',
                  color: active === l.href.replace('#', '') ? 'var(--accent)' : 'var(--muted)',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav ul { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}
