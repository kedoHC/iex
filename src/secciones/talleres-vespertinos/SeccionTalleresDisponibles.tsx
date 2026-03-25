import {
  Bot,
  ChessKnight,
  Drama,
  Goal,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { IdTallerDisponible } from "@/secciones/talleres-vespertinos/datosPaginaTalleres";

const iconos: Record<IdTallerDisponible, LucideIcon> = {
  futbol: Goal,
  arte: Palette,
  teatro: Drama,
  ajedrez: ChessKnight,
  robotica: Bot,
};

type SeccionTalleresDisponiblesProps = {
  i18nScope: string;
  ids: readonly IdTallerDisponible[];
};

export function SeccionTalleresDisponibles({
  i18nScope,
  ids,
}: SeccionTalleresDisponiblesProps) {
  const { t } = useTranslation();
  const base = `${i18nScope}.available` as const;

  return (
    <section className="w-full border-t border-border/40 bg-gradient-to-br from-iex-light/90 via-white to-iex-sky/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-iex-navy md:text-3xl">
              {t(`${base}.title`)}
            </h2>
            <div
              className="mx-auto mt-3 h-1 w-16 rounded-full bg-iex-accent"
              aria-hidden
            />
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              {t(`${base}.subtitle`)}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ids.map((id, i) => {
            const Icon = iconos[id];
            const prefix = `${base}.items.${id}`;
            return (
              <Reveal key={id} delay={Math.min(i * 0.07, 0.28)} y={18}>
                <motion.article
                  className={cn(
                    "flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white/90 p-5 shadow-sm",
                    "transition-shadow duration-300 hover:shadow-lg hover:border-iex-primary/25",
                  )}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-iex-primary/12 text-iex-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-iex-navy">
                    {t(`${prefix}.title`)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t(`${prefix}.description`)}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
