import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="wrap">
          <div className="hero-copy">
            <h1>Sua solução completa<br />para piscina e área de lazer</h1>
            <p>Qualidade, variedade e suporte especializado para o seu projeto, do cuidado diário aos grandes sonhos.</p>
            <Link href="/catalogo" className="hero-btn">
              Conheça nossos produtos <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Categorias Principais (8 Atalhos) */}
      <section className="cat-section">
        <div className="wrap">
          <div className="grid-cat">
            <Link href="/catalogo?categoria=piscina-em-dia" className="cat-card">
              <div className="cat-art">🏊</div>
              <div className="cat-title">Piscina em Dia</div>
            </Link>
            <Link href="/catalogo?categoria=produtos-para-tratamento" className="cat-card">
              <div className="cat-art" style={{ background: 'linear-gradient(135deg, #f4f7ff, #fff4ec)' }}>🧪</div>
              <div className="cat-title">Produtos para Tratamento</div>
            </Link>
            <Link href="/catalogo?categoria=bombas-e-filtros" className="cat-card">
              <div className="cat-art">⚙️</div>
              <div className="cat-title">Bombas e Filtros</div>
            </Link>
            <Link href="/catalogo?categoria=aquecimento" className="cat-card">
              <div className="cat-art">♨️</div>
              <div className="cat-title">Aquecimento</div>
            </Link>
            <Link href="/catalogo?categoria=gerador-de-cloro" className="cat-card">
              <div className="cat-art">💧</div>
              <div className="cat-title">Gerador de Cloro</div>
            </Link>
            <Link href="/catalogo?categoria=decks-e-revestimentos" className="cat-card">
              <div className="cat-art" style={{ background: 'linear-gradient(135deg, #f0e4d5, #d7a36f)' }}>▤</div>
              <div className="cat-title">Decks e Revestimentos</div>
            </Link>
            <Link href="/catalogo?categoria=moveis-externos" className="cat-card">
              <div className="cat-art" style={{ background: 'linear-gradient(135deg, #eef7ed, #f7efe7)' }}>🛋️</div>
              <div className="cat-title">Móveis Externos</div>
            </Link>
            <Link href="/parceiro-pro" className="cat-card">
              <div className="cat-art">🤝</div>
              <div className="cat-title">Parceiro Pro</div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Produtos em Destaque + Análise Gratuita da Água */}
      <section style={{ padding: '24px 0 16px' }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>Produtos em destaque</h2>
              <div className="sub">Qualidade e as melhores marcas para o seu projeto.</div>
            </div>
            <Link href="/catalogo" className="more-link">
              Ver todos os produtos →
            </Link>
          </div>

          <div className="prod-layout">
            {/* Grade de 5 produtos */}
            <div className="prod-grid">
              <div className="prod-card">
                <Link href="/produto/cloro-granulado-10kg">
                  <div className="prod-img">🪣</div>
                  <div className="prod-name">Cloro Granulado 10kg</div>
                  <div className="prod-price">R$ 199,90</div>
                </Link>
                <Link href="/produto/cloro-granulado-10kg" className="add-btn">
                  🛒 Adicionar ao carrinho
                </Link>
              </div>

              <div className="prod-card">
                <Link href="/produto/filtro-de-areia-para-piscina">
                  <div className="prod-img">🫙</div>
                  <div className="prod-name">Filtro de Areia para Piscina</div>
                  <div className="prod-price">R$ 1.299,90</div>
                </Link>
                <Link href="/produto/filtro-de-areia-para-piscina" className="add-btn">
                  🛒 Adicionar ao carrinho
                </Link>
              </div>

              <div className="prod-card">
                <Link href="/produto/robo-aspirador-de-piscina">
                  <div className="prod-img">🤖</div>
                  <div className="prod-name">Robô Aspirador de Piscina</div>
                  <div className="prod-price">R$ 3.499,90</div>
                </Link>
                <Link href="/produto/robo-aspirador-de-piscina" className="add-btn">
                  🛒 Adicionar ao carrinho
                </Link>
              </div>

              <div className="prod-card">
                <Link href="/produto/trocador-de-calor-para-piscina">
                  <div className="prod-img">⬛</div>
                  <div className="prod-name">Trocador de Calor para Piscina</div>
                  <div className="prod-price">R$ 4.490,00</div>
                </Link>
                <Link href="/produto/trocador-de-calor-para-piscina" className="add-btn">
                  🛒 Adicionar ao carrinho
                </Link>
              </div>

              <div className="prod-card">
                <Link href="/produto/refletor-led-rgb-para-piscina">
                  <div className="prod-img">🔵</div>
                  <div className="prod-name">Refletor LED RGB para Piscina</div>
                  <div className="prod-price">R$ 599,90</div>
                </Link>
                <Link href="/produto/refletor-led-rgb-para-piscina" className="add-btn">
                  🛒 Adicionar ao carrinho
                </Link>
              </div>
            </div>

            {/* Card Análise Gratuita da Água */}
            <aside className="water-card">
              <div className="water-drop">💧</div>
              <h3>Análise Gratuita da Água</h3>
              <p>Traga sua amostra e receba uma análise completa com orientação especializada.</p>
              <Link href="/analise-agua" className="white-btn">
                Saiba mais →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. Seção Parceiro Pro */}
      <section className="partner-sec">
        <div className="wrap">
          <div>
            <h2>Parceiro Pro</h2>
            <p>Condições especiais para arquitetos, construtores, piscineiros e empresas.</p>
          </div>

          <div className="feat">
            <div className="ico">🎧</div>
            <b>Atendimento especializado</b>
            <small>Nossa equipe está pronta para tirar suas dúvidas.</small>
          </div>

          <div className="feat">
            <div className="ico">⚙️</div>
            <b>Soluções completas</b>
            <small>Tudo para sua piscina e área de lazer em um só lugar.</small>
          </div>

          <div className="feat">
            <div className="ico">🏪</div>
            <b>Loja física + WhatsApp</b>
            <small>Atendimento online e presencial em Araçatuba - SP.</small>
          </div>

          <div className="partner-cta">
            <Link href="/parceiro-pro" className="hero-btn">
              Quero ser parceiro →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
