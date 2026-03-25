import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

const SCROLL_UMBRAL_PX = 360;

export function BotonVolverArriba() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_UMBRAL_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const irArriba = useCallback(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, [reduceMotion]);

  const duracion = reduceMotion ? 0 : 0.28;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="scroll-top"
          type="button"
          onClick={irArriba}
          aria-label={t("nav.scrollToTop")}
          initial={{ opacity: 0, y: 14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.96 }}
          transition={{ duration: duracion, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-xl",
            "bg-iex-primary text-white shadow-lg shadow-iex-navy/15",
            "transition-shadow duration-200 hover:bg-iex-primary/90 hover:shadow-xl",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2",
            "sm:bottom-6 sm:right-6",
          )}
        >
          <ChevronUp className="h-6 w-6 shrink-0" strokeWidth={2.25} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
