import Image from "next/image"
import BanderMexico from '@/public/images/mexico.png'
import BanderaArgentina from '@/public/images/argentina.png'
import BanderAustralia from '@/public/images/australia.png'
import BanderBrasil from '@/public/images/brasil.png'
import BanderColombia from '@/public/images/colombia.png'
import BanderEspana from '@/public/images/espana.png'
import BanderEstadosUnidos from '@/public/images/estados-unidos.png'
import BanderFrancia from '@/public/images/francia.png'
import BanderGuatemala from '@/public/images/guatemala.png'
import BanderPeru from '@/public/images/peru.png'
import BanderPortugal from '@/public/images/portugal.png'

const Banderas = () => {
  return (
    <div 
        className="bg-h-blue-2 border border-h-blue-3 rounded h-[148px]">
            <div className="b rounded grid grid-cols-2 h-full">
                <div className="flex flex-col justify-center pl-6 gap-4">
                    <h4 className="text-2xl font-extrabold leading-5">+200 <br /><span className="font-normal text-sm text-h-gray-2">Participantes</span></h4>
                    <h4 className="text-2xl font-extrabold leading-5">+10 <br /><span className="font-normal text-sm text-h-gray-2">Ganadores</span></h4>
                </div>
                <div className="bg-green-50 overflow-hidden">

                </div>
            </div>
        
    </div>
             
  )
}
export default Banderas