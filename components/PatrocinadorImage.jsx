import Image from "next/image"

const PatrocinadorImage = ({patrocinador}) => {

    console.log(patrocinador)
    const {image, title} = patrocinador

    const imagenCompuesta = `./images/${image}.svg`;

  return (
    <Image src={imagenCompuesta} width={180} height={50} alt="imgen"/>
  )
}
export default PatrocinadorImage