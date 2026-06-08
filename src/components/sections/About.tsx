import { motion } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import BlueprintCard from '../../ui/BlueprintCard'
import { meta } from '../../data/meta'
import { fadeUp, containerVariants } from '../../utils/animations'

const highlights = [
  { icon: '🧠', label: 'Edge AI & Embedded Systems', desc: 'On-device ML inference with ESP32 and Raspberry Pi, real-time sensor fusion, and embedded firmware development under tight latency constraints.' },
  { icon: '🗄️', label: 'Data Engineering', desc: 'ETL pipeline development, MongoDB to PostgreSQL migration, query optimization, and relational schema normalization at production scale.' },
  { icon: '🔬', label: 'Machine Learning Research', desc: 'Multimodal CNN models combining image and tabular data for predictive accuracy improvements, conducted at BLAST AI.' },
  { icon: '🌐', label: 'Full-Stack Development', desc: 'React, Next.js, Node.js, and Express — building production-quality web applications with clean architecture and thoughtful user experience.' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="01 · PROFILE"
          title="About"
          subtitle="Computer Engineer bridging software, hardware, and AI."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left — bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Education block */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '0.72rem',
              color: 'var(--accent)', letterSpacing: '0.1em',
              marginBottom: '1.5rem',
              padding: '1rem',
              border: '1px solid rgba(0,180,216,0.15)',
              borderRadius: '8px',
              background: 'rgba(0,180,216,0.03)',
            }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.2rem' }}>San Jose State University</div>
                <div style={{ color: 'var(--muted)' }}>B.S. Computer Engineering · Aug 2024 – May 2027</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.68rem', marginTop: '0.25rem' }}>
                  Boundary.0 · Rewriting the Code · Women Who Code · SWE
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(0,180,216,0.1)', paddingTop: '0.75rem' }}>
                <div style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.2rem' }}>De Anza College</div>
                <div style={{ color: 'var(--muted)' }}>A.S. Computer Engineering · Sep 2022 – Jun 2024</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.68rem', marginTop: '0.25rem' }}>
                  Humanities Mellon Scholar · Mentors at De Anza · DASG
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.95rem' }}>
              {meta.about}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              {meta.orgs.map(org => (
                <span key={org} style={{
                  fontFamily: 'var(--mono)', fontSize: '0.7rem',
                  padding: '3px 10px', borderRadius: '4px',
                  background: 'rgba(0,180,216,0.08)',
                  border: '1px solid rgba(0,180,216,0.2)',
                  color: 'var(--accent)',
                  letterSpacing: '0.04em',
                }}>
                  {org}
                </span>
              ))}
            </div>

            {/* View Projects CTA */}
            <a
              href="#projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '0.65rem 1.5rem',
                borderRadius: '6px',
                background: 'rgba(0,180,216,0.08)',
                border: '1px solid rgba(0,180,216,0.3)',
                color: 'var(--accent)',
                fontFamily: 'var(--sans)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
                letterSpacing: '0.03em',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(0,180,216,0.15)'
                el.style.boxShadow = '0 0 14px rgba(0,180,216,0.25)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(0,180,216,0.08)'
                el.style.boxShadow = 'none'
              }}
            >
              View Projects →
            </a>
          </motion.div>

          {/* Right — highlight cards */}
          <motion.div
            variants={containerVariants(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {highlights.map((h) => (
              <BlueprintCard key={h.label} glowColor="#00b4d8">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '8px',
                    background: 'rgba(0,180,216,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0,
                  }}>{h.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: '0.72rem',
                      color: 'var(--accent)', letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const, marginBottom: '0.3rem',
                    }}>{h.label}</div>
                    <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6 }}>{h.desc}</p>
                  </div>
                </div>
              </BlueprintCard>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div[style*="grid"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
