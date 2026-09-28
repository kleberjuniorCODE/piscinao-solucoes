import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Catálogo de Produtos | Piscinão Soluções',
  description: 'Conheça toda a linha de produtos para piscinas, equipamentos e tratamento químico.',
};
import { getProducts, getCategories } from '@/app/actions/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Search } from 'lucide-react';

export default async function CatalogoPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const products = await getProducts(searchParams);
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-6 flex items-center space-x-2 text-gray-500">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Catálogo</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-[#202020] mb-6">Catálogo de Produtos</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Categorias</h3>
            <div className="space-y-2">
              {categories.map((cat: any) => (
                <label key={cat.id} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-pool focus:ring-pool" />
                  <span className="text-sm">{cat.name}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Preço</h3>
            <input type="range" min="0" max="5000" className="w-full accent-pool" />
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input type="text" placeholder="Buscar produtos..." className="w-full pl-9 pr-4 py-2 border rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>Relevância</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
              <option>A-Z</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense fallback={<ProductGridSkeleton />}>
              {products.map((product: any) => (
                <Card key={product.id} className="flex flex-col h-full">
                  <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">Imagem</div>
                  </div>
                  <CardContent className="p-4 flex-1">
                    <Badge variant="secondary" className="bg-cream text-primary mb-2">{product.brand || 'Marca'}</Badge>
                    <Link href={`/produto/${product.slug}`}>
                      <h3 className="font-medium hover:text-primary line-clamp-2">{product.name}</h3>
                    </Link>
                    <div className="mt-2 font-semibold text-lg text-gray-900">
                      {formatCurrency(product.price || 0)}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-pool hover:bg-pool/90 text-white">Adicionar ao Orçamento</Button>
                  </CardFooter>
                </Card>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="flex flex-col h-full">
          <Skeleton className="aspect-square w-full rounded-t-lg" />
          <CardContent className="p-4 flex-1 space-y-3">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-6 w-24" />
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
