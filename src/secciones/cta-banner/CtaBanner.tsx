import { useTranslation } from "react-i18next";

import { BotonAccion } from "@/componentes/BotonAccion";
import { Reveal } from "@/componentes/Reveal";
import type { CtaBannerProps } from "@/interfaces/cta";

export function CtaBanner({
  titulo,
  subtitulo,
  textoBoton,
  href = "/#contacto",
}: CtaBannerProps) {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-3xl bg-iex-navy px-6 py-12 text-center shadow-xl sm:px-10 sm:py-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {titulo ?? t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 sm:text-base">
              {subtitulo ?? t("cta.subtitle")}
            </p>
            <div className="mt-8 flex justify-center">
              <BotonAccion variant="white" href={href}>
                {textoBoton ?? t("cta.button")}
              </BotonAccion>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
