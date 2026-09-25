import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./styles/fonts.css";
import "./styles/tokens.css";
import "./styles/base.css";
import App from "./App";
import { routeFor } from "./routes";

const container = document.getElementById("root")!;
const route = routeFor(window.location.pathname);

const app = (
  <StrictMode>
    <App route={route} />
  </StrictMode>
);

if (container.dataset.prerendered === route) {
  hydrateRoot(container, app);
} else {
  container.textContent = "";
  createRoot(container).render(app);
}
