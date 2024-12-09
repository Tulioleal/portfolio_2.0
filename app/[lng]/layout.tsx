import { Providers } from '../providers'
import { DarkMode } from '@chakra-ui/react'
import { dir } from 'i18next'
import { ReactNode, Usable, use } from 'react';

export interface LayoutProps {
  params: Promise<{ lng: string }>
  children: ReactNode;
}

const languages = ['en', 'es']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params
}: LayoutProps) {
  const paramsTemp = use(params as Usable<{lng:string}>)
  const { lng } = paramsTemp

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