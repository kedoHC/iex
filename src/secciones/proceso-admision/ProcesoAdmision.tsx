import { useTranslation } from 'react-i18next'

import { TituloSeccion } from '@/componentes/TituloSeccion'
import { TarjetaPaso } from '@/secciones/proceso-admision/TarjetaPaso'

export function ProcesoAdmision() {
  const { t } = useTranslation()
  const steps = t('admission.steps', { returnObjects: true }) as {
    titulo: string
    descripcion: string
  }[]

  return (
    <section
      id="admisiones"
      className="scroll-mt-20 bg-gradient-to-b from-white to-iex-light/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <TituloSeccion titulo={t('admission.title')} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((paso, i) => (
            <TarjetaPaso
              key={paso.titulo}
              paso={{
                numero: i + 1,
                titulo: paso.titulo,
                descripcion: paso.descripcion,
              }}
              delay={Math.min(i * 0.06, 0.36)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
