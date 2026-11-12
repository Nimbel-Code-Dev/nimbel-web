import type { ImageMetadata } from "astro";

// Imágenes de src/assets que se nombran desde los textos (es.ts, en.ts) por su ruta,
// p. ej. "people/Ruben.jpg". Así pasan por el optimizador de Astro.
const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export function getAsset(path: string): ImageMetadata {
  const file = files[`/src/assets/${path}`];
  if (!file) throw new Error(`No existe la imagen src/assets/${path}`);
  return file.default;
}
