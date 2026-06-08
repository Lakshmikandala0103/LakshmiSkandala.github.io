import { meta } from '../../data/meta'

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(0,180,216,0.1)',
      padding: '2rem 5vw',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
        © 2025 {meta.name}
      </span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'rgba(0,180,216,0.4)' }}>
        SJSU · Computer Engineering · Jun 2026
      </span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
        Built with React · Vite · Framer Motion
      </span>
    </footer>
  )
}