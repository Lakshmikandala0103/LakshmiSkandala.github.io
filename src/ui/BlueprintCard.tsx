import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { scaleIn } from '../utils/animations'

type Props = {
  children: ReactNode
  glowColor?: string
  style?: React.CSSProperties
  onClick?: () => void
  delay?: number
}

export default function BlueprintCard({
  children,
  glowColor = '#00b4d8',
  style = {},
  onClick,
  delay = 0,
}: Props) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{
        borderColor: glowColor,
        boxShadow: `0 0 24px ${glowColor}22, inset 0 0 24px ${glowColor}08`,
        y: -4,
      }}
      onClick={onClick}
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        backdropFilter: 'blur(12px)',
        ...style,
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '12px', height: '12px',
        borderTop: `2px solid ${glowColor}`,
        borderLeft: `2px solid ${glowColor}`,
        opacity: 0.6,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '12px', height: '12px',
        borderBottom: `2px solid ${glowColor}`,
        borderRight: `2px solid ${glowColor}`,
        opacity: 0.6,
      }} />
      {children}
    </motion.div>
  )
}