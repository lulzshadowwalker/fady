'use client'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export interface WhatsappDialogRef {
  open: () => void
  close: () => void
}

export const WhatsappDialog = forwardRef<WhatsappDialogRef>((_, ref) => {
  const t = useTranslations('whatsapp-dialog')
  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal()
    },
    close() {
      dialogRef.current?.close()
    }
  }))

  return (
    <dialog className="modal modal-center" ref={dialogRef}>
      <div className="modal-box">
        <form method="dialog">
          <button className="modal-close btn" aria-label={t('close-dialog')}>
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </form>

        <h3 className="text-lg font-bold">{t('quick-heads-up')}</h3>
        <p className="py-4">{t('open-whatsapp-message')}</p>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faWhatsapp} className="me-1" size="lg" /> {t('open-whatsapp')}
            </button>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button aria-label={t('close-dialog')}></button>
        </form>
      </div>
    </dialog>
  )
})

WhatsappDialog.displayName = 'WhatsappDialog'
