import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { getProductBySlug, getProducts } from '@/app/actions/products'
import { Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return { title: 'Produto não encontrado | Piscinão Soluções' }
  return {
    title: `${product.name} | Piscinão Soluções`,
    description: product.short_description || product.description || `Compre ou solicite orçamento para ${product.name} no Piscinão Soluções.`,
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const allProducts = await getProducts()
  const relatedProducts = allProducts.filter((p: any) => p.id !== product.id).slice(0, 4)

  const variants = product.product_variants || []
  const hasVariants = variants.length > 0
  const firstVariantPrice = hasVariants ? variants[0].price_in_cents : 0

  return (
    <div className="py-8 bg-gray-50/50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate max-w-xs" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Hero Grid */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-primary/5 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-cream/40 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden border border-primary/5">
              <span className="text-8xl text-primary/30">🏊</span>
              {product.brand && (
                <span className="absolute top-4 left-4 bg-white/95 shadow-xs text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full text-gray-700">
                  {product.brand}
                </span>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-gray-100 flex items-center justify-center border-2 border-transparent hover:border-pool transition-colors cursor-pointer"
                >
                  <span className="text-xl text-gray-400">🏊</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details & CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold text-pool uppercase tracking-widest">
                  {product.brand || 'Piscinão Soluções'}
                </span>
                <Badge variant={product.status === 'published' ? 'success' : 'default'}>
                  {product.status === 'published' ? 'Disponível' : 'Sob Encomenda'}
                </Badge>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                {product.name}
              </h1>

              {product.short_description && (
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {product.short_description}
                </p>
              )}

              {/* Price / Quote Box */}
              <div className="p-4 bg-cream/30 rounded-2xl border border-primary/10 mb-6">
                <span className="text-xs text-gray-500 block mb-1">Preço estimado para orçamento:</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-primary">
                    {firstVariantPrice > 0 ? formatCurrency(firstVariantPrice) : 'Sob Consulta'}
                  </span>
                  {firstVariantPrice > 0 && (
                    <span className="text-xs text-gray-400">à vista no orçamento</span>
                  )}
                </div>
              </div>

              {/* Variants Selector */}
              {hasVariants && (
                <div className="mb-6">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                    Variação / Modelo
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {variants.map((v: any, idx: number) => (
                      <button
                        key={v.id || idx}
                        type="button"
                        className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                          idx === 0
                            ? 'border-pool bg-pool/10 text-pool'
                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {v.variant_name || v.sku || `Opção ${idx + 1}`}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
              <div className="flex gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button type="button" className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-l-lg">-</button>
                  <span className="px-3 py-2 text-sm font-semibold">1</span>
                  <button type="button" className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-r-lg">+</button>
                </div>
                <Button variant="primary" size="lg" className="flex-1">
                  Adicionar ao Orçamento
                </Button>
                <Button variant="outline" size="icon" aria-label="Favoritar" className="h-12 w-12 shrink-0">
                  <Heart className="w-5 h-5 text-gray-500" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 text-center">
                <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gray-50 text-[11px] text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-pool" />
                  <span>Garantia de Fábrica</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gray-50 text-[11px] text-gray-600">
                  <Truck className="w-4 h-4 text-pool" />
                  <span>Entrega Especializada</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gray-50 text-[11px] text-gray-600">
                  <RefreshCw className="w-4 h-4 text-pool" />
                  <span>Suporte Especializado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Technical Specs */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-primary/5 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            Descrição do Produto
          </h2>
          <div className="prose max-w-none text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              {product.description || product.short_description || 'Entre em contato com nossos especialistas para obter a ficha técnica completa deste item e recomendações personalizadas para sua piscina.'}
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p: any) => (
                <Card key={p.id} className="group overflow-hidden border-primary/10 hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-cream/40 flex items-center justify-center p-4">
                    <span className="text-3xl text-primary/30">🏊</span>
                  </div>
                  <CardContent className="p-4">
                    <Link href={`/produto/${p.slug}`}>
                      <h3 className="font-semibold text-gray-900 group-hover:text-pool transition-colors line-clamp-1 text-sm">
                        {p.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{p.brand || 'Piscinão'}</p>
                    <Link href={`/produto/${p.slug}`} className="block mt-3">
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
