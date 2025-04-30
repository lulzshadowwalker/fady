import background from '@/assets/images/more-ways-to-ride-background.png'
import { IosDownloadGuide } from '@/shared/ios-download-guide'
import {
    faCar,
    faGift,
    faIdCard,
    faWallet,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getTranslations, getLocale } from 'next-intl/server'

const data = [
    { key: 'choose-type-of-ride', icon: faCar },
    { key: 'gifts', icon: faGift },
    { key: 'wallet', icon: faWallet },
    { key: 'become-a-driver', icon: faIdCard },
] as const

export async function MoreWaysToRide() {
    const t = await getTranslations('more-ways-to-ride')
    const locale = await getLocale() // e.g. 'en', 'ar'
    const isRtl = locale.startsWith('ar') // flip for Arabic (and any 'ar-*')

    return (
        <section className="relative pt-20 pb-22 max-md:px-8 overflow-hidden">
            {/* Background layer */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `url(${background.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isRtl ? 'scaleX(-1)' : undefined,
                    transformOrigin: 'center',
                }}
            />

            {/* Content */}
            <div className="container mx-auto z-10">
                <h2 className="font-semibold text-[5.37rem] leading-22 max-md:text-5xl max-md:leading-11">
                    {t('title')}
                </h2>

                <ul className="space-y-14 mt-21">
                    {data.map(({ key, icon }, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-[1.875rem]"
                        >
                            <FontAwesomeIcon
                                icon={icon}
                                className="text-primary text-6xl max-md:text-4xl"
                            />
                            <div>
                                <h3 className="font-bold text-5xl leading-12 mb-5 max-md:text-3xl max-md:leading-7">
                                    {t(`features.${key}.title`)}
                                </h3>
                                <p className="text-lg font-semibold leading-5 max-md:text-base !text-secondary">
                                    {t(`features.${key}.description`)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                <IosDownloadGuide />

                <p className="font-semibold text-[1.75rem] !text-primary mt-25 max-md:text-base">
                    {t('more-enhancements')}
                </p>
            </div>
        </section>
    )
}
