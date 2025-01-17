import { MainVisual } from '@/components/main-visual'
import { Title } from '@/components/title'
import { About } from '@/components/about'
import { Values } from '@/components/values'
import { Works } from '@/components/works'
import { Profile } from '@/components/profile'
import { Skills } from '@/components/skills'
import { Footer } from '@/components/footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laughcraft | 遊び心で、機能以上の感動を',
  description: 'Laughcraftは、フリーランスエンジニアnagisaによるWebシステム開発パートナーです。',
  openGraph: {
    title: 'Laughcraft | 遊び心で、機能以上の感動を',
    description: 'Laughcraftは、フリーランスエンジニアnagisaによるWebシステム開発パートナーです。',
    url: 'https://laughcraft.dev',
    siteName: 'Laughcraft',
    images: [
      {
        url: 'ogp/laughcraft_ogp.png',
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
    images: ['ogp/laughcraft_ogp.png'],
  },
}

interface Section {
  id: string
  title: string
  Component: React.ComponentType
}

const sections: Section[] = [
  {
    id: 'about',
    title: 'About',
    Component: About,
  },
  {
    id: 'values',
    title: 'Values',
    Component: Values,
  },
  {
    id: 'works',
    title: 'Works',
    Component: Works,
  },
  {
    id: 'profile',
    title: 'Profile',
    Component: Profile,
  },
  {
    id: 'skills',
    title: 'Skills',
    Component: Skills,
  },
] as const

export default async function Home() {
  return (
    <div className="h-screen animate-disableScroll scroll-smooth bg-mainVisualSp md:bg-mainVisualPc bg-cover">
      <div className="h-screen bg-white bg-opacity-80 snap-start">
        <MainVisual />
      </div>
      <main className="bg-white bg-opacity-95 pb-12 md:pb-36 px-8 xs:px-12 pc:px-48">
        <div>
          {sections.map(({ id, title, Component }) => (
            <section key={id} className="pt-12 md:pt-36">
              {title !== 'About' ? <Title>{title}</Title> : <></>}
              <Component />
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
