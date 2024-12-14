import { Header } from '@/components/header'
import { About } from '@/components/about'
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Title } from '@/components/title';

export default async function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col" >
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            <main>
              <Title>About Me</Title>
              <About />
              <Title>Skills</Title>
              <Skills />
              <Title>Projects</Title>
              <Projects />
            </main>
          </div>
        </div>
      </div >
    </div >
  );
}