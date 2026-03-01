import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { LenisProvider } from '@/components/lenis-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'vietnamese'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Giải Pháp Tự Động Điện EAS - An Toàn – Hiệu Quả',
  description: 'CÔNG TY TNHH GIẢI PHÁP TỰ ĐỘNG ĐIỆN EAS hoạt động trong lĩnh vực cung cấp thiết bị điện, tự động hóa công nghiệp, thí nghiệm và dự án công trình điện đến 220kV.',
  generator: 'Ghouse.com.vn',
}

export const viewport: Viewport = {
  themeColor: '#3f6844',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
