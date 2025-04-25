'use client'

import {
    faFacebook,
    faInstagram,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import background from '@/assets/logo-background.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Stagger container: h1 and each card
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

// Entry animation for each child
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

export default function ContactUs() {
    return (
        <motion.main
            className="min-h-screen container mx-auto relative pt-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Image src={background} alt="" fill className="-z-50" />

            <motion.h1
                className="uppercase font-semibold text-center max-w-[740px] mx-auto leading-[90px] text-[5.3rem] mb-8"
                variants={itemVariants}
            >
                We&lsquo;re here to help!
            </motion.h1>

            <section className="flex flex-col gap-8 mb-32 md:flex-row md:gap-4">
                <motion.div
                    className="card grow basis-0 shadow-none py-11 max-w-full flex flex-col items-center justify-center gap-8"
                    variants={itemVariants}
                >
                    <h2 className="font-semibold text-center text-2xl leading-[30px]">
                        Our support team is here for you
                    </h2>

                    <button className="btn btn-primary btn-outline max-w-56 w-full font-semibold text-2xl">
                        Contact us
                    </button>

                    <p className="text-sm font-semibold text-center leading-[20px]">
                        For questions, complaints, or feedback
                    </p>
                </motion.div>

                <motion.div
                    className="card grow basis-0 shadow-none py-11 max-w-full flex flex-col items-center justify-center gap-8"
                    variants={itemVariants}
                >
                    <h2 className="font-semibold text-center text-2xl leading-[30px]">
                        Follow us
                    </h2>

                    <div className="flex items-center justify-between gap-2 max-w-56 w-full">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                size="3x"
                                className="transition-all hover:text-primary cursor-pointer"
                            />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size="3x"
                                className="transition-all hover:text-primary cursor-pointer"
                            />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                size="3x"
                                className="transition-all hover:text-primary cursor-pointer"
                            />
                        </a>
                    </div>

                    <p className="text-sm font-semibold text-center leading-[20px]">
                        Stay connected with us on social media for updates,
                        news, and more!
                    </p>
                </motion.div>
            </section>
        </motion.main>
    )
}
