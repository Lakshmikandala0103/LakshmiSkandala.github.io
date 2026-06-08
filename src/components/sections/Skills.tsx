import { motion } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import { skills } from '../../data/skills'
import { fadeUp, containerVariants } from '../../utils/animations'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="08 · CAPABILITY MATRIX"
          title="Skills"
          subtitle="A full-spectrum stack spanning hardware, software, and the intelligence layer in between."
        />

        <motion.div
          variants={containerVariants(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              whileHover={{
                borderColor: group.color,
                boxShadow: `0 0 20px ${group.color}18`,
              }}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.25s',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${group.color}, transparent)`,
              }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.1rem' }}>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '1rem',
                  color: group.color,
                }}>
                  {group.icon}
                </span>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '0.72rem',
                  color: group.color, letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontWeight: 600,
                }}>
                  {group.category}
                </span>
              </div>

              {/* Skill chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {group.items.map(item => (
                  <motion.span
                    key={item}
                    whileHover={{
                      background: `${group.color}20`,
                      borderColor: group.color,
                      color: group.color,
                      boxShadow: `0 0 8px ${group.color}40`,
                    }}
                    style={{
                      fontFamily: 'var(--mono)', fontSize: '0.75rem',
                      padding: '4px 11px', borderRadius: '4px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--text)',
                      cursor: 'default',
                      transition: 'all 0.2s',
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}