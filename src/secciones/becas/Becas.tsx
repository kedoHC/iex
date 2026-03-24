import { useTranslation } from "react-i18next";

import { BotonAccion } from "@/componentes/BotonAccion";
import { Reveal } from "@/componentes/Reveal";
import { TituloSeccion } from "@/componentes/TituloSeccion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { beneficiosBeca } from "@/secciones/becas/datosBecas";

export function Becas() {
  const { t } = useTranslation();

  return (
    <section
      id="becas"
      className="scroll-mt-20 bg-gradient-to-b from-white to-iex-light/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <TituloSeccion titulo={t("becas.title")} subtitulo={t("becas.subtitle")} />

        <div className="grid gap-5 md:grid-cols-3">
          {beneficiosBeca.map((beneficio, index) => (
            <Reveal key={beneficio.id} delay={Math.min(index * 0.07, 0.2)}>
              <Card className="h-full rounded-xl border-iex-sky/55">
                <CardHeader>
                  <CardTitle className="text-lg text-iex-navy">
                    {t(beneficio.titulo)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {t(beneficio.descripcion)}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <BotonAccion href="/#contacto" variant="primary">
            {t("becas.cta")}
          </BotonAccion>
        </Reveal>
      </div>
    </section>
  );
}
