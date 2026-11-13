# Decisiones SEO — nimbel.net

Registro cronológico, la más reciente arriba. Formato: `### AAAA-MM-DD — título`, qué se decidió y por qué.

### 2026-11-13 — "Programamos con IA, no hacemos vibe coding" en la home y en la FAQ
**Qué**: tercera nota en "Cómo trabajamos" de la home (ES y EN), "Programamos con IA. No hacemos vibe coding." / "We code with AI. We don't vibe code.", y una pregunta nueva en la FAQ de "Sobre Nimbel Code", después de servicios: "¿Nimbel Code programa con IA?" / "Does Nimbel Code use AI to write code?". Entra en el schema `FAQPage` porque sale de los mismos `items`. No se asigna keyword: "vibe coding" (12.100/mes, `keyword-map.md`) es informativa y sigue en investigación sin URL.
**Por qué**: Rubén quiere dejar claro que el equipo programa con IA, pero con ingenieros que ya eran muy buenos sin ella, y que no entrega código generado sin criterio. Refuerza el eyebrow del hero ("Sin subcontratas. Sin juniors de paso.") y el servicio de rescate de código hecho con IA. Rubén eligió "lo entiende y sabe mantener" en lugar de "lo ha revisado".

### 2026-11-12 — Todas las imágenes de mapa de bits pasan por el optimizador de Astro
**Qué**: las fotos (equipo, testimonios, colaboradores), las capturas de los casos y los logos PNG de clientes se mueven de `public/assets` a `src/assets/{people,cases,clients}` y se sirven con `<Image>`/`getImage()` de Astro en WebP y a la medida de donde se muestran. Los textos (`es.ts`, `en.ts`) nombran cada foto por su ruta dentro de `src/assets` (p. ej. `people/Ruben.jpg`) y `src/utils/images.ts` la resuelve. El carrusel de casos, que es React, recibe las capturas ya optimizadas desde `CaseStudies.astro`. Se quedan en `public/` los SVG, el favicon, `nimbel-logo.png` (el schema necesita una URL fija) y el vídeo y el póster del blog. Una foto nueva se añade dejándola en `src/assets/people/` y poniendo su nombre en los textos.
**Por qué**: la migración a Astro del 2026-04-07 (`2e1fc9a`) solo cubrió las imágenes de entonces; lo que llegó después se puso en `public/`, que Astro sirve sin tocar. La home pedía unos 14 MB de imágenes (la foto de Maribel, 3,7 MB para verse a unos 400 px); ahora todas las variantes juntas suman unos 870 KB y la mayor pesa 85 KB.

### 2026-11-12 — La web aplica la ficha única de Nimbel
**Qué**: la web se alinea con la ficha (`empresa/ficha-nimbel.md` en la base). (1) Se quita de la home el banner de cifras (20 años, 50 proyectos, 5 países), con su componente y sus textos; el rediseño decidirá si vuelve con datos de la ficha. (2) La tarjeta de LinkedIn de Contacto ("No somos mucho de redes sociales…") pasa a "Síguenos / Follow us", con los iconos de Instagram, TikTok, LinkedIn y GitHub; la lista de redes vive en `src/utils/socialNetworks.ts` y los iconos en `SocialIcon.astro`, compartidos con el pie. (3) "Tu software es tuyo" pasa a "El código queda en tu poder", con la frase de la ficha, y lo mismo en "¿Para quién es?" de la home y en /desarrollo-de-apps (nota "El código y los datos son tuyos" y final de la meta description, sin tocar la keyword). (4) La FAQ de "Sobre Nimbel Code" usa los datos de la ficha (para quién, la marca de 2020 y la sociedad de 2025, servicios en su orden, los cuatro sectores y el fundador como CEO y CTO) y pasa a desplegable nativo (`<details>`): las respuestas siguen en el HTML y el schema `FAQPage` no cambia. (5) Schema Organization: descripción de la ficha, `location` con Barcelona, Sevilla y Córdoba (Argentina), `areaServed` solo ES y AR, y `jobTitle` del fundador "Founder, CEO & CTO" (también en `src/content/autores/ruben.json`, que comparte su `@id`). La imagen de cabecera con la app de Repsol se decide en el rediseño.
**Por qué**: las IAs mezclaban versiones distintas de Nimbel (GEO Metrics, 2026-11-11), y la ficha es la fuente única. La FAQ en desplegable se lee mejor que una lista larga de preguntas y respuestas, sin dejar de ser legible para Google y los LLM.

### 2026-11-11 — Se publica una comparativa de empresas con Nimbel dentro
**Qué**: se publica un artículo en el blog que compara empresas de desarrollo de apps y software a medida en España, con Nimbel incluida: `/blog/empresas-desarrolladoras-de-apps-espana`, keyword principal "empresas desarrolladoras de apps en España" (320/mes, KD 27, Semrush). Lo escribe Sol y lo aprueba Rubén. Condiciones: (1) cada dato de cada empresa sale de su web o de un directorio, con su fuente y la fecha, y no se desprestigia a nadie (publicidad comparativa con datos objetivos y comprobables); (2) arriba se dice quién la escribe: "Somos Nimbel Code y estamos en esta lista; estos son los criterios"; (3) se ordena por necesidad, no como ranking absoluto (gran empresa, startup con presupuesto, negocio sin equipo técnico o proyecto a medias); (4) se publica después de aplicar la ficha única (`empresa/ficha-nimbel.md` en la base), para que describa a Nimbel igual que el resto de canales. No compite con /desarrollo-de-apps: esa página es para quien busca contratar ("empresa de desarrollo de apps"); la comparativa, para quien compara proveedores. Sustituye a "No se publica una lista propia de 'las mejores empresas' con Nimbel primera" (2026-11-03, "Listados Top empresas"). El outreach a directorios sigue igual.
**Por qué**: en las preguntas de recomendación que mide GEO Metrics (30 días, a 2026-11-11), Nimbel sale el 0 % de las veces, y Dribba es la más citada (posición media 1,5). Dribba, Q2B Studio y Onabitz publican su propio "Top empresas" y se ponen arriba, y en este nicho esa táctica funciona con las IAs. GEO Metrics también propone una comparativa de empresas en su recomendación de contenido. Las condiciones la hacen defendible: transparente, con datos comprobables y con Nimbel primera solo donde de verdad es la mejor opción. Decidido por Rubén el 2026-11-11 en la sesión de estrategia SEO/GEO; se apunta el mismo día al delegar el trabajo en Sol.

### 2026-11-11 — llms.txt y FAQ en el menú, por el paso 3 del playbook de web
**Qué**: el llms.txt deja de ser de prioridad baja y entra en el plan de Sol y Maribel. Es una página de texto plano en `/llms.txt`, con un enlace discreto en el pie: qué hacemos, para quién, dónde está el equipo, cómo trabajamos, precio por fases, casos y 15 preguntas, con las mismas respuestas que ya da la web. Sigue en pie que responda 200 (o un 404 limpio, nunca 5xx). Además, la FAQ de "Sobre Nimbel Code" entra en el menú principal con el rediseño. Sustituye a la prioridad baja del llms.txt en la entrada de la guía GEO.
**Por qué**: el rediseño toma como referencia un playbook externo sobre webs que venden (resumen en la base, `marketing/referencias/playbook-web-que-vende.md`), y su paso 3 propone las dos cosas. No se espera que el llms.txt suba las citas en IA (Google dice que no hace falta), pero cuesta poco y orienta a los agentes que rastrean la web. La FAQ en el menú hace que el visitante encuentre antes las respuestas.

### 2026-11-11 — Páginas por ciudad: Madrid, Valencia y Sevilla
**Qué**: se crean tres páginas nuevas, `/desarrollo-de-apps-madrid`, `/desarrollo-de-apps-valencia` y `/desarrollo-de-apps-sevilla`, con keyword principal "desarrollo apps <ciudad>". Barcelona sigue en /desarrollo-de-apps. Se hacen dentro del rediseño de la web: Sol escribe los textos, Maribel las diseña con el nuevo sistema de diseño y se montan después de la home (plan en la base, `marketing/estrategia/2026-11-plan-web-sol-y-maribel.md`). Cada página cuenta algo propio y real: en Sevilla, el equipo que está allí; en Madrid y Valencia, el trabajo en remoto, porque no hay clientes allí. No se inventan clientes ni proyectos. Sustituye a "En la web no se crean páginas por ciudad" (2026-11-03, "Listados Top empresas").
**Por qué**: en Search Console (7 días, a 2026-11-11), /desarrollo-de-apps recibe impresiones solo por búsquedas de Barcelona (posición ~50, sin clics), y Rubén quiere abrir más ciudades. Por volumen (DataForSEO, `keyword-map.md`), Madrid y Valencia tienen ~50/mes cada una, la mitad que Barcelona. Sevilla tiene ~20/mes, pero entra porque allí hay equipo. Málaga y Zaragoza (~20) y Bilbao (0) se quedan fuera. Riesgo aceptado: Madrid y Valencia no tienen nada local que contar, así que tienen que diferenciarse por el contenido para no parecer doorway pages.

### 2026-11-11 — Sortlist solo con Athlone y DesignRush descartado de momento
**Qué**: en Sortlist no se ponen las direcciones de otras oficinas (Sortlist pide calle y número): solo la sede de Athlone, y las ciudades donde hay equipo se mencionan en la descripción. DesignRush se descarta de momento.
**Por qué**: decisión de Rubén al delegar los directorios en Sol.

### 2026-11-11 — Verificación de TechBehemoths con enlace de texto
**Qué**: para verificar el perfil de TechBehemoths se pone un enlace de texto ("TechBehemoths", follow) a https://techbehemoths.com/company/nimbel-code en la columna de redes del pie, en todas las páginas. Se usa la URL del perfil, no el código exacto de su pestaña "Text". El perfil también se añade al `sameAs` del schema Organization. Se descartaron el badge con imagen (carga desde `cdn.techbehemoths.com`, les envía la IP de cada visita y obliga a añadirlos como proveedor en /privacidad) y el badge con la imagen alojada en la web (su comprobación podría pedir el código tal cual). Corrige el backlog: la verificación no pide un script, solo un enlace.
**Por qué**: el perfil verificado da más peso a la sugerencia en el Top de Barcelona de TechBehemoths, y el enlace de texto no carga nada de terceros ni cambia la política de privacidad.

### 2026-11-10 — Autor de cada artículo del blog y fin de Cowork en docs/seo
**Qué**: el autor de un artículo es quien lo escribe, y también quien elige su keyword principal. Cada autor tiene una ficha en `src/content/autores/<id>.json` (nombre, cargo y LinkedIn opcional) y el artículo la cita con `author: <id>`. La página muestra la firma ("Por …, cargo · fecha") bajo el H1, que pasa a la cabecera del Markdown (`h1`), y el schema `Article` lleva un `Person` con `@id` `#<id>` (con `ruben` se funde con el founder del @graph global). Además, `docs/seo/` deja de editarse desde Claude Cowork: todo se hace desde Claude Code. Sustituye a la parte de Cowork de "docs/seo/ es la fuente única de verdad" (2026-10-28).
**Por qué**: el autor visible con cargo y fecha es una regla del plan del blog (E-E-A-T), y las fichas evitan repetir datos y preparan la página de autor del backlog. Cowork se deja porque el plugin de la base de conocimiento no funciona allí.

### 2026-11-07 — Animaciones de los artículos con Remotion, exportadas como vídeo
**Qué**: el artículo /blog/base-de-datos-vectorial lleva una animación del flujo de RAG en cuatro pasos (datos → vectores → búsqueda en PostgreSQL → respuesta de la IA), con los colores y las fuentes de la web. Se hace con Remotion (`remotion/`, dependencia de desarrollo fijada en 4.0.538), se exporta a `public/assets/blog/` como MP4 en bucle (~290 KB) más una portada WebP (`pnpm video:render`) y se incrusta en el Markdown con `<video autoplay muted loop playsinline>` y `aria-label`. Se descartaron el reproductor de Remotion en vivo (más de 100 KB de JS por visita) y el GIF/WebP animado (más peso con la misma calidad). Solo MP4: el WebM pesaba más.
**Por qué**: el artículo necesitaba apoyo visual sin perder velocidad de carga. Licencia: Remotion es gratis para organizaciones de hasta 3 personas, y los freelances cuentan si trabajan en el proyecto de Remotion; Nimbel tiene 2 personas en nómina, así que en principio entra en la licencia gratuita mientras ningún colaborador externo opere el proyecto `remotion/`. Licencia gratuita confirmada por Rubén el 2026-11-10.

### 2026-11-07 — Se crea el blog en /blog/
**Qué**: sección de blog solo en español. Índice en `/blog/` (listado por fecha, sin keyword principal, indexable, como las páginas de caso) y artículos en `/blog/<slug>/`, escritos en Markdown en `src/content/blog/es/` (colección `blog`, mismo esquema que `casos`) y pintados con `BlogPostPage.astro`, que reutiliza el bloque visual de las páginas de caso. Schema por artículo: `Article` con author → Rubén (`#ruben`, el founder del @graph global), `FAQPage` generado desde la sección "Dudas frecuentes" del propio Markdown y `BreadcrumbList` (Inicio > Blog > artículo). Enlace "Blog" en el menú y en el footer, solo en español. Primer artículo: /blog/base-de-datos-vectorial (antes previsto en `/base-de-datos-vectorial`). Los próximos artículos (p. ej. externalizar desarrollo de software) irán también bajo `/blog/`.
**Por qué**: agrupar los artículos y separarlos de las páginas de servicio; una colección de Markdown hace que publicar un artículo nuevo sea añadir un archivo, sin tocar las páginas de caso.

### 2026-11-07 — Keyword principal del artículo RAG: "base de datos vectorial"
**Qué**: el artículo de RAG con PostgreSQL (`borradores/rag-con-postgresql.md`) tiene como keyword principal "base de datos vectorial" (260/mes en DataForSEO, KD 32 en Semrush). Secundarias: pgvector, búsqueda semántica y "que es una base de datos vectorial"; "RAG con PostgreSQL" se mantiene como concepto del texto. El artículo se llama por la keyword: slug `/base-de-datos-vectorial` (antes `/rag-con-postgresql`), title y H1 empiezan por "Base de datos vectorial", y la entradilla define el término antes de dar la tesis. Se descartan "vectorización" (880/mes, pero la SERP es de diseño gráfico: vectorizar imágenes) y "embeddings" (720/mes, público de desarrollo o de ML y SERP mezclada en inglés).
**Por qué**: es la tesis del artículo ("no hace falta una base de datos vectorial aparte"); en la SERP rankea una empresa de desarrollo pequeña (10code.es, puesto 3) y el AI Overview ya cita pgvector. Es una excepción consciente al criterio de evitar "qué es": el artículo busca autoridad y citas en IA, no captación directa, porque ninguna keyword del tema la busca el cliente de Nimbel.

### 2026-11-07 — DataForSEO como fuente de datos de keywords; mercado España
**Qué**: los datos de keywords se sacan de la API de DataForSEO (pago por uso, saldo sin caducidad) consultada desde Claude Code por MCP, en lugar de Semrush. Las reglas de gasto están en `CLAUDE.md` (sección "DataForSEO"). El mercado sigue siendo solo España y español; Argentina y otros países se plantearán más adelante como estrategia aparte.
**Por qué**: Semrush es caro para Nimbel y el plan gratuito corta la investigación a medias (2026-11-07: sin datos de "embeddings" para el artículo de RAG). Abrir más mercados ahora dispersaría el trabajo.

### 2026-11-06 — El enlace a Roger Guerrero Plana pasa a una sección de la home
**Qué**: la home (ES y EN) añade la sección "Colaboradores", entre Equipo y Contacto, con una ficha: imagen, nombre enlazado a `https://rogerguerreroplana.com`, etiqueta "Partner" y descripción. Componente `Collaborators.astro`, con la fila título | texto de "¿Para quién es?" y el círculo de Testimonios; el texto vive en `es.ts` y `en.ts` (`collaborators`). Mientras Roger no envíe su foto (cuadrada, 800×800 px), el círculo muestra sus iniciales. Se quita el bloque de "Sobre Nimbel Code". Sustituye a la ubicación de la entrada siguiente.
**Por qué**: Rubén vio flojo el bloque de texto en una página interna frente a lo que Roger nos da en su home: sección propia, logo, etiqueta "Partner" y descripción. Se valoró una octava tarjeta en Equipo y se descartó, porque Roger no es parte del equipo.

### 2026-11-06 — Enlace recíproco con Roger Guerrero Plana en "Sobre Nimbel Code"
**Qué**: "Sobre Nimbel Code" (ES y EN) añade, después de la FAQ, un bloque "Colaboradores" con una ficha de texto: nombre enlazado a `https://rogerguerreroplana.com` y su descripción en tercera persona (él la envió en primera). El enlace es follow (`rel="noopener"`), sin logo ni foto. El texto vive en `es.ts` y `en.ts` (`about.collaborators`), así que un colaborador nuevo es una entrada más en la lista. No es una página nueva: no necesita keyword.
**Observado** (2026-11-06): Roger enlaza a `https://www.nimbel.net` desde la sección "Colaboradores" de su home, en español y en inglés, con el logo (alt "Nimbel Code") y sin `nofollow`.
**Por qué**: Rubén eligió esta página frente a una sección en la home (una sola ficha en la página de conversión) y una columna en el footer (un enlace recíproco en todas las páginas parece más artificial). El intercambio no es simétrico: él enlaza desde su home y nosotros desde una página interna.

### 2026-11-03 — Se quita HubSpot de la web
**Qué**: se elimina el script de seguimiento de HubSpot (`js.hs-scripts.com/51196399.js`) de `Layout.astro`. La web deja de poner las cookies `__hstc`, `hubspotutk`, `__hssrc` y `__hssc`, y la política de privacidad queda correcta sin cambios. No se pone banner de cookies.
**Calendly** (comprobado el 2026-11-03 en nimbel.net): el widget muestra su propio banner de cookies dentro del iframe, con "Rechazar todas", "Aceptar todas" y "Configuración de cookies". Las cookies opcionales dependen de ese banner, así que no hace falta uno nuestro.
**Por qué**: HubSpot ponía cookies sin consentimiento y la política no lo mencionaba. Las alternativas (banner de HubSpot o banner propio) obligaban a reescribir la política y a meter un banner por un seguimiento que no compensa. Es coherente con no instalar GA4 para no necesitar banner.

### 2026-11-03 — Listados "Top empresas": directorios sí, listas de competidores no
**Qué**: el outreach para aparecer en los listados "Top empresas desarrolladoras de apps" se centra en directorios con ranking (Clutch, GoodFirms, TechBehemoths, DesignRush, Sortlist), no en los artículos "Top 10" de blogs. Ubicaciones: la sede sigue siendo Athlone y se añaden como ubicaciones adicionales todas las ciudades con equipo real (Barcelona/Ripollet, Sevilla, Córdoba-Argentina), no solo Barcelona. En la web no se crean páginas por ciudad (se vería forzado, como la sección de Barcelona que se quitó); las ubicaciones del equipo se dicen como dato en "Sobre Nimbel Code" y en el schema. Sin campaña de reseñas: Rubén ya las pidió para Google y no quiere insistir; se piden solo en momentos naturales.
**Observado** (búsqueda, 2026-11-03): los "Top 10 empresas de desarrollo de apps en España" en español los publican competidores que se ponen primeros (Onabitz, abr 2026; Dribba, 2026; Q2B Studio), sin proceso de inclusión. Las búsquedas por ciudad devuelven sobre todo directorios (Clutch, GoodFirms, TechBehemoths, DesignRush, Sortlist). La lista "Top" de TechBehemoths para software a medida en Barcelona tiene solo 4 empresas y acepta sugerencias.
**Por qué**: un competidor no tiene motivo para incluirnos, y la guía GEO da más peso a las menciones en fuentes de terceros que las IAs ya consultan para esta categoría (directorios y reseñas para servicios B2B, guía 6.9.4). No se publica una lista propia de "las mejores empresas" con Nimbel primera: es lo que hacen los competidores, pero no es honesto.

### 2026-11-03 — Contraste con la Guía de SEO para IAs (GEO Metrics, octubre 2026)
**Qué**:
- **FAQ**: la regla "una sola FAQ en toda la web" pasa a **"cada pregunta tiene una sola respuesta en la web"**. Los artículos nuevos (/cuanto-cuesta-crear-una-app, /externalizar-desarrollo-software) pueden llevar un bloque corto de dudas (3–5, respuesta en ≤3 líneas) si no repite preguntas de la FAQ de "Sobre Nimbel Code". La home y /desarrollo-de-apps no cambian. Sustituye a la regla de la entrada "Una sola FAQ en la web" (2026-10-28).
- **Autoría**: los artículos se firman por Rubén, con página de autor y schema `Person` (sameAs LinkedIn) enlazada a la Organization.
- **Prompt Universe**: el keyword map se complementa con prompts de IA clasificados en Descubrimiento, Comparación y Validación (`keyword-map.md`), dados de alta en GEO Metrics. Prioridad: marca y validación, luego comparación; informacionales al final.
- **Densidad sobre extensión**: en páginas nuevas no se fija un número de palabras; se mide por datos concretos y respuestas directas (respuesta en las primeras líneas de cada H2).
- **Coherencia de entidad**: la og-image ("SOFTWARE A MEDIDA PARA SALUD") contradice la web generalista; se cambia.
- **Medición**: se añaden el informe Generative AI de GSC, Bing Webmaster Tools (AI Performance), el canal de asistentes de IA en GA4 y la pregunta "¿cómo nos encontraste?" en Calendly. Posición en Google y citas en IA se miden por separado.
- **Prioridades que suben**: /cuanto-cuesta-crear-una-app (páginas de precio con cifras en HTML) y el outreach a listados "Top empresas…" (menciones de terceros).
- **Se mantiene**: una keyword por URL, casos sin keyword, robots.txt sin bloquear bots de IA, schema como higiene, web generalista.
- **llms.txt**: opcional y de prioridad baja. Si existe, debe responder 200; si no, un 404 limpio (nunca 5xx ni redirección rota).
**Por qué**: la guía (datos a 2026-10-07) aporta prácticas útiles para GEO, pero la escribe el CEO de GEO Metrics y se contradice (llms.txt "obligatorio" en 2.3 y "no es un problema no tenerlo" en el Mito 1; FAQ en cada pieza en 5.8.2 frente a "el FAQ schema no es palanca" en el Mito 4). Se adopta lo que tiene evidencia o coste bajo; la regla de FAQ se ajusta a su motivo original (evitar respuestas distintas a la misma pregunta).

### 2026-11-03 — Privacidad corregida
**Qué**:
- El script de seguimiento de HubSpot sigue en `Layout.astro` y pone cookies (`__hstc`, `hubspotutk`, `__hssrc`, `__hssc`) sin banner de consentimiento. Se quitó y se restauró: Rubén decide qué hacer (quitarlo, banner de HubSpot o banner propio).
- `/privacidad` (ES y EN): tuteo en lugar de voseo; fuera la mención al formulario de contacto (no existe: el contacto es email, teléfono y Calendly); apartado 6 con los proveedores reales (Vercel, Google Fonts, Calendly, GeoMetrics) y transferencias fuera del EEE; fecha noviembre de 2026.
- GeoMetrics (script `llmometrics.b-cdn.net/metric.js`, revisado el 2026-11-03): no usa cookies ni almacenamiento; solo envía datos cuando la visita viene de un asistente de IA (URL, referer, resolución y idioma) a `api.geometrics.app`.
**Pendiente**: revisión del texto por un abogado; valorar alojar las fuentes en local para no enviar la IP a Google.
**Por qué**: la política decía "sin cookies ni seguimiento" y la web cargaba HubSpot. Mientras HubSpot siga, la política no lo menciona: hay que resolverlo.

### 2026-11-02 — Las páginas de caso no llevan keyword principal; caso FAMBA en inglés
**Qué**:
- Las páginas de caso (`/casos/<slug>/` y `/en/cases/<slug>/`) son prueba social: no llevan keyword principal en `keyword-map.md`. Es una excepción a "toda página nueva necesita una keyword principal". Sustituye a la propuesta "travel health app development" para el caso FAMBA en inglés.
- Se publica el caso FAMBA en inglés en `/en/cases/famba/`, traducción fiel del español. Los casos pasan a `src/content/casos/<es|en>/` y las dos rutas comparten `CasePage.astro`; hreflang en las dos direcciones cuando existe la traducción.
- Enlaces en inglés activados: "FAMBA case" en el footer, "View case" en el carrusel, la FAQ de salud de "About Nimbel Code" y "See the FAMBA case" en el texto de /desarrollo-de-apps (este último se verá cuando la página en inglés exista).
- NewsUp no tenía página de caso en ningún idioma. Se escribe un borrador (`borradores/caso-newsup.md`) con lo publicado, lo confirmado por Rubén y la ficha de Notion; se publica en los dos idiomas cuando Rubén lo apruebe.
**Por qué**: el footer en inglés no enlazaba al caso FAMBA porque solo existía en español. Asignar keywords sin volumen a los casos sería inventar; Rubén eligió que no lleven.

### 2026-11-02 — El inglés de la home dice lo mismo que el español
**Qué**: revisión de todo el texto ES ↔ EN (el español es el maestro). Se corrigen los 4 textos en inglés que decían otra cosa:
- Title de /en: "Custom Software Development in Barcelona | Nimbel Code" (antes "Nimbel Code | Custom AI Software Development · Barcelona"). Lleva la keyword exacta de /en, "custom software development barcelona" (posición 4 en GSC). Sustituye a "El title y la meta de /en no cambian" (2026-11-01).
- Meta de /en: traducción de la española ("…web and mobile apps with integrated AI. You focus on your business; we take care of the technology. Barcelona.").
- H2 de Servicios: "Custom software development, with AI where it adds value.", resaltando "AI" y "Custom", como el español resalta "IA" y "a medida".
- Testimonio de Jose Muñoz: "Famba had gone years without working the way we needed", fiel a "llevaba años sin funcionar como necesitábamos".
- En el español, "PRESENCIA EN PAISES" pasa a "PAÍSES".

Lo que sigue solo en español son las páginas `/desarrollo-de-apps/` y `/casos/famba/` y los enlaces que apuntan a ellas (situación del fundador, FAMBA en /desarrollo-de-apps, FAQ de salud, "Ver caso" del carrusel y "Caso FAMBA" del footer). Se crean en inglés cuando Rubén apruebe sus keywords; propuestas sin validar: "app development company barcelona" para /en/app-development/ y, para el caso FAMBA, "travel health app development" o no asignar keyword a las páginas de caso.

Fuera de esta revisión, pendiente de Rubén: la privacidad en español usa voseo, y en los dos idiomas menciona un formulario de contacto que no existe y dice que no hay seguimiento, aunque la web carga el script de llmometrics.
**Por qué**: el inglés tiene que decir lo mismo que el español (decisión del 2026-11-01). Rubén eligió corregir ya los textos y dejar las páginas nuevas para cuando tengan keyword aprobada.

### 2026-11-01 — Se publica /desarrollo-de-apps
**Qué**:
- Página nueva `/desarrollo-de-apps` con el borrador aprobado: title, meta y H1 del borrador; schema `WebPage` + `BreadcrumbList` (Inicio > Desarrollo de apps). Componente `AppDevelopmentPage.astro`, con el patrón de "Sobre Nimbel Code": texto en `es.ts` y traducción en `en.ts` (clave `appDevelopment`), protegido por el test de paridad.
- Sin diseño nuevo: reutiliza los bloques de "¿Para quién es?" (cabecera, fila título | texto y cuadrícula de casos), "Cómo trabajamos" (pasos y tarjetas de precio y propiedad) y la sección de Contacto como CTA.
- Los testimonios se leen de la sección de Testimonios por id, para no duplicar el texto.
- Solo en español por ahora. El texto en inglés ya está escrito en `en.ts`, pero la ruta /en no se genera hasta asignarle keyword. Mientras tanto, los enlaces sin página en inglés (caso FAMBA y enlace desde la home) llevan `href` vacío y se pintan como texto.
- Enlace desde la home: la situación del fundador de "¿Para quién es?" termina con "Más sobre nuestro desarrollo de apps", con el ancla en "desarrollo de apps".
- NewsUp mantiene la descripción publicada en el carrusel; queda pendiente decidir si pasa a la de Notion.
- El paso "Evolución y mantenimiento" no repite "Si algún día prefieres que lo mantenga otro equipo, puedes hacerlo", que ya está en la tarjeta "El código y los datos son tuyos".
**Por qué**: Rubén aprobó el borrador y eligió montar la página con el patrón de "Sobre Nimbel Code" (se valoró un fichero solo en español, como el antiguo `home-es.ts`). Así el inglés queda listo para publicarse en cuanto tenga keyword.

### 2026-11-01 — Datos del borrador de /desarrollo-de-apps
**Qué** (confirmado por Rubén):
- El MVP es la primera fase y suele partir de 10.000 €, la misma cifra ya publicada.
- El lanzamiento incluye la puesta en producción y la publicación en App Store y Google Play. El acompañamiento con los primeros usuarios no entra en ese presupuesto.
- Se publica un plazo: un MVP suele estar listo en unos 3 meses.
- FAMBA y NewsUp se cuentan como rescates (NewsUp pasó por varios proveedores antes de llegar a Nimbel). Analysta e Innocard los hizo Nimbel desde cero.
- /desarrollo-de-apps no lleva bloque de FAQ: se mantiene la regla de una sola FAQ en la web y las dudas se responden como texto normal en cada sección.
- Todo el contenido de la web en español tendrá versión en inglés igual, incluidos /desarrollo-de-apps y el caso FAMBA. Sustituye a "solo existe el texto en español y no se inventa la traducción" (caso FAMBA, 2026-10-28) y a "solo se pinta en ES" (secciones nuevas de la home, 2026-10-28).
- Aplicado en la home: "¿Para quién es?" y "Cómo trabajamos" se pintan también en /en. Su texto pasa de `home-es.ts` (borrado) a `es.ts` y `en.ts`, para que el test de paridad obligue a mantener los dos idiomas iguales (se valoró un `home-en.ts` paralelo y Rubén eligió este camino). El title y la meta de /en no cambian. El caso FAMBA en inglés y /desarrollo-de-apps en inglés esperan a tener keyword asignada.
**Por qué**: resolver los [PENDIENTE] del borrador con datos reales. Contar FAMBA y NewsUp como rescates es fiel a sus testimonios y conecta con la situación "Tu proveedor anterior desapareció" de la home.

### 2026-11-01 — "¿Para quién es?" se queda con 4 situaciones
**Qué**: se quita "Necesitas una aplicación propia y no quieres montar un equipo técnico" de la home y de `contenido-home.md`. La situación del fundador (añadida el 2026-10-29) sigue la primera y sin cambios de texto; detrás, en el orden de antes, Excel y herramientas que no se hablan, proveedor que desapareció e IA. El H1 y el title no cambian.
**Por qué**: las dos situaciones le hablaban al mismo cliente (quiere una app propia y no tiene equipo técnico). Se valoró reescribir también el texto del fundador, y Rubén eligió solo quitar la repetida. Con 4 situaciones la cuadrícula vuelve a ser de 2×2.

### 2026-11-01 — Validación de la hipótesis del cliente fundador
**Qué**:
- El borrador /socio-tecnologico pasa a ser /desarrollo-de-apps, con keyword principal "empresa de desarrollo de apps" (borrador en `borradores/desarrollo-de-apps.md`). "Socio tecnológico" se queda como mensaje en el copy.
- La página de precio pasa a /cuanto-cuesta-crear-una-app (más volumen que "cuánto cuesta software a medida", que queda como secundaria en la misma URL). Sustituye a /cuanto-cuesta-software-a-medida.
- La home MANTIENE "desarrollo de software a medida" como keyword principal (grupo de ~3.400/mes, KD 5–12, recién aplicado). /desarrollo-de-apps cubre el grupo de apps sin canibalizar. Revisar en 6–8 semanas con Search Console (en `backlog.md`, 2026-12-20): si /desarrollo-de-apps trae impresiones y contactos y la home no, replantear el foco de la home.
**Observado en Semrush** (España, 2026-11-01):
- El cliente fundador busca "empresa de desarrollo de apps" (grupo de ~1.700/mes, KD 11–32, CPC 10–18 $ → intención de compra) y "cuánto cuesta crear una app" (210, KD 18). No busca "socio tecnológico", "CTO externo" ni "MVP" (volumen casi nulo).
- appsociados.com: 0 keywords en el top 100 de Google España; su nº1 en "socio tecnológico para desarrollar mi app" es en una búsqueda sin volumen.
- grupozas.com: ~1.300 visitas/mes estimadas, pero vienen de SEO local de marketing ("seo alicante", "diseñador web benidorm"), no de sus artículos de software. Sus temas de blog sirven como ideas, no como prueba de tráfico.
**Por qué**: las keywords de la entrada "Corrección del cliente objetivo" (2026-10-29) eran hipótesis. Con los datos, las páginas nuevas se orientan a las palabras con las que el cliente fundador busca de verdad, y la home no se toca hasta tener datos de Search Console.

### 2026-10-29 — Corrección del cliente objetivo
**Qué**: el cliente principal (dato real) es un profesional con un negocio o con conocimiento de su sector que quiere lanzar su propia app o SaaS y no tiene equipo técnico. Todos los clientes actuales son así (FAMBA, NewsUp, Analysta, Innocard). El cliente secundario es la empresa que quiere digitalizar su operativa. Las keywords que salen de esto son hipótesis hasta validarlas en Semrush (sección "Hipótesis" de `keyword-map.md`): no se crean páginas públicas basadas en ellas. La home mantiene por ahora el H1 "para empresas"; se revisará si la página de socio tecnológico funciona. Ya se hace en la home: una situación nueva, en primer lugar, en "¿Para quién es?" para este cliente.
**Observado en Google** (google.es, 2026-10-28):
- "desarrollar mi idea de app sin conocimientos": SERP dominada por no-code y constructores de apps con IA (Flexygo, Adalo, Emergent, vídeos "crear app sin saber programar"). Intención "hazlo tú mismo": EVITAR "sin saber programar", "sin conocimientos" y "sin código".
- "socio tecnológico para desarrollar mi app": nº 1 appsociados.com, con el mensaje "Tú pones la idea y el conocimiento del sector… nosotros la programación y tecnología". También aparecen listados "Top 10 empresas desarrolladoras de apps en España". Intención correcta.
**Por qué**: el criterio anterior ("responsables de empresa que quieren delegar la tecnología") describía solo al cliente secundario. El posicionamiento y las keywords tienen que hablarle a quien de verdad contrata.

### 2026-10-29 — El bloque sobre SaaS pasa al final de "¿Para quién es?"
**Qué**: el H3 "¿Cuándo conviene un software a medida frente a uno estándar (SaaS)?" sale de la intro y va después de las 4 situaciones, en una fila con el título a la izquierda y los dos párrafos a la derecha, como las filas de Servicios. La intro vuelve a sus dos párrafos. El texto no cambia. Sustituye a la ubicación de la entrada siguiente.
**Por qué**: entre los párrafos de la intro se formaba un bloque de texto de cuatro párrafos seguidos, ilegible, antes de llegar a la cuadrícula. Se valoró pasarlo a dos columnas con puntos o recortarlo, y Rubén eligió moverlo sin cambiar el texto.

### 2026-10-28 — La home responde cuándo conviene software a medida frente a un SaaS
**Qué**: "¿Para quién es?" añade un H3, "¿Cuándo conviene un software a medida frente a uno estándar (SaaS)?", con dos párrafos: cuándo conviene un programa estándar (procesos iguales a los de cualquier empresa) y cuándo conviene el software a medida (proceso diferencial, herramientas que deben compartir datos, operativa forzada por las limitaciones del programa, licencias que crecen por usuario), y que a menudo lo mejor es combinar las dos cosas. Va entre los dos párrafos de la intro, para que "Si te reconoces en alguna de estas situaciones" siga justo encima de la cuadrícula. Es texto normal, no una FAQ.
**Por qué**: la home comparaba estándar y a medida en una frase, pero no respondía cuándo conviene cada uno, que es la duda de quien compara. Con la pregunta como título, buscadores y LLM la identifican mejor como respuesta. Decir también cuándo no conviene el software a medida da credibilidad ante un cliente que quiere delegar.

### 2026-10-28 — Se quita de la home la sección "Desarrollo de software a medida en Barcelona"
**Qué**: la home en español se queda con "¿Para quién es?" y "Cómo trabajamos". Se borran el componente `Barcelona.astro`, su texto en `home-es.ts` y su apartado en `contenido-home.md`. "empresa desarrollo software barcelona" queda apoyada solo en el title de la home ("… en Barcelona"); pasa a "En curso" en el keyword-map. Sustituye a la parte de Barcelona de la entrada siguiente.
**Por qué**: el texto se veía forzado (repetía "Barcelona" y contaba que visitamos la ciudad). Se valoró reescribirlo o dejar una frase en otra sección, y Rubén eligió quitarlo.

### 2026-10-28 — Secciones nuevas de la home montadas con los bloques visuales actuales
**Qué**: vuelven a la home en español "¿Para quién es?" (después de Servicios), "Cómo trabajamos" (después de Proyectos) y "Desarrollo de software a medida en Barcelona" (antes de Contacto), con el texto exacto de `contenido-home.md`. No se crea diseño nuevo: se reutilizan piezas de la web. Los H2 son en Mortend, como el de Servicios (después se alinearon a la izquierda, junto con la intro y la sección de Equipo). "¿Para quién es?" va en fondo oscuro, con las 4 situaciones en una cuadrícula de 2×2 y la flecha naranja de Servicios. Los pasos de "Cómo trabajamos" usan las filas de Servicios, con el número en lugar de la flecha. "Precio y plazos" y "Tu software es tuyo" van en las tarjetas de Testimonios. Barcelona es un H2 con su párrafo, con el contenedor de Equipo. Componentes `Audience.astro`, `Process.astro` y `Barcelona.astro`; el texto vive en `src/i18n/home-es.ts` y solo se pinta en ES. Sin FAQ en la home.
**Por qué**: Rubén descartó proponer direcciones visuales nuevas: las secciones tienen que encajar con el diseño actual y no verse como un pegote. La diseñadora las rediseñará más adelante; cada sección es un componente aislado, fácil de sustituir.

### 2026-10-28 — Secciones nuevas de la home retiradas hasta tener diseño
**Qué**: se eliminan de la web y del código las secciones "¿Para quién es?", "Cómo trabajamos" y "Desarrollo de software a medida en Barcelona". El texto aprobado se guarda en `contenido-home.md`. Se mantiene publicado lo que no depende de ese diseño: el title, el H1, el subtítulo, el H2 y la meta de la home; los alt; y la FAQ de "Sobre Nimbel Code" con el precio por fases y Barcelona.
**Por qué**: la implementación no tenía dirección visual y se veía mal. El contenido se rediseña partiendo de cero, con la diseñadora o con una skill de diseño, sin reutilizar esa versión. Las entradas anteriores sobre la home ampliada y sobre la FAQ única siguen valiendo en cuanto al contenido, no en cuanto a la implementación.

### 2026-10-28 — Una sola FAQ en la web: la de "Sobre Nimbel Code"
**Qué**: se quita la FAQ de la home y su FAQPage. Su contenido pasa a texto normal en las secciones de la home: "¿qué es?" es ahora la introducción de "¿Para quién es?"; "proveedor que desaparece" va en el punto de Rescate; "Precio y plazos" y "Tu software es tuyo" van como H3 al final de "Cómo trabajamos"; Barcelona pasa a una sección H2 propia, "Desarrollo de software a medida en Barcelona", antes de Contacto. En la FAQ de "Sobre Nimbel Code" (ES/EN), "¿Dónde está?" añade el equipo en Barcelona y las reuniones en persona. La home queda en ~1.280 palabras. Sustituye a la parte de FAQ de la entrada "Home ampliada".
**Por qué**: dos bloques de "Preguntas frecuentes" con temas solapados (precio, ubicación) y textos distintos se veían desordenados, para el visitante y para los LLM. Regla: la web tiene una sola FAQ (la de la empresa, en "Sobre Nimbel Code") y el resto de páginas cuentan su contenido como texto normal.

### 2026-10-28 — Home ampliada: ¿Para quién es?, Cómo trabajamos y FAQ
**Qué**: la home en español pasa de ~640 a ~1.370 palabras con tres secciones H2: "¿Para quién es?" (después de Servicios), "Cómo trabajamos" (5 pasos, después de Proyectos) y "Preguntas frecuentes" (6 preguntas, antes de Contacto). El FAQPage se añade al `@graph` con el mismo texto que se ve en la página. El contenido vive en `src/i18n/home-es.ts`, fuera de `es.ts`, y solo se pinta en ES: /en no cambia. También: el alt del logo pasa a "Hospital Clínic de Barcelona" (ES y EN) y la flecha del CTA del hero lleva `aria-hidden`. Las 9 imágenes con `alt=""` son decorativas (copia del marquee e iconos de contacto) y se quedan así.
**Por qué**: la home tenía poco contenido para sus keywords principales y no respondía las dudas del cliente objetivo (precio, propiedad, proveedor que desaparece). Los pasos del proceso, el presupuesto cerrado por fase y el registro de horas los confirmó Rubén. No se publica ningún plazo porque no hay un dato que dar.

### 2026-10-28 — Precio: 10.000 € como primera fase, no como precio del proyecto
**Qué**: en la web, el precio se presenta como "una primera fase suele partir de 10.000 €", con trabajo por fases y presupuesto cerrado en cada una. Se alinea también la FAQ de "Sobre Nimbel Code" (ES y EN), que decía "Los proyectos parten de 10.000 €". El dato de que la mayoría de clientes hoy invierte ≥100.000 €/año no se publica en la home.
**Por qué**: "proyectos desde 10.000 €" restaba credibilidad (nadie se cree que se haga todo eso por ese precio), pero quitar la cifra asustaba o no filtraba. Es real que la mayoría de clientes empezó con una primera fase de ese tamaño. La cifra de 100.000 €/año puede asustar sin contexto; se valora para la página /cuanto-cuesta-software-a-medida. Conviene que el precio diga lo mismo en todas las páginas, para buscadores y LLM.

### 2026-10-28 — "empresa desarrollo software barcelona" se asigna a la home
**Qué**: la keyword va a `/`, sin página local. La home lo refuerza con el title ("… en Barcelona") y la FAQ "¿Trabajáis con empresas de Barcelona?" (clientes de Barcelona que ya aparecen en la web, equipo allí y reuniones en persona).
**Por qué**: según Semrush, las búsquedas con ciudad tienen intención de compra; sin ciudad, a veces son informativas. Limitación: la ficha de Google Business no tiene dirección, así que por "barcelona" se compite en resultados orgánicos, no en el map pack.

### 2026-10-28 — Home: title, H1, subtítulo, H2 y meta aplicados
**Qué**: en la home en español: title "Desarrollo de software a medida en Barcelona | Nimbel Code"; H1 "Desarrollo de software a medida para empresas"; el H1 anterior pasa a subtítulo (párrafo) con "Sin licencias, sin dependencias."; H2 de servicios "Desarrollo de software a medida, con IA donde aporta." (resaltados "a medida" e "IA"); meta description nueva. og:* y twitter:* salen del mismo title y description. El title y la meta de /en no se tocan, pero su hero sigue el mismo patrón: H1 "Custom software development for businesses" y subtítulo "We transform your ideas into your own digital assets. No licenses, no dependencies.".
**Por qué**: el H1 pasa a contener las keywords de la home. En /en se tradujo también el H1 porque, si no, el subtítulo repetía la frase del H1. "en Barcelona" en el title adelanta en parte la decisión pendiente sobre "empresa desarrollo software barcelona".

### 2026-10-28 — docs/seo/ es la fuente única de verdad
**Qué**: las decisiones SEO viven en `docs/seo/` (este registro, `keyword-map.md` y `backlog.md`). La carpeta la leen y escriben tanto Claude Code como un proyecto de Claude Cowork.
**Por qué**: evitar decisiones repartidas entre conversaciones, memorias y commits, y que las dos herramientas trabajen sobre los mismos datos.

### 2026-10-28 — Auditoría de la home y cambios on-page
**Qué**: el title ya contenía "software a medida", pero el H1 no tenía keyword, la home tiene ~630 palabras de contenido y no hay páginas de servicio separadas. Se decide cambiar en la home el title, el H1 (con el H1 anterior como subtítulo), el H2 de servicios y la meta description.
**Por qué**: alinear la home con sus dos keywords principales ("desarrollo de software a medida" y "software a medida para empresas") empezando por los elementos on-page de más peso.

### 2026-10-28 — La web se mantiene generalista
**Qué**: no se reposiciona la web hacia el sector salud por ahora.
**Por qué**: la apuesta por salud aún no está validada en ventas.

### 2026-10-28 — Keywords descartadas: "agency" y "programa para clínica"
**Qué**: se descartan "agency" y "programa para clínica" (y sus variantes, ~1.650/mes).
**Por qué**: "agency" tiene 1 sola aparición en GSC, es genérica, sin intención y no es nuestro posicionamiento. "programa para clínica" tiene intención de SaaS estándar (dental, gratis, gestión), no de desarrollo a medida; pendiente confirmarlo mirando la SERP.

### 2026-10-28 — Cliente objetivo y criterio de selección de keywords
**Qué**: el cliente objetivo son responsables de empresa que quieren delegar la tecnología, no perfiles técnicos que quieren hacerlo ellos mismos. Se priorizan keywords con "empresa", "cuánto cuesta", "externalizar", "mantenimiento" y "rescate"; se evitan "gratis", "tutorial", "cómo hacer" y "qué es". Una keyword principal por URL.
**Por qué**: atraer búsquedas con intención de contratar, no de aprender a hacerlo, y no canibalizar URLs entre sí.

## Historial previo (reconstruido de git)

Decisiones aplicadas antes de crear este registro. El detalle está en cada commit.

### 2026-10-28 — Página de caso /casos/famba (e3fab13)
**Qué**: content collection `casos` (`src/content/casos/*.md`), solo en español, con schema Article y BreadcrumbList (Inicio > Casos `/#casos` > FAMBA). Enlazada desde el carrusel de la home, la FAQ de salud y el pie.
**Por qué**: solo existe el texto en español y no se inventa la traducción; la colección deja los siguientes casos en un `.md` más. Todavía no hay índice `/casos/`.

### 2026-10-28 — Script de tracking LLM en el head (e829b7e)
**Qué**: script de llmometrics en el head de todas las páginas.

### 2026-10-26 — Página "Sobre Nimbel Code" con FAQ (9c0b650, PR #4)
**Qué**: `/sobre-nimbel-code` y `/en/about-nimbel-code` con FAQ y schema AboutPage + FAQPage, apuntando a la Organization.
**Por qué**: dar a buscadores y asistentes de IA (GEO) respuestas directas sobre la entidad.

### 2026-10-26 — Ficha de Google sin dirección (a7414a2, 712c87d)
**Qué**: la ficha de Google Business Profile se queda sin dirección, como negocio de área de servicio. Se quita Chile de `areaServed` y el `hasMap` de la location Barcelona en el schema.
**Por qué**: Google no deja cambiar el país de la ficha (bloqueado en España); el schema se alinea con lo que muestra la ficha.

### 2026-10-26 — Schema global @graph con Organization y WebSite (32b89d7, PR #3)
**Qué**: el JSON-LD pasa a Layout.astro como `@graph` con Organization (`https://www.nimbel.net/#organization`) y WebSite. Sustituye al ProfessionalService que solo estaba en la home. Las páginas añaden sus nodos con la prop `graph`.
**Por qué**: una sola entidad con `@id` que cualquier página puede referenciar (la usan FAQPage y Article).

### 2026-10-26 — alt localizados (935de85)
**Qué**: el alt de los logos de clientes sale de la plantilla i18n `clients.logoAlt` ("Logo de {name}"); la copia del marquee lleva `alt=""` y `aria-hidden`. alt localizado también en el hero.

### 2026-10-25 — Datos legales y sameAs (9e58e1a, 2c8179d, 10b7817)
**Qué**: schema con `legalName` "NIMBEL CODE LIMITED" e `identifier` CRO 788569; pie legal en ES/EN con razón social, registro y domicilio social (Athlone). `sameAs` con LinkedIn, GitHub, Instagram, TikTok, Crunchbase, Clutch, GoodFirms y la ficha de Google.

### 2026-10-25 — Sitemap sin privacidad y robots.txt mínimo (3e02896)
**Qué**: `/privacidad` fuera del sitemap. robots.txt mínimo, sin bloques Allow explícitos para bots de IA (se rechazó añadirlos).
**Por qué**: privacidad es noindex.

### 2026-10-24 — og-image provisional (a3a9374)
**Qué**: `public/og-image.png` provisional de 1200x630, con el tagline "SOFTWARE A MEDIDA PARA SALUD".
**Por qué**: hacía falta una imagen por defecto; la definitiva la hará la diseñadora.

### 2026-06-06 — Metadatos y H2 con keywords (ebf4586)
**Qué**: `meta.title` y `meta.description` con keywords en ES/EN, schema ampliado y H2 con keywords. Las páginas de servicios se revirtieron.
**Por qué**: las páginas de servicios esperan a que se defina el alcance real de los servicios.

### 2026-04-15 — Base técnica SEO (93d394a)
**Qué**: base técnica de SEO de la landing. Los requisitos SEO por componente de esa fase están en `SPECS.md`.
