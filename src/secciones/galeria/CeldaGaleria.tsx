import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Reveal } from '@/componentes/Reveal'
import type { CeldaGaleriaProps } from '@/interfaces/galeria'

export function CeldaGaleria({ item, delay = 0 }: CeldaGaleriaProps) {
  const { t } = useTranslation()
  const caption = t(`gallery.items.${item.id}.alt`)

  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-md"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        <img
          src={item.src}
          alt={caption}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110 group-hover:brightness-95"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-iex-primary/0 transition-colors duration-300 group-hover:bg-iex-primary/25" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-iex-navy/90 to-transparent p-4 pt-12 text-left text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {caption}
        </div>
      </motion.div>
    </Reveal>
  )
}
