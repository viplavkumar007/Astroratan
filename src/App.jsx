import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Reports from './components/sections/Reports'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CTAStrip from './components/sections/CTAStrip'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reports />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
