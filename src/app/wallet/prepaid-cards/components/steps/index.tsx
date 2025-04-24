'use client';

import background from "@/assets/logo-background.png";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = ['Buy a card', 'Open the app', 'Enter the code', 'Done!'];

export function Steps() {
  return (
    <section className="min-h-screen container mx-auto relative pt-12">
      <Image src={background} alt="" fill className="-z-50" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="uppercase font-semibold text-center max-w-[740px] mx-auto leading-[90px] text-[5.3rem] mb-8 max-lg:text-4xl max-lg:mb-2"
      >
        Charge Your Wallet
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="max-w-prose text-center text-[2rem] font-medium leading-12 mx-auto max-lg:text-3xl"
      >
        Use prepaid recharge cards to top up your wallet easily
      </motion.p>

      <ul className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 mt-26 px-4">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.5, ease: "easeOut" }}
            className="card basis-0 grow max-w-full flex flex-col items-center justify-center gap-4 min-w-fit"
          >
            <span className="font-semibold text-[3rem] leading-9 text-center">{index + 1}</span>
            <span className="text-[1.375rem] leading-9 text-center">{step}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
