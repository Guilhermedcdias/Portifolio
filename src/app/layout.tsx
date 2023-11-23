import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
// No seu componente ou no _app.tsx
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Hotjar from '@hotjar/browser';


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
  const siteId = 3747665;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
