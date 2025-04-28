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
import { Link } from '@/i18n/navigation'
import { SupportItem } from './components/support-item'

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

// Wrap Next.js Link with motion for animations
const MotionLink = motion(Link)

export function Footer() {
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
          {['Download iOS', 'Download Android', 'Download Web', 'Download Desktop'].map((label, idx) => (
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
          <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }}>
            <MotionLink href="/#passengers" className="animate-underline animate-underline-secondary-content">
              Fady Passengers
            </MotionLink>
          </motion.li>
          <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }}>
            <MotionLink href="/#drivers" className="animate-underline animate-underline-secondary-content">
              Fady Drivers
            </MotionLink>
          </motion.li>
          <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }}>
            <MotionLink href="/wallet/prepaid-cards" className="animate-underline animate-underline-secondary-content">
              Wallet
            </MotionLink>
          </motion.li>
          <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }}>
            <MotionLink href="/contact" className="animate-underline animate-underline-secondary-content">
              Contact Us
            </MotionLink>
          </motion.li>
        </motion.ul>

        {/* Secondary Links */}
        <motion.ul
          className="flex flex-col items-center gap-4 md:items-start"
          variants={sectionVariants}
        >
          <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }}>
            <MotionLink href="/faq" className="animate-underline animate-underline-secondary-content">
              FAQ
            </MotionLink>
          </motion.li>
          <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }} className="text-start">
            <SupportItem />
          </motion.li>
          <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }}>
            <MotionLink href="/terms-and-conditions" className="animate-underline animate-underline-secondary-content">
              Terms and Conditions
            </MotionLink>
          </motion.li>
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
