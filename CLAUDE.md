# Convenciones del proyecto

### Regla general

- Nunca usar `npm install` ni `yarn`. Solo `pnpm`
- El `pnpm-lock.yaml` debe commitearse siempre

### estilos

- Evita usar estilos de tailwind usando pixeles directamente, Ejemplo: `w-4` en lugar de `w-[16px]`, si no hay una clase de tailwind que se ajuste a lo que quieres, usa la que mas se acerque.

## SEO

- Las decisiones SEO viven en `docs/seo/` y son la fuente de verdad. Esa carpeta la edita también un proyecto de Claude Cowork: léela siempre del disco al empezar, no asumas su contenido.
- Antes de cambiar textos, títulos, metas, slugs o crear páginas: lee `docs/seo/keyword-map.md` y `docs/seo/decisiones.md`.
- Toda página nueva necesita una keyword principal asignada en `keyword-map.md`; si no la tiene, pregúntame antes de crearla.
- No asignes la misma keyword principal a dos URLs.
- Al terminar un cambio SEO: actualiza el Estado en `keyword-map.md`, marca la tarea en `backlog.md` y, si hubo una decisión nueva, añádela a `decisiones.md`.
- No inventes datos (volúmenes, clientes, cifras, reseñas) en los textos de la web.
