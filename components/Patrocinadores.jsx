

import { PATROCINADORES } from "@/data"
import PatrocinadorImage from "./PatrocinadorImage"

const Patrocinadores = () => {
  return (
    <section className="contenedor">
        <h2>Patrocinadores</h2>

        {PATROCINADORES.map(patrocinador => (

            <PatrocinadorImage 
                key={patrocinador.id} 
                patrocinador={patrocinador}
            />
        ))}

    </section>
  )
}
export default Patrocinadores