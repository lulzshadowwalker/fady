import type { Metadata } from 'next'
import '../globals.css'
import { Header } from '@/shared/header'
import { Footer } from '@/shared/footer'
import { Cairo } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Providers } from '@/lib/context/providers'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Cursor } from '@/shared/cursor'
import { NextIntlClientProvider } from 'next-intl'

const cairo = Cairo({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Fady',
    description: 'Generated by create next app',
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) notFound()

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <body className={`${cairo.className} antialiased`}>
                <NextIntlClientProvider>
                    <Providers>
                        <Header />
                        {children}
                        <Footer />
                        <Cursor />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
