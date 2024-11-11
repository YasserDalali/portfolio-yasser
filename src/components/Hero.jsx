import React from 'react'
import Marqueeribbons from './Marquee'
import yasser from '../yasser.png'
export default function Hero() {
  return (
    <div>
        <Marqueeribbons />
        <img src={yasser} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
    </div>
  )
}
