'use client'

import { IosDownloadGuide } from '@/shared/ios-download-guide'
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl'
import Slider from 'react-slick'

export function Passengers() {
  const t = useTranslations('passengers-app')

  return (
    <section id="passengers" className="container mx-auto my-25 scroll-mt-24">
      <h2 className="tracking-[5%] leading-22 font-bold text-center text-[5.31rem] uppercase max-md:text-[3.6rem]">
        <span className="text-primary">{t('fady')}</span> {t('passengers')}
      </h2>

      <Slider
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        centerPadding="0"
        centerMode
        dots
        arrows={false}
        autoplay
        className="mt-17"
      >
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <div className="px-4" key={index}>
              <div className="text-center py-12 px-4 bg-base text-base-content grid place-content-center rounded-box">
                <h3 className="max-w-185 font-semibold leading-12 text-6xl mb-10 text-balance mx-auto">
                  {t('title')}
                </h3>
                <p className="max-w-185 text-2xl leading-7 mx-auto">
                  {t('description')}
                </p>
              </div>
            </div>
          ))}
      </Slider>

      <div className="flex gap-4 mt-21 px-4 max-md:flex-col">
        <button className="basis-0 grow flex items-center justify-center gap-4 btn btn-primary btn-outline">
          <FontAwesomeIcon
            icon={faAppStoreIos}
            className="text-secondary-content"
            size="3x"
          />
          <div className="text-center text-secondary-content leading-tight">
            <div className="text-[2.5rem] font-semibold">
              {t('download')}
            </div>
            <div className="text-lg">
              {t('for-ios')}
            </div>
          </div>
        </button>

        <button className="basis-0 grow flex items-center justify-center gap-4 btn btn-primary btn-outline">
          <FontAwesomeIcon
            icon={faGooglePlay}
            className="text-secondary-content"
            size="3x"
          />
          <div className="text-center text-secondary-content">
            <div className="text-[2.5rem] font-semibold">
              {t('download')}
            </div>
            <div className="text-lg">
              {t('for-android')}
            </div>

          </div>
        </button>
      </div>

      <IosDownloadGuide className="mx-4" />
    </section>
  )
}
