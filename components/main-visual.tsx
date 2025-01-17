import { ReadMoreIcon } from '@/components/icons/read_more'
import { LogoIcon } from '@/components/icons/logo'

const mainMessage = '遊び心で、機能以上の感動を'

export const MainVisual = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4 md:gap-8">
      <p className="text-gray-600 tracking-wider font-bold font-yusei text-2xl xs:text-3xl md:text-4xl lg:text-5xl">
        {mainMessage.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-easeOut"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {char}
          </span>
        ))}
      </p>
      <div className="flex p-4 gap-1 opacity-0 animate-easeOut" style={{ animationDelay: '3.25s' }}>
        <div className="p-1 pt-2 size-6 md:size-8">
          <LogoIcon />
        </div>
        <h1 className="text-[#F2690D] font-bold leading-tight text-2xl md:text-3xl">LaughCraft</h1>
      </div>
      <div className="mt-48 flex opacity-0 animate-easeOut" style={{ animationDelay: '3.5s' }}>
        <p className="text-gray-500 mr-2 text-xl">Read More</p>
        <ReadMoreIcon />
      </div>
    </div>
  )
}
