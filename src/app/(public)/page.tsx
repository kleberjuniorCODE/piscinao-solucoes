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

      {/* 2. Categorias Principais (Showcase Edge-to-Edge sem emojis com fotos reais) */}
      <section className="edge-showcase">
        {/* Bloco 1: Destaque Piscinas (Full Screen Width) */}
        <div className="edge-banner edge-banner-piscinas">
          <div className="edge-overlay"></div>
          <div className="edge-content">
            <span className="edge-tag">PISCINAS SOB MEDIDA</span>
            <h2>Piscinas em Alvenaria, Vinil e Fibra</h2>
            <p>
              Projetos exclusivos para transformar sua casa em um refúgio de lazer com suporte técnico especializado.
            </p>
            <div className="edge-actions">
              <Link href="/catalogo?categoria=piscinas" className="edge-btn-primary">
                Conheça nossos modelos
              </Link>
              <Link href="/minha-conta/orcamentos" className="edge-btn-outline">
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>

        {/* Bloco 2: Split 50% / 50% (Equipamentos & Químicos) */}
        <div className="edge-split">
          <div className="edge-split-item edge-bg-equipamentos">
            <div className="edge-overlay"></div>
            <div className="edge-content">
              <span className="edge-tag">EQUIPAMENTOS & BOMBAS</span>
              <h3>Bombas, Filtros & Aquecedores</h3>
              <p>Automação e alta performance para manter sua piscina limpa e na temperatura ideal o ano inteiro.</p>
              <div className="edge-actions">
                <Link href="/catalogo?categoria=bombas-e-filtros" className="edge-btn-primary">
                  Ver Equipamentos
                </Link>
                <Link href="/catalogo?categoria=aquecimento" className="edge-btn-outline">
                  Aquecimento
                </Link>
              </div>
            </div>
          </div>

          <div className="edge-split-item edge-bg-quimicos">
            <div className="edge-overlay"></div>
            <div className="edge-content">
              <span className="edge-tag">TRATAMENTO DA ÁGUA</span>
              <h3>Linha Química Profissional</h3>
              <p>Cloros, algicidas e clarificantes Hidroall para uma água 100% pura, cristalina e saudável.</p>
              <div className="edge-actions">
                <Link href="/catalogo?categoria=produtos-para-tratamento" className="edge-btn-primary">
                  Ver Linha Química
                </Link>
                <Link href="/analise-agua" className="edge-btn-outline">
                  Análise Gratuita
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 3: Split 50% / 50% (Robôs/LEDs & Spas/Lazer) */}
        <div className="edge-split">
          <div className="edge-split-item edge-bg-acessorios">
            <div className="edge-overlay"></div>
            <div className="edge-content">
              <span className="edge-tag">TECNOLOGIA & PRATICIDADE</span>
              <h3>Robôs Aspiradores & Iluminação LED</h3>
              <p>Limpeza automatizada inteligente e iluminação subaquática RGB para momentos inesquecíveis.</p>
              <div className="edge-actions">
                <Link href="/catalogo?categoria=piscina-em-dia" className="edge-btn-primary">
                  Explorar Robôs & LEDs
                </Link>
              </div>
            </div>
          </div>

          <div className="edge-split-item edge-bg-spa">
            <div className="edge-overlay"></div>
            <div className="edge-content">
              <span className="edge-tag">CONFORTO & LAZER</span>
              <h3>Spas, Decks & Banheiras</h3>
              <p>Ambientes completos de bem-estar com móveis externos, cascatas e hidromassagem sob medida.</p>
              <div className="edge-actions">
                <Link href="/catalogo?categoria=decks-e-revestimentos" className="edge-btn-primary">
                  Conhecer Linha Lazer
                </Link>
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
