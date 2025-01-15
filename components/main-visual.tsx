"use client"
import { useWindowSize } from "@/hooks/use-window-size"
import { ReadMoreIcon } from "@/components/icons/read_more"
import Image from "next/image"
import { LogoIcon } from "@/components/icons/logo"

const mainMessage = '遊び心で、機能以上の感動を'

export const MainVisual = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768
  return (
    <div>
      {
        isMobile ? <Image src="/main_visual_sp.png" alt="main visual" fill objectFit="cover" /> : <Image src="/main_visual_pc.png" alt="main visual" fill objectFit="cover" />
      }
      <div className='h-screen w-screen bg-white absolute bg-opacity-80 flex items-center justify-center flex-col gap-4'>
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
        <div className="flex p-4 gap-1 opacity-0 animate-easeOut" style={{ animationDelay: "3.25s" }}>
          <div className="size-8 pt-1">
            <LogoIcon />
          </div>
          <h1 className="text-gray-600 text-3xl font-bold leading-tight">LaughCraft</h1>
        </div>
        <div className='flex absolute top-[85%] opacity-0 animate-easeOut' style={{ animationDelay: "3.5s" }}>
          <ReadMoreIcon />
          <p className='text-gray-500 text-lg'>Read More</p>
        </div>
      </div>
    </div>
  )
}