import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Recuperar Senha | Piscinão Soluções',
};

export default function RecuperarSenhaPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-primary">Recuperar Senha</CardTitle>
          <CardDescription>
            Digite seu email para receber as instruções de recuperação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
              <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
            </div>
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">Enviar Instruções</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 w-full">
            Lembrou a senha?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Voltar ao login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
