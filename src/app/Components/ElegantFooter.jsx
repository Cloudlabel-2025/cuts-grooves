'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function ElegantFooter() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleLinkHover = (e, isEntering) => {
        if (isEntering) {
            gsap.to(e.currentTarget, {
                x: 5,
                duration: 0.3,
                ease: 'power2.out'
            })
        } else {
            gsap.to(e.currentTarget, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            })
        }
    }

    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)',
            color: 'white',
            padding: '80px 3rem 40px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                backgroundImage: 'radial-gradient(circle, #4d94ff 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '60px'
                }}>
                    {/* Brand Column */}
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #4d94ff 0%, #00d4ff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            C&G Interiors
                        </h3>
                        <p style={{
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem'
                        }}>
                            Crafting timeless interiors that inspire and elevate everyday living.
                        </p>
                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {['Instagram', 'Pinterest', 'LinkedIn'].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: '0.8rem',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        gsap.to(e.currentTarget, {
                                            scale: 1.2,
                                            background: 'linear-gradient(135deg, #4d94ff, #00d4ff)',
                                            duration: 0.3
                                        })
                                    }}
                                    onMouseLeave={(e) => {
                                        gsap.to(e.currentTarget, {
                                            scale: 1,
                                            background: 'rgba(255,255,255,0.1)',
                                            duration: 0.3
                                        })
                                    }}
                                >
                                    {social[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            color: 'white'
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((link, i) => (
                                <li key={i} style={{ marginBottom: '0.8rem' }}>
                                    <Link
                                        href={`/${link.toLowerCase()}`}
                                        style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            transition: 'color 0.3s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#4d94ff'
                                            handleLinkHover(e, true)
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                                            handleLinkHover(e, false)
                                        }}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            color: 'white'
                        }}>
                            Services
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Residential Design', 'Commercial Spaces', 'Luxury Interiors', 'Space Planning'].map((service, i) => (
                                <li key={i} style={{ marginBottom: '0.8rem' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            color: 'white'
                        }}>
                            Get in Touch
                        </h4>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.8rem' }}>
                            📧 hello@cginteriors.com
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.8rem' }}>
                            📞 +1 (555) 123-4567
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                            📍 New York, NY
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                        © 2026 C&G Interiors. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4d94ff 0%, #00d4ff 100%)',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(77, 148, 255, 0.4)',
                    transition: 'transform 0.3s',
                    zIndex: 999
                }}
                onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                        scale: 1.1,
                        duration: 0.3,
                        ease: 'back.out(1.7)'
                    })
                }}
                onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                        scale: 1,
                        duration: 0.3
                    })
                }}
            >
                ↑
            </button>
        </footer>
    )
}
