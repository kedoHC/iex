import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useCallback, useId, useState } from "react";
import { useTranslation } from "react-i18next";

import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { urlUnsplash } from "@/lib/unsplashUrls";

const SCOPE = "pages.about.services" as const;

type Servicio = {
  id: "comedor" | "extensionHorario" | "diferentesNiveles" | "puertasAbiertas";
  title: string;
  description: string;
  bullets: readonly string[];
};

const imagenPorServicio: Record<Servicio["id"], string> = {
  comedor: urlUnsplash("photo-1555396273-367ea4eb4db5", 1400),
  extensionHorario: urlUnsplash("photo-1504754524776-8f4f37790ca0", 1400),
  diferentesNiveles: urlUnsplash("photo-1496307653780-42ee777d4833", 1400),
  puertasAbiertas: urlUnsplash("photo-1448932223592-d1fc686e76ea", 1400),
};

type DetalleServicio = {
  menusTitle?: string;
  menuItems?: readonly string[];
  nutritionTitle?: string;
  nutritionBody?: string;
  scheduleHighlight?: string;
  scheduleBody?: string;
  scheduleBullets?: readonly string[];
  extraParagraphs?: readonly string[];
  extraBullets?: readonly string[];
  openDoorBullets?: readonly string[];
};

export function PaginaServicios() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [abiertoId, setAbiertoId] = useState<Servicio["id"] | null>(null);
  const baseId = useId();

  const servicios = t(`${SCOPE}.services`, { returnObjects: true }) as Servicio[];

  const detalle = useCallback(
    (id: Servicio["id"]) =>
      t(`${SCOPE}.details.${id}`, { returnObjects: true }) as DetalleServicio,
    [t],
  );

  const alternar = (id: Servicio["id"]) => {
    setAbiertoId((actual) => (actual === id ? null : id));
  };

  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${SCOPE}.pageTitle`}
        i18nScope={SCOPE}
        imagenUrl={urlUnsplash("photo-1503676260728-1c00da094a0b", 1920)}
        hoverEnImagen
      />

      <section className="w-full border-t border-border/50 bg-white">
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {servicios.map((s, i) => {
            const imagenDerecha = i % 2 === 1;
            const fondo = i % 2 === 1 ? "bg-iex-light/55" : "bg-white";
            const src = imagenPorServicio[s.id];
            const alt = t(`${SCOPE}.serviceImages.${s.id}.alt`);
            const expandido = abiertoId === s.id;
            const d = detalle(s.id);
            const panelId = `${baseId}-panel-${s.id}`;

            return (
              <Reveal key={s.id} delay={Math.min(i * 0.08, 0.24)} y={22}>
                <section
                  className={cn(
                    "rounded-3xl border border-border/70 p-6 shadow-sm sm:p-8",
                    fondo,
                  )}
                >
                  <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                    <motion.div
                      className={cn(
                        "overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30 lg:col-span-5",
                        imagenDerecha && "lg:order-2",
                      )}
                      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    >
                      <motion.img
                        src={src}
                        alt={alt}
                        className="aspect-[4/3] h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </motion.div>

                    <div
                      className={cn(
                        "lg:col-span-7",
                        imagenDerecha && "lg:order-1",
                      )}
                    >
                      <h2 className="text-2xl font-bold tracking-tight text-iex-navy md:text-3xl">
                        {s.title}
                      </h2>
                      <div
                        className="mt-3 h-1 w-16 rounded-full bg-iex-accent"
                        aria-hidden
                      />
                      <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                        {s.description}
                      </p>

                      <ul className="mt-6 space-y-2 text-sm text-muted-foreground md:text-base">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-iex-primary/12 text-iex-primary">
                              <Check className="h-3.5 w-3.5" aria-hidden />
                            </span>
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        className={cn(
                          "mt-7 inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-iex-navy shadow-sm transition-colors",
                          "hover:border-iex-primary/40 hover:text-iex-primary",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2",
                        )}
                        aria-expanded={expandido}
                        aria-controls={panelId}
                        id={`${baseId}-trigger-${s.id}`}
                        onClick={() => alternar(s.id)}
                      >
                        {expandido
                          ? t(`${SCOPE}.hideDetails`)
                          : t(`${SCOPE}.viewDetails`)}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 transition-transform duration-200",
                            expandido && "rotate-180",
                          )}
                          aria-hidden
                        />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandido ? (
                      <motion.div
                        key={`detalle-${s.id}`}
                        id={panelId}
                        role="region"
                        aria-labelledby={`${baseId}-trigger-${s.id}`}
                        initial={{
                          opacity: reduceMotion ? 1 : 0,
                          y: reduceMotion ? 0 : -12,
                        }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: reduceMotion ? 1 : 0,
                          y: reduceMotion ? 0 : -8,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-6 border-t border-border/50 pt-6"
                      >
                        <div className="rounded-2xl border border-border/60 bg-white/90 p-5 shadow-inner sm:p-6">
                          {s.id === "comedor" ? (
                            <div className="space-y-6 text-sm text-muted-foreground md:text-base">
                              {d.menusTitle && d.menuItems?.length ? (
                                <div>
                                  <h3 className="text-base font-bold text-iex-navy md:text-lg">
                                    {d.menusTitle}
                                  </h3>
                                  <ul className="mt-3 space-y-2">
                                    {d.menuItems.map((item) => (
                                      <li
                                        key={item}
                                        className="flex items-start gap-2.5"
                                      >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iex-accent" />
                                        <span className="leading-relaxed">
                                          {item}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : null}
                              {d.nutritionTitle && d.nutritionBody ? (
                                <div>
                                  <h3 className="text-base font-bold text-iex-navy md:text-lg">
                                    {d.nutritionTitle}
                                  </h3>
                                  <p className="mt-3 leading-relaxed">
                                    {d.nutritionBody}
                                  </p>
                                </div>
                              ) : null}
                            </div>
                          ) : null}

                          {s.id === "extensionHorario" ? (
                            <div className="space-y-4 text-sm text-muted-foreground md:text-base">
                              {d.scheduleHighlight ? (
                                <p className="rounded-xl border border-iex-primary/25 bg-iex-light/80 px-4 py-3 text-center text-base font-semibold text-iex-navy md:text-lg">
                                  {d.scheduleHighlight}
                                </p>
                              ) : null}
                              {d.scheduleBody ? (
                                <p className="leading-relaxed">
                                  {d.scheduleBody}
                                </p>
                              ) : null}
                              {d.scheduleBullets?.length ? (
                                <ul className="space-y-2">
                                  {d.scheduleBullets.map((b) => (
                                    <li
                                      key={b}
                                      className="flex items-start gap-2.5"
                                    >
                                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-iex-primary" />
                                      <span className="leading-relaxed">
                                        {b}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ) : null}

                          {s.id === "diferentesNiveles" ? (
                            <div className="space-y-4 text-sm text-muted-foreground md:text-base">
                              {d.extraParagraphs?.map((p) => (
                                <p key={p} className="leading-relaxed">
                                  {p}
                                </p>
                              ))}
                              {d.extraBullets?.length ? (
                                <ul className="space-y-2">
                                  {d.extraBullets.map((b) => (
                                    <li
                                      key={b}
                                      className="flex items-start gap-2.5"
                                    >
                                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-iex-primary" />
                                      <span className="leading-relaxed">
                                        {b}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ) : null}

                          {s.id === "puertasAbiertas" ? (
                            <div className="text-sm text-muted-foreground md:text-base">
                              {d.openDoorBullets?.length ? (
                                <ul className="space-y-2.5">
                                  {d.openDoorBullets.map((b) => (
                                    <li
                                      key={b}
                                      className="flex items-start gap-2.5"
                                    >
                                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-iex-primary" />
                                      <span className="leading-relaxed">
                                        {b}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </section>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}

