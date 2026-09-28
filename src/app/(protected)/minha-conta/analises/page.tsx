import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplet, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Minhas Análises | Piscinão Soluções',
};

export default function AnalisesPage() {
  const analises = [
    { id: 'AN-2023-089', date: '2023-10-10', status: 'Concluído', store: 'Matriz' },
    { id: 'AN-2023-095', date: '2023-10-25', status: 'Em Análise', store: 'Filial 1' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Minhas Análises de Água</h1>
      
      <div className="space-y-4">
        {analises.map(an => (
          <Card key={an.id}>
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-pool/10 p-3 rounded-full text-pool hidden sm:block">
                  <Droplet className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{an.id}</h3>
                  <p className="text-sm text-gray-500">Solicitado em {new Date(an.date).toLocaleDateString('pt-BR')} • {an.store}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <Badge variant={an.status === 'Em Análise' ? 'outline' : 'default'} className={an.status === 'Concluído' ? 'bg-pool text-white' : ''}>
                  {an.status}
                </Badge>
                {an.status === 'Concluído' && (
                  <button className="flex items-center gap-2 text-sm text-pool hover:underline font-medium">
                    <Download className="h-4 w-4" /> Baixar Laudo
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
