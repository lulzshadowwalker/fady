'use client'

import { Link, usePathname } from "@/i18n/navigation";
import { InteractiveGrid } from "@/shared/interactive-grid";
import { useLocale, useTranslations } from "next-intl";
import React from 'react';


export default function Playground() {
  const t = useTranslations("playground");
  const pathname = usePathname();
  const nextLocale = useLocale() === "en" ? "ar" : "en";

  const variants = [
    'primary',
    'primary-content',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
  ]

  return (
    <main className="min-h-screen p-8 bg-gray-200 space-y-8">
      <h1 className="text-2xl font-bold mb-8">Localization</h1>
      <Link href={pathname} locale={nextLocale} className="btn btn-primary">{t('hello')}</Link>

      <h1 className="text-2xl font-bold mt-8 mb-4">Button Playground</h1>

      {variants.map((variant) => (
        <div key={variant}>
          <h2 className="text-lg font-semibold capitalize mb-2">
            {variant} buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              className={`btn btn-${variant}`}
              onClick={() => console.log('Clicked')}
            >
              .btn .btn-{variant}
            </button>
            <button
              className={`btn btn-outline btn-${variant}`}
              onClick={() => console.log('Clicked')}
            >
              .btn .btn-outline .btn-{variant}
            </button>
          </div>
        </div>
      ))}

      <h1 className="text-2xl font-bold mb-4">Boxes Grid</h1>
      <div className="min-h-screen relative">
        <InteractiveGrid />
      </div>
    </main>
  )
}
