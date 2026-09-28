import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { submitWaterRequest } from '@/app/actions/water';

export const metadata: Metadata = {
  title: 'Análise de Água | Piscinão Soluções',
};

export default function AnaliseAguaPage() {
  return (
    <div className="w-full">
      <section className="bg-pool text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Análise de Água Gratuita</h1>
          <p className="text-lg max-w-2xl mx-auto">Traga uma amostra da água da sua piscina e receba um laudo completo com o tratamento ideal.</p>
        </div>
        {/* Wave divider placeholder */}
        <div className="absolute bottom-0 w-full h-12 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <div className="w-16 h-16 rounded-full bg-cream mx-auto flex items-center justify-center mb-4 text-primary font-bold text-xl">1</div>
            <h3 className="font-semibold mb-2">Colete a Água</h3>
            <p className="text-gray-600">Encha uma garrafa limpa com 500ml da água da piscina.</p>
          </div>
          <div>
            <div className="w-16 h-16 rounded-full bg-cream mx-auto flex items-center justify-center mb-4 text-primary font-bold text-xl">2</div>
            <h3 className="font-semibold mb-2">Traga na Loja</h3>
            <p className="text-gray-600">Visite uma de nossas unidades com a amostra.</p>
          </div>
          <div>
            <div className="w-16 h-16 rounded-full bg-cream mx-auto flex items-center justify-center mb-4 text-primary font-bold text-xl">3</div>
            <h3 className="font-semibold mb-2">Receba o Laudo</h3>
            <p className="text-gray-600">Analisamos e entregamos a receita exata para sua piscina.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">Pré-cadastro para Análise</h3>
              <form action={async (formData: FormData) => {
                'use server'
                await submitWaterRequest(formData)
              }} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Unidade da Loja</label>
                    <select name="store_unit" required className="w-full border rounded-md px-3 py-2">
                      <option value="matriz">Matriz</option>
                      <option value="filial1">Filial 1</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tipo de Piscina</label>
                    <select name="pool_type" required className="w-full border rounded-md px-3 py-2">
                      <option value="fibra">Fibra</option>
                      <option value="vinil">Vinil</option>
                      <option value="alvenaria">Alvenaria</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Volume (Litros)</label>
                    <Input name="pool_volume_liters" type="number" required placeholder="Ex: 30000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Possui capa?</label>
                    <select name="pool_cover" required className="w-full border rounded-md px-3 py-2">
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tratamento Atual</label>
                  <Input name="current_treatment" placeholder="Ex: Cloro tradicional, Sal" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Observações (Problemas atuais)</label>
                  <textarea name="client_notes" rows={3} className="w-full border rounded-md px-3 py-2" placeholder="Água verde, turva, etc..."></textarea>
                </div>
                <Button type="submit" className="w-full bg-pool hover:bg-pool/90 text-white">Solicitar Análise</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
