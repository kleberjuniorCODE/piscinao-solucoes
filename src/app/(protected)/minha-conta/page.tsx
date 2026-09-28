import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
  title: 'Minha Conta | Piscinão Soluções',
};

export default function MinhaContaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Meus Dados</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Dados Pessoais</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 max-w-md">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome Completo</label>
              <Input name="nome" defaultValue="João da Silva" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input name="email" defaultValue="joao@example.com" readOnly className="bg-gray-50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Telefone</label>
              <Input name="telefone" defaultValue="(11) 99999-9999" />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">Salvar Alterações</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alterar Senha</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 max-w-md">
            <div className="space-y-2">
              <label className="text-sm font-medium">Senha Atual</label>
              <Input type="password" name="current_password" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Nova Senha</label>
              <Input type="password" name="new_password" />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">Atualizar Senha</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
