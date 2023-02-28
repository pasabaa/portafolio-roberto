import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between'>
        <Link href={'/'} >Logo Fusion Media</Link>
        <div className='flex gap-3 text-gray-300'>
          <Link href={'/'} >¿Quiénes somos?</Link>
          <Link href={'/'} >Contacto</Link>
          <Link href={'/'} >Portafolio</Link>
        </div>
      </div>
    </nav>
  )
}
