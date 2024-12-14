import { client } from '@/libs/client';
import Image from "next/image"

interface Project {
  id: string;
  name: string;
  link: string;
  image: {
    url: string,
    height: number,
    width: number
  };
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

interface Projects {
  contents: Project[];
  totalCount: number;
  offset: number;
  limit: number;
}

const Card = ({ project }: { project: Project }) => (
  <div className="flex flex-col gap-3 pb-3 w-60 border-2">
    <Image src={project.image.url} alt={project.name} width={300} height={300}></Image>
    <div>
      <p className="text-base font-medium leading-normal">{project.name}</p>
      <p className="text-sm font-normal leading-normal">{project.text}</p>
    </div>
  </div>
)

export const Projects = async () => {
  const { contents: projects }: Projects = await client.get({ endpoint: "projects" });
  return (
    <div className="flex gap-10 @container flex-wrap">
      {
        projects.map(project => <Card key={project.id} project={project} />)
      }
    </div>
  )
}