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

export const Projects = async () => {
  const { contents: projects }: Projects = await client.get({ endpoint: "projects" });
  return (
    <div className="flex flex-col gap-10 px-4 py-4 @container">
      {
        projects.map(project => {
          return (
            <div key={project.id} className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              <div className="flex flex-col gap-3 pb-3">
                <Image src={project.image.url} alt={project.name} width={600} height={600}></Image>
                <div>
                  <p className="text-[#181411] text-base font-medium leading-normal">{project.name}</p>
                  <p className="text-[#8a7160] text-sm font-normal leading-normal">{project.text}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}