'use client'

import { motion } from "framer-motion"
import { WhatsappDialog, WhatsappDialogRef } from "@/shared/whatsapp-dialog"
import { useRef } from "react"

type Props = {
  variants?: any
}

export function SupportItem({ variants }: Props) {
  const ref = useRef<WhatsappDialogRef>(null);

  function open() {
    ref.current!.open();
  }

  return <>
    <motion.button className="animate-underline cursor-pointer" variants={variants} onClick={open}>
      Support
    </motion.button>

    <WhatsappDialog ref={ref} />
  </>

}
