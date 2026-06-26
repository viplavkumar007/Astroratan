import React from 'react'
import { motion } from 'framer-motion'
import { process as steps } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { ScrollReveal, StaggerContainer, staggerItem } from '../ui/ScrollReveal'

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a0533 0%, #2D0A4E 50%, #1a0533 100%)',
      }}
    >
      {/* Decorative stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 2.5 + 0.5,
            height: Math.random() * 2.5 + 0.5,
            background: '#D4AF37',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: Math.random() * 4 + 2, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="🌟 How It Works"
          title="Your Journey to Clarity"
          subtitle="A simple, guided process from choosing your service to receiving personalized cosmic guidance."
          dark={true}
        />

        {/* Desktop horizontal steps */}
        <div className="hidden lg:flex items-start justify-center gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-16 right-16 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37 15%, rgba(212,175,55,0.4) 85%, transparent)' }} />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center flex-1 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Circle */}
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl z-10 mb-5"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
                  boxShadow: '0 0 30px rgba(212,175,55,0.5), 0 4px 16px rgba(0,0,0,0.3)',
                  border: '3px solid rgba(255,255,255,0.2)',
                }}
                whileHover={{ scale: 1.15, boxShadow: '0 0 50px rgba(212,175,55,0.7)' }}
              >
                {step.icon}
              </motion.div>

              {/* Step number */}
              <span className="text-xs font-bold tracking-widest mb-2"
                style={{ color: 'rgba(212,175,55,0.6)' }}>
                STEP {step.step}
              </span>

              {/* Content */}
              <div className="max-w-[180px]">
                <h4 className="font-display font-semibold text-sm mb-2" style={{ color: '#f5e9ad' }}>
                  {step.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical steps */}
        <StaggerContainer className="lg:hidden space-y-0 relative">
          <div className="absolute left-8 top-8 bottom-8 w-0.5"
            style={{ background: 'linear-gradient(180deg, #D4AF37, rgba(212,175,55,0.2))' }} />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex gap-6 pl-4 pb-8"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl flex-shrink-0 z-10"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
                  boxShadow: '0 0 20px rgba(212,175,55,0.4)',
                }}
              >
                {step.icon}
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-widest" style={{ color: 'rgba(212,175,55,0.6)' }}>
                  STEP {step.step}
                </span>
                <h4 className="font-display font-semibold text-base mt-1 mb-1" style={{ color: '#f5e9ad' }}>
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
