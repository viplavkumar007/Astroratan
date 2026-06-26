import React from 'react'
import { motion } from 'framer-motion'
import { brand } from '../../data/siteContent'
import { ScrollReveal } from '../ui/ScrollReveal'

export default function CTAStrip() {
  const waHref = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent('Namaste! I am ready to book my consultation with ASTRORATAN Occult Gurukul. Please guide me.')}`

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a0533 0%, #2D0A4E 30%, #4B1F73 60%, #2D0A4E 80%, #1a0533 100%)',
          backgroundSize: '300% 300%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Pulsing glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 60%)' }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Stars */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 2.5 + 0.5, height: Math.random() * 2.5 + 0.5,
            background: '#D4AF37', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: Math.random() * 4 + 2, repeat: Infinity, delay: Math.random() * 4 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-5xl">🔮</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-6 mb-4 leading-tight"
            style={{ color: '#f5e9ad' }}>
            Need Personalized<br />Spiritual Guidance?
          </h2>
          <div className="h-0.5 w-20 mx-auto my-5"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
          <p className="text-base md:text-lg mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)' }}>
            Book your consultation today and take the first step toward clarity, purpose, and divine guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !py-4 !px-8 text-base"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.109 1.523 5.835L0 24l6.336-1.492A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.76.886.9-3.665-.234-.376A9.818 9.818 0 1112 21.818z"/>
              </svg>
              WhatsApp Now
            </motion.a>
            <motion.a
              href={`tel:${brand.phone}`}
              className="btn-gold !py-4 !px-8 text-base"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              📞 Call Now
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
