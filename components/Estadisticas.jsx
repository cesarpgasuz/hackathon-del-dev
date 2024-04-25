import EstadisticaItem from "./EstadisticaItem"
const Estadisticas = () => {
  return (
    <section className="contenedor">
        <div className="grid gap-6">
            <EstadisticaItem>+200 Participantes,  +10Paise</EstadisticaItem>
            <EstadisticaItem>2 Semanas Codificando</EstadisticaItem>
            <EstadisticaItem>3 Ganadores</EstadisticaItem>
        </div>
    </section>
  )
}
export default Estadisticas