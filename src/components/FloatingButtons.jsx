import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../data/siteContent'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const waHref = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent('Namaste! I would like to consult with ASTRORATAN Occult Gurukul. Please guide me.')}`

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollTop}
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #4B1F73, #6b2fa3)',
              boxShadow: '0 4px 20px rgba(75,31,115,0.5)',
              border: '1px solid rgba(212,175,55,0.3)',
              color: '#D4AF37',
              fontSize: '18px',
            }}
            whileHover={{ scale: 1.1, boxShadow: '0 6px 28px rgba(75,31,115,0.7)' }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call button */}
      <motion.a
        href={`tel:${brand.phone}`}
        className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
        style={{
          background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
          boxShadow: '0 4px 20px rgba(212,175,55,0.5)',
          border: '2px solid rgba(255,255,255,0.5)',
        }}
        whileHover={{ scale: 1.1, boxShadow: '0 6px 28px rgba(212,175,55,0.7)' }}
        whileTap={{ scale: 0.9 }}
        aria-label="Call us"
        title={`Call: ${brand.phone}`}
      >
        📞
      </motion.a>

      {/* WhatsApp button — pulsing */}
      <motion.a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #128C7E, #25D366)',
          boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
          border: '2px solid rgba(255,255,255,0.4)',
        }}
        animate={{
          boxShadow: [
            '0 4px 24px rgba(37,211,102,0.5)',
            '0 4px 40px rgba(37,211,102,0.8)',
            '0 4px 24px rgba(37,211,102,0.5)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
        title={`WhatsApp: ${brand.whatsapp}`}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.109 1.523 5.835L0 24l6.336-1.492A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.76.886.9-3.665-.234-.376A9.818 9.818 0 1112 21.818z"/>
        </svg>
      </motion.a>
    </div>
  )
}
