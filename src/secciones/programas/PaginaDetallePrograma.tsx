import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams } from "react-router-dom";

import { BotonAccion } from "@/components/BotonAccion";
import { CarruselImagenesInfinito } from "@/components/CarruselImagenesInfinito";
import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { Reveal } from "@/components/Reveal";
import { detalleProgramas } from "@/secciones/programas/datosDetalleProgramas";
import { esIdPrograma } from "@/secciones/programas/idsProgramas";
import { SeccionBloquesProgramaDetalle } from "@/secciones/programas/SeccionBloquesProgramaDetalle";

export function PaginaDetallePrograma() {
  const { t } = useTranslation();
  const { programaId } = useParams<{ programaId: string }>();

  if (!programaId || !esIdPrograma(programaId)) {
    return <Navigate to={{ pathname: "/", hash: "programas" }} replace />;
  }

  const config = detalleProgramas[programaId];
  const scope = `programPages.${programaId}` as const;

  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${scope}.pageTitle`}
        i18nScope={scope}
        imagenUrl={config.hero}
      />
      <SeccionBloquesProgramaDetalle
        bloquesI18nScope={`${scope}.blocks`}
        bloques={config.bloques}
      />
      {config.carruselInfinito && config.carruselInfinito.length > 0 ? (
        <CarruselImagenesInfinito
          imagenes={config.carruselInfinito}
          i18nScope={`${scope}.marquee`}
        />
      ) : null}
      <section className="w-full border-t border-border/40 bg-gradient-to-r from-iex-navy via-iex-navy to-iex-primary/85 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {t(`${scope}.cta.title`)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/88 md:text-lg">
              {t(`${scope}.cta.body`)}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
              <BotonAccion href="/admisiones" variant="white">
                {t(`${scope}.cta.primary`)}
              </BotonAccion>
              <Link
                to={{ pathname: "/", hash: "contacto" }}
                className="text-sm font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {t(`${scope}.cta.secondary`)}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
