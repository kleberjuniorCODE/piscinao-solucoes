'use client';
import { mockProducts, mockCategories } from '@/lib/admin-data';
import { StatCard } from '@/components/admin/stat-card';
import Link from 'next/link';

export default function DashboardPage() {
  const activeProducts = mockProducts.filter(p => p.status === 'Ativo').length;
  
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total de Produtos" 
          value={mockProducts.length} 
          trend={{ value: '12%', positive: true }}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>}
        />
        <StatCard 
          title="Produtos Ativos" 
          value={activeProducts} 
        />
        <StatCard 
          title="Categorias" 
          value={mockCategories.length} 
        />
        <StatCard 
          title="Orçamentos Pendentes" 
          value="5" 
          trend={{ value: '2', positive: false }}
        />
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Ações Rápidas</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/painel/produtos/novo" className="px-4 py-2 bg-[#0a8af0] text-white rounded hover:bg-blue-600 transition-colors font-medium">
            + Novo Produto
          </Link>
          <Link href="/painel/categorias" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded hover:bg-slate-50 transition-colors font-medium">
            Gerenciar Categorias
          </Link>
          <Link href="/painel/home" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded hover:bg-slate-50 transition-colors font-medium">
            Editar Home Page
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800">Atividade Recente</h2>
        </div>
        <div className="p-0">
          <ul className="divide-y divide-slate-100">
            {[1, 2, 3].map((_, i) => (
              <li key={i} className="px-6 py-4 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#0a8af0] mt-2"></div>
                <div>
                  <p className="text-sm text-slate-800 font-medium">Produto "Filtro de Areia Dancor" atualizado</p>
                  <p className="text-xs text-slate-500 mt-1">Há {i + 1} horas por Admin</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
