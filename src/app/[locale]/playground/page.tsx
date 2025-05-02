'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { InteractiveGrid } from '@/shared/interactive-grid'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

export default function Playground() {
    const t = useTranslations('playground')
    const pathname = usePathname()
    const nextLocale = useLocale() === 'en' ? 'ar' : 'en'

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
            <h1 className="text-2xl font-bold mb-8 mt-4">Katyokha</h1>

            <div className="banner banner-info">
                Button with default padding
            </div>

            <button className="btn btn-primary flex items-center gap-4 max-lg:gap-2 px-6 max-lg:px-4 max-sm:px-2">
                <FontAwesomeIcon icon={faGooglePlay} size="2x" />
                <div>
                    <div className="text-2xl font-semibold max-lg:text-xl">
                        Download
                    </div>
                    <div className="text-xs">for Passengers</div>
                </div>
            </button>

            <div className="banner banner-info">
                Button with different padding
            </div>

            <button className="btn btn-primary flex items-center gap-4 max-lg:gap-2">
                <FontAwesomeIcon icon={faGooglePlay} size="2x" />
                <div>
                    <div className="text-2xl font-semibold max-lg:text-xl">
                        Download
                    </div>
                    <div className="text-xs">for Passengers</div>
                </div>
            </button>

            <h1 className="text-2xl font-bold mb-8">Localization</h1>
            <Link
                href={pathname}
                locale={nextLocale}
                className="btn btn-primary"
            >
                {t('hello')}
            </Link>

            <h1 className="text-2xl font-bold my-8">Banners</h1>

            <div className="banner banner-info">
                This is just for your information.
            </div>

            <div className="banner banner-warning">
                Heads‑up! Something needs your attention.
            </div>

            <div className="banner banner-success">
                Nice work — it succeeded!
            </div>

            <div className="banner banner-danger">
                Oops, something went wrong.
            </div>

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

            <h1 className="text-2xl font-bold mb-4">Dialogs</h1>
            <Dialog1 />
        </main>
    )
}

function Dialog1() {
    const ref = React.useRef<HTMLDialogElement>(null)

    function open() {
        if (ref.current) ref.current.showModal()
    }

    return (
        <>
            <button className="btn btn-primary" onClick={() => open()}>
                Open Modal
            </button>
            <dialog className="modal modal-center" ref={ref}>
                <div className="modal-box">
                    <form method="dialog">
                        <button className="modal-close btn">
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                        </button>
                    </form>

                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click the button below to close
                    </p>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-primary">Got it!</button>
                        </form>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                        <button></button>
                    </form>
                </div>
            </dialog>
        </>
    )
}
