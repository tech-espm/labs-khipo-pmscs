"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import YellowSphere from '../../../public/yellowSphere.png'
import purpleSphere from '../../../public/purpleLeft.png'
import blueEllipse from '../../../public/BlueEllipse.png'
import espaco31 from '../../../public/espaco31.png'
import CustomButtom from '../components/CustomButtom'

export default function NovaParceria() {
    return (
        <section className='w-full'>
            <section className='p-8 md:p-16 lg:p-32'>
                <section>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='hidden sm:block absolute right-0 top-60 z-50'
                    >
                        <Image src={blueEllipse} alt='.' />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        className='hidden sm:block absolute right-20 top-80'
                    >
                        <Image src={YellowSphere} alt='.' />
                    </motion.div>

                    <h1 className='text-[24px] md:text-[36px] lg:text-[48px] font-bold w-full md:w-5/6'>
                        Parque Tecnológico de São Caetano e Tech ABC anunciam nova parceria estratégica para aceleração de startups
                    </h1>
                    <p className='text-[14px] md:text-[16px] font-light'>
                        São Caetano do Sul, 28 de setembro de 2024
                    </p>
                </section>

                <section>
                    <div className='pt-10 flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 lg:pr-16'>
                            <p className='py-5 text-[14px] md:text-[16px]'>
                                Parque Tecnológico de São Caetano do Sul, em parceria com a aceleradora Tech ABC, acaba de anunciar uma nova iniciativa para impulsionar startups em estágio inicial na região do Grande ABC. A iniciativa, intitulada "StartUp Evolution", será uma oportunidade única para empreendedores locais desenvolverem seus projetos com o suporte de mentores especializados, investidores e uma rede de inovação robusta.
                            </p>

                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                                className='hidden sm:block absolute left-0'
                            >
                                <Image src={purpleSphere} alt='.' />
                            </motion.div>

                            <p className='text-[14px] md:text-[16px]'>
                                A primeira turma do programa StartUp Evolution contará com 15 startups selecionadas, que atuarão em áreas como sustentabilidade, tecnologias emergentes, saúde digital e economia criativa. Ao longo de seis meses, essas startups terão acesso a mentorias personalizadas, encontros de networking com agentes de investimento e rodadas de negócios.
                            </p>
                        </div>
                        <div className='mt-8 lg:mt-0'>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image src={espaco31} alt='.' className='' />
                            </motion.div>
                        </div>
                    </div>

                    <div className='pt-8'>
                        <p className='py-2 text-[14px] md:text-[16px]'>
                            "Essa parceria com a Tech ABC é mais um passo para consolidarmos o Parque Tecnológico como um dos principais polos de inovação do Brasil," afirma João Silva, Diretor de Inovação do Parque Tecnológico de São Caetano. "Nosso objetivo é promover a troca de conhecimento e fortalecer o ecossistema empreendedor do Grande ABC."
                        </p>
                        <p className='py-2 text-[14px] md:text-[16px]'>
                            A aceleração incluirá workshops focados na definição de proposta de valor, desenvolvimento de produtos mínimos viáveis (MVPs) e estratégias de captação de investimentos. Além disso, o programa contará com eventos públicos, como Demo Days, onde as startups poderão apresentar seus projetos para potenciais investidores.
                        </p>
                        <p className='text-[14px] md:text-[16px]'>
                            As inscrições para a seleção de startups já estão abertas, e os interessados podem enviar seus projetos até o dia 30 de outubro de 2024.
                        </p>
                    </div>
                </section>
            </section>

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
        </section>
    )
}
