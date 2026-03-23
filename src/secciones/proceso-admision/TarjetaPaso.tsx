import { Reveal } from '@/componentes/Reveal'
import type { PasoTarjetaProps } from '@/interfaces/proceso-admision'

export function TarjetaPaso({ paso, delay = 0 }: PasoTarjetaProps) {
  return (
    <Reveal delay={delay}>
      <article className="flex h-full flex-col gap-3 rounded-2xl border border-border/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-iex-primary text-sm font-bold text-white">
            {paso.numero}
          </span>
          <h3 className="text-base font-semibold text-iex-navy">{paso.titulo}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{paso.descripcion}</p>
      </article>
    </Reveal>
  )
}
