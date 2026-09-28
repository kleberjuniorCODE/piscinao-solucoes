import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  let userEmail = 'admin@piscinaosolucoes.com.br';
  
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.email) {
      userEmail = user.email;
    }
  } catch {
    // Em ambiente de teste / demo local, permite navegação direta
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800">
          <Link href="/painel" className="text-xl font-black tracking-wide text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0a8af0]"></span>
            Painel Piscinão
          </Link>
          <span className="text-xs text-slate-400 block mt-1">Gestor do Site & Catálogo</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <Link href="/painel" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            📊 Dashboard
          </Link>
          <Link href="/painel/home" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            🏠 Editar Home & Banners
          </Link>
          
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Catálogo & Fotos</div>
          <Link href="/painel/categorias" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            🗂️ Categorias & Imagens
          </Link>
          <Link href="/painel/produtos" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            📦 Produtos & Preços
          </Link>
          <Link href="/painel/produtos/novo" className="block py-2.5 px-4 rounded-lg text-sm font-medium text-emerald-400 hover:bg-slate-800 transition">
            ➕ Adicionar Produto
          </Link>
          
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Operações</div>
          <Link href="/painel/orcamentos" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            📋 Orçamentos
          </Link>
          <Link href="/painel/analises" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            🧪 Análises de Água
          </Link>
          <Link href="/painel/parceiros" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            🤝 Parceiro Pro
          </Link>
          <Link href="/painel/contatos" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            ✉️ Mensagens
          </Link>
          
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Configurações</div>
          <Link href="/painel/configuracoes" className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            ⚙️ Ajustes da Loja
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
          <Link href="/" target="_blank" className="text-[#0a8af0] hover:underline flex items-center gap-1 font-semibold">
            Visualizar site ↗
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto flex flex-col">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-gray-800">Painel Administrativo</h1>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
              Ambiente Ativo
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">{userEmail}</span>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 border px-3 py-1.5 rounded-md hover:bg-gray-50">
              Ir para o Site
            </Link>
          </div>
        </header>
        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
