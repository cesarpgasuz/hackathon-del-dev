import Image from "next/image"

const EfectivoItem = ({item}) => {
    const {cantidad, image, id} = item
    const imageCompuesta = `./images/${image}.svg`

    const orden = {
      1: 'md:order-2',
      2: 'md:order-1',
      3: 'md:order-3'
    }

    return (
      <div className={`border border-h-green-1 rounded flex items-center justify-center w-full h-28 gap-5 md:flex-col md:h-[202px] ${orden[id]}`}>
        <Image src={imageCompuesta} height={65} width={65} alt="imagen" /> 
        <p className="text-4xl font-bold text-h-gray-1">{cantidad}<span className="text-h-gray-2">€</span></p>
      </div>
    )
}
export default EfectivoItem