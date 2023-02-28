import React from 'react'

export const Portfolio = () => {
  return (
    <section className='mt-16'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='uppercase text-[#ef6d58]'>Portafolio</h2>
        <h3 className='mt-4 text-2xl'>Últimos trabajos</h3>
        <div className='w-full flex justify-between items-end my-8 text-gray-300'>
          <button className='flex flex-col items-end justify-end active'><span className='text-sm'>10</span>Show all</button>
          <button className='flex flex-col items-end justify-end'><span className='text-sm'>10</span>Design</button>
          <button className='flex flex-col items-end justify-end'><span className='text-sm'>10</span>Branding</button>
          <button className='flex flex-col items-end justify-end'><span className='text-sm'>10</span>Illustration</button>
          <button className='flex flex-col items-end justify-end'><span className='text-sm'>10</span>Motion</button>
        </div>
      </div>
      <div className='mt-8'>
        <div className='grid grid-cols-5 gap-8'>

          <div className='col-span-2 relative h-64'>
            <img className='object-cover w-full h-full relative rounded-xl' src="/static/images/1.jpg" alt="" />
            <div className='absolute inset-0 flex p-4 items-end bg-gray-600/20 rounded-xl'>
              <h1 className='font-semibold uppercase'>Sofa</h1>

            </div>
          </div>

          <div className='col-span-3 relative h-64'>
            <img className='object-cover w-full h-full relative rounded-xl' src="/static/images/2.png" alt="" />
            <div className='absolute inset-0 flex p-4 items-end bg-gray-600/20 rounded-xl'>
              <h1 className='font-semibold uppercase'>Sofa</h1>

            </div>
          </div>

          <div className='col-span-3 relative h-64'>
            <img className='object-cover w-full h-full relative rounded-xl' src="/static/images/3.png" alt="" />
            <div className='absolute inset-0 flex p-4 items-end bg-gray-600/20 rounded-xl'>
              <h1 className='font-semibold uppercase'>Sofa</h1>

            </div>
          </div>

          <div className='col-span-2 relative h-64'>
            <img className='object-cover w-full h-full relative rounded-xl' src="/static/images/4.jpg" alt="" />
            <div className='absolute inset-0 flex p-4 items-end bg-gray-600/20 rounded-xl'>
              <h1 className='font-semibold uppercase'>Sofa</h1>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
