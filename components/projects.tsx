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

{/* <div>
<p className="text-base font-medium leading-normal">{project.name}</p>
<p className="text-sm font-normal leading-normal">{project.text}</p>
</div> */}

// TODO: hover時に情報出す & リンク
// TODO: indexがminの時とmaxの時の処理
const Card = ({ project, index }: { project: Project, index: number }) => (
  <div className="carousel-item relative w-full h-full">
    <Image id={`slide-${index}`} src={project.image.url} alt={project.name} width={1000} height={600} />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href={`#slide-${index - 1}`} className="btn btn-circle">❮</a>
      <a href={`#slide-${index + 1}`} className="btn btn-circle">❯</a>
    </div>
  </div>
)

export const Projects = async () => {
  const { contents: projects }: Projects = await client.get({ endpoint: "projects" });
  return (
    <div className="carousel w-full m-4">
      {
        projects.map((project, index) => <Card key={project.id} project={project} index={index} />)
      }
    </div>
  )
}