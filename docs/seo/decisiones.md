# Decisiones SEO — nimbel.net

Registro cronológico, la más reciente arriba. Formato: `### AAAA-MM-DD — título`, qué se decidió y por qué.

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
