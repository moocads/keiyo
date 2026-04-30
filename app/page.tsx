import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Business } from "@/components/business"
import { SupplyChain } from "@/components/supply-chain"
import { Service } from "@/components/service"
import { Vision } from "@/components/vision"
import { Philosophy } from "@/components/philosophy"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Business />
      <SupplyChain />
      <Service />
      <Vision />
      <Philosophy />
      <Footer />
    </main>
  )
}
