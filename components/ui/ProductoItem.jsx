import Image from "next/image"

const ProductoItem = ({producto}) => {

  const {name, marca, image} = producto
  const imageCompuesta = `/images/${image}.png`

  return (
    <div className="border border-h-blue-3 bg-h-blue-2 flex h-[102px] items-center gap-5 rounded pl-4 lg:flex-col lg:h-[194px] lg:justify-center lg:p-0">
      <Image src={imageCompuesta} width={123} height={91} alt="imagen" className="object-contain h-16 w-[85px] shrink-0" />
      <div className="flex flex-col text-center">
          <h4 className="text-h-gray-1 font-semibold text-base mb-1">{name}</h4>
          <span className="text-h-gray-2 text-sm">{marca}</span>
      </div>
    </div>
  )
}
export default ProductoItem