import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActiveIdx(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (idx) => {
    setDirection(idx > activeIdx ? 1 : -1)
    setActiveIdx(idx)
  }

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  }

  const StarRating = ({ n = 5 }) => (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} style={{ color: '#D4AF37' }}>★</span>
      ))}
    </div>
  )

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff 0%, #faf5ff 60%, #fff 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(75,31,115,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="🌟 Client Stories"
          title="Lives Transformed"
          subtitle="Real experiences from real people who found clarity, direction, and divine guidance through ASTRORATAN."
        />

        {/* Featured testimonial */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-12">
            <div
              className="relative rounded-3xl p-10 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1a0533, #2D0A4E)',
                border: '1px solid rgba(212,175,55,0.3)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(212,175,55,0.08)',
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 left-8 font-serif text-8xl leading-none pointer-events-none select-none"
                style={{ color: 'rgba(212,175,55,0.15)' }}
              >
                "
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIdx}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10"
                >
                  <StarRating n={testimonials[activeIdx].rating} />
                  <p className="text-lg md:text-xl leading-relaxed mt-6 mb-8 font-light italic"
                    style={{ color: 'rgba(255,255,255,0.85)' }}>
                    "{testimonials[activeIdx].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
                        boxShadow: '0 0 20px rgba(212,175,55,0.4)',
                      }}
                    >
                      {testimonials[activeIdx].avatar}
                    </div>
                    <div>
                      <p className="font-display font-semibold" style={{ color: '#f5e9ad' }}>
                        {testimonials[activeIdx].name}
                      </p>
                      <p className="text-sm" style={{ color: 'rgba(212,175,55,0.6)' }}>
                        {testimonials[activeIdx].location} · {testimonials[activeIdx].service}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: activeIdx === i ? 24 : 8,
                      height: 8,
                      background: activeIdx === i
                        ? 'linear-gradient(90deg, #D4AF37, #f0d060)'
                        : 'rgba(212,175,55,0.3)',
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid of all testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="card-luxury p-6 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => goTo(i)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #2D0A4E, #4B1F73)',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#2D0A4E' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>{t.location}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex gap-0.5 text-xs">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} style={{ color: '#D4AF37' }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed line-clamp-3" style={{ color: '#6b7280' }}>"{t.text}"</p>
              <span
                className="inline-block mt-3 text-xs px-3 py-1 rounded-full"
                style={{ background: 'rgba(75,31,115,0.08)', color: '#4B1F73', border: '1px solid rgba(75,31,115,0.15)' }}
              >
                {t.service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
