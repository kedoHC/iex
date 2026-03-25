import { useTranslation } from "react-i18next";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { IdTallerDisponible } from "@/secciones/talleres-vespertinos/datosPaginaTalleres";

type SeccionAgendaTalleresProps = {
  i18nScope: string;
  ids: readonly IdTallerDisponible[];
};

export function SeccionAgendaTalleres({
  i18nScope,
  ids,
}: SeccionAgendaTalleresProps) {
  const { t } = useTranslation();
  const base = `${i18nScope}.schedule` as const;

  return (
    <section className="w-full border-t border-border/40 bg-gradient-to-b from-iex-light/70 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal y={20}>
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

        <Reveal delay={0.08} y={16}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border/60 bg-white/95 shadow-lg ring-1 ring-iex-navy/5">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border/60 bg-iex-light/80 px-4 py-3 text-left text-xs font-medium text-muted-foreground">
                {t(`${base}.caption`)}
              </caption>
              <thead>
                <tr className="border-b border-border/60 bg-iex-navy text-white">
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    {t(`${base}.columns.workshop`)}
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    {t(`${base}.columns.days`)}
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    {t(`${base}.columns.time`)}
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    {t(`${base}.columns.place`)}
                  </th>
                </tr>
              </thead>
              <tbody>
                {ids.map((id, index) => {
                  const workshopTitle = t(
                    `${i18nScope}.available.items.${id}.title`,
                  );
                  return (
                    <tr
                      key={id}
                      className={cn(
                        "border-b border-border/50 transition-colors hover:bg-iex-light/40",
                        index % 2 === 1 && "bg-iex-light/25",
                      )}
                    >
                      <th
                        scope="row"
                        className="px-4 py-3.5 font-semibold text-iex-navy sm:px-5"
                      >
                        {workshopTitle}
                      </th>
                      <td className="px-4 py-3.5 text-muted-foreground sm:px-5">
                        {t(`${base}.rows.${id}.days`)}
                      </td>
                      <td className="px-4 py-3.5 text-iex-navy sm:px-5">
                        {t(`${base}.rows.${id}.time`)}
                      </td>
                      <td className="px-4 py-3.5 text-muted-foreground sm:px-5">
                        {t(`${base}.rows.${id}.place`)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-muted-foreground md:text-sm">
          {t(`${base}.note`)}
        </p>
      </div>
    </section>
  );
}
