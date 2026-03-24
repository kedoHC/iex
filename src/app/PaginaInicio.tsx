import { Aliados } from "@/secciones/aliados/Aliados";
import { Becas } from "@/secciones/becas/Becas";
import { Contacto } from "@/secciones/contacto/Contacto";
import { CtaBanner } from "@/secciones/cta-banner/CtaBanner";
import { Docentes } from "@/secciones/docentes/Docentes";
import { BuzonQuejas } from "@/secciones/buzon-quejas/BuzonQuejas";
import { Galeria } from "@/secciones/galeria/Galeria";
import { Hero } from "@/secciones/hero/Hero";
import { ModeloEducativo } from "@/secciones/modelo-educativo/ModeloEducativo";
import { PorQueElegir } from "@/secciones/por-que-elegir/PorQueElegir";
import { ProcesoAdmision } from "@/secciones/proceso-admision/ProcesoAdmision";
import { Programas } from "@/secciones/programas/Programas";
import { TalleresVespertinos } from "@/secciones/talleres-vespertinos/TalleresVespertinos";

export function PaginaInicio() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <PorQueElegir />
      <Programas />
      <TalleresVespertinos />
      <Docentes />
      <ModeloEducativo />
      <ProcesoAdmision />
      <Becas />
      <CtaBanner />
      <Galeria />
      <Aliados />
      <Contacto />
      <BuzonQuejas />
    </main>
  );
}
