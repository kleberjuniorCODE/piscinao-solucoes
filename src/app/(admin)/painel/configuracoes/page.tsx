import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminConfiguracoesPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900">Configurações do Site</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2">Informações de Contato</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">WhatsApp</label>
              <Input defaultValue="(11) 9999-9999" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email de Contato</label>
              <Input defaultValue="contato@piscinaosolucoes.com.br" />
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <Button className="bg-primary hover:bg-primary/90 text-white">Salvar Configurações</Button>
        </div>
      </div>
    </div>
  );
}
