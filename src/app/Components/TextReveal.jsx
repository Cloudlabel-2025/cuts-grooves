'use client'

import { motion } from 'framer-motion'

export default function TextReveal({
    children,
    delay = 0,
    className = ''
}) {
    return (
        <div style={{ overflow: 'hidden' }}>
            <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay
                }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}
