import Image from 'next/image'
import React from 'react'
import LogoPrefeitura from '../../../public/LogoPrefeitura.png'
import BoxInovacao from '../components/Box/BoxInovacao'

export default function ProgramaResidentes() {
    return (
        <div>
            <section>
                <div className='p-24'>
                    <div className='text-black '>
                        <h1 className='w-3/4 text-[48px] font-bold '>Programa de Residentes</h1>
                        <p className='text-[20px] font-light pb-8'>
                            São Caetano do Sul, 28 de setembro de 2024
                        </p>

                    </div>
                    <div className='flex gap-5 text-black  w-full '>
                        <div className='w-[55%]'>
                            <p className='text-[20px] font-light py-5'>
                                A Secretaria de Desenvolvimento Econômico, Trabalho, Turismo,
                                Tecnologia e Inovação, torna pública, para ciência dos interessados a
                                abertura de procedimento simplificado para credenciamento e seleção
                                de projetos de startups, para ingressar no programa de residentes do
                                Parque de Inovação e Tecnologia de São Caetano do Sul (PITSCS).
                            </p>
                            <p className='text-[20px] font-light '>
                                Esse programa é ideal para empresas de base tecnológica, fintechs, healthtechs e outros setores que dependem de regulamentações específicas para operar. Ao participar do Sandbox Regulatório, as startups terão a oportunidade de validar seus modelos de negócio de forma mais ágil, com a orientação de especialistas e sem as barreiras iniciais que podem atrasar o desenvolvimento de inovações no mercado.
                            </p>
                        </div>
                        <div className='w-2/5 p-5 relative'>
                            <Image src={LogoPrefeitura} alt='' className='w-full' />
                        </div>
                    </div>
                </div>

            </section>

            <section className='p-24 bg-[#F3F6F9] h-fit w-full'>
                <div className='justify-start'>
                    <div className=''>
                        <h1 className='text-[48px] font-bold py-3'>Faça Parte da Inovação!</h1>
                        <p className='text-[16px] font-light w-4/6'>
                            Não perca a chance de participar e impulsionar a inovação no Brasil! Junte-se a nós para transformar ideias em soluções de impacto.
                        </p>
                    </div>

                    <div className='flex flex-row gap-12 justify-start py-16 '>
                        <BoxInovacao color='#573589' buttonTitle='Clique para baixar' description='Baixe o edital e entenda todas as informações e regras do programa' title='Baixar Edital do Programa' link='' />
                        <BoxInovacao color='#419C33' buttonTitle='Clique para se inscrever' description='Preencha as informações para inscrever sua startup no programa!' title='Inscreva-se agora!' link=''/>
                    </div>
                </div>     
            </section>
        </div>
    )
}
