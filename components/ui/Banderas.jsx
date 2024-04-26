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
import BanderaJapon from '@/public/images/japon.png'
import BanderaPanama from '@/public/images/panama.png'
import BanderaGuatemala from '@/public/images/guatemala.png'
import BanderaChile from '@/public/images/chile.png'
import BanderaBolivia from '@/public/images/bolivia.png'
import BanderaInglaterra from '@/public/images/inglaterra.png'

const Banderas = () => {
  return (
        <div className="bg-h-blue-2 border border-h-blue-3 rounded h-[148px] sm:h-[320px] lg:h-[148px] overflow-hidden">
            <div className="rounded grid grid-cols-2 h-full sm:h-[320px] lg:h-[148px]">
                <div className="flex flex-col justify-center pl-6 gap-4">
                    <h4 className="text-2xl font-extrabold leading-6">+200 <br /><span className="font-normal text-sm text-h-gray-2">Participantes</span></h4>
                    <h4 className="text-2xl font-extrabold leading-6">+10 <br /><span className="font-normal text-sm text-h-gray-2">Paises</span></h4>
                </div>
                <div className="overflow-hidden flex gap-2 sm:h-[320px] sm:py-2 lg:h-[148px] rounded-r">
                    <div className="flex flex-col relative -top-[50px] gap-2 sm:-top-[56px] lg:-top-8">
                        <Image src={BanderaPeru} height={227} width={387} alt="bandera de peru" className="w-[182px] shrink-0" />
                        <Image src={BanderaPortugal} height={227} width={387} alt="bandera de portugal" className="w-[182px] shrink-0" />
                        <Image src={BanderaColombia} height={227} width={387} alt="bandera de colombia" className="w-[182px] shrink-0" />
                        <Image src={BanderaEstadosUnidos} height={227} width={387} alt="bandera de estados unidos" className="w-[182px] shrink-0" />
                        <Image src={BanderMexico} height={227} width={387} alt="bandera de mexico" className="w-[182px] shrink-0" />
                        <Image src={BanderaAustralia} height={227} width={387} alt="bandera de australia" className="w-[182px] shrink-0" />
                        <Image src={BanderaFrancia} height={227} width={387} alt="bandera de francias" className="w-[182px] shrink-0" />
                        <Image src={BanderaArgentina} height={227} width={387} alt="bandera de argentina" className="w-[182px] shrink-0" />
                    </div>
                    <div className="flex flex-col relative -top-[20px] gap-2 sm:-top-[90px] lg:-top-4">
                        <Image src={BanderaJapon} height={227} width={387} alt="bandera de japon" className="w-[182px] shrink-0" />
                        <Image src={BanderaPanama} height={227} width={387} alt="bandera de panama" className="w-[182px] shrink-0" />
                        <Image src={BanderaEspana} height={227} width={387} alt="bandera de españa" className="w-[182px] shrink-0" />
                        <Image src={BanderaBrasil} height={227} width={387} alt="bandera de brasil" className="w-[182px] shrink-0" />
                        <Image src={BanderaArgentina} height={227} width={387} alt="bandera de argentina" className="w-[182px] shrink-0" />
                        <Image src={BanderaGuatemala} height={227} width={387} alt="bandera de guatemala" className="w-[182px] shrink-0" />
                        <Image src={BanderaChile} height={227} width={387} alt="bandera de chile" className="w-[182px] shrink-0" />
                        <Image src={BanderaBolivia} height={227} width={387} alt="bandera de bolivia" className="w-[182px] shrink-0" />
                        <Image src={BanderaInglaterra} height={227} width={387} alt="bandera de inglaterra" className="w-[182px] shrink-0" />
                    </div>
                </div>
            </div>
        </div>
   
             
  )
}
export default Banderas