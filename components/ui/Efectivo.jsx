import { EFECTIVO } from "@/data"
import EfectivoItem from "./EfectivoItem"

const Efectivo = () => {
  return (
    <div className="grid gap-4 md:flex md:gap-9 lg:w-[636px] lg:mx-auto">
        {EFECTIVO.map(item => (
            <EfectivoItem 
                key={item.id}
                item={item}
            />
        ))}
    </div>
  )
}
export default Efectivo