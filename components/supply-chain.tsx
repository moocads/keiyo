"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Globe, Package, Scale } from "lucide-react"

export function SupplyChain() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="supply-chain" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            サプライチェーンと事業モデル
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            当社は、日本と中国を結ぶ双方向の供給体制を構築しております。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-muted/50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                <Globe size={24} />
              </div>
              <ArrowRight size={24} className="text-muted-foreground" />
              <span className="text-lg font-bold text-foreground">中国市場へ</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              日本基準に基づく機能性製品を中国市場へ展開
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-muted/50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground">
                <Package size={24} />
              </div>
              <ArrowRight size={24} className="text-muted-foreground" />
              <span className="text-lg font-bold text-foreground">日本市場へ</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              中国における開発・生産体制を活用し、日本市場向けにブランド製品を提供
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 p-8 bg-primary/5 rounded-2xl border border-primary/10"
        >
          <Scale size={32} className="text-primary" />
          <p className="text-foreground text-lg font-medium text-center">
            品質とコストのバランスを図りながら、継続的かつ安定的な商品供給を実現
          </p>
        </motion.div>
      </div>
    </section>
  )
}
