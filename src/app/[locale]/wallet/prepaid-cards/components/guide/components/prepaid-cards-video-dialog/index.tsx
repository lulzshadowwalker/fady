'use client'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import "plyr-react/plyr.css"

export interface PrepaidCardVideoDialogRef {
  open: () => void
  close: () => void
}

const Plyr = dynamic(() => import("plyr-react"), { ssr: false })

export const PrepaidCardVideoDialog = forwardRef<PrepaidCardVideoDialogRef>((_, ref) => {
  const t = useTranslations('wallet.prepaid-cards.video-dialog')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const playerRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal()
    },
    close() {
      dialogRef.current?.close()
    }
  }))

  function handleClose() {
    playerRef.current.plyr.stop()
  }

  return (
    <dialog className="modal modal-center" ref={dialogRef} onClose={handleClose}>
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
  )
})

PrepaidCardVideoDialog.displayName = 'PrepaidCardVideoDialog'

