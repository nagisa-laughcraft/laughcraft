import { client } from '@/libs/client';

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

export default async function Home() {
  const { contents }: Projects = await client.get({ endpoint: "projects" });

  return (
    <div>
      <main>
        {contents.map((project) =>
          <div key={project.id}>{project.name}</div>
        )}
      </main>
    </div>
  );
}