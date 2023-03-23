import React from 'react'

export const Portfolio = () => {

  const projects = [
    {
      name: 'Redes sociales',
      img: '/static/images/portfolio_redes.jpg'
    },
    {
      name: 'Publicidad',
      img: '/static/images/portfolio_publicidad.jpg'
    },
    {
      name: 'Eventos',
      img: '/static/images/portfolio_eventos.jpg'
    },
    {
      name: 'Corporativo',
      img: '/static/images/portfolio_corporativo.jpg'
    }
  ]

  return (
    <section className='mt-16'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='uppercase text-[#ef6d58]'>Portafolio</h2>
        <h3 className='mt-4 text-2xl'>Últimos trabajos</h3>
      </div>
      <div className='mt-8'>
        <div className='grid grid-cols-5 gap-6'>

          {
            projects.map((item, i) => {

              return(
                <div key={i} className='col-span-3 relative h-64 card-hover-img overflow-hidden card-project last:col-span-3 rounded-xl'>
                  <img className='object-cover w-full h-full relative rounded-xl' src={item.img} alt={item.name} />
                  <div className='absolute inset-0 flex p-4 items-end bg-gray-600/20 rounded-xl'>
                    <h1 className='font-semibold uppercase'>{item.name}</h1>
                  </div>
                </div>
              )

            })
          }

        </div>
      </div>
    </section>
  )
}
