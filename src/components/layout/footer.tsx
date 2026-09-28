import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer-sec">
      <div className="wrap foot-grid">
        {/* Coluna 1: Logo */}
        <div>
          <div className="foot-logo">PISCINÃO</div>
          <p>Tudo para a sua piscina e área de lazer.</p>
        </div>

        {/* Coluna 2: Institucional */}
        <div>
          <h4>Institucional</h4>
          <Link href="/sobre">Sobre nós</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/sobre#lojas">Nossas lojas</Link>
          <Link href="/sobre#carreiras">Trabalhe conosco</Link>
        </div>

        {/* Coluna 3: Atendimento */}
        <div>
          <h4>Atendimento</h4>
          <Link href="/contato">Central de ajuda</Link>
          <Link href="/contato#trocas">Trocas e devoluções</Link>
          <Link href="/politica-privacidade">Política de privacidade</Link>
          <Link href="/termos">Termos de uso</Link>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h4>Contato</h4>
          <p>☎ (18) 3608-2770</p>
          <p>◉ WhatsApp (18) 3608-2770</p>
          <p>◎ Instagram @piscinaosolucoes</p>
        </div>

        {/* Coluna 5: Nossa loja */}
        <div>
          <h4>Nossa loja</h4>
          <p>📍 Araçatuba - SP</p>
          <p>Loja física + atendimento via WhatsApp</p>
        </div>

        {/* Coluna 6: Newsletter */}
        <div>
          <h4>Receba nossas novidades</h4>
          <form action="#" className="newsletter-box">
            <input type="email" placeholder="Seu e-mail" aria-label="E-mail para novidades" />
            <button type="submit">→</button>
          </form>
          <p style={{ marginTop: '8px' }}>◎ &nbsp; f &nbsp; ▶</p>
        </div>
      </div>
    </footer>
  )
}
