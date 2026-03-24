import { useTranslation } from "react-i18next";

import { Reveal } from "@/componentes/Reveal";
import { TituloSeccion } from "@/componentes/TituloSeccion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { docentesDestacados } from "@/secciones/docentes/datosDocentes";

export function Docentes() {
  const { t } = useTranslation();

  return (
    <section id="docentes" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <TituloSeccion titulo={t("docentes.title")} subtitulo={t("docentes.subtitle")} />

        <div className="grid gap-5 md:grid-cols-3">
          {docentesDestacados.map((docente, index) => (
            <Reveal key={docente.id} delay={Math.min(index * 0.07, 0.2)}>
              <Card className="h-full rounded-xl border-iex-sky/55">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg text-iex-navy">
                    {t(docente.nombre)}
                  </CardTitle>
                  <p className="text-sm font-medium text-iex-primary">{t(docente.rol)}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {t(docente.semblanza)}
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
