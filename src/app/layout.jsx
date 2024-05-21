import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import clsx from 'clsx'


import { Space_Grotesk , Roboto_Mono, Inter, Lora, Work_Sans, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import '@/styles/tailwind.css'

export const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: {
    template: '%s - zakariae belkasmi ',
    default:
      'zakariae belkasmi - Frontend developer',
  },
  description:
    'I’m zakariae belkasmi, I’m a passionate self taught fullstack web developer, I enjoy building web projects with cutting edge technologies, I use mainly javascript and its framework like : ReactJs, GatsbyJs and NextJs.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full file:antialiased" suppressHydrationWarning>
      <body   className={clsx('flex h-full  bg-slate-50 dark:bg-zinc-900 relative', manrope.className)}
      >
       
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
