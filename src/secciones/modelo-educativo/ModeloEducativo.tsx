import { useTranslation } from 'react-i18next'

import { Reveal } from '@/componentes/Reveal'
import type { ModeloEducativoProps } from '@/interfaces/modelo-educativo'

export function ModeloEducativo({
  titulo,
  descripcion,
}: ModeloEducativoProps) {
  const { t } = useTranslation()
  const title = titulo ?? t('model.title')
  const body = descripcion ?? t('model.description')

  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-iex-light px-6 py-10 text-center shadow-inner sm:px-10 sm:py-12">
            <h2 className="text-2xl font-bold text-iex-navy sm:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground sm:text-lg">
              {body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
