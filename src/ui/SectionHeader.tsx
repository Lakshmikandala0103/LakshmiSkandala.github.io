import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

type Props = {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ marginBottom: '3.5rem' }}
    >
      {/* Blueprint label */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        marginBottom: '1rem',
      }}>
        <div style={{
          width: '24px', height: '1px',
          background: 'var(--accent)',
        }} />
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          color: 'var(--accent)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          {label}
        </span>
        <div style={{
          width: '24px', height: '1px',
          background: 'var(--accent)',
        }} />
      </div>

      {/* Title */}
      <h2 style={{
        fontFamily: 'var(--sans)',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
        fontWeight: 700,
        lineHeight: 1.15,
        color: 'var(--text)',
        marginBottom: subtitle ? '0.75rem' : 0,
      }}>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p style={{
          color: 'var(--muted)',
          fontSize: '1rem',
          maxWidth: '560px',
          lineHeight: 1.75,
        }}>
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      <div style={{
        marginTop: '1.25rem',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <div style={{
          height: '2px', width: '40px',
          background: 'linear-gradient(90deg, var(--accent), transparent)',
          borderRadius: '2px',
        }} />
        <div style={{
          height: '2px', width: '16px',
          background: 'rgba(0,180,216,0.3)',
          borderRadius: '2px',
        }} />
        <div style={{
          height: '2px', width: '6px',
          background: 'rgba(0,180,216,0.15)',
          borderRadius: '2px',
        }} />
      </div>
    </motion.div>
  )
}