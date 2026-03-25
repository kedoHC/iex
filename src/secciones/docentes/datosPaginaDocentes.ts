import { urlUnsplash } from "@/lib/unsplashUrls";

/** Fotos tipo retrato / profesional; sustituir por archivo en `/public` cuando existan oficiales. */
export const imagenHeroPaginaDocentes = urlUnsplash(
  "photo-1529390079861-591de354faf5",
  1920,
);

export type PerfilDocenteId = "andrea" | "rodrigo" | "sofia";

export type PerfilDocenteDato = {
  id: PerfilDocenteId;
  imagen: string;
};

export const perfilesDocentes: readonly PerfilDocenteDato[] = [
  {
    id: "andrea",
    imagen: urlUnsplash("photo-1573496359142-b8d87734a5a2", 1200),
  },
  {
    id: "rodrigo",
    imagen: urlUnsplash("photo-1560250097-0b93528c311a", 1200),
  },
  {
    id: "sofia",
    imagen: urlUnsplash("photo-1519085360753-af0119f7cbe7", 1200),
  },
] as const;
