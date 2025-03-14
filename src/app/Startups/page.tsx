import React from 'react'
import BoxStartups from '../components/BoxStartups/BoxStartups'
import biotecBlue from '../../../public/biotecBlue.png'
import CustomButtom from '../components/CustomButtom'

export default function Startups() {
  return (
    <div className=' w-full'>
        <div className='p-20 relative'>
        <section className='m-10 '>
            <h1 className='text-[48px] font-bold'>Startups e Projetos</h1>
            <p className='text-[20px]'>Conheça algumas das e empresas e seus projetos que decolaram com nossas iniciativas</p>
        </section>
        <div className=''>
                        <div className='m-10'>
                         <BoxStartups
                          
                            image_component={biotecBlue}
                            rua='Estrada Doutor Altino Bondesan, 500'
                            bairro='Parque Tecnológico São José dos Campos - Distrito de Eugênio de Melo'
                            cidade='São José dos Campos'
                            title='Sturtup X'
                            link=' https://alvalavanderia.com/'
                            telefone='(12) 9 9748-0727'
                            />
                        </div>

                        <div className='m-10'>
                         <BoxStartups
                          
                            image_component={biotecBlue}
                            rua='Estrada Doutor Altino Bondesan, 500'
                            bairro='Parque Tecnológico São José dos Campos - Distrito de Eugênio de Melo'
                            cidade='São José dos Campos'
                            title='Sturtup X'
                            link=' https://alvalavanderia.com/'
                            telefone='(12) 9 9748-0727'
                            />
                        </div>
                        <div className='m-10'>
                         <BoxStartups
                          
                            image_component={biotecBlue}
                            rua='Estrada Doutor Altino Bondesan, 500'
                            bairro='Parque Tecnológico São José dos Campos - Distrito de Eugênio de Melo'
                            cidade='São José dos Campos'
                            title='Sturtup X'
                            link=' https://alvalavanderia.com/'
                            telefone='(12) 9 9748-0727'
                            />
                        </div>
                        <div className='m-10'>
                         <BoxStartups
                          
                            image_component={biotecBlue}
                            rua='Estrada Doutor Altino Bondesan, 500'
                            bairro='Parque Tecnológico São José dos Campos - Distrito de Eugênio de Melo'
                            cidade='São José dos Campos'
                            title='Sturtup X'
                            link=' https://alvalavanderia.com/'
                            telefone='(12) 9 9748-0727'
                            />
                        </div>
                        <div className='m-10'>
                         <BoxStartups
                          
                            image_component={biotecBlue}
                            rua='Estrada Doutor Altino Bondesan, 500'
                            bairro='Parque Tecnológico São José dos Campos - Distrito de Eugênio de Melo'
                            cidade='São José dos Campos'
                            title='Sturtup X'
                            link=' https://alvalavanderia.com/'
                            telefone='(12) 9 9748-0727'
                            />
                        </div>
                        <div className='m-10'>
                         <BoxStartups
                          
                            image_component={biotecBlue}
                            rua='Estrada Doutor Altino Bondesan, 500'
                            bairro='Parque Tecnológico São José dos Campos - Distrito de Eugênio de Melo'
                            cidade='São José dos Campos'
                            title='Sturtup X'
                            link=' https://alvalavanderia.com/'
                            telefone='(12) 9 9748-0727'
                            />
                        </div>
        </div>
        </div>

        <section className='bg-[#573589] flex flex-col lg:flex-row p-8 md:p-16 lg:p-20 justify-between'>
                <div>
                    <h1 className='text-[24px] md:text-[36px] lg:text-[48px] font-bold text-white'>
                        Faça parte do nosso ecossistema
                    </h1>
                    <p className='text-[16px] md:text-[20px] text-white font-light'>
                        Acesse nossos editais e inscreva sua startup!
                    </p>
                </div>
                <CustomButtom title='Conheça Nossos Programas' className='bg-[#573589] border-2 border-white px-5 m-5 rounded-full text-white hover:bg-[#3f2663] hover:font-bold transition-all ease-in delay-75'/>
            </section>
    </div>
  )
}
