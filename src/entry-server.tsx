import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import type { Route } from "./routes";

export { structuredData } from "./seo";

export function render(route: Route) {
  return renderToString(
    <StrictMode>
      <App route={route} />
    </StrictMode>,
  );
}
