import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { getPosts } from '@/app/actions/blog';

export const metadata: Metadata = {
  title: 'Blog | Piscinão Soluções',
};

export default async function BlogPage({ searchParams }: { searchParams: { page?: string, search?: string } }) {
  const posts = await getPosts(searchParams.page, searchParams.search);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Blog Piscinão</h1>
        <div className="relative">
          <input type="text" placeholder="Buscar artigos..." className="border rounded-md px-4 py-2" />
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Card key={post.id} className="flex flex-col">
            <div className="aspect-video bg-gray-200 w-full"></div>
            <CardContent className="p-4 flex flex-col flex-1">
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.published_at).toLocaleDateString('pt-BR')}
              </p>
              <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto">
                <Link href={`/blog/${post.slug}`} className="text-pool font-semibold hover:underline">
                  Ler mais &rarr;
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Pagination Placeholder */}
      <div className="mt-12 flex justify-center space-x-2">
        <button className="px-4 py-2 border rounded-md disabled:opacity-50">Anterior</button>
        <button className="px-4 py-2 border rounded-md">Próximo</button>
      </div>
    </div>
  );
}
