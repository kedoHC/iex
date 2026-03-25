import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export type BloqueAlterno = {
  id: string;
  imagen: string;
};

type SeccionBloquesAlternosProps = {
  /** Prefijo i18n de los bloques (ej. `pages.workshops.blocks`). */
  bloquesI18nScope: string;
  bloques: readonly BloqueAlterno[];
};

export function SeccionBloquesAlternos({
  bloquesI18nScope,
  bloques,
}: SeccionBloquesAlternosProps) {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <>
      {bloques.map((b, i) => {
        const prefix = `${bloquesI18nScope}.${b.id}`;
        const imageOnRight = i % 2 === 1;

        return (
          <section
            key={b.id}
            className={cn(
              "border-t border-border/50",
              i % 2 === 0 ? "bg-white" : "bg-iex-light/45",
            )}
          >
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
              <Reveal delay={Math.min(i * 0.08, 0.24)} y={22}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  {reduceMotion ? (
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30",
                        imageOnRight && "lg:order-2",
                      )}
                    >
                      <img
                        src={b.imagen}
                        alt={t(`${prefix}.imageAlt`)}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <motion.div
                      className={cn(
                        "overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30",
                        imageOnRight && "lg:order-2",
                      )}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    >
                      <motion.img
                        src={b.imagen}
                        alt={t(`${prefix}.imageAlt`)}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        whileHover={{ scale: 1.08 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </motion.div>
                  )}
                  <div
                    className={cn("text-left", imageOnRight && "lg:order-1")}
                  >
                    <h2 className="text-2xl font-bold tracking-tight text-iex-navy md:text-3xl">
                      {t(`${prefix}.title`)}
                    </h2>
                    <div
                      className="mt-3 h-1 w-16 rounded-full bg-iex-accent"
                      aria-hidden
                    />
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {t(`${prefix}.lead`)}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {t(`${prefix}.body`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
