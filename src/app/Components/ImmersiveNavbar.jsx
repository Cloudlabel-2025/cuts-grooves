'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ImmersiveNavbar() {
    const navRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        // Scroll detection for navbar style change
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        // Navbar is fixed by CSS, no need to animate y position on scroll if sticking at top
        gsap.set(navRef.current, { y: 0 })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Magnetic hover effect
    const handleMouseMove = (e, element) => {
        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        })
    }

    const handleMouseLeave = (element) => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
        })
    }

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/services', label: 'Services' },
        { href: '/contact-us', label: 'Contact' }
    ]

    return (
        <nav
            ref={navRef}
            className={`immersive-navbar ${isScrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '1rem 3rem',
                transition: 'all 0.3s ease',
                background: 'transparent'
            }}
        >
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
                borderRadius: '100px',
                padding: '0.8rem 2rem',
                border: isScrolled ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.4)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        textDecoration: 'none'
                    }}
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                >
                    <img
                        src="/images/logo.png"
                        alt="Cuts & Grooves"
                        style={{
                            height: '70px',
                            width: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                        <span style={{
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            color: 'white',
                            letterSpacing: '0.02em',
                            lineHeight: 1.1
                        }}>
                            Cuts & Grooves
                        </span>
                        <span style={{
                            fontSize: '0.75rem',
                            fontWeight: '400',
                            color: 'rgba(255,255,255,0.7)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            An Architecture Firm
                        </span>
                    </div>
                </Link>

                {/* Nav Links */}
                <div style={{
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center'
                }}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="nav-link-magnetic"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                fontWeight: '500',
                                position: 'relative',
                                transition: 'opacity 0.3s'
                            }}
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            {link.label}
                            <span style={{
                                position: 'absolute',
                                bottom: '-5px',
                                left: 0,
                                width: '0%',
                                height: '2px',
                                background: 'rgba(255,255,255,0.2)',
                                transition: 'width 0.3s ease'
                            }} className="nav-underline" />
                        </Link>
                    ))}

                    {/* CTA Button */}
                    <Link
                        href="/contact-us"
                        className="nav-cta-button"
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: 'white',
                            color: 'black',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            boxShadow: '0 4px 15px rgba(77, 148, 255, 0.4)'
                        }}
                        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .nav-link-magnetic:hover .nav-underline {
                    width: 100% !important;
                }
                .nav-cta-button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 20px rgba(77, 148, 255, 0.6);
                }
            `}} />
        </nav>
    )
}
