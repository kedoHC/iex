import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'
import type { SelectorIdiomaProps } from '@/interfaces/componentes'

export function SelectorIdioma({ className }: SelectorIdiomaProps) {
  const { i18n, t } = useTranslation()
  const active = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es'

  return (
    <div
      role="group"
      aria-label={t('nav.language')}
      className={cn(
        'flex shrink-0 overflow-hidden rounded-xl border border-border/80 bg-white/70 p-0.5 text-xs font-semibold shadow-sm backdrop-blur-sm',
        className,
      )}
    >
      <button
        type="button"
        className={cn(
          'rounded-[10px] px-2.5 py-1.5 transition-colors sm:px-3',
          active === 'es'
            ? 'bg-iex-primary text-white'
            : 'text-iex-navy hover:bg-iex-light/80',
        )}
        aria-pressed={active === 'es'}
        onClick={() => {
          void i18n.changeLanguage('es')
        }}
      >
        ES
      </button>
      <button
        type="button"
        className={cn(
          'rounded-[10px] px-2.5 py-1.5 transition-colors sm:px-3',
          active === 'en'
            ? 'bg-iex-primary text-white'
            : 'text-iex-navy hover:bg-iex-light/80',
        )}
        aria-pressed={active === 'en'}
        onClick={() => {
          void i18n.changeLanguage('en')
        }}
      >
        EN
      </button>
    </div>
  )
}
