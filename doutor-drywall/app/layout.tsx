import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doutor Drywall ',
  description:
    '13 anos de experiência em drywall com atendimento técnico e entrega rápida. Frete grátis na Zona Sudoeste. Fale com um especialista agora!',
  keywords:
    'drywall rj, loja de drywall no rio de janeiro, material para drywall rj, placas de drywall rj, especialista em drywall, construção a seco, divisória em drywall',
  robots: 'index, follow',
  openGraph: {
    title: 'Doutor Drywall',
    description:
      '13 anos de experiência em drywall com atendimento técnico e entrega rápida',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="./new-favicon.ico" sizes="any" />
      <body className={inter.className}>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
