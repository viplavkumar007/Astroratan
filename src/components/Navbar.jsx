import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../data/siteContent'
import { useScrollSpy } from '../hooks/useScrollSpy'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'reports', label: 'Reports' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

const sectionIds = navLinks.map(l => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds, 120)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const waHref = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent('Namaste! I would like to book a consultation at ASTRORATAN Occult Gurukul.')}`

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'shadow-[0_4px_30px_rgba(75,31,115,0.18)] border-b border-gold-600/20'
            : ''
        }`}
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.97)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              <img
                src={brand.logo}
                alt="ASTRORATAN Logo"
                className="w-12 h-12 object-contain rounded-full"
                style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))' }}
              />
              <div className="hidden sm:block">
                <p
                  className="font-display font-bold text-lg leading-tight tracking-widest"
                  style={{ color: '#4B1F73' }}
                >
                  ASTRORATAN
                </p>
                <p
                  className="font-sans text-xs tracking-widest uppercase"
                  style={{ color: '#D4AF37' }}
                >
                  Occult Gurukul
                </p>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg group ${
                    activeId === link.id
                      ? 'text-purple-700'
                      : 'text-gray-600 hover:text-purple-700'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full transition-all duration-300 ${
                      activeId === link.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                    }`}
                    style={{ background: 'linear-gradient(90deg, #4B1F73, #D4AF37)' }}
                  />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 hover:shadow-md"
                style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#4B1F73' }}
              >
                📞 Call Now
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !py-2.5 !px-5 !text-xs"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Mobile menu btn */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ color: '#4B1F73' }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 shadow-2xl border-b"
            style={{
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(24px)',
              borderColor: 'rgba(212,175,55,0.3)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeId === link.id
                      ? 'text-white'
                      : 'text-gray-700 hover:text-purple-700'
                  }`}
                  style={activeId === link.id
                    ? { background: 'linear-gradient(135deg, #4B1F73, #6b2fa3)', color: '#D4AF37' }
                    : {}}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href={`tel:${brand.phone}`} className="btn-purple !py-3 justify-center">
                  📞 Call: {brand.phone}
                </a>
                <a href={`https://wa.me/91${brand.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !py-3 justify-center">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
