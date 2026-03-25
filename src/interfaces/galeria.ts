export interface GaleriaItem {
  id: string
  src: string
}

export interface CeldaGaleriaProps {
  item: GaleriaItem
  delay?: number
  onAbrir: () => void
}
