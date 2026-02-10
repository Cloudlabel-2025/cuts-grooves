'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScrollGallery() {
    const sectionRef = useRef(null)
    const scrollContainerRef = useRef(null)

    const projects = [
        {
            title: 'Modern Minimalist',
            category: 'Residential',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80'
        },
        {
            title: 'Luxury Penthouse',
            category: 'High-End',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
        },
        {
            title: 'Contemporary Office',
            category: 'Commercial',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
        },
        {
            title: 'Elegant Dining',
            category: 'Hospitality',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        },
        {
            title: 'Boutique Hotel',
            category: 'Hospitality',
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            const scrollWidth = scrollContainerRef.current.scrollWidth
            const viewportWidth = window.innerWidth

            gsap.to(scrollContainerRef.current, {
                x: -(scrollWidth - viewportWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${scrollWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            })

            // Parallax effect on cards
            const cards = scrollContainerRef.current.querySelectorAll('.project-card')
            cards.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: gsap.getById('horizontal-scroll'),
                        start: 'left right',
                        end: 'right left',
                        scrub: true
                    },
                    scale: 0.8,
                    opacity: 0.5
                })
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#0a0a0a',
                padding: '100px 0'
            }}
        >
            {/* Section Title */}
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto 60px',
                padding: '0 3rem'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '1rem'
                }}>
                    Featured <span style={{
                        color: 'white',
                        textShadow: '0 0 20px rgba(255,255,255,0.3)'
                    }}>Projects</span>
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.7)',
                    maxWidth: '600px'
                }}>
                    Scroll horizontally to explore our portfolio of transformative spaces
                </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    gap: '3rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem'
                }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        style={{
                            minWidth: '600px',
                            height: '500px',
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.3s'
                        }}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                                scale: 1.05,
                                duration: 0.3,
                                ease: 'power2.out'
                            })
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                                scale: 1,
                                duration: 0.3,
                                ease: 'power2.out'
                            })
                        }}
                    >
                        {/* Image */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.5s'
                        }} className="project-image" />

                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '60%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end'
                        }}>
                            <span style={{
                                fontSize: '0.9rem',
                                color: 'white',
                                opacity: 0.8,
                                fontWeight: '600',
                                letterSpacing: '0.1em',
                                marginBottom: '0.5rem'
                            }}>
                                {project.category}
                            </span>
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: 'white',
                                marginBottom: '1rem'
                            }}>
                                {project.title}
                            </h3>
                            <div style={{
                                width: '60px',
                                height: '2px',
                                background: 'white'
                            }} />
                        </div>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .project-card:hover .project-image {
                    transform: scale(1.1);
                }
            `}} />
        </section>
    )
}
