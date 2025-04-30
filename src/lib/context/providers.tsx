'use client'

import { PostHogProvider } from '@/lib/context/posthog-context'
import { StatsProvider } from '@/lib/context/stats-context'
import { useRef } from 'react'
import { TransitionRouter } from 'next-transition-router'
import { gsap } from 'gsap'
import Image from 'next/image'
import logo from '@/assets/images/logo-white.png'

export function Providers({ children }: { children: React.ReactNode }) {
    const firstLayer = useRef<HTMLDivElement | null>(null)
    const secondLayer = useRef<HTMLDivElement | null>(null)

    return (
        <PostHogProvider>
            <StatsProvider>
                <TransitionRouter
                    auto={true}
                    leave={(next, from, to) => {
                        console.log({ from, to })

                        const tl = gsap
                            .timeline({
                                onComplete: next,
                            })
                            .fromTo(
                                firstLayer.current,
                                { y: '100%' },
                                {
                                    y: 0,
                                    duration: 0.4,
                                    ease: 'circ.inOut',
                                },
                            )
                            .fromTo(
                                secondLayer.current,
                                {
                                    y: '100%',
                                },
                                {
                                    y: 0,
                                    duration: 1,
                                    ease: 'circ.inOut',
                                },
                                '<50%',
                            )

                        return () => {
                            tl.kill()
                        }
                    }}
                    enter={(next) => {
                        const tl = gsap
                            .timeline()
                            .fromTo(
                                secondLayer.current,
                                { y: 0 },
                                {
                                    y: '-100%',
                                    duration: 0.4,
                                    ease: 'circ.inOut',
                                },
                            )
                            .fromTo(
                                firstLayer.current,
                                { y: 0 },
                                {
                                    y: '-100%',
                                    duration: 1,
                                    ease: 'circ.inOut',
                                },
                                '<50%',
                            )
                            .call(next, undefined, '<50%')

                        return () => {
                            tl.kill()
                        }
                    }}
                >
                    {children}

                    <div
                        ref={firstLayer}
                        className="fixed inset-0 z-50 translate-y-full bg-primary"
                    >
                        <Image
                            src={logo}
                            alt="Logo"
                            width={250}
                            height={250}
                            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        />
                    </div>

                    <div
                        ref={secondLayer}
                        className="fixed inset-0 z-50 translate-y-full bg-primary-content"
                    />
                </TransitionRouter>
            </StatsProvider>
        </PostHogProvider>
    )
}
