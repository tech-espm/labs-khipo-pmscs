"use client";

import React from 'react'
import BoxNoticia from '../components/BoxNoticia/BoxNoticia'
import espaco from '../../../public/espaco31.png'
import { motion } from 'framer-motion'
import CustomButtom from '../components/CustomButtom';
import greenEsphere from '../../../public/greenEsphere.png'
import purpleEllipse2 from '../../../public/purpleEllipse2.png'
import Image from 'next/image'
import BlueCircle2 from '../../../public/Home/BlueCircle2.png'
import Red from '../../../public/Home/Red.png'

export default function naMidia() {
    return (
        <div className=' relative'>
                <div className='p-32'>
                    
                    
                        <Image src={purpleEllipse2} alt='.'  className='hidden sm:block absolute right-0 top-20 z-50'/>
                        <Image src={greenEsphere} alt='.' className='hidden sm:block absolute right-20 top-40'/>
                   

                <div className='mb-10'>
                        <h1 className='text-[48px] font-bold'>Últimas notícias</h1>
                        <p className='text-[20px] font-light w-3/4'>Veja o que grandes veículos de comunicação e especialistas estão falando sobre o Parque Tecnológico de São Caetano</p> 
                </div>

                <section>
                <div className='flex flex-row mb-10'>
                        <div className=''>
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>    
                        </div>   
                        <div>
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>
                        </div>
                        <div>   
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>
                        </div>
                </div>

                <div className='flex flex-row mb-10'>
                        <div>
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>    
                        </div>   
                        <div>
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>
                        </div>
                        <div>   
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>
                        </div>
                </div>
                <div className='flex flex-row mb-10 relative'>
                        <div className=''>
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>    
                                <Image src={BlueCircle2} alt=',' className='absolute -left-40  bottom-20'/>
                        </div>   
                        <div>
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>
                        </div>
                        <div >   
                                <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco} link=''/>
                        </div>
                </div>
                </section>

                <div className='relative'>
                        <Image src={Red} alt=',' className='absolute -right-10 -bottom-48' />
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
