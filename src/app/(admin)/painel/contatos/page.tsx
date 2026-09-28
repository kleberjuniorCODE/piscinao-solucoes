export default function AdminContatosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Contatos</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-900">
            <tr>
              <th className="px-6 py-4 font-semibold">Nome</th>
              <th className="px-6 py-4 font-semibold">Assunto</th>
              <th className="px-6 py-4 font-semibold">Data</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 font-medium text-gray-900">Carlos Silva</td>
              <td className="px-6 py-4">Dúvida sobre cloro</td>
              <td className="px-6 py-4">25/10/2023</td>
              <td className="px-6 py-4"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Não Lido</span></td>
              <td className="px-6 py-4 text-right">
                <button className="text-pool hover:underline">Ver Mensagem</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
