import Script from 'next/script'
import { Metadata } from 'next'
import './globals.css'

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
    icon: [{ url: '/favicon.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laughcraft | 遊び心で、機能以上の感動を',
    description: 'Laughcraftは、フリーランスエンジニアnagisaによるWebシステム開発パートナーです。',
    images: [`${BASE_URL}/ogp/laughcraft_ogp.png`],
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
