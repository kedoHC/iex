import type { BloqueAlterno } from "@/components/SeccionBloquesAlternos";
import { urlUnsplash } from "@/lib/unsplashUrls";

export const imagenHeroPaginaTalleres = urlUnsplash(
  "photo-1524178232363-1fb2b075b655",
  1920,
);

export const bloquesPaginaTalleres: readonly BloqueAlterno[] = [
  { id: "horario", imagen: urlUnsplash("photo-1513475382585-d06e58bcb0e0", 1400) },
  { id: "oferta", imagen: urlUnsplash("photo-1509062522246-3755977927d7", 1400) },
  { id: "comunidad", imagen: urlUnsplash("photo-1523240795612-9a054b0db644", 1400) },
] as const;

/** Video de referencia sobre creatividad y aprendizaje escolar (TED). Sustituir por material propio si lo deseas. */
export const YOUTUBE_VIDEO_ID_TALLERES = "iG9CE55wbtE";

export const IDS_TALLERES_DISPONIBLES = [
  "futbol",
  "arte",
  "teatro",
  "ajedrez",
  "robotica",
] as const;

export type IdTallerDisponible = (typeof IDS_TALLERES_DISPONIBLES)[number];
