import type { ReactNode } from 'react'

export interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export interface TituloSeccionProps {
  titulo: string
  subtitulo?: string
  mostrarSubrayado?: boolean
  className?: string
  /** id del h2 para aria-labelledby del cuerpo de la sección */
  idTitulo?: string
}

export interface ImagenHoverProps {
  src: string
  alt: string
  etiqueta?: string
  aspectRatio?: 'video' | 'square' | 'portrait'
  className?: string
}

export interface BotonAccionProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'white' | 'green'
  className?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export interface SelectorIdiomaProps {
  className?: string
}
