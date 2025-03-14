"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Ellipse from '../../../public/Ellipse.png'
import purpleSphere from '../../../public/purpleSphere.png'
import blueSphere from '../../../public/blueSphere.png'

export default function Sobrenos() {
    return (
        <div className='space-y-20 relative'>
            <div className='px-4 md:px-20 lg:px-40 py-16 space-y-20'>
                <div className='space-y-5'>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-[48px]'>Sobre Nós</h1>
                    <div className='space-y-5 md:w-5/6 lg:w-4/6'>
                        <p className='text-base md:text-lg lg:text-[20px] font-light'>
                            Localizado na região central da cidade de São Caetano do Sul, o Parque Tecnológico poderá abrigar algumas dezenas de startups e projetos de empreendedorismo que serão impulsionados para transformar o nosso ambiente de negócios e uma nova geração de empreendedores.
                        </p>
                        <p className='text-base md:text-lg lg:text-[20px] font-light'>
                            Com arena multiuso, o Parque Tecnológico promoverá programas de aceleração de startups, rodadas de negócios, hackathons, palestras, capacitação e muito network.
                        </p>
                        <p className='text-base md:text-lg lg:text-[20px] font-light'>
                            Com a parceria de diversas Universidades, agentes de mercado e fundos de investimentos, o Parque Tecnológico estará aberto para promover o ecossistema de inovação de São Caetano do Sul e toda região do Grande ABC.
                        </p>
                        
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 1.5 }} 
                            className='hidden sm:block absolute right-0 top-16 z-50'
                        >
                            <Image src={Ellipse} alt='Ellipse' />
                        </motion.div>
                        
                        
                        <motion.div 
                            initial={{ opacity: 0, y: -50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1.5 }} 
                            className='hidden sm:block absolute right-14 top-36'
                        >
                            <Image src={purpleSphere} alt='purpleSphere' />
                        </motion.div>
                    </div>
                </div>
                
                <div className='flex flex-col md:flex-row justify-between gap-8'>
                    <div className='w-full md:w-1/3'>
                         <motion.div
                          initial={{ opacity: 0, y: -50 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          transition={{ duration: 1.5 }} >
                        <Image src="/sobrenos1.svg" alt="Sobre Nós" width={0} height={0} className='w-full' />
                        </motion.div>
                    </div>
                    <div className='w-full md:w-1/3'>
                         <motion.div
                          initial={{ opacity: 0, y: -50 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          transition={{ duration: 1.5 }} >
                        <Image src="/sobrenos2.svg" alt="Sobre Nós" width={0} height={0} className='w-full' />
                        </motion.div>
                    </div>
                    <div className='w-full md:w-1/3'>
                         <motion.div
                          initial={{ opacity: 0, y: -50 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          transition={{ duration: 1.5 }} >
                        <Image src="/sobrenos3.svg" alt="Sobre Nós" width={0} height={0} className='w-full' />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className='p-4 md:p-10 lg:p-20 w-full flex flex-col md:flex-row gap-10 md:gap-20 bg-gray-100 justify-between text-black items-start relative'>
                <div className='space-y-5 w-full'>
                    <h2 className='font-bold text-2xl md:text-[28px]'>Conselho de Inovação</h2>
                    <p className='text-base md:text-lg lg:text-[20px] font-light'>
                        Criado nos termos do art. 9º da Lei Municipal nº 5.822, de 20 de dezembro de 2019, formado por um terço do poder público municipal e dois terços da sociedade civil, o colegiado tem incumbência de formular, avaliar e incentivar ações inovadoras, tecnológicas e sustentáveis para o desenvolvimento do município.
                    </p>
                    <div>
                        <h2 className='font-bold text-xl md:text-[24px]'>Contato</h2>
                        <section className="flex flex-col gap-5 my-3">
                            <div>
                                <p className='text-base md:text-lg lg:text-[16px]'>E-mail:</p>
                                <p className='text-base md:text-lg lg:text-[16px]'>sedeti@saocaetanodosul.sp.gov.br</p>
                            </div>
                            <div>
                                <p className='text-base md:text-lg lg:text-[16px]'>Endereço</p>
                                <p className='text-base md:text-lg lg:text-[16px]'>
                                    Rua Major Carlo Del Preste, 651, Centro, CEP: 09530-000, São Caetano do Sul - SP | Secretaria Municipal de Desenvolvimento Econômico, Trabalho, Turismo, Tecnologia e Inovação - SEDETI.
                                </p>
                            </div>
                            <div>
                                <p className='text-base md:text-lg lg:text-[16px]'>Telefone</p>
                                <p className='text-base md:text-lg lg:text-[16px]'>(11) 4227-7662 / 4227-7669</p>
                            </div>
                            <div>
                                <p className='text-base md:text-lg lg:text-[16px]'>Calendário de Reuniões:</p>
                                <p className='text-base md:text-lg lg:text-[16px]'>
                                    Consultar o calendário de reuniões na Subsecretária de Tecnologia e Inovação através dos telefones (11) 4227-7662 e 4227-7669.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='hidden md:block p-[0.5px] bg-gray-500 h-screen'></div>
                <div className="w-full md:w-3/4">
                    <h2 className='font-bold text-xl md:text-[24px]'>Conselheiros</h2>
                    <ul className='flex flex-col font-light mt-4 text-base md:text-lg lg:text-[20px]'>
                        <li>LUIZ OTHERO</li>
                        <li>MARIANE BEZERRA</li>
                        <li>BRUNO VASSARI</li>
                        <li>ROBSON PEREIRA </li>
                        <li>SILVIO LUIZ VERA</li>
                        <li>JOSÉ CARLOS DE SOUZA JUNIOR</li>
                        <li>JOSÉ ROBERTO AUGUSTO DE CAMPOS</li>
                        <li>ADRIANE MONTEIRO FONTANA</li>
                        <li>ALINE COLANTUONO</li>
                        <li>CARLOS SAKURAMOTO</li>
                        <li>DANIEL CAPELOSSI CARAMORI</li>
                        <li>JEFFERSON DUARTE</li>
                        <li>LUIZ CORRACHANO JUNIOR</li>
                        <li>JOSÉ AURICCHIO JUNIOR</li>
                        <li>FABIO COSTA DE SOUZA</li>
                        <li>PAULO CEREDA</li>
                        <li>FERNANDO TRINCADO SIMON</li>
                        <li>NÁDIA CRISTINA PIRES LOZARGO</li>
                        <li>THALES VABER DE CARVALHO MENDES</li>
                        <li>PAULO ROSSI</li>
                        <li>JEFFERSON CIRNE DA COSTA </li>
                        <li>OSVALDO LUIZ PADOVAN </li>
                        <li>BRUNO ARAÚJO DE SOUZA </li>
                        <li>ANDRÉ PAES LEME</li>
                        <li>ÉLCIO BRITO</li>
                        <li>JAIRO CARDOSO DE OLIVEIRA</li>
                        <li>LEANDRO CAMPI PREARO</li>
                        <li>MARIA DO CARMO ROMEIRO</li>
                        <li>VANESSA URBANEJO ROMERO</li>
                        <li>ALESSANDRA BER </li>
                    </ul>
                </div>
                
                {/* Animação da imagem blueSphere */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1.5 }} 
                    className='hidden sm:block absolute left-0 bottom-3'
                >
                    <Image src={blueSphere} alt='blueSphere' />
                </motion.div>
            </div>
        </div>
    )
}
