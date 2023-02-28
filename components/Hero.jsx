import React from 'react'

export const Hero = () => {
  return (
    <header className='relative mt-16'>
      <img className='relative object-cover w-full h-full rounded-xl' src="/static/images/hero.webp" alt="" />
      <div className='absolute inset-0 p-8 xl:pb-16 bg-gradient-to-t from-[#ef6d58] to-gray-300/10 rounded-xl flex items-end'>
        <div>
          <h1 className='text-5xl xl:text-6xl font-semibold max-w-xs'>We're Help To Build Your Dream Project</h1>
          <p className='max-w-xs text-gray-300 mt-4 hidden xl:block'>Agency provides a full service range including technical skills, design, business understading.</p>
          <div className='flex gap-4 mt-4'>
            <button className='uppercase px-4 py-3 bg-[#ef6d58] rounded-xl'>Nuestro trabajo</button>
            <button className='uppercase px-4 py-3 border border-[#ef6d58] rounded-xl'>Contacto</button>
          </div>
        </div>
      </div>
    </header>
  )
}
