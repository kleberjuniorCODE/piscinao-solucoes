import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://piscinaosolucoes.com.br'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/painel/', '/minha-conta/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
