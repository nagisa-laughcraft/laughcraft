import { client } from '@/libs/client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

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
  <CarouselItem
    key={index}
    className="relative md:basis-1/2 lg:basis-1/3 w-full aspect-video md:ml-4"
  >
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <Image src={project.image.url} fill objectFit="cover" alt={project.name} />
      <div className="absolute size-full bg-black opacity-0 hover:cursor-pointer hover:opacity-100 hover:bg-opacity-40 md:left-[-1px]">
        <p className="text-2xl text-center font-medium leading-normal text-white">{project.name}</p>
        <p className="mt-6 text-sm font-normal leading-normal text-white">{project.text}</p>
      </div>
    </a>
  </CarouselItem>
)

export const Works = async () => {
  const { contents: projects }: Projects = await client.get({ endpoint: 'projects' })
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <Card key={project.id} project={project} index={index} />
        ))}
      </CarouselContent>
    </Carousel>
  )
}
