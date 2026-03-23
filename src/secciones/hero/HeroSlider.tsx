import { useTranslation } from "react-i18next";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Reveal } from "@/componentes/Reveal";
import { useMobileLayout } from "@/hooks/useMobileLayout";
import { heroSliderSources } from "@/secciones/hero/datosHeroSlider";
import { cn } from "@/lib/utils";
import type { HeroSliderProps } from "@/interfaces/hero";

const marcoClass =
  "relative overflow-hidden rounded-3xl shadow-2xl shadow-iex-primary/15 ring-1 ring-black/5";

const proporcionClass =
  "aspect-[4/5] w-full sm:aspect-[3/4] lg:max-h-[min(640px,85vh)]";

const imgClass =
  "h-full min-h-[280px] w-full object-cover object-center lg:max-h-[min(640px,85vh)] lg:object-top";

function TarjetaSuperpuestaHero() {
  const { t } = useTranslation();
  return (
    <div className="pointer-events-none absolute bottom-4 right-4 z-[2] max-w-[220px] rounded-2xl bg-iex-navy/95 px-4 py-3 text-sm text-white shadow-lg backdrop-blur-sm">
      <p className="font-semibold">{t("hero.overlayTitle")}</p>
      <p className="mt-1 text-xs text-white/85">{t("hero.overlaySubtitle")}</p>
    </div>
  );
}

function HeroImagenEstaticaMovil() {
  const { t } = useTranslation();
  const src = heroSliderSources[0];

  return (
    <div className={cn(marcoClass)}>
      <div className={cn("relative", proporcionClass)}>
        <img
          src={src}
          alt={t("hero.slides.0.alt")}
          className={imgClass}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <TarjetaSuperpuestaHero />
    </div>
  );
}

export function HeroSlider({ className }: HeroSliderProps) {
  const { t } = useTranslation();
  const mobile = useMobileLayout();

  return (
    <Reveal className={cn("relative w-full", className)} y={40}>
      {mobile ? (
        <HeroImagenEstaticaMovil />
      ) : (
        <div className={marcoClass}>
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            loop
            nested
            autoplay={{ delay: 4800, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            simulateTouch={false}
            allowTouchMove={false}
            touchStartPreventDefault={false}
            touchReleaseOnEdges
            className={cn("hero-swiper", proporcionClass)}
          >
            {heroSliderSources.map((src, index) => (
              <SwiperSlide key={src} className="!h-auto">
                <img
                  src={src}
                  alt={t(`hero.slides.${index}.alt`)}
                  className={imgClass}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <TarjetaSuperpuestaHero />
          <style>{`
            .hero-swiper.swiper {
              touch-action: pan-y pinch-zoom;
            }
            .hero-swiper .swiper-pagination-bullet {
              background: rgba(255,255,255,0.55);
              opacity: 1;
            }
            .hero-swiper .swiper-pagination-bullet-active {
              background: #fff;
            }
            .hero-swiper .swiper-pagination {
              bottom: 14px !important;
            }
          `}</style>
        </div>
      )}
    </Reveal>
  );
}
