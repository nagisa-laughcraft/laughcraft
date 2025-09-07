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
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="relative w-full aspect-video">
      <Image src={project.image.url} fill objectFit="cover" alt={project.name} />
    </div>
    <h3 className="mt-2 text-xl font-medium">{project.name}</h3>
    <p className="mt-1 text-sm">{project.text}</p>
  </a>
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
