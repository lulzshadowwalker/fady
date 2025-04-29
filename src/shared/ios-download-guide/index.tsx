'use client'

import { faInfoCircle, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HTMLAttributes, useRef } from "react"
import "plyr-react/plyr.css"
import { cn } from "@/lib/cn"
import dynamic from "next/dynamic"
import { useTranslations } from 'next-intl'

const Plyr = dynamic(() => import("plyr-react"), {
  ssr: false,
})

export function IosDownloadGuide({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const t = useTranslations('ios-download-guide')
  const ref = useRef<HTMLDialogElement>(null)
  const playerRef = useRef<any>(null)

  function open() {
    ref.current?.showModal()
  }

  function handleClose() {
    playerRef.current.plyr.stop()
  }

  return (
    <>
      <div
        className={cn(
          "flex items-center gap-2 text-sm text-neutral-500 mt-4 leading-[10px] cursor-pointer relative",
          className
        )}
        onClick={open}
        {...rest}
      >
        <div className="w-3 h-3 rounded-full bg-neutral-500/40 absolute start-0 -z-10 animate-ping duration-[4s]"></div>
        <FontAwesomeIcon icon={faInfoCircle} size="sm" />
        {t('trigger')}
      </div>

      <dialog className="modal modal-center" ref={ref} onClose={handleClose}>
        <div className="modal-box">
          <form method="dialog">
            <button className="modal-close btn" aria-label={t('close-button')}>
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </form>

          <h3 className="text-lg font-bold">{t('title')}</h3>
          <p className="py-4">{t('description')}</p>

          <Plyr
            ref={playerRef}
            source={{
              type: "video",
              sources: [{ src: "/videos/ad-radius.mp4", provider: "html5" }]
            }}
            options={{ autoplay: false, muted: false }}
          />

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">
                {t('close-button')}
              </button>
            </form>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button />
          </form>
        </div>
      </dialog>
    </>
  )
}

