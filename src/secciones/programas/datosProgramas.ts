import { urlUnsplashFoto } from '@/lib/unsplash'
import type { ProgramaNivel } from '@/interfaces/programas'

const u = (id: string) => urlUnsplashFoto(id, 1000)

/** Cuatro escenas distintas del pool verificado en el sitio (sin IDs rotos). */
export const programas: ProgramaNivel[] = [
  {
    id: 'preescolar',
    imagen: u('photo-1503454537195-1dcabb73ffb9'),
  },
  {
    id: 'primaria',
    imagen: u('photo-1509062522246-3755977927d7'),
  },
  {
    id: 'secundaria',
    imagen: u('photo-1522202176988-66273c2fd55f'),
  },
  {
    id: 'bachillerato',
    imagen: u('photo-1523240795612-9a054b0db644'),
  },
]
