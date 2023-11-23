import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
// No seu componente ou no _app.tsx
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portifólio',
  description: 'Criado por: Guilherme Duarte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
