import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

export const Hero = () => {

  const [num, setNum] = useState(0);

  const phrases = [
    "Hacemos realidad tus ideas más innovadoras",
    "Juntos haremos realidad tus proyectos",
    "Tu éxito es nuestra prioridad",
    "Estamos comprometidos con tu visión",
    "Trabajamos contigo para hacer realidad tus objetivos",
    "Creamos soluciones a medida para ti",
    "Tu proyecto es nuestra pasión",
    "Te acompañamos en cada paso del camino",
    "Nuestro equipo está a tu servicio",
    "Haz que tus sueños se conviertan en realidad con nosotros"
  ];

  useEffect(()=> {
  
    let randNum = Math.floor(Math.random()*10);

    setNum(randNum);

  }, [num])

  return (
    <header className='relative min-h-screen'>
      <img className='relative object-cover w-full h-full' src="/static/images/hero.jpg" alt="" />
      <div className='absolute inset-0 p-8 xl:pb-16 bg-gradient-to-t from-black to-black/60 flex flex-col items-center justify-center'>
        <Navbar/>
        <div className='text-center mb-auto h-[40rem] flex flex-col items-center justify-center'>
          <h1 className='text-4xl xl:text-6xl font-bold max-w-xl'>{phrases[num]}</h1>
          <p className='max-w-lg text-gray-300 my-8 hidden xl:block text-lg'>En nuestra agencia de edición de video, nos enfocamos en la creatividad y la pasión para ofrecerte un servicio excepcional</p>
          <div className='flex justify-center gap-4'>
            <button className='uppercase px-4 py-3 bg-[#ef6d58] rounded-xl font-semibold'>Nuestro trabajo</button>
            <button className='uppercase px-4 py-3 border border-[#ef6d58] rounded-xl font-semibold'>Contacto</button>
          </div>
        </div>
      </div>
    </header>
  )
}
