import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Heart, ArrowRight, DollarSign, Headphones, Wrench, Handshake, Droplets } from 'lucide-react'

// Categorias principais exibidas exatamente como no layout de referência
const categoryShortcuts = [
  {
    name: 'Piscina em Dia',
    slug: 'piscina-em-dia',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&q=80',
    alt: 'Piscina limpa com água cristalina',
  },
  {
    name: 'Produtos para Tratamento',
    slug: 'produtos-para-tratamento',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&q=80',
    alt: 'Produtos químicos para tratamento',
  },
  {
    name: 'Bombas e Filtros',
    slug: 'bombas-e-filtros',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&q=80',
    alt: 'Bomba e filtro para piscina',
  },
  {
    name: 'Aquecimento',
    slug: 'aquecimento',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=300&q=80',
    alt: 'Sistema de aquecimento',
  },
  {
    name: 'Gerador de Cloro',
    slug: 'gerador-de-cloro',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=300&q=80',
    alt: 'Gerador de cloro a base de sal',
  },
  {
    name: 'Decks e Revestimentos',
    slug: 'decks-e-revestimentos',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80',
    alt: 'Deck de madeira para piscina',
  },
  {
    name: 'Móveis Externos',
    slug: 'moveis-externos',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80',
    alt: 'Espreguiçadeiras e móveis de área externa',
  },
  {
    name: 'Parceiro Pro',
    slug: 'parceiro-pro',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80',
    alt: 'Capacete e projetos para parceiros',
    isSpecial: true,
  },
]

// 5 Produtos em destaque exatamente como na proposta visual
const featuredProducts = [
  {
    id: 'prod-1',
    name: 'Cloro Granulado 10kg',
    slug: 'cloro-granulado-10kg',
    price: 'R$ 199,90',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=350&q=80',
  },
  {
    id: 'prod-2',
    name: 'Filtro de Areia para Piscina',
    slug: 'filtro-de-areia-para-piscina',
    price: 'R$ 1.299,90',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=350&q=80',
  },
  {
    id: 'prod-3',
    name: 'Robô Aspirador de Piscina',
    slug: 'robo-aspirador-de-piscina',
    price: 'R$ 3.499,90',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=350&q=80',
  },
  {
    id: 'prod-4',
    name: 'Trocador de Calor para Piscina',
    slug: 'trocador-de-calor-para-piscina',
    price: 'R$ 4.990,00',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=350&q=80',
  },
  {
    id: 'prod-5',
    name: 'Refletor LED RGB para Piscina',
    slug: 'refletor-led-rgb-para-piscina',
    price: 'R$ 599,90',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=350&q=80',
  },
]

export default function HomePage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. HERO BANNER - Idêntico à referência */}
      <section className="relative w-full h-[460px] md:h-[540px] lg:h-[600px] overflow-hidden">
        {/* Background Image: Piscina de luxo, deck de madeira e espreguiçadeiras */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop')`,
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
        </div>

        <Container className="relative h-full flex items-center">
          <div className="max-w-xl text-white space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] tracking-tight">
              Sua solução completa <br className="hidden sm:inline" />
              para piscina e área de lazer
            </h1>
            <p className="text-sm md:text-base text-white/90 font-normal leading-relaxed max-w-lg">
              Qualidade, variedade e suporte especializado para o seu projeto, do cuidado diário aos grandes sonhos.
            </p>
            <div className="pt-2">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 bg-[#66361C] hover:bg-[#522a14] text-white text-sm md:text-base font-semibold px-6 py-3.5 rounded-md transition-all shadow-lg hover:shadow-xl hover:translate-x-0.5"
              >
                <span>Conheça nossos produtos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CATÁLOGO ORGANIZADO POR CATEGORIAS PRINCIPAIS - Faixa de 8 Atalhos Visuais */}
      <section className="py-6 md:py-8 border-b border-gray-200/80 bg-white">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {categoryShortcuts.map((cat) => (
              <Link
                key={cat.name}
                href={cat.isSpecial ? '/parceiro-pro' : `/catalogo?categoria=${cat.slug}`}
                className="group flex flex-col items-center text-center p-2.5 rounded-xl border border-gray-200/80 hover:border-[#008CB8] hover:shadow-md transition-all bg-white"
              >
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-2 relative">
                  {/* Image */}
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-[12px] font-semibold text-gray-800 group-hover:text-[#008CB8] transition-colors leading-tight line-clamp-2">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. PRODUTOS EM DESTAQUE + ANÁLISE GRATUITA DA ÁGUA (Lado a Lado) */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LADO ESQUERDO: Produtos em destaque (9 colunas no desktop) */}
            <div className="lg:col-span-9 space-y-6">
              {/* Header da seção */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#202020] tracking-tight">
                    Produtos em destaque
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Qualidade e as melhores marcas para o seu projeto.
                  </p>
                </div>
                <Link
                  href="/catalogo"
                  className="text-xs sm:text-sm font-semibold text-[#008CB8] hover:text-[#007399] flex items-center gap-1 transition-colors self-start sm:self-auto"
                >
                  <span>Ver todos os produtos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Grade de 5 produtos em destaque */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
                {featuredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-xl border border-gray-200/90 hover:border-gray-300 hover:shadow-md transition-all p-3 flex flex-col justify-between group relative"
                  >
                    {/* Botão de Favorito */}
                    <button
                      type="button"
                      aria-label="Adicionar aos favoritos"
                      className="absolute top-3 right-3 z-10 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                    </button>

                    {/* Imagem do Produto */}
                    <Link href={`/produto/${prod.slug}`} className="block">
                      <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-50 mb-3 flex items-center justify-center p-2">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Nome do Produto */}
                      <h3 className="text-xs font-medium text-gray-800 group-hover:text-[#008CB8] transition-colors line-clamp-2 h-8 leading-snug mb-2">
                        {prod.name}
                      </h3>
                    </Link>

                    {/* Preço e Botão */}
                    <div className="pt-2 border-t border-gray-100 space-y-2.5">
                      <div className="text-base font-extrabold text-[#202020]">
                        {prod.price}
                      </div>

                      <Link href={`/produto/${prod.slug}`} className="block w-full">
                        <button
                          type="button"
                          className="w-full bg-[#66361C] hover:bg-[#522a14] text-white text-[11px] font-semibold py-2 px-2 rounded-md transition-colors text-center"
                        >
                          Adicionar ao carrinho
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LADO DIREITO: Card Destaque Análise Gratuita da Água (3 colunas no desktop) */}
            <div className="lg:col-span-3">
              <div className="bg-[#008CB8] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md relative overflow-hidden h-full min-h-[460px]">
                {/* Background water ripple accent */}
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                    <Droplets className="w-6 h-6 fill-current" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                    Análise Gratuita <br />
                    da Água
                  </h3>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                    Traga sua amostra e receba uma análise completa com orientação especializada.
                  </p>
                </div>

                {/* Imagem demonstrativa de fita de teste / tubo */}
                <div className="my-6 rounded-xl overflow-hidden shadow-inner bg-white/10 p-2">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80"
                    alt="Análise de água com reagentes"
                    className="w-full h-36 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>

                <div>
                  <Link
                    href="/analise-agua"
                    className="inline-flex items-center justify-center gap-1.5 bg-white text-[#008CB8] hover:bg-gray-100 font-bold text-xs sm:text-sm py-3 px-6 rounded-full w-full transition-all shadow"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SEÇÃO PARCEIRO PRO - Exatamente como no mock visual */}
      <section className="py-10 bg-white border-t border-b border-gray-200/80">
        <Container>
          <div className="relative rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
            }}
          >
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF7F2] via-[#FBF7F2]/95 to-transparent md:w-3/4" />

            {/* Left Content Card */}
            <div className="relative p-6 sm:p-10 lg:p-12 max-w-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#66361C]">Programa Especial</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202020] tracking-tight mt-1">
                  Parceiro Pro
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Condições especiais para arquitetos, construtores, piscineiros e empresas.
                </p>
              </div>

              {/* 4 Benefícios em destaque */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {/* 1. Preços diferenciados */}
                <div className="flex flex-col items-start gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#66361C]">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <span className="text-[12px] font-semibold text-gray-800 leading-tight">
                    Preços diferenciados
                  </span>
                </div>

                {/* 2. Atendimento especializado */}
                <div className="flex flex-col items-start gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#66361C]">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <span className="text-[12px] font-semibold text-gray-800 leading-tight">
                    Atendimento especializado
                  </span>
                </div>

                {/* 3. Suporte técnico */}
                <div className="flex flex-col items-start gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#66361C]">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span className="text-[12px] font-semibold text-gray-800 leading-tight">
                    Suporte técnico
                  </span>
                </div>

                {/* 4. Parceria de longo prazo */}
                <div className="flex flex-col items-start gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#66361C]">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <span className="text-[12px] font-semibold text-gray-800 leading-tight">
                    Parceria de longo prazo
                  </span>
                </div>
              </div>

              {/* CTA Quero ser parceiro */}
              <div className="pt-2">
                <Link
                  href="/parceiro-pro"
                  className="inline-flex items-center gap-2 bg-[#66361C] hover:bg-[#522a14] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-md transition-all shadow hover:shadow-md"
                >
                  <span>Quero ser parceiro</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
