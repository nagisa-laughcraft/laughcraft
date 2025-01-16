import Image from 'next/image'

export const Values = () => (
  <div className="py-4 md:flex">
    <div className="my-8">
      <h3 className="text-center text-xl">One Stop</h3>
      <p className="text-center">デザイン、開発、運用まですべて任せられる</p>
      <Image src="/professional.png" alt="One Stop" width={300} height={300} />
    </div>
    <div className="my-8">
      <h3 className="text-center text-xl">Speed</h3>
      <p className="text-center">個人だからできるスピード感で成果をお届け</p>
      <Image src="/car.png" alt="Speed" width={300} height={300} />
    </div>
    <div className="my-8">
      <h3 className="text-center text-xl">Kaizen</h3>
      <p className="text-center">業務ツール、AIサービスを用いた業務フローの最適化をお手伝い</p>
      <Image src="/robot.png" alt="Kaizen" width={300} height={300} />
    </div>
    <div className="my-8">
      <h3 className="text-center text-xl">Communication</h3>
      <p className="text-center">現場で一緒に話し考える</p>
      <Image src="/communication.png" alt="Communication" width={300} height={300} />
    </div>
  </div>
)
