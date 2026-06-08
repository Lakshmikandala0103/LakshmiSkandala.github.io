import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../../ui/SectionHeader'
import { meta } from '../../data/meta'
import { fadeUp } from '../../utils/animations'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Opens default mail client with pre-filled content as fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:${meta.emailSchool}?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 800)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(0,180,216,0.04)',
    border: '1px solid rgba(0,180,216,0.18)',
    borderRadius: '6px',
    padding: '0.75rem 1rem',
    color: 'var(--text)',
    fontFamily: 'var(--mono)',
    fontSize: '0.85rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--mono)',
    fontSize: '0.7rem',
    color: 'var(--accent)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginBottom: '0.4rem',
    display: 'block',
  }

  const contactLinks = [
    { label: 'SJSU EMAIL', href: `mailto:${meta.emailSchool}`, sub: meta.emailSchool, icon: '✉' },
    { label: 'PERSONAL EMAIL', href: `mailto:${meta.emailPersonal}`, sub: meta.emailPersonal, icon: '📬' },
    { label: 'LINKEDIN', href: meta.linkedin, sub: 'lakshmi-s-kandala', icon: '💼' },
    { label: 'GITHUB', href: meta.github, sub: 'Lakshmikandala0103', icon: '🐙' },
  ]

  return (
    <section id="contact" style={{ padding: '100px 5vw', position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
        <SectionHeader
          label="08 · CONTACT"
          title="Get in Touch"
          subtitle="Open to internship and new graduate opportunities in software engineering, embedded systems, and machine learning."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* Left — contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Console header */}
            <div style={{
              background: 'rgba(0,180,216,0.06)',
              border: '1px solid rgba(0,180,216,0.18)',
              borderBottom: 'none',
              borderRadius: '8px 8px 0 0',
              padding: '0.6rem 1rem',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0,180,216,0.4)' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0,180,216,0.25)' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0,180,216,0.15)' }} />
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.68rem',
                color: 'var(--muted)', marginLeft: '0.5rem',
                letterSpacing: '0.06em',
              }}>
                {'>'} initiate_contact
              </span>
            </div>

            {!sent ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--card)',
                  border: '1px solid rgba(0,180,216,0.18)',
                  borderRadius: '0 0 8px 8px',
                  padding: '1.5rem',
                  display: 'flex', flexDirection: 'column', gap: '1.1rem',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div>
                  <label htmlFor="name" style={labelStyle}>NAME</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,180,216,0.2)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.18)'; e.currentTarget.style.boxShadow = 'none' }}
                    placeholder="Your full name"
                    aria-label="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>EMAIL ADDRESS</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,180,216,0.2)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.18)'; e.currentTarget.style.boxShadow = 'none' }}
                    placeholder="your@email.com"
                    aria-label="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>MESSAGE</label>
                  <textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' as const }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,180,216,0.2)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.18)'; e.currentTarget.style.boxShadow = 'none' }}
                    placeholder="Your message..."
                    aria-label="Your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    background: 'var(--accent)',
                    color: '#020d0f',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: sending ? 'wait' : 'pointer',
                    letterSpacing: '0.06em',
                    transition: 'all 0.2s',
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  {sending ? 'SENDING...' : 'SEND MESSAGE ↗'}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'var(--card)',
                  border: '1px solid rgba(0,200,150,0.3)',
                  borderRadius: '0 0 8px 8px',
                  padding: '2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '1rem',
                  color: 'var(--success)', marginBottom: '0.5rem',
                  letterSpacing: '0.08em',
                }}>
                  ✓ MESSAGE SENT
                </div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--muted)' }}>
                  Your message has been received. I will respond as soon as possible.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right — direct channels + resume */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '0.72rem',
              color: 'var(--muted)', letterSpacing: '0.06em',
              marginBottom: '0.25rem',
            }}>
              {'>'} DIRECT CHANNELS
            </p>

            {contactLinks.map(l => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ borderColor: 'var(--accent)', x: 4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '0.9rem 1.1rem',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{l.icon}</span>
                <div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '0.68rem',
                    color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.15rem',
                  }}>{l.label}</div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '0.75rem',
                    color: 'var(--muted)',
                  }}>{l.sub}</div>
                </div>
              </motion.a>
            ))}

            {/* Resume download */}
            <div style={{ marginTop: '0.5rem' }}>
              <p style={{
                fontFamily: 'var(--mono)', fontSize: '0.72rem',
                color: 'var(--muted)', letterSpacing: '0.06em',
                marginBottom: '0.5rem',
              }}>
                {'>'} RESUME
              </p>
              <a
                href="/resume.pdf"
                download="Lakshmi_S_Kandala_Resume.pdf"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '0.9rem 1.1rem',
                  background: 'rgba(0,180,216,0.06)',
                  border: '1px solid rgba(0,180,216,0.3)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(0,180,216,0.12)'
                  el.style.borderColor = 'var(--accent)'
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(0,180,216,0.06)'
                  el.style.borderColor = 'rgba(0,180,216,0.3)'
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>📄</span>
                <div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '0.68rem',
                    color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.15rem',
                  }}>DOWNLOAD RESUME</div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '0.75rem',
                    color: 'var(--muted)',
                  }}>Lakshmi_S_Kandala_Resume.pdf</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div[style*="grid"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
