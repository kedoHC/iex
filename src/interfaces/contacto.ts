import type { LucideIcon } from 'lucide-react'

export interface ContactoItem {
  id: string
  valor: string
  href?: string
  Icono: LucideIcon
  colorClass: string
}

/** Caja de certificación o aliado (sección Aliados). */
export interface ItemAliadoCert {
  id: string
  labelKey: string
  Icono: LucideIcon
}

export interface TarjetaContactoProps {
  item: ContactoItem
  delay?: number
}

export interface MapaUbicacionProps {
  titulo?: string
  mapEmbedUrl?: string
}

