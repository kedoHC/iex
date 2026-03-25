import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'
import type { TarjetaProgramaProps } from '@/interfaces/programas'

export function TarjetaPrograma({
  programa,
  delay = 0,
}: TarjetaProgramaProps) {
  const { t } = useTranslation()
  const base = `programs.cards.${programa.id}`
  const features = t(`${base}.features`, {
    returnObjects: true,
  }) as string[]

  return (
    <Reveal delay={delay}>
      <Link
        to={`/programas/${programa.id}`}
        className={cn(
          'group/card block h-full no-underline outline-none',
          'rounded-3xl focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2',
        )}
        aria-label={t('programs.cardLinkAria', {
          title: t(`${base}.title`),
        })}
      >
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-white shadow-sm transition-shadow duration-300 group-hover/card:shadow-xl group-hover/card:border-iex-primary/25">
          <motion.div
            className="relative aspect-[16/10] overflow-hidden bg-muted"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          >
            <img
              src={programa.imagen}
              alt=""
              className="h-full w-full object-cover transition duration-500 ease-out group-hover/card:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-70" />
            <span className="absolute left-4 top-4 rounded-full bg-iex-primary px-3 py-1 text-xs font-semibold text-white shadow">
              {t(`${base}.level`)}
            </span>
          </motion.div>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div>
              <h3 className="text-xl font-bold text-iex-navy group-hover/card:text-iex-primary transition-colors">
                {t(`${base}.title`)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`${base}.description`)}
              </p>
            </div>
            <ul className="mt-auto space-y-2">
              {features.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-iex-navy">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-iex-success"
                    aria-hidden
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Link>
    </Reveal>
  )
}
