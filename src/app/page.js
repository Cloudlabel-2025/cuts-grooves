"use client"

import SmoothScrollProvider from "@/app/Components/SmoothScrollProvider"
import ImmersiveNavbar from "@/app/Components/ImmersiveNavbar"
import CinematicHero from "@/app/Components/CinematicHero"
import HorizontalScrollGallery from "@/app/Components/HorizontalScrollGallery"
import ServicesGrid3D from "@/app/Components/ServicesGrid3D"
import PhilosophySection from "@/app/Components/PhilosophySection"
import ElegantFooter from "@/app/Components/ElegantFooter"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main style={{ minHeight: '100vh' }}>
        {/* Immersive Navbar */}
        <ImmersiveNavbar />

        {/* Hero & Project Transition Wrapper */}
        <div style={{ position: 'relative', background: '#000' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <CinematicHero />
          </div>
          <div style={{
            marginTop: '-100vh', // Pull gallery up to be behind Hero
            position: 'relative',
            zIndex: 1
          }}>
            <HorizontalScrollGallery />
          </div>
        </div>

        {/* Services Grid with 3D Effects */}
        <ServicesGrid3D />

        {/* Philosophy Section (Enhanced) */}
        <PhilosophySection />

        {/* Elegant Footer */}
        <ElegantFooter />
      </main>
    </SmoothScrollProvider>
  )
}
