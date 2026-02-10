'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GsapTextReveal({
    text,
    className = '',
    style = {},
    delay = 0,
    stagger = 0.05,
    tag = 'div' // 'h1', 'p', 'span', etc.
}) {
    const containerRef = useRef(null)

    // Split text into words manually to avoid needing SplitText plugin (which is paid)
    const words = text.split(" ")

    useGSAP(() => {
        const wordElements = containerRef.current.querySelectorAll('.word-inner')

        gsap.fromTo(wordElements,
            { y: "100%", opacity: 0 },
            {
                y: "0%",
                opacity: 1,
                duration: 1.2,
                stagger: stagger,
                ease: "power3.out",
                delay: delay
            }
        )
    }, { scope: containerRef })

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', ...style }}
        >
            {words.map((word, index) => (
                <div key={index} style={{ overflow: 'hidden', marginRight: '0.25em', paddingBottom: '0.1em' /* for descenders */ }}>
                    <div className="word-inner" style={{ display: 'inline-block' }}>
                        {word}
                    </div>
                </div>
            ))}
        </div>
    )
}
