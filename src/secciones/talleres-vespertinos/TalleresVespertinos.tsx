import { useTranslation } from "react-i18next";

import { Reveal } from "@/componentes/Reveal";
import { TituloSeccion } from "@/componentes/TituloSeccion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { talleresVespertinos } from "@/secciones/talleres-vespertinos/datosTalleresVespertinos";

export function TalleresVespertinos() {
  const { t } = useTranslation();

  return (
    <section
      id="talleres-vespertinos"
      className="scroll-mt-20 bg-gradient-to-b from-iex-light/70 to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <TituloSeccion titulo={t("talleres.title")} subtitulo={t("talleres.subtitle")} />

        <div className="grid gap-5 md:grid-cols-3">
          {talleresVespertinos.map((taller, index) => (
            <Reveal key={taller.id} delay={Math.min(index * 0.07, 0.2)}>
              <Card className="h-full rounded-xl border-iex-sky/55">
                <CardHeader>
                  <CardTitle className="text-lg text-iex-navy">{t(taller.titulo)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {t(taller.descripcion)}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
