'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

// Static list of section keys to preserve order
const sectionKeys = [
    'introduction',
    'use-of-service',
    'user-responsibilities',
    'intellectual-property',
    'limitation-of-liability',
    'governing-law',
    'changes',
    'contact-us',
] as const

export default function Terms() {
    const t = useTranslations('terms')

    return (
        <main className="min-h-screen bg-secondary text-secondary-content">
            <div className="container mx-auto pt-12 pb-30">
                {/* Page Title */}
                <h1 className="max-w-prose text-center font-semibold leading-22 text-[5.3rem] mb-12 mx-auto max-lg:text-4xl max-lg:mb-0">
                    {t('title')}
                </h1>
                <p className="max-w-prose text-center text-[2rem] font-medium leading-12 mx-auto max-lg:text-3xl">
                    {t('intro')}
                </p>

                {/* Terms Sections */}
                <motion.div
                    className="mt-12 space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {sectionKeys.map((key) => (
                        <motion.section key={key} variants={itemVariants}>
                            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
                                {t(`sections.${key}.title`)}
                            </h2>
                            {key === 'contact-us' ? (
                                <p className="text-2xl font-medium leading-7 max-lg:text-xl">
                                    {t(`sections.${key}.intro`)}{' '}
                                    <Link href="/contact" className="underline">
                                        {t(`sections.${key}.link-text`)}
                                    </Link>
                                    {t(`sections.${key}.outro`)}
                                </p>
                            ) : (
                                <p className="text-2xl font-medium leading-7 max-lg:text-xl">
                                    {t(`sections.${key}.content`)}
                                </p>
                            )}
                        </motion.section>
                    ))}
                </motion.div>
            </div>
        </main>
    )
}
