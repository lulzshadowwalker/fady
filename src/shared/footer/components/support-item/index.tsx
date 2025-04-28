'use client'

import { WhatsappDialog, WhatsappDialogRef } from "@/shared/whatsapp-dialog"
import { useTranslations } from "next-intl";
import { useRef } from "react"

export function SupportItem() {
  const t = useTranslations('footer')
  const ref = useRef<WhatsappDialogRef>(null);

  function open() {
    ref.current!.open();
  }

  return (
    <>
      <button className="animate-underline animate-underline-secondary-content cursor-pointer" onClick={open}>
        {t('support')}
      </button>

      <WhatsappDialog ref={ref} />
    </>
  )
}
