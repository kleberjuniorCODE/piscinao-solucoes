import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatCurrency } from '@/lib/utils'
import { getCategoryBySlug, getProducts } from '@/app/actions/products'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  if (!category) return { title: 'Categoria não encontrada | Piscinão Soluções' }
  return {
    title: `${category.name} | Piscinão Soluções`,
    description: category.description || `Produtos da categoria ${category.name} no Piscinão Soluções.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = await getProducts()
  // Filter products by category id if available
  const categoryProducts = products.filter((p: any) => p.category_id === category.id)

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
            <li className="text-gray-900 font-medium" aria-current="page">{category.name}</li>
          </ol>
        </nav>

        {/* Header da Categoria */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-primary/5 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{category.name}</h1>
                <Badge variant="pool">{categoryProducts.length} itens</Badge>
              </div>
              {category.description && (
                <p className="text-gray-600 mt-2 max-w-2xl text-sm leading-relaxed">
                  {category.description}
                </p>
              )}
            </div>
            <Link href="/catalogo">
              <Button variant="outline" size="sm">Ver Todas as Categorias</Button>
            </Link>
          </div>
        </div>

        {/* Grid de Produtos */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg mb-4">Nenhum produto cadastrado nesta categoria no momento.</p>
            <Link href="/catalogo">
              <Button variant="primary">Explorar Todo o Catálogo</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product: any) => (
              <Card key={product.id} className="group overflow-hidden border-primary/10 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="aspect-square bg-cream/40 flex items-center justify-center p-6 relative">
                    <span className="text-4xl text-primary/40 font-bold">🏊</span>
                    {product.brand && (
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-gray-700">
                        {product.brand}
                      </span>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <Link href={`/produto/${product.slug}`}>
                      <h3 className="font-semibold text-gray-900 group-hover:text-pool transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    {product.short_description && (
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {product.short_description}
                      </p>
                    )}
                  </CardContent>
                </div>
                <div className="p-4 pt-0">
                  <div className="mb-3">
                    <span className="text-xs text-gray-400 block">Preço sob consulta</span>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(0)}
                    </span>
                  </div>
                  <Link href={`/produto/${product.slug}`} className="block w-full">
                    <Button variant="primary" size="sm" className="w-full">
                      Solicitar Orçamento
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}
