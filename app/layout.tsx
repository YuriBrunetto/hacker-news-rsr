import '@/styles/globals.css'
import { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Footer from '@/components/footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: 'Hacker News RSR',
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-950 font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="relative flex min-h-screen w-full flex-col items-center">
              <SiteHeader />
              <div className="flex w-full max-w-[980px]">
                <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                  {' '}
                  <div className="flex w-full flex-col items-center gap-2">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
                      hacker-news-rsr
                    </h1>
                    <p className="max-w-[300px] text-center text-lg text-muted-foreground sm:text-xl">
                      {siteConfig.description}
                    </p>
                  </div>
                  {children}
                  <Footer />
                </section>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
