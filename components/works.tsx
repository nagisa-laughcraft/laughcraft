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

const Card = ({ project }: { project: Project }) => (
  <div className="relative w-full aspect-video">
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <Image src={project.image.url} fill objectFit="cover" alt={project.name} />
      <div className="absolute size-full bg-black opacity-0 hover:cursor-pointer hover:opacity-100 hover:bg-opacity-40 md:left-[-1px]">
        <p className="p-2 text-2xl text-center font-medium leading-normal text-white">
          {project.name}
        </p>
        <p className="px-8 mt-6 text-sm font-normal leading-normal text-white">{project.text}</p>
      </div>
    </a>
  </div>
)

export const Works = async () => {
  let projects: Project[] = []

  try {
    const { contents }: Projects = await client.get({ endpoint: 'projects' })
    projects = contents
  } catch (error) {
    console.warn('Failed to fetch projects from microCMS:', error)
  }

  return (
    <div className="w-full pt-16 ease-in-animation grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  )
}
