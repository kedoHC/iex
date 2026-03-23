import { Aliados } from "@/secciones/aliados/Aliados";
import { Contacto } from "@/secciones/contacto/Contacto";
import { CtaBanner } from "@/secciones/cta-banner/CtaBanner";
import { Galeria } from "@/secciones/galeria/Galeria";
import { Hero } from "@/secciones/hero/Hero";
import { ModeloEducativo } from "@/secciones/modelo-educativo/ModeloEducativo";
import { PorQueElegir } from "@/secciones/por-que-elegir/PorQueElegir";
import { ProcesoAdmision } from "@/secciones/proceso-admision/ProcesoAdmision";
import { Programas } from "@/secciones/programas/Programas";

export function PaginaInicio() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <PorQueElegir />
      <Programas />
      <ModeloEducativo />
      <ProcesoAdmision />
      <CtaBanner />
      <Galeria />
      <Contacto />
      <Aliados />
    </main>
  );
}
