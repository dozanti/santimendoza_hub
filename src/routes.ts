export type Route = "home" | "not-found";

export function routeFor(pathname: string): Route {
  return pathname === "/" || pathname === "/index.html" ? "home" : "not-found";
}
