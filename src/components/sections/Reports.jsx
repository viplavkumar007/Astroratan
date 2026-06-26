import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { reports, brand } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { ScrollReveal, StaggerContainer, staggerItem } from '../ui/ScrollReveal'

const initialForm = {
  fullName: '', phone: '', whatsapp: '', email: '',
  dob: '', tob: '', pob: '', gender: '',
  reportType: '', purpose: '', notes: '',
}

function buildWhatsAppMessage(form) {
  return `Namaste! I would like to request a *${form.reportType}* from ASTRORATAN Occult Gurukul.

*Full Name:* ${form.fullName}
*Phone:* ${form.phone}
*WhatsApp:* ${form.whatsapp}
*Email:* ${form.email}
*Date of Birth:* ${form.dob}
*Time of Birth:* ${form.tob}
*Place of Birth:* ${form.pob}
*Gender:* ${form.gender}
*Report Type:* ${form.reportType}
*Purpose:* ${form.purpose}
*Additional Notes:* ${form.notes || 'None'}

Please confirm receipt and guide me on the next steps. Thank you! 🙏`
}

export default function Reports() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.phone.match(/^[0-9]{10}$/)) e.phone = 'Enter a valid 10-digit phone number'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email'
    if (!form.dob) e.dob = 'Date of birth is required'
    if (!form.pob.trim()) e.pob = 'Place of birth is required'
    if (!form.gender) e.gender = 'Please select your gender'
    if (!form.reportType) e.reportType = 'Please select a report type'
    if (!form.purpose) e.purpose = 'Please select purpose'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      const msg = buildWhatsAppMessage(form)
      const waUrl = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(msg)}`
      window.open(waUrl, '_blank')
    }, 1200)
  }

  const resetForm = () => { setForm(initialForm); setSubmitted(false); setErrors({}) }

  const InputField = ({ label, name, type = 'text', required = false, placeholder = '' }) => (
    <div className="relative">
      <label className="block text-xs font-semibold mb-1.5 tracking-wide" style={{ color: '#4B1F73' }}>
        {label} {required && <span style={{ color: '#D4AF37' }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="input-luxury"
        style={errors[name] ? { borderColor: '#ef4444' } : {}}
      />
      {errors[name] && (
        <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors[name]}</p>
      )}
    </div>
  )

  return (
    <section
      id="reports"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff 0%, #fdf8e8 40%, #faf5ff 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(75,31,115,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="📜 Personalized Reports"
          title="Sacred Knowledge, Delivered Personally"
          subtitle="Every report is manually prepared by our expert after careful analysis of your details. Not automated — genuinely personal."
        />

        {/* Report Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reports.map((rep, i) => (
            <motion.div
              key={rep.id}
              variants={staggerItem}
              className="card-luxury p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

              <div className="flex items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #2D0A4E, #4B1F73)',
                    boxShadow: '0 4px 16px rgba(75,31,115,0.3)',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  {rep.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl mb-1" style={{ color: '#2D0A4E' }}>{rep.title}</h3>
                  <p className="text-sm font-semibold mb-3 text-gold-gradient">{rep.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>{rep.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {rep.includes.map((item, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs" style={{ color: '#4b5563' }}>
                        <span style={{ color: '#D4AF37' }}>✦</span> {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs mb-5">
                    <span className="px-3 py-1 rounded-full"
                      style={{ background: 'rgba(75,31,115,0.08)', color: '#4B1F73', border: '1px solid rgba(75,31,115,0.2)' }}>
                      ⏱ {rep.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full"
                      style={{ background: 'rgba(212,175,55,0.1)', color: '#7a5a00', border: '1px solid rgba(212,175,55,0.3)' }}>
                      📨 {rep.delivery}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(rep.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp !py-2.5 !px-5 !text-xs inline-flex"
                  >
                    💬 Request via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Report Request Form */}
        <ScrollReveal>
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.97), rgba(249,240,255,0.97))',
              border: '1px solid rgba(212,175,55,0.3)',
              boxShadow: '0 20px 80px rgba(75,31,115,0.15), 0 0 0 1px rgba(212,175,55,0.1)',
            }}
          >
            {/* Form header */}
            <div
              className="px-8 py-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1a0533, #2D0A4E, #4B1F73)' }}
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div key={i}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 3 + 1, height: Math.random() * 3 + 1,
                    background: '#D4AF37', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.2,
                  }}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 3 }}
                />
              ))}
              <div className="relative z-10 text-center">
                <span className="text-3xl">📋</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-2" style={{ color: '#f5e9ad' }}>
                  Request Your Personalized Report
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Fill in your details below. Our expert will manually prepare your report and contact you within the promised timeframe.
                </p>
              </div>
            </div>

            {/* Form body */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-16 space-y-6"
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto"
                      style={{ background: 'linear-gradient(135deg, #D4AF37, #f0d060)', boxShadow: '0 0 40px rgba(212,175,55,0.4)' }}
                    >
                      🙏
                    </div>
                    <h4 className="font-display text-2xl font-bold" style={{ color: '#2D0A4E' }}>
                      Request Submitted Successfully!
                    </h4>
                    <p className="max-w-md mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
                      We have received your request. Our team will review your details and prepare your personalized report manually. You will be redirected to WhatsApp to confirm your request.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <button onClick={resetForm} className="btn-purple !py-3 !px-8">
                        Submit Another Request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {/* Personal details */}
                    <div>
                      <h4 className="font-display font-semibold text-base mb-4 pb-2"
                        style={{ color: '#2D0A4E', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                        ✨ Personal Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <InputField label="Full Name" name="fullName" required placeholder="Your full name" />
                        <InputField label="Phone Number" name="phone" type="tel" required placeholder="10-digit mobile number" />
                        <InputField label="WhatsApp Number" name="whatsapp" type="tel" placeholder="If different from phone" />
                        <InputField label="Email Address" name="email" type="email" required placeholder="your@email.com" />
                      </div>
                    </div>

                    {/* Birth details */}
                    <div>
                      <h4 className="font-display font-semibold text-base mb-4 pb-2"
                        style={{ color: '#2D0A4E', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                        🌟 Birth Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <InputField label="Date of Birth" name="dob" type="date" required />
                        <InputField label="Time of Birth" name="tob" type="time" placeholder="Approximate time is fine" />
                        <InputField label="Place of Birth" name="pob" required placeholder="City, State, Country" />
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 tracking-wide" style={{ color: '#4B1F73' }}>
                            Gender <span style={{ color: '#D4AF37' }}>*</span>
                          </label>
                          <select name="gender" value={form.gender} onChange={handleChange} className="select-luxury"
                            style={errors.gender ? { borderColor: '#ef4444' } : {}}>
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.gender && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.gender}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Report details */}
                    <div>
                      <h4 className="font-display font-semibold text-base mb-4 pb-2"
                        style={{ color: '#2D0A4E', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                        📜 Report Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 tracking-wide" style={{ color: '#4B1F73' }}>
                            Select Report <span style={{ color: '#D4AF37' }}>*</span>
                          </label>
                          <select name="reportType" value={form.reportType} onChange={handleChange} className="select-luxury"
                            style={errors.reportType ? { borderColor: '#ef4444' } : {}}>
                            <option value="">Choose report type</option>
                            <option value="Numerology Fortune Report">Numerology Fortune Report</option>
                            <option value="Astrology Kundali Report">Astrology Kundali Report</option>
                          </select>
                          {errors.reportType && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.reportType}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 tracking-wide" style={{ color: '#4B1F73' }}>
                            Purpose of Report <span style={{ color: '#D4AF37' }}>*</span>
                          </label>
                          <select name="purpose" value={form.purpose} onChange={handleChange} className="select-luxury"
                            style={errors.purpose ? { borderColor: '#ef4444' } : {}}>
                            <option value="">Select purpose</option>
                            <option value="Career">Career</option>
                            <option value="Marriage">Marriage</option>
                            <option value="Business">Business</option>
                            <option value="Finance">Finance</option>
                            <option value="Health">Health</option>
                            <option value="General Guidance">General Guidance</option>
                          </select>
                          {errors.purpose && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.purpose}</p>}
                        </div>
                      </div>
                      <div className="mt-5">
                        <label className="block text-xs font-semibold mb-1.5 tracking-wide" style={{ color: '#4B1F73' }}>
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          name="notes"
                          value={form.notes}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Share any specific questions or areas you would like the report to focus on..."
                          className="input-luxury resize-none"
                        />
                      </div>
                    </div>

                    {/* Notice */}
                    <div className="rounded-2xl p-4 text-sm" style={{
                      background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)', color: '#7a5a00',
                    }}>
                      <strong>✨ Please Note:</strong> Reports are not generated automatically. Our expert will personally review your details and manually prepare your report. You will be contacted via WhatsApp and email once your report is ready.
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full justify-center text-base py-4"
                      style={{ opacity: loading ? 0.8 : 1 }}
                    >
                      {loading ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting Your Request...
                        </>
                      ) : (
                        <> 🙏 Request My Personalized Report </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
