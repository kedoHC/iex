import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { BotonAccion } from "@/components/BotonAccion";
import { MarcaInstitucional } from "@/components/MarcaInstitucional";
import { SelectorIdioma } from "@/components/SelectorIdioma";
import { cn } from "@/lib/utils";
import {
  esGrupoNav,
  type EnlaceNav,
  type EnlaceNavGrupo,
  type EnlaceNavHoja,
  type NavbarProps,
} from "@/interfaces/cabecera";

const RUTAS_MENU = new Set([
  "/talleres-vespertinos",
  "/admisiones",
  "/becas",
  "/programas/epic",
  "/conocenos/instalaciones",
  "/conocenos/servicios",
  "/conocenos/alumnos",
  "/conocenos/familia-iex",
  "/docentes",
  "/eventos",
]);

function enlaceEsActual(href: string, pathname: string, hash: string): boolean {
  if (RUTAS_MENU.has(href)) return pathname === href;
  if (href.startsWith("/#")) {
    if (href === "/#inicio") {
      return pathname === "/" && (!hash || hash === "#inicio");
    }
    return pathname === "/" && hash === `#${href.slice(2)}`;
  }
  return false;
}

function grupoTieneActivo(
  grupo: EnlaceNavGrupo,
  pathname: string,
  hash: string,
): boolean {
  return grupo.children.some((c) => enlaceEsActual(c.href, pathname, hash));
}

const enlacesPorDefecto: EnlaceNav[] = [
  { href: "/#inicio", labelKey: "nav.home" },
  {
    id: "academica",
    labelKey: "nav.menuGroupAcademic",
    children: [
      { href: "/#programas", labelKey: "nav.academicOffer" },
      { href: "/programas/epic", labelKey: "nav.epic" },
      { href: "/talleres-vespertinos", labelKey: "nav.workshops" },
    ],
  },
  {
    id: "conocenos",
    labelKey: "nav.menuGroupAbout",
    children: [
      { href: "/conocenos/instalaciones", labelKey: "nav.facilities" },
      { href: "/conocenos/servicios", labelKey: "nav.services" },
      { href: "/conocenos/alumnos", labelKey: "nav.students" },
      { href: "/conocenos/familia-iex", labelKey: "nav.familyIex" },
      { href: "/docentes", labelKey: "nav.teachers" },
      { href: "/eventos", labelKey: "nav.events" },
    ],
  },
  {
    id: "admisiones-becas",
    labelKey: "nav.menuGroupAdmissions",
    children: [
      { href: "/admisiones", labelKey: "nav.admissionsPage" },
      { href: "/becas", labelKey: "nav.scholarshipsPage" },
    ],
  },
  { href: "/#contacto", labelKey: "nav.contact" },
];

const cerrarMenu = (set: (v: boolean) => void) => () => set(false);

function EnlaceNavEscritorio({
  hoja,
  etiqueta,
  actual,
}: {
  hoja: EnlaceNavHoja;
  etiqueta: string;
  actual: boolean;
}) {
  return (
    <Link
      to={hoja.href}
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
  const [grupoDesktopAbierto, setGrupoDesktopAbierto] = useState<string | null>(
    null,
  );
  const [grupoMovilExpandido, setGrupoMovilExpandido] = useState<string | null>(
    null,
  );
  const scrollYAlAbrir = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setGrupoDesktopAbierto(null), 0);
    return () => clearTimeout(id);
  }, [pathname, hash]);

  useEffect(() => {
    if (!grupoDesktopAbierto) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node;
      const drop = document.querySelector(
        `[data-nav-dropdown="${grupoDesktopAbierto}"]`,
      );
      if (drop && !drop.contains(target)) setGrupoDesktopAbierto(null);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [grupoDesktopAbierto]);

  useEffect(() => {
    if (!grupoDesktopAbierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGrupoDesktopAbierto(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [grupoDesktopAbierto]);

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
                    {enlaces.map((item) => {
                      if (!esGrupoNav(item)) {
                        const activo = enlaceEsActual(
                          item.href,
                          pathname,
                          hash,
                        );
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            aria-current={activo ? "page" : undefined}
                            className={cn(
                              "rounded-lg px-3 py-3 text-base font-medium text-iex-navy transition-colors",
                              "active:bg-iex-light",
                              activo && "bg-iex-light text-iex-primary",
                            )}
                            onClick={cerrarMenu(setMenuAbierto)}
                          >
                            {t(item.labelKey)}
                          </Link>
                        );
                      }

                      const expandido = grupoMovilExpandido === item.id;
                      const grupoActivo = grupoTieneActivo(item, pathname, hash);

                      return (
                        <div key={item.id} className="flex flex-col rounded-lg">
                          <button
                            type="button"
                            className={cn(
                              "flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium transition-colors",
                              grupoActivo || expandido
                                ? "bg-iex-light/90 text-iex-primary"
                                : "text-iex-navy active:bg-iex-light",
                            )}
                            aria-expanded={expandido}
                            aria-controls={`movil-submenu-${item.id}`}
                            id={`movil-trigger-${item.id}`}
                            onClick={() =>
                              setGrupoMovilExpandido((s) =>
                                s === item.id ? null : item.id,
                              )
                            }
                          >
                            {t(item.labelKey)}
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 shrink-0 text-iex-navy/70 transition-transform duration-200",
                                expandido && "rotate-180 text-iex-primary",
                              )}
                              aria-hidden
                            />
                          </button>
                          <div
                            id={`movil-submenu-${item.id}`}
                            role="region"
                            aria-labelledby={`movil-trigger-${item.id}`}
                            aria-hidden={!expandido}
                            className={cn(
                              "grid transition-[grid-template-rows] duration-200 ease-out",
                              expandido ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                            )}
                          >
                            <div className="min-h-0 overflow-hidden">
                              <ul className="mt-1 space-y-0.5 border-l-2 border-iex-primary/40 py-1 pl-3 ml-3 mb-2">
                                {item.children.map((child) => {
                                  const activo = enlaceEsActual(
                                    child.href,
                                    pathname,
                                    hash,
                                  );
                                  return (
                                    <li key={child.href}>
                                      <Link
                                        to={child.href}
                                        aria-current={activo ? "page" : undefined}
                                        className={cn(
                                          "block rounded-lg px-3 py-2.5 text-[0.9375rem] font-medium transition-colors",
                                          activo
                                            ? "bg-iex-light text-iex-primary"
                                            : "text-iex-navy/90 hover:bg-iex-light/70",
                                        )}
                                        onClick={cerrarMenu(setMenuAbierto)}
                                      >
                                        {t(child.labelKey)}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
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
          {enlaces.map((item) => {
            if (!esGrupoNav(item)) {
              return (
                <EnlaceNavEscritorio
                  key={item.href}
                  hoja={item}
                  etiqueta={t(item.labelKey)}
                  actual={enlaceEsActual(item.href, pathname, hash)}
                />
              );
            }

            const abierto = grupoDesktopAbierto === item.id;
            const activoGrupo = grupoTieneActivo(item, pathname, hash);

            return (
              <div
                key={item.id}
                className="relative"
                data-nav-dropdown={item.id}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-0.5 rounded-lg px-2.5 py-2 text-[0.8125rem] font-medium transition-colors duration-200 xl:gap-1 xl:px-3 xl:text-sm",
                    "hover:bg-white/60 hover:text-iex-primary",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iex-primary focus-visible:ring-offset-2",
                    (activoGrupo || abierto) && "text-iex-primary",
                    !activoGrupo && !abierto && "text-iex-navy/90",
                  )}
                  aria-expanded={abierto}
                  aria-haspopup="true"
                  aria-controls={`desktop-submenu-${item.id}`}
                  id={`desktop-trigger-${item.id}`}
                  onClick={() =>
                    setGrupoDesktopAbierto((s) =>
                      s === item.id ? null : item.id,
                    )
                  }
                >
                  {t(item.labelKey)}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 opacity-80 transition-transform duration-200 xl:h-[1.05rem] xl:w-[1.05rem]",
                      abierto && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence>
                  {abierto ? (
                    <motion.div
                      id={`desktop-submenu-${item.id}`}
                      role="menu"
                      aria-labelledby={`desktop-trigger-${item.id}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full z-[60] mt-1 min-w-[13.5rem] -translate-x-1/2 xl:min-w-[14rem]"
                    >
                      <div className="overflow-hidden rounded-xl border border-border/80 bg-white/95 py-1 shadow-lg shadow-iex-navy/10 backdrop-blur-md">
                        {item.children.map((child) => {
                          const activo = enlaceEsActual(
                            child.href,
                            pathname,
                            hash,
                          );
                          return (
                            <Link
                              key={child.href}
                              role="menuitem"
                              to={child.href}
                              aria-current={activo ? "page" : undefined}
                              className={cn(
                                "block px-4 py-2.5 text-[0.8125rem] font-medium transition-colors xl:text-sm",
                                activo
                                  ? "bg-iex-light text-iex-primary"
                                  : "text-iex-navy/90 hover:bg-iex-light/80 hover:text-iex-primary",
                              )}
                              onClick={() => setGrupoDesktopAbierto(null)}
                            >
                              {t(child.labelKey)}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
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
