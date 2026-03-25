import { useTranslation } from "react-i18next";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { TarjetaContactoProps } from "@/interfaces/contacto";

export function TarjetaContacto({ item, delay = 0 }: TarjetaContactoProps) {
  const { t } = useTranslation();
  const { Icono } = item;
  const titulo = t(`contact.items.${item.id}.title`);

  const contenido = (
    <>
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
          item.colorClass,
        )}
      >
        <Icono className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {titulo}
        </p>
        <p className="mt-1 text-sm font-medium text-iex-navy">{item.valor}</p>
      </div>
    </>
  );

  return (
    <Reveal delay={delay}>
      {item.href ? (
        <a
          href={item.href}
          className="flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          {contenido}
        </a>
      ) : (
        <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-4 shadow-sm">
          {contenido}
        </div>
      )}
    </Reveal>
  );
}
