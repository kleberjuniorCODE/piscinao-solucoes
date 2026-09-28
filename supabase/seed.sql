-- SEED DATA

-- Site Settings
INSERT INTO site_settings (key, value_json, description) VALUES
('site_name', '"Piscinão Soluções"', 'Nome do site'),
('site_description', '"A maior loja de produtos para piscinas do Brasil"', 'Descrição do site'),
('whatsapp_number', '"5511999999999"', 'Número do WhatsApp'),
('store_address', '"Rua das Piscinas, 123 - São Paulo, SP"', 'Endereço da loja'),
('store_hours', '"Seg-Sex: 8h às 18h | Sáb: 8h às 12h"', 'Horário de funcionamento'),
('social_links', '{"instagram": "https://instagram.com/piscinao", "facebook": "https://facebook.com/piscinao"}', 'Links das redes sociais');

-- Categories
INSERT INTO categories (name, slug, description) VALUES
('Tratamento Químico', 'tratamento-quimico', 'Produtos químicos para tratamento de água'),
('Equipamentos', 'equipamentos', 'Bombas, filtros e outros equipamentos'),
('Acessórios', 'acessorios', 'Acessórios diversos para piscina'),
('Móveis de Área', 'moveis-de-area', 'Móveis para área externa'),
('Iluminação', 'iluminacao', 'Refletores e LEDs'),
('Aquecimento', 'aquecimento', 'Aquecedores solares e elétricos');

-- Products & Variants
WITH cat_quimico AS (SELECT id FROM categories WHERE slug = 'tratamento-quimico' LIMIT 1),
     cat_equip AS (SELECT id FROM categories WHERE slug = 'equipamentos' LIMIT 1)
INSERT INTO products (id, category_id, name, slug, short_description, status) VALUES
('11111111-1111-1111-1111-111111111111', (SELECT id FROM cat_quimico), 'Cloro Granulado 10kg', 'cloro-granulado-10kg', 'Cloro granulado de alta performance.', 'published'),
('22222222-2222-2222-2222-222222222222', (SELECT id FROM cat_equip), 'Bomba Filtro 1/2 CV', 'bomba-filtro-meio-cv', 'Bomba potente e silenciosa.', 'published');

INSERT INTO product_variants (product_id, sku, variant_name, price_in_cents, stock_quantity) VALUES
('11111111-1111-1111-1111-111111111111', 'CLORO-10KG', 'Padrão', 15000, 100),
('22222222-2222-2222-2222-222222222222', 'BOMBA-05-110V', '110V', 45000, 20),
('22222222-2222-2222-2222-222222222222', 'BOMBA-05-220V', '220V', 45000, 20);

-- Home Page & Blocks
INSERT INTO pages (id, slug, title, is_published) VALUES
('33333333-3333-3333-3333-333333333333', 'home', 'Página Inicial', true);

INSERT INTO page_blocks (page_id, block_type, content_json, sort_order) VALUES
('33333333-3333-3333-3333-333333333333', 'hero_banner', '{"title": "Bem-vindo ao Piscinão", "subtitle": "Tudo para sua piscina", "image_url": "/images/hero.jpg", "button_text": "Ver Produtos", "button_url": "/produtos"}', 0),
('33333333-3333-3333-3333-333333333333', 'category_grid', '{"title": "Nossas Categorias"}', 1);
