import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand, contact } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'

const initForm = { name: '', phone: '', email: '', service: '', message: '' }

function buildContactWaMsg(f) {
  return `Namaste! I'm reaching out via the ASTRORATAN website contact form.

*Name:* ${f.name}
*Phone:* ${f.phone}
*Email:* ${f.email}
*Service Interested:* ${f.service || 'Not specified'}
*Message:* ${f.message}

Please guide me on how to proceed. Thank you! 🙏`
}

export default function Contact() {
  const [form, setForm] = useState(initForm)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.match(/^[0-9]{10}$/)) e.phone = 'Enter a valid 10-digit number'
    if (!form.message.trim()) e.message = 'Please enter your message'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
      const waUrl = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(buildContactWaMsg(form))}`
      window.open(waUrl, '_blank')
    }, 1000)
  }

  const waHref = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(contact.generalWhatsapp)}`

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff 0%, #faf5ff 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="📞 Get In Touch"
          title="Contact ASTRORATAN"
          subtitle="We're here to guide you. Reach out through any channel and our team will respond promptly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Info cards */}
              {[
                {
                  icon: '📞',
                  title: 'Call Us',
                  value: brand.phone,
                  sub: contact.hours,
                  href: `tel:${brand.phone}`,
                  btnText: 'Call Now',
                  btnClass: 'btn-purple',
                },
                {
                  icon: '💬',
                  title: 'WhatsApp',
                  value: brand.whatsapp,
                  sub: contact.response,
                  href: waHref,
                  btnText: 'Chat on WhatsApp',
                  btnClass: 'btn-whatsapp',
                  external: true,
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  value: brand.email,
                  sub: 'We reply within 24 hours',
                  href: `mailto:${brand.email}`,
                  btnText: 'Send Email',
                  btnClass: 'btn-gold',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="card-luxury p-6 flex items-start gap-5 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #2D0A4E, #4B1F73)',
                      border: '1px solid rgba(212,175,55,0.3)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-sm mb-1" style={{ color: '#4B1F73' }}>{item.title}</p>
                    <p className="font-medium text-base mb-1 truncate" style={{ color: '#1a0533' }}>{item.value}</p>
                    <p className="text-xs mb-3" style={{ color: '#9ca3af' }}>{item.sub}</p>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`${item.btnClass} !py-2 !px-5 !text-xs inline-flex`}
                    >
                      {item.btnText}
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* Map placeholder */}
              <div
                className="rounded-2xl overflow-hidden h-48 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1a0533, #2D0A4E)',
                  border: '1px solid rgba(212,175,55,0.2)',
                }}
              >
                <div className="text-center">
                  <span className="text-4xl">🗺️</span>
                  <p className="font-display text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    India-wide Consultations
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(212,175,55,0.6)' }}>
                    Online · Phone · WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Contact form */}
          <ScrollReveal direction="left">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.97)',
                border: '1px solid rgba(212,175,55,0.25)',
                boxShadow: '0 12px 48px rgba(75,31,115,0.1)',
              }}
            >
              <div
                className="px-8 py-6"
                style={{ background: 'linear-gradient(135deg, #2D0A4E, #4B1F73)' }}
              >
                <h3 className="font-display font-bold text-xl" style={{ color: '#f5e9ad' }}>Send Us a Message</h3>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>We'll respond on WhatsApp promptly</p>
              </div>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="ok"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto"
                        style={{ background: 'linear-gradient(135deg, #D4AF37, #f0d060)', boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}>
                        ✅
                      </div>
                      <h4 className="font-display text-xl font-bold" style={{ color: '#2D0A4E' }}>Message Sent!</h4>
                      <p className="text-sm" style={{ color: '#6b7280' }}>Your message has been sent to WhatsApp. We'll get back to you soon!</p>
                      <button onClick={() => { setDone(false); setForm(initForm) }} className="btn-purple !py-2.5 !px-6 text-xs">
                        Send Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      {[
                        { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Full name', required: true },
                        { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '10-digit mobile', required: true },
                        { label: 'Email (optional)', name: 'email', type: 'email', placeholder: 'your@email.com' },
                      ].map(f => (
                        <div key={f.name}>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#4B1F73' }}>
                            {f.label} {f.required && <span style={{ color: '#D4AF37' }}>*</span>}
                          </label>
                          <input
                            type={f.type}
                            name={f.name}
                            value={form[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            className="input-luxury"
                            style={errors[f.name] ? { borderColor: '#ef4444' } : {}}
                          />
                          {errors[f.name] && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors[f.name]}</p>}
                        </div>
                      ))}

                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#4B1F73' }}>
                          Interested Service
                        </label>
                        <select name="service" value={form.service} onChange={handleChange} className="select-luxury">
                          <option value="">Select a service (optional)</option>
                          <option value="Astrology Consultation">Astrology Consultation</option>
                          <option value="Numerology Consultation">Numerology Consultation</option>
                          <option value="Tarot Card Reading">Tarot Card Reading</option>
                          <option value="Vastu Consultation">Vastu Consultation</option>
                          <option value="Numerology Fortune Report">Numerology Fortune Report</option>
                          <option value="Astrology Kundali Report">Astrology Kundali Report</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#4B1F73' }}>
                          Message <span style={{ color: '#D4AF37' }}>*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="How can we help you?"
                          className="input-luxury resize-none"
                          style={errors.message ? { borderColor: '#ef4444' } : {}}
                        />
                        {errors.message && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-gold w-full justify-center py-4"
                        style={{ opacity: loading ? 0.8 : 1 }}
                      >
                        {loading ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : '📨 Send Message via WhatsApp'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
