import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { i18nInit } from "@/i18n/config";
import { LayoutPrincipal } from "@/app/LayoutPrincipal";
import { PaginaInicio } from "@/app/PaginaInicio";
import { PaginaEventos } from "@/secciones/eventos/PaginaEventos";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPrincipal />,
    children: [
      { index: true, element: <PaginaInicio /> },
      { path: "eventos", element: <PaginaEventos /> },
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
