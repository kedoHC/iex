import { useTranslation } from 'react-i18next'

import { TituloSeccion } from '@/components/TituloSeccion'
import { TarjetaPrograma } from '@/secciones/programas/TarjetaPrograma'
import { programas } from '@/secciones/programas/datosProgramas'

export function Programas() {
  const { t } = useTranslation()

  return (
    <section
      id="programas"
      className="scroll-mt-20 bg-gradient-to-b from-iex-light/80 to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <TituloSeccion titulo={t('programs.title')} />
        <div className="grid gap-8 md:grid-cols-2">
          {programas.map((p, i) => (
            <TarjetaPrograma
              key={p.id}
              programa={p}
              delay={Math.min(i * 0.08, 0.35)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
