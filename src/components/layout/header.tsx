'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import { Container } from '../ui/container'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="w-full z-40 relative">
      {/* 1. Main Brown Header Bar */}
      <div className="bg-[#66361C] text-white">
        <Container>
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-white font-sans">
                PISCINÃO
              </span>
            </Link>

            {/* Search Bar - Center */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-4">
              <form action="/catalogo" method="GET" className="relative w-full">
                <input
                  type="text"
                  name="q"
                  placeholder="O que você procura?"
                  className="w-full h-11 pl-4 pr-11 bg-white text-gray-800 placeholder-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner"
                />
                <button
                  type="submit"
                  aria-label="Buscar"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Right Links & Actions */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
              <nav className="hidden xl:flex items-center gap-5 text-white/90">
                <Link href="/sobre" className="hover:text-amber-200 transition-colors">
                  Sobre nós
                </Link>
                <Link href="/blog" className="hover:text-amber-200 transition-colors">
                  Blog
                </Link>
                <Link href="/contato" className="hover:text-amber-200 transition-colors">
                  Atendimento
                </Link>
              </nav>

              {/* Minha Conta */}
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-white/95 hover:text-amber-200 transition-colors"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Minha conta</span>
              </Link>

              {/* Carrinho / Orçamento */}
              <Link
                href="/minha-conta/orcamentos"
                className="relative p-1 text-white hover:text-amber-200 transition-colors"
                aria-label="Carrinho de orçamento"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Falar no WhatsApp Button */}
              <a
                href="https://wa.me/5511999991234?text=Olá!%20Gostaria%20de%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all shadow-md shrink-0"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-1 text-white hover:text-amber-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="lg:hidden pb-3">
            <form action="/catalogo" method="GET" className="relative w-full">
              <input
                type="text"
                name="q"
                placeholder="O que você procura?"
                className="w-full h-10 pl-4 pr-10 bg-white text-gray-800 placeholder-gray-400 rounded-md text-sm focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center text-gray-400"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* 2. Sub-Header Category Navigation Bar */}
      <div className="bg-white border-b border-gray-200 shadow-2xs hidden md:block">
        <Container>
          <nav className="flex items-center justify-between overflow-x-auto scrollbar-none py-2.5 text-xs lg:text-[13px] font-semibold text-gray-700">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="px-2.5 py-1 whitespace-nowrap hover:text-[#66361C] transition-colors rounded hover:bg-cream/40"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg px-4 py-4 space-y-3">
          <div className="font-bold text-xs uppercase tracking-wider text-gray-400 px-2">Categorias</div>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="px-2.5 py-2 text-sm text-gray-700 hover:bg-cream/50 rounded-md font-medium"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3 flex flex-col gap-2 text-sm text-gray-600">
            <Link href="/sobre" className="px-2 py-1 hover:text-primary">Sobre nós</Link>
            <Link href="/blog" className="px-2 py-1 hover:text-primary">Blog</Link>
            <Link href="/contato" className="px-2 py-1 hover:text-primary">Atendimento</Link>
            <a
              href="https://wa.me/5511999991234?text=Olá!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 rounded-lg text-sm"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
