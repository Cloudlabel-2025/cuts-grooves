'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesGrid3D() {
    const sectionRef = useRef(null)

    const services = [
        {
            icon: '🏠',
            title: 'Residential Design',
            description: 'Transforming houses into personalized sanctuaries that reflect your lifestyle and aspirations.'
        },
        {
            icon: '🏢',
            title: 'Commercial Spaces',
            description: 'Creating productive and inspiring work environments that elevate your brand presence.'
        },
        {
            icon: '✨',
            title: 'Luxury Interiors',
            description: 'Bespoke high-end design with premium materials and meticulous attention to detail.'
        },
        {
            icon: '🎨',
            title: 'Space Planning',
            description: 'Optimizing layouts for functionality, flow, and aesthetic harmony in every square foot.'
        },
        {
            icon: '💡',
            title: 'Lighting Design',
            description: 'Crafting ambiance through strategic illumination that enhances mood and architecture.'
        },
        {
            icon: '🛋️',
            title: 'Furniture Curation',
            description: 'Selecting and sourcing pieces that perfectly complement your space and style.'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = sectionRef.current.querySelectorAll('.service-card')

            // Staggered entrance animation
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse'
                },
                y: 100,
                opacity: 0,
                rotateX: -30,
                stagger: 0.15,
                duration: 1,
                ease: 'power3.out'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleCardHover = (e, isEntering) => {
        const card = e.currentTarget
        const icon = card.querySelector('.service-icon')

        if (isEntering) {
            gsap.to(card, {
                y: -10,
                rotateY: 5,
                rotateX: 5,
                duration: 0.3,
                ease: 'power2.out'
            })
            gsap.to(icon, {
                scale: 1.2,
                rotate: 10,
                duration: 0.3,
                ease: 'back.out(1.7)'
            })
        } else {
            gsap.to(card, {
                y: 0,
                rotateY: 0,
                rotateX: 0,
                duration: 0.3,
                ease: 'power2.out'
            })
            gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: 'power2.out'
            })
        }
    }

    return (
        <section
            ref={sectionRef}
            style={{
                padding: '120px 3rem',
                background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
                position: 'relative'
            }}
        >
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '1.5rem'
                    }}>
                        Our <span style={{
                            background: 'linear-gradient(135deg, #4d94ff 0%, #00d4ff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Services</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255,255,255,0.7)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Comprehensive interior design solutions tailored to your vision
                    </p>
                </div>

                {/* Services Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem',
                    perspective: '1000px'
                }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            style={{
                                background: 'linear-gradient(135deg, rgba(77,148,255,0.1) 0%, rgba(0,212,255,0.05) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '20px',
                                padding: '3rem 2rem',
                                transformStyle: 'preserve-3d',
                                cursor: 'pointer',
                                transition: 'border-color 0.3s'
                            }}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div
                                className="service-icon"
                                style={{
                                    fontSize: '4rem',
                                    marginBottom: '1.5rem',
                                    display: 'inline-block'
                                }}
                            >
                                {service.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                color: 'white',
                                marginBottom: '1rem'
                            }}>
                                {service.title}
                            </h3>
                            <p style={{
                                fontSize: '1.05rem',
                                color: 'rgba(255,255,255,0.7)',
                                lineHeight: 1.6
                            }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
