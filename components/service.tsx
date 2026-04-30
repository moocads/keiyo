"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Users, HeartHandshake, CheckCircle } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "使用方法の分かりやすい説明",
  },
  {
    icon: Users,
    title: "利用者ごとの適切な選択サポート",
  },
  {
    icon: HeartHandshake,
    title: "ご家族および介護現場への参考情報の提供",
  },
]

export function Service() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="service" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            サービス方針
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            当社は、製品の提供にとどまらず、実際の使用環境に即した情報提供を重視しております。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 p-6 bg-background rounded-2xl border border-border"
        >
          <CheckCircle size={24} className="text-primary flex-shrink-0" />
          <p className="text-foreground leading-relaxed">
            製品が正しく使われることにより、その価値が最大限に発揮されると考えております。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
