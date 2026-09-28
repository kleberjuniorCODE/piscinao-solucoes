import Link from 'next/link'
import { Container } from '../ui/container'
import { Percent, Truck, CreditCard, ShieldCheck, Headphones, Award, ArrowRight, Send } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full">
      {/* 1. Top Guarantee & Benefits Bar */}
      <div className="bg-[#F6EBDD] border-t border-[#E8D9C5] text-[#4A2612] py-4 text-xs">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {/* Benefit 1 */}
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-base text-[#66361C]">%</span>
              <span className="font-medium leading-tight">Campanhas promocionais e ofertas sazonais</span>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-[#66361C] shrink-0" />
              <span className="font-medium leading-tight">Entrega para todo o Brasil</span>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-2.5">
              <CreditCard className="w-4 h-4 text-[#66361C] shrink-0" />
              <span className="font-medium leading-tight">Diversas formas de pagamento</span>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#66361C] shrink-0" />
              <span className="font-medium leading-tight">Compra segura e com garantia</span>
            </div>

            {/* Benefit 5 */}
            <div className="flex items-center gap-2.5">
              <Headphones className="w-4 h-4 text-[#66361C] shrink-0" />
              <span className="font-medium leading-tight">Atendimento especializado</span>
            </div>

            {/* Benefit 6 */}
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#66361C] shrink-0" />
              <span className="font-medium leading-tight">Marcas de qualidade</span>
            </div>

            {/* Right Banner Link */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link
                href="/sobre"
                className="bg-[#66361C] text-white p-2.5 rounded-lg flex items-center justify-between text-[11px] font-semibold hover:bg-[#522a14] transition-colors group shadow-xs"
              >
                <span className="leading-snug">Um site que conecta pessoas ao melhor da piscina e da vida ao ar livre.</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform ml-1" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Main Dark Brown Footer */}
      <div className="bg-[#542D17] text-white/90 pt-14 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and Tagline */}
            <div className="lg:col-span-2 space-y-3">
              <Link href="/" className="inline-block">
                <span className="text-3xl font-extrabold tracking-wider uppercase text-white font-sans">
                  PISCINÃO
                </span>
              </Link>
              <p className="text-sm text-white/70 font-light">
                Tudo para a sua piscina e área de lazer.
              </p>
            </div>

            {/* Institucional */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm tracking-wide">Institucional</h4>
              <ul className="space-y-2 text-xs text-white/75">
                <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/sobre#lojas" className="hover:text-white transition-colors">Nossas lojas</Link></li>
                <li><Link href="/sobre#carreiras" className="hover:text-white transition-colors">Trabalhe conosco</Link></li>
              </ul>
            </div>

            {/* Atendimento */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm tracking-wide">Atendimento</h4>
              <ul className="space-y-2 text-xs text-white/75">
                <li><Link href="/contato" className="hover:text-white transition-colors">Central de ajuda</Link></li>
                <li><Link href="/contato#trocas" className="hover:text-white transition-colors">Trocas e devoluções</Link></li>
                <li><Link href="/politica-privacidade" className="hover:text-white transition-colors">Política de privacidade</Link></li>
                <li><Link href="/termos" className="hover:text-white transition-colors">Termos de uso</Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm tracking-wide">Contato</h4>
              <ul className="space-y-2 text-xs text-white/75">
                <li>(11) 4000-1234</li>
                <li>(11) 99999-1234</li>
                <li className="break-all">contato@piscinao.com.br</li>
              </ul>
            </div>

            {/* Nossa Loja + Newsletter */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm tracking-wide">Nossa loja</h4>
              <p className="text-xs text-white/75 leading-relaxed mb-4">
                Av. das Piscinas, 123<br />
                Bairro Jardim<br />
                São Paulo - SP
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mb-4">
                <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="text-xs">📸</span>
                </a>
                <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="text-xs">📘</span>
                </a>
                <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="text-xs">▶️</span>
                </a>
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-[11px] font-semibold mb-1.5 text-white/90">Receba nossas novidades</p>
                <form action="#" className="flex gap-1">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full h-8 px-2.5 bg-white text-gray-800 text-xs rounded focus:outline-none placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    aria-label="Enviar"
                    className="h-8 w-8 bg-[#25D366] hover:bg-[#20ba59] text-white rounded flex items-center justify-center transition-colors shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-xs text-white/50">
            <p>&copy; {currentYear} Piscinão Soluções. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
