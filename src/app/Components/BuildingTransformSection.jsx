'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BuildingTransformSection() {
    const sectionRef = useRef(null)
    const building3dRef = useRef(null)
    const floorplan2dRef = useRef(null)
    const labelRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1.5
            }
        })

        // 3D building fades out and scales down
        tl.to(building3dRef.current, {
            opacity: 0,
            scale: 0.8,
            rotateY: 15,
            ease: "power2.inOut"
        })

            // 2D floor plan fades in and scales up
            .from(floorplan2dRef.current, {
                opacity: 0,
                scale: 1.2,
                ease: "power2.inOut"
            }, "<")

            // Label animation
            .from(labelRef.current, {
                opacity: 0,
                y: 30,
                ease: "power2.out"
            }, "-=0.3")

    }, { scope: sectionRef })

    return (
        <section
            ref={sectionRef}
            style={{
                minHeight: "150vh",
                position: "relative",
                background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "100px 20px"
            }}
        >
            <div style={{
                position: "relative",
                width: "100%",
                maxWidth: "1200px",
                height: "600px"
            }}>
                {/* 3D Building Image */}
                <div
                    ref={building3dRef}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        height: "80%",
                        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
                    }}
                />

                {/* 2D Floor Plan */}
                <div
                    ref={floorplan2dRef}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        height: "80%",
                        backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                        opacity: 0
                    }}
                />

                {/* Label */}
                <div
                    ref={labelRef}
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "300",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase"
                    }}
                >
                    From Vision to Blueprint
                </div>
            </div>
        </section>
    )
}
