import { CURSOS } from "@/data"
import CursoItem from "./CursoItem"

const Cursos = () => {
  return (
    <div className="pb-10">
        <p className="text-h-gray-2 text-sm leading-7 mb-8 md:w-[512px] md:mx-auto md:text-center md:mb-12">Y también entrarás al sorteo de una plaza del bootcamp de Full-Stack Developer o Data Science y Machine Learning de 4Geeks Academy. <span className="text-h-gray-1">*Sorteo internacional*</span></p>    
        <div className="grid gap-8 md:grid-cols-2">
            {CURSOS.map(curso => (
                <CursoItem 
                    key={curso.id}
                    curso={curso}
                />
            ))}
        </div>
    </div>
  )
}
export default Cursos