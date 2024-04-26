import Image from "next/image"

const EfectivoItem = ({item}) => {
    const {cantidad, image} = item
    const imageCompuesta = `./images/${image}.svg`

    return (
      <div className="border border-h-green-1 rounded flex items-center justify-center w-full h-28 gap-5">
        <Image src={imageCompuesta} height={65} width={65} alt="imagen" /> 
        <p className="text-4xl font-bold text-h-gray-1">{cantidad}<span className="text-h-gray-2">€</span></p>
      </div>
    )
}
export default EfectivoItem