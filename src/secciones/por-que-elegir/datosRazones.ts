import {
  BookOpen,
  Building2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Mic2,
  ShieldCheck,
  Trophy,
  Users,
} from 'lucide-react'

import { urlUnsplashFoto } from '@/lib/unsplash'
import type { ActividadDestacada, TarjetaRazon } from '@/interfaces/por-que-elegir'

const u = (id: string) => urlUnsplashFoto(id, 1000)

export const razones: TarjetaRazon[] = [
  { id: 'qualifiedTeachers', Icono: GraduationCap },
  { id: 'modernFacilities', Icono: Building2 },
  { id: 'values', Icono: HeartHandshake },
  { id: 'safeEnvironment', Icono: ShieldCheck },
  { id: 'edTech', Icono: Lightbulb },
  { id: 'globalSkills', Icono: Globe2 },
  { id: 'sportsArts', Icono: Trophy },
  { id: 'familySupport', Icono: Users },
  { id: 'steam', Icono: BookOpen },
  { id: 'leadership', Icono: Mic2 },
]

/** Arte, aula y colaboración — mismas fotos probadas que hero/galería. */
export const actividades: ActividadDestacada[] = [
  {
    id: 'arts',
    imagen: u('photo-1513475382585-d06e58bcb0e0'),
  },
  {
    id: 'classroom',
    imagen: u('photo-1509062522246-3755977927d7'),
  },
  {
    id: 'science',
    imagen: u('photo-1529390079861-591de354faf5'),
  },
]
