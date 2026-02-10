'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP) // Register plugins

export default function PhilosophySection() {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
    const quoteRef = useRef(null)
    const titleRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center", // Animation starts when top of section hits center of viewport
                end: "bottom center",
                toggleActions: "play none none reverse", // Replays on scroll up
                // scrub: 1, // Optional: smooth scrubbing
            }
        })

        // Staggered Text Reveal
        tl.from(titleRef.current.children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from(contentRef.current.querySelectorAll('p, a'), {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.4")

        // Quote Card Slide In (Parallax-ish)
        gsap.from(quoteRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "center center",
                scrub: 1.5 // Smooth parallax scrubbing
            },
            x: 100,
            opacity: 0,
            ease: "power2.out"
        })

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="section philosophy-section" style={{ overflow: 'hidden' }}>
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-lg-6" ref={contentRef}>
                        <div ref={titleRef}>
                            <p style={{
                                color: "var(--bronze-400)",
                                textTransform: "uppercase",
                                letterSpacing: "0.15em",
                                fontSize: "0.85rem",
                                marginBottom: "1rem"
                            }}>
                                Our Philosophy
                            </p>
                            <h2 style={{
                                fontFamily: "var(--font-display)",
                                color: "var(--royal-ink)", // Ensure contrast if bg is white
                                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                                marginBottom: "1.5rem",
                                lineHeight: "1.3"
                            }}>
                                Designing Spaces of <br />
                                <span style={{ color: "var(--bronze-400)" }}>Quiet Authority</span>
                            </h2>
                        </div>

                        <p style={{ color: "var(--charcoal-600)", lineHeight: "1.8", marginBottom: "1rem" }}>
                            We believe that exceptional spaces are born from the harmony of
                            material, light, and purpose. Every project begins with deep
                            understanding — of context, of client, of craft.
                        </p>
                        <p style={{ color: "var(--charcoal-500)", lineHeight: "1.8", marginBottom: "2rem" }}>
                            From luxurious interiors to robust layouts, we approach
                            each endeavour with the precision of artisans and the vision
                            of architects.
                        </p>

                        <Link href="/about" className="btn btn-outline-royal">
                            Learn More About Us
                        </Link>
                    </div>

                    {/* Right Quote */}
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div ref={quoteRef} className="quote-card">
                            <p>
                                "Architecture and interiors should never shout. They should
                                speak quietly, with confidence and permanence."
                            </p>
                            <p style={{
                                fontWeight: "600",
                                color: "var(--charcoal-800)",
                                marginBottom: "0.25rem",
                                fontStyle: "normal"
                            }}>
                                — The Cuts & Grooves Team
                            </p>
                            <span style={{ color: "var(--charcoal-500)", fontSize: "0.9rem" }}>
                                Design Philosophy
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
