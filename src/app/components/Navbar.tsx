import Image from 'next/image';
import link from 'next/link';
import react from 'react'; 
import tailwind from 'tailwindcss';
import CustomButtom from './CustomButtom';
import Logo from '../../../public/logo.svg';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full flex flex-row items-center justify-center gap-28 p-5 z-10">
       <div>
          <Image src={Logo} alt='.' className='' />
       </div>
       <div>
          <ul className='flex flex-row gap-10'>
            <li className='transition-all ease-in delay-75 hover:font-bold'><Link href="/">Home</Link></li>
            <li className='transition-all ease-in delay-75 hover:font-bold'><Link href="/sobrenos">Sobre</Link></li>
            <li className='transition-all ease-in delay-75 hover:font-bold'><Link href="/programaSandbox">Programas</Link></li>
            <li className='transition-all ease-in delay-75 hover:font-bold'><Link href="/Startups">Startups e Projetos</Link></li>
            <li className='transition-all ease-in delay-75 underline hover:font-bold'><Link href="/naMidia">Na Mídia</Link></li>
          </ul>
       </div>

       <div>
          <CustomButtom title='Faça Login' className='bg-[#573589]  py-4 px-6 rounded-full text-white hover:bg-[#3f2663] hover:font-bold transition-all ease-in delay-75' />
       </div>
    </header>
  )
}

export default Navbar;