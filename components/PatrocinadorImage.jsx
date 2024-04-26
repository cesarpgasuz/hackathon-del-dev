import Image from "next/image"

const PatrocinadorImage = ({patrocinador}) => {


    const {image, title} = patrocinador

    const imagenCompuesta = `/images/${image}.svg`;

  return (
    <Image src={imagenCompuesta} width={183} height={50} alt={`Imagen del patrocinado ${title}`}/>
  )
}
export default PatrocinadorImage