import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { submitPartnerApplication } from '@/app/actions/partner';

export const metadata: Metadata = {
  title: 'Parceiro PRO | Piscinão Soluções',
};

export default function ParceiroProPage() {
  return (
    <div className="w-full pb-16">
      <section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Seja um Parceiro PRO</h1>
          <p className="text-lg max-w-2xl mx-auto">Benefícios exclusivos para tratadores de piscina, arquitetos e construtoras.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-primary mb-2">Descontos Especiais</h3>
              <p className="text-sm text-gray-600">Tabela de preços exclusiva para profissionais do setor.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-primary mb-2">Atendimento Prioritário</h3>
              <p className="text-sm text-gray-600">Canal direto via WhatsApp com nossos especialistas.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-primary mb-2">Treinamentos</h3>
              <p className="text-sm text-gray-600">Acesso a cursos e certificações das melhores marcas.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-primary mb-2">Indicação de Clientes</h3>
              <p className="text-sm text-gray-600">Nossa loja indica seus serviços para clientes locais.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Formulário de Cadastro</h2>
          <Card>
            <CardContent className="p-6">
              <form action={async (formData: FormData) => {
                'use server'
                await submitPartnerApplication(formData)
              }} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome da Empresa / Profissional</label>
                    <Input name="business_name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">CNPJ / CPF</label>
                    <Input name="cnpj" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tipo de Atividade</label>
                    <select name="activity_type" required className="w-full border rounded-md px-3 py-2">
                      <option value="tratador">Tratador de Piscina</option>
                      <option value="construtora">Construtora</option>
                      <option value="arquiteto">Arquiteto(a)</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Telefone / WhatsApp</label>
                    <Input name="phone" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cidade</label>
                    <Input name="city" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">UF</label>
                    <select name="uf" required className="w-full border rounded-md px-3 py-2">
                      <option value="SP">SP</option>
                      <option value="RJ">RJ</option>
                      <option value="MG">MG</option>
                      {/* ... other states ... */}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Site ou Instagram</label>
                  <Input name="website" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fale um pouco sobre seu trabalho</label>
                  <textarea name="description" rows={4} className="w-full border rounded-md px-3 py-2"></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">Enviar Solicitação</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
