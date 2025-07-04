'use client'

import { useRef, useEffect } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion'
import { faPlay, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl'
import {
    PrepaidCardVideoDialog,
    PrepaidCardVideoDialogRef,
} from './components/prepaid-cards-video-dialog'
import decorations from '@/assets/images/decorations-1.png'
import Image from 'next/image'

export function Guide() {
    const t = useTranslations('wallet.prepaid-cards.guide')
    const ref = useRef(null)
    const dialogRef = useRef<PrepaidCardVideoDialogRef>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start('visible')
    }, [isInView, controls])

    function open() {
        dialogRef.current!.open()
    }

    return (
        <>
            <motion.section
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: 'easeOut' },
                    },
                }}
                className="relative bg-primary text-primary-content my-12 max-lg:my-6"
            >
                <div className="container mx-auto flex flex-col items-center justify-stretch gap-34 max-lg:gap-12 py-12">
                    <div className="flex items-center justify-between gap-4 max-w-223 w-full px-4">
                        <FontAwesomeIcon
                            icon={faPlay}
                            size="3x"
                            className="max-lg:!text-4xl"
                        />
                        <h2 className="font-semibold text-[3rem] leading-9 text-center max-lg:text-2xl">
                            {t('title')}
                        </h2>
                        <FontAwesomeIcon
                            icon={faWallet}
                            size="3x"
                            className="max-lg:!text-4xl"
                        />
                    </div>

                    <button
                        className="btn btn-outline btn-primary-content max-w-68 w-full py-5 font-bold text-[1.5rem] max-lg:text-[1rem] max-lg:py-3"
                        onClick={open}
                    >
                        {t('button-text')}
                    </button>
                </div>

                {/* Decorative bottom graphics */}
                <Image
                    src={decorations}
                    alt=""
                    width={decorations.width}
                    height={decorations.height}
                    className="absolute bottom-0 left-0 pointer-events-none"
                    priority={false}
                />
                <Image
                    src={decorations}
                    alt=""
                    width={decorations.width}
                    height={decorations.height}
                    className="absolute bottom-0 right-0 pointer-events-none transform scale-x-[-1]"
                    priority={false}
                />
            </motion.section>

            <PrepaidCardVideoDialog ref={dialogRef} />
        </>
    )
}
