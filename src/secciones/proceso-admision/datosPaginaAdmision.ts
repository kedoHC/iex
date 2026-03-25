import type { BloqueAlterno } from "@/components/SeccionBloquesAlternos";
import { urlUnsplash } from "@/lib/unsplashUrls";

/** IDs verificados contra images.unsplash.com (evitar 404 por fotos retiradas). */
export const imagenHeroPaginaAdmision = urlUnsplash(
  "photo-1509062522246-3755977927d7",
  1920,
);

export const bloquesPaginaAdmision: readonly BloqueAlterno[] = [
  { id: "informes", imagen: urlUnsplash("photo-1546519638-68e109498ffc", 1400) },
  { id: "evaluacion", imagen: urlUnsplash("photo-1503676260728-1c00da094a0b", 1400) },
  { id: "integracion", imagen: urlUnsplash("photo-1529390079861-591de354faf5", 1400) },
] as const;
