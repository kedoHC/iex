import { useTranslation } from "react-i18next";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type CarruselImagenesInfinitoProps = {
  imagenes: readonly string[];
  /** Base i18n path, p. ej. `programPages.epic.marquee` */
  i18nScope: string;
  className?: string;
};

export function CarruselImagenesInfinito({
  imagenes,
  i18nScope,
  className,
}: CarruselImagenesInfinitoProps) {
  const { t } = useTranslation();

  if (imagenes.length === 0) return null;

  const pista = [...imagenes, ...imagenes];

  return (
    <section
      className={cn(
        "w-full border-t border-border/40 bg-gradient-to-b from-iex-light/40 via-white to-iex-light/30",
        className,
      )}
      aria-label={t(`${i18nScope}.ariaLabel`)}
    >
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-14 text-center sm:px-6 sm:pb-8 sm:pt-16 lg:px-8">
        <Reveal y={16}>
          <h2 className="text-2xl font-bold tracking-tight text-iex-navy md:text-3xl">
            {t(`${i18nScope}.title`)}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            {t(`${i18nScope}.lead`)}
          </p>
        </Reveal>
      </div>

      <div className="relative overflow-hidden pb-14 sm:pb-16">
        <div
          className="pointer-events-none absolute inset-y-8 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-8 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16"
          aria-hidden
        />

        <div className="flex w-max animate-marquee-x gap-0 motion-reduce:animate-none">
          {pista.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="h-44 w-52 shrink-0 border-r border-border/25 sm:h-52 sm:w-64 md:h-56 md:w-72"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
