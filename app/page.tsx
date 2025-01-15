import { MainVisual } from '@/components/main-visual'
import { About } from '@/components/about'
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Title } from '@/components/title';

export default async function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory scroll-smooth animate-disableScroll'>
      <div className='snap-start h-screen relative'>
        <MainVisual />
      </div>
      
      <main className="px-12 py-4 bg-white md:px-48">
        <div className='snap-start h-screen animation-timeline-view opacity-0 animate-easeIn'>
          <Title>About Me</Title>
          <About />
        </div>
        
        <div className='snap-start h-screen animation-timeline-view opacity-0 animate-easeIn'>
          <Title>Skills</Title>
          <Skills />
        </div>
        
        <div className='snap-start h-screen animation-timeline-view opacity-0 animate-easeIn'>
          <Title>Projects</Title>
          <Projects />
        </div>
      </main>
    </div>
  );
}