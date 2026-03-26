import { urlUnsplash } from "@/lib/unsplashUrls";

import type { PerfilTestimonial } from "@/secciones/conocenos/TestimonialesContenidoAnimado";

/** Un alumno representativo por nivel; fotos ilustrativas. */
export const perfilesAlumnos: readonly PerfilTestimonial[] = [
  {
    id: "preescolar",
    imagen: urlUnsplash("photo-1503454537195-1dcabb73ffb9", 1200),
  },
  {
    id: "primaria",
    imagen: urlUnsplash("photo-1509062522246-3755977927d7", 1200),
  },
  {
    id: "secundaria",
    imagen: urlUnsplash("photo-1522202176988-66273c2fd55f", 1200),
  },
  {
    id: "bachillerato",
    imagen: urlUnsplash("photo-1523240795612-9a054b0db644", 1200),
  },
] as const;
