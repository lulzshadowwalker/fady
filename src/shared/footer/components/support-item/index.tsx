'use client'

import { WhatsappDialog, WhatsappDialogRef } from "@/shared/whatsapp-dialog"
import { useRef } from "react"

export function SupportItem() {
  const ref = useRef<WhatsappDialogRef>(null);

  function open() {
    ref.current!.open();
  }

  return (
    <>
      <button className="animate-underline animate-underline-secondary-content cursor-pointer" onClick={open}>
        Support
      </button>

      <WhatsappDialog ref={ref} />
    </>
  )
}
