import { PATROCINADORES } from "@/data"
import PatrocinadorImage from "./PatrocinadorImage"

const imagenCompuesta = (ruta) => `/images/${ruta}.svg`
console.log()

const Patrocinadores = () => {
  return (
    <section className="contenedor py-10">
        <h2 className="text-center text-h-gray-1 text-2xl mb-10 font-bold">Patrocinadores</h2>
        <div className="flex flex-col gap-10 justify-center items-center">
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