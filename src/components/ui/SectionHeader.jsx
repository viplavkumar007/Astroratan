import React from 'react'
import { ScrollReveal } from './ScrollReveal'

export default function SectionHeader({ eyebrow, title, subtitle, dark = false, center = true }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <ScrollReveal>
        {eyebrow && (
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              background: dark
                ? 'rgba(212,175,55,0.15)'
                : 'rgba(75,31,115,0.08)',
              border: '1px solid rgba(212,175,55,0.35)',
              color: dark ? '#D4AF37' : '#4B1F73',
            }}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className="font-display text-4xl md:text-5xl font-bold tracking-wide leading-tight mb-4"
          style={{ color: dark ? '#fff' : '#2D0A4E' }}
        >
          {title}
        </h2>
        <div
          className="h-0.5 w-20 rounded-full mx-auto my-4"
          style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
        />
        {subtitle && (
          <p
            className={`text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}
            style={{ color: dark ? 'rgba(255,255,255,0.7)' : '#6b7280' }}
          >
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  )
}
