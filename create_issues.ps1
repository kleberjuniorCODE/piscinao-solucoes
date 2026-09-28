$repo = "kleberjuniorCODE/piscinao-solucoes"

# Milestone v0.1 - Alicerce (number 1)
gh issue create -R $repo -t "[Fase 1] Scaffold Next.js + TypeScript + Tailwind + Supabase" -l "fase-1-fundacao" -l "prioridade-alta" -m "v0.1 - Alicerce" -b "Inicializar projeto Next.js com App Router, TypeScript strict, Tailwind CSS e Supabase.`n`n## Criterios de Aceite`n- [ ] Next.js 16+ com App Router e src/ directory`n- [ ] TypeScript strict mode habilitado`n- [ ] Tailwind CSS com design tokens do Piscinao`n- [ ] Supabase client (browser + server + middleware)`n- [ ] Middleware protegendo /painel e /minha-conta`n- [ ] .env.local.example com todas as variaveis`n- [ ] .gitignore configurado"

gh issue create -R $repo -t "[Fase 1] Design System: Tokens, tipografia e componentes atomicos" -l "fase-1-fundacao" -l "fase-4-frontend" -m "v0.1 - Alicerce" -b "Criar componentes UI atomicos seguindo o design system.`n`n## Componentes`n- [ ] Button (primary, secondary, outline, ghost, destructive)`n- [ ] Input (label, error, helper text, estados)`n- [ ] Card (Card, CardHeader, CardContent, CardFooter)`n- [ ] Badge (default, pool, success, warning, danger)`n- [ ] Modal (dialog nativo, acessivel)`n- [ ] Skeleton (pulse animation, texto, card, imagem)`n- [ ] Container (max-width responsivo)`n`n## Utilidades`n- [ ] cn() com clsx + tailwind-merge`n- [ ] formatCurrency(cents) -> R$ X.XXX,XX`n- [ ] formatProtocol(protocol)"

gh issue create -R $repo -t "[Fase 2] Schema PostgreSQL completo com tabelas e ENUMs" -l "fase-2-database" -l "prioridade-alta" -m "v0.1 - Alicerce" -b "Criar migration SQL com todas as 22 tabelas, 6 ENUMs, constraints e indexes.`n`n## Tabelas`n- [ ] profiles, staff_memberships, addresses`n- [ ] categories, products, product_variants, product_media`n- [ ] favorites, carts, cart_items`n- [ ] quotes, quote_items`n- [ ] water_requests, partner_applications`n- [ ] pages, page_blocks, posts, site_settings`n- [ ] contact_requests, audit_events`n- [ ] marketing_preferences, legal_acceptances`n`n## ENUMs`n- [ ] staff_role, product_status, quote_status`n- [ ] water_request_status, partner_status, block_type"

gh issue create -R $repo -t "[Fase 2] Politicas RLS para todas as tabelas" -l "fase-2-database" -l "fase-5-seguranca" -m "v0.1 - Alicerce" -b "Implementar Row Level Security com DEFAULT DENY em todas as tabelas.`n`n- [ ] profiles: usuario le/edita proprio, staff le todos`n- [ ] staff_memberships: apenas admins gerenciam`n- [ ] addresses: usuarios CRUD proprio`n- [ ] categories/products: leitura publica se ativo/publicado`n- [ ] favorites: usuarios gerenciam proprios`n- [ ] carts/cart_items: usuarios gerenciam proprio carrinho`n- [ ] quotes: usuarios leem proprios, staff gerencia todos`n- [ ] water_requests: idem quotes`n- [ ] partner_applications: idem quotes`n- [ ] audit_events: apenas admins leem"

gh issue create -R $repo -t "[Fase 2] Triggers de updated_at e geracao de protocolos" -l "fase-2-database" -m "v0.1 - Alicerce" -b "Criar triggers automaticos.`n`n- [ ] handle_updated_at() em todas as tabelas com updated_at`n- [ ] generate_protocol_number() com prefixos ORC/AGU/CTT`n- [ ] Auto-create profile on auth.users insert"

gh issue create -R $repo -t "[Docs] README completo com setup e arquitetura" -l "documentação" -m "v0.1 - Alicerce" -b "Criar README.md com overview, arquitetura, instrucoes de setup, design system, seguranca e milestones."

# Milestone v0.2 - Catalogo e Auth (number 2)
gh issue create -R $repo -t "[Fase 3] Server Actions de Autenticacao" -l "fase-3-backend" -l "prioridade-alta" -m "v0.2 - Catalogo e Auth" -b "Implementar Server Actions de auth com validacao Zod.`n`n- [ ] signIn com loginSchema`n- [ ] signUp com registerSchema (cria user + profile)`n- [ ] signOut com redirect`n- [ ] resetPassword com envio de email`n- [ ] Nenhuma credencial exposta no client"

gh issue create -R $repo -t "[Fase 3] Middleware de protecao de rotas" -l "fase-3-backend" -l "fase-5-seguranca" -m "v0.2 - Catalogo e Auth" -b "Proteger rotas /painel e /minha-conta com middleware.`n`n- [ ] Refresh de token automatico`n- [ ] Redirect para login se nao autenticado`n- [ ] Verificacao de staff role para /painel"

gh issue create -R $repo -t "[Fase 4] Pagina de Login/Cadastro com validacao Zod" -l "fase-4-frontend" -m "v0.2 - Catalogo e Auth" -b "Criar paginas de autenticacao.`n`n- [ ] Login: email + senha, esqueceu senha, criar conta`n- [ ] Cadastro: nome, email, telefone, senha, confirmar, LGPD`n- [ ] Recuperar Senha: email input com feedback`n- [ ] Layout centralizado com logo"

gh issue create -R $repo -t "[Fase 4] Layout publico: Header + Footer" -l "fase-4-frontend" -l "prioridade-alta" -m "v0.2 - Catalogo e Auth" -b "Header e Footer responsivos.`n`n## Header`n- [ ] Top bar com telefone, horario, redes sociais`n- [ ] Logo, busca, icones (usuario, favoritos, carrinho)`n- [ ] Navegacao: Categorias, Analise, Parceiro, Blog, Contato`n- [ ] Menu hamburger mobile com drawer`n- [ ] Sticky on scroll`n`n## Footer`n- [ ] 4 colunas: Institucional, Produtos, Servicos, Contato`n- [ ] Newsletter signup`n- [ ] Redes sociais e copyright"

gh issue create -R $repo -t "[Fase 4] Home Page com 8 blocos" -l "fase-4-frontend" -l "prioridade-alta" -m "v0.2 - Catalogo e Auth" -b "Criar pagina inicial com todos os blocos.`n`n- [ ] Hero Banner com CTA`n- [ ] Grid de Categorias (6 cards)`n- [ ] Produtos em Destaque (carousel/grid)`n- [ ] Banner Analise da Agua (azul piscina)`n- [ ] Sobre/Institucional (split layout)`n- [ ] Depoimentos (3 cards)`n- [ ] Blog Preview (3 posts recentes)`n- [ ] Newsletter (com texto LGPD)"

gh issue create -R $repo -t "[Fase 4] Catalogo: listagem com filtros e paginacao" -l "fase-4-frontend" -m "v0.2 - Catalogo e Auth" -b "Pagina de catalogo com filtros e ordenacao.`n`n- [ ] Grid de product cards responsivo`n- [ ] Sidebar filters: categoria, marca, faixa de preco`n- [ ] Sort: relevancia, preco, nome, recentes`n- [ ] Paginacao`n- [ ] Busca no topo`n- [ ] Breadcrumbs`n- [ ] Loading skeleton"

gh issue create -R $repo -t "[Fase 4] Pagina de Produto com galeria e variantes" -l "fase-4-frontend" -m "v0.2 - Catalogo e Auth" -b "Pagina de detalhe do produto.`n`n- [ ] Galeria de imagens com thumbnails`n- [ ] Info: nome, marca, preco, descricao curta`n- [ ] Seletor de variantes`n- [ ] Preco com comparacao (strikethrough)`n- [ ] Quantidade + Adicionar ao Orcamento`n- [ ] Adicionar aos Favoritos`n- [ ] Tabs: Descricao, Especificacoes`n- [ ] Produtos relacionados`n- [ ] SEO metadata"

gh issue create -R $repo -t "[Fase 4] Pagina de Categoria com grid e breadcrumbs" -l "fase-4-frontend" -m "v0.2 - Catalogo e Auth" -b "Pagina de categoria filtrando produtos.`n`n- [ ] Header com imagem e descricao da categoria`n- [ ] Grid de produtos filtrado`n- [ ] Breadcrumbs: Home > Catalogo > Categoria`n- [ ] generateStaticParams"

# Milestone v0.3 - Operacoes Comerciais (number 3)
gh issue create -R $repo -t "[Fase 3] Server Actions do Carrinho de Orcamento" -l "fase-3-backend" -m "v0.3 - Operacoes Comerciais" -b "CRUD do carrinho de orcamento.`n`n- [ ] getOrCreateCart()`n- [ ] addToCart(variantId, quantity)`n- [ ] updateCartItem(itemId, quantity)`n- [ ] removeCartItem(itemId)`n- [ ] getCartWithItems() com joins"

gh issue create -R $repo -t "[Fase 3] Submissao de Orcamento com protocolo" -l "fase-3-backend" -l "prioridade-alta" -m "v0.3 - Operacoes Comerciais" -b "Converter carrinho em orcamento.`n`n- [ ] submitQuote com validacao`n- [ ] Gerar protocolo ORC-YYYY-XXXXX`n- [ ] Snapshot dos dados do carrinho`n- [ ] Mudar status do cart para converted`n- [ ] Idempotencia (duplo clique gera apenas 1)"

gh issue create -R $repo -t "[Fase 3] Solicitacao de Analise da Agua" -l "fase-3-backend" -m "v0.3 - Operacoes Comerciais" -b "Server Action de analise de agua.`n`n- [ ] submitWaterRequest com waterRequestSchema`n- [ ] Gerar protocolo AGU-YYYY-XXXXX`n- [ ] Criar registro em water_requests"

gh issue create -R $repo -t "[Fase 3] Candidatura ao Parceiro Pro" -l "fase-3-backend" -m "v0.3 - Operacoes Comerciais" -b "Server Action de parceiro.`n`n- [ ] submitPartnerApplication com partnerApplicationSchema`n- [ ] Validar CNPJ se fornecido`n- [ ] Status inicial: pending"

gh issue create -R $repo -t "[Fase 3] Formulario de Contato com protocolo" -l "fase-3-backend" -m "v0.3 - Operacoes Comerciais" -b "Server Action de contato.`n`n- [ ] submitContactForm com contactFormSchema`n- [ ] Gerar protocolo CTT-YYYY-XXXXX"

gh issue create -R $repo -t "[Fase 4] UI do Carrinho de Orcamento (drawer)" -l "fase-4-frontend" -m "v0.3 - Operacoes Comerciais" -b "Drawer lateral do carrinho.`n`n- [ ] Slide-in da direita`n- [ ] Lista de itens com imagem, nome, variante, qtd, preco`n- [ ] Botoes +/- quantidade`n- [ ] Remover item`n- [ ] Resumo: qtd total, valor estimado`n- [ ] Textarea de observacoes`n- [ ] Botao Solicitar Orcamento`n- [ ] Estado vazio com CTA"

gh issue create -R $repo -t "[Fase 4] Pagina Analise Gratuita da Agua" -l "fase-4-frontend" -m "v0.3 - Operacoes Comerciais" -b "Pagina de servico de analise.`n`n- [ ] Hero azul piscina com wave SVG`n- [ ] Como Funciona (3 passos)`n- [ ] Formulario completo`n- [ ] Secao de beneficios"

gh issue create -R $repo -t "[Fase 4] Pagina Parceiro Pro" -l "fase-4-frontend" -m "v0.3 - Operacoes Comerciais" -b "Pagina do programa Parceiro Pro.`n`n- [ ] Secao de beneficios`n- [ ] Formulario de candidatura`n- [ ] FAQ accordion"

gh issue create -R $repo -t "[Fase 4] Pagina Contato/Fale Conosco" -l "fase-4-frontend" -m "v0.3 - Operacoes Comerciais" -b "Pagina de contato.`n`n- [ ] Formulario: nome, email, telefone, assunto, mensagem`n- [ ] Sidebar com info da loja`n- [ ] CTA WhatsApp"

gh issue create -R $repo -t "[Fase 4] Area Minha Conta completa" -l "fase-4-frontend" -m "v0.3 - Operacoes Comerciais" -b "Area logada do cliente.`n`n- [ ] Layout com sidebar/tabs`n- [ ] Meus Dados (perfil + marketing prefs)`n- [ ] Enderecos (CRUD com auto-fill CEP)`n- [ ] Meus Orcamentos (lista com protocolo e status)`n- [ ] Minhas Analises (lista com download de laudo)`n- [ ] Favoritos (grid de produtos)"

gh issue create -R $repo -t "[Fase 4] Botao flutuante WhatsApp" -l "fase-4-frontend" -m "v0.3 - Operacoes Comerciais" -b "Botao flutuante.`n`n- [ ] Fixed bottom-right verde (#25D366)`n- [ ] Nao sobrepoe formularios, precos ou rodape`n- [ ] Mensagem pre-preenchida`n- [ ] Animacao pulse na primeira visita"

gh issue create -R $repo -t "[Fase 3] Sistema de Favoritos" -l "fase-3-backend" -l "fase-4-frontend" -m "v0.3 - Operacoes Comerciais" -b "Toggle e listagem de favoritos.`n`n- [ ] toggleFavorite(productId)`n- [ ] getFavorites()`n- [ ] Coracao preenchido/vazio na UI`n- [ ] Requer login"

# Milestone v0.4 - Painel Admin e CMS (number 4)
gh issue create -R $repo -t "[Fase 4] Layout do Painel Administrativo" -l "fase-4-frontend" -l "fase-5-seguranca" -m "v0.4 - Painel Admin e CMS" -b "Layout admin com sidebar e roles.`n`n- [ ] Sidebar: Dashboard, Catalogo, Operacoes, Conteudo, Usuarios`n- [ ] Header com user info e logout`n- [ ] Menu baseado em role`n- [ ] Auth + staff role check"

gh issue create -R $repo -t "[Fase 4] Painel: CRUD de Categorias" -l "fase-4-frontend" -m "v0.4 - Painel Admin e CMS" -b "Gestao de categorias.`n`n- [ ] Tabela com nome, slug, ordem, ativo`n- [ ] Modal criar/editar`n- [ ] Upload de imagem`n- [ ] Reordenacao drag`n- [ ] Delete com confirmacao"

gh issue create -R $repo -t "[Fase 4] Painel: CRUD de Produtos com variantes" -l "fase-4-frontend" -l "prioridade-alta" -m "v0.4 - Painel Admin e CMS" -b "Gestao completa de produtos.`n`n- [ ] Tabela com filtros (status, categoria)`n- [ ] Formulario: nome, slug auto, categoria, descricoes, marca, status, featured, quote_only, SEO`n- [ ] Secao variantes: sku, nome, preco, comparacao, estoque, atributos`n- [ ] Upload de midia com reordenacao`n- [ ] Status: draft/published/archived"

gh issue create -R $repo -t "[Fase 4] Painel: Gestao de Orcamentos" -l "fase-4-frontend" -m "v0.4 - Painel Admin e CMS" -b "Gestao de orcamentos.`n`n- [ ] Tabela: protocolo, cliente, data, status, total`n- [ ] Filtro por status`n- [ ] Modal de detalhes: itens, snapshot, notas`n- [ ] Alterar status + notas internas"

gh issue create -R $repo -t "[Fase 4] Painel: Gestao de Analises da Agua" -l "fase-4-frontend" -m "v0.4 - Painel Admin e CMS" -b "Gestao de analises.`n`n- [ ] Tabela: protocolo, cliente, loja, status, data`n- [ ] Upload de laudo (PDF)`n- [ ] Alterar status`n- [ ] Notas internas"

gh issue create -R $repo -t "[Fase 4] Painel: Gestao de Parceiros Pro" -l "fase-4-frontend" -m "v0.4 - Painel Admin e CMS" -b "Gestao de parceiros.`n`n- [ ] Tabela: empresa, tipo, cidade, status, data`n- [ ] Acoes: aprovar, recusar, solicitar info`n- [ ] Notas de revisao"

gh issue create -R $repo -t "[Fase 4] Painel: CMS de Paginas" -l "fase-4-frontend" -m "v0.4 - Painel Admin e CMS" -b "Editor de paginas com blocos.`n`n- [ ] Lista de paginas`n- [ ] Editor de blocos (tipo + conteudo JSON)`n- [ ] Preview/publicar`n- [ ] Versionamento"

gh issue create -R $repo -t "[Fase 4] Painel: Gestao de Blog" -l "fase-4-frontend" -m "v0.4 - Painel Admin e CMS" -b "CRUD de posts.`n`n- [ ] Tabela: titulo, status, data, autor`n- [ ] Editor rico para content_html`n- [ ] Upload de cover`n- [ ] Status draft/published`n- [ ] SEO fields"

gh issue create -R $repo -t "[Fase 4] Painel: Configuracoes do site" -l "fase-4-frontend" -m "v0.4 - Painel Admin e CMS" -b "Editor key-value de site_settings.`n`n- [ ] Lista de configuracoes`n- [ ] Editar valor JSON individual`n- [ ] Toggle is_public"

gh issue create -R $repo -t "[Fase 4] Painel: Gestao de Usuarios e Staff" -l "fase-4-frontend" -l "fase-5-seguranca" -m "v0.4 - Painel Admin e CMS" -b "Gestao de usuarios.`n`n- [ ] Tabela: nome, email, role, ativo`n- [ ] Conceder/revogar roles`n- [ ] Ativar/desativar`n- [ ] Apenas admin gerencia"

gh issue create -R $repo -t "[Fase 3] Sistema de Audit Log" -l "fase-3-backend" -l "fase-5-seguranca" -m "v0.4 - Painel Admin e CMS" -b "Registro de auditoria.`n`n- [ ] Registrar todas as acoes admin em audit_events`n- [ ] actor_id, action, entity, diff_json, ip`n- [ ] Visualizacao no dashboard"

# Milestone v1.0 - MVP Launch (number 5)
gh issue create -R $repo -t "[Fase 5] Testes E2E com Playwright" -l "fase-5-seguranca" -m "v1.0 - MVP Launch" -b "Testes end-to-end.`n`n- [ ] Fluxo de cadastro e login`n- [ ] Navegacao no catalogo`n- [ ] Adicionar ao orcamento e submeter`n- [ ] Solicitar analise de agua`n- [ ] Area minha conta"

gh issue create -R $repo -t "[Fase 5] Acessibilidade WCAG 2.2 AA" -l "fase-5-seguranca" -m "v1.0 - MVP Launch" -b "Testes de acessibilidade.`n`n- [ ] Navegacao por teclado completa`n- [ ] Leitor de tela compativel`n- [ ] Contraste de cores adequado`n- [ ] Focus visible em todos os interativos`n- [ ] Sem quebra de viewport em 360px-1440px"

gh issue create -R $repo -t "[Fase 5] Varredura SAST com Strix (OWASP Top 10)" -l "fase-5-seguranca" -l "prioridade-alta" -m "v1.0 - MVP Launch" -b "Varredura de seguranca.`n`n- [ ] SQL Injection`n- [ ] XSS`n- [ ] CSRF`n- [ ] Insecure Direct Object Reference`n- [ ] Security Misconfiguration`n- [ ] Sensitive Data Exposure"

gh issue create -R $repo -t "[Fase 5] Testes de isolamento multi-tenant" -l "fase-5-seguranca" -m "v1.0 - MVP Launch" -b "Testes de isolamento.`n`n- [ ] Usuario A nao acessa dados do Usuario B (403)`n- [ ] Tentativa de elevacao de privilegio bloqueada`n- [ ] Ex-funcionario perde acesso imediato"

gh issue create -R $repo -t "[Fase 5] Conformidade LGPD" -l "fase-5-seguranca" -l "documentação" -m "v1.0 - MVP Launch" -b "Conformidade com LGPD.`n`n- [ ] Banner de consentimento de cookies`n- [ ] Politica de privacidade`n- [ ] Termos de uso`n- [ ] Consentimento versionado (legal_acceptances)`n- [ ] Navegacao funciona sem rastreadores"

gh issue create -R $repo -t "[Fase 4] SEO: Meta tags, Open Graph, sitemap, robots" -l "fase-4-frontend" -m "v1.0 - MVP Launch" -b "Otimizacao para motores de busca.`n`n- [ ] Meta tags em todas as paginas`n- [ ] Open Graph tags`n- [ ] sitemap.xml dinamico`n- [ ] robots.txt`n- [ ] Structured data (JSON-LD)"

gh issue create -R $repo -t "[Fase 4] Performance: Lighthouse > 90" -l "fase-4-frontend" -m "v1.0 - MVP Launch" -b "Otimizacao de performance.`n`n- [ ] Lighthouse score > 90 em todas as categorias`n- [ ] Otimizacao de imagens (next/image)`n- [ ] Lazy loading`n- [ ] Core Web Vitals (LCP, INP, CLS)"

gh issue create -R $repo -t "[Docs] Documentacao de deploy (Vercel + Supabase)" -l "documentação" -m "v1.0 - MVP Launch" -b "Documentacao de deploy.`n`n- [ ] Guia de deploy na Vercel`n- [ ] Configuracao do Supabase (migrations, storage buckets)`n- [ ] Variaveis de ambiente`n- [ ] Dominio customizado`n- [ ] Monitoramento"

Write-Host "Done! All 45 issues created."
