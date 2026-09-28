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

      {/* 2. Categorias Principais (Showcase) */}
      <section className="showcase-section">
        <div className="wrap">
          <div className="showcase-head">
            <h2>Nossas Categorias</h2>
            <div className="sub">Tudo para sua piscina e área de lazer em um só lugar.</div>
          </div>
          <div className="showcase-grid">
            {/* 1. Piscinas */}
            <div className="showcase-card showcase-card-full showcase-dark">
              <div className="showcase-bg" style={{ background: 'linear-gradient(to bottom right, #1a2a6c, #11998e)' }} data-category-image="piscinas">
                <div className="showcase-emoji">🏊‍♀️</div>
              </div>
              <div className="showcase-content">
                <h3>Piscinas</h3>
                <p>Transforme seu espaço com a piscina dos seus sonhos.</p>
                <Link href="/catalogo?categoria=piscinas" className="showcase-btn">Explorar</Link>
              </div>
            </div>

            {/* 2. Produtos Químicos */}
            <div className="showcase-card showcase-light">
              <div className="showcase-bg" style={{ background: 'linear-gradient(135deg, #fdfbfb, #ebedee)' }} data-category-image="produtos-quimicos">
                <div className="showcase-emoji">🧪</div>
              </div>
              <div className="showcase-content">
                <h3>Produtos Químicos</h3>
                <p>Tratamento profissional para água cristalina.</p>
                <Link href="/catalogo?categoria=produtos-quimicos" className="showcase-btn">Saiba mais</Link>
              </div>
            </div>

            {/* 3. Equipamentos */}
            <div className="showcase-card showcase-dark">
              <div className="showcase-bg" style={{ background: 'linear-gradient(135deg, #434343, #000000)' }} data-category-image="equipamentos">
                <div className="showcase-emoji">⚙️</div>
              </div>
              <div className="showcase-content">
                <h3>Equipamentos</h3>
                <p>Bombas, filtros e automação de alta performance.</p>
                <Link href="/catalogo?categoria=equipamentos" className="showcase-btn">Explorar</Link>
              </div>
            </div>

            {/* 4. Aquecimento */}
            <div className="showcase-card showcase-light">
              <div className="showcase-bg" style={{ background: 'linear-gradient(135deg, #ffecd2, #fcb69f)' }} data-category-image="aquecimento">
                <div className="showcase-emoji">♨️</div>
              </div>
              <div className="showcase-content">
                <h3>Aquecimento</h3>
                <p>Aproveite sua piscina o ano inteiro.</p>
                <Link href="/catalogo?categoria=aquecimento" className="showcase-btn">Saiba mais</Link>
              </div>
            </div>

            {/* 5. Acessórios */}
            <div className="showcase-card showcase-side showcase-light">
              <div className="showcase-bg" style={{ background: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)' }} data-category-image="acessorios">
                <div className="showcase-emoji">🏖️</div>
              </div>
              <div className="showcase-content">
                <h3>Acessórios</h3>
                <p>Encontre os melhores acessórios para sua piscina.</p>
                <Link href="/catalogo?categoria=acessorios" className="showcase-btn">Explorar</Link>
              </div>
            </div>

            {/* 6. Iluminação */}
            <div className="showcase-card showcase-dark">
              <div className="showcase-bg" style={{ background: 'linear-gradient(135deg, #30cfd0, #330867)' }} data-category-image="iluminacao">
                <div className="showcase-emoji">💡</div>
              </div>
              <div className="showcase-content">
                <h3>Iluminação</h3>
                <p>LED RGB e efeitos especiais para sua área de lazer.</p>
                <Link href="/catalogo?categoria=iluminacao" className="showcase-btn">Saiba mais</Link>
              </div>
            </div>

            {/* 7. Móveis e Lazer */}
            <div className="showcase-card showcase-light">
              <div className="showcase-bg" style={{ background: 'linear-gradient(135deg, #f6d365, #fda085)' }} data-category-image="moveis-e-lazer">
                <div className="showcase-emoji">🪑</div>
              </div>
              <div className="showcase-content">
                <h3>Móveis e Lazer</h3>
                <p>Conforto e estilo para sua área externa.</p>
                <Link href="/catalogo?categoria=moveis-e-lazer" className="showcase-btn">Explorar</Link>
              </div>
            </div>

            {/* 8. Serviços */}
            <div className="showcase-card showcase-card-full showcase-dark">
              <div className="showcase-bg" style={{ background: 'linear-gradient(135deg, #141e30, #243b55)' }} data-category-image="servicos">
                <div className="showcase-emoji">🔧</div>
              </div>
              <div className="showcase-content">
                <h3>Serviços</h3>
                <p>Manutenção, instalação e suporte especializado.</p>
                <Link href="/catalogo?categoria=servicos" className="showcase-btn">Saiba mais</Link>
              </div>
            </div>

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
