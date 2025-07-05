import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

export const metadata: Metadata = {
  title: 'Karri Rajesh Kumar - Portfolio',
  description: 'Full Stack Developer & Machine Learning Enthusiast',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
