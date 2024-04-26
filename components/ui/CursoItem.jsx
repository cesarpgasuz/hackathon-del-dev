
import Image from "next/image"
import ImageShare from '@/public/images/share.svg'

const CursoItem = ({curso}) => {

    const {name, text, image, url} = curso
    const imageCompuesta = `/images/${image}.svg`

    return (
        <div className="border border-h-purple-2 rounded relative py-5 px-5">
            <div className="flex gap-3 items-center">
                <Image src={imageCompuesta} height={60} width={60} alt="icon" className="shrink-0 w-9 h-9" />
                <div>
                    <span className="text-h-purple-2 text-sm font-bold">{name.slice(0,7)}</span>
                    <p className="text-h-gray-1 text-base font-semibold">{name.slice(7)}</p>
                </div>
            </div>
            <p className="mt-4 text-h-gray-2 leading-7 text-sm">{text}</p>
           <a href="https://4geeksacademy.com/es/" target="_blank" rel="noopener noreferrer" className="absolute right-4 bottom-4">
             <Image src={ImageShare} width={30} height={30} alt="imagen share" className="w-[21px] h-[21px]" />
           </a>
           
        </div>
    )
}
export default CursoItem