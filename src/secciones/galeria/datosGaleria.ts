import { urlUnsplashFoto } from '@/lib/unsplash'
import type { GaleriaItem } from '@/interfaces/galeria'

const g = (id: string) => urlUnsplashFoto(id, 800)

/**
 * Ocho fotos distintas del pool verificado (sustituye photo-158058…, photo-157126…, etc.).
 */
export const itemsGaleria: GaleriaItem[] = [
  { id: 'classroom', src: g('photo-1509062522246-3755977927d7') },
  { id: 'elementary', src: g('photo-1503454537195-1dcabb73ffb9') },
  { id: 'teamwork', src: g('photo-1529390079861-591de354faf5') },
  { id: 'campus', src: g('photo-1523240795612-9a054b0db644') },
  { id: 'reading', src: g('photo-1503676260728-1c00da094a0b') },
  { id: 'graduation', src: g('photo-1517486808906-6ca8b3f04846') },
  { id: 'hallway', src: g('photo-1522202176988-66273c2fd55f') },
  { id: 'sports', src: g('photo-1546519638-68e109498ffc') },
]
