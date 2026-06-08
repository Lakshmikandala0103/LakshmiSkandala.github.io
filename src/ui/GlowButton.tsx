import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
  color?: string
  target?: string
  rel?: string
  style?: React.CSSProperties
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  color = '#00b4d8',
  target,
  rel,
  style = {},
}: Props) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0.7rem 1.6rem',
    borderRadius: '6px',
    fontFamily: 'var(--sans)',
    fontSize: '0.875rem',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    letterSpacing: '0.03em',
    transition: 'all 0.2s',
    position: 'relative',
    overflow: 'hidden',
    ...style,
  }

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: color, color: '#020d0f' },
    ghost: { background: `${color}12`, color: color, border: `1px solid ${color}40` },
    outline: { background: 'transparent', color: color, border: `1px solid ${color}` },
  }

  const combined = { ...base, ...variants[variant] }

  const content = (
    <motion.span
      style={combined}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 20px ${color}50`,
      }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={{ textDecoration: 'none' }}>
        {content}
      </a>
    )
  }

  return content
}