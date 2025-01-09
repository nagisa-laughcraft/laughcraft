"use client"
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
      <div className='h-screen w-screen bg-slate-100 absolute bg-opacity-40'>
        <p className="absolute text-black text-3xl top-60 left-1/3">text</p>
      </div>
    </div>
  )
}