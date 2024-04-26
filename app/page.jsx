import Header from "@/components/Header";
import Estadisticas from "@/components/Estadisticas";
import Info from "@/components/Info";
import Patrocinadores from "@/components/Patrocinadores";
import Premios from "@/components/Premios";
import Faqs from "@/components/Faqs";
import Registrate from "@/components/Registrate";

export default function Home() {
  return (
   <>
    <Header />
    <Estadisticas />
    <Info />
    <Patrocinadores />
    <Premios />
    <Faqs />
    <Registrate />
   </>
  );
}
