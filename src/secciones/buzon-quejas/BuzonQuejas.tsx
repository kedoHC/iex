import { MessageSquareWarning } from "lucide-react";
import { useTranslation } from "react-i18next";

import { BotonAccion } from "@/componentes/BotonAccion";
import { Reveal } from "@/componentes/Reveal";

export function BuzonQuejas() {
  const { t } = useTranslation();

  return (
    <section id="buzon-quejas" className="scroll-mt-20 bg-iex-navy py-14 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-white/15 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
                <MessageSquareWarning className="h-4 w-4" aria-hidden />
                {t("buzon.badge")}
              </span>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {t("buzon.title")}
              </h2>
              <p className="max-w-2xl text-sm text-white/80 md:text-base">
                {t("buzon.description")}
              </p>
            </div>

            <BotonAccion href="/#contacto" variant="white">
              {t("buzon.cta")}
            </BotonAccion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
