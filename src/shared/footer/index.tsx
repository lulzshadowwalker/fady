'use client'

import Image from 'next/image'
import logo from '@/assets/images/logo-vertical.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAppStoreIos,
    faFacebook,
    faInstagram,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

// Variants for footer animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

export function Footer() {
    const primaryLinks = [
        'About us',
        'Fady Passengers',
        'Fady Drivers',
        'Services',
        'Wallet',
    ]
    const secondaryLinks = ['FAQ', 'Help', 'Terms and Conditions']
    const socialIcons = [faWhatsapp, faInstagram, faFacebook]

    return (
        <motion.footer
            className="bg-secondary text-secondary-content py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto flex flex-col items-center text-center space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4 max-w-[66.25rem]">
                {/* Logo Section */}
                <motion.div variants={sectionVariants}>
                    <Image src={logo} alt="fady vertical logo" width={60} />
                </motion.div>

                {/* App Buttons */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-sm"
                    variants={sectionVariants}
                >
                    {[
                        'Download iOS',
                        'Download Android',
                        'Download Web',
                        'Download Desktop',
                    ].map((label, idx) => (
                        <button
                            key={idx}
                            className="btn btn-secondary bg-black flex items-center justify-center gap-2 text-lg w-full"
                        >
                            <FontAwesomeIcon icon={faAppStoreIos} size="2x" />
                            {label}
                        </button>
                    ))}
                </motion.div>

                {/* Primary Links */}
                <motion.ul
                    className="flex flex-col items-center gap-4 md:items-start"
                    variants={sectionVariants}
                >
                    {primaryLinks.map((text, idx) => (
                        <motion.li
                            key={idx}
                            className="animate-underline animate-underline-secondary-content"
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            {text}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Secondary Links */}
                <motion.ul
                    className="flex flex-col items-center gap-4 md:items-start"
                    variants={sectionVariants}
                >
                    {secondaryLinks.map((text, idx) => (
                        <motion.li
                            key={idx}
                            className="animate-underline animate-underline-secondary-content"
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            {text}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Social Icons */}
                <motion.ul
                    className="flex flex-row items-center justify-center gap-6 md:flex-col md:space-y-4 md:items-start"
                    variants={sectionVariants}
                >
                    {socialIcons.map((icon, idx) => (
                        <motion.li key={idx} variants={itemVariants}>
                            <FontAwesomeIcon icon={icon} size="2x" />
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.footer>
    )
}
