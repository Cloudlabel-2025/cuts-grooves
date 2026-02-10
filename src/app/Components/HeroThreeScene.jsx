'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry({ mouse }) {
    const meshRef = useRef()
    const groupRef = useRef()

    // Memoize geometries and materials to prevent memory leak and context loss
    const particleGeometry = useMemo(() => new THREE.SphereGeometry(0.02, 16, 16), [])
    const particleMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#ffffff",
        emissive: "#ffffff",
        emissiveIntensity: 1
    }), [])

    const particles = useMemo(() => {
        return [...Array(20)].map((_, i) => {
            const angle = (i / 20) * Math.PI * 2
            const radius = 2
            return {
                position: [
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius * 0.5,
                    Math.sin(angle) * radius
                ]
            }
        })
    }, [])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2
            meshRef.current.rotation.y = time * 0.3
        }

        if (groupRef.current && mouse.current) {
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                mouse.current.y * 0.3,
                0.05
            )
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                mouse.current.x * 0.3,
                0.05
            )
        }
    })

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere ref={meshRef} args={[1, 32, 32]}>
                    <MeshDistortMaterial
                        color="#ffffff"
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.1}
                        metalness={1}
                        emissive="#ffffff"
                        emissiveIntensity={0.2}
                    />
                </Sphere>
            </Float>

            {particles.map((p, i) => (
                <mesh
                    key={i}
                    position={p.position}
                    geometry={particleGeometry}
                    material={particleMaterial}
                />
            ))}
        </group>
    )
}

export default function HeroThreeScene() {
    const mouse = useRef({ x: 0, y: 0 })
    const [isWebGLAvailable, setIsWebGLAvailable] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        try {
            const canvas = document.createElement('canvas')
            const available = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
            setIsWebGLAvailable(available)
        } catch (e) {
            setIsWebGLAvailable(false)
        }
    }, [])

    if (mounted && !isWebGLAvailable) {
        return null
    }


    const handleMouseMove = (e) => {
        mouse.current = {
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1
        }
    }

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
            }}
            onMouseMove={handleMouseMove}
        >
            <Canvas
                shadows={false}
                dpr={[1, 1.5]} // Lowered slightly for stability
                gl={{
                    antialias: false, // Turn off antialias for maximum stability
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: false,
                    failIfMajorPerformanceCaveat: false
                }}
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={0.5} />
                <FloatingGeometry mouse={mouse} />
            </Canvas>
        </div>
    )
}
