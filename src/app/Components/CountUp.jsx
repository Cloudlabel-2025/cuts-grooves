'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CountUp({
    end,
    duration = 2,
    suffix = '',
    prefix = ''
}) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true
            const startTime = Date.now()
            const endValue = parseInt(end)

            const animate = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / (duration * 1000), 1)

                // Easing function for smooth deceleration
                const easeOut = 1 - Math.pow(1 - progress, 3)
                const currentValue = Math.floor(easeOut * endValue)

                setCount(currentValue)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                } else {
                    setCount(endValue)
                }
            }

            requestAnimationFrame(animate)
        }
    }, [isInView, end, duration])

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {prefix}{count}{suffix}
        </motion.span>
    )
}
