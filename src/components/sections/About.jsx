import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { ScrollReveal, StaggerContainer, staggerItem } from '../ui/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff 0%, #faf5ff 50%, #fff 100%)' }}>

      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(75,31,115,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="✨ Our Story"
          title={about.heading}
          subtitle={about.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Logo feature + description */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              {/* Feature image */}
              <div className="relative">
                <div
                  className="relative rounded-3xl overflow-hidden p-1"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #4B1F73, #D4AF37)',
                  }}
                >
                  <div
                    className="rounded-3xl flex items-center justify-center py-16 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1a0533, #2D0A4E, #3d1063)' }}
                  >
                    {/* Stars inside */}
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div key={i}
                        className="absolute rounded-full"
                        style={{
                          width: Math.random() * 2 + 1,
                          height: Math.random() * 2 + 1,
                          background: '#D4AF37',
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          opacity: Math.random() * 0.6 + 0.2,
                        }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 3 }}
                      />
                    ))}
                    <motion.img
                      src="/logo.png"
                      alt="ASTRORATAN"
                      className="w-48 h-48 object-contain relative z-10"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.5))' }}
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-3 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
                    boxShadow: '0 8px 32px rgba(212,175,55,0.4)',
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <p className="font-display font-bold text-xl" style={{ color: '#1a0533' }}>10+</p>
                  <p className="text-xs font-semibold" style={{ color: '#1a0533' }}>Years of Wisdom</p>
                </motion.div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="leading-relaxed" style={{ color: '#4b5563' }}>{about.description1}</p>
                <p className="leading-relaxed" style={{ color: '#4b5563' }}>{about.description2}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Highlights + Timeline */}
          <div className="space-y-10">
            {/* Highlights grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="card-luxury p-5 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl mb-3">{h.icon}</div>
                  <h4 className="font-display font-semibold text-base mb-1" style={{ color: '#2D0A4E' }}>
                    {h.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{h.desc}</p>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Timeline */}
            <ScrollReveal delay={0.3}>
              <div className="relative pl-8">
                <div className="absolute left-3.5 top-2 bottom-2 w-0.5"
                  style={{ background: 'linear-gradient(180deg, #D4AF37, rgba(212,175,55,0.2))' }} />
                <div className="space-y-6">
                  {about.timeline.map((t, i) => (
                    <motion.div
                      key={i}
                      className="relative flex gap-4 items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <div
                        className="absolute -left-5 w-3 h-3 rounded-full border-2 mt-1"
                        style={{ background: '#D4AF37', borderColor: '#fff', boxShadow: '0 0 8px rgba(212,175,55,0.6)' }}
                      />
                      <div>
                        <span className="font-display font-bold text-sm text-gold-gradient">{t.year}</span>
                        <p className="text-sm mt-0.5" style={{ color: '#4b5563' }}>{t.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
