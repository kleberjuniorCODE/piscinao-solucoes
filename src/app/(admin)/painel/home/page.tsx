'use client';
import { useState } from 'react';
import { ImageUpload } from '@/components/admin/image-upload';
import { Toast } from '@/components/admin/toast';
import { mockSiteSettings, mockCategories } from '@/lib/admin-data';

export default function HomeEditorPage() {
  const [settings, setSettings] = useState(mockSiteSettings);
  const [categories, setCategories] = useState(mockCategories);
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const handleSave = () => {
    // Here it would save to Supabase
    setToast({ message: 'Home atualizada com sucesso!', type: 'success' });
  };

  const moveCategory = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index > 0) {
      const newCats = [...categories];
      const temp = newCats[index];
      newCats[index] = newCats[index - 1];
      newCats[index - 1] = temp;
      setCategories(newCats);
    } else if (direction === 'down' && index < categories.length - 1) {
      const newCats = [...categories];
      const temp = newCats[index];
      newCats[index] = newCats[index + 1];
      newCats[index + 1] = temp;
      setCategories(newCats);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Editor da Página Inicial</h1>
        <button onClick={handleSave} className="px-4 py-2 bg-[#0a8af0] text-white rounded font-medium hover:bg-blue-600 transition-colors">
          Salvar Alterações
        </button>
      </div>

      <div className="space-y-6">
        {/* Hero Section Editor */}
        <section className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b">Banner Principal (Hero)</h2>
          
          <div className="grid gap-6">
            <ImageUpload 
              label="Imagem de Fundo" 
              defaultImage={settings.hero_image_url}
              onChange={(file, url) => setSettings({...settings, hero_image_url: url || ''})}
            />
            
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
                <input 
                  type="text" 
                  value={settings.hero_title}
                  onChange={(e) => setSettings({...settings, hero_title: e.target.value})}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subtítulo</label>
                <textarea 
                  value={settings.hero_subtitle}
                  onChange={(e) => setSettings({...settings, hero_subtitle: e.target.value})}
                  rows={3}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Texto do Botão</label>
                <input 
                  type="text" 
                  value={settings.hero_cta_text}
                  onChange={(e) => setSettings({...settings, hero_cta_text: e.target.value})}
                  className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Order Editor */}
        <section className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b">Ordem das Categorias na Home</h2>
          <p className="text-sm text-slate-500 mb-4">Arraste ou use as setas para definir a ordem em que as categorias aparecem na página inicial.</p>
          
          <div className="space-y-2">
            {categories.map((cat, index) => (
              <div key={cat.id} className="flex items-center gap-4 p-3 border border-slate-200 rounded bg-slate-50">
                <div className="flex flex-col gap-1">
                  <button 
                    onClick={() => moveCategory(index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-slate-400 hover:text-slate-800 disabled:opacity-30"
                  >
                    ▲
                  </button>
                  <button 
                    onClick={() => moveCategory(index, 'down')}
                    disabled={index === categories.length - 1}
                    className="p-1 text-slate-400 hover:text-slate-800 disabled:opacity-30"
                  >
                    ▼
                  </button>
                </div>
                <div className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-xs" style={{backgroundColor: cat.color}}>
                  {cat.name.substring(0,2)}
                </div>
                <span className="font-medium text-slate-700">{cat.name}</span>
                <span className="ml-auto text-xs text-slate-400">Ordem: {index + 1}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
