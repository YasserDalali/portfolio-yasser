import React from 'react';

export default function NavBar() {
  return (
    <div className='flex justify-between bg-white min-w-[98vw] rounded-2xl shadow-sm m-4 items-center p-ws'>
      <h1 className='text-3xl font-bold'>CodedByYASSER</h1>

      <button className='border-2 text-dark border-dark rounded-md px-4 py-2'>
        HIRE ME
      </button>
    </div>
  );
}
