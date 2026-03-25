import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { DocentesContenidoAnimado } from "@/secciones/docentes/DocentesContenidoAnimado";
import { imagenHeroPaginaDocentes } from "@/secciones/docentes/datosPaginaDocentes";

const SCOPE = "pages.teachers" as const;

export function PaginaDocentes() {
  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${SCOPE}.pageTitle`}
        i18nScope={SCOPE}
        imagenUrl={imagenHeroPaginaDocentes}
      />
      <DocentesContenidoAnimado />
    </main>
  );
}
