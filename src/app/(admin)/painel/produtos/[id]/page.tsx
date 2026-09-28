import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminProdutoEditPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Editar Produto (ID: {params.id})</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
        {/* Same form fields as novo/page.tsx, but with defaultValues */}
        <p className="text-gray-500">Formulário de edição (similar ao de criação).</p>
        
        <div className="flex gap-4 border-t pt-6">
          <Button className="bg-primary hover:bg-primary/90 text-white">Atualizar Produto</Button>
          <Button variant="outline">Cancelar</Button>
        </div>
      </div>
    </div>
  );
}
