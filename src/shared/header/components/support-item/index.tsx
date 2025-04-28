'use client'

import { motion } from "framer-motion"
import { WhatsappDialog, WhatsappDialogRef } from "@/shared/whatsapp-dialog"
import { useRef } from "react"
import { cn } from "@/lib/cn"

type Props = {
  variants?: any
  className?: string
}

export function SupportItem({ variants, className }: Props) {
  const ref = useRef<WhatsappDialogRef>(null);

  function open() {
    ref.current!.open();
  }

  return <>
    <motion.button className={cn("cursor-pointer", className)} variants={variants} onClick={open}>
      Support
    </motion.button>

    <WhatsappDialog ref={ref} />
  </>

}
