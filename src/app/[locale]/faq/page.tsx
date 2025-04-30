'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Questions } from './components/questions'

const faqKeys = [
    'how-to-download-app',
    'how-do-i-charge-my-wallet',
    'where-can-i-buy-recharge-card',
    'what-if-recharge-card-doesnt-work',
] as const

// Stagger container variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

// Individual item variants
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

export default function Faq() {
    const t = useTranslations('faq')

    return (
        <main>
            <div className="min-h-screen bg-secondary text-secondary-content">
                <div className="container mx-auto pt-12 pb-30">
                    <h1 className="max-w-prose text-center font-semibold leading-22 text-[5.3rem] mb-12 mx-auto max-lg:text-4xl max-lg:mb-0">
                        {t('heading')}
                    </h1>
                    <p className="max-w-prose text-center text-[2rem] font-medium leading-12 mx-auto max-lg:text-3xl">
                        {t('subheading')}
                    </p>

                    <motion.div
                        className="mt-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {faqKeys.map((key) => (
                            <motion.div key={key} variants={itemVariants}>
                                <details
                                    name="faq"
                                    className="border-t border-b border-secondary-content px-4 py-7"
                                >
                                    <summary className="max-w-280 mx-auto font-semibold text-[1.75rem] leading-12 flex items-center justify-between outline-none max-lg:text-2xl">
                                        {t(`items.${key}.question`)}
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            className="icon"
                                        />
                                    </summary>
                                    <div className="text-2xl font-medium leading-7 text-start text-secondary bg-secondary-content rounded-box py-9 mt-6 mb-12 max-lg:px-4 max-lg:text-xl">
                                        <div className="max-w-280 mx-auto">
                                            {t(`items.${key}.answer`)}
                                        </div>
                                    </div>
                                </details>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Questions />
        </main>
    )
}
