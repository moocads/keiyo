"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-8 opacity-80">
            企業理念
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-balance">
            高齢者の生活を、より安全に、
            <br className="hidden sm:block" />
            より快適に、そしてより尊厳あるものへ。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
