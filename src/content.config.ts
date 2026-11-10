import { defineCollection, reference, z } from "astro:content";
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

// Autores del blog: un .json por persona en src/content/autores/ (el nombre del archivo es el id).
// El id también es el @id del Person en el schema (#<id>); "ruben" coincide con el founder del @graph global
const autores = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/autores" }),
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(),
    linkedin: z.string().url().optional(),
  }),
});

// Artículos del blog: un .md por artículo en src/content/blog/es/ (el nombre del archivo es el slug).
// Por ahora solo en español. El H1 va en la cabecera para poder poner la firma del autor debajo
const blog = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/blog" }),
  schema: z.object({
    // Nombre corto del artículo: breadcrumb y "about" del Article
    name: z.string(),
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
    // Quien escribe el artículo: id de una ficha de src/content/autores/
    author: reference("autores"),
    h1: z.string(),
  }),
});

export const collections = { casos, autores, blog };
