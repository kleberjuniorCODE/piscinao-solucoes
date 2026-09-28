'use client';
import { useState } from 'react';
import { Toast } from '@/components/admin/toast';
import { mockSiteSettings } from '@/lib/admin-data';

export default function SettingsPage() {
  const [settings, setSettings] = useState(mockSiteSettings);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setToast({ message: 'Configurações salvas com sucesso!', type: 'success' });
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Configurações do Site</h1>
        <button onClick={handleSave} className="px-4 py-2 bg-[#0a8af0] text-white rounded font-medium hover:bg-blue-600 transition-colors">
          Salvar Configurações
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <section className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Informações da Loja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome da Loja</label>
              <input 
                type="text" 
                value={settings.store_name}
                onChange={(e) => setSettings({...settings, store_name: e.target.value})}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">E-mail de Contato</label>
              <input 
                type="email" 
                value={settings.email}
                onChange={(e) => setSettings({...settings, email: e.target.value})}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Telefone Fixo</label>
              <input 
                type="text" 
                value={settings.phone}
                onChange={(e) => setSettings({...settings, phone: e.target.value})}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp (Apenas números, com DDI)</label>
              <input 
                type="text" 
                value={settings.whatsapp}
                onChange={(e) => setSettings({...settings, whatsapp: e.target.value})}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Endereço Completo</label>
              <input 
                type="text" 
                value={settings.address}
                onChange={(e) => setSettings({...settings, address: e.target.value})}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Redes Sociais (Links completos)</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Instagram URL</label>
              <input 
                type="url" 
                value={settings.instagram}
                onChange={(e) => setSettings({...settings, instagram: e.target.value})}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Facebook URL</label>
              <input 
                type="url" 
                value={settings.facebook}
                onChange={(e) => setSettings({...settings, facebook: e.target.value})}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">YouTube URL</label>
              <input 
                type="url" 
                value={settings.youtube}
                onChange={(e) => setSettings({...settings, youtube: e.target.value})}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Rodapé</h2>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Texto de Direitos Autorais</label>
            <input 
              type="text" 
              value={settings.footer_text}
              onChange={(e) => setSettings({...settings, footer_text: e.target.value})}
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#0a8af0]"
            />
          </div>
        </section>
      </form>
      
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
