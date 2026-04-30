"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-muted/50 to-background pt-16 lg:pt-20 bg-[65%] sm:bg-top" style={{ backgroundImage: `url('/images/hero-banner.jpg')`, backgroundSize: 'cover',  backgroundAttachment: 'fixed'}}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col sm:items-start items-center text-center sm:text-left w-full sm:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-6"
          >
            高齢者の生活を、より安全に、
            <br className="hidden sm:block" />
            より快適に、そしてより<br/><span className="text-secondary">尊厳ある</span>ものへ。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/95 max-w-3xl leading-relaxed text-pretty rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-xl shadow-lg"
          >
            株式会社慶余は、日本を拠点に中日両市場を対象とし、
            高齢者の生活の質向上に貢献する製品およびサービスの提供に取り組んでおります。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center text-white hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">詳しく見る</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
