import type { BloqueAlterno } from "@/components/SeccionBloquesAlternos";
import { urlUnsplash } from "@/lib/unsplashUrls";

import type { IdPrograma } from "@/secciones/programas/idsProgramas";

const u = (id: string, w = 1600) => urlUnsplash(id, w);

export type ConfigDetallePrograma = {
  hero: string;
  bloques: readonly BloqueAlterno[];
  /** Franja horizontal de imágenes en bucle continuo (p. ej. programa EPIC). */
  carruselInfinito?: readonly string[];
};

/** Imágenes por sección; textos en i18n (`pages.programPages.<id>`). */
export const detalleProgramas: Record<IdPrograma, ConfigDetallePrograma> = {
  preescolar: {
    hero: u("photo-1503454537195-1dcabb73ffb9", 1920),
    bloques: [
      { id: "propuesta", imagen: u("photo-1513475382585-d06e58bcb0e0", 1400) },
      { id: "ambientes", imagen: u("photo-1509062522246-3755977927d7", 1400) },
      { id: "familia", imagen: u("photo-1503676260728-1c00da094a0b", 1400) },
    ],
  },
  primaria: {
    hero: u("photo-1509062522246-3755977927d7", 1920),
    bloques: [
      { id: "bases", imagen: u("photo-1580582932707-520aed1d3a2d", 1400) },
      { id: "proyectos", imagen: u("photo-1523240795612-9a054b0db644", 1400) },
      { id: "tecnologia", imagen: u("photo-1524178232363-1fb2b075b655", 1400) },
    ],
  },
  secundaria: {
    hero: u("photo-1522202176988-66273c2fd55f", 1920),
    bloques: [
      { id: "steam", imagen: u("photo-1509062522246-3755977927d7", 1400) },
      { id: "vocacional", imagen: u("photo-1546519638-68e109498ffc", 1400) },
      { id: "comunidad", imagen: u("photo-1529390079861-591de354faf5", 1400) },
    ],
  },
  bachillerato: {
    hero: u("photo-1523240795612-9a054b0db644", 1920),
    bloques: [
      { id: "excelencia", imagen: u("photo-1522202176988-66273c2fd55f", 1400) },
      { id: "investigacion", imagen: u("photo-1434030216411-0b793f4b4173", 1400) },
      { id: "universidad", imagen: u("photo-1523050854058-8df90110c9f1", 1400) },
    ],
  },
  epic: {
    hero: u("photo-1622979135225-d2ba269fb1bd", 1920),
    bloques: [
      {
        id: "arIngles",
        imagen: u("photo-1516321310764-801a952b3310", 1400),
      },
      {
        id: "robotica",
        imagen: u("photo-1581091226825-a6a2a5aee158", 1400),
      },
      {
        id: "programacion",
        imagen: u("photo-1517430816105-01e9511f6a85", 1400),
      },
    ],
    carruselInfinito: [
      u("photo-1531482615713-2afd69097998", 900),
      u("photo-1524178232363-1fb2b075b655", 900),
      u("photo-1516321497447-562f0e712a3b", 900),
      u("photo-1555949963-ff9fe0c870eb", 900),
      u("photo-1509062522246-3755977927d7", 900),
      u("photo-1517694712202-14dd9538aa97", 900),
      u("photo-1523240795612-9a054b0db644", 900),
      u("photo-1584697964358-087b417b9728", 900),
    ],
  },
};
