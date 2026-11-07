import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Casos de éxito: un .md por caso e idioma en src/content/casos/<es|en>/ (el nombre del archivo es el slug)
const casos = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/casos" }),
  schema: z.object({
    // Nombre corto del caso: breadcrumb y "about" del Article
    name: z.string(),
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
  }),
});

// Artículos del blog: un .md por artículo en src/content/blog/es/ (el nombre del archivo es el slug).
// Mismo esquema que los casos; por ahora solo en español
const blog = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/blog" }),
  schema: z.object({
    // Nombre corto del artículo: breadcrumb y "about" del Article
    name: z.string(),
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
  }),
});

export const collections = { casos, blog };
