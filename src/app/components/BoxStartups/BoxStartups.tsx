
import Image from "next/image";

interface BoxStartupsProps {
    title: string;
    rua: string;
    bairro: string;
    cidade: string;
    telefone: string;
    link: string;
    image_component?: any;

}

export default function BoxProgramas(props: BoxStartupsProps) {

    return (
        <div className={` flex gap-8 items-center shadow-xl rounded-md p-14 text-black w-full bg-white  transition-all ease-in-out delay-100`}>
            <div className="w-fit">
                <Image src={props.image_component} alt="." />
            </div>
            <div className="w-full">
                <p className='text-[28px] font-bold py-3'>
                    {props.title}
                </p>
                <p className='text-[16px] font-regular'>
                    {props.rua}
                </p>
                <p className='text-[16px] font-regular '>
                    {props.bairro}
                </p>
                <p className='text-[16px] font-regular '>
                    {props.cidade}
                </p>
                <p className='text-[16px] font-light py-3 '>
                    {props.telefone}
                </p>
                <p className='text-[16px] font-light '>
                    {props.link}
                </p>
                
            </div>
        </div>
    )
}