import Link from "next/link"
import InfoItem from "./InfoItem"
import InfoItemTitle from "./InfoItemTitle"
import People from "./icons/People"

const Info = () => {
  return (
    <section className="contenedor">
        <h2>¿En que consiste?</h2>
        <div className="grid">
           <InfoItem>
                <People className="h-[53px] w-[53px]" />
            <InfoItemTitle>Máximo de 4 Miembros por equipo</InfoItemTitle>
            </InfoItem>
            <InfoItem>
                <People className="h-[53px] w-[53px]" />
                <InfoItemTitle>Máximo de 4 Miembros por equipo</InfoItemTitle>
            </InfoItem>
            <InfoItem>
                <People className="h-[53px] w-[53px]" />
                <InfoItemTitle>Máximo de 4 Miembros por equipo</InfoItemTitle>
            </InfoItem>
            <InfoItem>
                <People className="h-[53px] w-[53px]" />
                <InfoItemTitle>Máximo de 4 Miembros por equipo</InfoItemTitle>
            </InfoItem> 
        </div>

        <Link href='/reglamento'>Ver Reglamento</Link>
        
    </section>
  )
}
export default Info