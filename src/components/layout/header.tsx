'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className={`w-full ${isHome ? 'igui-header' : 'igui-header solid-header'}`}>
      <div className="wrap">
        {/* 1. Logo em Fundo Semi-Transparente (como no site iGUi de referência) */}
        <Link href="/" className="logo-pill" aria-label="Piscinão Soluções - Página Inicial">
          <span className="logo-pill-text">PISCINÃO</span>
        </Link>

        {/* 2. Menu Centralizado e Elegante */}
        <nav className="igui-nav hidden md:flex">
          <Link href="/catalogo?categoria=piscina-em-dia">Piscinas</Link>
          <Link href="/catalogo?categoria=bombas-e-filtros">Equipamentos</Link>
          <Link href="/catalogo?categoria=produtos-para-tratamento">Acessórios</Link>
          <Link href="/minha-conta/orcamentos">Orçamento</Link>
          <Link href="/parceiro-pro">Parceiro Pro</Link>
        </nav>

        {/* 3. Lado Direito: Telefone Vendas + Botão WhatsApp */}
        <div className="igui-right">
          <div className="igui-sales hidden lg:block">
            <span>Vendas - </span>
            <a href="tel:1836082770" className="hover:underline text-white font-bold">
              (18) 3608-2770
            </a>
          </div>

          <a
            href="https://wa.me/551836082770?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20minha%20piscina."
            target="_blank"
            rel="noopener noreferrer"
            className="igui-pill-btn"
          >
            <span style={{ color: '#25D366' }}>●</span>
            <span>WhatsApp</span>
          </a>

          <Link href="/login" className="igui-pill-btn hidden sm:inline-flex">
            <span>Área do Cliente</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
