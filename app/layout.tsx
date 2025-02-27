import Script from 'next/script'
import { Metadata } from 'next'
import './globals.css'
import { PHProvider, PostHogPageView } from '@/components/providers/posthog-provider'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const DOMAIN_NAME = process.env.NEXT_PUBLIC_DOMAIN_NAME || 'localhost:3000'
const BASE_URL = `https://${DOMAIN_NAME}`

export const metadata: Metadata = {
  title: 'Laughcraft | 遊び心で、機能以上の感動を',
  description: 'Laughcraftは、フリーランスエンジニアnagisaによるWebシステム開発パートナーです。',
  openGraph: {
    title: 'Laughcraft | 遊び心で、機能以上の感動を',
    description: 'Laughcraftは、フリーランスエンジニアnagisaによるWebシステム開発パートナーです。',
    url: BASE_URL,
    siteName: 'Laughcraft',
    images: [
      {
        url: `${BASE_URL}/ogp/laughcraft_ogp.png`,
        width: 1200,
        height: 630,
        alt: 'Laughcraft OG Image',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laughcraft | 遊び心で、機能以上の感動を',
    description: 'Laughcraftは、フリーランスエンジニアnagisaによるWebシステム開発パートナーです。',
    images: [`${BASE_URL}/ogp/laughcraft_ogp.png`],
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'nagisa' }],
  generator: 'Next.js',
  applicationName: 'Laughcraft',
  keywords: ['Laughcraft', 'Web開発', 'フリーランス', 'エンジニア', 'システム開発'],
  creator: 'nagisa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied'
                });
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <PHProvider>
          <PostHogPageView />
          {children}
        </PHProvider>
      </body>
    </html>
  )
}
