/**
 * Enlaces Unsplash con parámetros actuales (ixlib) para evitar 404 por URLs antiguas.
 * Los photo-id deben coincidir con fotos públicas vigentes en unsplash.com.
 */
export function urlUnsplashFoto(id: string, w = 900) {
  return `https://images.unsplash.com/${id}?ixlib=rb-4.1.0&auto=format&fit=crop&w=${w}&q=80`
}
