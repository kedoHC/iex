export interface PasoAdmision {
  numero: number
  titulo: string
  descripcion: string
}

export interface PasoTarjetaProps {
  paso: PasoAdmision
  delay?: number
}
