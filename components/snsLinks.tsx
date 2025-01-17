import Image from 'next/image'

export const SnsLinks = () => (
  <div className="relative flex gap-4 justify-center my-4">
    <a href="https://twitter.com/nagisa_laugh" target="_blank" rel="noopener noreferrer">
      <div className="rounded-full p-3 border border-black">
        <Image src="/x-icon.png" alt="x Icon" width={24} height={24} />
      </div>
    </a>
    <a href="https://github.com/nagisa-laughcraft" target="_blank" rel="noopener noreferrer">
      <Image src="/github-icon.png" alt="github Icon" width={50} height={50} />
    </a>
    <a href="https://qiita.com/nagisa_laughcraft" target="_blank" rel="noopener noreferrer">
      <Image src="/qiita-icon.png" alt="qiita Icon" width={50} height={50} />
    </a>
  </div>
)
