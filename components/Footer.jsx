import Image from "next/image"
import ImagenBandera from '@/public/images/bandera.png'
const Footer = () => {
  return (
    <section className="contenedor pt-20 pb-10">
      <p className="text-center text-h-gray-2">Diseñado y Desarrollado por <a href="https://cesarpgasuz.dev" target="_blank" rel="noopener noreferrer" className="border-b-[2px] border-b-h-gray-2">cesarpgasuz</a></p>
      <div className="text-center flex justify-center items-center gap-2 mt-4"><Image src={ImagenBandera} width={48} height={48} alt="Imagen de la Bandera de México" className="w-7 h-7"/> <p className="text-h-gray-2 text-xs">Hecho en Guanajuato, México</p></div>
    </section>
  )
}
export default Footer