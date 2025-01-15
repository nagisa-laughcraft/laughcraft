import { MainVisual } from '@/components/main-visual'
import { About } from '@/components/about'
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Title } from '@/components/title';
import { Container } from '@/components/container';

export default async function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory scroll-smooth animate-disableScroll bg-mainVisualSp md:bg-mainVisualPc bg-cover'>
      <div className='h-screen bg-white bg-opacity-80 snap-start'>
        <MainVisual />
      </div>
      <Container>
        <Title>About Me</Title>
        <About />
      </Container>
      <Container>
        <Title>Skills</Title>
        <Skills />
      </Container>
      <Container>
        <Title>Projects</Title>
        <Projects />
      </Container>
    </div>
  );
}