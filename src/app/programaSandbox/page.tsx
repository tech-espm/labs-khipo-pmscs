"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion' // Importando Framer Motion
import yellowEllipse from '../../../public/yellowEllipse.png'
import espacoSandbox from '../../../public/espacoSandbox.png'
import yellowPurple from '../../../public/yellowPurple.png'
import blueGreen from '../../../public/blueGreen.png'
import pinkBlue from '../../../public/pinkBlue.png'
import CustomButtom from '../components/CustomButtom'
import BoxInovacao from '../components/Box/BoxInovacao'

export default function programaSandbox() {
    return (
        <div>
            
            <motion.section 
                className='p-32 bg-[#046BAE]' 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className='text-white'>
                    <h1 className='w-3/4 text-[48px] font-bold'>
                        Programa de Sandbox Regulatório
                    </h1>
                    <p className='text-[20px] font-light pb-8'>
                        São Caetano do Sul, 28 de setembro de 2024
                    </p>
                </div>
                <div className='flex gap-5 text-white w-full'>
                    <div className='w-[70%]'>
                        <p className='text-[20px] font-light py-5'>
                            O Programa de Sandbox Regulatório do Parque Tecnológico de São Caetano do Sul oferece um ambiente controlado onde startups e empresas inovadoras podem testar seus produtos e serviços em condições especiais, sob a supervisão de órgãos reguladores. O objetivo do programa é facilitar a criação de soluções disruptivas, permitindo ajustes e melhorias sem as restrições regulatórias iniciais que costumam impactar novos empreendimentos.
                        </p>
                        <p className='text-[20px] font-light'>
                            Esse programa é ideal para empresas de base tecnológica, fintechs, healthtechs e outros setores que dependem de regulamentações específicas para operar. Ao participar do Sandbox Regulatório, as startups terão a oportunidade de validar seus modelos de negócio de forma mais ágil, com a orientação de especialistas e sem as barreiras iniciais que podem atrasar o desenvolvimento de inovações no mercado.
                        </p>
                    </div>

                   
                    <div className='w-3/5 p-5 relative'>
                        <motion.div 
                            className='absolute right-10 -top-14'
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <Image src={yellowEllipse} alt='' />
                        </motion.div>

                       
                            <Image src={espacoSandbox} alt='' className='w-full' />
                        
                    </div>
                </div>
            </motion.section>

            
            <section className='p-32'>
                <div>
                    <h1 className='text-[48px] font-bold'>Benefícios do programa</h1>
                </div>

                <div className='flex flex-row justify-between items-center mt-14'>
                    
                    <motion.div 
                        className='w-full' 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image src={yellowPurple} alt='' className='py-5' />
                        <p className='text-[24px]'>Ambiente Controlado</p>
                        <p className='text-[16px] w-2/3 font-light py-3'>
                            Teste de soluções inovadoras com supervisão direta de reguladores.
                        </p>
                    </motion.div>

                    <motion.div 
                        className='w-full' 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Image src={blueGreen} alt='' className='py-5' />
                        <p className='text-[24px]'>Acesso ao Mercado</p>
                        <p className='text-[16px] w-2/3 font-light py-3'>
                            Possibilidade de lançamento de produtos ou serviços que ainda estão em fase de testes.
                        </p>
                    </motion.div>

                    <motion.div 
                        className='w-full' 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Image src={pinkBlue} alt='' className='py-5' />
                        <p className='text-[24px]'>Flexibilidade Regulatória</p>
                        <p className='text-[16px] w-2/3 font-light py-3'>
                            Condições ajustadas às necessidades do seu negócio, permitindo a adaptação sem riscos legais iniciais.
                        </p>
                    </motion.div>
                </div>
            </section>

           
            <motion.section 
                className='p-24 bg-[#F3F6F9] h-fit w-full'
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8 }}
            >
                <div className='justify-start'>
                    <h1 className='text-[48px] font-bold py-3'>Faça Parte da Inovação!</h1>
                    <p className='text-[16px] font-light w-4/6'>
                        Não perca a chance de participar e impulsionar a inovação no Brasil! Junte-se a nós para transformar ideias em soluções de impacto.
                    </p>

                    <div className='flex flex-row gap-12 justify-start py-16'>
                        <BoxInovacao buttonTitle='Clique para baixar' color='#573589' description='Baixe o edital e entenda todas as informações e regras do programa' title='Baixar Edital do Programa' link='' />
                        <BoxInovacao color='#419C33' buttonTitle='Clique para se inscrever' description='Preencha as informações para inscrever sua startup no programa!' title='Inscreva-se agora!' link='' />
                    </div>
                </div>
            </motion.section>
        </div>
    )
}
