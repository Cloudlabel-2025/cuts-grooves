'use client'

import { useEffect, useRef } from 'react'

export default function HeroSparkles() {
    const canvasRef = useRef(null)
    const particles = useRef([])
    const mouse = useRef({ x: 0, y: 0 })
    const center = useRef({ x: 0, y: 0 })
    const animationFrameId = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            center.current = { x: canvas.width / 2, y: canvas.height / 2 }
        }
        resize()
        window.addEventListener('resize', resize)

        // Track mouse
        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMouseMove)

        // Geodesic sphere vertices (icosahedron-based)
        const createGeodeVertices = (radius, subdivisions = 1) => {
            const vertices = []
            const phi = (1 + Math.sqrt(5)) / 2 // Golden ratio

            // Base icosahedron vertices
            const baseVertices = [
                [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
                [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
                [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
            ]

            // Normalize and scale
            baseVertices.forEach(v => {
                const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2])
                vertices.push({
                    x: (v[0] / len) * radius,
                    y: (v[1] / len) * radius,
                    z: (v[2] / len) * radius
                })
            })

            return vertices
        }

        // Particle class
        class Particle {
            constructor(vertex) {
                this.baseX = vertex.x
                this.baseY = vertex.y
                this.baseZ = vertex.z
                this.x = 0
                this.y = 0
                this.size = Math.random() * 2 + 1
                this.opacity = Math.random() * 0.5 + 0.3
                this.rotationOffset = Math.random() * Math.PI * 2
            }

            project(centerX, centerY, rotation, scale) {
                // Apply rotation
                const cosY = Math.cos(rotation.y + this.rotationOffset)
                const sinY = Math.sin(rotation.y + this.rotationOffset)
                const cosX = Math.cos(rotation.x)
                const sinX = Math.sin(rotation.x)

                // Rotate around Y axis
                let x = this.baseX * cosY - this.baseZ * sinY
                let z = this.baseX * sinY + this.baseZ * cosY
                let y = this.baseY

                // Rotate around X axis
                let y2 = y * cosX - z * sinX
                let z2 = y * sinX + z * cosX

                // Apply scale and breathing
                x *= scale
                y2 *= scale
                z2 *= scale

                // Simple perspective projection
                const perspective = 300
                const scale3d = perspective / (perspective + z2)

                this.x = centerX + x * scale3d
                this.y = centerY + y2 * scale3d
                this.depth = z2
            }

            draw(ctx) {
                // Opacity based on depth (further = dimmer)
                const depthOpacity = Math.max(0.2, 1 - (this.depth / 200))

                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(77, 148, 255, ${this.opacity * depthOpacity})`
                ctx.fill()
            }
        }

        // Initialize particles
        const vertices = createGeodeVertices(80, 1)
        particles.current = vertices.map(v => new Particle(v))

        // Animation
        let rotation = { x: 0, y: 0 }
        let time = 0

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Smooth center following mouse
            center.current.x += (mouse.current.x - center.current.x) * 0.05
            center.current.y += (mouse.current.y - center.current.y) * 0.05

            // Auto-rotation
            rotation.y += 0.002
            rotation.x = Math.sin(time * 0.001) * 0.2

            // Breathing scale
            time += 1
            const breathingScale = 1 + Math.sin(time * 0.02) * 0.1

            // Sort by depth for proper rendering
            particles.current.forEach(p => {
                p.project(center.current.x, center.current.y, rotation, breathingScale)
            })

            particles.current.sort((a, b) => a.depth - b.depth)

            // Draw
            particles.current.forEach(p => p.draw(ctx))

            animationFrameId.current = requestAnimationFrame(animate)
        }

        animate()

        // Cleanup
        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
            }}
        />
    )
}
