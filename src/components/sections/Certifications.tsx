import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import { certifications } from '../../data/certifications'
import { fadeUp, containerVariants } from '../../utils/animations'

export default function Certifications() {
  const [tab, setTab] = useState<'completed' | 'in-progress'>('completed')
  const filtered = certifications.filter(c => c.status === tab)

  return (
    <section id="certifications" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="07 · VERIFIED MODULES"
          title="Certifications"
          subtitle="Continuous learning beyond the classroom — applied skills and emerging tech."
        />

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {(['completed', 'in-progress'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                fontFamily: 'var(--mono)', fontSize: '0.75rem',
                padding: '0.5rem 1.25rem', borderRadius: '4px',
                border: tab === t
                  ? '1px solid var(--accent)'
                  : '1px solid var(--border)',
                background: tab === t
                  ? 'rgba(0,180,216,0.12)'
                  : 'transparent',
                color: tab === t ? 'var(--accent)' : 'var(--muted)',
                cursor: 'pointer', transition: 'all 0.2s',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}
            >
              {t === 'completed' ? '✓ COMPLETED' : '⟳ IN PROGRESS'}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants(0)}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1rem',
              }}
            >
              {filtered.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={fadeUp}
                  whileHover={{
                    borderColor: cert.color,
                    boxShadow: `0 0 20px ${cert.color}25`,
                    y: -3,
                  }}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex', flexDirection: 'column', gap: '0.6rem',
                    position: 'relative', overflow: 'hidden',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.25s',
                  }}
                >
                  {/* Corner accent */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0,
                    width: '10px', height: '10px',
                    borderTop: `2px solid ${cert.color}`,
                    borderLeft: `2px solid ${cert.color}`,
                  }} />

                  {/* Status badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '0.65rem',
                      padding: '2px 8px', borderRadius: '4px',
                      background: cert.status === 'completed'
                        ? 'rgba(0,200,150,0.1)'
                        : 'rgba(245,158,11,0.1)',
                      border: cert.status === 'completed'
                        ? '1px solid rgba(0,200,150,0.3)'
                        : '1px solid rgba(245,158,11,0.3)',
                      color: cert.status === 'completed' ? 'var(--success)' : '#f59e0b',
                      letterSpacing: '0.06em',
                    }}>
                      {cert.status === 'completed' ? '✓ VERIFIED' : '⟳ ACTIVE'}
                    </span>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '0.65rem',
                      color: cert.color,
                      padding: '2px 8px', borderRadius: '4px',
                      background: `${cert.color}10`,
                      border: `1px solid ${cert.color}25`,
                    }}>
                      {cert.category}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.4, color: 'var(--text)' }}>
                    {cert.title}
                  </h4>

                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
                    {cert.issuer}
                  </p>

                  {/* Progress bar for in-progress */}
                  {cert.status === 'in-progress' && (
                    <div style={{
                      height: '2px', background: 'rgba(255,255,255,0.06)',
                      borderRadius: '2px', marginTop: '0.25rem', overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '45%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${cert.color}, ${cert.color}80)`,
                          borderRadius: '2px',
                          boxShadow: `0 0 6px ${cert.color}`,
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}