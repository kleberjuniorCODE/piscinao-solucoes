$repo = "kleberjuniorCODE/piscinao-solucoes"

Write-Host "Creating labels..."
$labels = @(
    @("fase-1-fundacao", "0E8A16", "Estrutura base e design tokens"),
    @("fase-2-database", "1D76DB", "Schema PostgreSQL e RLS"),
    @("fase-3-backend", "D93F0B", "Server Actions e lógica de negócio"),
    @("fase-4-frontend", "7057FF", "Interface pública e painel admin"),
    @("fase-5-seguranca", "B60205", "Auditoria e testes de segurança"),
    @("bug", "D73A4A", "Bug"),
    @("enhancement", "A2EEEF", "Enhancement"),
    @("documentação", "0075CA", "Documentação"),
    @("prioridade-alta", "E11D48", "Prioridade Alta"),
    @("prioridade-media", "FBCA04", "Prioridade Média")
)

foreach ($l in $labels) {
    gh label create $l[0] -c $l[1] -d $l[2] -R $repo --force 2>$null
    if ($LASTEXITCODE -ne 0) {
        gh label edit $l[0] -c $l[1] -d $l[2] -R $repo 2>$null
    }
}

Write-Host "Creating milestones..."
$milestones = @(
    @("v0.1 - Alicerce", "2026-10-15T23:59:59Z"),
    @("v0.2 - Catálogo & Auth", "2026-10-30T23:59:59Z"),
    @("v0.3 - Operações Comerciais", "2026-11-15T23:59:59Z"),
    @("v0.4 - Painel Admin & CMS", "2026-11-30T23:59:59Z"),
    @("v1.0 - MVP Launch", "2026-12-15T23:59:59Z")
)

foreach ($m in $milestones) {
    gh api -X POST /repos/$repo/milestones -f title=$m[0] -f due_on=$m[1] 2>$null
}

Write-Host "Creating issues..."
function Create-Issue {
    param($title, $milestone, $labels, $body)
    $labelArgs = @()
    foreach ($l in $labels) {
        $labelArgs += "-l"
        $labelArgs += $l
    }
    gh issue create -t $title -m $milestone @labelArgs -b $body -R $repo
}

$bodyTemplate = @"
**Descrição**
{0}

**Acceptance Criteria**
- [ ] Critério 1
- [ ] Critério 2
- [ ] Critério 3

*Referência: Documento de especificação v0.2*
"@

Create-Issue "[Fase 1] Scaffold Next.js + TypeScript + Tailwind + Supabase" "v0.1 - Alicerce" @("fase-1-fundacao", "prioridade-alta") ($bodyTemplate -f "Configurar o projeto base com Next.js, TypeScript, Tailwind e Supabase.")
Create-Issue "[Fase 1] Design System: Tokens de cor, tipografia e componentes atômicos (Button, Card, Input, Modal, Badge, Skeleton)" "v0.1 - Alicerce" @("fase-1-fundacao", "fase-4-frontend") ($bodyTemplate -f "Implementar o Design System com os componentes atômicos essenciais.")
Create-Issue "[Fase 2] Schema PostgreSQL completo com todas as tabelas e ENUMs" "v0.1 - Alicerce" @("fase-2-database", "prioridade-alta") ($bodyTemplate -f "Criar todo o schema do banco de dados no PostgreSQL.")
Create-Issue "[Fase 2] Políticas RLS (Row Level Security) para todas as tabelas" "v0.1 - Alicerce" @("fase-2-database", "fase-5-seguranca") ($bodyTemplate -f "Implementar políticas de segurança RLS no banco de dados.")
Create-Issue "[Fase 2] Triggers de updated_at e funções utilitárias SQL" "v0.1 - Alicerce" @("fase-2-database") ($bodyTemplate -f "Adicionar triggers e funções utilitárias ao banco.")
Create-Issue "[Docs] README completo com setup, arquitetura e contribuição" "v0.1 - Alicerce" @("documentação") ($bodyTemplate -f "Escrever a documentação completa no README.")

Create-Issue "[Fase 3] Server Actions de Autenticação (login, registro, recuperação de senha, logout)" "v0.2 - Catálogo & Auth" @("fase-3-backend", "prioridade-alta") ($bodyTemplate -f "Criar as Server Actions necessárias para a autenticação dos usuários.")
Create-Issue "[Fase 3] Middleware de proteção de rotas (/painel, /minha-conta)" "v0.2 - Catálogo & Auth" @("fase-3-backend", "fase-5-seguranca") ($bodyTemplate -f "Implementar middleware para proteger rotas privadas.")
Create-Issue "[Fase 4] Página de Login/Cadastro com validação Zod" "v0.2 - Catálogo & Auth" @("fase-4-frontend") ($bodyTemplate -f "Criar a página de login e cadastro.")
Create-Issue "[Fase 4] Layout público: Header com navegação, busca e ícones de ação + Footer completo" "v0.2 - Catálogo & Auth" @("fase-4-frontend", "prioridade-alta") ($bodyTemplate -f "Implementar o layout público (Header e Footer).")
Create-Issue "[Fase 4] Home Page: 8 blocos (Hero Banner, Categorias em destaque, Produtos em destaque, Banner Análise da Água, Sobre/Institucional, Depoimentos, Blog preview, Newsletter)" "v0.2 - Catálogo & Auth" @("fase-4-frontend", "prioridade-alta") ($bodyTemplate -f "Criar a Home Page e seus blocos.")
Create-Issue "[Fase 4] Catálogo: Listagem com filtros (categoria, marca, faixa de preço), ordenação e paginação" "v0.2 - Catálogo & Auth" @("fase-4-frontend") ($bodyTemplate -f "Implementar página de listagem do catálogo com filtros.")
Create-Issue "[Fase 4] Página de Produto: Galeria, ficha técnica, variantes, botão orçamento" "v0.2 - Catálogo & Auth" @("fase-4-frontend") ($bodyTemplate -f "Criar a página de detalhes de produto.")
Create-Issue "[Fase 4] Página de Categoria com grid de produtos e breadcrumbs" "v0.2 - Catálogo & Auth" @("fase-4-frontend") ($bodyTemplate -f "Criar página específica de categoria.")

Create-Issue "[Fase 3] Server Actions do Carrinho de Orçamento (adicionar, remover, atualizar quantidade)" "v0.3 - Operações Comerciais" @("fase-3-backend") ($bodyTemplate -f "Server Actions de manipulação do carrinho.")
Create-Issue "[Fase 3] Server Action de Submissão de Orçamento com geração de protocolo ORC-YYYY-XXXXX" "v0.3 - Operações Comerciais" @("fase-3-backend", "prioridade-alta") ($bodyTemplate -f "Server Action para finalizar e salvar orçamentos.")
Create-Issue "[Fase 3] Server Action de Solicitação de Análise Gratuita da Água" "v0.3 - Operações Comerciais" @("fase-3-backend") ($bodyTemplate -f "Server Action de solicitação de análise da água.")
Create-Issue "[Fase 3] Server Action de Candidatura ao Programa Parceiro Pro" "v0.3 - Operações Comerciais" @("fase-3-backend") ($bodyTemplate -f "Server Action para inscrição no programa de parceiros.")
Create-Issue "[Fase 3] Server Action de Formulário de Contato com geração de protocolo" "v0.3 - Operações Comerciais" @("fase-3-backend") ($bodyTemplate -f "Server Action de contato.")
Create-Issue "[Fase 4] UI do Carrinho de Orçamento (drawer/sidebar com resumo e envio)" "v0.3 - Operações Comerciais" @("fase-4-frontend") ($bodyTemplate -f "Interface do carrinho de orçamento.")
Create-Issue "[Fase 4] Página Análise Gratuita da Água com formulário e fluxo de status" "v0.3 - Operações Comerciais" @("fase-4-frontend") ($bodyTemplate -f "Página e formulário de análise de água.")
Create-Issue "[Fase 4] Página Parceiro Pro com formulário de candidatura" "v0.3 - Operações Comerciais" @("fase-4-frontend") ($bodyTemplate -f "Página e formulário Parceiro Pro.")
Create-Issue "[Fase 4] Página Contato/Fale Conosco" "v0.3 - Operações Comerciais" @("fase-4-frontend") ($bodyTemplate -f "Página de contato.")
Create-Issue "[Fase 4] Área Minha Conta: Dados pessoais, endereços, meus orçamentos, minhas análises" "v0.3 - Operações Comerciais" @("fase-4-frontend") ($bodyTemplate -f "Área logada do cliente (Minha conta).")
Create-Issue "[Fase 4] Botão flutuante WhatsApp (não sobrepor formulários, preços, rodapé)" "v0.3 - Operações Comerciais" @("fase-4-frontend") ($bodyTemplate -f "Implementar botão flutuante para contato via WhatsApp.")
Create-Issue "[Fase 3] Sistema de Favoritos (toggle, listagem)" "v0.3 - Operações Comerciais" @("fase-3-backend", "fase-4-frontend") ($bodyTemplate -f "Implementação de lista de favoritos.")

Create-Issue "[Fase 4] Layout do Painel Administrativo com sidebar e controle de roles" "v0.4 - Painel Admin & CMS" @("fase-4-frontend", "fase-5-seguranca") ($bodyTemplate -f "Layout base do painel administrativo.")
Create-Issue "[Fase 4] Painel: CRUD de Categorias com upload de imagem e ordenação" "v0.4 - Painel Admin & CMS" @("fase-4-frontend") ($bodyTemplate -f "Gestão de categorias no painel admin.")
Create-Issue "[Fase 4] Painel: CRUD de Produtos com variantes, mídia e status (draft/published/archived)" "v0.4 - Painel Admin & CMS" @("fase-4-frontend", "prioridade-alta") ($bodyTemplate -f "Gestão de produtos no painel admin.")
Create-Issue "[Fase 4] Painel: Gestão de Orçamentos (listagem, alteração de status, notas internas)" "v0.4 - Painel Admin & CMS" @("fase-4-frontend") ($bodyTemplate -f "Gestão de orçamentos recebidos.")
Create-Issue "[Fase 4] Painel: Gestão de Análises da Água (listagem, upload de laudo, alteração de status)" "v0.4 - Painel Admin & CMS" @("fase-4-frontend") ($bodyTemplate -f "Gestão das solicitações de análise de água.")
Create-Issue "[Fase 4] Painel: Gestão de Parceiros Pro (aprovar, recusar, solicitar info)" "v0.4 - Painel Admin & CMS" @("fase-4-frontend") ($bodyTemplate -f "Gestão das candidaturas do programa Parceiro Pro.")
Create-Issue "[Fase 4] Painel: CMS de Páginas (editor de blocos tipo e conteúdo JSON)" "v0.4 - Painel Admin & CMS" @("fase-4-frontend") ($bodyTemplate -f "Sistema de CMS para edição de páginas dinâmicas.")
Create-Issue "[Fase 4] Painel: Gestão de Posts/Blog (CRUD com editor rico, cover, status)" "v0.4 - Painel Admin & CMS" @("fase-4-frontend") ($bodyTemplate -f "Gestão do blog e seus artigos.")
Create-Issue "[Fase 4] Painel: Configurações do site (site_settings key-value)" "v0.4 - Painel Admin & CMS" @("fase-4-frontend") ($bodyTemplate -f "Página de configurações gerais do sistema.")
Create-Issue "[Fase 4] Painel: Gestão de Usuários e Staff (roles, ativação/desativação)" "v0.4 - Painel Admin & CMS" @("fase-4-frontend", "fase-5-seguranca") ($bodyTemplate -f "Gestão de permissões de equipe/staff.")
Create-Issue "[Fase 3] Sistema de Audit Log (audit_events) para todas as ações administrativas" "v0.4 - Painel Admin & CMS" @("fase-3-backend", "fase-5-seguranca") ($bodyTemplate -f "Log de auditoria para ações no admin.")

Create-Issue "[Fase 5] Testes E2E com Playwright: fluxo de cadastro, login, catálogo, orçamento" "v1.0 - MVP Launch" @("fase-5-seguranca") ($bodyTemplate -f "Escrever e rodar os testes end-to-end com Playwright.")
Create-Issue "[Fase 5] Testes de acessibilidade WCAG 2.2 AA (teclado, leitor de tela, contraste)" "v1.0 - MVP Launch" @("fase-5-seguranca") ($bodyTemplate -f "Testes e validações de acessibilidade no projeto.")
Create-Issue "[Fase 5] Varredura de segurança SAST com Strix (OWASP Top 10)" "v1.0 - MVP Launch" @("fase-5-seguranca", "prioridade-alta") ($bodyTemplate -f "Análise estática de segurança do código base.")
Create-Issue "[Fase 5] Testes de isolamento multi-tenant e elevação de privilégio" "v1.0 - MVP Launch" @("fase-5-seguranca") ($bodyTemplate -f "Validar as políticas RLS e os isolamentos.")
Create-Issue "[Fase 5] Conformidade LGPD: consentimento de cookies, termos, política de privacidade" "v1.0 - MVP Launch" @("fase-5-seguranca", "documentação") ($bodyTemplate -f "Atender aos requisitos da LGPD no projeto.")
Create-Issue "[Fase 4] SEO: Meta tags, Open Graph, sitemap.xml, robots.txt" "v1.0 - MVP Launch" @("fase-4-frontend") ($bodyTemplate -f "Melhorias de SEO técnico (meta tags, sitemap, etc).")
Create-Issue "[Fase 4] Performance: Lighthouse score > 90, image optimization, lazy loading" "v1.0 - MVP Launch" @("fase-4-frontend") ($bodyTemplate -f "Garantir a performance e tempo de carregamento com imagens otimizadas e boas métricas do Lighthouse.")
Create-Issue "[Docs] Documentação de deploy (Vercel + Supabase) e variáveis de ambiente" "v1.0 - MVP Launch" @("documentação") ($bodyTemplate -f "Documentar os processos de deployment na Vercel e Setup do Supabase.")

Write-Host "Done!"
