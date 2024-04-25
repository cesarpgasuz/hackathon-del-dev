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
            <h1 className="text-h-gray-1 text-[28px] leading-[64px]">La Hackathon del <br /><span className={`${redHatText.className} text-[64px] font-bold text-h-green-1`}>DEV</span></h1>
            <span className="text-h-purple-1 font-semibold text-2xl">Edición 2024</span>
        </header>
        <div className="contenedor">
            <div className="flex">
                <img src='https://unavatar.io/github/jmontes33' alt='josé ramón' className="rounded-full h-[40px] w-[40px]" />
                <div>
                    <p className="text-h-gray-1 text-xs">Jose Ramon Montes Hermida</p>
                    <a href="https://github.com/jmontes33" target="_blank" rel="noopener" className="text-xs no-underline text-h-gray-2">@jmontes33</a>
                </div>
            </div>
            <p>¡Hola a todos los apasionados de la tecnología y la innovación!</p>
            <p>Como desarrollador, me emociona enormemente invitarlos a todos a participar en nuestra próxima hackathon. ¿Por qué? Porque las hackathons son mucho más que simplemente un evento; son un espacio donde la creatividad, el ingenio y la colaboración se unen para crear soluciones impactantes.</p>
        </div>
    </>
    
  )
}
export default Header