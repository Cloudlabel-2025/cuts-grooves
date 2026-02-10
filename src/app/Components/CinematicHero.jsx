'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroThreeScene from './HeroThreeScene'

gsap.registerPlugin(ScrollTrigger)

export default function CinematicHero() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const threeSceneRef = useRef(null)
    const overlayRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial reveal animations
            const titleChars = titleRef.current.querySelectorAll('.char')
            gsap.from(titleChars, {
                opacity: 0,
                y: 50,
                rotateX: -45,
                stagger: 0.05,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            })

            gsap.from([subtitleRef.current, ctaRef.current.children], {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 1,
                delay: 1.2,
                ease: 'power3.out'
            })

            // TELESCOPIC TRANSITION
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=150%', // Scroll distance for the animation
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1
                }
            })

            // 1. Fade out hero content
            tl.to([titleRef.current, subtitleRef.current, ctaRef.current], {
                opacity: 0,
                scale: 0.9,
                y: -50,
                duration: 1
            }, 0)

            // 2. Telescopic Zoom Effect
            // Scale up the 3D scene to act as the "lens"
            tl.to(threeSceneRef.current, {
                scale: 15,
                opacity: 0,
                duration: 2,
                ease: 'power2.inOut'
            }, 0.5)

            // Creating the "binocular" reveal by clipping the HERO away
            // This exposes the HorizontalScrollGallery sitting behind it (zIndex: 1)
            tl.fromTo(heroRef.current,
                { clipPath: 'circle(100% at 50% 50%)' },
                { clipPath: 'circle(0% at 50% 50%)', duration: 2, ease: 'power2.inOut' },
                0.5
            )

        }, containerRef)

        return () => ctx.revert()
    }, [])

    // Magnetic button effect
    const handleButtonHover = (e) => {
        const button = e.currentTarget
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(button, {
            x: x * 0.4,
            y: y * 0.4,
            duration: 0.3,
            ease: 'power2.out'
        })
    }

    const handleButtonLeave = (e) => {
        gsap.to(e.currentTarget, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
        })
    }

    // Split text into characters
    const splitText = (text) => {
        return text.split('').map((char, i) => (
            <span
                key={i}
                className="char"
                style={{
                    display: 'inline-block',
                    transformOrigin: '50% 100%',
                    marginRight: char === ' ' ? '0.3em' : '0'
                }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))
    }

    return (
        <div ref={containerRef} style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
            <section
                ref={heroRef}
                style={{
                    position: 'relative',
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                {/* Video Background */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    >
                        <source src="/videos/luxury-interior.mp4" type="video/mp4" />
                    </video>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
                        zIndex: 1
                    }} />
                </div>

                {/* Three.js 3D Scene - Targeted for Zoom */}
                <div ref={threeSceneRef} style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    pointerEvents: 'none'
                }}>
                    <HeroThreeScene />
                </div>

                {/* Telescopic Aperture Overlay (Only visible during transition) */}
                <div
                    ref={overlayRef}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'black',
                        zIndex: 10,
                        clipPath: 'circle(0% at 50% 50%)',
                        pointerEvents: 'none'
                    }}
                />

                {/* Content */}
                <div style={{
                    position: 'relative',
                    zIndex: 3,
                    maxWidth: '1000px',
                    padding: '0 2rem'
                }}>
                    {/* Title */}
                    <h1
                        ref={titleRef}
                        style={{
                            fontSize: 'clamp(3rem, 10vw, 7rem)',
                            fontWeight: '700',
                            color: 'white',
                            lineHeight: 1,
                            marginBottom: '1.5rem',
                            textShadow: '0 10px 40px rgba(0,0,0,0.5)'
                        }}
                    >
                        {splitText('Crafting')}
                        <br />
                        <span style={{ color: 'white' }}>
                            {splitText('Timeless')}
                        </span>
                        <br />
                        {splitText('Interiors')}
                    </h1>

                    {/* Subtitle */}
                    <p
                        ref={subtitleRef}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                            color: 'rgba(255,255,255,0.8)',
                            marginBottom: '2.5rem',
                            maxWidth: '600px',
                            marginInline: 'auto'
                        }}
                    >
                        Where architectural vision meets artistic execution.
                        We transform spaces into extraordinary experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        ref={ctaRef}
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center'
                        }}
                    >
                        <Link
                            href="/portfolio"
                            style={{
                                padding: '1rem 2rem',
                                background: 'white',
                                color: 'black',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                transition: 'all 0.3s'
                            }}
                            onMouseMove={handleButtonHover}
                            onMouseLeave={handleButtonLeave}
                        >
                            Explore Work
                        </Link>

                        <Link
                            href="/contact-us"
                            style={{
                                padding: '1rem 2rem',
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                border: '1px solid rgba(255,255,255,0.3)',
                                transition: 'all 0.3s'
                            }}
                            onMouseMove={handleButtonHover}
                            onMouseLeave={handleButtonLeave}
                        >
                            Start Project
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 4,
                    color: 'white',
                    opacity: 0.5
                }}>
                    <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em' }}>SCROLL</span>
                </div>
            </section>
        </div>
    )
}
