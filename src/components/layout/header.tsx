'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const categories = [
  { name: 'Piscina em Dia', href: '/catalogo?categoria=piscina-em-dia' },
  { name: 'Produtos para Tratamento', href: '/catalogo?categoria=produtos-para-tratamento' },
  { name: 'Bombas e Filtros', href: '/catalogo?categoria=bombas-e-filtros' },
  { name: 'Aquecimento', href: '/catalogo?categoria=aquecimento' },
  { name: 'Gerador de Cloro', href: '/catalogo?categoria=gerador-de-cloro' },
  { name: 'Decks e Revestimentos', href: '/catalogo?categoria=decks-e-revestimentos' },
  { name: 'Móveis Externos', href: '/catalogo?categoria=moveis-externos' },
  { name: 'Parceiro Pro', href: '/parceiro-pro' },
]

export function Header() {
  const [query, setQuery] = useState('')

  return (
    <header className="w-full">
      {/* 1. Top Bar */}
      <div className="top-bar">
        <div className="wrap">
          <Link href="/" className="top-logo">
            PISCINÃO
          </Link>

          <form action="/catalogo" method="GET" className="search-box">
            <input
              type="text"
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Busca"
              placeholder="O que você procura?"
            />
            <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#777' }}>
              ⌕
            </button>
          </form>

          <nav className="top-links">
            <Link href="/sobre">Sobre nós</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contato">Atendimento</Link>
            <Link href="/login">👤 Minha conta</Link>
            <Link href="/minha-conta/orcamentos" title="Carrinho de Orçamentos">🛒</Link>
            <a
              href="https://wa.me/551836082770?text=Olá!%20Gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn"
            >
              ◉ Falar no WhatsApp
            </a>
          </nav>
        </div>
      </div>

      {/* 2. Sub-Navigation */}
      <div className="nav-bar">
        <div className="wrap">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
