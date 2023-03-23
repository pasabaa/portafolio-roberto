import { Testimonials } from "@/components"
import Head from "next/head"

export default function AboutPage () {

    return (
        <>
          <Head>
            <title>Fusion Media - Acerca de</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className='py-6'>
            <div className='w-11/12 mx-auto'>
            
            <header className='mt-16'>
                <h1 className="mb-16 text-center text-5xl xl:text-8xl font-bold">¿Quienes somos?</h1>
                <div className='p-8 xl:pb-16 bg-gradient-to-t from-[#ef6d58] to-gray-300/10 rounded-xl flex items-end'>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                        <div className="grid grid-cols-2 gap-2">
                            <img className="rounded-md" src="https://cdn.pixabay.com/photo/2023/02/26/19/38/field-7816810_1280.jpg" alt="" />
                            <img className="rounded-md" src="https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_1280.jpg" alt="" />
                            <img className="rounded-md" src="https://cdn.pixabay.com/photo/2023/02/26/19/38/field-7816810_1280.jpg" alt="" />
                            <img className="rounded-md" src="https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_1280.jpg" alt="" />
                        </div>

                        <div className="flex items-center justify-center">
                            <div>
                            <h2 className="uppercase text-xl xl:text-4xl font-semibold">¡Bienvenidos a Fusion Media!</h2>
                                <p className="mt-4 text-sm xl:text-lg max-w-lg"> Somos una agencia de edición de video con una amplia experiencia
                                    en la producción de contenidos audiovisuales de alta calidad. Nos
                                    dedicamos a la creación de videos corporativos, comerciales,
                                    institucionales y publicitarios, entre otros</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div>
                            <h2 className="uppercase text-xl xl:text-4xl font-semibold">Nuestra pasión</h2>
                                    <p className="mt-4 text-sm xl:text-lg max-w-lg">En Fusion Media, nuestra pasión es contar historias únicas y
                                        emocionantes a través del video. Creemos que cada proyecto
                                        es una oportunidad para crear algo especial y memorable, y
                                        trabajamos incansablemente para garantizar que cada detalle
                                        sea perfecto</p>
                            </div>
                        </div>

                        
                        <div className="grid grid-cols-2 gap-2">
                            <img className="rounded-md" src="https://cdn.pixabay.com/photo/2023/02/26/19/38/field-7816810_1280.jpg" alt="" />
                            <img className="rounded-md" src="https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_1280.jpg" alt="" />
                            <img className="rounded-md" src="https://cdn.pixabay.com/photo/2023/02/26/19/38/field-7816810_1280.jpg" alt="" />
                            <img className="rounded-md" src="https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_1280.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </header>

            <Testimonials faq={true}/>

            </div>
          </main>
        </>
      )

}