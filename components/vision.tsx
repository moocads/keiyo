"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Megaphone, Layers } from "lucide-react"

export function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="vision" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            今後の展望
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp size={32} className="text-primary" />
            </div>
            <h3 className="font-medium text-foreground">商品ラインナップの拡充</h3>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Megaphone size={32} className="text-secondary" />
            </div>
            <h3 className="font-medium text-foreground">情報発信の強化</h3>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Layers size={32} className="text-primary" />
            </div>
            <h3 className="font-medium text-foreground">サービス機能の強化</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 lg:p-12 bg-muted/50 rounded-2xl text-center"
        >
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            製品と情報を組み合わせた総合的なサポートを通じて、
            より多くの方に安心と利便性を提供できる体制を構築してまいります。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
