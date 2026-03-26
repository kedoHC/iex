import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { perfilesAlumnos } from "@/secciones/conocenos/datosTestimonialesAlumnos";
import { TestimonialesContenidoAnimado } from "@/secciones/conocenos/TestimonialesContenidoAnimado";
import { urlUnsplash } from "@/lib/unsplashUrls";

const SCOPE = "pages.about.students" as const;

export function PaginaNuestrosAlumnos() {
  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${SCOPE}.pageTitle`}
        i18nScope={SCOPE}
        imagenUrl={urlUnsplash("photo-1503454537195-1dcabb73ffb9", 1920)}
        hoverEnImagen
      />
      <TestimonialesContenidoAnimado
        i18nPrefix={SCOPE}
        perfiles={perfilesAlumnos}
      />
    </main>
  );
}

