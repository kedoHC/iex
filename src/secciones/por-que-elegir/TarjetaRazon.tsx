import { useTranslation } from 'react-i18next'

import { Reveal } from '@/componentes/Reveal'
import type { TarjetaRazonComponentProps } from '@/interfaces/por-que-elegir'

export function TarjetaRazon({
  id,
  Icono,
  delay = 0,
}: TarjetaRazonComponentProps) {
  const { t } = useTranslation()

  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col gap-3 rounded-2xl border border-border/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-iex-light text-iex-primary transition-transform group-hover:scale-105">
          <Icono className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-sm font-semibold text-iex-navy">
          {t(`why.reasons.${id}`)}
        </h3>
      </article>
    </Reveal>
  )
}
