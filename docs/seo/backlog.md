# Backlog SEO — nimbel.net

Las tareas hechas indican el commit donde se aplicaron.

## Alta
- [ ] Plan del 12 al 25 de noviembre: tareas delegadas a Sol y Maribel (directorios, medición, rediseño y páginas por ciudad), en la base: `marketing/estrategia/2026-11-plan-web-sol-y-maribel.md`. Sol y Maribel trabajan en ramas con PR; Rubén revisa y fusiona
- [ ] Aplicar la ficha única (`empresa/ficha-nimbel.md` en la base) en todos los canales:
  - [x] Web (Rubén con Claude, 2026-11-12): banner de cifras quitado; tarjeta de LinkedIn de Contacto cambiada por una de redes; "Tu software es tuyo" pasa a "El código queda en tu poder"; FAQ de "Sobre Nimbel Code" con la ficha y en desplegable; schema con la descripción de la ficha, el equipo en Barcelona, Sevilla y Córdoba y areaServed ES y AR — hecho 2026-11-12 (`decisiones.md`). La og-image va en el plan de Maribel
  - [ ] Imagen de cabecera con la app de Repsol Toyota Rally Team (y un vídeo titulado "Test-video"): se decide en el rediseño (Rubén, 2026-11-12)
  - [ ] Directorios con los textos y datos de la ficha: Clutch, GoodFirms, Sortlist y TechBehemoths (Sol)
  - [ ] Página de empresa de LinkedIn con la descripción de la ficha (Sol). Los perfiles personales los cambia cada persona
  - [ ] Ficha de marca de GEO Metrics: quitar "salud", "Latinoamérica" y "propiedad intelectual" y, con todo cambiado, pedir recomendaciones nuevas (Sol)
- [ ] Comparativa de empresas en /blog/empresas-desarrolladoras-de-apps-espana (Sol, después de aplicar la ficha; condiciones en `decisiones.md`, 2026-11-11)
- [ ] Páginas por ciudad: /desarrollo-de-apps-madrid, /desarrollo-de-apps-valencia y /desarrollo-de-apps-sevilla, dentro del rediseño (`decisiones.md`, 2026-11-11; datos en `keyword-map.md`)
- [x] Home: title, H1, subtítulo, H2 y meta description — hecho 2026-10-28
- [x] Ampliar home a ~1.200–1.500 palabras con el texto de `contenido-home.md`, montado con los bloques visuales actuales — hecho (801b393). La diseñadora lo rediseñará; la sección de Barcelona se quitó
- [x] Home: responder cuándo conviene software a medida frente a uno estándar (SaaS) — hecho (9764dfb)
- [x] Home: añadir la situación del fundador (quiere lanzar su app o SaaS sin equipo técnico) en primer lugar en "¿Para quién es?" — hecho (f29fa81)
- [x] Home: quitar la situación "Necesitas una aplicación propia…", que repetía la del fundador — hecho (c0ebb68)
- [x] /en: "Who is it for?" y "How we work", igual que en español — hecho (a25e781)
- [x] /en: title, meta, H2 de Servicios y testimonio de Jose Muñoz, iguales que en español; tilde de PAÍSES — hecho 2026-11-02
- [x] Privacidad: voseo corregido, sin mención a formulario, proveedores listados (Vercel, Google Fonts, Calendly, GeoMetrics) — hecho 2026-11-03. HubSpot quitado de la web — hecho 2026-11-03 (`decisiones.md`, "Se quita HubSpot"). Pendiente: revisión por un abogado; valorar alojar las fuentes en local
- [x] Caso FAMBA en inglés en /en/cases/famba/, con sus enlaces en inglés (footer, carrusel, FAQ de salud y /desarrollo-de-apps) — hecho 2026-11-02, sin keyword principal (las páginas de caso no llevan)
- [ ] /desarrollo-de-apps en inglés (/en/app-development/ propuesto, keyword propuesta "app development company barcelona"): el texto ya está en `en.ts`; falta validar la keyword con DataForSEO (España, en inglés). Al crearla, activar el enlace de la situación del fundador y los hreflang en las dos direcciones
- [x] Publicar /desarrollo-de-apps (borrador aprobado en `docs/seo/borradores/desarrollo-de-apps.md`), con enlace desde la situación del fundador en la home — hecho (9945b02)
- [ ] Página nueva /cuanto-cuesta-crear-una-app (valorar incluir, con contexto: la mayoría de clientes empezó con una primera fase de ~10.000 € y hoy invierte ≥100.000 €/año). Cifras en HTML, respuesta en las primeras líneas y bloque corto de dudas sin repetir la FAQ de "Sobre Nimbel Code" (`decisiones.md`, 2026-11-03)
- [ ] Listados "Top empresas…" (ver `decisiones.md`, 2026-11-03, "Listados Top empresas"). Por orden:
  - [ ] Directorios (Clutch, GoodFirms, Sortlist, TechBehemoths): sede Athlone y, como ubicaciones adicionales, las ciudades donde hay equipo de verdad (Barcelona/Ripollet, Sevilla, Córdoba-Argentina). Misma descripción, servicios y tarifas en todos
  - [x] TechBehemoths: perfil enviado — hecho 2026-11-03 (plan FREE). Descripción propia en inglés (no copiada), sede Athlone, servicios (software a medida 40 %, apps 30 %, web 15 %, IA 15 %), sectores (salud, medios, finanzas, educación) y portfolio con FAMBA, NewsUp, Analysta e Innocard
  - [x] TechBehemoths: importación de reseñas de Google solicitada — 2026-11-03 (3 de las 4, límite del plan FREE; las verifica su equipo antes de publicarlas). Clutch no tiene reseñas que importar
  - [x] TechBehemoths: enlace de verificación en la columna de redes del pie (ES y EN) y perfil añadido al `sameAs` del schema — hecho 2026-11-11 (`decisiones.md`). Su bot (`TechBehemoths-VerificationBot/1.0`) recibe 200 en https://www.nimbel.net/, sin tocar el firewall de Vercel
  - [x] TechBehemoths: perfil verificado con el enlace de texto (solo la URL, Page Path vacío) — hecho 2026-11-11. El primer intento falló porque el commit aún no estaba desplegado
  - [x] TechBehemoths: "Suggest a company" enviado en el Top de software a medida en Barcelona (https://techbehemoths.com/top-companies/custom-software-development/barcelona) — hecho 2026-11-11, por Rubén y diciendo que es el fundador
  - [ ] TechBehemoths: comprobar hacia el 2026-11-25 si Nimbel aparece en ese Top (TechBehemoths no da plazo de revisión)
  - [x] Sortlist: perfil publicado (antes no lo estaba, al 39 %) — hecho 2026-11-03: descripción y tagline en inglés (el resto de idiomas los traduce Sortlist con IA), 6 personas, fundada en 2020, CRO 788569 (Irlanda), idiomas ES/EN/CA, oficina Athlone (se quitó C/ Ramon Turró, ya no existe), trabajo en remoto activado. Otras oficinas: no se ponen, solo Athlone; las ciudades con equipo van en la descripción — decidido 2026-11-11 (`decisiones.md`)
  - [ ] StartUB (Universitat de Barcelona): añadir en el pie de su web, junto al copyright, el crédito «Web desenvolupada per Nimbel Code» con enlace a https://www.nimbel.net/, sin nofollow. Autorizado por escrito por el director de StartUB! Lab el 2026-10-26 (registrado en la base, `proyectos/startub/README.md`). Es una mención de un tercero con autoridad (guía GEO 6.9.4)
  - [x] DesignRush: descartado de momento — decidido 2026-11-11 (`decisiones.md`)
  - Reseñas: no se hace campaña de reseñas (decisión de Rubén, 2026-11-03). Se piden solo en momentos naturales (fin de fase o de proyecto)

## Contenido
- [x] Home: sección "Colaboradores" con el enlace a Roger Guerrero Plana, en ES y EN — hecho 2026-11-06 (`decisiones.md`)
- [ ] Home: añadir la foto de Roger Guerrero Plana a "Colaboradores" (cuadrada, 800×800 px, JPG). La saca Rubén de su perfil de LinkedIn, con permiso de Roger (2026-11-11)
- [x] "Sobre Nimbel Code" y schema Organization: indicar dónde está el equipo (Athlone, Barcelona, Sevilla, Córdoba-Argentina) como dato, sin páginas por ciudad — hecho 2026-11-12 (FAQ "¿Dónde está?" y `location` del schema)
- [ ] Página de autor por cada autor del blog (schema `Person`, sameAs LinkedIn, enlazada a la Organization). Ya hechas, 2026-11-10: fichas en `src/content/autores/`, firma visible y `Person` en el schema del artículo; falta la página propia de cada autor
- [ ] Prompt Universe: completar los 10 problemas del cliente × 3 prompts (`keyword-map.md`) y dar de alta en GEO Metrics los prompts propuestos

## Media
- [ ] Artículo /externalizar-desarrollo-software, firmado por Rubén, con tabla comparativa (equipo interno / freelance / empresa externa) y bloque corto de dudas
- [ ] /en orientada a "custom software development barcelona" (en el title desde 2026-11-02; falta trabajarla en H1 y texto)
- [x] Schema Organization: legalName "NIMBEL CODE LIMITED", identifier CRO 788569, sameAs (LinkedIn, Instagram, TikTok, GitHub, Crunchbase, Clutch, GoodFirms) y pie legal — hecho (9e58e1a, 2c8179d, 10b7817)
- [x] Página de caso: FAMBA — hecho (e3fab13)
- [ ] Páginas de casos: NewsUp (borrador en `docs/seo/borradores/caso-newsup.md`, pendiente de revisión de Rubén), en español y en inglés. El «de X a Y» de FAMBA y NewsUp lo escribe Rubén y lo aprueba cada cliente antes de publicarlo. Incluir cifras propias siempre que se puedan publicar. Analysta e Innocard no tendrán página de caso: son antiguos clientes sin relación actual (decisión de Rubén, 2026-11-11)
- [x] FAQ en "Sobre Nimbel Code" (orientada a GEO) — hecho (9c0b650)

## Técnico
- [x] Search Console: inspeccionar /desarrollo-de-apps y solicitar indexación (el sitemap no hace falta reenviarlo) — hecho 2026-11-02
- [x] alt en todas las imágenes — hecho (935de85)
- [x] Redirección permanente de nimbel.net a [www.nimbel.net](https://www.nimbel.net) — hecho, configurada en Vercel fuera del repo (responde 308, equivalente a 301)
- [ ] Comprobar que OAI-SearchBot, Claude-SearchBot, PerplexityBot y Bingbot reciben 200 (`curl -A "OAI-SearchBot/1.0" -I https://www.nimbel.net/`) y que el firewall de Vercel no bloquea bots de IA
- [x] Remotion: licencia gratuita confirmada por Rubén — 2026-11-10 (`decisiones.md`, 2026-11-07)
- [ ] llms.txt: entra en el plan de Sol y Maribel (R6), con un enlace discreto en el pie y las mismas respuestas que ya da la web. Tiene que responder 200 (`decisiones.md`, 2026-11-11)
- [ ] og-image: quitar "SOFTWARE A MEDIDA PARA SALUD" (contradice la web generalista); avisar a la diseñadora

## Medición
- [ ] Activar el informe Generative AI de Search Console y exportarlo cada mes
- [ ] Bing Webmaster Tools (ya importado desde Search Console en oct 2026): revisar el informe AI Performance (Citation Share, Intents) y que el sitemap esté enviado
- [x] Visitas desde asistentes de IA — decidido 2026-11-03: no se instala GA4 (la web no lo tiene; exigiría banner de cookies y cambiar la política, con HubSpot aún sin resolver). Las visitas que llegan desde ChatGPT, Perplexity, Claude, etc. ya las mide el script de GEO Metrics (verificado, activo). Línea base: 0 visitas desde IA en 30 días. Opcional: Vercel Web Analytics (sin cookies) para ver el origen de todas las visitas
- [ ] Atribución de leads: Calendly gratis no permite preguntas propias. Preguntar al inicio de cada primera llamada "¿Cómo nos encontraste? Si fue con una IA, ¿qué le preguntaste?" y apuntarlo en el CRM (campo "Origen")

## Investigación
Prioridad alta (siguiente sesión con Semrush):
- [x] Artículo RAG con PostgreSQL — publicado 2026-11-07 como primer artículo del blog en /blog/base-de-datos-vectorial (texto en `src/content/blog/es/`; el borrador queda como histórico de la investigación). Indexación de /blog/ y del artículo solicitada en Search Console — hecho 2026-11-10. Por orden: (1) calibrar DataForSEO pidiendo en una sola tarea las 8 keywords que ya tienen dato de Semrush en el borrador y comparar el orden de magnitud y el ranking; (2) validar "embeddings", "qué son los embeddings" y "vectorización"; (3) SERP top 10 de las 2–3 finalistas; (4) proponer la keyword principal a Rubén. Reglas de gasto en `CLAUDE.md`. Pasos 1, 2 y 3 hechos 2026-11-07 (datos en `keyword-map.md`, "En investigación", y en el borrador). Paso 4 hecho 2026-11-07: keyword principal "base de datos vectorial" (`decisiones.md`). Slug, title, H1 y entradilla ajustados en el borrador 2026-11-07; aprobado y publicado el mismo día
- [ ] Validar con DataForSEO las keywords de "Sin validar todavía" (`keyword-map.md`). Semrush ya no se usa (`decisiones.md`, 2026-11-07)
- [x] Validar en Semrush (España) el volumen y el KD de todas las keywords de "Hipótesis" (Keyword Magic Tool, también con el filtro "Preguntas") — hecho 2026-11-01
- [x] Analizar appsociados.com en Semrush (Posicionamiento orgánico): qué keywords les traen tráfico — hecho 2026-11-01: 0 keywords en el top 100
- [x] Analizar grupozas.com en Semrush: qué artículos les traen tráfico — hecho 2026-11-01: el tráfico viene de SEO local de marketing, no de los artículos
- [x] Mover a "Keywords elegidas" las validadas y a "Descartadas" las que no tengan volumen ni intención — hecho 2026-11-01

Resto:
Línea base de citas en IA (2026-11-03): Bing AI Performance (Copilot y partners), 25 citas en 30 días (datos desde el 27-10), todas a la home, sin consultas visibles (probablemente de marca). Comparar en cada hito: más citas, más páginas citadas y citas a /desarrollo-de-apps o a los casos.

Hitos de Search Console (sin filtro de país, 3 meses, pestaña Páginas; cuentan las impresiones en posiciones 40–90). Si un hito no se cumple, se actúa en esa fecha, no se espera al siguiente:
- [ ] ~2026-11-17: home y /desarrollo-de-apps indexadas y con impresiones en alguna búsqueda que no sea de marca. Si no: revisar indexación y técnica
- [ ] ~2026-12-01: impresiones en keywords objetivo (desarrollo de software a medida, empresa de desarrollo de apps…) y más búsquedas distintas cada semana. Si no: el contenido no basta, revisar enfoque
- [ ] 2026-12-20: alguna keyword objetivo en el top 30; comparar / frente a /desarrollo-de-apps y decidir el foco de la home. Revisar también, por separado, las citas en IA (GEO Metrics, GSC Generative AI, Bing). Si no hay top 30: priorizar la autoridad externa (listados, directorios, reseñas, menciones)
- [ ] Decidir cómo apoyar "empresa desarrollo software barcelona" en la home, ahora que solo está en el title
- [ ] Confirmar en la SERP (google.es, gl=es, incógnito) la intención de "programa para clínica" y de las keywords elegidas
- [x] Decidir si "empresa desarrollo software barcelona" va en la home o en página local — hecho 2026-10-28: va en la home
