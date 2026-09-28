import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Placeholder check for admin role
  const isAdmin = true; // In real app, check user role metadata
  if (!isAdmin) {
    redirect('/');
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-pool">Painel Admin</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <Link href="/painel" className="block py-2 px-4 rounded hover:bg-slate-800">Dashboard</Link>
          <div className="pt-4 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Catálogo</div>
          <Link href="/painel/categorias" className="block py-2 px-4 rounded hover:bg-slate-800">Categorias</Link>
          <Link href="/painel/produtos" className="block py-2 px-4 rounded hover:bg-slate-800">Produtos</Link>
          <div className="pt-4 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Operações</div>
          <Link href="/painel/orcamentos" className="block py-2 px-4 rounded hover:bg-slate-800">Orçamentos</Link>
          <Link href="/painel/analises" className="block py-2 px-4 rounded hover:bg-slate-800">Análises</Link>
          <Link href="/painel/parceiros" className="block py-2 px-4 rounded hover:bg-slate-800">Parceiros</Link>
          <Link href="/painel/contatos" className="block py-2 px-4 rounded hover:bg-slate-800">Contatos</Link>
          <div className="pt-4 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Sistema</div>
          <Link href="/painel/blog" className="block py-2 px-4 rounded hover:bg-slate-800">Blog</Link>
          <Link href="/painel/usuarios" className="block py-2 px-4 rounded hover:bg-slate-800">Usuários</Link>
          <Link href="/painel/configuracoes" className="block py-2 px-4 rounded hover:bg-slate-800">Configurações</Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Administração</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">{user.email}</span>
            <button className="text-sm text-red-500 hover:underline">Sair</button>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
