# Rediseñar una página sin perder posicionamiento

Protocolo para cambiar el diseño y los textos de una página que ya recibe búsquedas o citas en IA, sin perder lo ganado en SEO y en GEO. Se aplica a cada página del rediseño que ya esté publicada, empezando por /desarrollo-de-apps/ y la home. Las páginas nuevas (ciudades, sectores) no lo necesitan: no tienen nada que perder.

La idea de fondo: Google y las IAs leen el texto, la estructura y los datos de la página, no su aspecto. El diseño, el orden y el tono se pueden cambiar con libertad para que la página venda; lo que hay que proteger es una lista corta de cosas.

Decisión del 2026-11-20 (`decisiones.md`). Tareas en la [guía de gestión comercial](https://github.com/Nimbel-Code-Dev/nimbel-kb/blob/main/ventas/guia-gestion-comercial-paso-a-paso.md#paso-4-perfil-web-y-escaparates): T4.26 (foto de partida), T4.16 (comprobación en el PR) y T4.27 (seguimiento).

## Punto de partida (2026-11-20)

- **GEO Metrics, 30 días:** 4 citas en IA a nimbel.net, todas a /desarrollo-de-apps (2 de AI Mode, 1 de AI Overviews y 1 de Perplexity). Con tan pocas citas, perder una o dos puede ser ruido: se mira la tendencia, no un dato suelto.
- **Search Console:** /desarrollo-de-apps es la única página con impresiones sin marca («desarrollo apps barcelona» y variantes, posición 40–53).

## 1. Lo que no se toca (o solo con las reglas SEO)

| Qué | Regla |
|---|---|
| URL y canonical | No cambian. Si un archivo se mueve en el código (por ejemplo, `desarrollo-de-apps.astro` a `desarrollo-de-apps/index.astro`), la URL publicada y el canonical tienen que salir iguales |
| Title, meta description y H1 | No cambian sin aplicar `keyword-map.md` y `decisiones.md`. Un cambio en el H1, mínimo y aprobado por Rubén |
| Keywords de la página | Siguen en el texto y en algún subtítulo (H2/H3): las de `keyword-map.md` asignadas a esa URL |
| Fragmentos que citan las IAs | Se pueden recolocar y mejorar, pero tienen que seguir diciendo lo mismo, con los mismos datos. Salen de la foto de partida |
| FAQ y schema | Las preguntas y respuestas se mantienen (pueden ir en desplegable si está en el HTML). El schema (`FAQPage`, `BreadcrumbList`, `Organization`…) sigue y valida |
| Texto en el HTML | Todo el texto se sirve en el HTML que genera Astro. Nada de texto que solo pinte un componente React en el navegador, ni texto dentro de imágenes |
| Indexación | Sin `noindex`, y la página sigue en el sitemap |
| Enlaces internos | Los que llegan a la página se mantienen (menú, pie, home, otras páginas) |
| Velocidad | Lighthouse y Core Web Vitals no empeoran |

## 2. Lo que se cambia con libertad

Orden de las secciones, primera pantalla, un solo botón, logos y prueba social arriba, tono, diseño, imágenes y sistema visual. Si una sección se reescribe para vender, el contenido que responde preguntas sigue en la página, aunque vaya más abajo o en la FAQ.

## 3. Foto de partida (antes de diseñar la página)

Se guarda en `docs/seo/fotos/<pagina>-AAAA-MM-DD.md`, una por página:

1. **Search Console** (sin filtro de país, últimos 3 meses, filtro por esa URL): búsquedas con impresiones, clics y posición media.
2. **GEO Metrics:** citas a esa URL en 30 días, por proveedor, y **los fragmentos del texto que aparecen en las respuestas** de las IAs que la citan.
3. **Bing Webmaster Tools:** AI Performance de esa URL.
4. **Lighthouse** (móvil): rendimiento, SEO y Core Web Vitals.
5. **La página tal cual:** title, meta, H1, todos los subtítulos, las preguntas de la FAQ, el schema que sale en el HTML y los fragmentos citados del punto 2.

## 4. Comprobación en el PR (antes de fusionar)

Con la vista previa del PR y la foto de partida al lado:

- [ ] URL y canonical iguales a la foto.
- [ ] Title, meta y H1 iguales o cambiados con las reglas SEO.
- [ ] Las keywords de la página están en el texto y en algún subtítulo.
- [ ] Cada fragmento citado por las IAs sigue en la página y dice lo mismo.
- [ ] La FAQ sigue y el schema valida (Rich Results Test).
- [ ] El texto está en el HTML (ver código fuente, no solo la pantalla).
- [ ] Sin `noindex` y en el sitemap.
- [ ] Lighthouse no empeora respecto a la foto.

Sol hace la comprobación y la deja en el PR; Rubén da el visto bueno.

## 5. Seguimiento (4 semanas después de publicar)

- El día de la publicación, pedir la indexación de la URL en Search Console.
- Cada semana, comparar con la foto: impresiones, posición, búsquedas y citas en GEO Metrics y en Bing.
- **Regla para volver atrás:** si las impresiones o la posición caen claramente respecto a la foto y siguen así dos semanas seguidas, se recupera el texto que se haya perdido (fragmentos, subtítulos o FAQ). El diseño no se deshace.
- **Calendario:** si una página se publica dentro de la ventana de un hito SEO (T4.10, 1/12; T4.11, 20/12), se anota al leer el hito, porque el cambio de la página altera la comparación.
