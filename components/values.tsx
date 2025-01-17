import Image from 'next/image'

interface ValueItem {
  title: string
  description: string
  image: string
  alt: string
}

const valueItems: ValueItem[] = [
  {
    title: 'One Stop',
    description: 'デザイン、開発、運用まですべて任せられる',
    image: '/professional.png',
    alt: 'One Stop',
  },
  {
    title: 'Speed',
    description: '個人だからこそできるスピード感で成果をお届け',
    image: '/car.png',
    alt: 'Speed',
  },
  {
    title: 'Kaizen',
    description: '業務ツールやAIサービスを用いて業務フローの最適化をお手伝い',
    image: '/robot.png',
    alt: 'Kaizen',
  },
  {
    title: 'Communication',
    description: '現場で一緒に話し、考える',
    image: '/communication.png',
    alt: 'Communication',
  },
] as const

export const Values = () => (
  <div className="pt-8 flex gap-8 justify-center items-center flex-col md:flex-row">
    {valueItems.map(({ title, description, image, alt }) => (
      <div key={title} className="w-[300px]">
        <h3 className="text-center text-xl ease-in-animation mb-4">{title}</h3>
        <p className="text-center ease-in-animation min-h-12">{description}</p>
        <Image src={image} alt={alt} width={300} height={300} className="ease-in-animation" />
      </div>
    ))}
  </div>
)
