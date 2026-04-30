"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "安全",
    description: "嚥下機能の低下に対応し、誤嚥やむせのリスク軽減をサポート",
  },
  {
    icon: Eye,
    title: "視認性",
    description: "視力の変化に対応し、日常生活における視認性と快適性を両立",
  },
  {
    icon: Heart,
    title: "尊厳",
    description: "外見への不安に対応し、自信を持って日常を過ごせるサポート",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            会社紹介
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            当社は「安全・視認性・尊厳」という三つの視点から、高齢者の日常生活における課題に向き合い、
            実用性と継続性を重視した商品開発と供給を行っています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-muted/50 rounded-2xl"
        >
          <p className="text-base md:text-lg text-foreground leading-relaxed text-center">
            高齢化が進む社会において、嚥下機能の低下、視力の変化、外見への不安といった問題は、
            生活の質や自立性に大きく影響を与えます。当社はこれらの課題に対し、
            日常の具体的な使用シーンに即した解決策を提供することを目指しています。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
