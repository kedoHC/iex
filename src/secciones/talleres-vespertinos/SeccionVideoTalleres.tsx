import { useTranslation } from "react-i18next";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SeccionVideoTalleresProps = {
  i18nScope: string;
  youtubeVideoId: string;
};

export function SeccionVideoTalleres({
  i18nScope,
  youtubeVideoId,
}: SeccionVideoTalleresProps) {
  const { t } = useTranslation();
  const base = `${i18nScope}.video` as const;
  const src = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0`;

  return (
    <section className="w-full border-t border-border/40 bg-gradient-to-b from-white via-iex-light/50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal y={22}>
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-iex-navy md:text-3xl">
              {t(`${base}.title`)}
            </h2>
            <div
              className="mx-auto mt-3 h-1 w-16 rounded-full bg-iex-accent lg:mx-0"
              aria-hidden
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg lg:max-w-3xl">
              {t(`${base}.description`)}
            </p>
          </div>

          <div
            className={cn(
              "relative mx-auto mt-10 overflow-hidden rounded-2xl shadow-xl ring-1 ring-border/40",
              "aspect-video w-full max-w-4xl lg:mx-0",
            )}
          >
            <iframe
              title={t(`${base}.iframeTitle`)}
              src={src}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground lg:text-left">
            {t(`${base}.caption`)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
