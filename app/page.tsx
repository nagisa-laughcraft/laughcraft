import { Header } from '@/components/header'
import { MainVisual } from '@/components/main-visual'
import { About } from '@/components/about'
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Title } from '@/components/title';

export default async function Home() {
  return (
    <div>
      <div className='w-screen items-center'>
        <Header />
      </div>
      <MainVisual />
      <main className="px-12 py-4 bg-white">
        <Title>About Me</Title>
        <About />
        <Title>Skills</Title>
        <Skills />
        <Title>Projects</Title>
        <Projects />
      </main>
    </div >
  );
}