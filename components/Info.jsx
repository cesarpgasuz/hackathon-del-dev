import Link from "next/link"
import InfoItem from "./InfoItem"
import People from "./icons/People"
import Foco from "./icons/Foco"
import Reloj from "./icons/Reloj"
import Free from "./icons/Free"

const Info = () => {
  return (
    <section className="contenedor py-10">
        <h2 className="text-center text-h-gray-1 text-2xl mb-10 font-bold">¿En que consiste?</h2>
        <div className="grid gap-10">
           <InfoItem>
                <People className="h-[53px] w-[53px] shrink-0" fill="#E2E8F0" />
            <p>Máximo de 4 Miembros por equipo</p>
            </InfoItem>
            <InfoItem>
                <Foco className="h-[53px] w-[53px] shrink-0" fill="#E2E8F0" />
                <p>Esta hackathon no tiene temática</p>
            </InfoItem>
            <InfoItem>
                <Reloj className="h-[53px] w-[53px] shrink-0" fill="#E2E8F0" />
                <p>Empieza el <strong className="text-h-gray-1">13 de abril</strong> y termina el <strong className="text-h-gray-1">27 de abril</strong></p>
            </InfoItem>
            <InfoItem>
                <Free className="h-[53px] w-[53px] shrink-0" fill="#E2E8F0" />
                <p>¡Participar es totalmente <strong className="text-h-gray-1">gratis</strong>!</p>
            </InfoItem> 
        </div>

        <Link href='#' className="bg-h-purple-1 text-h-gray-1 block py-3 text-center rounded mt-14">Ver Reglamento</Link>
        
    </section>
  )
}
export default Info