'use client'

import { tido } from '@/assets/fonts/tido'
import { cn } from '@/lib/cn'
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay'
import { IosDownloadGuide } from '@/shared/ios-download-guide'
import hero from '@/assets/images/hero.png'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Locale } from '@/i18n/routing'

export function Hero() {
    const t = useTranslations('hero')
    const locale = useLocale() as Locale

    return (
        <section className="container mx-auto px-4 lg:px-0 mt-12 flex gap-4 justify-between relative overflow-hidden max-lg:overflow-x-hidden">
            <div className="px-12 max-lg:px-4">
                <h1
                    className={cn(
                        tido.className,
                        'text-[7.1rem] font-bold md:leading-[125px] uppercase text-base-content max-lg:text-[5.6rem] max-md:text-[5rem] max-sm:text-[4rem] max-lg:w-full max-lg:break-words',
                    )}
                >
                    {t('welcome')}
                    {locale === 'ar' ? ' ' : <br />}
                    {t('to-fady')}
                </h1>
                <p className="text-3xl leading-[50px] font-medium max-lg:text-2xl">
                    {t('subtitle')}
                </p>

                <div className="grid grid-cols-2 gap-[0.65rem] mt-8 max-w-fit max-lg:w-full max-lg:max-w-full max-lg:gap-2 max-lg:px-2">
                    <button className="btn btn-primary flex items-center gap-4 max-lg:gap-2 px-6 max-lg:px-4 max-sm:px-2">
                        <FontAwesomeIcon icon={faAppStoreIos} size="2x" />
                        <div>
                            <div className="text-2xl font-semibold max-lg:text-xl">
                                {t('download')}
                            </div>
                            <div className="text-xs">{t('for-passengers')}</div>
                        </div>
                    </button>

                    <button className="btn btn-primary flex items-center gap-4 max-lg:gap-2 px-6 max-lg:px-4 max-sm:px-2">
                        <FontAwesomeIcon icon={faGooglePlay} size="2x" />
                        <div>
                            <div className="text-2xl font-semibold max-lg:text-xl">
                                {t('download')}
                            </div>
                            <div className="text-xs">{t('for-passengers')}</div>
                        </div>
                    </button>

                    <button className="btn btn-primary flex items-center gap-4 max-lg:gap-2 px-6 max-lg:px-4 max-sm:px-2">
                        <FontAwesomeIcon icon={faAppStoreIos} size="2x" />
                        <div>
                            <div className="text-2xl font-semibold max-lg:text-xl">
                                {t('download')}
                            </div>
                            <div className="text-xs">{t('for-drivers')}</div>
                        </div>
                    </button>

                    <button className="btn btn-primary flex items-center gap-4 max-lg:gap-2 px-6 max-lg:px-4 max-sm:px-2">
                        <FontAwesomeIcon icon={faGooglePlay} size="2x" />
                        <div>
                            <div className="text-2xl font-semibold max-lg:text-xl">
                                {t('download')}
                            </div>
                            <div className="text-xs">{t('for-drivers')}</div>
                        </div>
                    </button>
                </div>

                <IosDownloadGuide />
            </div>

            <div className="max-w-2xl w-full self-start aspect-square relative max-lg:hidden rtl:rotate-y-180">
                <Image
                    src={hero}
                    alt={t('hero-image-alt')}
                    fill
                    className="object-contain scale-110 -translate-x-12"
                />
            </div>
        </section>
    )
}
