import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import { coursework } from '../../data/coursework'
import { fadeUp, containerVariants } from '../../utils/animations'

export default function Coursework() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="coursework" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="06 · ACADEMIC MODULES"
          title="Relevant Coursework"
          subtitle="The rigorous academic foundation behind the engineering depth. Click any module to expand."
        />

        <motion.div
          variants={containerVariants(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          {coursework.map((group) => {
            const isOpen = expanded === group.category
            return (
              <motion.div key={group.category} variants={fadeUp}>
                {/* Header row */}
                <motion.button
                  onClick={() => setExpanded(isOpen ? null : group.category)}
                  whileHover={{ borderColor: group.color, boxShadow: `0 0 16px ${group.color}20` }}
                  style={{
                    width: '100%', textAlign: 'left',
                    background: isOpen ? `${group.color}08` : 'var(--card)',
                    border: `1px solid ${isOpen ? group.color : 'var(--border)'}`,
                    borderRadius: isOpen ? '10px 10px 0 0' : '10px',
                    padding: '1rem 1.5rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: group.color,
                      boxShadow: `0 0 8px ${group.color}`,
                      flexShrink: 0,
                      animation: isOpen ? 'node-pulse 1.5s infinite' : 'none',
                    }} />
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '0.78rem',
                      color: isOpen ? group.color : 'var(--text)',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      fontWeight: 600,
                    }}>
                      {group.category}
                    </span>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '0.68rem',
                      color: 'var(--muted)',
                    }}>
                      {group.courses.length} courses
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: group.color, fontSize: '0.8rem', fontFamily: 'var(--mono)' }}
                  >
                    ▼
                  </motion.span>
                </motion.button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        background: `${group.color}05`,
                        border: `1px solid ${group.color}`,
                        borderTop: 'none',
                        borderRadius: '0 0 10px 10px',
                        padding: '1.25rem 1.5rem',
                        display: 'flex', flexWrap: 'wrap', gap: '8px',
                      }}>
                        {group.courses.map(course => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              fontFamily: 'var(--mono)', fontSize: '0.75rem',
                              padding: '4px 12px', borderRadius: '4px',
                              background: `${group.color}10`,
                              border: `1px solid ${group.color}30`,
                              color: 'var(--text)',
                            }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}