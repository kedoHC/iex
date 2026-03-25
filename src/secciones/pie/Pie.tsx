import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { MarcaInstitucional } from "@/components/MarcaInstitucional";
import { Reveal } from "@/components/Reveal";
import { enlacesInstitucion } from "@/secciones/pie/datosPie";
import type { PieProps } from "@/interfaces/pie";

export function Pie({ enlaces = enlacesInstitucion }: PieProps) {
  const { t } = useTranslation();

  return (
    <footer className="bg-iex-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-flex max-w-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-iex-navy"
              >
                <MarcaInstitucional variant="footer" />
              </Link>
              <p className="text-sm text-white/75">{t("footer.about")}</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
                {t("footer.institution")}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {enlaces.map((e) => (
                  <li key={e.href}>
                    <Link to={e.href} className="hover:text-white">
                      {t(e.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
                {t("footer.contact")}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>Av. Educación 123, Col. Centro</li>
                <li>
                  <a href="tel:+525512345678" className="hover:text-white">
                    +52 (55) 1234 5678
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:admisiones@iex.edu.mx"
                    className="hover:text-white"
                  >
                    admisiones@iex.edu.mx
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 border-t border-white/15 pt-8 text-center text-xs text-white/55">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
