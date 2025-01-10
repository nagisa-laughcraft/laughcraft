import { MainVisual } from '@/components/main-visual'
import { About } from '@/components/about'
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Title } from '@/components/title';

export default async function Home() {
  return (
    <div>
      <MainVisual />
      <main className="px-12 py-4 bg-white md:px-48">
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