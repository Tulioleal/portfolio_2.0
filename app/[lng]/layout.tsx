import { Providers } from '../providers'
import { DarkMode } from '@chakra-ui/react'
import { dir } from 'i18next'

const languages = ['en', 'es']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  params:{
    lng:string
  },
  children:React.ReactNode
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body>
        <Providers>
          <DarkMode>
            {children}
          </DarkMode>
        </Providers>
      </body>
    </html>
  )
}