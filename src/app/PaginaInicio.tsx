import { Aliados } from "@/secciones/aliados/Aliados";
import { Contacto } from "@/secciones/contacto/Contacto";
import { CtaBanner } from "@/secciones/cta-banner/CtaBanner";
import { BuzonQuejas } from "@/secciones/buzon-quejas/BuzonQuejas";
import { Galeria } from "@/secciones/galeria/Galeria";
import { Hero } from "@/secciones/hero/Hero";
import { ModeloEducativo } from "@/secciones/modelo-educativo/ModeloEducativo";
import { PorQueElegir } from "@/secciones/por-que-elegir/PorQueElegir";
import { Programas } from "@/secciones/programas/Programas";

export function PaginaInicio() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <PorQueElegir />
      <Programas />
      <ModeloEducativo />
      <CtaBanner />
      <Galeria />
      <Aliados />
      <Contacto />
      <BuzonQuejas />
    </main>
  );
}
