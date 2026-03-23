/**
 * Fotos de estudiantes / educación. URLs con parámetros oficiales de Unsplash (ixlib)
 * para evitar 404 por enlaces antiguos o sin firma.
 */
const u = (id: string) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80`

export const heroSliderSources: readonly string[] = [
  u('photo-1509062522246-3755977927d7'),
  u('photo-1529390079861-591de354faf5'),
  u('photo-1523240795612-9a054b0db644'),
  u('photo-1517486808906-6ca8b3f04846'),
  u('photo-1503676260728-1c00da094a0b'),
] as const
