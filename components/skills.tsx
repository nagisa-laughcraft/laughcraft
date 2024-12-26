import { RaderChart } from '@/components/rader-chart';

export const Skills = () => {
  const skills = ["HTML", "CSS", "React"]
  return (
    <>
      <RaderChart
        width={600}
        height={600}
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
    </>
  )
}