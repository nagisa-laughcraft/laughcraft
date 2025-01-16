import { client } from '@/libs/client'
import Image from 'next/image'

interface Project {
  id: string
  name: string
  link: string
  image: {
    url: string
    height: number
    width: number
  }
  text: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

interface Projects {
  contents: Project[]
  totalCount: number
  offset: number
  limit: number
}

const Card = ({ project, index }: { project: Project; index: number }) => (
  <div className="relative size-full border-2 mt-4">
    <Image
      id={`slide-${index}`}
      src={project.image.url}
      alt={project.name}
      width={1000}
      height={600}
    />
    <div>
      <p className="text-base font-medium leading-normal text-slate-700">{project.name}</p>
      <p className="text-sm font-normal leading-normal">{project.text}</p>
    </div>
  </div>
)

export const Projects = async () => {
  const { contents: projects }: Projects = await client.get({ endpoint: 'projects' })
  return (
    <div className="w-full md:flex">
      {projects.map((project, index) => (
        <Card key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}
