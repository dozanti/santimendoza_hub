import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const { render, structuredData } = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);
const template = await readFile(path.join(dist, "index.html"), "utf8");

function requireMarker(html, marker) {
  if (!html.includes(marker)) {
    throw new Error(`Template is missing ${marker}`);
  }
}

requireMarker(template, "<!--app-html-->");
requireMarker(template, "<!--head-extra-->");

function page(route, headExtra, transform = (html) => html) {
  const html = template
    .replace('<div id="root">', `<div id="root" data-prerendered="${route}">`)
    .replace("<!--app-html-->", render(route))
    .replace("<!--head-extra-->", headExtra);
  return transform(html);
}

const preloadFonts = (await readdir(path.join(dist, "assets")))
  .filter((file) => /^ibm-plex-(mono-latin-600|sans-latin-400)-normal-[\w-]+\.woff2$/.test(file))
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`)
  .join("");

const jsonLd = JSON.stringify(structuredData()).replace(/</g, "\\u003c");
const home = page("home", `${preloadFonts}<script type="application/ld+json">${jsonLd}</script>`);

const notFound = page("not-found", preloadFonts, (html) =>
  html
    .replace(/<title>[^<]*<\/title>/, "<title>404 — Dozanti</title>")
    .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex" />')
    .replace(/\s*<link rel="canonical"[^>]*>/, ""),
);

await writeFile(path.join(dist, "index.html"), home);
await writeFile(path.join(dist, "404.html"), notFound);
await rm(serverDir, { recursive: true, force: true });

console.log("prerendered dist/index.html and dist/404.html");
