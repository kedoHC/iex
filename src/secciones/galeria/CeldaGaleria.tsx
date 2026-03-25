import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Reveal } from '@/components/Reveal'
import type { CeldaGaleriaProps } from '@/interfaces/galeria'

export function CeldaGaleria({ item, delay = 0, onAbrir }: CeldaGaleriaProps) {
  const { t } = useTranslation()
  const caption = t(`gallery.items.${item.id}.alt`)

  return (
    <Reveal delay={delay} className="h-full">
      <motion.button
        type="button"
        onClick={onAbrir}
        aria-label={t('gallery.openImage', { caption })}
        className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl bg-muted text-left shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        <img
          src={item.src}
          alt=""
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110 group-hover:brightness-95"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-iex-primary/0 transition-colors duration-300 group-hover:bg-iex-primary/25" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-iex-navy/90 to-transparent p-4 pt-12 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {caption}
        </div>
      </motion.button>
    </Reveal>
  )
}
