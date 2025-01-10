"use client"
import { Logo } from '@/components/logo'
import { useWindowSize } from "@/hooks/use-window-size"
import Image from "next/image"

export const MainVisual = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768
  return (
    <div className='h-screen w-screen'>
      {
        isMobile ? <Image src="./main_visual_sp.png" alt="main visual" fill objectFit="cover" /> : <Image src="./main_visual_pc.png" alt="main visual" fill objectFit="cover" />
      }
      <div className='h-screen w-screen bg-white absolute bg-opacity-80 flex items-center justify-center flex-col gap-4'>
        <p className="text-gray-600 text-3xl tracking-wider font-bold">遊び心で、機能以上の感動を</p>
        <Logo />
      </div>
    </div>
  )
}