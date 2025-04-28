'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { SupportItem } from './components/support-item'

// Framer-motion variants for staggered animations
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

// Header show/hide variants with smooth transition
const headerVariants = {
  hidden: {
    y: -100,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  visible: {
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
}

// Wrap Next.js Link with motion for animations
const MotionLink = motion(Link)

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Toggle body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Track scroll direction to hide/show header (only when menu is closed)
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return // don't hide header when sidebar open
      const currentY = window.scrollY
      if (currentY > lastScrollY && currentY > 100) {
        setShow(false)
      } else {
        setShow(true)
      }
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
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="fady logo" width={118} />
        </Link>

        {/* Hamburger toggle (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="xl" />
        </button>

        {/* Desktop navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-6"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionLink href="/contact" className="animate-underline" variants={itemVariants}>
            Contact
          </MotionLink>

          <SupportItem variants={itemVariants} />

          <MotionLink href="/faq" className="animate-underline" variants={itemVariants}>
            FAQ
          </MotionLink>

          <MotionLink href="/wallet/prepaid-cards" className="animate-underline" variants={itemVariants}>
            Wallet
          </MotionLink>

          <button
            className="btn btn-outline btn-primary"
            onClick={() => (window.location.href = '/download-app')}
          >
            Download App
          </button>
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
              transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
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
                <motion.li variants={itemVariants}>
                  <MotionLink href="/contact" className="block text-lg" onClick={() => setIsOpen(false)}>
                    Contact
                  </MotionLink>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <MotionLink href="/support" className="block text-lg" onClick={() => setIsOpen(false)}>
                    Support
                  </MotionLink>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <MotionLink href="/about-us" className="block text-lg" onClick={() => setIsOpen(false)}>
                    About us
                  </MotionLink>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <MotionLink href="/wallet" className="block text-lg" onClick={() => setIsOpen(false)}>
                    Wallet
                  </MotionLink>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <button
                    className="btn btn-outline btn-primary w-full"
                    onClick={() => {
                      setIsOpen(false)
                      window.location.href = '/download-app'
                    }}
                  >
                    Download App
                  </button>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
