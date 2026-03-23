import { useTranslation } from 'react-i18next'

import { TituloSeccion } from '@/componentes/TituloSeccion'
import { CeldaGaleria } from '@/secciones/galeria/CeldaGaleria'
import { itemsGaleria } from '@/secciones/galeria/datosGaleria'

export function Galeria() {
  const { t } = useTranslation()

  return (
    <section
      id="galeria"
      className="scroll-mt-20 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <TituloSeccion titulo={t('gallery.title')} />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {itemsGaleria.map((item, i) => (
            <CeldaGaleria
              key={item.id}
              item={item}
              delay={Math.min(i * 0.05, 0.35)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
