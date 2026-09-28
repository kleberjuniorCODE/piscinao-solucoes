'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ImageUpload } from '@/components/admin/image-upload';
import { SlugInput } from '@/components/admin/slug-input';
import { Toast } from '@/components/admin/toast';
import { mockCategories, mockProducts } from '@/lib/admin-data';

interface ProductFormProps {
  params: Promise<{ id?: string }>;
}

export default function ProductEditorPage({ params }: ProductFormProps) {
  const resolvedParams = use(params);
  const isEdit = !!resolvedParams?.id;
  const router = useRouter();
  
  // Find existing product if edit mode
  const existingProduct = isEdit ? mockProducts.find(p => p.id === resolvedParams.id) : null;
  
  const [formData, setFormData] = useState({
    name: existingProduct?.name || '',
    slug: existingProduct?.slug || '',
    categoryId: existingProduct?.categoryId || '',
    price: existingProduct?.price || 0,
    stock: existingProduct?.stock || 0,
    description: '',
    status: existingProduct?.status || 'Ativo',
    image: existingProduct?.image || ''
  });
  
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setToast({ message: isEdit ? 'Produto atualizado!' : 'Produto criado!', type: 'success' });
    setTimeout(() => {
      router.push('/painel/produtos');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/painel/produtos" className="text-slate-400 hover:text-slate-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">
          {isEdit ? 'Editar Produto' : 'Novo Produto'}
        </h1>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Informações Gerais</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Produto</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                />
              </div>

              <SlugInput 
                sourceText={formData.name} 
                value={formData.slug} 
                onChange={(slug) => setFormData({...formData, slug})} 
              />

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Descrição</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={6}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                ></textarea>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Imagens</h2>
              <ImageUpload 
                defaultImage={formData.image}
                onChange={(_, url) => setFormData({...formData, image: url || ''})}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Organização & Preço</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select 
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0] bg-white"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Categoria</label>
                <select 
                  value={formData.categoryId}
                  onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0] bg-white"
                >
                  <option value="">Selecione...</option>
                  {mockCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Preço (R$)</label>
                <input 
                  type="number" 
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value) || 0})}
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Estoque</label>
                <input 
                  type="number" 
                  min="0"
                  value={formData.stock}
                  onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value) || 0})}
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <button type="submit" className="w-full py-3 bg-[#0a8af0] text-white rounded font-medium hover:bg-blue-600 transition-colors shadow">
                Salvar Produto
              </button>
              <Link href="/painel/produtos" className="w-full py-3 border border-slate-300 text-slate-700 rounded font-medium hover:bg-slate-50 transition-colors text-center">
                Cancelar
              </Link>
            </div>
          </div>
        </div>
      </form>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
