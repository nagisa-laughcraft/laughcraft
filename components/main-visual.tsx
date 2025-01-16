import { ReadMoreIcon } from '@/components/icons/read_more'
import { LogoIcon } from '@/components/icons/logo'

const mainMessage = '遊び心で、機能以上の感動を'

export const MainVisual = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <p className="text-gray-600 text-3xl tracking-wider font-bold font-yusei">
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
        <div className="size-8 p-1 pt-2">
          <LogoIcon />
        </div>
        <h1 className="text-gray-600 text-3xl font-bold leading-tight">LaughCraft</h1>
      </div>
      <div className="mt-48 flex opacity-0 animate-easeOut" style={{ animationDelay: '3.5s' }}>
        <p className="text-gray-500 text-xl mr-2">Read More</p>
        <ReadMoreIcon />
      </div>
    </div>
  )
}
