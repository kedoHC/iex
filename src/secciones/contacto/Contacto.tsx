import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

import { BotonAccion } from "@/componentes/BotonAccion";
import { TituloSeccion } from "@/componentes/TituloSeccion";
import { MapaUbicacion } from "@/secciones/contacto/MapaUbicacion";
import { TarjetaContacto } from "@/secciones/contacto/TarjetaContacto";
import { contactoItems } from "@/secciones/contacto/datosContacto";

const urlWhatsapp = "https://wa.me/5255123456789";

export function Contacto() {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-gradient-to-b from-iex-light/60 to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TituloSeccion titulo={t("contact.title")} className="mb-12" />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-4">
            {contactoItems.map((item, i) => (
              <TarjetaContacto
                key={item.id}
                item={item}
                delay={Math.min(i * 0.06, 0.3)}
              />
            ))}
            <BotonAccion
              variant="green"
              href={urlWhatsapp}
              className="mt-2 w-full justify-center gap-2 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {t("contact.whatsapp")}
            </BotonAccion>
          </div>
          <MapaUbicacion />
        </div>
      </div>
    </section>
  );
}
