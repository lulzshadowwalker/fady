'use client'

import { useTranslations } from 'next-intl'

export function Questions() {
  const t = useTranslations('wallet.prepaid-cards.questions')

  return (
    <section className="max-w-220 mx-auto flex justify-between items-center gap-8 px-4 max-lg:flex-col min-h-[min(33dvh,360px)] my-12 max-lg:my-6 max-lg:justify-center">
      <h2 className="font-semibold text-[3rem] leading-9 text-center">
        {t('title')}
      </h2>
      <button className="text-[2rem] font-semibold btn btn-secondary btn-outline max-w-85 w-full py-4 max-lg:py-2 max-lg:text-[1rem]">
        {t('button-text')}
      </button>
    </section>
  )
}

