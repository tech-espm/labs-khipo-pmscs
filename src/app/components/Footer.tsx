import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Logo from '../../../public/logo.svg';
import CustomButtom from './CustomButtom';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center justify-between p-10 z-10'>
      <div className='w-full flex flex-row items-center justify-between p-10 z-10'>
      <div>
            <Image src={Logo} alt='.' />
        </div>
        <div className='flex flex-col'>
          <p className='font-bold my-4'>Navegação</p>
          <div className='flex flex-row gap-10'>
            <ul className='flex flex-col gap-4'>
              <li>Home </li>
              <li>Sobre</li>
              <li>Programas</li>
            </ul>
            <ul className='flex flex-col gap-4'>
              <li>Startups e Projetos</li>
              <li>Na Mídia</li>
            </ul>
          </div>
        </div>
        <div>
        <CustomButtom title='Login' className='bg-[#573589]  py-4 px-6 rounded-full text-white hover:bg-[#3f2663] hover:font-bold'/>
        </div>
      </div>
      <div className='flex justify-between w-full px-20'>
        <div> 
          <h1>@Copyright 2024</h1>
        </div>
        <div>
          <ul className='flex gap-5'>
            <li>Termos & Condições</li>
            <li>Política de Privacidade</li>
            <li>Política de Cookies</li>
          </ul>
        </div>
      </div>
       
    </footer>
  )
}

export default Footer