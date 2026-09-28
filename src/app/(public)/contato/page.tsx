import { Metadata } from 'next';
import { submitContactForm } from '@/app/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contato | Piscinão Soluções',
};

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-primary">Fale Conosco</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Envie uma Mensagem</h2>
              <form action={submitContactForm} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <Input name="name" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Telefone</label>
                    <Input name="phone" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Assunto</label>
                  <select name="subject" required className="w-full border rounded-md px-3 py-2">
                    <option value="duvida">Dúvida</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea name="message" rows={5} required className="w-full border rounded-md px-3 py-2"></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Informações da Loja</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Endereço:</strong> Av. das Piscinas, 1000 - Centro, SP</p>
              <p><strong>Telefone:</strong> (11) 9999-9999</p>
              <p><strong>Email:</strong> contato@piscinaosolucoes.com.br</p>
              <p><strong>Horário de Funcionamento:</strong><br/>Segunda a Sexta: 08h às 18h<br/>Sábado: 08h às 13h</p>
            </div>
          </div>
          
          <Button className="w-full bg-[#25D366] hover:bg-[#20b858] text-white flex items-center justify-center gap-2">
            Chamar no WhatsApp
          </Button>
          
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
            [Mapa do Google Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
