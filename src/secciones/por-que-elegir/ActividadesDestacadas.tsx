import { useTranslation } from 'react-i18next'

import { ImagenHover } from '@/componentes/ImagenHover'
import { Reveal } from '@/componentes/Reveal'
import type { ActividadesDestacadasProps } from '@/interfaces/por-que-elegir'

export function ActividadesDestacadas({ items }: ActividadesDestacadasProps) {
  const { t } = useTranslation()

  return (
    <Reveal className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <ImagenHover
          key={item.id}
          src={item.imagen}
          alt={t(`why.activities.${item.id}.alt`)}
          etiqueta={t(`why.activities.${item.id}.title`)}
          aspectRatio="video"
        />
      ))}
    </Reveal>
  )
}
