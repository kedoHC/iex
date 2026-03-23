import { Award, Building2, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Reveal } from '@/componentes/Reveal'
import { cn } from '@/lib/utils'
import type { HeroStat, HeroStatsProps } from '@/interfaces/hero'

const iconos = {
  años: Award,
  alumnos: Users,
  niveles: Building2,
} as const

const statTranslationKey: Record<HeroStat['icono'], string> = {
  años: 'hero.stats.years',
  alumnos: 'hero.stats.graduates',
  niveles: 'hero.stats.levels',
}

const statsPorDefecto: HeroStat[] = [
  { icono: 'años' },
  { icono: 'alumnos' },
  { icono: 'niveles' },
]

export function HeroStats({
  stats = statsPorDefecto,
  className,
}: HeroStatsProps) {
  const { t } = useTranslation()

  return (
    <Reveal delay={0.2} className={cn('w-full', className)}>
      <ul className="grid gap-4 sm:grid-cols-3">
        {stats.map((item) => {
          const Icon = iconos[item.icono]
          const texto = t(statTranslationKey[item.icono])
          return (
            <li
              key={item.icono}
              className="flex items-center gap-3 rounded-2xl border border-iex-primary/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-iex-light text-iex-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-medium text-iex-navy">{texto}</span>
            </li>
          )
        })}
      </ul>
    </Reveal>
  )
}
