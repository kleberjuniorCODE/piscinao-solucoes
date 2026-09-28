import Link from 'next/link'
import { Container } from '../ui/container'
import { Globe, Share2, Video, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cream text-gray-800 pt-16 pb-8 border-t border-primary/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Institutional */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-2">
              <div className="text-2xl font-bold tracking-tighter">
                <span className="text-pool">Piscinão</span>
                <span className="text-primary"> Soluções</span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tudo para sua piscina em um só lugar. Oferecemos os melhores produtos, equipamentos e serviços especializados para garantir a qualidade da sua água.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-pool hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-pool hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-pool hover:text-white transition-colors">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-6 text-lg">Institucional</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/sobre" className="hover:text-pool transition-colors">Sobre a Empresa</Link></li>
              <li><Link href="/blog" className="hover:text-pool transition-colors">Blog & Dicas</Link></li>
              <li><Link href="/politica-privacidade" className="hover:text-pool transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-pool transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Column 3: Services & Products */}
          <div>
            <h4 className="font-bold text-primary mb-6 text-lg">Serviços & Produtos</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/analise-agua" className="hover:text-pool transition-colors">Análise Gratuita da Água</Link></li>
              <li><Link href="/parceiro-pro" className="hover:text-pool transition-colors">Programa Parceiro Pro</Link></li>
              <li><Link href="/catalogo?categoria=produtos-quimicos" className="hover:text-pool transition-colors">Produtos Químicos</Link></li>
              <li><Link href="/catalogo?categoria=equipamentos" className="hover:text-pool transition-colors">Equipamentos e Motores</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-primary mb-6 text-lg">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pool shrink-0 mt-0.5" />
                <span>Av. das Piscinas, 1234 - Centro<br/>São Paulo - SP, 01234-567</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pool shrink-0" />
                <span>(11) 9999-9999 | (11) 3333-3333</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pool shrink-0" />
                <span>contato@piscinaosolucoes.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-pool shrink-0 mt-0.5" />
                <span>Seg - Sex: 8h às 18h<br/>Sáb: 8h às 13h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-primary mb-2">Receba novidades e dicas</h3>
            <p className="text-sm text-gray-600">Assine nossa newsletter e fique por dentro das melhores práticas para cuidar da sua piscina.</p>
          </div>
          <form className="w-full md:w-1/2 flex flex-col sm:flex-row gap-3">
            <Input type="email" placeholder="Seu melhor e-mail" className="bg-gray-50" required />
            <Button type="submit" variant="primary" className="shrink-0">Inscrever-se</Button>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-primary/10 text-xs text-gray-500">
          <p>&copy; {currentYear} Piscinão Soluções. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}
