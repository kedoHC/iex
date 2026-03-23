import { useSyncExternalStore } from "react";

/** Coincide con breakpoint `lg` de Tailwind (menú completo en escritorio). */
const QUERY = "(max-width: 1023px)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/** true por debajo del breakpoint lg: sin Swiper en hero, Reveal sin intersection, etc. */
export function useMobileLayout() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
