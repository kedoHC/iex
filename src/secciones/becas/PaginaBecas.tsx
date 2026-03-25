import { useTranslation } from "react-i18next";

import { BotonAccion } from "@/components/BotonAccion";
import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { Reveal } from "@/components/Reveal";
import { SeccionBloquesAlternos } from "@/components/SeccionBloquesAlternos";
import {
  bloquesPaginaBecas,
  imagenHeroPaginaBecas,
} from "@/secciones/becas/datosPaginaBecas";

const SCOPE = "pages.scholarships" as const;

export function PaginaBecas() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${SCOPE}.pageTitle`}
        i18nScope={SCOPE}
        imagenUrl={imagenHeroPaginaBecas}
        hoverEnImagen
      />
      <SeccionBloquesAlternos
        bloquesI18nScope={`${SCOPE}.blocks`}
        bloques={bloquesPaginaBecas}
      />
      <section className="border-t border-border/50 bg-iex-navy py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {t(`${SCOPE}.ctaBand.title`)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
              {t(`${SCOPE}.ctaBand.body`)}
            </p>
            <div className="mt-8 flex justify-center">
              <BotonAccion href="/#contacto" variant="white">
                {t(`${SCOPE}.ctaBand.button`)}
              </BotonAccion>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
