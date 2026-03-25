import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type PaginaHeroInternaProps = {
  /** Clave i18n del título en la franja superior (ej. `pages.workshops.pageTitle`). */
  pageTitleKey: string;
  /** Prefijo i18n del bloque hero (ej. `pages.workshops` → `pages.workshops.hero.*`). */
  i18nScope: string;
  imagenUrl: string;
  /** Escala suave de la foto de fondo al pasar el cursor (p. ej. admisiones y becas). */
  hoverEnImagen?: boolean;
};

export function PaginaHeroInterna({
  pageTitleKey,
  i18nScope,
  imagenUrl,
  hoverEnImagen = false,
}: PaginaHeroInternaProps) {
  const { t } = useTranslation();
  const hero = `${i18nScope}.hero` as const;
  const reduceMotion = useReducedMotion();
  const imagenHoverActivo = hoverEnImagen && !reduceMotion;

  return (
    <>
      <div className="border-b border-border/50 bg-iex-light/80 py-3 text-center backdrop-blur-sm">
        <h1 className="text-xs font-bold uppercase tracking-[0.25em] text-iex-navy/90 sm:text-sm">
          {t(pageTitleKey)}
        </h1>
      </div>

      <motion.section
        className={cn(
          "relative flex min-h-[64vh] w-full items-end sm:min-h-[74vh]",
          imagenHoverActivo && "cursor-default overflow-hidden",
        )}
        aria-label={t(`${hero}.imageAlt`)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease }}
      >
        {imagenHoverActivo ? (
          <motion.div
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url(${imagenUrl})` }}
            aria-hidden
            initial={false}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.55, ease }}
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imagenUrl})` }}
            aria-hidden
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-iex-navy/95 via-iex-navy/55 to-iex-navy/25"
          aria-hidden
        />
        <div className="relative z-10 w-full px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-10">
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              {t(`${hero}.eyebrow`)}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t(`${hero}.title`)}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              {t(`${hero}.description`)}
            </p>
            <p className="mt-5 text-sm font-medium text-white/80">{t(`${hero}.meta`)}</p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
