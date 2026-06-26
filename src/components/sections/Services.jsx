import React from 'react'
import { motion } from 'framer-motion'
import { services, brand } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { StaggerContainer, staggerItem } from '../ui/ScrollReveal'

const serviceGradients = [
  'linear-gradient(135deg, #2D0A4E 0%, #4B1F73 50%, #6b2fa3 100%)',
  'linear-gradient(135deg, #7a5a00 0%, #D4AF37 50%, #f0d060 100%)',
  'linear-gradient(135deg, #3d1063 0%, #6b2fa3 50%, #8b45c5 100%)',
  'linear-gradient(135deg, #4B1F73 0%, #D4AF37 100%)',
]

const iconBgs = [
  'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))',
  'linear-gradient(135deg, rgba(75,31,115,0.2), rgba(75,31,115,0.05))',
  'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(75,31,115,0.1))',
  'linear-gradient(135deg, rgba(75,31,115,0.15), rgba(212,175,55,0.1))',
]

export default function Services() {
  const makeWaLink = (msg) =>
    `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(msg)}`

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #faf5ff 0%, #1a0533 40%, #2D0A4E 100%)',
      }}
    >
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #faf5ff, transparent)' }} />

      {/* Decorative orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(75,31,115,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="🔮 Sacred Sciences"
          title="Our Services"
          subtitle="Choose your path to clarity. Each service is conducted with authentic knowledge, personal care, and complete confidentiality."
          dark={true}
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              variants={staggerItem}
              className="group relative rounded-2xl overflow-hidden flex flex-col cursor-default"
              style={{
                background: 'linear-gradient(145deg, rgba(45,10,78,0.9), rgba(26,5,51,0.97))',
                border: '1px solid rgba(212,175,55,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
              }}
            >
              {/* Top gradient bar */}
              <div className="h-1 w-full" style={{ background: serviceGradients[i] }} />

              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: `0 0 60px ${svc.glow}`,
                  border: '1px solid rgba(212,175,55,0.4)',
                }}
              />

              <div className="p-6 flex flex-col flex-1 gap-5">
                {/* Icon */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: iconBgs[i], border: '1px solid rgba(212,175,55,0.25)' }}
                  >
                    {svc.emoji}
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: 'rgba(212,175,55,0.7)' }}>
                      {svc.icon}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight mb-1"
                    style={{ color: '#f5e9ad' }}>
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold tracking-wide"
                    style={{ color: 'rgba(212,175,55,0.6)' }}>
                    {svc.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {svc.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      <span style={{ color: '#D4AF37', fontSize: '10px' }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* WhatsApp CTA */}
                <a
                  href={makeWaLink(svc.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center !py-3 !px-4 !text-xs mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.109 1.523 5.835L0 24l6.336-1.492A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.76.886.9-3.665-.234-.376A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(0deg, #fff, transparent)' }} />
    </section>
  )
}
