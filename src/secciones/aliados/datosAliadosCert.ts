import {
  Award,
  BookOpenCheck,
  Building2,
  Cpu,
  Dumbbell,
  Handshake,
  Landmark,
  ShieldCheck,
  Stamp,
  Users,
} from "lucide-react";

import type { ItemAliadoCert } from "@/interfaces/contacto";

export const itemsCertificaciones: ItemAliadoCert[] = [
  { id: "sep", labelKey: "partners.items.sep", Icono: Landmark },
  { id: "iso", labelKey: "partners.items.iso", Icono: ShieldCheck },
  { id: "cambridge", labelKey: "partners.items.cambridge", Icono: BookOpenCheck },
  { id: "stem", labelKey: "partners.items.stem", Icono: Cpu },
  { id: "certA", labelKey: "partners.items.certA", Icono: Award },
  { id: "certB", labelKey: "partners.items.certB", Icono: Stamp },
];

export const itemsAliados: ItemAliadoCert[] = [
  { id: "deporte", labelKey: "partners.items.deporte", Icono: Dumbbell },
  { id: "alianza1", labelKey: "partners.items.alianza1", Icono: Handshake },
  { id: "alianza2", labelKey: "partners.items.alianza2", Icono: Users },
  { id: "alianza3", labelKey: "partners.items.alianza3", Icono: Building2 },
];
