import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Piscinão Soluções',
};

export default function TermosPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
      <div className="prose prose-gray max-w-none">
        <p><strong>Última atualização:</strong> 25 de Outubro de 2023</p>
        
        <h2>1. Aceitação dos Termos</h2>
        <p>Ao acessar e utilizar o site do Piscinão Soluções, você aceita e concorda em estar vinculado a estes Termos de Uso. Se você não concordar com estes termos, por favor, não utilize nosso site.</p>
        
        <h2>2. Uso do Site</h2>
        <p>Você concorda em usar nosso site apenas para fins legais e de uma maneira que não infrinja os direitos de, ou restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro.</p>
        
        <h2>3. Propriedade Intelectual</h2>
        <p>Todo o conteúdo incluído neste site, como textos, gráficos, logotipos, ícones de botões, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade do Piscinão Soluções ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais.</p>
        
        <h2>4. Limitação de Responsabilidade</h2>
        <p>O Piscinão Soluções não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes que resultem do uso ou da incapacidade de usar nosso site ou serviços.</p>
      </div>
    </div>
  );
}
