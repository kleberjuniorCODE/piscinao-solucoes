'use client';
import { useState } from 'react';
import { mockCategories } from '@/lib/admin-data';
import { Toast } from '@/components/admin/toast';
import { ConfirmDialog } from '@/components/admin/confirm-dialog';
import { ImageUpload } from '@/components/admin/image-upload';
import { ColorPicker } from '@/components/admin/color-picker';
import { SlugInput } from '@/components/admin/slug-input';

export default function CategoriesPage() {
  const [categories, setCategories] = useState(mockCategories);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '', slug: '', description: '', color: '#0a8af0', active: true, order: 1, image: ''
  });

  const openModal = (category?: any) => {
    if (category) {
      setEditingId(category.id);
      setFormData(category);
    } else {
      setEditingId(null);
      setFormData({ name: '', slug: '', description: '', color: '#0a8af0', active: true, order: categories.length + 1, image: '' });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingId) {
      setCategories(categories.map(c => c.id === editingId ? { ...formData, id: editingId } : c));
      setToast({ message: 'Categoria atualizada!', type: 'success' });
    } else {
      setCategories([...categories, { ...formData, id: Date.now().toString() }]);
      setToast({ message: 'Categoria criada!', type: 'success' });
    }
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (deleteConfirm) {
      setCategories(categories.filter(c => c.id !== deleteConfirm));
      setToast({ message: 'Categoria excluída!', type: 'success' });
      setDeleteConfirm(null);
    }
  };

  const toggleStatus = (id: string) => {
    setCategories(categories.map(c => c.id === id ? { ...c, active: !c.active } : c));
  };

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Categorias</h1>
        <button onClick={() => openModal()} className="px-4 py-2 bg-[#0a8af0] text-white rounded font-medium hover:bg-blue-600 transition-colors">
          + Nova Categoria
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow transition-shadow">
            <div className="h-32 flex items-center justify-center bg-slate-100 relative" style={cat.image ? {} : { backgroundColor: cat.color }}>
              {cat.image ? (
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl font-bold text-white opacity-80">{cat.name.substring(0, 2)}</span>
              )}
              <div className="absolute top-2 right-2">
                <button 
                  onClick={() => toggleStatus(cat.id)}
                  className={`px-2 py-1 text-xs rounded-full font-medium ${cat.active ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}
                >
                  {cat.active ? 'Ativo' : 'Inativo'}
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-800 mb-1">{cat.name}</h3>
              <p className="text-xs text-slate-500 line-clamp-1">{cat.description}</p>
              
              <div className="mt-4 flex gap-2">
                <button onClick={() => openModal(cat)} className="flex-1 py-1.5 border border-slate-300 rounded text-sm text-slate-700 hover:bg-slate-50">Editar</button>
                <button onClick={() => setDeleteConfirm(cat.id)} className="px-3 py-1.5 border border-red-200 text-red-600 rounded hover:bg-red-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-lg font-bold">{editingId ? 'Editar Categoria' : 'Nova Categoria'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome da Categoria</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                  rows={2}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ColorPicker 
                  label="Cor de Fundo" 
                  value={formData.color} 
                  onChange={(color) => setFormData({...formData, color})} 
                />
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ordem de Exibição</label>
                  <input 
                    type="number" 
                    value={formData.order}
                    onChange={(e) => setFormData({...formData, order: parseInt(e.target.value) || 0})}
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                  />
                </div>
              </div>

              <ImageUpload 
                label="Imagem (Opcional)" 
                defaultImage={formData.image}
                onChange={(_, url) => setFormData({...formData, image: url || ''})} 
              />

              <div className="flex items-center gap-2 pt-2">
                <input 
                  type="checkbox" 
                  id="active-toggle"
                  checked={formData.active}
                  onChange={(e) => setFormData({...formData, active: e.target.checked})}
                  className="w-4 h-4 text-[#0a8af0] border-slate-300 rounded focus:ring-[#0a8af0]"
                />
                <label htmlFor="active-toggle" className="text-sm font-medium text-slate-700">Categoria Ativa</label>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 flex justify-end gap-3 sticky bottom-0 bg-white">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-slate-300 rounded text-slate-700 hover:bg-slate-50">Cancelar</button>
              <button onClick={handleSave} className="px-4 py-2 bg-[#0a8af0] text-white rounded hover:bg-blue-600">Salvar</button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog 
        isOpen={!!deleteConfirm}
        title="Excluir Categoria"
        message="Tem certeza que deseja excluir esta categoria? Esta ação não pode ser desfeita."
        onConfirm={handleDelete}
        onCancel={() => setDeleteConfirm(null)}
      />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
