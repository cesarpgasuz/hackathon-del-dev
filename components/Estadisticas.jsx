import Image from "next/image"
import ImagenMedalla from '@/public/images/medalla.svg'
import styles from '@/styles/Styles.module.css'
import Banderas from "./ui/Banderas"
const Estadisticas = () => {
  return (
    <section className="contenedor py-10 md:py-14 text-h-gray-1">
        <div className={`grid gap-6 ${styles.bento}`}>
            <Banderas />
            <div 
              className={`bg-h-blue-2 border border-h-blue-3 rounded h-[148px] bg-[url('/images/programador.jpg')] bg-cover bg-no-repeat bg-center before:content-none flex items-end px-6 py-4 relative ${styles.imageEst}`}>
              <h4 className="text-2xl font-extrabold leading-7 relative z-20">2 Semanas <br /><span className="font-normal text-sm">Codificando</span></h4>
            </div>
            <div 
              className="bg-h-blue-2 border border-h-blue-3 rounded h-[148px] overflow-hidden flex items-center px-6 relative">
              <h4 className="text-5xl font-extrabold leading-7">3 <br /><span className="font-normal text-base">Ganadores</span></h4>
              <Image src={ImagenMedalla} width={184} height={184} alt="Imagen de una medalla" className="absolute -right-9 -top-8 bottom-0" />
            </div>
        </div>
    </section>
  )
}
export default Estadisticas