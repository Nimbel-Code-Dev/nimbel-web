# Convenciones del proyecto

### Regla general

- Nunca usar `npm install` ni `yarn`. Solo `pnpm`
- El `pnpm-lock.yaml` debe commitearse siempre

### estilos

- Evita usar estilos de tailwind usando pixeles directamente, Ejemplo: `w-4` en lugar de `w-[16px]`, si no hay una clase de tailwind que se ajuste a lo que quieres, usa la que mas se acerque.

## SEO

- Las decisiones SEO viven en `docs/seo/` y son la fuente de verdad. Léela siempre del disco al empezar (tras un `git pull`), no asumas su contenido.
- Antes de cambiar textos, títulos, metas, slugs o crear páginas: lee `docs/seo/keyword-map.md` y `docs/seo/decisiones.md`.
- Toda página nueva necesita una keyword principal asignada en `keyword-map.md`; si no la tiene, pregúntame antes de crearla.
- No asignes la misma keyword principal a dos URLs.
- Al terminar un cambio SEO: actualiza el Estado en `keyword-map.md`, marca la tarea en `backlog.md` y, si hubo una decisión nueva, añádela a `decisiones.md`.
- No inventes datos (volúmenes, clientes, cifras, reseñas) en los textos de la web.

### DataForSEO (API de pago por uso)

- Antes de consultar, mira `docs/seo/keyword-map.md`: si el dato existe y tiene menos de 6 meses, no se vuelve a pedir.
- Agrupa: todas las keywords de una investigación van en una sola tarea de volumen, no una por consulta.
- Orden de coste: primero volumen (Keywords Data API, lo más barato); keywords relacionadas y KD (Labs) solo para las candidatas con volumen; SERP solo para las 2–3 finalistas y solo el top 10.
- Limita los resultados: como mucho 50 ítems por consulta de Labs.
- Mercado: España y español. Otros mercados se plantearán como estrategia aparte; no los consultes sin que te lo pida.
- Modo Standard (más barato) si la herramienta deja elegir y no hace falta el dato al momento.
- No uses endpoints de IA/LLM ni On-Page sin preguntar.
- Antes de un lote que pueda superar 0,50 $, di el coste estimado y pide confirmación.
- Al terminar, indica cuántas consultas hiciste y el coste aproximado, y guarda los datos con fecha y fuente en `keyword-map.md` para no repetirlos.
