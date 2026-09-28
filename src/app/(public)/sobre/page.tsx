import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Sobre Nós | Piscinão Soluções',
};

export default function SobrePage() {
  return (
    <div>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossa História</h1>
          <p className="text-xl max-w-2xl mx-auto">Especialistas em transformar sua área de lazer em momentos inesquecíveis.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Desde 2010 cuidando da sua piscina</h2>
            <p className="text-gray-600 leading-relaxed">
              O Piscinão Soluções nasceu com a missão de oferecer os melhores produtos e serviços para tratamento e manutenção de piscinas. Começamos pequenos, mas com uma grande paixão pelo que fazemos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoje, somos referência na região, oferecendo não apenas produtos, mas consultoria completa, análise de água computadorizada e um atendimento que entende as necessidades de cada cliente.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <Card className="text-center border-pool">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-pool mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Missão</h3>
              <p className="text-gray-600">Proporcionar saúde e diversão através de soluções eficientes e sustentáveis para piscinas.</p>
            </CardContent>
          </Card>
          <Card className="text-center border-pool">
            <CardContent className="p-8">
              <Eye className="h-12 w-12 text-pool mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visão</h3>
              <p className="text-gray-600">Ser a maior e mais confiável rede de lojas especializadas em piscinas do estado.</p>
            </CardContent>
          </Card>
          <Card className="text-center border-pool">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-pool mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Valores</h3>
              <p className="text-gray-600">Transparência, excelência no atendimento, respeito ao meio ambiente e inovação constante.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-cream py-12 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Precisa de ajuda com sua piscina?</h2>
          <p className="text-gray-600 mb-8">Nossa equipe de especialistas está pronta para ajudar.</p>
          <Link href="/contato">
            <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">Fale Conosco</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
