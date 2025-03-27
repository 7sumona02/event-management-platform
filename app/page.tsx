import { Hero1 } from '@/components/hero'
import { Particles } from '@/components/particles'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="w-screen h-full absolute">
        <Particles quantity={300} />
      </div>
      <div className='z-1'><Hero1 /></div>
  </div>
  )
}

export default page