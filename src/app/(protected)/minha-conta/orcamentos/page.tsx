import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { FileText, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meus Orçamentos | Piscinão Soluções',
};

export default function OrcamentosPage() {
  // Placeholder data
  const orcamentos = [
    { id: 'ORC-2023-001', date: '2023-10-15', status: 'Pendente', total: 1250.50 },
    { id: 'ORC-2023-002', date: '2023-09-20', status: 'Aprovado', total: 3400.00 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Meus Orçamentos</h1>
      
      <div className="space-y-4">
        {orcamentos.map(orc => (
          <Card key={orc.id} className="hover:border-primary transition-colors cursor-pointer">
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-cream p-3 rounded-full text-primary hidden sm:block">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{orc.id}</h3>
                  <p className="text-sm text-gray-500">Solicitado em {new Date(orc.date).toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <Badge variant={orc.status === 'Pendente' ? 'outline' : 'default'} className={orc.status === 'Aprovado' ? 'bg-green-500' : ''}>
                  {orc.status}
                </Badge>
                <div className="font-bold">{formatCurrency(orc.total)}</div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
