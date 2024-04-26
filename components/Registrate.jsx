import Link from "next/link"
const Registrate = () => {
  return (
    <section className="contenedor py-10">
         <h2 className="text-center text-h-gray-1 text-2xl mb-10 font-bold">¡Regístrate gratis!</h2>
          <Link 
            href='/registro'
            className="bg-h-green-1 block h-20 py-6 font-bold text-2xl text-center no-underline rounded"
          >Registrarme</Link>
    </section>
  )
}
export default Registrate