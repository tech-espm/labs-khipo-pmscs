import CustomButtom from "../CustomButtom";
import Image from "next/image";

interface BoxProgramasProps {
    title: string;
    description: string;
    buttonTitle: string;
    link: string;
    image_component?: any;

}

export default function BoxProgramas(props: BoxProgramasProps) {

    return (
        <div className={` flex gap-8 items-center hover:bg-[#046BAE] shadow-xl rounded-md p-14 text-black w-full bg-white hover:[#046BAE] hover:text-white transition-all ease-in-out delay-100`}>
            <div className="w-fit">
                <Image src={props.image_component} alt="." />
            </div>
            <div className="w-full">
                <p className='text-[28px] font-bold py-3'>
                    {props.title}
                </p>
                <p className='text-[16px] font-light '>
                    {props.description}
                </p>
                <CustomButtom title={props.buttonTitle} className="border-2 p-2 px-4 py-2 rounded-full mt-5" />
            </div>
        </div>
    )
}