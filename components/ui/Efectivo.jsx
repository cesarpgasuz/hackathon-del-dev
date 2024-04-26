import { EFECTIVO } from "@/data"
import EfectivoItem from "./EfectivoItem"

const Efectivo = () => {
  return (
    <div className="grid gap-4">
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