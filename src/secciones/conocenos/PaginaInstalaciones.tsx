import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { urlUnsplash } from "@/lib/unsplashUrls";

const SCOPE = "pages.about.facilities" as const;

type ImagenSeccion = {
  src: string;
  alt: string;
};

type SeccionInstalaciones = {
  id: string;
  titulo: string;
  lead: string;
  body: string;
  imagenes: readonly ImagenSeccion[];
};

export function PaginaInstalaciones() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const secciones = t(`${SCOPE}.sections`, {
    returnObjects: true,
  }) as SeccionInstalaciones[];

  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${SCOPE}.pageTitle`}
        i18nScope={SCOPE}
        imagenUrl={urlUnsplash("photo-1501183638710-841dd1904471", 1920)}
        hoverEnImagen
      />

      <section className="w-full border-t border-border/50 bg-white">
        <div className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {secciones.map((s, i) => {
            const invertida = i % 2 === 1;
            const [imgA, imgB, imgC, imgD] = s.imagenes;

            return (
              <section
                key={s.id}
                className={cn(
                  "rounded-3xl border border-border/60 bg-gradient-to-b from-iex-light/25 via-white to-white p-6 shadow-sm sm:p-8",
                )}
              >
                <Reveal delay={Math.min(i * 0.08, 0.24)} y={22}>
                  <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
                    <div
                      className={cn(
                        "lg:col-span-5",
                        invertida && "lg:order-2",
                      )}
                    >
                      <h2 className="text-2xl font-bold tracking-tight text-iex-navy md:text-3xl">
                        {s.titulo}
                      </h2>
                      <div
                        className="mt-3 h-1 w-16 rounded-full bg-iex-accent"
                        aria-hidden
                      />
                      <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                        {s.lead}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                        {s.body}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "grid grid-cols-12 gap-4 lg:col-span-7",
                        invertida && "lg:order-1",
                      )}
                    >
                      <motion.figure
                        className="col-span-12 overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30 sm:col-span-7"
                        whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 280, damping: 24 }}
                      >
                        <motion.img
                          src={imgA?.src ?? ""}
                          alt={imgA?.alt ?? ""}
                          className="aspect-[4/3] h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </motion.figure>

                      <motion.figure
                        className="col-span-6 overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30 sm:col-span-5"
                        whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 280, damping: 24 }}
                      >
                        <motion.img
                          src={imgB?.src ?? ""}
                          alt={imgB?.alt ?? ""}
                          className="aspect-square h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </motion.figure>

                      <motion.figure
                        className="col-span-6 overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30 sm:col-span-5"
                        whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 280, damping: 24 }}
                      >
                        <motion.img
                          src={imgC?.src ?? ""}
                          alt={imgC?.alt ?? ""}
                          className="aspect-square h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </motion.figure>

                      <motion.figure
                        className="col-span-12 overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30 sm:col-span-7"
                        whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 280, damping: 24 }}
                      >
                        <motion.img
                          src={imgD?.src ?? ""}
                          alt={imgD?.alt ?? ""}
                          className="aspect-[16/9] h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </motion.figure>

                      <p className="col-span-12 mt-1 text-xs text-muted-foreground">
                        {t(`${SCOPE}.photoHint`)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}

