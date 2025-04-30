'use client'

import { useStats } from '@/lib/context/stats-context'
import Marquee from 'react-fast-marquee'
import { useTranslations } from 'next-intl'

export function Stats() {
    const { stats } = useStats()
    const t = useTranslations('stats')

    return (
        <section>
            <h2 className="sr-only">{t('aria-label')}</h2>

            <Marquee
                autoFill
                speed={30}
                gradient={false}
                className="py-16 sm:py-24 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
            >
                {stats?.driverCount != null && (
                    <div className="mx-4 sm:mx-8 flex-shrink-0">
                        <span className="text-6xl sm:text-8xl leading-8 font-light">
                            {stats.driverCount}+
                        </span>
                        <p className="text-lg sm:text-xl leading-5 font-semibold mt-4 text-center">
                            {t('drivers')}
                        </p>
                    </div>
                )}

                {stats?.customerCount != null && (
                    <div className="mx-4 sm:mx-8 flex-shrink-0">
                        <span className="text-6xl sm:text-8xl leading-8 font-light">
                            {stats.customerCount}+
                        </span>
                        <p className="text-lg sm:text-xl leading-5 font-semibold mt-4 text-center">
                            {t('customers')}
                        </p>
                    </div>
                )}

                {stats?.rideCount != null && (
                    <div className="mx-4 sm:mx-8 flex-shrink-0">
                        <span className="text-6xl sm:text-8xl leading-8 font-light">
                            {stats.rideCount}+
                        </span>
                        <p className="text-lg sm:text-xl leading-5 font-semibold mt-4 text-center">
                            {t('rides')}
                        </p>
                    </div>
                )}

                {/* always show this static value */}
                <div className="mx-4 sm:mx-8 flex-shrink-0">
                    <span className="text-6xl sm:text-8xl leading-8 font-light">
                        1015+
                    </span>
                    <p className="text-lg sm:text-xl leading-5 font-semibold mt-4 text-center">
                        {t('downloads')}
                    </p>
                </div>
            </Marquee>
        </section>
    )
}
