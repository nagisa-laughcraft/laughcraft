import { Header } from '@/components/header'
import { About } from '@/components/about'
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';

export default async function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col" >
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            <main>
              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About Me</h2>
              <About />
              <h2
                className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
              >
                Projects
              </h2>
              <Projects />
              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
              <Skills />
              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Ablility</h2>
            </main>
          </div>
        </div>
      </div >
    </div >
  );
}