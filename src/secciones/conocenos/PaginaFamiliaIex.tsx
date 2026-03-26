import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { perfilesFamiliaIex } from "@/secciones/conocenos/datosTestimonialesFamilia";
import { TestimonialesContenidoAnimado } from "@/secciones/conocenos/TestimonialesContenidoAnimado";
import { urlUnsplash } from "@/lib/unsplashUrls";

const SCOPE = "pages.about.familyIex" as const;

export function PaginaFamiliaIex() {
  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${SCOPE}.pageTitle`}
        i18nScope={SCOPE}
        imagenUrl={urlUnsplash("photo-1529390079861-591de354faf5", 1920)}
        hoverEnImagen
      />
      <TestimonialesContenidoAnimado
        i18nPrefix={SCOPE}
        perfiles={perfilesFamiliaIex}
      />
    </main>
  );
}

