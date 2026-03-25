import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

import type { GaleriaItem } from "@/interfaces/galeria";
import { cn } from "@/lib/utils";

function srcAltaResolucion(src: string) {
  try {
    const u = new URL(src);
    if (u.searchParams.has("w")) {
      u.searchParams.set("w", "1920");
      u.searchParams.set("q", "85");
    }
    return u.toString();
  } catch {
    return src;
  }
}

type VistaAmpliadaGaleriaProps = {
  items: readonly GaleriaItem[];
  indiceAbierto: number | null;
  onCerrar: () => void;
  onCambiarIndice: (indice: number) => void;
};

export function VistaAmpliadaGaleria({
  items,
  indiceAbierto,
  onCerrar,
  onCambiarIndice,
}: VistaAmpliadaGaleriaProps) {
  const { t } = useTranslation();
  const botonCerrarRef = useRef<HTMLButtonElement>(null);
  const abierto = indiceAbierto !== null && items[indiceAbierto] !== undefined;
  const item = abierto ? items[indiceAbierto]! : null;
  const caption = item ? t(`gallery.items.${item.id}.alt`) : "";
  const total = items.length;
  const puedeAnterior = abierto && indiceAbierto! > 0;
  const puedeSiguiente = abierto && indiceAbierto! < total - 1;

  const irAnterior = useCallback(() => {
    if (indiceAbierto === null || indiceAbierto <= 0) return;
    onCambiarIndice(indiceAbierto - 1);
  }, [indiceAbierto, onCambiarIndice]);

  const irSiguiente = useCallback(() => {
    if (indiceAbierto === null || indiceAbierto >= total - 1) return;
    onCambiarIndice(indiceAbierto + 1);
  }, [indiceAbierto, onCambiarIndice, total]);

  useEffect(() => {
    if (!abierto) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [abierto]);

  useEffect(() => {
    if (!abierto) return;
    const id = requestAnimationFrame(() => botonCerrarRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [abierto, indiceAbierto]);

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCerrar();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        irAnterior();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        irSiguiente();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto, onCerrar, irAnterior, irSiguiente]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {abierto && item ? (
        <motion.div
          key="galeria-vista-ampliada"
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          className="fixed inset-0 z-[280] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/90 backdrop-blur-[2px]"
            aria-label={t("gallery.lightbox.closeBackdrop")}
            onClick={onCerrar}
          />

          <div className="relative z-10 flex max-h-[100dvh] w-full max-w-[min(100%,96rem)] flex-col items-center gap-3">
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              {puedeAnterior ? (
                <button
                  type="button"
                  className={cn(
                    "absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white",
                    "ring-1 ring-white/25 transition-colors hover:bg-white/20 focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50",
                    "sm:left-1 sm:p-3",
                  )}
                  aria-label={t("gallery.lightbox.prev")}
                  onClick={(e) => {
                    e.stopPropagation();
                    irAnterior();
                  }}
                >
                  <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
                </button>
              ) : null}

              {puedeSiguiente ? (
                <button
                  type="button"
                  className={cn(
                    "absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white",
                    "ring-1 ring-white/25 transition-colors hover:bg-white/20 focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50",
                    "sm:right-1 sm:p-3",
                  )}
                  aria-label={t("gallery.lightbox.next")}
                  onClick={(e) => {
                    e.stopPropagation();
                    irSiguiente();
                  }}
                >
                  <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
                </button>
              ) : null}

              <motion.div
                key={item.id}
                className="flex max-h-[min(85dvh,calc(100dvh-7rem))] w-full items-center justify-center px-10 sm:px-14"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={srcAltaResolucion(item.src)}
                  alt={caption}
                  className="max-h-[min(85dvh,calc(100dvh-7rem))] max-w-full object-contain shadow-2xl"
                  decoding="async"
                />
              </motion.div>
            </div>

            <p className="max-w-3xl px-2 text-center text-sm text-white/90 sm:text-base">
              {caption}
            </p>

            <button
              ref={botonCerrarRef}
              type="button"
              className={cn(
                "absolute right-2 top-2 z-20 rounded-full bg-white/10 p-2 text-white sm:right-4 sm:top-4 sm:p-2.5",
                "ring-1 ring-white/25 transition-colors hover:bg-white/20 focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50",
              )}
              aria-label={t("gallery.lightbox.close")}
              onClick={onCerrar}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
