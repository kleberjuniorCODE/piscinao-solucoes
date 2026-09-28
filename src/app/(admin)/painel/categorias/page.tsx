import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function AdminCategoriasPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Categorias</h1>
        <Button className="bg-pool hover:bg-pool/90 text-white flex gap-2">
          <Plus className="h-4 w-4" /> Nova Categoria
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-900">
            <tr>
              <th className="px-6 py-4 font-semibold">Nome</th>
              <th className="px-6 py-4 font-semibold">Slug</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Cloros e Químicos</td>
              <td className="px-6 py-4">cloros-e-quimicos</td>
              <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Ativo</span></td>
              <td className="px-6 py-4 text-right">
                <button className="text-pool hover:underline mr-4">Editar</button>
                <button className="text-red-500 hover:underline">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
