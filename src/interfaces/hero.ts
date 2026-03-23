export interface HeroStat {
  icono: 'años' | 'alumnos' | 'niveles'
}

export interface HeroProps {
  className?: string
}

export interface HeroSliderProps {
  className?: string
}

export interface HeroStatsProps {
  stats?: HeroStat[]
  className?: string
}
