'use client'
import { useWindowSize } from '@/hooks/use-window-size'
import { RaderChart } from '@/components/rader-chart'

const skills = [
  'TypeScript',
  'React',
  'Vue.js',
  'Next.js',
  'React Native',
  'Java',
  'Kotlin',
  'Swift',
  'Ruby',
  'C#',
  'Go',
  'Python',
  'git',
  'github',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'GCP',
  'figma',
  'WordPress',
  'Agile',
]

export const Skills = () => {
  const [width] = useWindowSize()
  const isMobile = width < 768
  return (
    <div className="md:flex pt-8 justify-items-center md:justify-end gap-8">
      <div className="md:min-w-[400px]">
        <RaderChart width={isMobile ? width - 120 : 400} />
      </div>
      <div className="flex gap-3 p-4 flex-wrap items-start ease-in-animation max-w-[400px]">
        {skills.map((skill) => {
          return (
            <div
              key={skill}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-orange-100 pl-4 pr-4"
            >
              <p className="text-[#181411] text-sm font-medium leading-normal">{skill}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
