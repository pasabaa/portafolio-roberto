import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='px-6 w-11/12 mx-auto'>
      <div className='flex justify-between items-center'>
        <Link href={'/'} ><img src="/static/images/fusion_media_logo.png" className='w-12' alt="Logo Fusion Media" /></Link>
        <div className='flex gap-3 text-gray-300'>
          <Link href={'/acerca-de'} >¿Quiénes somos?</Link>
          <Link href={'/'} >Contacto</Link>
          <Link href={'/'} >Portafolio</Link>
        </div>
      </div>
    </nav>
  )
}
