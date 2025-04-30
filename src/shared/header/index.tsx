'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, usePathname } from '@/i18n/navigation'
import { SupportItem } from './components/support-item'
import { useLocale, useTranslations } from 'next-intl'
import { Locale } from '@/i18n/routing'
import { cn } from '@/lib/cn'

// Variants for header animation (assumed defined elsewhere or inline)
const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
}
const headerVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { y: -100, opacity: 0, transition: { duration: 0.2 } },
}

const MotionLink = motion(Link)

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const pathname = usePathname()
    const locale = useLocale() as Locale
    const nextLocale = locale === 'en' ? 'ar' : 'en'
    const t = useTranslations('navigation')

    // Prevent background scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    // Hide or show header on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) return
            const currentY = window.scrollY
            setShow(!(currentY > lastScrollY && currentY > 100))
            setLastScrollY(currentY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY, isOpen])

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-50 bg-base text-base-content py-5 shadow"
            initial="visible"
            animate={show || isOpen ? 'visible' : 'hidden'}
            variants={headerVariants}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image src={logo} alt={t('logo-alt')} width={118} />
                </Link>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 focus:outline-none"
                    area-label={t('toggle-menu')}
                >
                    <FontAwesomeIcon
                        icon={isOpen ? faXmark : faBars}
                        size="xl"
                    />
                </button>

                {/* Desktop nav */}
                <motion.nav
                    className="hidden md:flex items-center gap-6"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <MotionLink
                        href="/contact"
                        className={`animate-underline ${pathname === '/contact' ? 'font-bold underline text-primary decoration-primary' : ''}`}
                        variants={itemVariants}
                    >
                        {t('contact')}
                    </MotionLink>

                    <SupportItem
                        variants={itemVariants}
                        className={pathname === '/support' ? 'font-bold' : ''}
                    />

                    <MotionLink
                        href="/faq"
                        className={`animate-underline ${pathname === '/faq' ? 'font-bold underline text-primary decoration-primary' : ''}`}
                        variants={itemVariants}
                    >
                        {t('faq')}
                    </MotionLink>

                    <MotionLink
                        href="/wallet/prepaid-cards"
                        className={`animate-underline ${pathname.startsWith('/wallet/prepaid-cards') ? 'font-bold underline text-primary decoration-primary' : ''}`}
                        variants={itemVariants}
                    >
                        {t('wallet')}
                    </MotionLink>

                    <Link
                        href="/#passengers"
                        className="btn btn-outline btn-primary"
                    >
                        {t('download-app')}
                    </Link>

                    <Link
                        href={pathname}
                        locale={nextLocale}
                        className="rounded-full border h-8 w-8 text-neutral-400 border-neutral-400 flex items-center justify-center"
                    >
                        <span
                            className={cn({
                                '-translate-y-1': locale === 'en',
                            })}
                        >
                            {locale === 'ar' ? 'EN' : 'ع'}
                        </span>
                    </Link>
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

                        {/* Mobile drawer */}
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
                                    area-label={t('close-menu')}
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
                                <motion.li variants={itemVariants}>
                                    <MotionLink
                                        href="/contact"
                                        className={`block text-lg ${pathname === '/contact' ? 'font-bold underline text-primary decoration-primary' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t('contact')}
                                    </MotionLink>
                                </motion.li>
                                <motion.li variants={itemVariants}>
                                    <SupportItem
                                        variants={itemVariants}
                                        onClick={() => setIsOpen(false)}
                                        className={
                                            pathname === '/support'
                                                ? 'font-bold'
                                                : ''
                                        }
                                    />
                                </motion.li>
                                <motion.li variants={itemVariants}>
                                    <MotionLink
                                        href="/faq"
                                        className={`block text-lg ${pathname === '/faq' ? 'font-bold underline text-primary decoration-primary' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t('faq')}
                                    </MotionLink>
                                </motion.li>
                                <motion.li variants={itemVariants}>
                                    <MotionLink
                                        href="/wallet/prepaid-cards"
                                        className={`block text-lg ${pathname.startsWith('/wallet/prepaid-cards') ? 'font-bold underline text-primary decoration-primary' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t('wallet')}
                                    </MotionLink>
                                </motion.li>
                                <motion.li variants={itemVariants}>
                                    <Link
                                        href="/#passengers"
                                        className="btn btn-outline btn-primary w-full"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t('download-app')}
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
