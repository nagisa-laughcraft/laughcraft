import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="h-screen bg-white bg-opacity-95 px-12 md:px-48">
    <div className="snap-start animation-timeline-view opacity-0 animate-easeIn">{children}</div>
  </div>
)
