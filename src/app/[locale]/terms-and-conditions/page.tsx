'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-secondary text-secondary-content">
      <div className="container mx-auto pt-12 pb-30">
        {/* Page Title */}
        <h1 className="max-w-prose text-center font-semibold leading-22 text-[5.3rem] mb-12 mx-auto max-lg:text-4xl max-lg:mb-0">
          Terms &amp; Conditions
        </h1>
        <p className="max-w-prose text-center text-[2rem] font-medium leading-12 mx-auto max-lg:text-3xl">
          Please read these terms and conditions carefully before using our service.
        </p>

        {/* Terms Sections */}
        <motion.div
          className="mt-12 space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={itemVariants}>
            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
              1. Introduction
            </h2>
            <p className="text-2xl font-medium leading-7 max-lg:text-xl">
              Welcome to Fady. By accessing or using our platform, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please discontinue use immediately.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
              2. Use of Service
            </h2>
            <p className="text-2xl font-medium leading-7 max-lg:text-xl">
              You must use Fady in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
              3. User Responsibilities
            </h2>
            <p className="text-2xl font-medium leading-7 max-lg:text-xl">
              You agree not to misuse our services by interfering with their normal operation or attempting to access them using a method other than through the interface provided by us.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
              4. Intellectual Property
            </h2>
            <p className="text-2xl font-medium leading-7 max-lg:text-xl">
              All content, logos, and trademarks appearing on Fady are the property of their respective owners. You may not reproduce, distribute, or use any of the content without prior written permission.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
              5. Limitation of Liability
            </h2>
            <p className="text-2xl font-medium leading-7 max-lg:text-xl">
              Fady will not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
              6. Governing Law
            </h2>
            <p className="text-2xl font-medium leading-7 max-lg:text-xl">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Fady is headquartered.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
              7. Changes
            </h2>
            <p className="text-2xl font-medium leading-7 max-lg:text-xl">
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting. Your continued use of the service constitutes acceptance of the updated Terms.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="font-semibold text-[2.5rem] leading-10 mb-4 max-lg:text-2xl">
              8. Contact Us
            </h2>
            <p className="text-2xl font-medium leading-7 max-lg:text-xl">
              If you have any questions or concerns about these Terms, please <Link href="/contact" className="underline">contact our support team</Link>.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </main>
  )
}
