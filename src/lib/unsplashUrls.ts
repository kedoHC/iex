/** Convención ixlib alineada con hero / eventos / galería. */
export function urlUnsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/${id}?ixlib=rb-4.1.0&auto=format&fit=crop&w=${w}&q=80`;
}
