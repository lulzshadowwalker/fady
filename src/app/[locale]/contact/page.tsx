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
import { useTranslations } from 'next-intl'

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

export default function Contact() {
  const t = useTranslations('contact')

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
        {t('hero-heading')}
      </motion.h1>

      <section className="flex flex-col gap-8 mb-32 md:flex-row md:gap-4">
        <motion.div
          className="card grow basis-0 shadow-none py-11 max-w-full flex flex-col items-center justify-center gap-8"
          variants={itemVariants}
        >
          <h2 className="font-semibold text-center text-2xl leading-[30px]">
            {t('support-heading')}
          </h2>

          <button className="btn btn-primary btn-outline max-w-56 w-full font-semibold text-2xl">
            {t('contact-button')}
          </button>

          <p className="text-sm font-semibold text-center leading-[20px]">
            {t('support-description')}
          </p>
        </motion.div>

        <motion.div
          className="card grow basis-0 shadow-none py-11 max-w-full flex flex-col items-center justify-center gap-8"
          variants={itemVariants}
        >
          <h2 className="font-semibold text-center text-2xl leading-[30px]">
            {t('follow-heading')}
          </h2>

          <div className="flex items-center justify-between gap-2 max-w-56 w-full">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={t('whatsapp-aria')}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="3x"
                className="social-icon"
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={t('instagram-aria')}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="3x"
                className="social-icon"
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={t('facebook-aria')}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="3x"
                className="social-icon"
              />
            </a>
          </div>

          <p className="text-sm font-semibold text-center leading-[20px]">
            {t('follow-description')}
          </p>
        </motion.div>
      </section>
    </motion.main>
  )
}
