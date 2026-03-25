import { useTranslation } from "react-i18next";

import { BotonAccion } from "@/components/BotonAccion";
import { Reveal } from "@/components/Reveal";
import { HeroSlider } from "@/secciones/hero/HeroSlider";
import { HeroStats } from "@/secciones/hero/HeroStats";
import type { HeroProps } from "@/interfaces/hero";
import { cn } from "@/lib/utils";

export function Hero({ className }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className={cn(
        "scroll-mt-20 bg-gradient-to-b from-iex-light via-white to-white",
        className,
      )}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8">
          <Reveal>
            <span className="inline-flex w-fit items-center rounded-full border border-iex-primary/20 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-iex-primary">
              {t("hero.badge")}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight text-iex-navy sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
              {t("hero.title")}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("hero.description")}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-wrap gap-3">
            <BotonAccion variant="primary" href="/#programas">
              {t("hero.ctaPrimary")}
            </BotonAccion>
            <BotonAccion variant="outline" href="/#contacto">
              {t("hero.ctaSecondary")}
            </BotonAccion>
          </Reveal>
          <HeroStats />
        </div>
        <HeroSlider />
      </div>
    </section>
  );
}
