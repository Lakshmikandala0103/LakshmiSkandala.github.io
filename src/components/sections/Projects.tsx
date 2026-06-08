import { motion } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import GlowButton from '../../ui/GlowButton'
import { projects } from '../../data/projects'
import { fadeUp, containerVariants } from '../../utils/animations'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="03 · PROJECT MODULES"
          title="Things I've Built"
          subtitle="From edge hardware to conversational AI — projects that demonstrate full-system thinking."
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
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              whileHover={{
                borderColor: 'rgba(0,180,216,0.5)',
                boxShadow: '0 0 28px rgba(0,180,216,0.12)',
                y: -4,
              }}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex', flexDirection: 'column', gap: '0.9rem',
                position: 'relative', overflow: 'hidden',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.25s',
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '12px', height: '12px',
                borderTop: '2px solid rgba(0,180,216,0.5)',
                borderLeft: '2px solid rgba(0,180,216,0.5)',
              }} />
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '12px', height: '12px',
                borderBottom: '2px solid rgba(0,180,216,0.5)',
                borderRight: '2px solid rgba(0,180,216,0.5)',
              }} />

              {/* Badges */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '0.67rem',
                  color: 'var(--accent)', border: '1px solid rgba(0,180,216,0.25)',
                  borderRadius: '4px', padding: '2px 8px', letterSpacing: '0.06em',
                }}>
                  {p.category}
                </span>
                {p.status === 'in-progress' && (
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '0.67rem',
                    color: 'var(--success)', border: '1px solid rgba(0,200,150,0.25)',
                    borderRadius: '4px', padding: '2px 8px',
                  }}>🔧 IN PROGRESS</span>
                )}
                {p.flagship && (
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '0.67rem',
                    color: '#f59e0b', border: '1px solid rgba(245,158,11,0.25)',
                    borderRadius: '4px', padding: '2px 8px',
                  }}>⭐ FLAGSHIP</span>
                )}
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>{p.description}</p>

              {/* Challenge */}
              <div style={{
                borderLeft: '2px solid rgba(0,180,216,0.3)',
                paddingLeft: '0.75rem',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>CHALLENGE</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{p.challenge}</p>
              </div>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--mono)', fontSize: '0.68rem',
                    padding: '2px 8px', borderRadius: '4px',
                    background: 'rgba(0,180,216,0.08)',
                    border: '1px solid rgba(0,180,216,0.15)',
                    color: 'var(--accent)',
                  }}>{t}</span>
                ))}
              </div>

              {/* GitHub link */}
              {p.github && (
                <GlowButton href={p.github} target="_blank" rel="noreferrer" variant="ghost" style={{ alignSelf: 'flex-start', padding: '0.4rem 1rem', fontSize: '0.78rem' }}>
                  GitHub →
                </GlowButton>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}