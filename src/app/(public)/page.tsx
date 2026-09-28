import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils'
import { Droplets, Star, ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Banner */}
      <section className="relative w-full h-[600px] flex items-center">
        <div className="absolute inset-0 bg-primary/80 z-10" /> {/* Fallback overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576013551627-11971f36e429?q=80&w=2070&auto=format&fit=crop")' }}
        />
        <Container className="relative z-20 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Tudo para sua piscina em um só lugar
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Equipamentos, produtos químicos e serviços especializados para manter sua água sempre cristalina e saudável.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold" asChild>
                <Link href="/catalogo">Ver Catálogo</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/analise-agua">Análise Gratuita</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Category Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nossas Categorias</h2>
            <p className="text-gray-600">Encontre o que você precisa rapidamente</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Químicos', count: 124, slug: 'quimicos', icon: '🧪' },
              { name: 'Equipamentos', count: 56, slug: 'equipamentos', icon: '⚙️' },
              { name: 'Acessórios', count: 89, slug: 'acessorios', icon: '🛟' },
              { name: 'Aquecimento', count: 23, slug: 'aquecimento', icon: '☀️' },
              { name: 'Iluminação', count: 45, slug: 'iluminacao', icon: '💡' },
              { name: 'Lazer', count: 34, slug: 'lazer', icon: '🏖️' }
            ].map((cat) => (
              <Link key={cat.slug} href={`/catalogo/${cat.slug}`} className="group">
                <Card className="h-full hover:border-pool transition-colors text-center p-6 flex flex-col items-center justify-center gap-2">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-pool">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.count} produtos</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Featured Products */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Produtos em Destaque</h2>
              <p className="text-gray-600">As melhores ofertas para sua piscina</p>
            </div>
            <Link href="/catalogo" className="hidden sm:flex items-center text-pool hover:text-primary transition-colors font-medium">
              Ver todos <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="group overflow-hidden flex flex-col">
                <div className="relative aspect-square bg-gray-100">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge variant="pool">Destaque</Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                    [Imagem do Produto {i}]
                  </div>
                </div>
                <CardContent className="p-4 flex flex-col flex-1">
                  <div className="text-xs text-gray-500 mb-1">Marca Exemplo</div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    Cloro Granulado MultiAção 10kg Balde
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{formatCurrency(29990)}</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Adicionar ao Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4: Water Analysis CTA Banner */}
      <section className="relative bg-pool text-white py-24 overflow-hidden">
        {/* Decorative Wave SVG (simplified) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-2xl mb-4">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Análise Gratuita da Água da sua Piscina
              </h2>
              <p className="text-pool-100 text-lg">
                Traga uma amostra da água da sua piscina em uma de nossas lojas. Nossos especialistas farão uma análise computadorizada e te entregarão um laudo completo com o tratamento ideal.
              </p>
              <Button size="lg" className="bg-white text-pool hover:bg-gray-100 font-bold mt-4" asChild>
                <Link href="/analise-agua">Solicitar Análise</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-square bg-white/10 rounded-full flex items-center justify-center border-8 border-white/20">
                <span className="text-white/50 text-xl font-medium">[Imagem Análise]</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Decorative Wave SVG (bottom) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Section 5: About/Institutional */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Foto da Loja/Equipe]
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Mais de 15 anos cuidando do seu lazer
              </h2>
              <div className="w-20 h-1 bg-pool rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Piscinão Soluções nasceu com uma missão clara: tornar o cuidado com a sua piscina mais fácil, eficiente e econômico.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe de especialistas está sempre pronta para oferecer não apenas produtos, mas soluções reais para os desafios que você enfrenta na manutenção da sua água.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-bold text-pool mb-2">+15k</div>
                  <div className="text-sm text-gray-600 font-medium">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pool mb-2">5</div>
                  <div className="text-sm text-gray-600 font-medium">Lojas Físicas</div>
                </div>
              </div>
              <Button variant="outline" className="mt-8" asChild>
                <Link href="/sobre">Conhecer mais da nossa história</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">O que dizem nossos clientes</h2>
            <p className="text-gray-600">A satisfação de quem confia na Piscinão Soluções</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white border-none shadow-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "O atendimento é excepcional. Fizeram a análise da minha água e me indicaram exatamente o que eu precisava. Minha piscina nunca esteve tão limpa!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                      J
                    </div>
                    <div>
                      <div className="font-bold text-primary">João Silva</div>
                      <div className="text-sm text-gray-500">Cliente há 2 anos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 7: Blog Preview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Dicas do Especialista</h2>
              <p className="text-gray-600">Aprenda a cuidar melhor da sua piscina</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex text-pool" asChild>
              <Link href="/blog">Ver todos os artigos <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    [Imagem Blog {i}]
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-pool font-semibold mb-2">Manutenção</div>
                  <h3 className="font-bold text-xl text-primary mb-3">
                    Como preparar sua piscina para o inverno
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Descubra os passos essenciais para proteger sua piscina durante a estação mais fria do ano e evitar problemas.
                  </p>
                  <Link href={`/blog/post-${i}`} className="text-pool font-medium hover:underline inline-flex items-center">
                    Ler mais <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="w-full" asChild>
               <Link href="/blog">Ver todos os artigos</Link>
            </Button>
          </div>
        </Container>
      </section>

    </>
  )
}
