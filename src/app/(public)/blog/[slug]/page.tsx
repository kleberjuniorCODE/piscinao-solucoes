import { Metadata } from 'next';
import { getPostBySlug } from '@/app/actions/blog';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} | Piscinão Soluções` };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="aspect-[21/9] bg-gray-200 w-full mb-8 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">Capa do Post</div>
      </div>
      
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
          <span>Por {post.author || 'Equipe Piscinão'}</span>
          <span>•</span>
          <time>{new Date(post.published_at).toLocaleDateString('pt-BR')}</time>
          <span>•</span>
          <span>5 min de leitura</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-headings:text-primary">
        <div dangerouslySetInnerHTML={{ __html: post.content || '<p>Conteúdo do artigo...</p>' }} />
      </div>

      <div className="mt-12 pt-8 border-t flex justify-between items-center">
        <span className="font-semibold text-gray-700">Compartilhe:</span>
        <div className="flex gap-4">
          <button className="text-pool hover:text-pool/80 font-medium">Copiar Link</button>
          <button className="text-[#25D366] hover:text-[#20b858] font-medium">WhatsApp</button>
        </div>
      </div>
    </article>
  );
}
