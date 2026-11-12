import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "node:path";

export default defineConfig({
  site: "https://www.nimbel.net",
  // CSS dentro del HTML: evita la petición que bloquea el renderizado
  build: { inlineStylesheets: "always" },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    // privacidad es noindex: no debe aparecer en el sitemap
    sitemap({ filter: (page) => !page.includes("/privacidad") }),
    react(),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
