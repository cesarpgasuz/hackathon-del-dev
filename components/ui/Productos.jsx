import { PRODUCTOS } from "@/data"
import ProductoItem from "./ProductoItem"

const Productos = () => {
  return (
    <div className="py-20 md:py-28">
        <p className="text-h-gray-2 text-sm leading-7 mb-8 md:w-[512px] md:mx-auto md:text-center md:mb-12">Solo por participar, entrarás automaticamente en el sorteo de los siguientes productos <span className="text-h-gray-1">*solo residentes en España*</span></p>    
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTOS.map(producto => (
                <ProductoItem 
                    key={producto.id}
                    producto={producto}
                />
            ))}
        </div>
    </div>
  )
}
export default Productos