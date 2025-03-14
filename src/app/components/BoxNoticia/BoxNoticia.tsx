
import Image from "next/image";

interface BoxNoticiaProps {
    title: string;
    description: string;
    link: string;
    image_component?: any;
    data: string;
    className?: string;

}

export default function BoxNoticia(props: BoxNoticiaProps) {

    return (
        <div className={`flex flex-col gap-8 items-center shadow-xl rounded-xl  text-black w-4/5 bg-white ${props.className} `}>
            <div className="w-full h-[80%]">
                <Image src={props.image_component} alt="." className="object-fill w-full h-fit "/>
            </div>
            <div className="w-full p-5 ">
                <p className='text-[28px] font-bold py-3'>
                    {props.title}
                </p>
                
                <p className='text-[16px] font-regular '>
                    {props.description}
                </p>

                <p className='text-[16px] font-light'>
                    {props.data}
                </p>
                
            </div>
        </div>
    )
}