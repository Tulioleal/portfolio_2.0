"use client"

import { Providers } from './providers'
import Navbar from './components/Navbar'
import { DarkMode } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <DarkMode>
            <Navbar />
            {children}
          </DarkMode>
        </Providers>
      </body>
    </html>
  )
}