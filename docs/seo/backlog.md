# Backlog SEO — nimbel.net

Las tareas hechas indican el commit donde se aplicaron.

## Alta
- [x] Home: title, H1, subtítulo, H2 y meta description — hecho 2026-10-28
- [x] Ampliar home a ~1.200–1.500 palabras con el texto de `contenido-home.md`, montado con los bloques visuales actuales — hecho (801b393). La diseñadora lo rediseñará; la sección de Barcelona se quitó
- [x] Home: responder cuándo conviene software a medida frente a uno estándar (SaaS) — hecho (9764dfb)
- [x] Home: añadir la situación del fundador (quiere lanzar su app o SaaS sin equipo técnico) en primer lugar en "¿Para quién es?" — hecho (f29fa81)
- [x] Home: quitar la situación "Necesitas una aplicación propia…", que repetía la del fundador — hecho (c0ebb68)
- [x] /en: "Who is it for?" y "How we work", igual que en español — hecho (a25e781)
- [x] /en: title, meta, H2 de Servicios y testimonio de Jose Muñoz, iguales que en español; tilde de PAÍSES — hecho 2026-11-02
- [x] Privacidad: voseo corregido, sin mención a formulario, proveedores listados (Vercel, Google Fonts, Calendly, GeoMetrics) — hecho 2026-11-03. HubSpot quitado de la web — hecho 2026-11-03 (`decisiones.md`, "Se quita HubSpot"). Pendiente: revisión por un abogado; valorar alojar las fuentes en local
- [x] Caso FAMBA en inglés en /en/cases/famba/, con sus enlaces en inglés (footer, carrusel, FAQ de salud y /desarrollo-de-apps) — hecho 2026-11-02, sin keyword principal (las páginas de caso no llevan)
- [ ] /desarrollo-de-apps en inglés (/en/app-development/ propuesto, keyword propuesta "app development company barcelona"): el texto ya está en `en.ts`; falta validar la keyword en Semrush (base de datos en inglés). Al crearla, activar el enlace de la situación del fundador y los hreflang en las dos direcciones
- [x] Publicar /desarrollo-de-apps (borrador aprobado en `docs/seo/borradores/desarrollo-de-apps.md`), con enlace desde la situación del fundador en la home — hecho (9945b02)
- [ ] Página nueva /cuanto-cuesta-crear-una-app (valorar incluir, con contexto: la mayoría de clientes empezó con una primera fase de ~10.000 € y hoy invierte ≥100.000 €/año). Cifras en HTML, respuesta en las primeras líneas y bloque corto de dudas sin repetir la FAQ de "Sobre Nimbel Code" (`decisiones.md`, 2026-11-03)
- [ ] Listados "Top empresas…" (ver `decisiones.md`, 2026-11-03, "Listados Top empresas"). Por orden:
  - [ ] Directorios (Clutch, GoodFirms, Sortlist, TechBehemoths): sede Athlone y, como ubicaciones adicionales, las ciudades donde hay equipo de verdad (Barcelona/Ripollet, Sevilla, Córdoba-Argentina). Misma descripción, servicios y tarifas en todos
  - [x] TechBehemoths: perfil enviado — hecho 2026-11-03 (plan FREE). Descripción propia en inglés (no copiada), sede Athlone, servicios (software a medida 40 %, apps 30 %, web 15 %, IA 15 %), sectores (salud, medios, finanzas, educación) y portfolio con FAMBA, NewsUp, Analysta e Innocard
  - [x] TechBehemoths: importación de reseñas de Google solicitada — 2026-11-03 (3 de las 4, límite del plan FREE; las verifica su equipo antes de publicarlas). Clutch no tiene reseñas que importar
  - [ ] TechBehemoths: valorar el badge verificado (pide poner un script suyo en la web; implica actualizar la política de privacidad)
  - [ ] TechBehemoths: "Suggest a company" en los Top de Barcelona cuando el perfil esté publicado
  - [x] Sortlist: perfil publicado (antes no lo estaba, al 39 %) — hecho 2026-11-03: descripción y tagline en inglés (el resto de idiomas los traduce Sortlist con IA), 6 personas, fundada en 2020, CRO 788569 (Irlanda), idiomas ES/EN/CA, oficina Athlone (se quitó C/ Ramon Turró, ya no existe), trabajo en remoto activado. Otras oficinas: Sortlist pide calle y número; pendiente de decidir si se ponen direcciones reales
  - [ ] DesignRush: valorar
  - Reseñas: no se hace campaña de reseñas (decisión de Rubén, 2026-11-03). Se piden solo en momentos naturales (fin de fase o de proyecto)

## Contenido
- [x] "Sobre Nimbel Code": bloque "Colaboradores" con el enlace a Roger Guerrero Plana, en ES y EN — hecho 2026-11-06 (`decisiones.md`)
- [ ] "Sobre Nimbel Code" y schema Organization: indicar dónde está el equipo (Athlone, Barcelona, Sevilla, Córdoba-Argentina) como dato, sin páginas por ciudad
- [ ] Página de autor de Rubén (schema `Person`, sameAs LinkedIn, enlazada a la Organization) para firmar los artículos
- [ ] Prompt Universe: completar los 10 problemas del cliente × 3 prompts (`keyword-map.md`) y dar de alta en GEO Metrics los prompts propuestos

## Media
- [ ] Artículo /externalizar-desarrollo-software, firmado por Rubén, con tabla comparativa (equipo interno / freelance / empresa externa) y bloque corto de dudas
- [ ] /en orientada a "custom software development barcelona" (en el title desde 2026-11-02; falta trabajarla en H1 y texto)
- [x] Schema Organization: legalName "NIMBEL CODE LIMITED", identifier CRO 788569, sameAs (LinkedIn, Instagram, TikTok, GitHub, Crunchbase, Clutch, GoodFirms) y pie legal — hecho (9e58e1a, 2c8179d, 10b7817)
- [x] Página de caso: FAMBA — hecho (e3fab13)
- [ ] Páginas de casos: NewsUp (borrador en `docs/seo/borradores/caso-newsup.md`, pendiente de revisión de Rubén), Analysta, Innocard. En español y en inglés. Incluir cifras propias siempre que se puedan publicar
- [x] FAQ en "Sobre Nimbel Code" (orientada a GEO) — hecho (9c0b650)

## Técnico
- [x] Search Console: inspeccionar /desarrollo-de-apps y solicitar indexación (el sitemap no hace falta reenviarlo) — hecho 2026-11-02
- [x] alt en todas las imágenes — hecho (935de85)
- [x] Redirección permanente de nimbel.net a [www.nimbel.net](https://www.nimbel.net) — hecho, configurada en Vercel fuera del repo (responde 308, equivalente a 301)
- [ ] Comprobar que OAI-SearchBot, Claude-SearchBot, PerplexityBot y Bingbot reciben 200 (`curl -A "OAI-SearchBot/1.0" -I https://www.nimbel.net/`) y que el firewall de Vercel no bloquea bots de IA
- [ ] llms.txt (opcional, prioridad baja): si se crea, que responda 200; si no, un 404 limpio
- [ ] og-image: quitar "SOFTWARE A MEDIDA PARA SALUD" (contradice la web generalista); avisar a la diseñadora

## Medición
- [ ] Activar el informe Generative AI de Search Console y exportarlo cada mes
- [ ] Bing Webmaster Tools (ya importado desde Search Console en oct 2026): revisar el informe AI Performance (Citation Share, Intents) y que el sitemap esté enviado
- [x] Visitas desde asistentes de IA — decidido 2026-11-03: no se instala GA4 (la web no lo tiene; exigiría banner de cookies y cambiar la política, con HubSpot aún sin resolver). Las visitas que llegan desde ChatGPT, Perplexity, Claude, etc. ya las mide el script de GEO Metrics (verificado, activo). Línea base: 0 visitas desde IA en 30 días. Opcional: Vercel Web Analytics (sin cookies) para ver el origen de todas las visitas
- [ ] Atribución de leads: Calendly gratis no permite preguntas propias. Preguntar al inicio de cada primera llamada "¿Cómo nos encontraste? Si fue con una IA, ¿qué le preguntaste?" y apuntarlo en el CRM (campo "Origen")

## Investigación
Prioridad alta (siguiente sesión con Semrush):
- [ ] Validar en Semrush las keywords de "Sin validar todavía" (`keyword-map.md`)
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
