export const IDS_PROGRAMAS = [
  "preescolar",
  "primaria",
  "secundaria",
  "bachillerato",
  "epic",
] as const;

export type IdPrograma = (typeof IDS_PROGRAMAS)[number];

export function esIdPrograma(id: string): id is IdPrograma {
  return (IDS_PROGRAMAS as readonly string[]).includes(id);
}
