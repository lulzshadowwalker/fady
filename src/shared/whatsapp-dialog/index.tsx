'use client'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef, useImperativeHandle, useRef } from 'react'

export interface WhatsappDialogRef {
  open: () => void
  close: () => void
}

export const WhatsappDialog = forwardRef<WhatsappDialogRef>((_, ref) => {
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
          <button className="modal-close btn">
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </form>

        <h3 className="text-lg font-bold">Quick Heads-up!</h3>
        <p className="py-4">We’ll open WhatsApp so you can chat with us. See you there!</p>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Open Whatsapp</button>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </div>
    </dialog>
  )
})

WhatsappDialog.displayName = 'WhatsappDialog'
