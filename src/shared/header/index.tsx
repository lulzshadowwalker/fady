'use client'

import { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'

// Smoother variants for staggered animation
const navVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { y: -15, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const menuItems = ['Contact', 'Support', 'About us', 'Wallet']

    return (
        <header className="bg-base text-base-content py-5 relative z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex-shrink-0">
                    <Image src={logo} alt="fady logo" width={118} />
                </a>

                {/* Hamburger (mobile only) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon
                        icon={isOpen ? faXmark : faBars}
                        size="xl"
                    />
                </button>

                {/* Desktop nav with smoother stagger */}
                <motion.nav
                    className="hidden md:flex items-center gap-6"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {menuItems.map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                            className="animate-underline"
                            variants={itemVariants}
                        >
                            {item}
                        </motion.a>
                    ))}
                    <motion.button className="btn btn-outline btn-primary">
                        Download App
                    </motion.button>
                </motion.nav>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Sliding drawer */}
                        <motion.nav
                            key="drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'tween',
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-base p-6 z-50 shadow-lg"
                        >
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 focus:outline-none"
                                    aria-label="Close menu"
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <motion.ul
                                className="flex flex-col gap-6 mt-4"
                                variants={navVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {menuItems.map((item) => (
                                    <motion.li
                                        key={item}
                                        variants={itemVariants}
                                    >
                                        <a
                                            href={`#${item
                                                .toLowerCase()
                                                .replace(/\s+/g, '')}`}
                                            className="animate-underline block text-lg"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.li variants={itemVariants}>
                                    <button
                                        className="btn btn-outline btn-primary w-full"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Download App
                                    </button>
                                </motion.li>
                            </motion.ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
