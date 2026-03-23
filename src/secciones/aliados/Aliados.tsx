import { useTranslation } from 'react-i18next';

import { Reveal } from '@/componentes/Reveal';
import { TituloSeccion } from '@/componentes/TituloSeccion';
import { URL_LOGO_ESCUELA } from '@/constantes/marca';
import { GrillaAliadosCertificaciones } from '@/secciones/aliados/GrillaAliadosCertificaciones';

/**
 * Sección independiente (no confundir con el bloque de contacto):
 * logo + textos institucionales + lista de certificaciones y aliados.
 */
export function Aliados() {
  const { t } = useTranslation();

  return (
    <section
      id="aliados"
      className="scroll-mt-20 border-t border-border/50 bg-gradient-to-b from-iex-light/50 via-white to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TituloSeccion
          idTitulo="titulo-aliados-certificaciones"
          titulo={t('partners.title')}
          subtitulo={t('partners.subtitle')}
        />

        <div
          className="mt-12"
          role="region"
          aria-labelledby="titulo-aliados-certificaciones"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <div className="flex flex-col items-center gap-5 rounded-2xl border border-border/60 bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm lg:items-start lg:text-left">
                <img
                  src={URL_LOGO_ESCUELA}
                  alt={t('partners.logoAlt')}
                  width={200}
                  height={56}
                  className="h-14 w-auto object-contain object-center sm:h-16"
                  decoding="async"
                />
                <div className="space-y-2">
                  <p className="text-lg font-bold text-iex-navy">
                    {t('partners.brandLine')}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t('partners.lead')}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>{t('partners.body')}</p>
                <p className="text-sm text-iex-navy/90">{t('partners.closing')}</p>
              </div>
            </Reveal>
          </div>

          <GrillaAliadosCertificaciones />
        </div>
      </div>
    </section>
  );
}
