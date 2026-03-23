import type { LucideIcon } from 'lucide-react'

export interface TarjetaRazon {
  id: string
  Icono: LucideIcon
}

export interface ActividadDestacada {
  id: string
  imagen: string
}

export interface TarjetaRazonComponentProps extends TarjetaRazon {
  delay?: number
}

export interface ActividadesDestacadasProps {
  items: ActividadDestacada[]
}
