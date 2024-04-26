import { Red_Hat_Text } from "next/font/google"


export const redHatText = Red_Hat_Text({
    weight: '700',
    subsets: ['latin'],
    style: 'normal',
    display: 'swap'
})

const Header = () => {
  return (
    <>
        <header className="contenedor py-[60px]">
            <h1 className="text-h-gray-1 text-[28px] leading-[64px] md:text-4xl md:leading-[72px] lg:text-5xl lg:leading-[92px]">La Hackathon del <br /><span className={`${redHatText.className} text-[64px] font-bold text-h-green-1 md:text-[96px] lg:text-[128px]`}>DEV</span></h1>
            <span className="text-h-purple-1 font-semibold text-2xl lg:text-[32px]">Edición 2024</span>
        </header>
        <div className="contenedor">
            <div className="flex gap-4 items-center">
                <img src='https://unavatar.io/github/jmontes33' alt='josé ramón' className="rounded-full h-[65px] w-[65px]" />
                <div>
                    <p className="text-h-gray-1 text-base">Jose Ramon Montes Hermida</p>
                    <a href="https://www.instagram.com/elrincondeldev" target="_blank" rel="noopener noreferrer" className="text-sm no-underline text-h-gray-2 border-b-[2px] pb-[2px] border-b-h-blue-3">@elrincondeldev</a>
                </div>
            </div>
            <p className="text-h-gray-2 mt-8 text-sm leading-7">¡Hola a todos los apasionados de la tecnología y la innovación!</p>
            <p className="text-h-gray-2 mt-5 text-sm leading-8">Como desarrollador, me emociona enormemente invitarlos a todos a participar en nuestra próxima hackathon. ¿Por qué? Porque las hackathons son mucho más que simplemente un evento; son un espacio donde la creatividad, el ingenio y la colaboración se unen para crear soluciones impactantes.</p>
        </div>
    </>
    
  )
}
export default Header