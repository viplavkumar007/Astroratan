import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf5ff 0%, #fff 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="❓ Questions"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before beginning your spiritual journey with ASTRORATAN."
        />

        <ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: openIdx === i
                    ? 'linear-gradient(135deg, rgba(45,10,78,0.97), rgba(26,5,51,0.98))'
                    : 'rgba(255,255,255,0.97)',
                  border: openIdx === i
                    ? '1px solid rgba(212,175,55,0.4)'
                    : '1px solid rgba(212,175,55,0.2)',
                  boxShadow: openIdx === i
                    ? '0 8px 32px rgba(75,31,115,0.2), 0 0 20px rgba(212,175,55,0.1)'
                    : '0 2px 12px rgba(75,31,115,0.06)',
                  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                }}
                initial={false}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={openIdx === i}
                >
                  <span
                    className="font-display font-semibold text-base pr-4 leading-snug"
                    style={{ color: openIdx === i ? '#f5e9ad' : '#2D0A4E' }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: openIdx === i
                        ? 'linear-gradient(135deg, #D4AF37, #f0d060)'
                        : 'rgba(75,31,115,0.08)',
                      border: '1px solid rgba(212,175,55,0.3)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 5l5 5 5-5"
                        stroke={openIdx === i ? '#1a0533' : '#4B1F73'}
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px mb-4" style={{ background: 'rgba(212,175,55,0.2)' }} />
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
