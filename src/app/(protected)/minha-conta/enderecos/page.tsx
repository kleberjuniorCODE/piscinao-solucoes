import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, MapPin, Trash2, Edit2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meus Endereços | Piscinão Soluções',
};

export default function EnderecosPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Meus Endereços</h1>
        <Button className="bg-pool hover:bg-pool/90 text-white flex items-center gap-2">
          <Plus className="h-4 w-4" /> Novo Endereço
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-pool relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-pool"></div>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-pool mt-1" />
                <div>
                  <h3 className="font-bold">Casa</h3>
                  <p className="text-gray-600 text-sm mt-1">Rua das Flores, 123 - Apto 45<br/>Centro, São Paulo - SP<br/>01234-567</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-pool"><Edit2 className="h-4 w-4" /></button>
                <button className="text-gray-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
