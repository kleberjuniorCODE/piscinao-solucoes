export const mockCategories = [
  { id: '1', name: 'Bombas e Filtros', slug: 'bombas-e-filtros', description: 'Equipamentos essenciais', image: '', color: '#0a8af0', order: 1, active: true },
  { id: '2', name: 'Aquecimento', slug: 'aquecimento', description: 'Trocadores de calor e placas solares', image: '', color: '#f05a28', order: 2, active: true },
  { id: '3', name: 'Iluminação', slug: 'iluminacao', description: 'Refletores e painéis de comando', image: '', color: '#f0c808', order: 3, active: true },
  { id: '4', name: 'Tratamento', slug: 'tratamento', description: 'Cloro, algicidas e ajustadores', image: '', color: '#4caf50', order: 4, active: true },
  { id: '5', name: 'Acessórios', slug: 'acessorios', description: 'Escadas, cascata e duchas', image: '', color: '#9c27b0', order: 5, active: true },
  { id: '6', name: 'Limpeza', slug: 'limpeza', description: 'Aspiradores, peneiras e mangueiras', image: '', color: '#00bcd4', order: 6, active: true },
  { id: '7', name: 'Automação', slug: 'automacao', description: 'Quadros de comando e robôs', image: '', color: '#607d8b', order: 7, active: true },
  { id: '8', name: 'Revestimentos', slug: 'revestimentos', description: 'Vinil e pastilhas', image: '', color: '#795548', order: 8, active: true },
];

export const mockProducts = [
  { id: '1', name: 'Bomba Weg 1/2 CV', slug: 'bomba-weg-1-2-cv', categoryId: '1', categoryName: 'Bombas e Filtros', price: 850.00, stock: 12, status: 'Ativo', image: '' },
  { id: '2', name: 'Filtro de Areia Dancor', slug: 'filtro-de-areia-dancor', categoryId: '1', categoryName: 'Bombas e Filtros', price: 1200.00, stock: 5, status: 'Ativo', image: '' },
  { id: '3', name: 'Trocador de Calor Sodramar', slug: 'trocador-de-calor-sodramar', categoryId: '2', categoryName: 'Aquecimento', price: 7500.00, stock: 2, status: 'Ativo', image: '' },
  { id: '4', name: 'Refletor LED RGB 9W', slug: 'refletor-led-rgb-9w', categoryId: '3', categoryName: 'Iluminação', price: 299.90, stock: 30, status: 'Ativo', image: '' },
  { id: '5', name: 'Cloro Granulado 10kg', slug: 'cloro-granulado-10kg', categoryId: '4', categoryName: 'Tratamento', price: 189.90, stock: 50, status: 'Ativo', image: '' },
  { id: '6', name: 'Cascata Inox Naja', slug: 'cascata-inox-naja', categoryId: '5', categoryName: 'Acessórios', price: 950.00, stock: 8, status: 'Ativo', image: '' },
  { id: '7', name: 'Aspirador 8 Rodas', slug: 'aspirador-8-rodas', categoryId: '6', categoryName: 'Limpeza', price: 145.00, stock: 25, status: 'Ativo', image: '' },
  { id: '8', name: 'Robô de Limpeza Dolphin', slug: 'robo-de-limpeza-dolphin', categoryId: '7', categoryName: 'Automação', price: 6800.00, stock: 3, status: 'Ativo', image: '' },
  { id: '9', name: 'Vinil 0.8mm Azul Mosaico', slug: 'vinil-0-8mm-azul-mosaico', categoryId: '8', categoryName: 'Revestimentos', price: 120.00, stock: 100, status: 'Ativo', image: '' },
  { id: '10', name: 'Algicida de Choque 1L', slug: 'algicida-de-choque-1l', categoryId: '4', categoryName: 'Tratamento', price: 35.00, stock: 40, status: 'Inativo', image: '' },
];

export const mockSiteSettings = {
  hero_title: 'Tudo para a sua piscina em um só lugar',
  hero_subtitle: 'Equipamentos, produtos químicos e acessórios com os melhores preços.',
  hero_cta_text: 'Ver Ofertas',
  hero_image_url: '',
  store_name: 'Piscinão Soluções',
  phone: '(11) 99999-9999',
  email: 'contato@piscinaosolucoes.com.br',
  address: 'Rua das Piscinas, 123 - São Paulo, SP',
  whatsapp: '5511999999999',
  instagram: 'https://instagram.com/piscinaosolucoes',
  facebook: 'https://facebook.com/piscinaosolucoes',
  youtube: '',
  footer_text: '© 2024 Piscinão Soluções. Todos os direitos reservados.'
};
