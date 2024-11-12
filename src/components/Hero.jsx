import React from 'react';
import Marqueeribbons from './Marquee';
import yasser from '../yasser.png';
import NavBar from './NavBar';

export default function Hero() {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      {/* NavBar at the top */}
      <nav className='absolute top-0 left-0 w-full z-20'>
        <NavBar />
      </nav>

      <div className='absolute -top-60 -left-60 w-[50rem] h-[50rem] rounded-full border-2 opacity-25 border-dark'>

      </div>

      {/* Marquee background */}
      <section className='absolute inset-0 -z-10'>
        <Marqueeribbons />
      </section>

      {/* Hero Image */}
      <img 
        src={yasser} 
        className='h-full w-auto max-w-screen  top-20 object-contain absolute left-1/2 transform -translate-x-1/2 z-20'
        alt="Yasser"
      />
    </div>
  );
}
