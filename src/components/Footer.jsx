import React from 'react'
import { motion } from 'framer-motion'
import { brand } from '../data/siteContent'

const quickLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Reports', id: 'reports' },
  { label: 'Process', id: 'process' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
]

const services = [
  'Astrology Consultation',
  'Numerology Consultation',
  'Tarot Card Reading',
  'Vastu Consultation',
  'Kundali Report',
  'Numerology Report',
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const waHref = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(brand.contact?.generalWhatsapp || 'Namaste! I would like to know more about ASTRORATAN Occult Gurukul.')}`

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a0533 0%, #0d0020 100%)' }}
    >
      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 2 + 0.5, height: Math.random() * 2 + 0.5,
            background: '#D4AF37', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      {/* Top gold line */}
      <div className="h-0.5 w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #4B1F73, #D4AF37, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={brand.logo} alt="ASTRORATAN" className="w-12 h-12 object-contain rounded-full"
                style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))' }} />
              <div>
                <p className="font-display font-bold text-base tracking-widest text-gold-gradient">ASTRORATAN</p>
                <p className="text-xs tracking-widest" style={{ color: 'rgba(212,175,55,0.6)' }}>Occult Gurukul</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Authentic Astrology, Numerology, Tarot & Vastu consultations. Personalized reports crafted with ancient wisdom and modern clarity.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3">
              {['📘', '📸', '▶️', '🐦'].map((icon, i) => (
                <motion.button key={i}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                  whileHover={{ scale: 1.15, background: 'rgba(212,175,55,0.2)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-5 tracking-widest uppercase text-gold-gradient">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2"
                      style={{ background: 'rgba(212,175,55,0.5)' }}
                    />
                    <span className="group-hover:text-gold-400 transition-colors" style={{}}>
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-5 tracking-widest uppercase text-gold-gradient">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-sm flex items-center gap-2 group"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    <span className="text-xs" style={{ color: 'rgba(212,175,55,0.5)' }}>◆</span>
                    <span className="group-hover:text-white transition-colors">{s}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-5 tracking-widest uppercase text-gold-gradient">
              Contact
            </h4>
            <div className="space-y-4">
              <a href={`tel:${brand.phone}`}
                className="flex items-center gap-3 text-sm group"
                style={{ color: 'rgba(255,255,255,0.55)' }}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>📞</span>
                <span className="group-hover:text-white transition-colors">{brand.phone}</span>
              </a>
              <a href={`https://wa.me/91${brand.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm group"
                style={{ color: 'rgba(255,255,255,0.55)' }}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)' }}>💬</span>
                <span className="group-hover:text-white transition-colors">WhatsApp Us</span>
              </a>
              <a href={`mailto:${brand.email}`}
                className="flex items-center gap-3 text-sm group"
                style={{ color: 'rgba(255,255,255,0.55)' }}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>✉️</span>
                <span className="group-hover:text-white transition-colors break-all">{brand.email}</span>
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.15)' }}>⏰</span>
                <span>Mon–Sat: 9 AM – 8 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px w-full mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: 'rgba(255,255,255,0.25)' }}>
          <p>© 2024 ASTRORATAN Occult Gurukul. All Rights Reserved.</p>
          <p className="text-gold-gradient opacity-70 font-semibold tracking-widest">
            ✨ Ancient Wisdom · Modern Clarity ✨
          </p>
        </div>
      </div>
    </footer>
  )
}
