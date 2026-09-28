import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Piscinão Soluções',
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
      <div className="prose prose-gray max-w-none">
        <p><strong>Última atualização:</strong> 25 de Outubro de 2023</p>
        
        <h2>1. Introdução</h2>
        <p>O Piscinão Soluções valoriza a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site.</p>
        
        <h2>2. Coleta de Informações</h2>
        <p>Coletamos informações que você nos fornece diretamente, como quando você cria uma conta, solicita um orçamento, preenche um formulário ou se comunica conosco. Os tipos de informações pessoais que podemos coletar incluem seu nome, endereço de e-mail, número de telefone e endereço postal.</p>
        
        <h2>3. Uso das Informações</h2>
        <p>Utilizamos as informações que coletamos para fornecer, manter e melhorar nossos serviços, processar transações, enviar avisos técnicos, atualizações, alertas de segurança e mensagens de suporte.</p>
        
        <h2>4. Proteção de Dados (LGPD)</h2>
        <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantimos aos nossos usuários os direitos de acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.</p>
      </div>
    </div>
  );
}
