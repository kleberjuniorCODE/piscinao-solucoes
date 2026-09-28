# 🏊‍♂️ Piscinão Soluções

> Loja e autoridade em piscinas, tratamento químico, equipamentos e área de lazer.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?logo=supabase)](https://supabase.com/)

## 📋 Sobre o Projeto

O **Piscinão Soluções** é uma plataforma web completa para comércio e serviços relacionados a piscinas. O sistema funciona como um **catálogo público com carrinho de orçamento**, onde clientes podem navegar livremente e solicitar orçamentos, análises gratuitas da água e candidatar-se ao programa Parceiro Pro.

### Funcionalidades Principais

- 🛒 **Catálogo de Produtos** — Navegação, busca, filtros e fichas detalhadas
- 📋 **Carrinho de Orçamento** — Solicitação de orçamento com protocolo único (ORC-YYYY-XXXXX)
- 💧 **Análise Gratuita da Água** — Solicitação online com laudo digital
- 🤝 **Programa Parceiro Pro** — Candidatura para profissionais do setor
- 📝 **Blog** — Artigos sobre tratamento, manutenção e dicas
- ⚙️ **Painel Administrativo** — Gestão completa com controle de roles

## 🏗️ Arquitetura

```
src/
├── app/
│   ├── (public)/          # Páginas públicas (home, catálogo, blog)
│   ├── (auth)/            # Login, cadastro, recuperação de senha
│   ├── (protected)/       # Minha conta (requer autenticação)
│   ├── (admin)/           # Painel administrativo (requer staff role)
│   └── actions/           # Server Actions (auth, cart, quote, etc.)
├── components/
│   ├── ui/                # Componentes atômicos (Button, Card, Input...)
│   ├── layout/            # Header, Footer, WhatsApp Button
│   └── cart/              # Cart Drawer
├── lib/
│   ├── supabase/          # Clientes Supabase (browser, server, middleware)
│   ├── validators/        # Schemas Zod para validação
│   └── utils.ts           # Utilitários (cn, formatCurrency, formatProtocol)
├── types/
│   └── database.ts        # Tipos TypeScript do banco de dados
└── middleware.ts           # Middleware de auth e proteção de rotas
```

## 🎨 Design System

| Token | Cor | Uso |
|-------|-----|-----|
| **Primary (Madeira)** | `#7A4324` | Cabeçalho, botões de destaque, acentos |
| **Cream** | `#F6EBDD` | Seções de apoio, faixas de destaque |
| **Pool (Azul Piscina)** | `#008CB8` | Análise da Água, badges, tags ativas |
| **Background** | `#FFFFFF` | Fundo principal |
| **Text** | `#202020` | Texto base |

## 🚀 Como Rodar

### Pré-requisitos

- Node.js 20+
- npm 10+
- Conta no [Supabase](https://supabase.com)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/kleberjuniorCODE/piscinao-solucoes.git
cd piscinao-solucoes

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com suas credenciais do Supabase

# Execute as migrations no Supabase
# Cole o conteúdo de supabase/migrations/00001_initial_schema.sql no SQL Editor
# Cole o conteúdo de supabase/seed.sql para dados iniciais

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🗄️ Banco de Dados

O schema completo está em `supabase/migrations/00001_initial_schema.sql` e inclui:

- **22 tabelas** com constraints, indexes e defaults
- **6 tipos ENUM** para status de operações
- **RLS (Row Level Security)** em todas as tabelas com DEFAULT DENY
- **Triggers** automáticos para `updated_at` e geração de protocolos
- **Seed data** com categorias, produtos de exemplo e configurações do site

## 🔐 Segurança

- ✅ RLS ativo em todas as tabelas (DEFAULT DENY)
- ✅ Preços em centavos inteiros (`price_in_cents: integer`)
- ✅ Validação Zod em todas as Server Actions
- ✅ Zero credenciais expostas no frontend
- ✅ Middleware de proteção de rotas
- ✅ Sanitização contra XSS em conteúdo do CMS
- ✅ Conformidade LGPD (consentimento versionado)

## 📊 Milestones

| Milestone | Previsão | Status |
|-----------|----------|--------|
| v0.1 — Alicerce | 15/10/2026 | 🔄 Em andamento |
| v0.2 — Catálogo & Auth | 30/10/2026 | ⏳ Pendente |
| v0.3 — Operações Comerciais | 15/11/2026 | ⏳ Pendente |
| v0.4 — Painel Admin & CMS | 30/11/2026 | ⏳ Pendente |
| v1.0 — MVP Launch | 15/12/2026 | ⏳ Pendente |

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript (strict mode)
- **Estilização:** Tailwind CSS 4
- **Banco de Dados:** Supabase (PostgreSQL com RLS)
- **Autenticação:** Supabase Auth
- **Validação:** Zod
- **Ícones:** Lucide React
- **Deploy:** Vercel

## 📝 Licença

Este projeto é proprietário do Piscinão Soluções. Todos os direitos reservados.
