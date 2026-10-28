import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Casos de éxito: un .md por caso en src/content/casos (el nombre del archivo es el slug)
const casos = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/casos" }),
  schema: z.object({
    // Nombre corto del caso: breadcrumb y "about" del Article
    name: z.string(),
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
  }),
});

export const collections = { casos };
