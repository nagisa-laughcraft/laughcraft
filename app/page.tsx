import { MainVisual } from '@/components/main-visual'
import { Title } from '@/components/title'
import { Description } from '@/components/description'
import { About } from '@/components/about'
import { Values } from '@/components/values'
import { Skills } from '@/components/skills'
import { Works } from '@/components/works'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default async function Home() {
  return (
    <div className="h-screen animate-disableScroll scroll-smooth bg-mainVisualSp md:bg-mainVisualPc bg-cover">
      <Header />
      <div className="h-screen bg-white bg-opacity-80 snap-start">
        <MainVisual />
      </div>
      <main className="bg-white bg-opacity-95 px-12 md:px-48">
        <div className="snap-start animation-timeline-view opacity-0 animate-easeIn">
          <section className="py-12">
            <Title>About</Title>
            <Description />
          </section>
          <section>
            <Title>Value Proposition</Title>
            <Values />
          </section>
          <section>
            <Title>Works</Title>
            <Works />
          </section>
          <section>
            <Title>Profile</Title>
            <About />
            <Skills />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
