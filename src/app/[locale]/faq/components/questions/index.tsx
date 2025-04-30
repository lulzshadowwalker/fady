'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import background from '@/assets/logo-background.png'
import Image from 'next/image'

export function Questions() {
    const t = useTranslations('faq.questions')

    return (
        <section className="max-w-220 mx-auto flex justify-between items-center gap-8 px-4 max-lg:flex-col min-h-[min(33dvh,360px)] my-16 max-lg:my-6 max-lg:justify-center relative">
            <Image
                src={background}
                alt=""
                fill
                className="-z-50 object-contain scale-125"
            />

            <h2 className="font-semibold text-[1.75rem] leading-7 text-center max-w-75">
                {t('title')}
            </h2>
            <Link
                href="/contact"
                className="text-center text-[2rem] font-semibold btn btn-primary btn-outline max-w-105 w-full py-4 max-lg:py-2 max-lg:text-[1rem]"
            >
                {t('button-text')}
            </Link>
        </section>
    )
}
