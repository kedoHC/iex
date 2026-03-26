import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { TituloSeccion } from "@/components/TituloSeccion";
import { BotonAccion } from "@/components/BotonAccion";
import { Reveal } from "@/components/Reveal";
import {
  eventosPasados,
  imagenCompromisoCultural,
  imagenHeroEventoPrincipal,
  imagenMagnoEvento,
} from "@/secciones/eventos/datosEventos";

const ease = [0.22, 1, 0.36, 1] as const;

export function PaginaEventos() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex-1 bg-background">
      <div className="border-b border-border/50 bg-iex-light/80 py-3 text-center backdrop-blur-sm">
        <h1 className="text-xs font-bold uppercase tracking-[0.25em] text-iex-navy/90 sm:text-sm">
          {t("events.pageTitle")}
        </h1>
      </div>

      <motion.section
        className="relative flex min-h-[64vh] w-full items-end sm:min-h-[74vh]"
        aria-label={t("events.hero.imageAlt")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagenHeroEventoPrincipal})` }}
          aria-hidden
        />
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
              {t("events.hero.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t("events.hero.title")}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              {t("events.hero.description")}
            </p>
            <p className="mt-5 text-sm font-medium text-white/80">
              {t("events.hero.meta")}
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSeccion
          titulo={t("events.pastSection.title")}
          subtitulo={t("events.pastSection.subtitle")}
          className="mb-0"
        />
      </div>

      <section className="w-full" aria-label={t("events.pastSection.title")}>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {eventosPasados.map((ev) => (
            <article
              key={ev.id}
              className="group relative min-h-[260px] overflow-hidden sm:min-h-[300px] lg:min-h-[320px]"
            >
              <div
                className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${ev.imagen})` }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-iex-navy/95 via-iex-navy/40 to-transparent transition-opacity duration-300 group-hover:from-iex-navy/90 group-hover:via-iex-primary/35"
                aria-hidden
              />
              <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-5 sm:p-6 lg:p-7">
                <h3 className="text-lg font-bold text-white drop-shadow-sm sm:text-xl">
                  {t(`events.past.${ev.id}.title`)}
                </h3>
                <p className="mt-2 text-sm text-white/85">
                  {t(`events.past.${ev.id}.caption`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="border-t border-border/60 bg-iex-light/45"
        aria-labelledby="events-commitment-heading"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal y={22}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30">
              <img
                src={imagenCompromisoCultural}
                alt={t("events.commitment.imageAlt")}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-left">
              <h2
                id="events-commitment-heading"
                className="text-3xl font-bold tracking-tight text-iex-navy md:text-4xl"
              >
                {t("events.commitment.title")}
              </h2>
              <div
                className="mt-3 h-1 w-16 rounded-full bg-iex-accent"
                aria-hidden
              />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("events.commitment.lead")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("events.commitment.body")}
              </p>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full border-t border-border/60">
        <motion.div
          className="relative overflow-hidden bg-iex-navy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, ease }}
          aria-label={t("events.grandFinal.ariaLabel")}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imagenMagnoEvento})` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-iex-navy/95 via-iex-navy/70 to-iex-navy/35"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <Reveal y={20}>
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    {t("events.grandFinal.eyebrow")}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {t("events.grandFinal.title")}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
                    {t("events.grandFinal.description")}
                  </p>
                  <p className="mt-4 text-sm font-medium text-white/80">
                    {t("events.grandFinal.meta")}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                    <h3 className="text-base font-bold text-white md:text-lg">
                      {t("events.grandFinal.cardTitle")}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/85 md:text-base">
                      {(t("events.grandFinal.bullets", { returnObjects: true }) as string[]).map(
                        (b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iex-accent" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ),
                      )}
                    </ul>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <BotonAccion href="/#contacto" variant="white">
                        {t("events.grandFinal.ctaPrimary")}
                      </BotonAccion>
                      <BotonAccion href="/admisiones" variant="outline">
                        {t("events.grandFinal.ctaSecondary")}
                      </BotonAccion>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
