import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { BotonAccion } from "@/componentes/BotonAccion";
import { MarcaInstitucional } from "@/componentes/MarcaInstitucional";
import { SelectorIdioma } from "@/componentes/SelectorIdioma";
import { cn } from "@/lib/utils";
import type { EnlaceNav, NavbarProps } from "@/interfaces/cabecera";

const enlacesPorDefecto: EnlaceNav[] = [
  { href: "/#inicio", labelKey: "nav.home" },
  { href: "/#programas", labelKey: "nav.academicOffer" },
  { href: "/#becas", labelKey: "nav.admissionsAndScholarships" },
  { href: "/#talleres-vespertinos", labelKey: "nav.schoolLife" },
  { href: "/#docentes", labelKey: "nav.community" },
  { href: "/#contacto", labelKey: "nav.contact" },
];

const cerrarMenu = (set: (v: boolean) => void) => () => set(false);

function EnlaceNavEscritorio({
  enlace,
  etiqueta,
  actual,
}: {
  enlace: EnlaceNav;
  etiqueta: string;
  actual: boolean;
}) {
  return (
    <Link
      to={enlace.href}
      aria-current={actual ? "page" : undefined}
      className={cn(
        "whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.8125rem] font-medium text-iex-navy/90 transition-colors duration-200 xl:px-3 xl:text-sm",
        "hover:bg-white/60 hover:text-iex-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2",
        actual && "text-iex-primary",
      )}
    >
      {etiqueta}
    </Link>
  );
}

export function Navbar({ enlaces = enlacesPorDefecto }: NavbarProps) {
  const { t } = useTranslation();
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const scrollYAlAbrir = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuAbierto) {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("width");
      return;
    }

    scrollYAlAbrir.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYAlAbrir.current}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("width");
      window.scrollTo(0, scrollYAlAbrir.current);
    };
  }, [menuAbierto]);

  const portalNav =
    typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {menuAbierto ? (
              <motion.div
                key="iex-nav-movil"
                className="fixed inset-0 z-[200] flex lg:hidden"
                role="dialog"
                aria-modal="true"
                aria-label={t("nav.menuTitle")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  className="absolute inset-0 bg-black/45"
                  aria-label={t("nav.closeMenu")}
                  onClick={() => setMenuAbierto(false)}
                />
                <motion.nav
                  id="menu-movil"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    type: "tween",
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative ml-auto flex h-dvh max-h-dvh w-[min(100%,20rem)] flex-col overflow-y-auto overscroll-contain bg-white shadow-2xl"
                >
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <span className="text-sm font-semibold text-iex-navy">
                      {t("nav.menuTitle")}
                    </span>
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-iex-navy"
                      aria-label={t("nav.closeMenu")}
                      onClick={() => setMenuAbierto(false)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 px-3 py-4">
                    {enlaces.map((enlace) => {
                      const activo =
                        enlace.href === "/eventos"
                          ? pathname === "/eventos"
                          : pathname === "/" &&
                            (hash === enlace.href.replace("/", "") ||
                              (enlace.href === "/#inicio" && !hash));
                      return (
                        <Link
                          key={enlace.href}
                          to={enlace.href}
                          aria-current={activo ? "page" : undefined}
                          className={cn(
                            "rounded-lg px-3 py-3 text-base font-medium text-iex-navy transition-colors",
                            "active:bg-iex-light",
                            activo && "bg-iex-light text-iex-primary",
                          )}
                          onClick={cerrarMenu(setMenuAbierto)}
                        >
                          {t(enlace.labelKey)}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
                    <BotonAccion
                      variant="outline"
                      href="/#contacto"
                      onClick={cerrarMenu(setMenuAbierto)}
                    >
                      {t("nav.contactCta")}
                    </BotonAccion>
                    <BotonAccion
                      variant="primary"
                      href="/#contacto"
                      onClick={cerrarMenu(setMenuAbierto)}
                    >
                      {t("nav.login")}
                    </BotonAccion>
                  </div>
                </motion.nav>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/60 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-iex-light/55 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:gap-5 lg:px-8">
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2"
        >
          <MarcaInstitucional variant="navbar" />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label={t("nav.ariaMain")}
        >
          {enlaces.map((enlace) => (
            <EnlaceNavEscritorio
              key={enlace.href}
              enlace={enlace}
              etiqueta={t(enlace.labelKey)}
              actual={
                enlace.href === "/eventos"
                  ? pathname === "/eventos"
                  : pathname === "/" &&
                    (hash === enlace.href.replace("/", "") ||
                      (enlace.href === "/#inicio" && !hash))
              }
            />
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <SelectorIdioma />
          <div className="hidden items-center gap-2 lg:flex">
            <BotonAccion variant="outline" href="/#contacto" className="!px-4 !py-2">
              {t("nav.contactCta")}
            </BotonAccion>
            <BotonAccion variant="primary" href="/#contacto" className="!px-4 !py-2">
              {t("nav.login")}
            </BotonAccion>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/80 text-iex-navy transition-colors duration-200 hover:bg-iex-light hover:text-iex-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2 lg:hidden"
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            aria-label={menuAbierto ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setMenuAbierto((v) => !v)}
          >
            {menuAbierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {portalNav}
    </header>
  );
}
