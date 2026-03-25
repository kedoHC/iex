import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Reveal } from "@/components/Reveal";
import {
  perfilesDocentes,
  type PerfilDocenteDato,
} from "@/secciones/docentes/datosPaginaDocentes";
import { cn } from "@/lib/utils";

const SCOPE = "pages.teachers" as const;

const fondosPerfil = [
  "bg-gradient-to-b from-iex-light/95 via-white to-white",
  "bg-gradient-to-b from-white via-iex-light/70 to-iex-sky/25",
  "bg-gradient-to-br from-iex-light/85 via-white to-iex-light/40",
] as const;

function PerfilDocenteSeccion({
  perfil,
  index,
}: {
  perfil: PerfilDocenteDato;
  index: number;
}) {
  const { t } = useTranslation();
  const prefix = `${SCOPE}.profiles.${perfil.id}` as const;
  const imagenIzquierda = index % 2 === 0;
  const fondo = fondosPerfil[index % fondosPerfil.length];

  const rawHighlights = t(`${prefix}.highlights`, {
    returnObjects: true,
  });
  const highlights = Array.isArray(rawHighlights) ? rawHighlights : [];

  return (
    <section className={cn("w-full border-t border-border/40", fondo)}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal delay={Math.min(index * 0.1 + 0.06, 0.35)} y={24}>
          <div
            className={cn(
              "grid items-center gap-10 lg:grid-cols-12 lg:gap-12",
            )}
          >
            <div
              className={cn(
                "flex justify-center lg:col-span-5",
                !imagenIzquierda && "lg:order-2",
              )}
            >
              <motion.div
                className="relative w-full max-w-[20rem] overflow-hidden rounded-2xl shadow-xl ring-2 ring-white/80 ring-offset-2 ring-offset-transparent sm:max-w-[22rem] lg:max-w-none"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
              >
                <motion.img
                  src={perfil.imagen}
                  alt={t(`${prefix}.imageAlt`)}
                  className="aspect-[4/5] w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.06 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-iex-navy/35 to-transparent"
                  aria-hidden
                />
              </motion.div>
            </div>

            <div
              className={cn(
                "text-left lg:col-span-7",
                !imagenIzquierda && "lg:order-1",
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-iex-primary">
                {t(`${prefix}.role`)}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-iex-navy md:text-3xl lg:text-4xl">
                {t(`${prefix}.name`)}
              </h2>
              <div
                className="mt-4 h-1 w-14 rounded-full bg-iex-accent"
                aria-hidden
              />
              <p className="mt-6 text-base font-medium text-iex-navy/90 md:text-lg">
                {t(`${prefix}.activitiesLead`)}
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                {t(`${prefix}.activitiesBody`)}
              </p>
              {Array.isArray(highlights) && highlights.length > 0 ? (
                <ul className="mt-6 space-y-2.5 border-l-2 border-iex-primary/35 pl-4">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-iex-navy/85 md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function DocentesContenidoAnimado() {
  const { t } = useTranslation();

  return (
    <>
      <section className="w-full border-t border-border/40 bg-gradient-to-br from-white via-iex-light/55 to-iex-sky/20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Reveal y={20}>
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-iex-navy md:text-3xl">
                {t(`${SCOPE}.intro.title`)}
              </h2>
              <div
                className="mx-auto mt-3 h-1 w-16 rounded-full bg-iex-accent lg:mx-0"
                aria-hidden
              />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {t(`${SCOPE}.intro.lead`)}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {t(`${SCOPE}.intro.body`)}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {perfilesDocentes.map((perfil, index) => (
        <PerfilDocenteSeccion key={perfil.id} perfil={perfil} index={index} />
      ))}
    </>
  );
}
