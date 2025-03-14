import CustomButtom from "../CustomButtom";


interface BoxInovacaoProps {
    title: string;
    description: string;
    buttonTitle: string;
    color: string;
    link: string;
}

export default function BoxInovacao(props: BoxInovacaoProps) {

    return (
        <div className={`bg-[${props.color}] rounded-md p-14 text-white w-full`}>
            <p className='text-[24px] font-bold py-3'>
                {props.title}
            </p>
            <p className='text-[16px] font-thin '>
                {props.description}
            </p>
            <CustomButtom title={props.buttonTitle} className="border-2 border-white p-2 px-4 py-2 rounded-full mt-5 hover:bg-white hover:text-black transition-all ease-in delay-100" />
        </div>
    )

}