import React from 'react'
import FaqAccordion from './Accordion'

export const Testimonials = ({faq}) => {

  const faqs = [
    {
      question: "¿Qué tipo de videos produce su agencia?",
      answer: `En Fusion Media, producimos una amplia variedad de videos, incluyendo videos corporativos,
      comerciales, institucionales, publicitarios, de capacitación y más. Si tiene un proyecto en
      mente ¡Contáctenos para ver cómo podemos ayudarlo!`,
    },
    {
      question: "¿Cuánto cuesta producir un video?",
      answer: "Lorem ipsum...",
    },
    {
      question: "¿Cuánto tiempo toma producir un video?",
      answer: "Lorem ipsum...",
    },
    {
      question: '¿Pueden producir videos en varios idiomas?',
      answer: 'Lorem ipsum...'
    }
  ];

  const testimonials = [
    {
      name: 'Alan Marti',
      company: 'Meta Inc.',
      src: 'https://randomuser.me/api/portraits/men/32.jpg',
      opinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus dignissimos deserunt fugit fugiat est praesentium itaque nisi voluptatum totam!',
      points: 5
    },
    {
      name: 'Richard Karin',
      company: 'Meta Inc.',
      src: 'https://randomuser.me/api/portraits/men/97.jpg',
      opinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus dignissimos deserunt fugit fugiat est praesentium itaque nisi voluptatum totam!',
      points: 4
    },
    {
      name: 'Graham Vega',
      company: 'Meta Inc.',
      src: 'https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      opinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus dignissimos deserunt fugit fugiat est praesentium itaque nisi voluptatum totam!',
      points: 3
    },
    {
      name: 'Maria Trofinova',
      company: 'Meta Inc.',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50',
      opinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus dignissimos deserunt fugit fugiat est praesentium itaque nisi voluptatum totam!',
      points: 4
    }
  ]

  return (
    <section className='mt-16'>
      
      <div className='p-8 xl:pb-16 bg-gradient-to-t from-[#ef6d58]/60 to-black rounded-xl'>
        <div className='text-center w-full'>
          <h2 className='uppercase text-[#ef6d58]'>Testimonios</h2>
          <h3 className='mt-4 text-2xl'>¿Qué dicen nuestros clientes?</h3>
          
        </div>
        <div className='mt-8 relative overflow-hidden rounded-xl shadow border-[#ef6d58] grid gap-px bg-[#ef6d58] grid-cols-1 xl:grid-cols-2'>

          {
            testimonials.map((item,i) => {

              return(
                <div key={i} className='flex flex-col gap-4 p-8 group relative bg-white text-gray-500'>
                  <div className='flex gap-2'>
                    
                    {
                      Array.from({ length: item.points }, () => <svg key={i} className='fill-yellow-500' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>)
                    }
                  </div>
                  <div>
                    <p className='text-sm'>{item.opinion}</p>
                  </div>
                  <div>
                    <div className='flex items-center gap-6'>
                      <img className='w-16 object-cover rounded-full' src={item.src} alt={item.name} />
                      <div>
                        <h3 className='font-semibold text-black'>{item.name}</h3>
                        <p>{item.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )

            })
          }

        </div>


        {
          faq && 
          
          <div className='mt-8'>
            <div className='max-w-lg mx-auto'>
              <h2 className='uppercase text-[#ef6d58]'>FAQ</h2>
              <h3 className='text-2xl'>Preguntas frecuentes</h3>
              <FaqAccordion faqData={faqs}/>
            </div>
          </div>
        }

      </div>
    </section>
  )
}
