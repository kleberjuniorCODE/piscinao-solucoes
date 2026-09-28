export default function AdminParceirosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Parceiros PRO</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-900">
            <tr>
              <th className="px-6 py-4 font-semibold">Empresa</th>
              <th className="px-6 py-4 font-semibold">Atividade</th>
              <th className="px-6 py-4 font-semibold">Cidade</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 font-medium text-gray-900">Piscinas & Cia</td>
              <td className="px-6 py-4">Tratador</td>
              <td className="px-6 py-4">São Paulo - SP</td>
              <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Pendente</span></td>
              <td className="px-6 py-4 text-right">
                <button className="text-green-600 hover:underline mr-4">Aprovar</button>
                <button className="text-red-500 hover:underline">Rejeitar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
