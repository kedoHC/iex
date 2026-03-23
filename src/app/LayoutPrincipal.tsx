import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Navbar } from "@/secciones/cabecera/Navbar";
import { Pie } from "@/secciones/pie/Pie";

/**
 * Scroll unificado (sin ScrollRestoration de RR que peleaba con scroll a anclas).
 * Navbar con key=pathname reinicia estado al cambiar de ruta (menú cerrado).
 */
export function LayoutPrincipal() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const raw = hash.replace(/^#/, "");
    let id = raw;
    try {
      id = decodeURIComponent(raw);
    } catch {
      id = raw;
    }

    let alive = true;
    const go = () => {
      if (!alive) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start", inline: "nearest" });
      }
    };

    go();
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(go);
    });
    const t = setTimeout(go, 120);

    return () => {
      alive = false;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(t);
    };
  }, [pathname, hash]);

  return (
    <div className="flex min-h-dvh min-h-screen flex-col bg-background">
      <Navbar key={pathname} />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <Pie />
    </div>
  );
}
