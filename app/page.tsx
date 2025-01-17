import { MainVisual } from '@/components/main-visual'
import { Title } from '@/components/title'
import { Description } from '@/components/description'
import { About } from '@/components/about'
import { Values } from '@/components/values'
import { Skills } from '@/components/skills'
import { Works } from '@/components/works'
import { Footer } from '@/components/footer'

interface Section {
  id: string
  title: string
  Component: React.ComponentType
}

const sections: Section[] = [
  {
    id: 'about',
    title: 'About',
    Component: Description,
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
    Component: About,
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
      <main className="bg-white bg-opacity-95 px-12 md:px-48">
        <div>
          {sections.map(({ id, title, Component }) => (
            <section key={id} className="py-12">
              <Title>{title}</Title>
              <Component />
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
