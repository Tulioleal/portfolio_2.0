import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tulioleal./en',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          es: 'https://tulioleal.info/en',
          de: 'https://tulioleal.info/es',
        },
      },
    },
  ]
}