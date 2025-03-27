import { Hero1 } from '@/components/hero'
import { Particles } from '@/components/particles'
import { Solutions } from '@/components/solutions'
import { Story } from '@/components/story'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="fixed inset-0 w-full h-screen">
        <Particles quantity={150} />
      </div>
      <div className='z-1'><Hero1 /></div>
      <Story />
      <Solutions />
  </div>
  )
}

export default page