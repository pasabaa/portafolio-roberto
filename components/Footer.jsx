import Link from 'next/link'
import React from 'react'

import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

export const Footer = () => {


  const menuLinks = [
    {
      name: 'Acerca de',
      url: '/acerca-de'
    },
    {
      name: 'Servicios',
      url: '/servicios'
    },
    {
      name: 'Blog',
      url: '/blog'
    },
    {
      name: 'Contacto',
      url: '/contacto'
    }
  ]

  const serviceLinks = [
    {
      name: 'Diseño',
      url: '/diseno'
    },
    {
      name: 'Desarrollo',
      url: '/desarrollo'
    },
    {
      name: 'Marketing',
      url: '/marketing'
    },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <IoLogoFacebook size={24}/>,
      url: '/'
    },
    {
      name: 'Twitter',
      icon: <IoLogoTwitter size={24}/>,
      url: '/'
    },
    {
      name: 'Instagram',
      icon: <IoLogoInstagram size={24}/>,
      url: '/'
    }
  ]

  return (
    <footer className='mt-24 p-6 w-11/12 mx-auto text-sm text-gray-300'>
      <div>
        <div className='flex justify-end items-end'>
          <div className='flex gap-3'>

            {
              socialLinks?.map((item, i) => {

                return(
                  <Link key={i} href={item.url} title={item.name} >{item.icon}</Link>
                )

              })
            }

          </div>
        </div>


      </div>
      <div className='flex justify-between text-sm mt-6'>
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} Fusion Media. All Rights Reserved.</p>
        </div>
        <div className=' flex gap-2'>
          <Link href={'/'}>Términos de uso</Link>
          <Link href={'/'}>Privacidad</Link>
        </div>
      </div>
    </footer>
  )
}
