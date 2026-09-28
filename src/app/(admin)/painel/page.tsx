export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Total de Produtos</h3>
          <div className="text-3xl font-bold text-gray-900">124</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Orçamentos Pendentes</h3>
          <div className="text-3xl font-bold text-gray-900">12</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Análises Pendentes</h3>
          <div className="text-3xl font-bold text-gray-900">5</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Parceiros Pendentes</h3>
          <div className="text-3xl font-bold text-gray-900">3</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Atividade Recente</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="w-2 h-2 rounded-full bg-pool"></span>
            <span className="text-gray-500">Hoje, 14:30</span>
            <span className="font-medium text-gray-900">Novo orçamento recebido (ORC-2023-015)</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-gray-500">Ontem, 09:15</span>
            <span className="font-medium text-gray-900">Produto 'Cloro 10kg' atualizado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
