import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Favoritos | Piscinão Soluções',
};

export default function FavoritosPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Meus Favoritos</h1>
      
      {/* Empty State */}
      <Card className="border-dashed">
        <CardContent className="p-12 text-center text-gray-500 flex flex-col items-center justify-center">
          <Heart className="h-12 w-12 text-gray-300 mb-4" />
          <p>Você ainda não tem produtos favoritos.</p>
        </CardContent>
      </Card>
    </div>
  );
}
