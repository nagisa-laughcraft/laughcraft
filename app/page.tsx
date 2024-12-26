import { Header } from '@/components/header'
import { About } from '@/components/about'
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Title } from '@/components/title';

export default async function Home() {
  return (
    <div className="px-12 py-4 bg-white">
      <Header />
      <main>
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