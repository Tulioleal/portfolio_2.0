import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tulioleal.info',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          es: 'https://tulioleal.info/es',
          de: 'https://tulioleal.info/de',
        },
      },
    },
  ]
}