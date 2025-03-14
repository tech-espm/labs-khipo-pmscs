"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CustomButtom from './components/CustomButtom'
import espaco from '../../public/Home/espaco.png'
import redcircle from '../../public/Home/EllipseRed.png'
import RectangleEspaco from '../../public/Home/RectangleEspaco.png'
import direcional from '../../public/Parceiros/Direcional.svg'
import pacaembu from '../../public/Parceiros/pacaembu.svg'
import mpd from '../../public/Parceiros/mpd.svg'
import plaenge from '../../public/Parceiros/plaenge.svg'
import BoxNoticia from './components/BoxNoticia/BoxNoticia'
import espaco2 from '../../public/Home/espaco2.png'
import pessoas from '../../public/Home/pessoas.png'
import pessoas2 from '../../public/Home/pessoas2.png'
import BoxHome from './components/BoxHome/BoxHome'
import DashboardIcon from '../../public/Home/dashboard.svg'
import AutoAwesomeIcon from '../../public/Home/auto_awesome.svg'
import HiveIcon from '../../public/Home/hive.svg'
import BlueCircle from '../../public/Home/BlueCircle.png'
import EllipseYellow2 from '../../public/Home/EllipeseYellow2.png'
import EllipseBlue from '../../public/Home/EllipseBlue.png'
import EllipseGreen from '../../public/Home/Ellipsegreen .png'
import EllipePurple from '../../public/Home/EllipsePurple.png'
import EllipseRed from '../../public/Home/EllipseRed.png'
import EllipseYellow from '../../public/Home/EllipseYellow.png'
import GreenCircle from '../../public/Home/GreenCircle.png'
import Red from '../../public/Home/Red.png'
import Yellow from '../../public/Home/yellowcircle.png'
import EllipseGreen2 from '../../public/Home/EllipseGreen2.png'
import BlueCircle2 from '../../public/Home/BlueCircle2.png'


export default function page() {
    const [openBox, setOpenBox] = useState<string | null>(null);

    const handleBoxClick = (boxTitle: string) => {
        setOpenBox((prev) => (prev === boxTitle ? null : boxTitle));
    };

    useEffect(() => {
        setOpenBox("Aceleração de Startups");
    }, []);

    return (
        <div>
            <section className='flex flex-row w-full justify-between items-center relative pt-10 '>
                <div className='w-2/4 px-32'>
                    <h1 className='text-[48px] font-bold tracking-tight leading-2'>Transforme Ideias em Inovação no Parque Tecnológico de São Caetano</h1>
                    <p className='text-[20px] front-thin my-5'>Nosso espaço está pronto para apoiar projetos que irão moldar o futuro da inovação no Brasil, com estrutura e programas de aceleração, mentorias e rodadas de negócios.</p>
                    <CustomButtom title='Solicitar mais Informações' className='bg-[#573589] my-6 py-4 px-6 rounded-full text-white hover:bg-[#3f2663] hover:font-bold transition-all ease-in delay-75' />
                </div>
                <div className=''>
                    <Image src={EllipseRed} alt=',' className='absolute right-10 -top-10 -z-[1000] ' />
                    <Image src={EllipseYellow} alt=',' className='absolute right-[90px] -top-5 -z-[1010]' />
                    <Image src={EllipseGreen2} alt=',' className='absolute bottom-16 right-[35rem]' />
                    <Image src={espaco} alt="," className='z-10' />
                </div>

            </section>
            <div className='relative'>
                <Image src={Yellow}
                    alt=','
                    className='absolute z-[2000] -top-24' />
            </div>
            <section className='bg-[#573589] p-20 text-white relative'>
                <div className='w-[50%]'>
                    <h1 className='text-[48px]'>Sobre o Parque Tecnológico</h1>
                    <p className='text-[20px]'>Localizado no coração de São Caetano do Sul, o Parque Tecnológico é o mais novo centro de inovação e empreendedorismo do Brasil. Com uma infraestrutura moderna e multiuso, o Parque promove a interação entre startups, universidades, agentes de mercado e investidores, criando um ecossistema ideal para o desenvolvimento de negócios e inovações disruptivas.</p>
                </div>
                <div className='flex gap-5 justify-around my-5'>
                    <BoxHome
                        isOpen={openBox === "Aceleração de Startups"}
                        title="Aceleração de Startups"
                        description="Participe de programas exclusivos de aceleração que incluem mentorias especializadas e acesso a rodadas de negócios."
                        color="rounded-[24px] bg-[#046BAE]"
                        image_component={DashboardIcon}
                        onClick={() => handleBoxClick("Aceleração de Startups")}
                    />
                    <BoxHome
                        isOpen={openBox === "Inovação Aberta"}
                        title="Inovação Aberta"
                        description="Participe de programas exclusivos de aceleração que incluem mentorias especializadas e acesso a rodadas de negócios."
                        color="rounded-[24px] bg-[#E03360]"
                        image_component={AutoAwesomeIcon}
                        onClick={() => handleBoxClick("Inovação Aberta")}
                    />
                    <BoxHome
                        isOpen={openBox === "Infraestrutura"}
                        title="Infraestrutura"
                        description="Participe de programas exclusivos de aceleração que incluem mentorias especializadas e acesso a rodadas de negócios."
                        color="rounded-[24px] bg-[#419C33]"
                        image_component={HiveIcon}
                        onClick={() => handleBoxClick("Infraestrutura")}
                    />
                    <BoxHome
                        isOpen={openBox === "Sandbox"}
                        title="Sandbox"
                        description="Participe de programas exclusivos de aceleração que incluem mentorias especializadas e acesso a rodadas de negócios."
                        color="rounded-[24px] bg-[#5FBAE7]"
                        image_component={DashboardIcon}
                        onClick={() => handleBoxClick("Sandbox")}
                    />
                    <BoxHome
                        isOpen={openBox === "Incentivo de Fundo Perdido"}
                        title="Incentivo de Fundo Perdido"
                        description="Participe de programas exclusivos de aceleração que incluem mentorias especializadas e acesso a rodadas de negócios."
                        color="rounded-[24px] bg-[#6461A8]"
                        image_component={DashboardIcon}
                        onClick={() => handleBoxClick("Incentivo de Fundo Perdido")}
                    />
                </div>
            </section>

            <div className='relative'>
                <Image src={EllipseBlue} alt=',' className='absolute right-0 -top-24' />
            </div>

            <section className='p-10 flex flex-col items-start relative'>
                <h1 className='text-[24px] font-bold'>Nossos parceiros</h1>
                <div className='flex flex-row gap-5 justify-between w-full my-5'>
                    <Image src={direcional} alt=',' />
                    <Image src={pacaembu} alt=',' />
                    <Image src={mpd} alt=',' />
                    <Image src={plaenge} alt=',' />

                </div>
            </section>



            <section className='bg-[#F3F6F9] p-24 relative'>
                <h1 className='text-[48px] font-bold'>Na Mídia</h1>
                <p className='text-[20px] w-3/5'>Veja o que grandes veículos de comunicação e especialistas estão falando sobre o Parque Tecnológico de São Caetano</p>

                <Image src={EllipseGreen} alt=',' className='absolute right-0 top-24  ' />
                <div className='flex items-start gap-5 py-10 relative'>
                    <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco2} link='' className='w-[32%] z-10' />
                    <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={RectangleEspaco} link='' className='w-[68%]' />
                    <Image src={BlueCircle2} alt=',' className='absolute -left-10 bottom-0  ' />
                </div>


                <div className='flex items-start gap-5 py-10 relative'>
                    <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco2} link='' />
                    <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco2} link='' />
                    <BoxNoticia title="Nova Parceria" data="16 setembro 2024" description="ApexBrasil promove nova parceiria com o Parque Tecnológico São Caetano do Sul..." image_component={espaco2} link='' />
                    <Image src={EllipePurple} alt=',' className='absolute -right-16 z-10 bottom-64' />
                </div>
            </section>



            <section className='bg-[#046BAE] p-16 text-white flex flex-col gap-10'>
                <div className='flex flex-row'>
                    <div className='w-2/4 p-16'>
                        <h1 className='text-[36px] font-bold'>Programa de mentoria</h1>
                        <p className='text-[16px]'>Tenha acesso a mentorias personalizadas com experts do mercado que irão guiar sua startup desde a fase de concepção até a expansão internacional. Nossos mentores estão prontos para ajudá-lo a superar desafios e acelerar o crescimento.</p>
                        <CustomButtom title="Quero ser um mentor " className='bg-[#573589] my-6 py-4 px-6 rounded-full text-white hover:bg-[#3f2663] hover:font-bold transition-all ease-in delay-75' />

                    </div>
                    <div className='relative'>
                        <Image src={GreenCircle} alt=',' className='absolute -left-16 top-28' />
                        <Image src={pessoas} alt="," />
                    </div>

                </div>
                <div className='flex flex-row'>
                    <div className='relative'>
                        <Image src={pessoas2} alt="," />
                        <Image src={EllipseRed} alt=',' className='absolute bottom-4 left-10' />
                    </div>
                    <div className='w-2/4 p-16'>
                        <h1 className='text-[36px] font-bold'>Para empreendedor</h1>
                        <p className='text-[16px]'>
                            Junte-se a uma rede de empreendedores que estão transformando o ecossistema de inovação do Brasil. No Parque Tecnológico, você terá acesso a um ambiente colaborativo, suporte especializado e conexões com investidores.
                        </p>
                        <CustomButtom title="Sou empreendedor " className='bg-[#573589] my-6 py-4 px-6 rounded-full text-white hover:bg-[#3f2663] hover:font-bold transition-all ease-in delay-75' />
                    </div>
                </div>
            </section>

            <div className='relative'>
                <Image src={EllipseYellow} alt=',' className='absolute right-16 -top-20 w-36' />
            </div>

            <section className='bg-[#F3F6F9] p-28'>
                <div className='w-3/4'>
                    <h1 className='text-[48px]'>Fale Conosco</h1>
                    <p className='text-[20px]'>Entre em contato para saber mais sobre como fazer parte do nosso ecossistema de inovação. Estamos ansiosos para ajudá-lo a transformar suas ideias em realidade.</p>
                </div>
                <div className='flex flex-row gap-10 py-10 relative'>
                    <Image src={Red} alt=',' className='absolute -left-10 top-3 ' />
                    <div className='w-[35%] bg-white rounded-xl p-10 relative z-[2010]'>
                        <h1 className='text-[24px] '>Informações de contato</h1>
                        <div>
                            <p>E-mail</p>
                            <p>email@email.com</p>
                        </div>
                        <div>
                            <p>Endereço</p>
                            <p>Rua Major Carlo Del Prete, 651 – Centro. São Caetano do Sul</p>
                        </div>
                        <div>
                            <p>Telefone SEDETI</p>
                            <p>(11) 4227-7662 / (11) 4227-7798</p>
                        </div>
                        <div>
                            <p>JUCESP</p>
                            <p>(11) 4227-7739</p>
                        </div>
                        <div>
                            <p>SEBRAE AQUI:</p>
                            <p> (11) 4227-7666</p>
                        </div>

                    </div>
                    <div className='w-[65%] bg-white rounded-xl p-10'>
                        <h1>
                            Nos envie uma mensagem
                        </h1>
                        <div className='flex flex-col gap-10'>
                            <div className='flex w-full gap-2'>
                                <div className="flex flex-col w-full">
                                    <label>Nome Completo</label>
                                    <input type='text' className='border-2 p-2 rounded-md w-full' />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label>Nome da empresa</label>
                                    <input type='text' className='border-2 p-2 rounded-md w-full' />
                                </div>
                            </div>
                            <div className='flex w-full gap-2'>
                                <div className="flex flex-col w-full">
                                    <label>E-mail</label>
                                    <input type='text' className='border-2 p-2 rounded-md w-full' />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label>Telefone</label>
                                    <input type='text' className='border-2 p-2 rounded-md w-full' />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label>Mensagem</label>
                                <textarea
                                    className='border-2 p-2 rounded-md w-full resize-none'
                                    rows={10}
                                    placeholder="Digite sua mensagem aqui..."
                                ></textarea>
                            </div>
                            <div className='flex justify-end'>
                                <CustomButtom title='Enviar mensagem' className="bg-[#573589] py-4 px-6 rounded-full text-white hover:bg-[#3f2663] hover:font-bold transition-all ease-in delay-75" />
                            </div>
                            <Image src={BlueCircle} alt=',' className='absolute -bottom-8' />
                        </div>

                    </div>
                </div>

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
                <CustomButtom title='Conheça Nossos Programas' className='bg-[#573589] border-2 border-white px-5 m-5 rounded-full text-white hover:bg-[#3f2663] hover:font-bold transition-all ease-in delay-75' />
            </section>

        </div>
    )
}

