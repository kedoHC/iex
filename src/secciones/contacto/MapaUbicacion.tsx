import { useTranslation } from 'react-i18next'

import { Reveal } from '@/componentes/Reveal'
import { urlMapaPorDefecto } from '@/secciones/contacto/datosContacto'
import type { MapaUbicacionProps } from '@/interfaces/contacto'

export function MapaUbicacion({
  titulo,
  mapEmbedUrl = urlMapaPorDefecto,
}: MapaUbicacionProps) {
  const { t } = useTranslation()
  const label = titulo ?? t('contact.mapTitle')

  return (
    <Reveal>
      <div className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-border/70 bg-white shadow-md sm:min-h-[360px]">
        <p className="border-b border-border/60 px-5 py-3 text-sm font-semibold text-iex-navy">
          {label}
        </p>
        <iframe
          title={label}
          src={mapEmbedUrl}
          className="min-h-[240px] w-full flex-1 border-0 sm:min-h-[320px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </Reveal>
  )
}
