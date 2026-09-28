import { Metadata } from 'next';
import Link from 'next/link';
import { submitRegistration } from '@/app/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Cadastro | Piscinão Soluções',
  description: 'Crie sua conta no Piscinão Soluções',
};

export default function CadastroPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-primary">Criar Conta</CardTitle>
          <CardDescription>
            Preencha os dados abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={submitRegistration} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-medium leading-none">Nome Completo</label>
              <Input id="nome" name="nome" required placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
              <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="telefone" className="text-sm font-medium leading-none">Telefone</label>
              <Input id="telefone" name="telefone" type="tel" placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none">Senha</label>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm_password" className="text-sm font-medium leading-none">Confirmar Senha</label>
              <Input id="confirm_password" name="confirm_password" type="password" required />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="lgpd" name="lgpd" required className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="lgpd" className="text-sm text-gray-600">
                Li e concordo com os <Link href="/termos" className="text-primary hover:underline">Termos de Uso</Link> e <Link href="/politica-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
              </label>
            </div>
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">Cadastrar</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 w-full">
            Já tem uma conta?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Faça login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
