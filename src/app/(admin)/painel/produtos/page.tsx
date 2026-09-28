'use client';
import { useState } from 'react';
import Link from 'next/link';
import { mockProducts, mockCategories } from '@/lib/admin-data';
import { Toast } from '@/components/admin/toast';

export default function ProductsPage() {
  const [products, setProducts] = useState(mockProducts);
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = catFilter ? p.categoryId === catFilter : true;
    const matchesStatus = statusFilter ? p.status === statusFilter : true;
    return matchesSearch && matchesCat && matchesStatus;
  });

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(filteredProducts.map(p => p.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkAction = (action: 'activate' | 'deactivate') => {
    if (selectedIds.length === 0) return;
    
    setProducts(products.map(p => {
      if (selectedIds.includes(p.id)) {
        return { ...p, status: action === 'activate' ? 'Ativo' : 'Inativo' };
      }
      return p;
    }));
    
    setToast({ 
      message: `${selectedIds.length} produtos ${action === 'activate' ? 'ativados' : 'desativados'}!`, 
      type: 'success' 
    });
    setSelectedIds([]);
  };

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Produtos</h1>
        <Link href="/painel/produtos/novo" className="px-4 py-2 bg-[#0a8af0] text-white rounded font-medium hover:bg-blue-600 transition-colors text-center">
          + Novo Produto
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Buscar por nome..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
            />
          </div>
          <div className="w-full md:w-48">
            <select 
              value={catFilter}
              onChange={(e) => setCatFilter(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0] bg-white"
            >
              <option value="">Todas as Categorias</option>
              {mockCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="w-full md:w-48">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0] bg-white"
            >
              <option value="">Todos os Status</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
        </div>

        {selectedIds.length > 0 && (
          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">{selectedIds.length} selecionados</span>
            <div className="flex gap-2">
              <button onClick={() => handleBulkAction('activate')} className="text-sm px-3 py-1.5 bg-green-100 text-green-700 rounded hover:bg-green-200">Ativar</button>
              <button onClick={() => handleBulkAction('deactivate')} className="text-sm px-3 py-1.5 bg-slate-200 text-slate-700 rounded hover:bg-slate-300">Desativar</button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
                <th className="p-4 w-12">
                  <input type="checkbox" checked={selectedIds.length === filteredProducts.length && filteredProducts.length > 0} onChange={handleSelectAll} className="rounded border-slate-300 text-[#0a8af0] focus:ring-[#0a8af0]"/>
                </th>
                <th className="p-4 font-medium">Produto</th>
                <th className="p-4 font-medium">Categoria</th>
                <th className="p-4 font-medium">Preço (R$)</th>
                <th className="p-4 font-medium">Estoque</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">Nenhum produto encontrado.</td>
                </tr>
              ) : (
                filteredProducts.map(product => (
                  <tr key={product.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <input type="checkbox" checked={selectedIds.includes(product.id)} onChange={() => handleSelect(product.id)} className="rounded border-slate-300 text-[#0a8af0] focus:ring-[#0a8af0]"/>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-slate-200 flex-shrink-0 overflow-hidden flex items-center justify-center">
                          {product.image ? <img src={product.image} alt="" className="w-full h-full object-cover"/> : <span className="text-slate-400 text-xs">Sem img</span>}
                        </div>
                        <div className="font-medium text-slate-800">{product.name}</div>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600 text-sm">{product.categoryName}</td>
                    <td className="p-4 text-slate-800 font-medium">R$ {product.price.toFixed(2)}</td>
                    <td className="p-4 text-slate-600">{product.stock} un.</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${product.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Link href={`/painel/produtos/${product.id}`} className="text-[#0a8af0] hover:underline text-sm font-medium">Editar</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
