import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { i18nInit } from "@/i18n/config";
import { LayoutPrincipal } from "@/app/LayoutPrincipal";
import { PaginaInicio } from "@/app/PaginaInicio";
import { PaginaEventos } from "@/secciones/eventos/PaginaEventos";
import { PaginaBecas } from "@/secciones/becas/PaginaBecas";
import { PaginaDocentes } from "@/secciones/docentes/PaginaDocentes";
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
