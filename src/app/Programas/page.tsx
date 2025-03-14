"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import LogoPrefeitura from '../../../public/LogoPrefeitura.png'
import Ellipse2 from '../../../public/Ellipse 2.png'
import fotoGm from '../../../public/imageGM.png'
import purpleEllipse from '../../../public/purpleEllipse.png'
import CustomButtom from '../components/CustomButtom'
import BoxProgramas from '../components/BoxProgramas/BoxProgramas'

export default function Programas() {
    const imageVariants = {
        hidden: { opacity: 0,  scale: 0.8 },
        visible: { opacity: 1, rotate: 0, scale: 1 },
    }

    const boxVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <div>
             <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, }}
                        variants={imageVariants}
                    >
                        <Image src={Ellipse2} alt='.' className='absolute left-0 top-20'/>
            </motion.div>

            <section className='p-32 relative'>
                <div className='pb-16'>
                   
                    <h1 className='text-[48px] font-bold'>Programas</h1>
                    <p className='text-[16px]'>
                        Conheça algumas das empresas e seus projetos que decolaram com nossas iniciativas
                    </p>
                </div>

                <div className='py-5'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        variants={boxVariants}
                    >
                        <BoxProgramas
                            buttonTitle='Ver mais'
                            image_component={LogoPrefeitura}
                            description='O Programa de Sandbox Regulatório do Parque Tecnológico de São Caetano do Sul oferece um ambiente controlado onde startups e empresas inovadoras podem testar seus produtos e serviços em condições especiais, sob a supervisão de órgãos reguladores. O objetivo do programa é facilitar a criação de soluções disruptivas, permitindo ajustes e melhorias sem as restrições regulatórias iniciais que costumam impactar novos empreendimentos.'
                            title='SandBox'
                            link=''
                        />
                    </motion.div>
                </div>

                <div className='py-5'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "backInOut", delay: 0.1 }}
                        variants={boxVariants}
                    >
                        <BoxProgramas
                            buttonTitle='Ver mais'
                            image_component={LogoPrefeitura}
                            description='A Secretaria de Desenvolvimento Econômico, Trabalho, Turismo,Tecnologia e Inovação, torna pública, para ciência dos interessados a abertura de procedimento simplificado para credenciamento e seleção de projetos de startups, para ingressar no programa de residentes do Parque de Inovação e Tecnologia de São Caetano do Sul (PITSCS).'
                            title='Programa de residentes'
                            link=''
                        />
                    </motion.div>
                </div>

                <div className='py-5'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "anticipate", delay: 0.2 }}
                        variants={boxVariants}
                    >
                        <BoxProgramas
                            buttonTitle='Ver mais'
                            image_component={fotoGm}
                            description='A General Motors do Brasil, em parceria com o Parque Tecnológico Municipal de São Caetano do Sul, tem o prazer de convidar startups, empresas e instituições de pesquisa a se inscreverem no nosso Desafio de Inovação Aberta. Esta é uma oportunidade única para colaborar com uma das líderes globais do setor automotivo e contribuir para o desenvolvimento de soluções inovadoras.'
                            title='Desafio de Inovação GM - GENERAL MOTORS DO BRASIL'
                            link=''
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, type: "tween", ease: "circOut" }}
                    variants={imageVariants}
                >
                    <Image src={purpleEllipse} alt='.' className='absolute right-10'/>
                </motion.div>
            </section>
        </div>
    )
}
