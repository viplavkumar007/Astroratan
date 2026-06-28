import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { brand, hero } from '../../data/siteContent'

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 4,
}))

const orbs = [
  { size: 400, x: '75%', y: '-10%', color: 'rgba(75,31,115,0.35)' },
  { size: 300, x: '60%', y: '40%', color: 'rgba(212,175,55,0.12)' },
  { size: 250, x: '85%', y: '60%', color: 'rgba(75,31,115,0.2)' },
  { size: 200, x: '-5%', y: '20%', color: 'rgba(212,175,55,0.08)' },
]

const ZodiacWheel = () => (
  <motion.div
    className="relative flex items-center justify-center"
    animate={{ rotate: 360 }}
    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    style={{ width: 340, height: 340 }}
  >
    <svg viewBox="0 0 300 300" width="340" height="340">
      {/* Outer ring */}
      <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(156,107,0,0.65)" strokeWidth="1.8" strokeDasharray="4,6" />
      <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(75,31,115,0.35)" strokeWidth="1.2" />
      <circle cx="150" cy="150" r="80" fill="none" stroke="rgba(156,107,0,0.45)" strokeWidth="1.2" strokeDasharray="2,4" />
      {/* Spokes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = 150 + 80 * Math.cos(angle)
        const y1 = 150 + 80 * Math.sin(angle)
        const x2 = 150 + 140 * Math.cos(angle)
        const y2 = 150 + 140 * Math.sin(angle)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(75,31,115,0.28)" strokeWidth="1" />
      })}
      {/* Zodiac symbols on ring */}
      {['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'].map((sym, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180)
        const x = 150 + 128 * Math.cos(angle)
        const y = 150 + 128 * Math.sin(angle)
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
            fontSize="11" fill="rgba(75,31,115,0.85)" fontFamily="serif">
            {sym}
          </text>
        )
      })}
      {/* Center star */}
      <polygon points="150,120 157,142 180,142 162,155 169,177 150,165 131,177 138,155 120,142 143,142"
        fill="rgba(212,175,55,0.9)" stroke="rgba(156,107,0,0.95)" strokeWidth="0.7" />
      <circle cx="150" cy="150" r="18" fill="rgba(45,10,78,0.92)" stroke="rgba(156,107,0,0.8)" strokeWidth="1.8" />
      <circle cx="150" cy="150" r="8" fill="rgba(212,175,55,0.85)" />
    </svg>
  </motion.div>
)

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
}

export default function Hero() {
  const waHref = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent('Namaste! I would like to book a consultation at ASTRORATAN Occult Gurukul. Please guide me.')}`

  const scrollToReports = () => {
    const el = document.getElementById('reports')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 30%, #fdf8e8 60%, #faf5ff 100%)',
      }}
    >
      {/* Background orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            background: star.size > 2.5 ? '#D4AF37' : 'rgba(75,31,115,0.6)',
          }}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
        />
      ))}

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #4B1F73, #D4AF37, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <motion.div
            variants={stagger.container}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={stagger.item}>
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'linear-gradient(135deg, rgba(75,31,115,0.1), rgba(212,175,55,0.15))',
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: '#4B1F73',
                }}
              >
                ✨ Ancient Wisdom · Modern Clarity
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={stagger.item} className="space-y-3">
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-wide"
                style={{ color: '#2D0A4E' }}>
                {hero.heading}
              </h1>
              <p className="font-display text-xl md:text-2xl font-medium tracking-wide text-gold-gradient">
                {hero.subheading}
              </p>
            </motion.div>

            <motion.p variants={stagger.item}
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: '#555' }}>
              {hero.description}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm"
              >
                🔮 Book Consultation
              </a>
              <button onClick={scrollToReports} className="btn-purple text-sm">
                📜 Request Your Report
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger.item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {hero.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-4 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(212,175,55,0.25)',
                    boxShadow: '0 4px 16px rgba(75,31,115,0.08)',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(75,31,115,0.15)' }}
                >
                  <p className="font-display text-2xl font-bold text-gold-gradient">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium mt-1" style={{ color: '#6b7280' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Zodiac wheel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-8"
          >
            {/* Logo glowing card */}
            <motion.div
              className="relative"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                className="absolute inset-0 rounded-[2rem] blur-3xl opacity-60"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(75,31,115,0.3) 50%, transparent 70%)' }}
              />
              <div
                className="relative rounded-[2rem] p-3"
                style={{
                  background: 'linear-gradient(135deg, #2D0A4E, #4B1F73)',
                  boxShadow: '0 0 60px rgba(212,175,55,0.4), 0 0 120px rgba(75,31,115,0.3), inset 0 1px 0 rgba(212,175,55,0.3)',
                  border: '2px solid rgba(212,175,55,0.4)',
                }}
              >
                <img
                  src={brand.logo}
                  alt="ASTRORATAN"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Zodiac wheel below */}
            <div className="opacity-90">
              <ZodiacWheel />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(75,31,115,0.5)' }}>
          Scroll to Explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
          <motion.div className="w-1.5 h-3 rounded-full"
            style={{ background: '#D4AF37' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  )
}
