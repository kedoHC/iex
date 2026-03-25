import { useTranslation } from "react-i18next";

import { BotonAccion } from "@/components/BotonAccion";
import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { Reveal } from "@/components/Reveal";
import { SeccionBloquesAlternos } from "@/components/SeccionBloquesAlternos";
import { TituloSeccion } from "@/components/TituloSeccion";
import { TarjetaPaso } from "@/secciones/proceso-admision/TarjetaPaso";
import {
  bloquesPaginaAdmision,
  imagenHeroPaginaAdmision,
} from "@/secciones/proceso-admision/datosPaginaAdmision";

const SCOPE = "pages.admission" as const;

export function PaginaProcesoAdmision() {
  const { t } = useTranslation();
  const steps = t("admission.steps", { returnObjects: true }) as {
    titulo: string;
    descripcion: string;
  }[];

  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${SCOPE}.pageTitle`}
        i18nScope={SCOPE}
        imagenUrl={imagenHeroPaginaAdmision}
        hoverEnImagen
      />
      <SeccionBloquesAlternos
        bloquesI18nScope={`${SCOPE}.blocks`}
        bloques={bloquesPaginaAdmision}
      />

      <section
        className="border-t border-border/50 bg-gradient-to-b from-white to-iex-light/50 py-16 sm:py-20"
        aria-labelledby="pagina-admision-pasos"
      >
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <TituloSeccion
            idTitulo="pagina-admision-pasos"
            titulo={t("admission.title")}
            subtitulo={t(`${SCOPE}.stepsIntro`)}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((paso, i) => (
              <TarjetaPaso
                key={paso.titulo}
                paso={{
                  numero: i + 1,
                  titulo: paso.titulo,
                  descripcion: paso.descripcion,
                }}
                delay={Math.min(i * 0.06, 0.36)}
              />
            ))}
          </div>
          <Reveal delay={0.12} className="flex justify-center pt-2">
            <BotonAccion href="/#contacto" variant="primary">
              {t(`${SCOPE}.cta`)}
            </BotonAccion>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
