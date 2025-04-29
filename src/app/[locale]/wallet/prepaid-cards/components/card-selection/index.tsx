'use client'

import Slider from 'react-slick'
import logo from '@/assets/images/logo-white.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const VALUES = [3, 5, 10, 20, 50, 100]
const PHONE = '962799998586'

export function CardSelection() {
  const t = useTranslations('wallet.prepaid-cards.card-selection')

  return (
    <section className="mt-36 max-lg:mt-12">
      <h2 className="max-w-185 mx-auto px-4 py-5 text-center font-semibold text-[3rem] leading-9 bg-secondary text-secondary-content rounded-t-[5px]">
        {t('title')}
      </h2>

      <div className="bg-secondary px-4 pb-12 mb-12">
        <Slider
          className="py-8"
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          centerPadding="0"
          centerMode
          dots
          arrows={false}
          autoplay
          pauseOnHover
          responsive={[
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }
          ]}
        >
          {VALUES.map((value) => {
            // localize the message, injecting the numeric value
            const message = t('whatsapp.message', { value })
            const href = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(message)}`

            return (
              <a
                key={value}
                href={href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="px-5"
              >
                <div className="relative card max-w-full aspect-square p-6 flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 ease-out hover:bg-primary hover:text-primary-content cursor-pointer group rounded-2xl shadow-lg bg-white">
                  <Image
                    src={logo}
                    alt={t('logo-alt')}
                    className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                    width={64}
                    height={64}
                  />

                  <div className="flex items-baseline gap-2">
                    <strong className="text-[4.5rem] leading-[1] font-extrabold">
                      {value}
                    </strong>
                    <span className="text-[1.25rem] font-semibold uppercase">
                      JOD
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 group-hover:text-primary-content transition-colors">
                    {t('caption')}
                  </p>
                </div>
              </a>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
