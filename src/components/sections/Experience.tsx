import { motion } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import { experience } from '../../data/experience'
import { slideInLeft, slideInRight } from '../../utils/animations'

const typeColors: Record<string, string> = {
  Industry: '#00b4d8',
  Research: '#00c896',
  Leadership: '#f59e0b',
  Volunteer: '#0096c7',
  Internship: '#008b8b',
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="03 · EXPERIENCE"
          title="Experience"
          subtitle="Industry, research, internships, and leadership roles that have shaped my technical and professional foundation."
        />

        <div style={{ position: 'relative' }}>
          {/* Center spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '50%', top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, transparent, rgba(0,180,216,0.4) 10%, rgba(0,180,216,0.4) 90%, transparent)',
              transformOrigin: 'top',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0
              const color = typeColors[item.type] ?? '#00b4d8'

              return (
                <motion.div
                  key={`${item.org}-${i}`}
                  variants={isLeft ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 40px 1fr',
                    alignItems: 'center',
                  }}
                >
                  <div style={{
                    paddingRight: '2rem',
                    textAlign: isLeft ? 'right' : 'left',
                    order: isLeft ? 0 : 2,
                  }}>
                    {isLeft ? (
                      <TimelineCard item={item} color={color} />
                    ) : (
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
                        <div style={{ color, marginBottom: '0.25rem' }}>{item.type.toUpperCase()}</div>
                        {item.period}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', order: 1 }}>
                    <motion.div
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      style={{
                        width: '12px', height: '12px', borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 12px ${color}`,
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  <div style={{
                    paddingLeft: '2rem',
                    order: isLeft ? 2 : 0,
                  }}>
                    {!isLeft ? (
                      <TimelineCard item={item} color={color} />
                    ) : (
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
                        <div style={{ color, marginBottom: '0.25rem' }}>{item.type.toUpperCase()}</div>
                        {item.period}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .timeline-grid {
            grid-template-columns: 20px 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function TimelineCard({ item, color }: { item: typeof experience[0]; color: string }) {
  return (
    <motion.div
      whileHover={{ borderColor: color, boxShadow: `0 0 20px ${color}20` }}
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '1.25rem',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.25s',
        textAlign: 'left',
      }}
    >
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.7rem',
        color, letterSpacing: '0.06em', marginBottom: '0.3rem',
      }}>
        {item.role}
      </div>
      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>
        {item.org}
      </h3>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {item.bullets.map((b, i) => (
          <li key={i} style={{
            fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6,
            paddingLeft: '1rem', position: 'relative',
          }}>
            <span style={{ position: 'absolute', left: 0, color }}>–</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
