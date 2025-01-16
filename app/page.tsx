import { MainVisual } from '@/components/main-visual'
import { Title } from '@/components/title'
import { Description } from '@/components/description'
import { About } from '@/components/about'
import { Values } from '@/components/values'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default async function Home() {
  // animate-disableScroll を戻す
  return (
    <main className="h-screen snap-y snap-mandatory scroll-smooth bg-mainVisualSp md:bg-mainVisualPc bg-cover">
      <div className="h-screen bg-white bg-opacity-80 snap-start">
        <MainVisual />
      </div>
      <div className="bg-white bg-opacity-95 px-12 md:px-48">
        <div className="snap-start animation-timeline-view opacity-0 animate-easeIn">
          <section>
            <Title>What is LaughCraft</Title>
            <Description />
          </section>
          <section>
            <Title>Who is Nagisa</Title>
            <About />
          </section>
          <section>
            <Title>Value Proposition | LaughCraftが提供するもの</Title>
            <Values />
          </section>
          <section>
            <Title>Skills | できること</Title>
            <Skills />
          </section>
          <section>
            <Title>Works | 制作実績</Title>
            <Projects />
          </section>
          <section>
            <Title>Contact | お問い合わせ</Title>
            <Contact />
          </section>
        </div>
      </div>
    </main>
  )
}
