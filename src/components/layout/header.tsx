'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, User, Heart, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '../ui/container'
import { Badge } from '../ui/badge'

const navLinks = [
  { name: 'Categorias', href: '/catalogo' },
  { name: 'Análise Gratuita', href: '/analise-agua' },
  { name: 'Parceiro Pro', href: '/parceiro-pro' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className={cn("w-full z-40 transition-all duration-300", isScrolled ? "fixed top-0 shadow-md" : "relative")}>
      {/* Top Bar */}
      <div className="bg-cream text-xs text-primary py-1 hidden sm:block">
        <Container className="flex justify-between items-center">
          <div className="flex gap-4">
            <span>📞 (11) 9999-9999</span>
            <span>Seg - Sex: 8h às 18h | Sáb: 8h às 13h</span>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-pool transition-colors">Instagram</a>
            <a href="#" className="hover:text-pool transition-colors">Facebook</a>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="text-2xl font-bold tracking-tighter">
                <span className="text-pool">Piscinão</span>
                <span className="text-primary group-hover:text-pool transition-colors"> Soluções</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-pool",
                    pathname === link.href ? "text-pool" : "text-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="pl-9 pr-4 py-2 bg-gray-50 border-transparent rounded-full text-sm focus:border-pool focus:ring-1 focus:ring-pool w-48 lg:w-64 transition-all"
                />
              </div>
              
              <Link href="/login" className="text-gray-600 hover:text-pool transition-colors p-2">
                <User className="h-5 w-5" />
              </Link>
              
              <Link href="/favoritos" className="text-gray-600 hover:text-pool transition-colors p-2">
                <Heart className="h-5 w-5" />
              </Link>
              
              <Link href="/carrinho" className="text-gray-600 hover:text-pool transition-colors p-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge variant="pool" size="sm" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                  3
                </Badge>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <Link href="/carrinho" className="text-gray-600 p-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge variant="pool" size="sm" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">3</Badge>
              </Link>
              <button
                type="button"
                className="text-gray-600 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={cn(
        "fixed inset-0 top-[100px] sm:top-[124px] bg-white z-40 transition-transform duration-300 md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-9 pr-4 py-3 bg-gray-50 rounded-lg text-sm"
            />
          </div>
          
          <div className="flex border-b border-gray-100 pb-4 mb-4 gap-4 justify-around">
             <Link href="/login" className="flex flex-col items-center gap-1 text-sm text-gray-600">
                <User className="h-5 w-5" /> Minha Conta
              </Link>
              <Link href="/favoritos" className="flex flex-col items-center gap-1 text-sm text-gray-600">
                <Heart className="h-5 w-5" /> Favoritos
              </Link>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-md",
                  pathname === link.href ? "bg-pool/10 text-pool" : "text-gray-700 hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
