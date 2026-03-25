import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { ImagenHoverProps } from "@/interfaces/componentes";

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export function ImagenHover({
  src,
  alt,
  etiqueta,
  aspectRatio = "video",
  className,
}: ImagenHoverProps) {
  return (
    <motion.figure
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-muted shadow-md",
        aspectClasses[aspectRatio],
        className,
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-110 group-hover:brightness-95"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-iex-navy/70 via-iex-navy/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      {etiqueta ? (
        <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-sm font-semibold text-white drop-shadow-md">
          {etiqueta}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
