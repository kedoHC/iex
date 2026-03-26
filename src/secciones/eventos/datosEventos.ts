import type { EventoPasadoDato } from "@/interfaces/eventos";

/** Misma convención ixlib que hero / galería (IDs probados en el proyecto). */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.1.0&auto=format&fit=crop&w=${w}&q=80`;

export const imagenHeroEventoPrincipal = u(
  "photo-1509062522246-3755977927d7",
  1920,
);

/** Escena artística (misma que actividades en por-qué-elegir). */
export const imagenCompromisoCultural = u(
  "photo-1513475382585-d06e58bcb0e0",
  1400,
);

/** Foto tipo auditorio/puesta en escena para franja final. */
export const imagenMagnoEvento = u("photo-1529626455594-4ff0802cfb7e", 1920);

export const eventosPasados: readonly EventoPasadoDato[] = [
  { id: "graduacion", imagen: u("photo-1517486808906-6ca8b3f04846") },
  { id: "feriaCiencias", imagen: u("photo-1509062522246-3755977927d7") },
  { id: "olimpiada", imagen: u("photo-1546519638-68e109498ffc") },
  { id: "semanaCultural", imagen: u("photo-1523240795612-9a054b0db644") },
  { id: "debate", imagen: u("photo-1522202176988-66273c2fd55f") },
  { id: "arte", imagen: u("photo-1503454537195-1dcabb73ffb9") },
  { id: "lectura", imagen: u("photo-1503676260728-1c00da094a0b") },
  { id: "servicio", imagen: u("photo-1529390079861-591de354faf5") },
] as const;
