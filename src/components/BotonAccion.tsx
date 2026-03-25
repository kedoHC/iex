import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import type { BotonAccionProps } from "@/interfaces/componentes";

const variantClasses: Record<
  NonNullable<BotonAccionProps["variant"]>,
  string
> = {
  primary:
    "bg-iex-primary text-white shadow-md hover:bg-iex-primary/90 hover:shadow-lg",
  outline:
    "border-2 border-iex-primary bg-transparent text-iex-primary hover:bg-iex-light",
  white: "bg-white text-iex-navy shadow-md hover:bg-white/90 hover:shadow-lg",
  green:
    "bg-iex-success text-white shadow-md hover:bg-iex-success/90 hover:shadow-lg",
};

function esRutaInterna(href: string) {
  return (
    href.startsWith("/") &&
    !href.startsWith("//") &&
    !href.startsWith("/mailto:") &&
    !href.startsWith("/tel:")
  );
}

export function BotonAccion({
  children,
  variant = "primary",
  className,
  href,
  type = "button",
  onClick,
}: BotonAccionProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2",
    variantClasses[variant],
    className,
  );

  if (href) {
    if (esRutaInterna(href)) {
      return (
        <Link to={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
