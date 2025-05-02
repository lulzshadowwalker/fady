'use client'

import { useEffect, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import dynamic from 'next/dynamic'
import { cn } from '@/lib/cn'
import { tido } from '@/assets/fonts/tido'

// Lottie animations (JSON)
import rabbit1 from '@/assets/lottie/rabbit-1.json'
import rabbit2 from '@/assets/lottie/rabbit-2.json'
import rabbit3 from '@/assets/lottie/rabbit-3.json'
import clown from '@/assets/lottie/clown.json'
import star from '@/assets/lottie/star.json'

// Dynamically load Lottie to keep bundle small
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

// ENV keys
const MESSAGE =
    process.env.NEXT_PUBLIC_EASTER_EGG_MESSAGE || 'You found the secret!'

// helper for randomness
const randomRange = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

export default function EasterEgg() {
    const controls = useAnimation()

    // ramp up chaos on mount
    useEffect(() => {
        // confetti blitz for 8s
        const end = Date.now() + 8000
        const interval = setInterval(() => {
            if (Date.now() > end) return clearInterval(interval)
            import('canvas-confetti').then(({ default: confetti }) => {
                confetti({
                    particleCount: 60,
                    spread: 360,
                    origin: { x: Math.random(), y: Math.random() * 0.7 },
                    emojis: ['🐇', '🤡', '🎉', '⭐️'],
                } as any)
            })
        }, 150)

        // global shake/spin
        controls.start({
            rotate: [0, 15, -15, 15, -15, 0],
            transition: { duration: 1.2, repeat: Infinity },
        })

        return () => clearInterval(interval)
    }, [controls])

    // particles engine
    const initParticles = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, [])

    // build a biased list: many rabbits, few clowns & stars
    const lottieEntries = [
        rabbit1,
        rabbit1,
        rabbit1,
        rabbit1,
        rabbit2,
        rabbit2,
        rabbit2,
        rabbit2,
        rabbit3,
        rabbit3,
        rabbit3,
        rabbit3,
        clown,
        clown,
        star,
        star,
    ]

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.3 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
        >
            {/* that four-color pulsing background */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: ['#ff004f', '#4bfffc', '#4bff4b', '#ff4b4b'],
                }}
                transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
                style={{ opacity: 0.6 }}
            />

            {/* carrot & ear particles */}
            <Particles
                init={initParticles}
                className="absolute inset-0"
                options={{
                    fpsLimit: 60,
                    particles: {
                        number: { value: 35 },
                        shape: {
                            type: ['image'],
                            image: [
                                {
                                    src: '/emojis/carrot.png',
                                    width: 32,
                                    height: 32,
                                },
                                {
                                    src: '/emojis/bunny-ear.png',
                                    width: 32,
                                    height: 32,
                                },
                            ],
                        },
                        size: { value: 16, random: true },
                        move: { speed: 2, outModes: 'out' },
                    },
                }}
            />

            {/* chaotic Lottie instances */}
            {lottieEntries.map((animationData, i) => {
                const top = randomRange(5, 85)
                const left = randomRange(5, 90)
                const duration = 3 + Math.random() * 2

                return (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, i % 2 === 0 ? 100 : -100, 0],
                            y: [0, -75, 75, 0],
                            rotate: [0, 360],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            duration,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        }}
                        className="absolute z-10"
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            width: 100,
                            height: 100,
                        }}
                    >
                        <Lottie animationData={animationData} loop />
                    </motion.div>
                )
            })}

            {/* your ENV message */}
            <motion.div
                animate={controls}
                className={cn(
                    tido.className,
                    'relative z-20 p-4 text-center text-3xl sm:text-5xl font-bold uppercase text-white drop-shadow-xl',
                )}
            >
                {MESSAGE}
            </motion.div>
        </motion.div>
    )
}
