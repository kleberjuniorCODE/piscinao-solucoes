import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Nav */}
      <aside className="w-full md:w-64 shrink-0">
        <h2 className="font-bold text-xl mb-4 text-primary">Minha Conta</h2>
        <nav className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2 overflow-x-auto pb-4 md:pb-0">
          <Link href="/minha-conta" className="p-2 rounded-md hover:bg-cream text-gray-700 font-medium whitespace-nowrap">Meus Dados</Link>
          <Link href="/minha-conta/enderecos" className="p-2 rounded-md hover:bg-cream text-gray-700 font-medium whitespace-nowrap">Endereços</Link>
          <Link href="/minha-conta/orcamentos" className="p-2 rounded-md hover:bg-cream text-gray-700 font-medium whitespace-nowrap">Meus Orçamentos</Link>
          <Link href="/minha-conta/analises" className="p-2 rounded-md hover:bg-cream text-gray-700 font-medium whitespace-nowrap">Minhas Análises</Link>
          <Link href="/minha-conta/favoritos" className="p-2 rounded-md hover:bg-cream text-gray-700 font-medium whitespace-nowrap">Favoritos</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
