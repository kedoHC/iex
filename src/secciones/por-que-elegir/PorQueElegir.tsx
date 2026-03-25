import { useTranslation } from 'react-i18next'

import { Reveal } from '@/components/Reveal'
import { TituloSeccion } from '@/components/TituloSeccion'
import { ActividadesDestacadas } from '@/secciones/por-que-elegir/ActividadesDestacadas'
import { TarjetaRazon } from '@/secciones/por-que-elegir/TarjetaRazon'
import { actividades, razones } from '@/secciones/por-que-elegir/datosRazones'

export function PorQueElegir() {
  const { t } = useTranslation()

  return (
    <section
      id="por-que-iex"
      className="scroll-mt-20 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <TituloSeccion titulo={t('why.title')} />

        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
            <h3 className="text-center text-xl font-bold text-iex-navy">
              {t('why.excellenceTitle')}
            </h3>
            <p className="mt-3 text-center text-muted-foreground">
              {t('why.excellenceBody')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {razones.map((r, index) => (
            <TarjetaRazon
              key={r.id}
              id={r.id}
              Icono={r.Icono}
              delay={Math.min(index * 0.04, 0.4)}
            />
          ))}
        </div>

        <ActividadesDestacadas items={actividades} />
      </div>
    </section>
  )
}
