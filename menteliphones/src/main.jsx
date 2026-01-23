import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//rotas
import RouterApp from "./Router/RouterApp.routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
);
