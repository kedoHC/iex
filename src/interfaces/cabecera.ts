export interface EnlaceNavHoja {
  href: string;
  labelKey: string;
}

export interface EnlaceNavGrupo {
  id: string;
  labelKey: string;
  children: EnlaceNavHoja[];
}

export type EnlaceNav = EnlaceNavHoja | EnlaceNavGrupo;

export function esGrupoNav(enlace: EnlaceNav): enlace is EnlaceNavGrupo {
  return "children" in enlace && Array.isArray(enlace.children);
}

export interface NavbarProps {
  enlaces?: EnlaceNav[];
}
