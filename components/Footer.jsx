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
    <footer className='mt-24 p-6 w-11/12 mx-auto text-sm'>
      <div className='grid grid-cols-5'>

        <div>
          <h3>Fusion Media</h3>
        </div>

        <div className='flex flex-col gap-1'>
          <h3 className='uppercase text-[#ef6d58]'>Menu</h3>
          {
            menuLinks?.map((item, i) => {

              return(
                <Link key={i} href={item.url} title={item.name}>{item.name}</Link>
              )

            })
          }
        </div>

        <div className='flex flex-col gap-1'>
          <h3 className='uppercase text-[#ef6d58]'>Servicios</h3>
          {
            serviceLinks?.map((item, i) => {

              return(
                <Link key={i} href={item.url} title={item.name}>{item.name}</Link>
              )

            })
          }
        </div>

        <div className='col-span-2 flex justify-end items-end'>
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
      <hr className='my-8' />
      <div className='flex justify-between text-sm'>
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
