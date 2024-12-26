"use client"
import { useWindowSize } from "@/hooks/use-window-size"
import { RaderChart } from '@/components/rader-chart';

const skills = ["HTML", "CSS", "React", "TypeScript", "D3.js", "React Native", "Next.js", "Ruby", "Python", "AWS", "GCP"]

export const Skills = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768
  return (
    <div className="md:flex">
      <RaderChart
        width={isMobile ? width - 100 : 400}
      />
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {skills.map(skill => {
          return (
            <div key={skill} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f5f2f0] pl-4 pr-4">
              <p className="text-[#181411] text-sm font-medium leading-normal">{skill}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}