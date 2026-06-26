import React from 'react'
import { motion } from 'framer-motion'
import { whyChooseUs } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { StaggerContainer, staggerItem } from '../ui/ScrollReveal'

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf5ff 0%, #fff 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="💎 Why ASTRORATAN"
          title="Why Choose Us"
          subtitle="Thousands of clients across India trust ASTRORATAN Occult Gurukul for genuine guidance, accurate analysis, and life-changing clarity."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="card-luxury p-7 text-center group"
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(75,31,115,0.1), rgba(212,175,55,0.1))',
                  border: '1px solid rgba(212,175,55,0.25)',
                }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              <h4 className="font-display font-semibold text-base mb-2" style={{ color: '#2D0A4E' }}>
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
