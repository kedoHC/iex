import { useTranslation } from "react-i18next";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { ItemAliadoCert } from "@/interfaces/contacto";

import {
  itemsAliados,
  itemsCertificaciones,
} from "@/secciones/aliados/datosAliadosCert";

const todosLosItems: ItemAliadoCert[] = [
  ...itemsCertificaciones,
  ...itemsAliados,
];

function CajaItem({ item, delay }: { item: ItemAliadoCert; delay?: number }) {
  const { t } = useTranslation();
  const Icono = item.Icono;

  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={cn(
          "group flex h-full min-h-[7.5rem] flex-col items-center gap-3 rounded-2xl border border-border/70 bg-white/90 px-3 py-5 text-center shadow-sm sm:px-4 sm:py-6",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:border-iex-primary/35 hover:shadow-md",
        )}
      >
        <span
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-iex-light text-iex-primary",
            "transition-transform duration-300 ease-out group-hover:scale-110 group-hover:bg-iex-primary/10",
          )}
          aria-hidden
        >
          <Icono className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <span className="flex flex-1 items-center justify-center text-sm font-semibold leading-snug text-iex-navy">
          {t(item.labelKey)}
        </span>
      </div>
    </Reveal>
  );
}

export function GrillaAliadosCertificaciones() {
  return (
    <div className="mt-10 lg:mt-12">
      <div className="rounded-2xl border border-border/50 bg-white/70 p-5 shadow-sm backdrop-blur-sm sm:p-7">
        <div
          className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          role="list"
        >
          {todosLosItems.map((item, i) => (
            <div key={item.id} className="h-full min-w-0" role="listitem">
              <CajaItem item={item} delay={i * 0.035} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
