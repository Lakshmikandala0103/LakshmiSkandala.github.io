import { motion } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import GlowButton from '../../ui/GlowButton'
import { architectureLayers } from '../../data/projects'
import { fadeUp, containerVariants } from '../../utils/animations'

export default function FeaturedProject() {
  return (
    <section id="featured" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="02 · FLAGSHIP SYSTEM"
          title="Edge AI Smart Entry Assistant"
          subtitle="A context-aware cyber-physical system that detects user presence, predicts departure intent, and triggers personalized reminders using embedded AI — all on-device."
        />

        {/* Status badge */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '0.7rem',
            color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: '4px', padding: '3px 12px', letterSpacing: '0.08em',
          }}>⭐ FLAGSHIP PROJECT</span>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '0.7rem',
            color: 'var(--success)', border: '1px solid rgba(0,200,150,0.3)',
            borderRadius: '4px', padding: '3px 12px', letterSpacing: '0.08em',
            animation: 'trace-flow 2s infinite',
          }}>🔧 IN PROGRESS</span>
        </div>

        {/* Architecture diagram */}
        <motion.div
          variants={containerVariants(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '3rem' }}
        >
          {architectureLayers.map((layer, i) => (
            <motion.div key={layer.id} variants={fadeUp}>
              {/* Layer card */}
              <motion.div
                whileHover={{
                  borderColor: layer.color,
                  boxShadow: `0 0 24px ${layer.color}30`,
                  x: 6,
                }}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem 1.75rem',
                  display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
                  transition: 'all 0.25s',
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Left accent */}
                <div style={{
                  width: '3px', borderRadius: '3px',
                  background: layer.color,
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  boxShadow: `0 0 8px ${layer.color}`,
                }} />

                {/* Layer number */}
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '0.7rem',
                  color: layer.color, opacity: 0.6,
                  width: '20px', flexShrink: 0, paddingTop: '2px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Label + items */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '0.72rem',
                    color: layer.color, letterSpacing: '0.1em',
                    textTransform: 'uppercase', marginBottom: '0.6rem',
                  }}>
                    {layer.label}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {layer.items.map(item => (
                      <span key={item} style={{
                        fontFamily: 'var(--mono)', fontSize: '0.75rem',
                        padding: '3px 10px', borderRadius: '4px',
                        background: `${layer.color}12`,
                        border: `1px solid ${layer.color}30`,
                        color: 'var(--text)',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connector arrow between layers */}
              {i < architectureLayers.length - 1 && (
                <div style={{
                  display: 'flex', justifyContent: 'flex-start',
                  paddingLeft: '3.5rem', margin: '4px 0',
                }}>
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                    style={{
                      width: '1px', height: '24px',
                      background: `linear-gradient(180deg, ${layer.color}80, ${architectureLayers[i + 1].color}80)`,
                      position: 'relative',
                    }}
                  >
                    <div style={{
                      position: 'absolute', bottom: 0, left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0, height: 0,
                      borderLeft: '4px solid transparent',
                      borderRight: '4px solid transparent',
                      borderTop: `6px solid ${architectureLayers[i + 1].color}`,
                    }} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <GlowButton href="#projects" variant="primary">
            View All Projects
          </GlowButton>
          <GlowButton variant="ghost">
            Architecture Notes (Coming Soon)
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}