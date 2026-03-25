import type { BloqueAlterno } from "@/components/SeccionBloquesAlternos";
import { urlUnsplash } from "@/lib/unsplashUrls";

/** IDs verificados contra images.unsplash.com (evitar 404 por fotos retiradas). */
export const imagenHeroPaginaBecas = urlUnsplash(
  "photo-1434030216411-0b793f4b4173",
  1920,
);

export const bloquesPaginaBecas: readonly BloqueAlterno[] = [
  { id: "filosofia", imagen: urlUnsplash("photo-1427504494785-3a9ca7044f45", 1400) },
  { id: "criterios", imagen: urlUnsplash("photo-1523240795612-9a054b0db644", 1400) },
  { id: "acompanamiento", imagen: urlUnsplash("photo-1517245386807-bb43f82c33c4", 1400) },
] as const;
