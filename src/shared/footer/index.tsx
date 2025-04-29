// components/Footer.tsx
'use client'

import Image from 'next/image'
import logo from '@/assets/images/logo-vertical.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAppStoreIos,
  faGooglePlay,
  faWhatsapp,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { SupportItem } from './components/support-item'
import { useTranslations } from 'next-intl'

// Variants for footer animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Wrap Next.js Link with motion for animations
const MotionLink = motion(Link)

export function Footer() {
  const t = useTranslations('footer')
  const socialIcons = [faWhatsapp, faInstagram, faFacebook]

  return (
    <motion.footer
      className="bg-secondary text-secondary-content py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto flex flex-col items-center text-center space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4 max-w-[66.25rem]">

        {/* Logo */}
        <motion.div variants={sectionVariants}>
          <Image src={logo} alt="fady vertical logo" width={60} />
        </motion.div>

        {/* App Buttons: 2×2 grid */}
        <motion.div
          className="grid grid-cols-2 gap-[0.65rem] max-w-fit mt-8"
          variants={sectionVariants}
        >
          {[
            { icon: faAppStoreIos, subtitle: 'for-passengers' },
            { icon: faGooglePlay, subtitle: 'for-passengers' },
            { icon: faAppStoreIos, subtitle: 'for-drivers' },
            { icon: faGooglePlay, subtitle: 'for-drivers' },
          ].map(({ icon, subtitle }, idx) => (
            <button
              key={idx}
              className="btn btn-secondary bg-black flex items-center justify-center gap-2 text-lg w-full"
            >
              <FontAwesomeIcon icon={icon} size="2x" />
              <div className="flex flex-col items-center ml-2">
                <div className="text-lg font-semibold">{t('download')}</div>
                <div className="text-xs">{t(subtitle)}</div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Primary Links */}
        <motion.ul
          className="flex flex-col items-center gap-4 md:items-start"
          variants={sectionVariants}
        >
          {[
            { href: '/#passengers', label: t('passengers') },
            { href: '/#drivers', label: t('drivers') },
            { href: '/wallet/prepaid-cards', label: t('wallet') },
            { href: '/contact', label: t('contact-us') },
          ].map(({ href, label }) => (
            <motion.li key={href} variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }}>
              <MotionLink href={href} className="animate-underline animate-underline-secondary-content">
                {label}
              </MotionLink>
            </motion.li>
          ))}
        </motion.ul>

        {/* Secondary Links */}
        <motion.ul
          className="flex flex-col items-center gap-4 md:items-start"
          variants={sectionVariants}
        >
          {[
            { href: '/faq', label: t('faq') },
            { href: '', label: <SupportItem /> },
            { href: '/terms-and-conditions', label: t('terms') },
          ].map(({ href, label }, i) => (
            <motion.li key={i} variants={itemVariants} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.3 }} className="text-start">
              {typeof label === 'string' ? (
                <MotionLink href={href} className="animate-underline animate-underline-secondary-content">
                  {label}
                </MotionLink>
              ) : (
                label
              )}
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
              <FontAwesomeIcon icon={icon} size="2x" className="social-icon" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.footer>
  )
}
