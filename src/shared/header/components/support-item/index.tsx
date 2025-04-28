'use client'

import { motion } from "framer-motion"
import { WhatsappDialog, WhatsappDialogRef } from "@/shared/whatsapp-dialog"
import { useRef } from "react"
import { cn } from "@/lib/cn"
import { useTranslations } from "next-intl"

type Props = {
  variants?: any
  className?: string
  onClick?: () => void
}

export function SupportItem({ variants, className, onClick }: Props) {
  const t = useTranslations('navigation')

  const ref = useRef<WhatsappDialogRef>(null);

  function open() {
    ref.current!.open();

    if (onClick) onClick();
  }

  return <>
    <motion.button className={cn("cursor-pointer", className)} variants={variants} onClick={open}>
      {t('support')}
    </motion.button>

    <WhatsappDialog ref={ref} />
  </>

}
