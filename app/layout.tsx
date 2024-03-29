import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RCE70',
  description: 'RCE70 is a web-based code execution platform.',
  icons: [
    {
      hostname: 'rce70.vercel.app',
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
