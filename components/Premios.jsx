import Cursos from "./ui/Cursos"
import Efectivo from "./ui/Efectivo"
import Productos from "./ui/Productos"


const Premios = () => {
  return (
    <section className="contenedor py-10 md:py-14">
        <h2 className="text-center text-h-gray-1 text-2xl mb-10 font-bold md:text-[32px] md:mb-[60px]">Premios</h2>
        <Efectivo />
        <Productos />
        <Cursos />
    </section>
  )
}
export default Premios