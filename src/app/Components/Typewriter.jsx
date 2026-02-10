
'use client'

import { motion } from 'framer-motion'

export default function Typewriter({
    text,
    delay = 0,
    className = '',
    speed = 0.05
}) {
    // Split text into words first to handle spacing properly
    const words = text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: speed, delayChildren: delay * 1 }
        })
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    }

    return (
        <motion.div
            style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }} // Flex wrap for words
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => (
                <div key={index} style={{ whiteSpace: 'nowrap', marginRight: '0.25em' }}>
                    {/* Split word into chars */}
                    {Array.from(word).map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={child}
                            style={{ display: 'inline-block' }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            ))}
        </motion.div>
    )
}
