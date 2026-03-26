import { urlUnsplash } from "@/lib/unsplashUrls";

import type { PerfilTestimonial } from "@/secciones/conocenos/TestimonialesContenidoAnimado";

/** Padres y madres exalumnos; fotos ilustrativas. */
export const perfilesFamiliaIex: readonly PerfilTestimonial[] = [
  {
    id: "ana",
    imagen: urlUnsplash("photo-1573496359142-b8d87734a5a2", 1200),
  },
  {
    id: "carlos",
    imagen: urlUnsplash("photo-1560250097-0b93528c311a", 1200),
  },
  {
    id: "mariana",
    imagen: urlUnsplash("photo-1519085360753-af0119f7cbe7", 1200),
  },
] as const;
