'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WindowZoomSection() {
    const sectionRef = useRef(null)
    const windowRef = useRef(null)
    const textRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        })

        // Window zoom out animation
        tl.to(windowRef.current, {
            scale: 0.3,
            y: -200,
            ease: "power2.inOut"
        })

            // Text fade in
            .from(textRef.current.children, {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.5")

    }, { scope: sectionRef })

    return (
        <section
            ref={sectionRef}
            style={{
                height: "200vh",
                position: "relative",
                overflow: "hidden",
                background: "#1a1a1a"
            }}
        >
            {/* Background Interior Scene */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundImage: "url('https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0
            }}>
                {/* Dark overlay for better window contrast */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.3)"
                }} />
            </div>

            {/* Window Frame (zooms out) */}
            <div
                ref={windowRef}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {/* Window Frame SVG/Overlay */}
                <div style={{
                    width: "90%",
                    height: "80%",
                    border: "40px solid #2a2a2a",
                    borderRadius: "20px",
                    boxShadow: "inset 0 0 100px rgba(0,0,0,0.8), 0 20px 60px rgba(0,0,0,0.5)",
                    position: "relative",
                    background: "rgba(0,0,0,0.3)"
                }}>
                    {/* Window Mullions (cross bars) */}
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        right: 0,
                        height: "20px",
                        background: "#2a2a2a",
                        transform: "translateY(-50%)"
                    }} />
                    <div style={{
                        position: "absolute",
                        left: "50%",
                        top: 0,
                        bottom: 0,
                        width: "20px",
                        background: "#2a2a2a",
                        transform: "translateX(-50%)"
                    }} />
                </div>
            </div>

            {/* Text Content (fades in after zoom) */}
            <div
                ref={textRef}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                    textAlign: "center",
                    color: "white",
                    pointerEvents: "none"
                }}
            >
                <h2 style={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    fontWeight: "300",
                    marginBottom: "1rem",
                    letterSpacing: "0.05em"
                }}>
                    Crafting Spaces
                </h2>
                <p style={{
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    opacity: 0.8,
                    maxWidth: "600px",
                    margin: "0 auto"
                }}>
                    Where every window frames a story of timeless design
                </p>
            </div>
        </section>
    )
}
