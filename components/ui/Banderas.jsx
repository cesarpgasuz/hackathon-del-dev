import Image from "next/image"
import BanderMexico from '@/public/images/mexico.png'
import BanderaArgentina from '@/public/images/argentina.png'
import BanderaAustralia from '@/public/images/australia.png'
import BanderaBrasil from '@/public/images/brasil.png'
import BanderaColombia from '@/public/images/colombia.png'
import BanderaEspana from '@/public/images/espana.png'
import BanderaEstadosUnidos from '@/public/images/estados-unidos.png'
import BanderaFrancia from '@/public/images/francia.png'
import BanderaPeru from '@/public/images/peru.png'
import BanderaPortugal from '@/public/images/portugal.png'

const Banderas = () => {
  return (
    <div 
        className="bg-h-blue-2 border border-h-blue-3 rounded h-[148px]">
            <div className="b rounded grid grid-cols-2 h-full">
                <div className="flex flex-col justify-center pl-6 gap-4">
                    <h4 className="text-2xl font-extrabold leading-6">+200 <br /><span className="font-normal text-sm text-h-gray-2">Participantes</span></h4>
                    <h4 className="text-2xl font-extrabold leading-6">+10 <br /><span className="font-normal text-sm text-h-gray-2">Paises</span></h4>
                </div>
                <div className="overflow-hidden flex gap-2">
                    <div className="flex flex-col relative -top-[90px] gap-2">
                        <Image src={BanderaColombia} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderaEstadosUnidos} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderMexico} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderaAustralia} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderaFrancia} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                    </div>
                    <div className="flex flex-col relative -top-[70px] gap-2">
                        <Image src={BanderaPeru} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderaPortugal} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderaEspana} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderaBrasil} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderaArgentina} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                    </div>
                </div>
            </div>
        
    </div>
             
  )
}
export default Banderas