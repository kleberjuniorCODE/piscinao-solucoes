import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://piscinaosolucoes.com.br'
  const currentDate = new Date()

  const staticRoutes = [
    '',
    '/catalogo',
    '/analise-agua',
    '/parceiro-pro',
    '/contato',
    '/blog',
    '/sobre',
    '/politica-privacidade',
    '/termos',
  ]

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
