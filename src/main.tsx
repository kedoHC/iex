import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { i18nInit } from "@/i18n/config";
import { LayoutPrincipal } from "@/app/LayoutPrincipal";
import { PaginaInicio } from "@/app/PaginaInicio";
import { PaginaEventos } from "@/secciones/eventos/PaginaEventos";
import { PaginaBecas } from "@/secciones/becas/PaginaBecas";
import { PaginaDocentes } from "@/secciones/docentes/PaginaDocentes";
import { PaginaFamiliaIex } from "@/secciones/conocenos/PaginaFamiliaIex";
import { PaginaInstalaciones } from "@/secciones/conocenos/PaginaInstalaciones";
import { PaginaNuestrosAlumnos } from "@/secciones/conocenos/PaginaNuestrosAlumnos";
import { PaginaServicios } from "@/secciones/conocenos/PaginaServicios";
import { PaginaProcesoAdmision } from "@/secciones/proceso-admision/PaginaProcesoAdmision";
import { PaginaTalleresVespertinos } from "@/secciones/talleres-vespertinos/PaginaTalleresVespertinos";
import { PaginaDetallePrograma } from "@/secciones/programas/PaginaDetallePrograma";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPrincipal />,
    children: [
      { index: true, element: <PaginaInicio /> },
      { path: "eventos", element: <PaginaEventos /> },
      { path: "talleres-vespertinos", element: <PaginaTalleresVespertinos /> },
      { path: "docentes", element: <PaginaDocentes /> },
      { path: "conocenos/instalaciones", element: <PaginaInstalaciones /> },
      { path: "conocenos/servicios", element: <PaginaServicios /> },
      { path: "conocenos/alumnos", element: <PaginaNuestrosAlumnos /> },
      { path: "conocenos/familia-iex", element: <PaginaFamiliaIex /> },
      { path: "admisiones", element: <PaginaProcesoAdmision /> },
      { path: "becas", element: <PaginaBecas /> },
      { path: "programas/:programaId", element: <PaginaDetallePrograma /> },
    ],
  },
]);

const root = document.getElementById("root")!;

void i18nInit.then(() => {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
