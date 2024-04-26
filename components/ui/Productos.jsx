import { PRODUCTOS } from "@/data"
import ProductoItem from "./ProductoItem"

const Productos = () => {
  return (
    <div className="py-20">
        <p className="text-h-gray-2 text-sm leading-7 mb-8">Solo por participar, entrarás automaticamente en el sorteo de los siguientes productos <span className="text-h-gray-1">*solo residentes en España*</span></p>    
        <div className="grid gap-5">
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