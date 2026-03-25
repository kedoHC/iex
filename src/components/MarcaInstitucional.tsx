import { useTranslation } from "react-i18next";

import { URL_LOGO_ESCUELA } from "@/constantes/marca";
import { cn } from "@/lib/utils";

type MarcaInstitucionalProps = {
  /** Pie: logo sobre fondo oscuro */
  variant?: "navbar" | "footer";
  className?: string;
};

export function MarcaInstitucional({
  variant = "navbar",
  className,
}: MarcaInstitucionalProps) {
  const { t } = useTranslation();
  const isFooter = variant === "footer";

  return (
    <div className={cn("flex min-w-0 items-center gap-2", className)}>
      <img
        src={URL_LOGO_ESCUELA}
        alt=""
        width={40}
        height={40}
        className={cn(
          "h-10 w-10 shrink-0 object-contain",
          isFooter && "rounded-xl bg-white p-1",
        )}
        decoding="async"
      />
      <span
        className={cn(
          "min-w-0 flex-col leading-tight",
          variant === "navbar" && "hidden sm:flex",
          variant === "footer" && "flex",
        )}
      >
        <span
          className={cn(
            "truncate font-bold text-iex-navy",
            isFooter ? "text-sm text-white sm:text-base" : "text-sm sm:text-sm",
          )}
        >
          {t("brand.name")}
        </span>
        <span
          className={cn(
            "truncate text-xs",
            isFooter ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {t("brand.tagline")}
        </span>
      </span>
    </div>
  );
}
