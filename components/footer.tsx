import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KEIYO-logo-%E6%BA%90%E6%96%87%E4%BB%B6-04-Yzrzknni4ZsrWzMf6O4T6IxtKAx5zL.jpg"
              alt="株式会社慶余 KEIYO"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              会社紹介
            </a>
            <a href="#business" className="text-muted-foreground hover:text-primary transition-colors">
              事業内容
            </a>
            <a href="#supply-chain" className="text-muted-foreground hover:text-primary transition-colors">
              サプライチェーン
            </a>
            <a href="#service" className="text-muted-foreground hover:text-primary transition-colors">
              サービス方針
            </a>
            <a href="#vision" className="text-muted-foreground hover:text-primary transition-colors">
              今後の展望
            </a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 株式会社慶余 KEIYO Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
