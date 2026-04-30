"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Utensils, Glasses, Sparkles } from "lucide-react"

const businesses = [
  {
    icon: Utensils,
    number: "01",
    title: "嚥下補助事業",
    brand: "固楽米（GLOMI）",
    description:
      "嚥下機能が低下した方に向け、日本の基準を参考とした食品補助製品を提供しております。飲料や食事の状態を調整することで、誤嚥やむせのリスク軽減をサポートし、安全な食事環境の実現に寄与します。",
    color: "bg-primary",
  },
  {
    icon: Glasses,
    number: "02",
    title: "視力補助事業",
    brand: "映光（EIKOU）",
    description:
      "中高年層の視力変化に対応し、日常生活における視認性と快適性を両立した老眼鏡を展開しております。軽量性や装着感にも配慮し、読書やスマートフォン利用などの場面での利便性向上を目指しています。",
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "生活美観事業",
    brand: "青蔓（SEIMAN）",
    description:
      "脱毛や外見の変化に対応するため、自然な見た目と快適な装着感を備えたウィッグ製品を提供しております。日常生活や外出時において、安心して使用できる選択肢を提案いたします。",
    color: "bg-primary",
  },
]

export function Business() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="business" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            事業内容
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            当社は現在、以下の三つの事業分野を中心に展開しております。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={business.brand}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`${business.color} p-6`}>
                <div className="flex items-center justify-between text-white">
                  <span className="text-4xl font-bold opacity-50">
                    {business.number}
                  </span>
                  <business.icon size={40} className="opacity-80" />
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {business.title}
                </h3>
                <p className="text-secondary font-medium mb-4">
                  {business.brand}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {business.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
