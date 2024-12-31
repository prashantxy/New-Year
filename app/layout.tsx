import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FloatingBackground from './component/FloatingBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime New Year Spirit',
  description: 'Generate your personalized anime character for the New Year!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingBackground />
        {children}
      </body>
    </html>
  )
}

