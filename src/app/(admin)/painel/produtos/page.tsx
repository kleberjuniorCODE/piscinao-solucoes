import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function AdminProdutosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
        <Link href="/painel/produtos/novo">
          <Button className="bg-pool hover:bg-pool/90 text-white flex gap-2">
            <Plus className="h-4 w-4" /> Novo Produto
          </Button>
        </Link>
      </div>

      <div className="flex gap-4 mb-6">
        <input type="text" placeholder="Buscar por nome ou SKU..." className="flex-1 border rounded-md px-4 py-2 text-sm" />
        <select className="border rounded-md px-4 py-2 text-sm">
          <option>Todas as Categorias</option>
        </select>
        <select className="border rounded-md px-4 py-2 text-sm">
          <option>Todos os Status</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-900">
            <tr>
              <th className="px-6 py-4 font-semibold">Produto</th>
              <th className="px-6 py-4 font-semibold">Categoria</th>
              <th className="px-6 py-4 font-semibold">Preço</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 font-medium text-gray-900">Cloro Granulado 10kg</td>
              <td className="px-6 py-4">Químicos</td>
              <td className="px-6 py-4">R$ 189,90</td>
              <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Publicado</span></td>
              <td className="px-6 py-4 text-right">
                <Link href="/painel/produtos/1" className="text-pool hover:underline mr-4">Editar</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
