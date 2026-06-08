import { motion } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import BlueprintCard from '../../ui/BlueprintCard'
import { containerVariants, fadeUp } from '../../utils/animations'

const leadership = [
  {
    org: 'Step Up Tutoring & UpChieve',
    role: 'Volunteer Tutor',
    period: 'Sep 2023 – Sep 2024',
    mission: 'EDUCATIONAL EQUITY',
    color: '#00c896',
    desc: 'Provided personalized Math and Science tutoring to underserved students. Part of the KIPP tutoring group offering after-school academic support to students unable to afford tutoring.',
  },
  {
    org: 'Mentors at De Anza',
    role: 'Student Mentor',
    period: 'Sep 2023 – Jun 2024',
    mission: 'STUDENT MENTORSHIP',
    color: '#00b4d8',
    desc: 'Guided first-year students through campus resources, academic planning, and transfer preparation. Created safe spaces for students to share struggles and grow.',
  },
  {
    org: 'De Anza Student Government',
    role: 'DASG Intern',
    period: 'Jan 2023 – Jun 2024',
    mission: 'CAMPUS LEADERSHIP',
    color: '#0096c7',
    desc: 'Dual role as Environmental Science Intern (water conservation research) and Programs Committee Intern (organized HOCO 2024, managed vendor collaborations).',
  },
  {
    org: 'Boundary.0 @ SJSU',
    role: 'Events Coordinator',
    period: 'Aug 2024 – Present',
    mission: 'TECH COMMUNITY',
    color: '#008b8b',
    desc: 'Plan and organize all org events, networking sessions, and startup collaborations. Bridge SJSU students with the broader tech and startup ecosystem.',
  },
  {
    org: 'Rewriting the Code',
    role: 'Member',
    period: 'Active',
    mission: 'WOMEN IN TECH',
    color: '#00b4d8',
    desc: 'Community of women in tech focused on professional development, networking, and breaking barriers in the technology industry.',
  },
  {
    org: 'Women Who Code & SWE',
    role: 'Member',
    period: 'Active',
    mission: 'TECH COMMUNITY',
    color: '#00c896',
    desc: 'Active member supporting the advancement of women in engineering through community, events, and mentorship opportunities.',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="05 · COMMUNITY IMPACT"
          title="Leadership & Community"
          subtitle="Engineering is not just about building systems — it's about building people too."
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
          {leadership.map((item) => (
            <BlueprintCard key={item.org} glowColor={item.color}>
              <motion.div variants={fadeUp}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '0.65rem',
                  color: item.color, letterSpacing: '0.12em',
                  marginBottom: '0.5rem',
                  padding: '2px 8px',
                  background: `${item.color}12`,
                  border: `1px solid ${item.color}30`,
                  borderRadius: '4px',
                  display: 'inline-block',
                }}>
                  {item.mission}
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.2rem', color: 'var(--text)' }}>
                  {item.org}
                </h3>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                  {item.role} · {item.period}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            </BlueprintCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}