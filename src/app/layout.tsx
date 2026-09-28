import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Piscinão Soluções',
  description: 'Soluções completas para sua piscina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans bg-neutral-bg text-neutral-text antialiased`}>
        {children}
      </body>
    </html>
  )
}
