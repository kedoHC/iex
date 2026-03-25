import { PaginaHeroInterna } from "@/components/PaginaHeroInterna";
import { SeccionBloquesProgramaDetalle } from "@/secciones/programas/SeccionBloquesProgramaDetalle";
import { SeccionAgendaTalleres } from "@/secciones/talleres-vespertinos/SeccionAgendaTalleres";
import { SeccionTalleresDisponibles } from "@/secciones/talleres-vespertinos/SeccionTalleresDisponibles";
import { SeccionVideoTalleres } from "@/secciones/talleres-vespertinos/SeccionVideoTalleres";
import {
  IDS_TALLERES_DISPONIBLES,
  YOUTUBE_VIDEO_ID_TALLERES,
  bloquesPaginaTalleres,
  imagenHeroPaginaTalleres,
} from "@/secciones/talleres-vespertinos/datosPaginaTalleres";

const SCOPE = "pages.workshops" as const;

export function PaginaTalleresVespertinos() {
  return (
    <main className="min-h-screen flex-1 bg-background">
      <PaginaHeroInterna
        pageTitleKey={`${SCOPE}.pageTitle`}
        i18nScope={SCOPE}
        imagenUrl={imagenHeroPaginaTalleres}
      />
      <SeccionBloquesProgramaDetalle
        bloquesI18nScope={`${SCOPE}.blocks`}
        bloques={bloquesPaginaTalleres}
      />
      <SeccionVideoTalleres
        i18nScope={SCOPE}
        youtubeVideoId={YOUTUBE_VIDEO_ID_TALLERES}
      />
      <SeccionTalleresDisponibles
        i18nScope={SCOPE}
        ids={IDS_TALLERES_DISPONIBLES}
      />
      <SeccionAgendaTalleres
        i18nScope={SCOPE}
        ids={IDS_TALLERES_DISPONIBLES}
      />
    </main>
  );
}
