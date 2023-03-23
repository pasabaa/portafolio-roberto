import React from 'react'

export const CountExperience = () => {
  return (
    <section className='scale-hover transition-all ease-in'>
      <div className='flex flex-col justify-between xl:flex-row items-center divide-y xl:divide-y-0 xl:divide-x divide-gray-400 bg-[#c6d93c] text-[#391400] rounded-xl mt-16'>
        <div className='py-8 xl:px-8 text-center flex flex-col justify-center w-full items-center'>
          <h2 className='font-bold text-5xl'>+1000</h2>
          <p className='text-gray-500 font-semibold'>Más de 1000 proyectos completados</p>
        </div>
        <div className='py-8 xl:px-8 text-center flex flex-col justify-center w-full items-center'>
          <h2 className='font-bold text-5xl'>+100</h2>
          <p className='text-gray-500 font-semibold'>Más de 100 clientes al rededor del mundo</p>
        </div>
        <div className='py-8 xl:px-8 text-center flex flex-col justify-center w-full items-center'>
          <h2 className='font-bold text-5xl'>+5</h2>
          <p className='text-gray-500 font-semibold'>Más de 5 años de experiencia</p>
        </div>
      </div>
    </section>
  )
}
