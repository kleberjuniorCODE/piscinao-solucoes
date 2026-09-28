import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminProdutoNovoPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Novo Produto</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2 col-span-2">
            <label className="text-sm font-medium">Nome do Produto</label>
            <Input name="name" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Categoria</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Selecione...</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Marca</label>
            <Input name="brand" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Descrição Curta</label>
          <textarea className="w-full border rounded-md px-3 py-2" rows={2}></textarea>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Descrição Completa</label>
          <textarea className="w-full border rounded-md px-3 py-2" rows={5}></textarea>
        </div>
        
        <div className="flex gap-4 border-t pt-6">
          <Button className="bg-primary hover:bg-primary/90 text-white">Salvar Produto</Button>
          <Button variant="outline">Cancelar</Button>
        </div>
      </div>
    </div>
  );
}
