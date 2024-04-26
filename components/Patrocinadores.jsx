import { PATROCINADORES } from "@/data"
import PatrocinadorImage from "./PatrocinadorImage"


const Patrocinadores = () => {
  return (
    <section className="contenedor py-10">
        <h2 className="text-center text-h-gray-1 text-2xl mb-10 font-bold md:text-[32px] md:mb-[60px]">Patrocinadores</h2>
        <div className="flex flex-col gap-10 justify-center items-center md:flex-row md:flex-wrap lg:grid lg:grid-cols-4 lg:gap-14">
          {PATROCINADORES.map(patrocinador => (
              <PatrocinadorImage 
                  key={patrocinador.id} 
                  patrocinador={patrocinador}
              />
          ))}
        </div>
     


    </section>
  )
}
export default Patrocinadores