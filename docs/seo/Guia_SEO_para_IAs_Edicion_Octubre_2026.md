---
title: "Guía de SEO para IAs"
subtitle: "La capa pagada entra en escena"
edition: "Octubre 2026"
publisher: "GEO Metrics"
language: es
data_as_of: 2026-10-07
description: "Manual técnico y base de conocimiento sobre GEO y SEO para IAs: motores de respuesta, medición, gobierno de bots, ChatGPT Ads (GEM) y regulación."
format: "Markdown (CommonMark con tablas GFM)"
---

**GUÍA DE SEO PARA IAs**

**Edición Octubre 2026**

*La capa pagada entra en escena*

> **APOYO VISUAL · Portada visual**
> ***Descripción para diseño:*** *Composición editorial estilo libro blanco GEO Metrics. Paleta: morados corporativos (#4C1D95, #6B46C1) sobre fondo claro. Elementos: red de nodos semánticos que ahora incluye una tarjeta patrocinada etiquetada ('Sponsored') y un agente de marca sobre el nodo central. Tipografía editorial, no infantil. Subtítulo visual: 'La guía de GEO más completa en español — octubre 2026'.*

**Nicolás Bignú**

CEO de GEO Metrics

# Sobre el autor

**Nico Bignú** es cofundador y CEO de **GEO Metrics**, la plataforma pionera en monitorización y optimización de la visibilidad en motores de respuesta de inteligencia artificial en habla hispana.

Con una trayectoria que combina ciencia y emprendimiento, Nico ha fundado varias startups de IA desde 2020, siempre con el foco puesto en cómo la tecnología puede resolver problemas reales de negocio. En GEO Metrics lidera la visión estratégica y el desarrollo de producto, ayudando a empresas de todo el mundo a adaptarse a la nueva era del SEO.

Su misión es clara: que las marcas no desaparezcan en un entorno donde ya no basta con estar en Google, sino que hay que ser elegidas por ChatGPT, Gemini, Perplexity y los nuevos motores de respuesta — y que ahora, además, también se puede pagar por aparecer.

# Sobre esta edición

Esta es la edición de octubre de 2026 de la Guía de SEO para IAs de GEO Metrics. Recoge el estado de la disciplina a 7 de octubre de 2026: la economía de la citación, la telemetría nativa, el decoupling entre ranking y citación y, sobre todo, lo ocurrido entre junio y octubre. Y lo que ha pasado es grande. Tres cosas reordenan la disciplina:

- **ChatGPT Ads se ha convertido en un canal real.** OpenAI alcanzó 1.000 M USD de run-rate anualizado el 31 de agosto, se vende en más de 60 países y en España está en self-serve desde el 31 de agosto. La guía dedica un capítulo entero (Capítulo 11) al ecosistema pagado del GEO, que ya se llama GEM.

- **La capa orgánica se concentró en fuentes de primera parte.** GPT-5.6 cambió cómo ChatGPT elige qué citar: Reddit perdió el 86% de su cuota en una semana (ago 2026) y las fuentes institucionales ocuparon su sitio. Leer ya no implica citar.

- **Los permisos de crawling se volvieron una decisión de negocio.** Cloudflare introdujo "Accountable" y "Disallow AI Training" el 15 de septiembre. Los agentes quedan bloqueados por defecto en páginas con anuncios. Hay una capa nueva de gobierno de bots.

Además, la Comisión Europea designó a ChatGPT como VLOSE bajo la DSA (31 ago), lo que obligará a OpenAI a publicar un repositorio público de anuncios antes de enero de 2027, Yelp licenció sus 330 M de reseñas a OpenAI (23 jul), MCP se hizo stateless (con una cifra de más de 400 M de descargas mensuales que procede de una fuente secundaria), y el informe Generative AI de Google Search Console quedó disponible para todos los sitios del mundo (31 ago).

**El criterio editorial:** donde existe evidencia empírica con metodología publicada, se presenta; donde hay contradicciones entre fuentes solventes, se exponen las dos; y cuando una cifra procede de una sola fuente o es una estimación, el texto lo dice en la propia frase.

# Cómo usar esta guía

Esta guía es larga, extensa y deliberadamente exhaustiva. Está pensada como una base de conocimiento y un manual técnico de consulta, no como una lectura de una tarde con un café. Nadie necesita leerla de principio a fin: cada capítulo abre con un resumen (TL;DR), las secciones clave cierran con una caja de acción operativa y el índice permite ir directo a lo que hace falta.

**Versión Markdown para tu agente.** Esta guía se distribuye también en formato Markdown descargable, con la misma estructura de capítulos, secciones, tablas y resúmenes. Está pensada para cargarla como fuente de conocimiento en el agente, asistente o sistema de recuperación (RAG) que uses, sea cual sea la plataforma: basta con adjuntar el archivo o indexarlo en tu base de conocimiento. Así, tu agente puede responder preguntas sobre GEO, ChatGPT Ads, medición o gobierno de bots con el contenido de la guía.

En la versión Markdown, los encabezados conservan la misma numeración que aquí (por ejemplo, 6.7 o 11.13), de modo que puedes pedirle a tu agente que responda basándose solo en una sección concreta. Los recuadros se marcan como bloques de cita etiquetados y los espacios reservados para imágenes se mantienen como descripciones.

**Fecha de los datos.** El contenido refleja el estado de la disciplina a 7 de octubre de 2026. El ecosistema cambia rápido: si ha pasado tiempo desde esa fecha, contrasta las cifras con fecha antes de tomar decisiones de inversión.

# Cómo leer esta guía

Esta guía está pensada para consulta, no para leerla de corrido. Dentro de una organización conviven varios perfiles que necesitan llegar a planos distintos del documento con prioridades distintas. Se proponen tres rutas de lectura.

## Ruta 1 · Estratégica (CMO, dirección de marketing, decisión C-Level)

Si tu foco es entender el cambio de paradigma, recalibrar la estrategia y aprobar inversión, este es el camino recomendado:

- Capítulo 1. La nueva arquitectura de la visibilidad y la bifurcación de tráfico (foco en 1.1, 1.5 y 1.6).

- Capítulo 3. Ecosistema de motores de respuesta y mercado.

- Capítulo 4. El decoupling rankings-citas (foco en 4.4 y 4.5).

- Capítulo 7. Personal Intelligence: fragmentación de la visibilidad por usuario.

- Capítulo 8. Cuadro de mandos ejecutivo y las 3 superficies de medición.

- Capítulo 11.1, 11.9 y 11.11. GEM: nomenclatura, matriz pagado vs orgánico y playbook.

- Capítulo 1.7. Una disciplina, varios nombres (GEO, AEO, Search Everywhere).

- Capítulo 11.13. Marco regulatorio: AI Act, Latinoamérica y litigios.

- Capítulo 10. Roadmap 30-60-90 para presupuestar.

## Ruta 2 · Técnica (SEO managers, desarrolladores, especialistas de datos)

Si tu foco es la implementación técnica, la arquitectura de medición y la ejecución on-page y off-page, este es el camino recomendado:

- Capítulo 2. Fundamentos técnicos: vectorización, RAG, llms.txt, SSR/CSR, MCP/WebMCP, embeddings cross-lingüísticos.

- Capítulo 2.7. Cloudflare y el nuevo régimen de permisos de crawling.

- Capítulo 2.8. Estado real de MCP, WebMCP y A2A.

- Capítulo 3.7. Novedades de los motores y sus crawlers.

- Capítulo 4. Algoritmos y factores de ranking en IA, con 4.6 y 4.7: datos de decoupling y literatura académica.

- Capítulo 5. Ingeniería de contenidos, economía de tokens, Information Gain Score, con 5.8 y 5.9: método por contexto y contenido para el fan-out.

- Capítulo 6. Autoridad off-page, mapa de fuentes y 6.7 a 6.9: Reddit, Yelp y Reference Building.

- Capítulo 8. Telemetría nativa multi-plataforma (GSC, Bing WMT con Citation Share, Clarity, GA4) y marco de las 3 superficies, con 8.10 a 8.12: novedades de telemetría, metodología de monitorización y tres pilares.

- Capítulo 9. Mitos técnicos desmentidos por la evidencia (incluye los mitos 10 a 17).

- Capítulo 10. Fase 1 (infraestructura) y Fase 3 (web agéntica) del roadmap.

- Anexo A. Caja de herramientas operativas.

## Ruta 3 · GEM / Pagada (performance managers, media buyers, agencias)

Si tu foco es evaluar, activar y medir campañas pagadas en motores generativos, concentrarte en el nuevo capítulo 11:

- Capítulo 11.1-11.2. Nomenclatura (GEM vs AEM vs AI SEM) y cronología de ChatGPT Ads.

- Capítulo 11.3-11.5. Mecánica, formatos, modelos de puja y coste real.

- Capítulo 11.6. Sponsored Agents.

- Capítulo 11.7. Google AI Mode Ads y Direct Offers.

- Capítulo 11.8. Perplexity (sin ads), Copilot (con ads) y Claude (sin ads).

- Capítulo 11.10. Regulación DSA, repositorio público de anuncios y RGPD.

- Capítulo 11.11. Playbook: cuándo activar, cuándo esperar.

- Capítulo 11.12. Medición: Share of Ads, Pixel + CAPI, Event Quality Score.

- Capítulo 11.13-11.14. AI Act, Latinoamérica, y cómo observar la competencia en ChatGPT Ads.

- Capítulo 8. Para encajar la medición de ads dentro del marco de las 3 superficies.

## Punto de encuentro

El roadmap 30-60-90 del capítulo 10 y las tablas de referencia son el lugar donde los equipos se sientan a planificar el despliegue. La capa estratégica define qué KPIs se priorizan; la capa técnica define cómo se instrumentan; la capa de GEM define si y cuánto se paga por complementar lo ganado.

# Qué pasó entre junio y octubre 2026

Cronología verificada de los eventos que han reorganizado la disciplina en el último cuatrimestre, con el capítulo donde se desarrolla cada uno.

| Fecha | Evento | Dónde en la guía |
|---|---|---|
| **3 jun** | Google lanza Generative AI Performance Report en GSC (preview; UK primero) | *Cap. 8* |
| **16 jun** | Bing WMT: Intents, Topics, Citation Share y Compare en preview global | *Cap. 8* |
| **26 jun** | GPT-5.6 preview (OpenAI) | *Cap. 3* |
| **1 jul** | Cloudflare anuncia bloqueo por defecto de crawlers de entrenamiento y agentes en páginas con anuncios (efectivo el 15 sep) | *Cap. 2.7* |
| **1 jul** | Cloudflare lanza Pay Per Use (sustituye a Pay Per Crawl) | *Cap. 2.7* |
| **9 jul** | GPT-5.6 disponible en 3 niveles: Luna / Terra / Sol | *Cap. 3* |
| **21 jul** | WebMCP: nuevo borrador del Community Group; la API pasa a document.modelContext | *Cap. 2.8* |
| **23 jul** | **Yelp licencia 330 M de reseñas a OpenAI** (acuerdo no exclusivo) | *Cap. 6.8* |
| **27 jul** | Entra en vigor el Omnibus digital de IA (Reglamento 2026/1744): aplaza el alto riesgo, no la transparencia | *Cap. 11.13* |
| **28 jul** | Especificación MCP 2026-07-28: el protocolo pasa a ser stateless | *Cap. 2.8* |
| **2 ago** | **AI Act: el artículo 50 (transparencia) es aplicable** | *Cap. 11.13* |
| **6 ago** | GPT-5.6 Luna pasa a ser el modelo por defecto en Free y Go | *Cap. 3* |
| **8 ago** | **Cambia el query fan-out de ChatGPT**: el operador site: pasa del 0,37% al 16,8% | *Cap. 6.7* |
| **11 ago** | OpenAI confirma ChatGPT Ads en Reino Unido, México, Brasil, Japón y Corea del Sur | *Cap. 11.2* |
| **13-17 ago** | **Reddit cae del 3,83% al 0,52% de las citas de ChatGPT Search (−86,4%)** | *Cap. 6.7* |
| **14 ago** | OpenAI publica una política de privacidad dedicada para ChatGPT Ads | *Cap. 11.4* |
| **18 ago** | OpenAI anuncia la expansión de ChatGPT Ads a 31 mercados europeos | *Cap. 11.2* |
| **24 ago** | **ChatGPT Ads activo en España** y en 30 mercados más de la UE/EEE | *Cap. 11.2* |
| **28 ago** | Los AI Overviews empiezan a expandirse a respuestas tipo AI Mode | *Cap. 3.7* |
| **31 ago** | **ChatGPT Ads alcanza 1.000 M USD de run-rate anualizado** y abre self-serve en Europa, India y MENA | *Cap. 11.5* |
| **31 ago** | **La Comisión Europea designa a ChatGPT como VLOSE** bajo la DSA (159,1 M de usuarios UE/mes) | *Cap. 11.10* |
| **31 ago** | **GSC: el informe Generative AI está disponible en todo el mundo** + control de exclusión | *Cap. 8.10* |
| **2 sep** | Gemini 3.8 Flash seleccionable en AI Mode (Pro/Ultra) | *Cap. 3.7* |
| **8 sep** | Google Merchant Center AI Performance report (EE.UU., CA, AU, IN, NZ) | *Cap. 8.10* |
| **10 sep** | Piloto de Amazon Ads: campañas de Amazon DSP extendidas a ChatGPT (EE.UU.) | *Cap. 11.2* |
| **15 sep** | **Cloudflare rectifica**: etiqueta "Accountable" + ajuste "Disallow AI Training". Googlebot no se bloquea | *Cap. 2.7* |
| **16 sep** | **OpenAI lanza Sponsored Agents** (piloto EE.UU. con Wayfair y Angi) + creatividad con IA + HubSpot/Shopify | *Cap. 11.6* |
| **22 sep** | Google inscribe a los comerciantes Shopify elegibles de EE.UU. en el checkout nativo de AI Mode | *Cap. 11.7* |
| **23 sep** | ChatGPT Ads se expande a Asia-Pacífico (Indonesia, Malasia, Filipinas, Singapur, Tailandia, Vietnam, Taiwán) | *Cap. 11.2* |
| **24 sep** | Spam update de Google (hasta dos semanas; ningún core update entre junio y octubre) | *Cap. 3.7* |
| **28 sep** | **Monitorización de AI Mode para todos los usuarios**: los information agents dejan de ser solo Ultra | *Cap. 7* |
| **29 sep** | OpenAI DevDay: sin novedades de anuncios (foco en agentes y Codex) | *Cap. 11.2* |
| **30 sep** | Cloudflare Monetization Gateway y Pay Per Use en beta | *Cap. 2.7* |
| **30 sep** | Ads Manager: carga masiva de feeds, Insights API y separación de nombre de marca | *Cap. 11.2* |
| **Antes de ene 2027** | **OpenAI debe publicar el repositorio público de anuncios exigido por la DSA** | *Cap. 11.10* |

> **Dos episodios de reinterpretación**
> Dos eventos de este cuatrimestre se contaron mal en la prensa: la caída de Reddit se fechó en septiembre cuando ocurrió el 13-17 de agosto; y el "bloqueo de Cloudflare a Googlebot" del 15 de septiembre no ocurrió —Cloudflare rectificó. Esta guía usa las fechas y los hechos verificados en fuentes primarias.

# Índice de contenidos

- [Sobre el autor](#sobre-el-autor)
- [Sobre esta edición](#sobre-esta-edición)
- [Cómo usar esta guía](#cómo-usar-esta-guía)
- [Cómo leer esta guía](#cómo-leer-esta-guía)
  - [Ruta 1 · Estratégica (CMO, dirección de marketing, decisión C-Level)](#ruta-1--estratégica-cmo-dirección-de-marketing-decisión-c-level)
  - [Ruta 2 · Técnica (SEO managers, desarrolladores, especialistas de datos)](#ruta-2--técnica-seo-managers-desarrolladores-especialistas-de-datos)
  - [Ruta 3 · GEM / Pagada (performance managers, media buyers, agencias)](#ruta-3--gem--pagada-performance-managers-media-buyers-agencias)
  - [Punto de encuentro](#punto-de-encuentro)
- [Qué pasó entre junio y octubre 2026](#qué-pasó-entre-junio-y-octubre-2026)
- [Capítulo 1. La nueva arquitectura de la visibilidad online en 2026](#capítulo-1-la-nueva-arquitectura-de-la-visibilidad-online-en-2026)
  - [1.1 El ocaso de la búsqueda tradicional y el ascenso de la síntesis](#11-el-ocaso-de-la-búsqueda-tradicional-y-el-ascenso-de-la-síntesis)
  - [1.2 Definición y alcance del GEO en 2026](#12-definición-y-alcance-del-geo-en-2026)
  - [1.3 La realidad actual: un entorno multimodal y fragmentado](#13-la-realidad-actual-un-entorno-multimodal-y-fragmentado)
  - [1.4 Visibilidad más allá del texto](#14-visibilidad-más-allá-del-texto)
  - [1.5 Seguridad de marca (Brand Safety): la brecha entre citación y fidelidad](#15-seguridad-de-marca-brand-safety-la-brecha-entre-citación-y-fidelidad)
  - [1.6 La bifurcación: citados ganan, no citados pierden](#16-la-bifurcación-citados-ganan-no-citados-pierden)
  - [1.7 Una disciplina, varios nombres: GEO, AEO, AI Search y Search Everywhere](#17-una-disciplina-varios-nombres-geo-aeo-ai-search-y-search-everywhere)
- [Capítulo 2. Fundamentos técnicos avanzados del GEO](#capítulo-2-fundamentos-técnicos-avanzados-del-geo)
  - [2.1 De la indexación a la vectorización (estar en memoria de la IA)](#21-de-la-indexación-a-la-vectorización-estar-en-memoria-de-la-ia)
  - [2.2 El ciclo RAG (Retrieval-Augmented Generation)](#22-el-ciclo-rag-retrieval-augmented-generation)
  - [2.3 El llms.txt: postura actualizada tras Lighthouse Agentic Browsing](#23-el-llmstxt-postura-actualizada-tras-lighthouse-agentic-browsing)
  - [2.4 SSR vs. CSR](#24-ssr-vs-csr)
  - [2.5 Infraestructura de datos para la web agéntica (Agentic Web)](#25-infraestructura-de-datos-para-la-web-agéntica-agentic-web)
  - [2.6 Embeddings cross-lingüísticos: el espacio vectorial como puente entre idiomas](#26-embeddings-cross-lingüísticos-el-espacio-vectorial-como-puente-entre-idiomas)
  - [2.7 Cloudflare y el nuevo régimen de permisos de crawling](#27-cloudflare-y-el-nuevo-régimen-de-permisos-de-crawling)
  - [2.8 Web agéntica: el estado real de MCP, WebMCP y A2A (octubre de 2026)](#28-web-agéntica-el-estado-real-de-mcp-webmcp-y-a2a-octubre-de-2026)
- [Capítulo 3. Ecosistema de motores de respuesta en octubre de 2026](#capítulo-3-ecosistema-de-motores-de-respuesta-en-octubre-de-2026)
  - [3.1 Google AI Overviews y AI Mode tras el I/O 2026](#31-google-ai-overviews-y-ai-mode-tras-el-io-2026)
  - [3.2 ChatGPT Search y el primer ChatGPT Core Update](#32-chatgpt-search-y-el-primer-chatgpt-core-update)
  - [3.3 Perplexity AI: Comet Plus, Perplexity Computer y la consolidación enterprise](#33-perplexity-ai-comet-plus-perplexity-computer-y-la-consolidación-enterprise)
  - [3.4 Gemini 3.5 Flash: la apuesta multimodal de Google](#34-gemini-35-flash-la-apuesta-multimodal-de-google)
  - [3.5 Claude (Anthropic): contexto masivo y computer use en el sector B2B](#35-claude-anthropic-contexto-masivo-y-computer-use-en-el-sector-b2b)
  - [3.6 Motores de respuesta local y contextual](#36-motores-de-respuesta-local-y-contextual)
  - [3.7 Novedades de los motores entre junio y octubre de 2026](#37-novedades-de-los-motores-entre-junio-y-octubre-de-2026)
- [Capítulo 4. Algoritmos de ranking en IA generativa y el decoupling rankings-citas](#capítulo-4-algoritmos-de-ranking-en-ia-generativa-y-el-decoupling-rankings-citas)
  - [4.1 Ganancia de información](#41-ganancia-de-información)
  - [4.2 Densidad semántica y PAWC (Position-Adjusted Word Count)](#42-densidad-semántica-y-pawc-position-adjusted-word-count)
  - [4.3 El filtro de calidad: Quality Rater Guidelines actualizadas (mayo 2026)](#43-el-filtro-de-calidad-quality-rater-guidelines-actualizadas-mayo-2026)
  - [4.4 El decoupling rankings-citas: el dato más disruptivo de 2026](#44-el-decoupling-rankings-citas-el-dato-más-disruptivo-de-2026)
  - [4.5 El rol de las data partnerships en la visibilidad](#45-el-rol-de-las-data-partnerships-en-la-visibilidad)
  - [4.6 Datos nuevos de decoupling y la lección de la volatilidad (junio-octubre 2026)](#46-datos-nuevos-de-decoupling-y-la-lección-de-la-volatilidad-junio-octubre-2026)
  - [4.7 La literatura académica 2025-2026: de «+40%» a «casi nada funciona de forma estable»](#47-la-literatura-académica-2025-2026-de-40-a-casi-nada-funciona-de-forma-estable)
- [Capítulo 5. Estrategia de contenidos](#capítulo-5-estrategia-de-contenidos)
  - [5.1 La teoría de los Answer Nuggets](#51-la-teoría-de-los-answer-nuggets)
  - [5.2 Formatos de alta extractabilidad](#52-formatos-de-alta-extractabilidad)
  - [5.3 Optimización para Agentic AI](#53-optimización-para-agentic-ai)
  - [5.4 Optimización de video e imagen](#54-optimización-de-video-e-imagen)
  - [5.5 Economía de tokens y ROI del contenido](#55-economía-de-tokens-y-roi-del-contenido)
  - [5.6 Lectura fonética y asistentes multimodales por voz](#56-lectura-fonética-y-asistentes-multimodales-por-voz)
  - [5.7 Information Gain Score: tabla de puntuación para equipos editoriales](#57-information-gain-score-tabla-de-puntuación-para-equipos-editoriales)
  - [5.8 Del keyword al contexto: el método de cuatro pilares de GEO Metrics (pilares 1 y 3)](#58-del-keyword-al-contexto-el-método-de-cuatro-pilares-de-geo-metrics-pilares-1-y-3)
  - [5.9 Primera parte como fuente de verdad: contenido para el fan-out con site:](#59-primera-parte-como-fuente-de-verdad-contenido-para-el-fan-out-con-site)
- [Capítulo 6. Autoridad, menciones y data partnerships](#capítulo-6-autoridad-menciones-y-data-partnerships)
  - [6.1 Menciones sin enlace: el factor más predictivo en IA](#61-menciones-sin-enlace-el-factor-más-predictivo-en-ia)
  - [6.2 Wikipedia](#62-wikipedia)
  - [6.3 Co-citación y vecindad semántica](#63-co-citación-y-vecindad-semántica)
  - [6.4 El mapa de fuentes de confianza 2026](#64-el-mapa-de-fuentes-de-confianza-2026)
  - [6.5 La explosión del video y UGC como fuente de datos](#65-la-explosión-del-video-y-ugc-como-fuente-de-datos)
  - [6.6 Validación de entidad local y consenso](#66-validación-de-entidad-local-y-consenso)
  - [6.7 La caída de Reddit en ChatGPT (agosto 2026) y el principio "leer no es citar"](#67-la-caída-de-reddit-en-chatgpt-agosto-2026-y-el-principio-leer-no-es-citar)
  - [6.8 Yelp, OpenAI y los directorios de reseñas licenciados](#68-yelp-openai-y-los-directorios-de-reseñas-licenciados)
  - [6.9 Reference Building: la tripleta de entidad, el PR digital y la memoria larga y corta](#69-reference-building-la-tripleta-de-entidad-el-pr-digital-y-la-memoria-larga-y-corta)
- [Capítulo 7. Personal Intelligence: la visibilidad personalizada como nueva dimensión](#capítulo-7-personal-intelligence-la-visibilidad-personalizada-como-nueva-dimensión)
  - [7.1 El experimento de iPullRank: +46 puntos porcentuales de visibilidad](#71-el-experimento-de-ipullrank-46-puntos-porcentuales-de-visibilidad)
  - [7.2 Expansión global de Personal Intelligence](#72-expansión-global-de-personal-intelligence)
  - [7.3 Implicaciones para la medición del Share of Model](#73-implicaciones-para-la-medición-del-share-of-model)
  - [7.4 Estrategia: el email marketing como señal de GEO (hipótesis operativa)](#74-estrategia-el-email-marketing-como-señal-de-geo-hipótesis-operativa)
- [Capítulo 8. Métricas y medición: el ecosistema nativo de telemetría llega en 2026](#capítulo-8-métricas-y-medición-el-ecosistema-nativo-de-telemetría-llega-en-2026)
  - [8.1 El framework de tres capas](#81-el-framework-de-tres-capas)
  - [8.2 GSC Search Generative AI Performance Reports (lanzado el 3 de junio de 2026)](#82-gsc-search-generative-ai-performance-reports-lanzado-el-3-de-junio-de-2026)
  - [8.3 Bing Webmaster Tools – AI Performance Report (9 de febrero de 2026)](#83-bing-webmaster-tools--ai-performance-report-9-de-febrero-de-2026)
  - [8.4 Microsoft Clarity Citations Dashboard (GA mayo 13, 2026)](#84-microsoft-clarity-citations-dashboard-ga-mayo-13-2026)
  - [8.5 Métricas fundamentales de GEO (actualizadas)](#85-métricas-fundamentales-de-geo-actualizadas)
  - [8.6 Herramientas del ecosistema – mapa actual (junio 2026)](#86-herramientas-del-ecosistema--mapa-actual-junio-2026)
  - [8.7 Auditoría de alucinaciones, Dark Visibility y defensa de marca](#87-auditoría-de-alucinaciones-dark-visibility-y-defensa-de-marca)
  - [8.8 El Quality Premium del tráfico AI-referred](#88-el-quality-premium-del-tráfico-ai-referred)
  - [8.9 Las tres superficies de medición: retrieval, citation y ads](#89-las-tres-superficies-de-medición-retrieval-citation-y-ads)
  - [8.10 Telemetría nativa: lo que cambió entre junio y octubre](#810-telemetría-nativa-lo-que-cambió-entre-junio-y-octubre)
  - [8.11 Metodología de GEO Metrics: monitorizar sin sesgo (pilar 2)](#811-metodología-de-geo-metrics-monitorizar-sin-sesgo-pilar-2)
  - [8.12 Los tres pilares de la medición: termómetro, percepción y negocio (pilar 4)](#812-los-tres-pilares-de-la-medición-termómetro-percepción-y-negocio-pilar-4)
- [Capítulo 9. Mitos que el research de 2026 ha desmentido](#capítulo-9-mitos-que-el-research-de-2026-ha-desmentido)
- [Capítulo 10. Plan de implementación estratégica (Roadmap 30-60-90 días)](#capítulo-10-plan-de-implementación-estratégica-roadmap-30-60-90-días)
  - [Fase 1: Infraestructura, medición nativa y bots (días 0-30)](#fase-1-infraestructura-medición-nativa-y-bots-días-0-30)
  - [Fase 2: Optimización de contenido y semántica (días 31-60)](#fase-2-optimización-de-contenido-y-semántica-días-31-60)
  - [Fase 3: Autoridad, personalización y agentes (días 61-90)](#fase-3-autoridad-personalización-y-agentes-días-61-90)
  - [10.6 Tareas obligatorias adicionales](#106-tareas-obligatorias-adicionales)
- [Capítulo 11. GEM: la capa pagada del GEO](#capítulo-11-gem-la-capa-pagada-del-geo)
  - [11.1 Nomenclatura: GEM, AEM, AI SEM, Generative Engine Marketing](#111-nomenclatura-gem-aem-ai-sem-generative-engine-marketing)
  - [11.2 Cronología de ChatGPT Ads (feb 2026 → oct 2026)](#112-cronología-de-chatgpt-ads-feb-2026--oct-2026)
  - [11.3 Mecánica, formatos y modelos de puja](#113-mecánica-formatos-y-modelos-de-puja)
  - [11.4 Quién ve los anuncios y limitaciones](#114-quién-ve-los-anuncios-y-limitaciones)
  - [11.5 Coste, presupuesto y rendimiento real](#115-coste-presupuesto-y-rendimiento-real)
  - [11.6 Sponsored Agents: el nuevo frente (piloto EE.UU., 16 sep)](#116-sponsored-agents-el-nuevo-frente-piloto-eeuu-16-sep)
  - [11.7 Google AI Mode Ads y Direct Offers](#117-google-ai-mode-ads-y-direct-offers)
  - [11.8 Perplexity, Copilot y otros motores](#118-perplexity-copilot-y-otros-motores)
  - [11.9 Matriz GEO vs GEM: dos embudos complementarios](#119-matriz-geo-vs-gem-dos-embudos-complementarios)
  - [11.10 Regulación: DSA, VLOSE y el repositorio público de anuncios](#1110-regulación-dsa-vlose-y-el-repositorio-público-de-anuncios)
  - [11.11 Playbook: cuándo activar GEM y cuándo esperar](#1111-playbook-cuándo-activar-gem-y-cuándo-esperar)
  - [11.12 Medición de GEM: Share of Ads, Pixel + CAPI, Event Quality Score](#1112-medición-de-gem-share-of-ads-pixel--capi-event-quality-score)
  - [11.13 Marco regulatorio más allá de la DSA: AI Act, Latinoamérica y litigios](#1113-marco-regulatorio-más-allá-de-la-dsa-ai-act-latinoamérica-y-litigios)
  - [11.14 Observar la competencia en ChatGPT Ads: el obstáculo de la sesión iniciada](#1114-observar-la-competencia-en-chatgpt-ads-el-obstáculo-de-la-sesión-iniciada)
- [Tablas de referencia y datos](#tablas-de-referencia-y-datos)
- [Conclusiones y perspectivas hacia 2027](#conclusiones-y-perspectivas-hacia-2027)
- [Anexo A · Caja de herramientas operativas](#anexo-a--caja-de-herramientas-operativas)
  - [A.1 Checklist técnico GEO (orgánico)](#a1-checklist-técnico-geo-orgánico)
  - [A.2 Checklist técnico GEM (pagado)](#a2-checklist-técnico-gem-pagado)
  - [A.3 Comandos útiles](#a3-comandos-útiles)
  - [A.4 Herramientas de monitorización de GEO + GEM](#a4-herramientas-de-monitorización-de-geo--gem)
- [Anexo B · Glosario técnico](#anexo-b--glosario-técnico)

# Capítulo 1. La nueva arquitectura de la visibilidad online en 2026

> **TL;DR DEL CAPÍTULO**
> - La caída de tráfico es real pero mal distribuida: los sitios citados ganan, los no citados pierden dos veces.
> - Las visitas desde IA convierten 4-5× mejor que las de búsqueda tradicional, pero representan menos del 2% del total.
> - Brand Safety ya no mide solo si te citan: mide si te citan bien y qué se inventan sobre ti sin citarte.
> - El 11% de los claims atómicos de las respuestas de IA no están soportados por sus fuentes citadas (Salesforce AI Research, 11.500 consultas).

## 1.1 El ocaso de la búsqueda tradicional y el ascenso de la síntesis

La historia de la recuperación de información digital estuvo dominada durante más de dos décadas por un paradigma de "lista de links". El usuario introducía una palabra clave, el motor devolvía diez resultados, y la carga cognitiva de sintetizar, verificar y comparar la información recaía enteramente en el humano. Este modelo, aunque rentable para los motores de búsqueda basados en publicidad, era inherentemente ineficiente en términos de tiempo y esfuerzo cognitivo.

Ese paradigma ha sido desplazado por la eficiencia de la respuesta única. La fricción de la navegación web ha sido eliminada por la capacidad de los Grandes Modelos de Lenguaje (LLMs) para procesar, razonar y presentar conclusiones. El usuario promedio, especialmente en las cohortes menores de 35 años, ha sustituido la "búsqueda exploratoria" por la "búsqueda de respuesta directa".

Cuando un usuario pregunta a ChatGPT o Perplexity "¿cuál es el mejor seguro de hogar para una casa en zona costera?", no espera una lista de aseguradoras; espera un análisis comparativo, una recomendación fundamentada y una advertencia sobre las exclusiones de la póliza, todo generado en tiempo real con datos verificados.

Ya no competimos por el clic en la SERP; competimos por ser parte del conjunto de datos de entrenamiento y del contexto de recuperación que el modelo utiliza para construir su respuesta.

La implicación económica es profunda: el tráfico orgánico hacia sitios web informativos se ha desplomado, pero el valor de cada visita restante (o de cada mención en la respuesta de la IA) ha aumentado exponencialmente. La "muerte" del tráfico orgánico masivo no es el fin del marketing digital, sino su evolución hacia un modelo de mayor precisión y atribución compleja.

**Actualización junio 2026.** La caída de tráfico documentada por publishers en el primer semestre de 2026 es de un orden mayor que el anticipado en febrero. HubSpot reportó pérdidas del 70-80 %, Chegg del 49 % y DMG Media documentó caídas del 89 % en algunas queries. El propio Google referral traffic a publishers declinó globalmente alrededor de un tercio en el año hasta noviembre de 2025. El CTR orgánico en queries con AI Overviews cayó de 1,76 % a 0,61 % en septiembre de 2025 (-61 %) y rebotó hasta 2,4 % en febrero de 2026 al estabilizarse el comportamiento de los usuarios y mejorar la atribución (Seer Interactive). Seer atribuye esta recuperación parcial a dos cambios de interfaz de Google: tarjetas de fuentes desplegables más estables y mejor tratamiento de enlaces inline dentro de la respuesta, que aumentaron la probabilidad de clic intencional desde el bloque de citas.

![Figura 1.1. Caídas de tráfico orgánico documentadas en publishers principales (2025-2026).](charts/cap1_caida_publishers.png)

*Figura 1.1. Caídas de tráfico orgánico documentadas en publishers principales (2025-2026).*

Pero el dato que reordena la conversación no es el descenso absoluto, sino la bifurcación: los sitios citados dentro de AI Overviews ganan un 120 % más de clics orgánicos por impresión que los no citados en las mismas queries (Seer Interactive, 2026). Las visitas originadas en asistentes de IA convierten a tasas de 4 a 5 veces superiores al orgánico tradicional. Microsoft documentó que los journeys vía Copilot son un 33 % más cortos y convierten un 76 % mejor que la búsqueda tradicional. La sección 1.6 desarrolla esta bifurcación como concepto estratégico.

## 1.2 Definición y alcance del GEO en 2026

Para operar en este entorno, es imperativo distinguir con precisión entre las disciplinas que han madurado durante 2026:

- **SEO Tradicional (Search Engine Optimization).** Se fundamenta en la recuperación léxica, la estructura de enlaces (PageRank) y la optimización técnica para rastreadores deterministas. Su objetivo sigue siendo la clasificación en una lista ordenada, relevante para búsquedas navegacionales y transaccionales simples. Sigue siendo necesario; ya no es suficiente.

- **GEO (Generative Engine Optimization).** Inclusión, citación y síntesis favorable en respuestas generadas por IA, optimizando para Share of Model y visibilidad en respuestas directas.

- **LLMO (Large Language Model Optimization).** Presencia dentro de los datos de entrenamiento estáticos del modelo (proliferación de marca en libros, papers, Wikipedia) y gestión de la identidad de la marca dentro de los Grafos de Conocimiento que alimentan a los LLMs. En 2026 ha pasado a incluir explícitamente la influencia sobre el corpus preferente vía data partnerships.

- **AEO (Answer Engine Optimization).** Subdisciplina táctica enfocada en proporcionar respuestas directas, estructuradas y concisas (Answer Nuggets) que asistentes de voz y chatbots puedan leer literalmente. En 2026 se ha extendido a asistentes multimodales que leen en voz alta o muestran tarjetas visuales.

- **AAIO (Agentic AI Optimization).** Optimización de activos digitales para ser utilizados por agentes autónomos de IA que realizan tareas (reservas, compras, comparaciones) en nombre del usuario. En febrero era "nueva frontera"; en junio de 2026 es disciplina activa con WebMCP, ChatGPT Agent, Perplexity Computer e Information Agents de Google operando en producción.

En junio de 2026, el GEO no es una opción, sino la columna vertebral de la visibilidad. Abarca la optimización para un ecosistema fragmentado que incluye motores de respuesta híbridos (Google AI Overviews y AI Mode), motores nativos de IA (ChatGPT Search, Perplexity, Claude) y la web agéntica operativa donde agentes de software autónomos realizan tareas complejas en nombre de los usuarios.

## 1.3 La realidad actual: un entorno multimodal y fragmentado

La era del monopolio de búsqueda de Google ha dado paso a algo más diversificado. La estrategia de visibilidad de una marca no puede ser única para un tablero de juego; debe ser más amplia, adaptándose a cada plataforma principal y a sus fuentes de datos preferentes.

A junio de 2026, el panorama se define por la competencia entre arquitecturas de modelos, cada una con sesgos de recuperación únicos:

- **Google.** Ha desplegado Gemini 3.5 Flash como modelo por defecto en AI Mode globalmente desde mayo de 2026 y refinado los AI Overviews con verificación de hechos más estricta. AI Mode integra resultados visuales, video, archivos y pestañas de Chrome de forma nativa.

- **OpenAI.** Las series GPT-5 (5.2, 5.3-Codex, 5.4) y, desde finales de mayo de 2026, GPT-5.5 Instant como modelo de citación por defecto. SISTRIX documentó el primer ChatGPT Core Update con la transición a GPT-5.5: casi la mitad de las citas se redistribuyeron en 48 horas. ChatGPT Agent sustituyó a Operator en febrero de 2026.

- **Perplexity.** Consolidado como herramienta de Deep Research para profesionales con valoración de ~20.000 millones de dólares y 500 millones de dólares de ARR en abril de 2026. Lanzó Perplexity Computer (agente autónomo soportado por Opus 4.6) y el programa de revenue share Comet Plus con publishers (80 % editor / 20 % Perplexity).

- **Claude (Anthropic).** Líder en entornos corporativos B2B y análisis de documentos complejos. La maduración de la familia Claude 3.5 Sonnet y el despliegue de Claude 4.0 mantienen su ventaja en ventana de contexto, computer use y MCP nativo. Su "Inteligencia Constitucional" sigue siendo el filtro más estricto contra alucinaciones y clickbait.

La realidad operativa es que un contenido puede ser visible en Google por autoridad histórica de dominio, ser completamente invisible en Perplexity si carece de citas de fuentes externas verificables, e ignorado por ChatGPT si su estructura no es fácilmente parseable. La fragmentación exige una estrategia multicanal técnicamente sofisticada.

## 1.4 Visibilidad más allá del texto

Una de las evoluciones más críticas de 2026 es el paso de una web textocéntrica a una web multimodal. Los modelos actuales no solo "leen" texto: "ven" imágenes y "escuchan" video con comprensión semántica profunda. La búsqueda multimodal, que combina texto, voz, imagen y video, se ha convertido en estándar, impulsada por modelos como GPT-5 y Gemini 3.5 Flash que procesan inputs visuales nativos.

La optimización multimodal no es decorativa. Datos de BrightEdge indican un aumento del 121 % en las citaciones de YouTube dentro de Google AI Overviews para consultas de comercio electrónico. Un video bien optimizado con transcripciones precisas y metadatos estructurados puede ser la fuente principal de una respuesta generativa, superando a artículos de miles de palabras.

El desafío técnico reside en hacer que estos activos no textuales sean indexables semánticamente. Esto implica esquemas de metadatos avanzados (C2PA para procedencia y autenticidad), transcripciones completas con marcas de tiempo y descripciones de texto alternativo que no solo describan la imagen, sino su contexto y relevancia. En la era multimodal, una imagen vale más que mil palabras, pero solo si la IA puede entender esas palabras a través de sus vectores visuales y metadatos asociados.

## 1.5 Seguridad de marca (Brand Safety): la brecha entre citación y fidelidad

En un entorno donde las respuestas son generadas probabilísticamente y no recuperadas determinísticamente, el riesgo de "alucinaciones" de marca se convierte en una amenaza estratégica. Las alucinaciones no son solo errores técnicos: son riesgos reputacionales que pueden asociar una marca con características falsas, precios incorrectos, escándalos inexistentes o políticas inventadas.

**El dato que cambia el juego.** Un estudio académico sobre 11.500 consultas (Salesforce AI Research, 2025) detectó un **11,0 % de claims atómicos no soportados** por las páginas citadas dentro de AI Overviews. Es decir: ser citado como fuente no garantiza que la IA esté representando fielmente lo que la fuente dice. El modelo puede tergiversar precios, políticas, especificaciones o cifras del producto mientras enlaza correctamente al dominio. Esto invierte la métrica de éxito: aparecer en el bloque de citas no es el final del juego.

La consecuencia es estructural. La métrica de Brand Safety en GEO debe medir tres dimensiones simultáneas:

- **¿Cuánto me citan?** Frecuencia de aparición (Share of Model, Share of Authority, citation count).

- **¿Cómo me usan?** Fidelidad de la síntesis respecto a la fuente. ¿La afirmación atribuida coincide con lo que dice la página citada?

- **¿Qué se inventa sobre mí?** Tasa de alucinación negativa: con qué frecuencia los modelos generan información falsa perjudicial sobre la marca incluso sin citarla.

La defensa contra alucinaciones requiere una estrategia proactiva de Information Gain: al proporcionar datos claros, estadísticas actualizadas y citas directas de fuentes autorizadas, se reduce la "temperatura" creativa del modelo al hablar de la marca. La velocidad de corrección es crítica para evitar que una alucinación se propague entre modelos: una vez que una afirmación falsa entra en un corpus de scraping, otros modelos pueden ingerirla en ciclos posteriores.

**Por qué esto justifica una plataforma de monitorización.** El sistema de auditoría de marca en la era generativa no es viable con tracking manual. Cada motor tiene su propio sesgo de recuperación, sus propias fuentes preferidas y su propia probabilidad de tergiversación. Una suite de monitorización continua (GEO Metrics y herramientas equivalentes) permite detectar tanto las omisiones (consultas relevantes donde la marca no aparece) como las alucinaciones (consultas donde la marca aparece con información incorrecta), y permite contraatacar inyectando "datos correctivos" en el corpus a través de activos propios de alta autoridad antes de que el error se propague.

La gestión de la "visibilidad oscura" (dark visibility) —el conjunto de consultas donde la marca debería aparecer y no lo hace— se convierte en un KPI propio. El capítulo 8 lo desarrolla en detalle.

## 1.6 La bifurcación: citados ganan, no citados pierden

La sección 1.1 ha presentado los datos absolutos de caída de tráfico. La interpretación estratégica de esos datos es la siguiente: el descenso del tráfico orgánico no se distribuye uniformemente. Se concentra en los sitios que aparecen en queries con AI Overview activado pero que no son citados como fuente. Los sitios citados, en las mismas queries, mejoran su rendimiento.

La asimetría es estructural, no coyuntural. Y reordena las prioridades de inversión:

- **El sitio citado capitaliza la query.** El usuario que ve el AI Overview, lee la respuesta y decide profundizar, hace clic en el bloque de fuentes. El CTR sobre fuentes citadas en queries con AIO ya es superior al CTR de las posiciones \#2-#10 orgánicas en queries sin AIO. La citación funciona como un "sello de aprobación de la IA" que sesga el comportamiento del clic.

- **El sitio no citado pierde dos veces.** Pierde el clic informacional (la IA respondió antes) y pierde la oportunidad de aparecer en el consideration set de futuras queries relacionadas (los modelos refuerzan sus fuentes habituales en cada iteración).

- **El tráfico AI-referred convierte mejor.** Cuando el clic ocurre, el usuario llega con intención más definida y contexto más rico. Los datos de conversión y engagement (capítulo 8) confirman un Quality Premium consistente.

La consecuencia operativa es directa: la única defensa frente a la pérdida de tráfico informacional es ser la fuente citada. Y la única forma de ser la fuente citada es operar sobre los factores que el research empírico ha identificado (capítulo 4) y medir con telemetría nativa (capítulo 8).

**El efecto de cristalización del consideration set.** Hay una segunda capa estratégica que conviene entender. Los modelos generativos no recalculan el consideration set en cada query desde cero. Refuerzan sus fuentes habituales en cada ciclo de recuperación. Una marca citada con consistencia se convierte en "opción semilla" para queries adyacentes que el modelo aún no ha visto. Una marca ausente sistemáticamente se vuelve cada vez menos probable de aparecer, no porque su autoridad caiga, sino porque el modelo deja de considerarla candidata. Es un efecto acumulativo y, por tanto, asimétrico en el tiempo: ganar visibilidad temprana en el ciclo cuesta menos que recuperarla cuando el sesgo del modelo se ha cristalizado. Este es el argumento de fondo para no esperar a tener todos los activos perfectos antes de empezar a operar en GEO: la ventana de oportunidad para entrar en el consideration set de una categoría se cierra a medida que los competidores se asientan.

## 1.7 Una disciplina, varios nombres: GEO, AEO, AI Search y Search Everywhere

La disciplina que esta guía llama GEO circula con al menos seis nombres y ninguna definición normativa compartida. Conviene ordenarlos antes de seguir, porque un equipo que usa dos nombres para lo mismo acaba comprando dos veces el mismo trabajo.

| Término | Qué designa | Quién lo usa y cómo | Tipo de fuente |
|---|---|---|---|
| **SEO** | Optimización para buscadores | Google lo considera suficiente también para sus funciones de IA generativa | Oficial |
| **GEO** (Generative Engine Optimization) | Aparecer y ser citado en respuestas generadas | Acuñado por Aggarwal et al. (arXiv 2311.09735; KDD 2024). Microsoft Advertising lo define como contenido descubrible, fiable y con autoridad en entornos generativos | Académica y oficial |
| **AEO** (Answer / Agentic Engine Optimization) | Optimizar para asistentes y agentes que responden o ejecutan | Microsoft Advertising (guía de enero de 2026): para que agentes y asistentes encuentren, entiendan y presenten respuestas | Oficial (rama comercial) |
| **LLMO, AI SEO, AI Search Optimization** | Sinónimos de mercado | Sobre todo proveedores de herramientas. GEO Metrics usó LLMO en 2024, cuando el término técnico aún no tenía acrónimo asentado | Uso de mercado |
| **AI Search** | Las superficies: AI Overviews, AI Mode, ChatGPT Search, Copilot, Perplexity, Claude, Gemini | Término descriptivo, no una disciplina | Convención |
| **Search Everywhere Optimization** | Ser encontrable en todos los canales: buscadores, YouTube, redes, reseñas e IA | Término de mercado, usado por consultores SEO en podcasts del sector en 2026 | Uso de mercado |

**Lectura.** Google trata GEO y AEO como SEO. Microsoft, en su rama publicitaria, los presenta como disciplinas diferenciadas. Esa contradicción no se resuelve con otro acrónimo: se resuelve usándolos como etiquetas de alcance (en qué superficies quiero aparecer) y no como cajas de técnicas separadas.

**La posición de GEO Metrics.** Nico Bignú la ha resumido en varios podcasts de septiembre de 2026 (SEO Room, SEO desde cero y El Arte del SEO) con una fórmula: hacer GEO es hacer SEO con bisturí. La monitorización de las respuestas indica qué acciones del SEO de siempre pesan más en cada contexto, por ejemplo menciones externas antes que contenido propio en una primera etapa, y el trabajo consiste en concentrar acciones puntuales donde la evidencia las prioriza. No propone una disciplina paralela. No es un consenso del sector.

De ahí salen dos consecuencias prácticas. La primera: la base técnica y editorial del SEO sigue siendo prerrequisito, porque los motores generativos se apoyan en los índices de Google y Bing. La segunda: lo que cambia es la unidad de medida, que pasa de keyword y posición a contexto y entidad. En la versión más amplia de esa idea, un SEO es también quien pone un código QR para que los clientes dejen reseñas en un negocio local: una acción física con efecto en la visibilidad online.

**Convención de esta guía.** GEO designa la visibilidad orgánica en motores generativos. GEM designa la capa pagada (capítulo 11). SEO es el sustrato común de ambas.

> **ACCIÓN OPERATIVA · Unificar el lenguaje del equipo**
> - Elige una sola etiqueta para el trabajo orgánico en IA y úsala en propuestas, informes y contratos. Mezclar GEO, AEO y AI SEO en un mismo documento genera discusiones de alcance que no existen.
> - Define por escrito en qué superficies se mide (ChatGPT, AI Mode, AI Overviews, Copilot, Perplexity, Claude, Gemini) antes de prometer resultados.
> - Cuando un cliente pregunte «¿esto es SEO o GEO?», responde con la superficie y la métrica, no con el acrónimo.

# Capítulo 2. Fundamentos técnicos avanzados del GEO

> **TL;DR DEL CAPÍTULO**
> - El bloqueo de bots ya no es un ajuste técnico: es una decisión de negocio sobre tu memoria de marca.
> - MCP se consolida como protocolo estándar del lado agente: stateless desde el 28 de julio; más de 400 M de descargas mensuales según una fuente secundaria.
> - Google dijo oficialmente en mayo de 2026 que ignora llms.txt y que no hace falta marcado especial para IA.
> - La nueva sub-sección 2.7 cubre Cloudflare y el régimen de permisos post-15 de septiembre.

Para optimizar para una IA, primero debemos comprender cómo "piensa" esa IA. Los LLMs no leen: procesan un set de probabilidades (predecir la siguiente palabra más probable para terminar de construir la respuesta). El GEO es, en esencia, ingeniería inversa de estas probabilidades y hacer que la IA empiece a vernos con peso en el tema donde queremos destacar.

## 2.1 De la indexación a la vectorización (estar en memoria de la IA)

El cambio más profundo en la tecnología de búsqueda es el paso de índices como Google (listas de palabras y dónde aparecen) a índices vectoriales (estar en memoria de la IA).

En el núcleo de modelos como Gemini o GPT reside el concepto de embedding. Un embedding es una representación numérica (un vector, una lista larga de números) de un concepto, palabra o frase. En este espacio vectorial multidimensional, la "distancia" entre dos vectores representa su similitud semántica.

**Ejemplo.** En un índice tradicional (Google), si buscas "vehículo de dos ruedas", el motor busca esas palabras exactas. En un espacio vectorial (IAs), el vector de "vehículo de dos ruedas" está matemáticamente muy cerca de "motocicleta", "bicicleta" y "scooter", incluso si esas palabras no comparten ninguna letra.

**Implicación para el GEO.** La optimización ya no trata de repetir la palabra clave ("keyword density"): trata de la densidad semántica. Para que un contenido sea usado por una IA, su vector debe estar alineado con el vector de la consulta del usuario. Esto se logra cubriendo la "vecindad semántica" completa del tema: sinónimos, conceptos relacionados, terminología técnica precisa y las preguntas latentes que rodean al tema principal.

El objetivo es situar el contenido en el centro del tema, asegurando que cualquier variación de la consulta gravite hacia nuestra entidad.

## 2.2 El ciclo RAG (Retrieval-Augmented Generation)

La mayoría de los sistemas de búsqueda actuales no confían únicamente en la memoria interna del modelo (que puede estar desactualizada o sufrir alucinaciones), sino que utilizan una arquitectura RAG para ampliar el contexto. Entender este ciclo es vital para saber dónde y cómo intervenir con contenido estratégico.

1.  **Ingesta y reformulación (query processing).** El usuario introduce una pregunta compleja. El sistema utiliza un LLM interno para descomponerla en múltiples sub-consultas más simples y precisas (Query Fan-out). Por ejemplo, "¿Es mejor el iPhone 17 o el Galaxy S26 para fotografía nocturna?" se descompone en "specs cámara iPhone 17", "specs cámara Galaxy S26" y "comparativa modo noche iPhone vs Samsung 2026". *Oportunidad GEO:* crear contenido que responda específicamente a estas sub-consultas. Anticipar el fan-out creando clústeres de contenido que cubran las preguntas lógicas derivadas.

2.  **Recuperación (retrieval).** El sistema busca en su índice vectorial fragmentos de texto (chunks) que coincidan semánticamente con las sub-consultas. *Oportunidad GEO:* asegurar que el contenido esté segmentado lógicamente (títulos H2/H3 claros) para que el sistema pueda recuperar el párrafo relevante sin tener que procesar todo el artículo.

3.  **Re-ranking y filtrado (scoring).** Aquí entran algoritmos avanzados como Muvera en Google. El sistema evalúa los cientos de fragmentos recuperados según criterios de calidad: autoridad de la fuente, frescura, neutralidad y factuality. Se descartan los redundantes o de baja confianza. *Oportunidad GEO:* maximizar la ganancia de información. Si tu contenido dice lo mismo que los otros 10 resultados, será filtrado.

4.  **Generación y citación.** La IA toma los fragmentos ganadores y los utiliza como contexto para redactar la respuesta final, añadiendo citas (enlaces) a las fuentes. *Oportunidad GEO:* estructurar el contenido de manera fácil de resumir y citar. Frases claras, datos numéricos y atribución explícita facilitan este paso.

**Actualización junio 2026.** Bing Webmaster Tools expone desde febrero de 2026 las grounding queries que Copilot genera internamente en el paso 1: las frases que el modelo formula para recuperar contenido antes de responder al usuario final. Es el primer acceso público directo a esta fase del ciclo RAG y un input estratégico de primer orden (capítulo 8).

> **APOYO VISUAL · Infografía del ciclo RAG en 4 fases**
> ***Descripción para diseño:*** *Diagrama horizontal con 4 cajas conectadas por flechas representando el ciclo RAG: (1) Ingesta y reformulación / Query fan-out — icono de pregunta partiéndose en varias sub-preguntas. (2) Recuperación / Retrieval — icono de búsqueda en un índice vectorial (red de nodos). (3) Re-ranking y filtrado — icono de filtro o embudo con varios documentos entrando y 3-4 saliendo. (4) Generación y citación — icono de bocadillo de respuesta con enlaces a fuentes. Debajo de cada caja, en texto pequeño morado: la "oportunidad GEO" de esa fase. Paleta morados corporativos. Estilo limpio editorial, sin elementos infantiles.*

## 2.3 El llms.txt: postura actualizada tras Lighthouse Agentic Browsing

Una de las propuestas técnicas más comentadas de 2024-2025 ha sido la adopción del archivo /llms.txt. Al igual que el robots.txt definió las reglas del juego para los rastreadores web en los años 90, el llms.txt se planteó como protocolo análogo para agentes de IA. La especificación lo define como una propuesta informal para ofrecer contexto amigable para LLMs "a tiempo de inferencia", no como un estándar web vinculante. La documentación oficial publicada por Google Chrome Developers ha cambiado esa lectura: el archivo sigue sin mover la aguja de citabilidad directa, pero pasa a ser una pieza de higiene técnica obligatoria para no fallar las nuevas auditorías agénticas.

**Estado real de la citabilidad.** Ningún proveedor de IA mayor (OpenAI, Google, Anthropic, Meta, Mistral) ha confirmado públicamente que lea o actúe sobre llms.txt en sus sistemas de producción para citación o recuperación RAG en motores de respuesta al consumidor. El Search team de Google (Gary Illyes en Search Central Live, John Mueller en febrero de 2026) lo declaró explícitamente innecesario. Mueller lo comparó con el antiguo meta keywords tag: "Is the site really like that? Well, you can check it. At that point, why not just check the site directly?" Crear archivos Markdown específicamente para bots es, en sus palabras, "a dumb idea". La guía oficial de Google de mayo de 2026 lo confirma: "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in generative AI search."

**El hallazgo que cambia la lectura: Lighthouse Agentic Browsing Audits.** El Chrome team ha formalizado en Lighthouse una nueva categoría de auditoría: Agentic Browsing. La documentación oficial publicada por Google Chrome Developers explicita su propósito: el archivo llms.txt sirve para mitigar el gasto de tiempo y de presupuesto de rastreo de los agentes de IA cuando navegan el sitio. Es decir, la función documentada no es alimentar al modelo con contenido para citar, sino orientar al agente que rastrea para que no consuma su crawl budget en páginas irrelevantes.

La mecánica operativa de la auditoría tiene una particularidad importante. Si el servidor responde con un 404 al pedir /llms.txt, Lighthouse marca la auditoría como No Aplicable (N/A): no se considera fallo. Pero si la petición devuelve un error de servidor (5xx, timeout, certificado SSL mal configurado, redirección rota o respuesta técnica defectuosa), la auditoría se rompe explícitamente. La consecuencia es asimétrica: no tener el archivo es neutro, pero tenerlo mal servido es un fallo activo en la auditoría agéntica oficial de Google.

**Caso de uso real más allá de la auditoría.** El uso documentado de llms.txt es developer tooling: Cursor, GitHub Copilot y Claude en modo de coding agent lo utilizan para recuperar documentación con menos gasto de tokens. Empresas que lo han implementado con resultados documentados: Stripe, Anthropic, Cursor, Cloudflare. SE Ranking auditó 300.000 dominios en Q1 2026 y encontró un 10,13 % de adopción.

**Recomendación operativa (revisada).** Pasa de "mejora opcional sin prioridad" a **tarea obligatoria de higiene técnica en la Fase 1 del roadmap**. El razonamiento es doble. Primero: aunque no mueve la aguja de citabilidad directa en motores de respuesta al consumidor, sí protege el presupuesto de rastreo agéntico (agentic crawl budget) y evita romper la auditoría oficial de Lighthouse Agentic Browsing, que entra cada vez más en checklists de DevOps y QA. Segundo: el coste de implementación es marginal (un archivo de texto plano en la raíz) frente al coste reputacional de aparecer con auditorías agénticas rotas en informes técnicos compartidos con clientes o partners. La sección sigue siendo honesta sobre lo que el archivo no hace: no garantiza más citas, no sustituye trabajo de indexabilidad ni de autoridad. Pero la lectura de "opcional" ya no se sostiene tras la documentación de Chrome.

## 2.4 SSR vs. CSR

A pesar de la sofisticación de los modelos, los rastreadores que alimentan estos modelos (GPTBot, ClaudeBot, PerplexityBot, GeminiBot) operan bajo restricciones de eficiencia y coste computacional. A diferencia de Googlebot, que tiene capacidad inmensa para ejecutar JavaScript (Client-Side Rendering o CSR), muchos bots de IA prefieren o requieren contenido pre-renderizado (Server-Side Rendering o SSR) para una ingesta rápida y precisa.

En resumen: si el contenido crítico de una página (precios, especificaciones, respuestas) depende de la ejecución de JavaScript para mostrarse, existe un riesgo alto de que sea invisible para los procesos de obtención de información en tiempo real de los motores de respuesta.

**Datos empíricos relevantes (2026).** Estudios sectoriales independientes publicados en 2026 documentan que las páginas con FCP por debajo de 0,4 segundos promedian 6,7 citas en ChatGPT, mientras que las páginas con carga superior a 1,13 segundos promedian 2,1 citas (ratio 3:1). Por su parte, Erlin.ai —en un análisis sobre dataset propietario de citaciones de ChatGPT con cobertura multi-sectorial, sin tamaño exacto de muestra publicado— documenta que el contenido renderizado con JavaScript tiene una tasa de éxito de parsing del 23 % frente al 94 % para HTML estático con schema. Son dos fuentes independientes que apuntan al mismo problema desde ángulos distintos: el rendimiento y el método de renderizado. La interpretación de mercado más parsimoniosa es que existe un "timeout del crawler de recuperación" que limita el tiempo de espera para el render, pero esto sigue siendo una **inferencia técnica basada en la correlación**, no una confirmación oficial de los proveedores. Hipótesis alternativas plausibles incluyen sesgo del crawler hacia HTML simple por economía de tokens (capítulo 5.5), o una sub-muestra de bots sin capacidad de ejecución de JavaScript.

**Estrategia GEO.** La arquitectura técnica recomendada para 2026 es el SSR o la Generación de Sitios Estáticos (SSG). Entregar HTML plano de forma rápida asegura disponibilidad inmediata para la ingesta. Esto es especialmente crítico para contenido dinámico como precios y disponibilidad de stock en e-commerce.

## 2.5 Infraestructura de datos para la web agéntica (Agentic Web)

Más allá de los LLMs conversacionales que responden preguntas, la web agéntica ha pasado de promesa a operativa. Agentes de IA ejecutan tareas completas (reservas, compras, gestión de calendarios) de forma autónoma. Para ser visible y utilizable por estos agentes, la información debe estar estructurada no solo para la lectura, sino para la acción.

**MCP: de estándar emergente a infraestructura establecida.** A junio de 2026, el SDK de MCP alcanzó 97 millones de descargas mensuales en marzo de 2026 (una trayectoria que React tardó tres años en completar y que MCP completó en 16 meses). En diciembre de 2025, Anthropic donó MCP a la Agentic AI Foundation (AAIF) bajo la Linux Foundation, cofundada por Anthropic, Block y OpenAI. Google añadió soporte MCP a la Gemini API y a Vertex AI Agent Builder en Q1 2026. OpenAI, Microsoft, AWS y Salesforce han adoptado el protocolo. Más de 500 servidores MCP públicos están disponibles cubriendo bases de datos (Postgres, MySQL, SQLite), almacenamiento (Drive, Box, Dropbox), scraping, procesado de documentos, mensajería (Slack, email) y gestión de proyectos (Asana, Jira). Ya no es estándar emergente: es la capa de conectividad estándar entre agentes y datos empresariales.

**Servidores MCP relevantes para SEO/GEO en 2026:** mcp-gsc (conexión OAuth con la API de Google Search Console), DataForSEO MCP (endpoints de SERPs, históricos de ranking y backlinks a 0,0006 dólares por consulta), Firecrawl MCP (raspado y conversión masiva de HTML a Markdown limpio), GA4 MCP (Google Analytics 4 oficial). Las herramientas de optimización empiezan a operar a través de estos servidores en vez de a través de APIs propietarias.

**WebMCP: la revolución del cliente en navegador.** Anunciado por Google en I/O 2026, WebMCP se postula como especificación W3C para interacciones agénticas locales del lado del navegador. A diferencia de MCP, que corre en servidor, WebMCP expone la lógica interactiva del sitio web directamente al agente del navegador (Chrome). Dos aproximaciones técnicas: **Declarative API (HTML Annotations)** transforma elementos \<form\> en herramientas legibles para el agente mediante atributos especiales (toolname, tooldescription, toolparamdescription). El navegador interpreta la estructura y la expone como un esquema JSON. El agente no necesita interpretar coordenadas del DOM: invoca directamente la herramienta. **Imperative API (JavaScript)** permite registrar herramientas complejas mediante navigator.modelContext.registerTool para elementos no estructurados (selectores complejos, planos de asientos, módulos de personalización).

**Web IQ de Microsoft.** Presentado el 2 de junio de 2026 en Microsoft Build, Web IQ es Bing reconstruido para las necesidades de los agentes autónomos. Su prioridad no es clasificar enlaces con base en PageRank, sino empaquetar datos semánticos estructurados libres de ruido HTML en milisegundos para alimentar pipelines de RAG y grounding de Copilot y ChatGPT.

La optimización para agentes (AAIO) implica en consecuencia:

- **Puntos de acceso estructurados.** Uso de Schema.org avanzado (Action, Order, Reservation) para indicar explícitamente qué acciones puede realizar un agente.

- **Claridad en las restricciones.** Políticas de devolución, envío, garantías y restricciones geográficas en formatos legibles por máquina. Un agente no completará una transacción si no puede verificar las restricciones.

- **Interoperabilidad.** Sistemas de e-commerce compatibles con los protocolos de compra universales (UCP) que están adoptando Google y OpenAI. Google citó UCP explícitamente en su guía oficial de mayo de 2026.

- **Marcado WebMCP en flujos transaccionales.** Empezar por formularios de checkout, reserva y registro de leads.

> **APOYO VISUAL · Esquema MCP vs. WebMCP**
> ***Descripción para diseño:*** *Diagrama comparativo en dos columnas. Columna izquierda titulada "MCP (server-side)": agente de IA (icono robot/cabeza) → flecha → "Servidor MCP" (icono servidor) → flecha → bases de datos, APIs y herramientas empresariales (iconos: Postgres, Drive, Slack, Jira). Columna derecha titulada "WebMCP (client-side, en navegador)": agente de IA (icono navegador Chrome) → flecha → "Sitio web del usuario" con dos sub-bloques: (a) "Declarative API" — código HTML con atributos toolname/tooldescription resaltados; (b) "Imperative API" — fragmento JS con navigator.modelContext.registerTool. Pie de figura: "MCP conecta agentes con servidores empresariales; WebMCP expone la lógica interactiva del navegador directamente al agente." Paleta morados corporativos sobre fondo blanco. Estilo técnico editorial.*

**Puente al roadmap (capítulo 10).** La implementación táctica de WebMCP y MCP no pertenece a este capítulo de fundamentos sino a la Fase 3 del roadmap 30-60-90 (días 61-90), donde se detalla cómo marcar los formularios de checkout, reservas y registro de leads con atributos declarativos, y cómo elegir entre la API declarativa (HTML) y la imperativa (JavaScript) según la complejidad del flujo. Si tu organización opera en e-commerce o reservas, este capítulo y el capítulo 10 deben leerse juntos.

## 2.6 Embeddings cross-lingüísticos: el espacio vectorial como puente entre idiomas

Una de las propiedades técnicas más subestimadas de los LLMs actuales es la capacidad de operar en un espacio vectorial multilingüe compartido. Los embeddings modernos (text-embedding-3 de OpenAI, multilingual-e5, BGE-M3) entrenan representaciones donde "diabetes infantil" en español queda matemáticamente cerca de "childhood diabetes" en inglés o "diabète infantile" en francés, sin necesidad de traducciones literales en el corpus.

La implicación operativa para el GEO en mercados no anglosajones es de primer orden:

- **Una consulta en inglés puede recuperar una fuente en español de alta calidad** (y viceversa) si el contenido tiene densidad semántica suficiente. El sesgo histórico de "si no está en inglés, no se cita" se diluye en motores con buenos embeddings multilingües. ChatGPT y Gemini muestran este comportamiento de forma documentada en queries específicas (terminología técnica, papers académicos, manuales).

- **La traducción literal pierde valor; la equivalencia conceptual gana valor.** Un artículo en español sobre "alimentación complementaria en lactantes" puede ser citado en una respuesta a "baby-led weaning evidence" si las entidades, las cifras y los conceptos clave son reconocibles a través de embeddings cross-lingüísticos. No es necesario duplicar el contenido en inglés si la cobertura conceptual es sólida en español.

- **Limitación práctica.** El efecto cross-lingüístico funciona mejor en dominios técnicos con vocabulario internacionalizado (medicina, finanzas, tecnología) que en dominios con fuerte componente cultural local (gastronomía regional, legislación nacional, slang). Para queries fuertemente culturizadas, sigue siendo prudente publicar contenido nativo en cada idioma objetivo.

- **Acción GEO.** Para marcas hispanohablantes con clientes internacionales, esto significa que el contenido publicado en español puede ser visible en motores consultados en inglés si la densidad semántica y las entidades reconocibles son lo bastante fuertes. La estrategia editorial debe priorizar profundidad conceptual sobre traducción mecánica.

- **Estado del research.** No hay estudio empírico publicado a junio de 2026 que cuantifique el solapamiento cross-lingüístico de citaciones en AIO o ChatGPT con metodología robusta. La afirmación de que "embeddings cross-lingüísticos permiten recuperación trans-idioma" tiene base técnica sólida en la arquitectura de los modelos; la afirmación cuantitativa sobre cuánto pesa en la práctica para una marca específica es hipótesis operativa, no hecho consolidado.

## 2.7 Cloudflare y el nuevo régimen de permisos de crawling

El cambio técnico más grande del cuatrimestre no vino de un buscador: vino de la capa de red. **Cloudflare, que gestiona cerca del 20% del tráfico web mundial**, cambió sus valores por defecto para el crawling de IA y, con ello, cambió las reglas del juego para publishers y marcas.

### 2.7.1 La propuesta inicial del 1 de julio y la rectificación del 15 de septiembre

El 1 de julio de 2026, en lo que llamó "Content Independence Day", Cloudflare anunció que a partir del 15 de septiembre bloquearía por defecto los crawlers de las categorías Training y Agent en páginas con anuncios, para dominios nuevos, sitios nuevos de clientes existentes y todas las zonas gratuitas. El punto más polémico era que los crawlers de "uso mixto" se tratarían con la regla más restrictiva, y Cloudflare citó por su nombre a Googlebot, Applebot y Bingbot. La prensa interpretó inmediatamente que Cloudflare iba a bloquear Googlebot.

**El 15 de septiembre, Cloudflare rectificó**. En su post "Have it both ways" introdujo dos elementos nuevos: el ajuste "Disallow AI Training" (permite rechazar el entrenamiento sin bloquear la búsqueda) y la categoría "Accountable" (bots que separan sus crawlers y respetan el opt-out de entrenamiento). Según Cloudflare: "Applebot, Bingbot, and Googlebot are Accountable. Under Disallow AI Training they can keep crawling your site for search."

> **Lo que realmente cambió el 15 de septiembre**
> No hubo bloqueo general a Googlebot. Lo que sí cambió por defecto en zonas gratuitas y dominios nuevos: Search queda ALLOW (Googlebot/Bingbot/Applebot pasan). Training queda DISALLOW (nuevo opt-out). Agent (ChatGPT-User, Perplexity-User) queda BLOCK en páginas con anuncios. El riesgo real para marcas no es el entrenamiento: es que los agentes queden bloqueados en silencio.

![Figura 2.7.1. Nuevos defaults de Cloudflare para dominios con anuncios (desde 15 sep 2026). Fuente: Cloudflare, "Have it both ways" blog post.](charts/cap2_cloudflare_defaults.png)

*Figura 2.7.1. Nuevos defaults de Cloudflare para dominios con anuncios (desde 15 sep 2026). Fuente: Cloudflare, "Have it both ways" blog post.*

### 2.7.2 Requisitos para ser "Accountable" y postura de cada actor

Para que un operador reciba la etiqueta Accountable debe cumplir cuatro condiciones, según Cloudflare:

- Ofrecer un opt-out claro de entrenamiento con IA.

- Ofrecer un opt-out para resúmenes de IA (Cloudflare dice que "AI summaries are next").

- Dar visibilidad a nivel de URL de qué se puso a disposición para entrenamiento y métricas de búsqueda.

- Garantizar que el opt-out no penaliza el ranking.

Pueden cumplir con compromisos con plazo, no solo con funciones ya desplegadas. **OpenAI, Anthropic, Amazon y Meta** también reciben la etiqueta porque ya separan sus crawlers (OAI-SearchBot vs GPTBot, Claude-SearchBot vs ClaudeBot, etc.).

Resumen de postura por actor:

| Actor | Postura y palanca de opt-out |
|---|---|
| Google | No ha separado Googlebot (crawler único para search, grounding y features de IA). Palancas: token Google-Extended en robots.txt (cubre entrenamiento y grounding de Gemini, pero NO AI Overviews ni AI Mode); control de GSC para excluir el sitio de las funciones generativas (31 ago, global). No pierde el ranking de Search al activar el opt-out. |
| Microsoft (Bing) | Opt-out de entrenamiento vía meta NOARCHIVE. Regla de robots.txt prometida para "early 2027". Aviso: activar "Disallow AI Training" en Cloudflare NO transmite esa preferencia a Bing. |
| Apple | Respeta Applebot-Extended y aplica nosnippet a la salida de IA (reescritura de su documentación, 8 jun 2026). |
| OpenAI, Anthropic, Perplexity | No han emitido declaraciones oficiales sobre el cambio del 15 sep. Ya separan sus crawlers de search y entrenamiento. |
| Meta | Meta-ExternalAgent declara a la vez entrenamiento e indexación. Ambigüedad confirmada en Cloudflare. |

### 2.7.3 Datos de adopción y comportamiento de los crawlers

Cuánto se está adoptando el bloqueo y qué están haciendo realmente los crawlers (datos de Cloudflare y terceros, verificados a 6 oct 2026):

| Dato | Valor | Fuente |
|---|---|---|
| Sitios de Cloudflare que bloquean bots de búsqueda | <1% | Cloudflare (15 sep) |
| Sitios que bloquean entrenamiento de alguna forma | 17% | Cloudflare (15 sep) |
| Tráfico de crawlers verificados de uso mixto | 36,6% (sep) | Cloudflare |
| Peticiones de crawlers con fin de entrenamiento | 52% (jun), vs 22% en primavera 2025 | PPC Land vía Cloudflare |
| Crawl de IA que re-descarga páginas sin cambios | >50% | Cloudflare |
| Ratio crawl-to-referral (Anthropic, 28 días a 21 jul) | 2.237 : 1 | Cloudflare Radar |
| Ratio crawl-to-referral (Perplexity, 28 días a 21 jul) | 225 : 1 | Cloudflare Radar |
| Ratio crawl-to-referral (OpenAI, 28 días a 21 jul) | 217 : 1 | Cloudflare Radar |

> **Las ratios crawl-to-referral varían mucho por ventana temporal**
> Los materiales de Cloudflare del 1 de julio citaban Anthropic ~38.000:1 y OpenAI ~1.091:1, en una ventana diferente a la de octubre. No comparar cifras de ventanas distintas. Incluir siempre la ventana al citar.

### 2.7.4 Pay Per Use y la monetización del crawling de IA

Como contrapartida al bloqueo por defecto, Cloudflare lanzó Pay Per Use el 1 de julio (sustituye al modelo Pay Per Crawl del año anterior). Mientras Pay Per Crawl cobraba por rastreo, Pay Per Use cobra cuando el contenido se usa en una respuesta o lo consume un agente. Primeros partners: Ceramic.ai y You.com.

Hoja de ruta posterior: **21 ago** — lanzamiento de Bot Preference Sync. **30 sep** — Pay Per Use y Monetization Gateway entran en beta (confirmado por Search Engine Journal). Un medio polaco (Promptowy) menciona pagos en USDC sobre Base vía Coinbase, aún sin confirmar.

### 2.7.5 Qué hacer con esto: la decisión de bots como decisión de negocio

Bloquear el entrenamiento ya no implica bloquear la búsqueda en Cloudflare para los operadores Accountable. Pero bloquear el entrenamiento sí reduce, con alta probabilidad, la presencia de la marca en la "memoria paramétrica" de futuros modelos. Esto pesa en respuestas sin búsqueda, como Personal Intelligence o los asistentes de voz.

> **ACCIÓN OPERATIVA · Auditoría de Cloudflare esta semana**
> - Revisar Security > Bots > AI Crawlers en TODAS las zonas (prioridad: zonas gratuitas y dominios nuevos).
> - Comprobar la categoría Agent en páginas con anuncios: ChatGPT-User y Perplexity-User quedan BLOQUEADOS por defecto desde el 15 sep.
> - Decidir según modelo de negocio: marca que quiere ser recomendada → permitir entrenamiento y búsqueda, desbloquear agentes. Publisher cuyo producto es el contenido → bloquear entrenamiento, mantener search, evaluar Pay Per Use.
> - Instrumentar logs: segmentar GA4 por hostnames reconocidos (ChatGPT-User, OAI-SearchBot, Perplexity-User, Meta-ExternalAgent, Google-Extended) para ver cambios en tráfico post-decisión.

## 2.8 Web agéntica: el estado real de MCP, WebMCP y A2A (octubre de 2026)

La sección 2.5 explica la arquitectura. Esta pone fecha y matiz al estado de cada pieza, porque entre junio y octubre se publicó mucho discurso y muy poca adopción medible.

| Pieza | Estado a octubre de 2026 |
|---|---|
| **MCP: protocolo** | Revisión 2026-07-28: el protocolo pasa a ser *stateless*, sin handshake ni sesiones a nivel de protocolo, y añade una llamada de descubrimiento de servidor |
| **MCP: uso** | 97 M de descargas mensuales (marzo); 110 M en la keynote del MCP Dev Summit (2-3 abr, Nueva York); más de 400 M al mes según una cifra citada por fuentes sectoriales |
| **WebMCP: estatus** | Borrador de informe del Web Machine Learning Community Group, editado por ingenieros de Google y Microsoft. Un borrador de Community Group no es un estándar W3C ni está en su vía de estándares |
| **WebMCP: implementación** | Chrome: *origin trial* público de Chrome 149 a 156, anunciado en Google I/O (18-19 may). Edge 147: soporte experimental tras un flag (jun) |
| **WebMCP: API** | La ubicación de la API pasó de navigator.modelContext a document.modelContext en el borrador (27 may) y en el informe del 21 jul. Chrome 150 deprecia la ubicación antigua |
| **WebMCP: adopción** | Cercana al 0% de los sitios y ningún agente mainstream consume las herramientas todavía (informe de Spronta, julio de 2026, fuente única) |
| **A2A** | Versión 1.0 con soporte gRPC, según fuentes del sector. El *roadmap* de MCP prevé primitivas de coordinación entre agentes (T3) y un registro verificado (T4) |
| **Auditoría de preparación agéntica** | Cloudflare publicó un escáner gratuito de «agent readiness» (17 abr 2026) que puntúa, entre otras cosas, WebMCP. Lighthouse incluye auditorías de navegación agéntica desde mayo |

![Figura 2.8.1. WebMCP en 2026: cronología de implementación y adopción medida. Fuentes: borradores del W3C Web Machine Learning CG, Chrome y Spronta (jul 2026).](charts/cap2_webmcp_timeline.png)

*Figura 2.8.1. WebMCP en 2026: cronología de implementación y adopción medida. Fuentes: borradores del W3C Web Machine Learning CG, Chrome y Spronta (jul 2026).*

**Qué significa.** En blogs del sector circula la idea de que una web sin WebMCP será ignorada por los agentes. Ninguna fuente primaria la respalda, y la adopción medida es casi nula. Es una apuesta razonable de futuro, no una obligación presente.

**Lo que sí está en producción** es otra cosa, y más cercana al dinero: el checkout nativo de Google con inscripción automática de comerciantes de Shopify (22 sep, solo EE.UU.), las apps dentro de ChatGPT (Angi desde el 4 de marzo) y, desde el 16 de septiembre, los Sponsored Agents (cap. 11.6).

> **ACCIÓN OPERATIVA · Qué hacer con WebMCP este trimestre**
> - No lo pongas en la ruta crítica de producción: el origin trial es para pruebas y la API sigue cambiando entre borradores.
> - Si tu web tiene un flujo de alto valor (reserva, presupuesto, alta), prueba un piloto acotado en el origin trial y mide si algún agente lo invoca.
> - Mientras tanto, lo que rinde ya: formularios con etiquetas semánticas, HTML renderizado en servidor (2.4) y acceso de agentes bien configurado en la CDN (2.7).
> - Pasa el escáner de preparación agéntica de Cloudflare como auditoría gratuita, sabiendo que es una puntuación orientativa.

# Capítulo 3. Ecosistema de motores de respuesta en octubre de 2026

> **TL;DR DEL CAPÍTULO**
> - GPT-5.6 (Luna / Terra / Sol) es el "core update" de ChatGPT de este cuatrimestre: redistribuyó las citas.
> - AI Mode de Google supera 1.000 M de usuarios mensuales en más de 200 países y ~100 idiomas.
> - Perplexity abandonó la publicidad (feb 2026): no hay nada que comprar en Perplexity hoy.
> - No hubo ningún core update de Google entre junio y octubre: solo spam updates (jun, ago, sep).

El mercado de la búsqueda se ha fracturado. Ya no existe un "Google y el resto". Existe un ecosistema complejo de agentes especializados y motores de respuesta con capacidades y sesgos distintos. La estrategia debe ser multicanal y adaptada a la naturaleza de cada motor.

## 3.1 Google AI Overviews y AI Mode tras el I/O 2026

En el Google I/O 2026 (19 de mayo), Sundar Pichai y Liz Reid confirmaron AI Mode como el nuevo modo de búsqueda por defecto para todos los usuarios globalmente. Gemini 3.5 Flash sustituyó al modelo anterior como default. La caja de búsqueda fue rediseñada por primera vez en más de 25 años: acepta texto, imágenes, archivos, video y pestañas de Chrome como input, con sugerencias que "van más allá del autocompletado".

> *"The new search box does not mean you will only get AI responses." — Liz Reid, VP de Search de Google, I/O 2026.*

AI Mode no elimina los diez links azules. Los resultados clásicos siguen existiendo. Pero el flujo por defecto ahora arrastra al usuario hacia la conversación con IA desde la primera tecla.

**Cifras de adopción y prevalencia**

- AI Mode alcanzó 1.000 millones de usuarios mensuales en su primer año de existencia, con consultas duplicándose cada trimestre.

- AI Overviews —la capa anterior, distinta de AI Mode— aparecen en el 48 % de las queries rastreadas a febrero de 2026, frente al 31 % un año antes (incremento del 58 % interanual).

- La posición orgánica \#1 pierde aproximadamente el 18 % de sus clics cuando aparece un AI Overview. Las categorías informacionales han registrado caídas del 30-40 % en queries afectadas.

- Queries respondidas en AI Mode tienen una tasa de cero-clic estimada en torno al 93 %. Para estas queries, el SEO orgánico tradicional no tiene alcance salvo que el sitio sea citado como fuente dentro de la respuesta.

**Novedades de I/O 2026 con implicaciones directas para GEO**

**Information Agents (background agents).** Agentes que operan en segundo plano 24/7 sin input del usuario, monitorizando precios, disponibilidad, actualizaciones de noticias y temas definidos por el usuario. El agente configura búsquedas autónomas y notifica vía push o email cuando detecta cambios. Lanzamiento previsto verano 2026. La estrategia de citación para un agente que busca continuamente es distinta a la de una búsqueda puntual: el contenido que se convierte en fuente de referencia repetida genera exposición sin interacción del usuario.

**Generative UI.** Interfaces personalizadas generadas al vuelo para queries específicas (fitness, planificación, recetas, viajes). No es un resultado rankeado en sentido convencional. Los factores de inclusión en estas interfaces dinámicas no han sido desvelados.

**Agentic checkout integrado.** Google amplió la capacidad de reservas y compras autónomas dentro de Search. Las marcas con datos estructurados de disponibilidad, precios e inventario en tiempo real tienen ventaja directa en esta superficie.

**Seamless AI Search.** AI Overviews y AI Mode quedan unificados en un flujo continuo: la pregunta activa un AI Overview que puede continuar en AI Mode sin salir de la SERP. Lanzado en desktop y mobile worldwide el día del I/O.

**Asimetría documentada entre AI Overviews y AI Mode.** Un análisis de Ahrefs sobre 730.000 pares de respuestas demostró únicamente un 13,7 % de coincidencia de citación entre las fuentes utilizadas en AI Overviews y las utilizadas en AI Mode para las mismas consultas. Google utiliza criterios de recuperación diferenciados según la interfaz. Optimizar para una no garantiza visibilidad en la otra.

## 3.2 ChatGPT Search y el primer ChatGPT Core Update

ChatGPT se ha consolidado como motor de respuesta primario para cientos de millones de usuarios (700-800 millones de usuarios activos semanales). La retirada de modelos antiguos como GPT-4o en favor de las series GPT-5 (5.2, 5.3-Codex, 5.4) y, desde finales de mayo de 2026, GPT-5.5 Instant como modelo de citación por defecto, marca un salto en capacidad de razonamiento y frescura de los datos.

**El primer ChatGPT Core Update documentado (23 de mayo de 2026).** SISTRIX documentó el primer core update de ChatGPT con metodología comparable a los core updates de Google. La transición a GPT-5.5 redistribuyó casi la mitad de todas las citas de ChatGPT en 48 horas, con un patrón claro: publishers alemanes y marcas de servicios hacia arriba, agregadores internacionales hacia abajo. La implicación metodológica es importante: los sistemas generativos tienen actualizaciones con ganadores y perdedores que requieren los mismos reflejos que los core updates de Google. Cualquier herramienta de tracking GEO debe ser capaz de detectar estas redistribuciones.

**Preferencias de citación de ChatGPT**

Kevin Indig documentó correlaciones entre métricas SEO y tasas de citación en ChatGPT: **domain rating y Flesch Score** son los predictores más fuertes. A diferencia de Perplexity o AI Overviews, que priorizan más word count y sentence count, ChatGPT tiene un sesgo hacia autoridad de dominio y legibilidad.

ChatGPT Search usa el índice de **Bing** como capa principal de recuperación web en tiempo real. La indexación en Bing no es opcional para visibilidad en ChatGPT.

**ChatGPT Agent sustituye a Operator**

En febrero de 2026, OpenAI deprecó Operator y lo reemplazó por ChatGPT Agent, un sistema agéntico unificado que integra búsqueda, ejecución de tareas web y comercio en un solo flujo. ChatGPT Agent puede realizar checkout instantáneo, navegar webs autónomamente y completar tareas en nombre del usuario. Las compras asistidas por IA crecieron un 340 % en 2025, mientras que los CTR de Google Shopping declinaron un 18 % en el mismo período.

**Bots y separación operacional**

OpenAI distingue tres agentes técnicos cuya separación es una de las novedades estratégicas más importantes para publishers y equipos legales: **OAI-SearchBot** para aparecer en ChatGPT Search, **GPTBot** para entrenamiento y **ChatGPT-User** para acciones iniciadas por el usuario. La política de robots.txt debe definirse por bot, no por proveedor: se puede permitir aparecer en búsqueda sin permitir entrenamiento, o viceversa.

## 3.3 Perplexity AI: Comet Plus, Perplexity Computer y la consolidación enterprise

Perplexity ha evolucionado para diferenciarse como herramienta de Deep Research para trabajadores del conocimiento, académicos y analistas financieros. Su influencia en el sector B2B y educativo es desproporcionada a su cuota de tráfico.

**Métricas de negocio (junio de 2026)**

- **Valoración:** 20.080 millones de dólares tras la ronda Series E-6 a principios de 2026, con más de 1.500 millones de dólares de capital total acumulado.

- **ARR:** 500 millones de dólares en abril de 2026 (desde 148 millones a mediados de 2025), impulsado por la adopción corporativa de funciones premium.

- **Usuarios:** más de 100 millones de usuarios activos mensuales a nivel global cuando se computan las interacciones generadas a través de su suite de agentes autónomos y distribuciones API de terceros.

**Perplexity Computer (febrero de 2026)**

Agente autónomo que procesa tareas complejas de múltiples pasos, diseñado para ejecutar búsquedas iterativas mediante el modelo Opus 4.6. Convertido en la fuente de facturación de mayor tracción comercial. La optimización aquí requiere feeds de productos estructurados y datos financieros accesibles.

**El programa Comet Plus y la remuneración del tráfico**

Ante la ofensiva legal y reputacional de medios como News Corp y Forbes por uso no autorizado de su propiedad intelectual, Perplexity lanzó en agosto de 2025 su programa de alianzas Comet Plus. A junio de 2026 agrupa a más de 300 editores y corporaciones de medios con un presupuesto asignado de **42,5 millones de dólares**. El modelo de reparto es 80 % para el editor / 20 % para Perplexity, sobre los 5 dólares mensuales de la suscripción premium Comet Plus.

El programa introduce tres tipologías de tráfico remuneradas:

5.  **Human Traffic.** Visitas directas y navegación clásica del usuario que hace clic en el enlace de la fuente.

6.  **Indexed Traffic.** Compensación basada en la frecuencia con la que el motor recupera y procesa la URL como grounding para sintetizar respuestas, con independencia de si el usuario final hace clic. Es la primera resolución parcial del problema del zero-click traffic.

7.  **Agent Traffic.** Utilización de la información del editor por parte de "Comet Assistant" para completar tareas transaccionales en nombre del usuario.

**Fuentes preferidas.** Reddit representa el 6,6 % de las citas totales de Perplexity y el 46,7 % de su top-10 fuentes (Profound, 680M citas). Si una marca no es visible en los hilos de Reddit relevantes de su categoría, no es visible en Perplexity. Wikipedia y papers académicos completan el podio.

## 3.4 Gemini 3.5 Flash: la apuesta multimodal de Google

Gemini 3.5 Flash es el modelo por defecto de AI Mode globalmente desde I/O 2026, integrando texto, imagen, audio y video de forma nativa en una sola ventana de contexto.

**Ventana de contexto masiva.** Su capacidad para procesar millones de tokens permite casos de uso únicos: subir manuales técnicos completos o libros enteros para que el modelo responda preguntas basándose exclusivamente en esa fuente. Para las marcas, publicar PDFs técnicos extensos y bien estructurados es una estrategia GEO válida, ya que Gemini puede leerlos y citarlos con precisión, convirtiendo manuales de usuario en activos de marketing.

**Freshness como factor de ranking.** Análisis sectoriales documentan que páginas actualizadas en ciclos inferiores a 30 días reciben aproximadamente 3,2 veces más citaciones tras la integración de Gemini 3.x como motor de indexación.

## 3.5 Claude (Anthropic): contexto masivo y computer use en el sector B2B

Mientras ChatGPT domina las consultas del día a día y Google acapara las búsquedas locales, la familia de modelos Claude (arquitectura 3.5 Sonnet y el despliegue de Claude 4.0) se ha apoderado de los entornos corporativos y de alta exigencia técnica.

Anthropic ha diseñado un modelo regido por lo que denominan "Inteligencia Constitucional", lo que lo convierte en el sistema más estricto contra alucinaciones, sesgos y contenido de baja calidad. Para sectores B2B (finanzas, legal, ingeniería, software), Claude es hoy el árbitro definitivo. Para que tu marca sea la respuesta elegida por Claude, la estrategia GEO debe adaptarse a sus dos grandes superpoderes:

- **Dominio de la ventana de contexto (long-form content).** Claude puede procesar más de 2 millones de tokens a la vez. No solo lee tu blog: ingiere whitepapers corporativos completos, informes anuales en PDF y documentaciones técnicas. Publicar estudios profundos, exhaustivos y cargados de datos empíricos te posicionará como "fuente semilla" preferida para sus resúmenes corporativos.

- **Filtro anti-clickbait.** Su sistema constitucional penaliza severamente sensacionalismo o afirmaciones sin respaldo. Si tu contenido usa adjetivos exagerados ("el mejor software del mundo"), Claude reducirá tu Accuracy Score y te descartará. El tono debe ser objetivo, aséptico y periodístico.

- **Optimización para computer use.** Claude fue pionero en dotar a sus agentes de capacidad para "mirar y operar" una pantalla como un humano (cursor, clic). Tu web debe tener accesibilidad técnica perfecta: etiquetas ARIA, botones claros, estructuras lógicas. Si el agente no puede ver cómo interactuar con tu tabla de precios o tu formulario, no te recomendará a un cliente corporativo. Desde la versión 20260209, Claude incorpora dynamic filtering mediante código en su web search tool para depurar resultados antes de cargar contexto.

## 3.6 Motores de respuesta local y contextual

La búsqueda local ha sufrido una transformación radical. Ya no se trata solo de "dónde está el café más cercano", sino de "cuál es el mejor café para trabajar con ambiente tranquilo". Los motores de IA utilizan un consenso de opinión agregado para responder a estas consultas cualitativas, yendo más allá de la proximidad física.

- **Consenso de entidad.** Google y otros motores evalúan la entidad de negocio local basándose en la consistencia de datos a través de múltiples plataformas (Yelp, TripAdvisor, Instagram, TikTok, sitios web locales). Si la información es contradictoria (horarios diferentes, menús desactualizados), la confianza de la IA cae y la visibilidad desaparece. La consistencia NAP (Name, Address, Phone) es ahora consistencia de atributos.

- **Micro-atributos.** La IA extrae micro-atributos de las reseñas de usuarios ("buen wifi", "apto para veganos", "ruidoso", "buena luz") para responder a consultas de cola larga. Optimizar el perfil de negocio para estos atributos implícitos es crucial.

- **Hiper-localidad.** Los modelos entienden límites vecinales y contextos culturales locales mejor que nunca, priorizando negocios con conexión auténtica con su ubicación específica a través de contenido y menciones locales.

## 3.7 Novedades de los motores entre junio y octubre de 2026

Esta sección reúne lo que cambió en cada motor desde junio de 2026. Los efectos sobre las citas se desarrollan en 6.7 y 4.6.

### 3.7.1 ChatGPT: GPT-5.6 y los cuatro crawlers de OpenAI

GPT-5.6 salió en preview el 26 de junio y en disponibilidad general el 9 de julio, en tres niveles: Luna (rápido y barato), Terra (intermedio) y Sol (insignia). El 6 de agosto Luna pasó a ser el modelo por defecto de los planes Free y Go, y Plus y Pro recibieron un Sol actualizado con control del esfuerzo de razonamiento. Fue el equivalente a un core update de ChatGPT en este periodo, por su efecto sobre cómo busca y qué cita.

| Agente de OpenAI | Para qué sirve | Qué pasa si lo bloqueas |
|---|---|---|
| **OAI-SearchBot** | Mostrar sitios en las funciones de búsqueda de ChatGPT | El sitio no aparece en las respuestas de búsqueda de ChatGPT, aunque puede seguir saliendo como enlace de navegación |
| **GPTBot** | Entrenamiento de modelos | Independiente de OAI-SearchBot: bloquearlo no te saca de la búsqueda de ChatGPT |
| **ChatGPT-User** | Acciones iniciadas por el usuario dentro de ChatGPT y GPTs personalizados | OpenAI indica que las reglas de robots.txt pueden no aplicarse a este agente. Es el que Cloudflare bloquea por defecto en páginas con anuncios (2.7) |
| **OAI-AdsBot** | Validar la seguridad de las páginas de destino enviadas como anuncios | Solo visita landing pages de anuncios. Si lo bloqueas, puedes tener problemas de aprobación de anuncios (11.14) |

### 3.7.2 Google: nuevos modelos, nuevos controles y ningún core update

Google declaró el 3 de junio que los AI Overviews superan los 2.500 M de usuarios activos mensuales y que AI Mode supera los 1.000 M. Son cifras de la propia compañía, sin verificación externa.

- **Modelos.** Gemini 3.8 Flash quedó seleccionable en AI Mode para Pro y Ultra el 2 de septiembre. El 4 de septiembre Google reconoció que ese modelo estaba eliminando las citas («no funcionaba como se pretendía») y prometió corregirlo. El 15 de septiembre Search Live pasó a Gemini 3.8 Live en todo el mundo.

- **Superficie.** El 28 de agosto los AI Overviews empezaron a expandirse a respuestas de estilo AI Mode en algunas consultas. El 28 de septiembre la monitorización de temas (los *information agents*) dejó de ser exclusiva de Ultra y llegó a todos los usuarios.

- **Control de exclusión.** El 3 de junio Google empezó a probar en Search Console un interruptor para decidir si un sitio aparece y sirve de base a las funciones generativas. Es global desde el 31 de agosto. Quien se da de baja no recibe tráfico ni impresiones de esas funciones. Según prensa especializada, opera a nivel de dominio y no impide el entrenamiento.

- **Algoritmo.** Ningún core update entre junio y octubre (el último fue el de mayo, del 21 de mayo al 2 de junio). Hubo tres spam updates: 24-26 de junio, 18-21 de agosto y desde el 24 de septiembre, con hasta dos semanas de despliegue. Los artículos que hablan de un core update en septiembre no tienen respaldo en el panel oficial de estado de Search.

> **Un fallo de un modelo puede borrar tus citas sin que cambie nada en tu web**
> El caso de Gemini 3.8 Flash es la prueba de que la visibilidad en IA depende de decisiones de despliegue ajenas. Si tus citas en AI Mode caen de golpe en septiembre y no tocaste nada, comprueba primero el modelo seleccionado antes de reescribir contenido.

### 3.7.3 Perplexity, Claude y Copilot

- **Perplexity.** Sin publicidad desde febrero de 2026 (11.8.1). Comet es gratuito en todo el mundo y Comet Plus cuesta 5 USD con reparto de ingresos a publishers. El 9 de marzo un tribunal concedió a Amazon una medida cautelar contra el agente de compras de Comet, recurrida a los dos días: es el precedente jurídico más relevante del comercio agéntico.

- **Claude (Anthropic).** Tres agentes con reglas de robots.txt separadas: ClaudeBot (entrenamiento), Claude-User (recuperación cuando un usuario pregunta) y Claude-SearchBot (indexación para búsqueda). Anthropic advierte que bloquear Claude-SearchBot puede reducir la visibilidad del sitio en los resultados de búsqueda de Claude, y afirma que sus tres agentes respetan robots.txt, a diferencia de ChatGPT-User y Perplexity-User. Los productos de Claude no muestran anuncios.

- **Microsoft Copilot.** Se apoya en el índice de Bing para el *grounding*. En el plano publicitario es el canal de IA más maduro para comercio (11.8.2). En medición, Bing Webmaster Tools incorporó el 16 de junio Intents, Topics, Citation Share y Compare (8.10).

> **ACCIÓN OPERATIVA · Revisar los agentes que sí puedes gestionar**
> - En robots.txt y en la CDN, separa explícitamente OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, Claude-User y Claude-SearchBot. Cada uno tiene una función distinta.
> - Si no quieres entrenamiento pero sí visibilidad, bloquea GPTBot y ClaudeBot y deja abiertos OAI-SearchBot y Claude-SearchBot.
> - Anota la fecha de cada cambio de modelo (ChatGPT, Gemini) en tu cuaderno de análisis: explica caídas de citas que de otro modo atribuirías a tu contenido.

# Capítulo 4. Algoritmos de ranking en IA generativa y el decoupling rankings-citas

> **TL;DR DEL CAPÍTULO**
> - Las señales que más se asocian con ser citado son las menciones (YouTube y web), no los backlinks ni el Domain Rating.
> - La literatura académica pasó de «+40% de visibilidad» a «en entornos competitivos casi nada funciona de forma estable».
> - Cualquier cifra de decoupling tiene una vida útil de un trimestre: la caída de Reddit y el fallo de citas de Gemini 3.8 Flash lo demuestran.

Si el SEO tenía más de 200 factores de ranking, el GEO tiene vectores de influencia complejos e interconectados. Aunque los algoritmos son opacos, la investigación empírica ha identificado los mecanismos clave que determinan la visibilidad en 2026. La evidencia más importante es la documentación con varios datasets independientes de la divergencia estructural entre el ranking orgánico clásico y las citas en IA.

## 4.1 Ganancia de información

Este es el concepto central del GEO en 2026. Los LLMs están diseñados matemáticamente para reducir la incertidumbre. Cuando un modelo recupera información para responder a una pregunta, busca datos que aporten valor adicional al conocimiento que ya posee o que ya ha recuperado de otras fuentes.

- **El problema del contenido derivativo.** Si tu artículo repite lo mismo que los 10 primeros resultados de Google, su ganancia de información es cercana a cero. El modelo lo descartará por redundante.

- **La solución.** El contenido debe ofrecer datos originales (encuestas propias, estudios de caso), experiencia personal verificable o una síntesis novedosa. El contenido que aumenta el ruido es penalizado; el que lo reduce es premiado con citaciones.

## 4.2 Densidad semántica y PAWC (Position-Adjusted Word Count)

El PAWC mide no solo si eres citado, sino cuánto texto dedica la IA a tu fuente y en qué posición de la respuesta aparece. Una mención al principio de la respuesta tiene mucho más valor que una al final.

Los LLMs tienen un sesgo inherente hacia la información concreta y específica. Prefieren frases que contienen números, fechas, nombres propios y relaciones causales claras. Un párrafo denso en entidades ("El iPhone 17 Pro tiene un sensor de 48MP fabricado por Sony...") tiene una probabilidad de citación significativamente mayor que un párrafo vago ("La cámara del nuevo iPhone es muy buena...").

**Resultados cuantitativos del paper de Princeton (Aggarwal et al., KDD 2024)**

Sigue siendo el único paper peer-reviewed ampliamente citado que cuantifica el impacto de tácticas específicas en citabilidad. Metodología: GEO-bench, 10.000 queries en 9 dominios. Nueve tácticas testadas con rigor estadístico.

| Táctica de contenido | Incremento en PAWC | Incremento en Subjective Impression |
|---|---|---|
| Adición de citas de expertos (Quotation Addition) | +41 % | +28 % |
| Inyección de datos estadísticos | +31 % | +23 % |
| Citar fuentes (Cite Sources, inline citations) | +28 % | +28 % |
| Fluency Optimization (simplificación sintáctica) | +28 % | — |
| Lenguaje persuasivo y accesible | Positivo | Positivo |
| Keyword stuffing | -9 % (degradación) | — |

![Figura 4.1. Impacto de las tácticas de contenido sobre el PAWC (Aggarwal et al., KDD 2024).](charts/cap4_princeton_tacticas.png)

*Figura 4.1. Impacto de las tácticas de contenido sobre el PAWC (Aggarwal et al., KDD 2024).*

Las páginas en posición ~5 del ranking orgánico tradicional de Google se benefician un 115,1 % de la optimización GEO. Las páginas en posición \#1 muestran pocos cambios marginales. El GEO democratiza la visibilidad: tiene más impacto en páginas con visibilidad inicial media que en las que ya dominan.

**Optimización.** La redacción debe ser densa. Eliminar adjetivos vacíos y adverbios innecesarios. Cada oración debe aportar un dato fáctico. La brevedad con densidad es la clave para la "citalidad".

## 4.3 El filtro de calidad: Quality Rater Guidelines actualizadas (mayo 2026)

El 14 de mayo de 2026 Google actualizó oficialmente sus Search Quality Rater Guidelines, introduciendo cambios radicales que impactan directamente la elegibilidad de los sitios para aparecer en AI Overviews y AI Mode. El May 2026 Core Update se completó el 2 de junio de 2026 e incorpora estas señales de forma nativa.

- **Compression Fidelity (fidelidad de compresión).** Nueva sub-rúbrica que exige a los evaluadores calificar negativamente textos generados de forma automatizada a gran escala (scaled content abuse) que actúan como filler o relleno sin información original. Si un texto puede ser resumido o generado por un chatbot básico en segundos sin edición humana ni valor añadido, recibe la calificación más baja de calidad.

- **Authorship Classifier.** Clasificadores algorítmicos entrenados para verificar la presencia de señales claras de autoría física y reputación experta asociada. Los sitios web con calendarios editoriales agresivos impulsados por IA pero carentes de firmas expertas verificables y de footprints digitales coherentes sufrieron caídas masivas en visibilidad generativa y en Google Discover tras el rollout del May 2026 Core Update.

**E-E-A-T como gatekeeper.** Lily Ray (Amsive) ha documentado que las mismas señales E-E-A-T que importan a Google aparecen de forma desproporcionada en las URLs que citan los LLMs. "GEO no reemplaza al SEO; amplifica las páginas que ya se ganaron el derecho a rankear." El 96 % de las citas en AI Overviews provienen de fuentes con señales E-E-A-T fuertes. Las páginas con 15 o más entidades reconocidas muestran una probabilidad de citación 4,8x mayor (Wellows).

**Citation worthiness.** Para ser citado, el contenido debe parecer una fuente primaria. El uso de referencias académicas, el tono objetivo y periodístico, y la ausencia de lenguaje promocional agresivo aumentan la "dignidad de cita" del contenido.

## 4.4 El decoupling rankings-citas: el dato más disruptivo de 2026

Varios datasets independientes han documentado que la correlación entre estar en el top-10 orgánico de Google y ser citado en respuestas de IA ha caído drásticamente entre mid-2025 y Q1 2026. Las metodologías difieren entre estudios y las cifras concretas no son directamente comparables; la dirección es inequívoca.

**Las tres mediciones independientes**

| Fuente | Metodología | Hallazgo principal |
|---|---|---|
| Ahrefs (julio 2025) | 1,9 M citas analizadas | 76 % de citas en AI Overviews procedían del top-10 de Google para la misma query |
| Ahrefs (marzo 2026) | 863.000 keywords y 4 M URLs | 37,9 % top-10, 31,2 % posiciones 11-100, 31,0 % páginas sin ranking en el top-100 |
| BrightEdge (febrero 2026) | 5,47 M queries | 17 % overlap top-10 (metodología distinta a Ahrefs) |
| Profound (2025-2026) | 680 M citas analizadas | 80 % de fuentes citadas en AI search no aparecen en el top-10 de Google para la misma query; solo el 12 % coincide exactamente |
| Ahrefs / ChatGPT (2025-2026) | Comparativa multiplataforma | 6,82 % de overlap entre ChatGPT y el top-10 de Google; el 28,3 % de páginas más citadas por ChatGPT no tienen visibilidad alguna en Google |

![Figura 4.2. Evolución del overlap entre top-10 orgánico y citaciones en AIO. Tres estudios independientes, tres metodologías, una misma dirección.](charts/cap4_decoupling_evolucion.png)

*Figura 4.2. Evolución del overlap entre top-10 orgánico y citaciones en AIO. Tres estudios independientes, tres metodologías, una misma dirección.*

**Análisis sectorial (BrightEdge, 2026)**

- **Healthcare:** 24 % de solapamiento con el top-10 (la mayor coincidencia, debido a estrictos filtros de veracidad en YMYL).

- **Finance:** 11 % de solapamiento. Las respuestas se desvían de los portales corporativos para recuperar datos de foros alternativos y APIs financieras consolidadas.

- **eCommerce / Retail:** el 62 % de las citaciones en AIO se recuperan de fuentes fuera de las 100 primeras posiciones de búsqueda clásicas, favoreciendo guías de usuarios independientes y UGC.

![Figura 4.3. El desacoplamiento varía radicalmente por sector. eCommerce y Finance muestran las mayores desviaciones.](charts/cap4_decoupling_sectorial.png)

*Figura 4.3. El desacoplamiento varía radicalmente por sector. eCommerce y Finance muestran las mayores desviaciones.*

**La posición oficial de Google y los datos empíricos: contradicción no resuelta**

La guía oficial de Google de mayo de 2026 confirma explícitamente: "AI Overviews y AI Mode están enraizados en los sistemas de ranking y calidad de búsqueda central. No hay un algoritmo separado para las respuestas de IA."

> *"To get your content to appear in AI Overview, simply use normal SEO practices. You don't need GEO, LLMO or anything else." — Gary Illyes (Google), Search Central Live, julio 2025.  
  
"Search algorithms, spam detections and policies don't fundamentally change with AI search." — John Mueller (Google), febrero de 2026.  
  
"Ranking en AI Search es very similar to classic ranking and retrieval." — Jeff Dean (Google), podcast Latent Space, marzo de 2026.*

Esa posición oficial entra en tensión con los datos empíricos del decoupling (38 % de overlap top-10 según Ahrefs; 17 % según BrightEdge). Esta contradicción existe en los datos y esta guía la presenta sin sintetizarla artificialmente.

*Hipótesis más parsimoniosa, no confirmada oficialmente:* el sistema de Search establece la elegibilidad (indexación, autoridad base, no bloqueado), pero un segundo re-ranking RAG específico para citabilidad diverge del orden orgánico. Google no ha desvelado este segundo re-ranking en términos técnicos.

**Correlaciones documentadas por researchers independientes**

- **Onely (2026):** análisis sobre páginas con presencia comprobada en AI Overviews comparando varios factores predictivos. Brand mentions correlacionan a 0,664 con citación en AI Overviews, frente a 0,218 para backlinks. Las menciones de marca son aproximadamente 3x más predictivas que los enlaces como factor de visibilidad en IA.

- **Wellows (análisis sobre 15.847 resultados de AI Overview):** el dataset cubre verticales de salud, finanzas, retail y tecnología. Semantic completeness correlaciona a r=0,87 con citación. Contenido con score 8,5/10 o superior en completeness semántica es 4,2x más probable de ser citado. Páginas con 15 o más entidades reconocidas muestran probabilidad de citación 4,8x superior. Domain Authority colapsó a r=0,18 de correlación para AI Overviews.

- **Kevin Indig (análisis multiplataforma 2025-2026):** "Ninguna de las métricas SEO clásicas tiene relación fuerte con las citas. Los LLMs tienen preferencias leves: Perplexity y AI Overviews valoran más word count y sentence count. ChatGPT prefiere domain rating y Flesch Score."

![Figura 4.4. Brand mentions vs. backlinks como predictores de citación en AI Overviews (Onely, 2026).](charts/cap4_onely_correlaciones.png)

*Figura 4.4. Brand mentions vs. backlinks como predictores de citación en AI Overviews (Onely, 2026).*

**Conclusión del bloque.** Los factores de citabilidad son parcialmente distintos de los factores de ranking. La correlación base SEO → GEO existe pero es débil e incompleta. Los factores con mayor evidencia empírica de impacto en citaciones son: semantic completeness, information density (datos, estadísticas, citas de expertos), brand mention consistency across third-party sources, readability, y topical depth (fan-out coverage).

**Implicación operativa.** Ranking orgánico y citación en IA son dos KPIs que deben medirse y gestionarse por separado, idealmente desde presupuestos y equipos distintos si la organización lo permite. La unidad base de medición deja de ser "keyword rank" y pasa a ser "query-family × persona × frecuencia de cita × outcome".

## 4.5 El rol de las data partnerships en la visibilidad

Un factor de ranking emergente y decisivo es la existencia de acuerdos de licencia de datos. Los grandes desarrolladores de IA han firmado acuerdos multimillonarios con grupos editoriales.

**Mapa actualizado de acuerdos (junio de 2026)**

| Plataforma de IA | Acuerdos confirmados |
|---|---|
| OpenAI (ChatGPT) | News Corp (250M\$/5 años: WSJ, NYP, The Times, The Australian, +30 títulos), Axel Springer (~13M\$/año, 3 años: Business Insider, Politico, Bild, Welt), Financial Times (5-10M\$/año), Associated Press, Vox Media (The Verge, Vox, NY Magazine), The Atlantic, Le Monde, Prisa Media (España), Condé Nast (The New Yorker, Vogue, WIRED), Hearst, Dotdash Meredith, Future plc (TechRadar, Tom's Guide, PC Gamer, +200 títulos), TIME, Guardian Media Group, Schibsted |
| Microsoft / Copilot | Financial Times, Reuters, Axel Springer, Hearst Magazines, USA Today Network (Copilot Daily) |
| Meta | News Corp (50M\$/año, 3 años, firmado marzo 2026), Reuters (términos confidenciales) |
| Google | Reddit (60M\$/año por acceso estructurado al corpus), alrededor de 20 medios nacionales en piloto, AP en tiempo real |
| Perplexity (Comet Plus) | Der Spiegel, Time, Fortune, Los Angeles Times, The Independent, ADWEEK, Lee Enterprises, +300 editores |

**Lo que sabemos y lo que es hipótesis**

**Lo que tiene base empírica razonable:** los contenidos de publishers con acuerdo de licencia son ingeridos con acceso prioritario al corpus de entrenamiento y al fine-tuning. Esto es confirmado por los propios términos de los acuerdos.

**Lo que es hipótesis sin evidencia metodológica publicada:** que el contenido licenciado tiene ventaja real y medible en recuperación RAG en tiempo real, más allá del entrenamiento histórico. Ninguna empresa de IA explica con claridad cómo se usa el contenido licenciado en el RAG versus en entrenamiento del modelo base. La hipótesis de "gravedad estadística" sigue siendo plausible y teóricamente sólida, pero sin evidencia empírica publicada que la confirme o la refute.

**Estrategia para marcas sin acuerdos directos.** El "parasitismo de autoridad": conseguir menciones y cobertura en medios licenciados (Digital PR) es la forma más efectiva de entrar indirectamente en el círculo de confianza de los modelos. Una mención en El País, Le Monde o el Financial Times ahora vale doble: tráfico humano y peso en el corpus preferente del modelo. Esta posición es coherente con los datos de Onely sobre la correlación brand mentions-citas (0,664).

**Nota sobre el mercado hispanohablante.** Prisa Media (El País, AS, Cadena SER) tiene acuerdo con OpenAI desde marzo de 2024. Es el único gran publisher hispanohablante en el mapa de data partnerships con OpenAI confirmado. El impacto en citabilidad de contenido en español no ha sido objeto de estudio independiente publicado. Para marcas en mercado hispano, la concentración de esfuerzos de PR digital en Prisa, La Vanguardia, ABC, Vocento, Infobae y los grandes medios de Latam es la mejor aproximación al canal preferente.

## 4.6 Datos nuevos de decoupling y la lección de la volatilidad (junio-octubre 2026)

La sección 4.4 documenta el decoupling entre ranking y citación con las cifras de junio. Esta añade lo que se publicó después y, sobre todo, una advertencia de método.

| Dato | Valor | Fuente y muestra |
|---|---|---|
| Páginas citadas que llevan datos estructurados | 65% (AI Mode) y 71% (ChatGPT) | Fischman, SSRN 2026, vía Hello Retail (asociación, no causalidad; ver Mito 4) |
| Tráfico de IA hacia el retail de EE.UU. | +393% interanual en el primer trimestre de 2026, desde una base pequeña | Adobe |
| Caída del CTR con AI Overviews | De −34,5% a −58% en diez meses | Ahrefs, citado en el research de referencia |

![Figura 4.6.1. Correlación de distintas señales con la frecuencia de citación. Fuente: InboundCycle sobre datos de Ahrefs (2026). Correlación, no causalidad.](charts/cap4_correlaciones_citacion.png)

*Figura 4.6.1. Correlación de distintas señales con la frecuencia de citación. Fuente: InboundCycle sobre datos de Ahrefs (2026). Correlación, no causalidad.*

El patrón coincide con el del estudio de Onely (menciones de marca 0,664 frente a backlinks 0,218): lo que más se asocia con ser citado son las menciones de la marca, y dentro de ellas las de YouTube. Los backlinks y el Domain Rating, que gobernaron el SEO clásico, quedan en un segundo plano. Dos estudios con metodologías distintas apuntan en la misma dirección, lo cual es más informativo que cualquiera de los dos por separado.

**La lección de la volatilidad.** En este periodo hubo tres episodios que cambiaron las cuotas de citas de millones de consultas sin aviso: el cambio de selección de ChatGPT en agosto (6.7), el fallo de citas de Gemini 3.8 Flash en septiembre (3.7.2) y, como precedente, la rotación de agosto-septiembre de 2025 en la que, según el tracking de Semrush, la presencia de Reddit en las respuestas de ChatGPT pasó de cerca del 60% a cerca del 10% y se recuperó en meses. Ninguna cifra de decoupling debe presentarse sin fecha, y debe revisarse al menos cada trimestre.

> **ACCIÓN OPERATIVA · Dar vida útil a tus propios datos**
> - Pon fecha de captura y fecha de caducidad (90 días) a cada cifra de decoupling, de overlap o de cuota de fuentes en tus informes.
> - No compares cifras de trackers distintos entre sí: cambian el corpus de prompts, el motor y la métrica.
> - Cuando una cifra de tu panel se mueva más de 30 puntos en una semana, busca primero un cambio de modelo o de despliegue antes de concluir nada sobre tu contenido.

## 4.7 La literatura académica 2025-2026: de «+40%» a «casi nada funciona de forma estable»

El paper fundacional del GEO (Aggarwal et al., 2023, presentado en KDD '24) sigue siendo la base de buena parte del discurso comercial. La literatura posterior lo ha matizado de forma considerable. Esta tabla resume lo que hay que saber para citarlo con rigor.

| Estudio | Estado | Hallazgo principal | Límite o advertencia |
|---|---|---|---|
| **Aggarwal et al.**, GEO (arXiv 2311.09735; KDD '24) | Revisado por pares | Hasta +40% de visibilidad en respuestas generativas. Funcionan mejor las citas textuales (≈+41%), las estadísticas, la fluidez y citar fuentes. El keyword stuffing queda por debajo de la línea base | La «visibilidad» es una métrica sobre el texto generado, no tráfico. Motor simulado con GPT-3.5 y Perplexity. Las reescrituras las hizo un LLM |
| **El efecto suma cero dentro del mismo paper** | Revisado por pares | Cuando se optimizan todas las fuentes a la vez, las ganancias van a las páginas peor posicionadas: citar fuentes dio +115,1% a la quinta y −30,3% de media a la primera | Es la advertencia que casi nadie cita |
| **C-SEO Bench** (Puerto et al., arXiv 2506.11097; NeurIPS 2025) | Revisado por pares | La mayoría de los métodos de C-SEO son ineficaces y a menudo perjudican el ranking; el SEO tradicional rinde significativamente más. Las ganancias caen cuantos más adoptantes hay | Benchmark con entornos competitivos multi-actor, que el paper original no probó |
| **CORE** (Jin et al., arXiv 2602.03608, feb 2026) | Preprint | Texto adversarial añadido a fichas de producto logró un 91,4% de éxito de promoción en el Top-5 y un 80,3% en el Top-1 en GPT-4o, Gemini-2.5, Claude-4 y Grok-3. Las defensas simples resultaron insuficientes | Demuestra un vector de ataque, no una táctica. El orden final depende en gran parte del orden inicial que devuelve el buscador |
| **GEO-BENCH** (Nimase et al., arXiv 2605.29107, 2026) | Preprint | Los rankings de métodos son inestables entre conjuntos de datos; los resultados de un solo dataset sobrestiman la generalización | Usa un único ranker abierto (Llama-3.1-8B) |
| **Chen et al.** (arXiv 2509.08919, sept 2025) | Preprint | Sesgo sistemático y abrumador hacia el *earned media* (fuentes de terceros con autoridad) frente al contenido propio de la marca. Claude y ChatGPT, «extremely earned-heavy»; Perplexity y Gemini incluyen más contenido de marca y social | Falta segmentar por tipo de consulta. Un estudio de Yext, citado en el research de referencia, apunta en sentido contrario para consultas de marca y locales |
| **GEO-16** (arXiv 2509.10762, 2025) | Preprint | Señales on-page (metadatos, estructura semántica, datos estructurados, frescura) asociadas a la citación | Correlacional, limitado a B2B SaaS en inglés, con problemas de validez de constructo reconocidos |
| **Cultural Encoding in LLMs** (arXiv 2601.00869) | Preprint | Diferencias de visibilidad de marca según la geografía de los datos de entrenamiento | No revisado en profundidad. Relevante para el mercado hispano |

**Síntesis.** La literatura pasó de «estas reescrituras aumentan la visibilidad un 40%» (2023-2024) a «en entornos competitivos y en varios benchmarks, la mayoría de las técnicas no funcionan o son inestables, y lo que más pesa es el ranking de recuperación y la autoridad de terceros» (2025-2026).

> **El «+40%» sigue circulando en presentaciones comerciales**
> Es una cifra de laboratorio sobre texto generado, medida con un motor simulado, que no se reproduce de forma estable en benchmarks competitivos. Si la usas, cita el límite en la misma frase.

**Implicaciones para la práctica:**

- Las tácticas de redacción (citas, estadísticas, fluidez) son higiene que ayuda a no quedarse atrás, no una ventaja sostenible: cuando todos las aplican, el beneficio se redistribuye.

- La ventaja se desplaza a dos sitios: estar en el conjunto de páginas que el motor recupera (SEO y técnica, capítulo 2) y tener menciones de terceros con autoridad (capítulo 6).

- Las técnicas adversariales (texto oculto o diseñado para engañar al modelo) son un riesgo reputacional y de política de plataforma. CORE es una advertencia de qué se puede atacar, no una guía.

- Casi toda la evidencia es de EE.UU. y en inglés. No hay estudios rigurosos publicados para España o Latinoamérica: es una laguna real, y la oportunidad es para quien publique metodología.

# Capítulo 5. Estrategia de contenidos

> **TL;DR DEL CAPÍTULO**
> - El juego pasó de palabra clave a contexto: se diseña un Prompt Universe, no una lista de keywords.
> - Con GPT-5.6, ChatGPT busca cada vez más dentro de sitios concretos (operador site:): la web propia vuelve a ser fuente de verdad.
> - Escribir para ser extraído: la respuesta directa va en los primeros tokens y el contexto después.

La redacción para GEO requiere un enfoque híbrido: crear contenido valioso para humanos, pero estructurado, formateado y optimizado para la ingesta por IAs. El contenido debe ser "líquido" para adaptarse a cualquier interfaz.

## 5.1 La teoría de los Answer Nuggets

Los LLMs no leen artículos de principio a fin: extraen fragmentos relevantes. Por tanto, el contenido debe estar diseñado modularmente.

- **La regla de los nuggets.** Cada sección de un contenido (cada H2 o H3) debe contener al menos un Answer Nugget: una unidad de información autónoma, clara y concisa que responda a una intención específica.

- **Densidad recomendada.** Estudios sugieren una densidad de al menos 6 nuggets citables por cada 1.000 palabras. Maximiza la probabilidad de que, sea cual sea la sub-consulta que el modelo esté intentando resolver, encuentre un fragmento relevante.

**Actualización junio 2026.** Google desmintió oficialmente que sea obligatorio fragmentar artificialmente el contenido en páginas de un solo tema ("chunking"). Los sistemas de Gemini 3.5 están diseñados para asimilar páginas de miles de palabras sin necesidad de adaptaciones sintácticas intrusivas. La regla de los nuggets sigue siendo útil como heurística de redacción modular, pero no como obligación técnica.

## 5.2 Formatos de alta extractabilidad

Ciertos formatos HTML actúan como ganchos para los algoritmos de extracción de información de los LLMs:

- **Tablas HTML.** El formato más efectivo. Los LLMs pueden leer filas y columnas para generar sus propias comparativas. Incluir una tabla comparativa aumenta significativamente la probabilidad de citación.

- **Listas (ul/ol).** Estructuran procesos y enumeraciones de forma que el modelo puede replicar paso a paso.

- **Citas directas y estadísticas.** Las tácticas más potentes para mejorar la visibilidad (+41 % y +31 % en PAWC según Princeton).

- **Pirámide invertida 2.0.** Comenzar cada sección con la respuesta directa ("La velocidad de la luz es 300.000 km/s") antes de desarrollar la explicación.

- **Estrategia de autores.** Firma los artículos con una persona de relevancia en ese sector. Mantén una sección de la web donde se profundice y muestre el expertise del autor. Con el Authorship Classifier del May 2026 Core Update, esta señal es crítica.

## 5.3 Optimización para Agentic AI

Con la operación efectiva de agentes que ejecutan acciones (compras, reservas, comparaciones), el contenido debe soportar transacciones.

- **Datos en tiempo real.** Para retailers, exponer datos de inventario, precio y disponibilidad en tiempo real a través de APIs o microformatos Schema avanzados. Un agente de IA no recomendará un producto si no puede verificar el stock en ese instante.

- **Contexto de uso.** Etiquetar los productos con contextos de uso claros ("Mejor para senderismo en invierno") ayuda al matching semántico con la necesidad del usuario, que a menudo busca por problema ("necesito botas para el frío").

- **Claridad en la acción.** Lenguaje imperativo y claro en CTAs y documentación de API para que los agentes entiendan sin ambigüedad qué pasos seguir.

- **Marcado WebMCP.** Para flujos transaccionales clave (checkout, reservas, registro de leads), aplicar atributos declarativos (toolname, tooldescription, toolparamdescription) para permitir a los agentes de Chrome interactuar de forma determinista.

## 5.4 Optimización de video e imagen

En un entorno de búsqueda multimodal, los activos visuales son datos de primera clase. La optimización técnica de imágenes y video es esencial para ser recuperado por modelos como Gemini 3.5 y GPT-5, que integran visión por computadora nativamente.

- **Metadatos de video.** Transcripciones completas y precisas (formato VTT o incrustadas). VideoObject Schema con KeyMoments permite a la IA saltar directamente al segmento relevante. Las citaciones de YouTube en Google AI Overviews aumentaron un 121 % en consultas de comercio electrónico (BrightEdge).

- **Contextualización de imágenes.** El texto alternativo (ALT) debe evolucionar de descripción visual simple a descripción contextual rica en entidades. En lugar de "mujer corriendo", usar "mujer usando zapatillas de running marca X con soporte de arco para maratón".

- **Autenticidad y C2PA.** La implementación de estándares de procedencia de contenido como C2PA añade una capa de confianza técnica, indicando a los motores que la imagen o video es auténtico y no contenido sintético no etiquetado. En un mundo saturado de contenido sintético, la autenticidad verificada es un factor de calidad creciente que los motores priorizan.

## 5.5 Economía de tokens y ROI del contenido

Los LLMs no solo procesan información: la procesan a un coste computacional medible. Cada token incorporado al contexto de inferencia consume recursos de GPU, memoria y latencia. El coste por millón de tokens de input ronda los 1-3 dólares en los modelos de frontier (variable según proveedor y modelo). Esta economía tiene una implicación contraintuitiva pero estratégicamente relevante para el GEO: los motores tienen un incentivo estructural a preferir fuentes con alta densidad de información por token consumido.

Una página de 2.000 palabras con 6 datos accionables tiene una densidad informativa de 0,003 datos/palabra. Una página de 600 palabras con 6 datos accionables tiene una densidad informativa de 0,010 datos/palabra (3,3x mejor). Si el sistema de recuperación opera bajo restricciones de budget de tokens, la segunda página es estadísticamente más "barata" de citar.

**Implicaciones prácticas**

- **Densidad sobre extensión.** Una página de 600 palabras con datos, estadísticas y citas concretas puede superar a una de 2.500 palabras con la misma cantidad de hechos pero diluidos en relleno expositivo. El estudio de Princeton ya documentó que la fluency optimization (simplificación sintáctica) aporta +28 % PAWC.

- **Eliminación de relleno.** Introducciones de "en la era digital actual...", recapitulaciones de párrafos anteriores y conclusiones que repiten lo dicho son tokens caros con valor informativo cercano a cero. Su presencia reduce la densidad efectiva del documento.

- **Estructura modular.** Encabezados claros que segmentan el documento en unidades extraíbles permiten al sistema recuperar solo el fragmento relevante (ahorrando tokens) sin tener que procesar el artículo completo. Esto se alinea con la regla de los Answer Nuggets.

- **Caveat.** La hipótesis de que los motores optimizan activamente para minimizar coste de tokens en el RAG es lógica desde la economía del producto pero no ha sido confirmada por publicaciones técnicas de OpenAI, Google o Anthropic. Sigue siendo inferencia operativa basada en la estructura de costes de los modelos. La recomendación de "densidad sobre extensión" se sostiene tanto si la causa real es eficiencia económica como si es preferencia algorítmica documentada (Princeton).

## 5.6 Lectura fonética y asistentes multimodales por voz

Las interfaces conversacionales por voz se han consolidado. GPT-5, Gemini 3.5 Flash y los asistentes de Apple, Amazon y Google leen respuestas en alto. El contenido ya no se consume solo con los ojos. Se escucha. Esto introduce restricciones nuevas en la redacción. Las respuestas que el modelo va a leer en voz alta no pueden tener la misma estructura que las que se muestran en pantalla. Lo que se ve bien escrito puede sonar mal pronunciado.

**Qué cambia para la redacción**

- **Frases declarativas cortas.** El TTS suena natural entre 12 y 18 palabras por oración. Las oraciones subordinadas largas producen ruidos prosódicos. Se cortan en sitios poco naturales. Mejor punto que coma. Mejor dos frases cortas que una larga con incisos.

- **Cifras pronunciables.** "23,9 %" se lee bien. "23,941 %" no aporta valor en voz. Y aumenta el riesgo de mala pronunciación. Para contenido orientado a voz, redondear cuando la precisión absoluta no sea esencial.

- **Acrónimos contextualizados.** La primera mención de un acrónimo debe ir precedida de su forma desarrollada. "SEO", "GEO", "PAWC" lo necesitan. Los TTS modernos manejan los acrónimos comunes. Pero pueden tropezar con los específicos del sector.

- **Estructura prosódica con puntuación.** Los puntos, dos puntos y comas guían la entonación del TTS. Una oración de tres ideas separadas por punto y coma se lee mal. Tres oraciones separadas por punto se leen bien.

- **Evitar referencias visuales.** Frases como "como se ve en la tabla 3" o "la columna izquierda muestra..." pierden sentido en voz. Si el contenido va a ser leído en alto, las referencias deben ser auto-suficientes verbalmente.

La implicación de fondo es directa. El contenido de alta calidad para GEO en 2026 debe poder leerse en pantalla y escucharse por voz sin perder estructura. La buena redacción periodística tradicional cubre las dos superficies a la vez. Frases claras. Datos pronunciables. Estructura modular. Nada más complicado que eso. Este mismo párrafo, leído en voz alta, demuestra la técnica.

## 5.7 Information Gain Score: tabla de puntuación para equipos editoriales

La ganancia de información es el eje del Core Update de mayo de 2026 y el factor más predictivo de citabilidad en motores generativos. Esta tabla permite a los equipos editoriales puntuar contenido antes de publicarlo y priorizar qué piezas de la biblioteca existente merecen ser reescritas. El score total recomienda una acción específica.

| Factor | Peso (puntos) | Cómo evaluar |
|---|---|---|
| Datos numéricos de primera fuente (encuesta propia, estudio de caso, métricas internas) | +25 | ¿La pieza contiene al menos 3 datos numéricos que no aparecen en los 10 primeros resultados de Google para la query principal? |
| Citas de expertos con atribución textual | +20 | Princeton: +41 % PAWC. ¿Hay al menos 2 citas textuales con nombre y cargo del experto? |
| Estadísticas con fuente y año explícitos | +15 | Princeton: +31 % PAWC. ¿Cada cifra tiene fuente y año verificables? |
| Tabla comparativa o lista ordenada de alta densidad | +15 | ¿Hay al menos una tabla con 3+ columnas que un LLM pueda extraer y reformular? |
| Pirámide invertida 2.0 (respuesta directa en los primeros 40-60 palabras de cada H2) | +10 | Cada sección H2 debe responder la pregunta del título antes de desarrollar. |
| Autoría verificable con sección de autor y E-E-A-T | +10 | ¿La firma tiene página propia con expertise demostrable? Crítico tras Authorship Classifier (mayo 2026). |
| Brand mentions de terceros enlazadas o no enlazadas | +10 | ¿Hay menciones del propio dominio en medios licenciados o de autoridad reconocida en los últimos 90 días? |
| Cobertura de query fan-out (subpreguntas) | +10 | ¿La pieza responde al menos 5 sub-consultas implícitas relacionadas con la query principal? |
| Keyword stuffing detectado | -15 | Princeton: -9 % PAWC. ¿La keyword principal aparece más de 1 vez cada 100 palabras? |
| Contenido derivativo (repite lo que dicen los 10 primeros resultados) | -20 | Test: si la pieza desapareciera, ¿qué información única se perdería? Si la respuesta es "nada", restar. |
| Ausencia de datos numéricos propios | -10 | ¿La pieza opina sin aportar cifras propias verificables? |
| Adjetivación promocional vacía ("el mejor del mundo", "líder absoluto") | -10 | Claude penaliza explícitamente este tono. Otros modelos lo descuentan implícitamente. |

**Interpretación del score total**

- **70+ puntos:** publicar. Pieza con alta probabilidad de citación. Monitorizar evolución en GEO Metrics u otra herramienta multimotor.

- **40-69 puntos:** publicar con plan de refuerzo. Identificar los 2-3 factores con menor puntuación y reforzarlos antes de difusión externa.

- **20-39 puntos:** reescritura mayor antes de publicar. Probablemente falta investigación primaria o densidad informativa.

- **Menos de 20 puntos:** replantear el ángulo. La pieza no aportará ganancia de información sobre lo ya disponible y no será citada.

## 5.8 Del keyword al contexto: el método de cuatro pilares de GEO Metrics (pilares 1 y 3)

GEO Metrics presentó en Conversion Week un marco de trabajo en cuatro pilares encadenados: **Prompt Universe** (dónde quiero que la IA me mencione), **monitorizar sin sesgo** (dónde estoy hoy, realmente), **crear contenido** (cómo optimizo para que me citen) y **medir** (si está funcionando y si estoy cerrando el embudo). Los pilares 2 y 4 se desarrollan en 8.11 y 8.12. Aquí van el 1 y el 3, que son los que deciden qué se escribe.

El punto de partida es un cambio de unidad. Durante veinte años el juego fue palabra clave, volumen y artículo. Con las IAs no hay palabra clave, no hay volumen publicado por prompt y no hay una posición fija: cada respuesta se genera de nuevo, en el momento. Ya no se compite por una keyword, sino por entidades (la marca, sus temas, sus competidores) y por la relación semántica entre ellas. La pregunta pasa de «¿qué keyword tengo que rankear?» a «¿qué quiero que la IA entienda de mí y con qué otros temas quiero que me asocie?».

### 5.8.1 Pilar 1 · Prompt Universe

El Prompt Universe es el conjunto de todas las preguntas en lenguaje natural que un cliente le hace a una IA antes de decidir una compra. No es un listado de keywords con otra etiqueta: «herramienta GEO» son dos palabras sin contexto ni intención, mientras que «mejor herramienta GEO para agencias en España» tiene intención real, contexto completo y una decisión inminente.

| Categoría | Qué busca el usuario | Ejemplo | Competencia y rentabilidad |
|---|---|---|---|
| **Descubrimiento** | Opciones, sin saber cuál elegir | «cuál es la mejor herramienta de GEO para agencias» | Muy competido |
| **Comparación** | Decidir entre opciones que ya conoce | «GEO Metrics vs [competidor], diferencias y precio» | Pocos lo trabajan bien |
| **Validación** | Confirmar antes de comprar | «opiniones sobre GEO Metrics, ¿es fiable?» | El más rentable. Casi nadie lo trabaja |

**Método en cuatro pasos para construirlo:**

- Lista los diez dolores (*pain points*) del cliente ideal, en lenguaje coloquial y no en jerga de producto.

- Convierte cada dolor en tres prompts en lenguaje natural, tal como los escribiría una persona hablándole a una IA.

- Añade variantes por motor: cada IA formula distinto, así que conviene cubrir las principales y no solo una.

- Prioriza por cercanía a la conversión, de informacional a transaccional: lo más cercano a la compra, primero.

|   | Baja competencia | Alta competencia |
|---|---|---|
| **Alta conversión** | **Ahora.** Atacar primero | Largo plazo |
| **Baja conversión** | Ignorar | Evitar |

En la práctica, quien empieza debería controlar primero los prompts de marca (los que nombran su producto o su empresa), porque ahí no compite con nadie más que con lo que opina la IA, y después los de comparación. Los informacionales («qué es el GEO») son los últimos. La lógica es de GEO Metrics y está respaldada por la estructura de la competencia, pero no por un experimento controlado.

### 5.8.2 Pilar 3 · Crear contenido para ser extraído, no para ser leído de corrido

**Pirámide invertida 2.0.** El modelo identifica la relevancia en los primeros tokens y decide si cita. Si el contexto llega antes que la respuesta, ya se perdió. «La velocidad de la luz es de 300.000 km/s» va primero; la explicación completa, después. Es la misma lógica de los Answer Nuggets (5.1) aplicada a la apertura de cada pieza.

**Las cuatro acciones que más impactan en la citabilidad, según el marco de GEO Metrics:**

- Un bloque de 3 a 5 preguntas frecuentes al final de cada pieza, con respuesta directa en un máximo de tres líneas.

- Autoría real, con nombre y credenciales: los modelos confían en personas, no en marcas anónimas.

- Entidades relacionadas de forma explícita: marcas, lugares y personas relevantes.

- Contenido vigente: los modelos favorecen lo que está actualizado, y el marcado debe cambiar con el texto.

**Escribir por contexto, no por keyword.** El ejemplo que usa GEO Metrics: en lugar de intentar posicionar «software de gestión de proyectos», se escribe la respuesta a «¿cuál es el mejor software de gestión de proyectos para una agencia de marketing que factura menos de un millón al año?». Esa pregunta puede salir de tu producto: si sabes en qué contexto eres bueno, ese es el contexto que debes cubrir. Un truco práctico: grabar un audio respondiendo a esa pregunta como si se la explicaras a un cliente, transcribirlo y usarlo como base del artículo, porque suena como debería sonar para una IA, que se parece más a una persona buscando información que a un índice.

**Riqueza semántica por ángulos.** Un modelo no cuenta cuántas veces aparece una palabra, sino desde cuántos ángulos se habla de un tema. Quien escribe de coches puede llegar al tema por una marca, por el tubo de escape o por la Fórmula 1: son entradas distintas a un mismo espacio semántico. Un artículo sobre software CRM que también habla de herramientas para gestionar clientes de una agencia queda bien posicionado para ambas búsquedas. Esto coincide con la lectura de los embeddings de 2.1 y 2.6 y con el dato de Princeton de que el keyword stuffing perjudica (4.2).

**Extractabilidad.** Las tablas son el formato que un modelo puede leer y reutilizar con más facilidad para construir comparativas; las listas estructuran procesos y enumeraciones; un número o una cita atribuida a una fuente con nombre pesa más que una afirmación genérica. Conviene escribir «según el estudio X de 2024» y no «según los expertos».

> **Schema y JavaScript: dos matices técnicos**
> Los esquemas Organization y Article ayudan a identificar la entidad y la autoría, pero el único estudio con diseño estadístico explícito (Ahrefs, 11 de mayo de 2026) no encontró un efecto directo sobre las citas. Deben coincidir con el texto visible y se tratan como higiene, no como palanca (Mito 4). Sobre JavaScript: el problema es el contenido que solo existe tras ejecutar scripts, que parte de los rastreadores de IA no ve (2.4). Lo que conviene es el renderizado en servidor, no eliminar JavaScript.

> **ACCIÓN OPERATIVA · Construir tu Prompt Universe esta semana**
> - Reúne a ventas y atención al cliente y saca los diez dolores reales del cliente ideal, con sus propias palabras.
> - Convierte cada dolor en tres prompts y clasifícalos en Descubrimiento, Comparación y Validación.
> - Empieza por los prompts de marca y de comparación. Escribe una pieza por contexto, con la respuesta en los primeros tokens y un bloque de FAQ al final.
> - Da de alta ese listado en tu herramienta de monitorización antes de publicar, para tener una línea base.

## 5.9 Primera parte como fuente de verdad: contenido para el fan-out con site:

El cambio de ChatGPT de agosto (6.7) tiene una consecuencia de contenido que merece sección propia. Según Promptwatch, el 8 de agosto las subconsultas de fan-out con el operador site: pasaron del 0,37% al 16,8% en un solo día, y las búsquedas por respuesta subieron de 1,08 a 1,83. Su cofundador, Klaas Foppen, describió el comportamiento como ir deliberadamente a sitios concretos a buscar la información. OpenAI no ha confirmado el mecanismo interno.

GEO Metrics observó lo mismo en sus datos: en el podcast SEO desde cero (septiembre de 2026), Nico Bignú señaló que las búsquedas internas dentro de sitios concretos «se dispararon» y que algunas webs oficiales de documentación ganaron peso mientras otras fuentes caían.

**Qué tipo de página captura este patrón.** Si el modelo decide ir a un dominio concreto, las páginas que contesta son las de primera parte con respuesta definitiva:

- Documentación oficial y centros de ayuda, con una pregunta por URL estable.

- Páginas de precios, planes y condiciones, con los números visibles en HTML y no en imágenes o PDFs sin texto.

- Comparativas honestas con competidores, con tabla.

- Políticas (devoluciones, garantía, envíos, privacidad) en páginas propias.

- Fichas de producto o servicio con datos completos y fecha de actualización.

- Páginas de autor y de organización que dejan clara la entidad.

**Cómo comprobar si tu dominio entra.** Lanza los prompts de tu Prompt Universe y, en cada respuesta, anota qué dominios aparecen entre las fuentes consultadas y cuáles entre las citadas (8.9, Retrieval-to-Citation Ratio). Si tu dominio no está ni entre las consultadas, el problema es de recuperación: indexación en Bing, bloqueo de OAI-SearchBot (2.7, 3.7.1) o una página que no contesta la pregunta. Si está consultado y no citado, el problema es de selección: otras fuentes parecen más autorizadas para esa entidad.

> **ACCIÓN OPERATIVA · Auditoría de primera parte en una tarde**
> - Haz una lista de las 20 preguntas más frecuentes de tus clientes antes de comprar y comprueba que cada una tiene una URL propia con la respuesta en las primeras líneas.
> - Verifica que ninguna de esas URLs está detrás de login, de un muro de pago o de scripts que impidan leerla sin ejecutar JavaScript.
> - Comprueba en la CDN y en robots.txt que OAI-SearchBot y Claude-SearchBot pueden acceder.
> - Repite la comprobación de consultadas frente a citadas cada mes y apunta los cambios de modelo en el mismo cuaderno.

# Capítulo 6. Autoridad, menciones y data partnerships

> **TL;DR DEL CAPÍTULO**
> - Reddit cayó del 3,83% al 0,52% de las citas de ChatGPT Search en una semana (13-17 ago).
> - Pero Reddit sigue siendo entre el 25% y el 34% de las páginas que ChatGPT consulta. Leer no es citar.
> - Las fuentes institucionales y .org pasaron del 17,1% al 29,6% de las citas (+73%). Ganan los dominios de primera parte.
> - Yelp licenció 330 M de reseñas a OpenAI el 23 jul (sub-sección 6.8 nueva).

El linkbuilding tradicional (conseguir un enlace dofollow) evoluciona hacia el "Reference Building" (conseguir ser mencionado como entidad). Pero más allá del "cómo", la pregunta crítica en 2026 es el "dónde".

## 6.1 Menciones sin enlace: el factor más predictivo en IA

En el mundo del PageRank, un enlace era un voto. En el mundo de los embeddings, una mención es una asociación semántica. Si un artículo en The New York Times menciona tu marca en el contexto de "innovación en IA", incluso sin un enlace, el modelo de lenguaje refuerza la asociación vectorial entre "Tu Marca" e "Innovación en IA".

**El dato cuantitativo de 2026.** Onely documentó que las brand mentions correlacionan a 0,664 con citación en AI Overviews, frente a 0,218 para backlinks. Las menciones son aproximadamente 3 veces más predictivas que los enlaces como factor de visibilidad en IA. Las campañas de PR deben enfocarse en la co-ocurrencia de la marca con las palabras clave estratégicas en textos de alta autoridad, independientemente de si hay un hipervínculo.

## 6.2 Wikipedia

Wikipedia sigue siendo la columna vertebral de la "verdad" para la mayoría de los LLMs debido a su estructura curada y neutral.

**Estrategia.** Asegurar que la entidad de marca esté presente y actualizada en Wikipedia (si cumple criterios de notoriedad) y Wikidata. Los datos en Wikidata alimentan el Grafo de Conocimiento de Google, que a su vez alimenta a Gemini y a los resúmenes de IA. Una imprecisión en Wikipedia se propaga a todas las respuestas de IA como un virus informativo difícil de erradicar.

## 6.3 Co-citación y vecindad semántica

La autoridad se transfiere por asociación. Ser citado en el mismo párrafo o lista que los líderes reconocidos de la industria ("Las mejores herramientas de CRM son Salesforce, HubSpot y...") enseña al modelo que tu marca pertenece a esa categoría semántica de élite. La estrategia debe buscar activamente estas comparativas y listados.

## 6.4 El mapa de fuentes de confianza 2026

Un análisis reciente de GEO Metrics revela que las IAs diversifican sus fuentes de confianza mucho más allá de los medios estándar.

| Fuente | % de citaciones | Rol en el ecosistema GEO |
|---|---|---|
| google.com | 29,42 % | Infraestructura: Maps, Flights, Knowledge Graph autocitados por Google AI |
| wikipedia.org | 16,96 % | Verdad factual: base para definiciones, historia y entidades |
| reddit.com | 12,51 % | Experiencia humana: fuente \#1 para opiniones subjetivas ("mejor X", "problemas con Y"). Google firmó acuerdo de 60M\$/año por acceso estructurado al corpus |
| youtube.com | 8,34 % | Información visual/auditiva: transcripciones usadas como tutoriales y guías paso a paso |
| instagram.com | 3,62 % | GEO local y visual: Instagram Maps para descubrimiento; el 67 % de los jóvenes lo usan para buscar negocios locales |
| elpais.com | 3,50 % | Noticias locales: ejemplo de medio Tier-1 con autoridad regional y acuerdo con OpenAI vía Prisa |
| tiktok.com | 2,50 % | Viralidad: tendencias emergentes y trucos rápidos |
| linkedin.com | 2,50 % | B2B: opinión experta y datos corporativos |
| facebook.com | 2,50 % | Negocios locales |
| mapbox.com | 2,00 % | Datos de ubicación |

![Figura 6.1. El top-10 de fuentes acumula más del 85 % de las citaciones totales del ecosistema GEO.](charts/cap6_mapa_fuentes.png)

*Figura 6.1. El top-10 de fuentes acumula más del 85 % de las citaciones totales del ecosistema GEO.*

**Justificación estratégica.** Más del 20 % de las citas provienen de plataformas de UGC (Reddit + YouTube). Si tu estrategia de visibilidad ignora Reddit o YouTube, estás invisible para 1 de cada 5 respuestas generadas por IA. Y con el acuerdo Reddit-Google de 60M\$/año, la influencia de Reddit en Gemini y AI Overviews es aún más estructural.

## 6.5 La explosión del video y UGC como fuente de datos

La presencia de YouTube y Reddit en el top de fuentes no es casualidad: responde a la demanda de los usuarios por "experiencia humana" que la IA intenta replicar.

- **La paradoja de Reddit.** A pesar de ser contenido no editorial, Reddit es considerado por Perplexity y Google AI como el "testigo de la verdad" para consultas subjetivas. La IA busca el consenso en Reddit para validar la calidad real de un producto, asumiendo que los foros son más difíciles de manipular que los blogs corporativos. Reddit representa el 6,6 % de las citas totales de Perplexity y el 46,7 % de su top-10 fuentes (Profound, 680M citas).

- **Acción GEO.** Monitorizar hilos de marca en Reddit e intervenir con cuentas corporativas transparentes o programas de embajadores. Crear contenido en YouTube optimizado con transcripciones para que sea "leíble" y citable por la IA.

## 6.6 Validación de entidad local y consenso

Para negocios locales, la autoridad ya no se basa solo en la proximidad y las reseñas de Google. Se basa en el consenso de entidad a través de la web local.

- **Consistencia multiplataforma.** La IA verifica la información de un negocio cruzando datos de Google Maps, Apple Maps, Yelp, redes sociales y directorios locales. Cualquier discrepancia (ej. horarios diferentes en Facebook vs Google) reduce la puntuación de confianza y puede llevar a la exclusión.

- **Validación de terceros.** Las menciones en periódicos locales, blogs de barrio y cámaras de comercio actúan como validadores externos. El "linkbuilding local" debe enfocarse en estas menciones contextuales que anclan al negocio en su geografía.

## 6.7 La caída de Reddit en ChatGPT (agosto 2026) y el principio "leer no es citar"

El evento más dramático del cuatrimestre en el mapa de autoridad fue la caída del 86% en menos de una semana de las citas de Reddit en ChatGPT Search. Hay que contar bien la historia porque algunos medios la fecharon mal (en septiembre) y porque introduce un concepto operativo nuevo que vale para toda la disciplina.

### 6.7.1 Qué pasó, con las fuentes y la metodología

Entre el 13 y el 17 de agosto de 2026, Reddit pasó de representar una media del 3,83% de las citas visibles de ChatGPT Search (medida del 18 jul al 7 ago) a una media del 0,52% (del 14 al 17 ago). La caída es del −86,4% relativo. Fue verificada en paralelo por varios trackers:

| Fuente | Metodología | Caída reportada |
|---|---|---|
| Promptwatch | Corpus propio de prompts, análisis diario | −86,4% (3,83% → 0,52%) |
| Trackerly | Citas inline + páginas consultadas | Citas: 1,5-2,5% → ~0,5% (desde 14 ago) |
| Qwairy | Set propio de prompts | −95% en la misma semana |
| Pierview | 44.488 citas a Reddit (1 jul - 19 ago) | −94% en seis días |
| Petra Labs | Múltiples prompts, varios motores | ~−80% |
| GEO Metrics (Nico Bignú) | Un proyecto concreto, 20 jul - 19 ago | **−74,4% de citas a reddit.com en ChatGPT** |
| Reddit (Adam Collins → Axios) | Declaración oficial | "No tiene impacto significativo" en su negocio |

![Figura 6.7.1. Caída de Reddit en citas de ChatGPT Search (18 jul - 20 ago 2026). Fuente: Promptwatch, verificado por Trackerly, Qwairy, Pierview y GEO Metrics.](charts/cap6_reddit_caida.png)

*Figura 6.7.1. Caída de Reddit en citas de ChatGPT Search (18 jul - 20 ago 2026). Fuente: Promptwatch, verificado por Trackerly, Qwairy, Pierview y GEO Metrics.*

Dato que matiza el titular, aportado por Trackerly: **la cuota de Reddit entre las páginas que ChatGPT CONSULTA no bajó**. Reddit siguió representando entre el 25% y el 34% de las páginas que ChatGPT abrió cada día del desplome (13-20 ago). Lo que cambió fue qué de lo que leía acababa en la respuesta final del usuario.

### 6.7.2 El mecanismo: GPT-5.6 cambió primero el fan-out, luego la selección

La cadena de eventos reconstruida por Promptwatch y Search Engine Land tiene dos fases:

- **6 ago:** GPT-5.6 Luna pasa a modelo por defecto en Free y Go. Plus y Pro reciben un GPT-5.6 Sol actualizado.

- **8 ago: cambia el query fan-out.** Según Promptwatch, las subconsultas con operador site: pasan del 0,37% al 16,8% EN UN SOLO DÍA. Las búsquedas por respuesta suben de 1,08 a 1,83. La longitud media de las subconsultas se dobla, con calificadores como "best", "reviews" o "2026".

- **13-14 ago: la caída de Reddit.** Seis días después del cambio de fan-out. Trackerly y SEJ argumentan que el fan-out por sí solo no lo explica: lo más probable es un segundo cambio en la SELECCIÓN de qué páginas recuperadas se citan, ajustado hacia fuentes autorizadas de primera parte. OpenAI no ha respondido.

![Figura 6.7.2. GPT-5.6 cambió cómo ChatGPT busca: más consultas, más dirigidas (ago 2026). Fuente: Promptwatch.](charts/cap6_gpt56_fanout.png)

*Figura 6.7.2. GPT-5.6 cambió cómo ChatGPT busca: más consultas, más dirigidas (ago 2026). Fuente: Promptwatch.*

### 6.7.3 Qué fuentes ganaron el espacio

Qwairy analizó las citas del 1 al 18 de agosto. **Las fuentes institucionales, gubernamentales y .org pasaron del 17,1% al 29,6% de las citas (+73%)**. La cuota de Reddit cayó del 2,05% (1 ago) al 0,07% (14 ago). Prensa generalista, foros y UGC, y directorios perdieron cuota. Ganan: documentación oficial, centros de ayuda, reguladores y páginas propias de las marcas.

![Figura 6.7.3. Reorganización de fuentes citadas tras GPT-5.6 (ago 2026). Fuente: Qwairy.](charts/cap6_fuentes_ganadoras.png)

*Figura 6.7.3. Reorganización de fuentes citadas tras GPT-5.6 (ago 2026). Fuente: Qwairy.*

### 6.7.4 El principio operativo: "leer no es citar"

Este episodio consolida el concepto más importante de medición de este cuatrimestre: **retrieval y citation son dos cosas distintas y hay que medirlas por separado**. Reddit sigue INFLUYENDO en ChatGPT (porque sigue siendo consultado masivamente) pero ya no da ATRIBUCIÓN visible. Esto afecta a cómo se mide el UGC, el PR y las plataformas sociales en general.

![Figura 6.7.4. Leer no es citar: brecha entre páginas consultadas y páginas citadas (ChatGPT, ago 2026). Fuentes: Trackerly y Qwairy. Cifras aproximadas.](charts/cap6_leer_vs_citar.png)

*Figura 6.7.4. Leer no es citar: brecha entre páginas consultadas y páginas citadas (ChatGPT, ago 2026). Fuentes: Trackerly y Qwairy. Cifras aproximadas.*

El cálculo propuesto es sencillo:

> *Retrieval-to-Citation Ratio = (% páginas consultadas de la fuente) ÷ (% citas visibles de la fuente). Un ratio alto (como el de Reddit: ~30/0,5 = 60×) indica una fuente que el modelo lee pero no acredita. Un ratio bajo (como el de .gov/.org: ~22/29,6 = 0,74) indica una fuente que el modelo tanto lee como cita.*

> **ACCIÓN OPERATIVA · Reorganizar la estrategia de autoridad post-5.6**
> - **Prioridad 1**: documentación propia, FAQ, centro de ayuda, páginas de comparativa y precios. Rastreables y bien estructuradas. Son las que capta el fan-out con site:.
> - **Prioridad 2**: presencia en fuentes institucionales y sectoriales (asociaciones, reguladores, normativa).
> - **Prioridad 3**: Reddit solo para Perplexity y Google (sigue siendo clave allí). Monitorizar por motor, no en agregado.
> - **Instrumentar**: medir Retrieval-to-Citation Ratio por fuente. Un ratio alto es una señal de riesgo (fuente dependiente que puede desaparecer de citas con un cambio de modelo).

## 6.8 Yelp, OpenAI y los directorios de reseñas licenciados

El 23 de julio de 2026, Yelp licenció a OpenAI sus reseñas, valoraciones, fotos e información de negocio para su uso dentro de ChatGPT. La licencia es NO exclusiva, los términos no se han publicado y el contenido va con marca y enlaces de Yelp. OpenAI controla la presentación.

### 6.8.1 Volumen, cobertura y mecánica

| Dato | Valor |
|---|---|
| Reseñas acumuladas de Yelp cubiertas por el acuerdo | 330 M+ reseñas |
| Fichas de negocio cubiertas | 8 M+ fichas |
| Países con cobertura amplia de Yelp | Principalmente EE.UU., Canadá, UK, Alemania, Francia; limitada en España y Latam |
| Request a Quote dentro de ChatGPT | Confirmado — permite contactar con proveedores locales desde el propio chat |
| Reservas y lista de espera | Integración confirmada ~10 ago (según blog de Yelp vía RealTimeFeedback) |
| Exclusividad | NO: Yelp ya licenciaba datos a Apple Maps y Yahoo |

### 6.8.2 El cambio de paradigma: de "página consultable" a "feed licenciado"

Antes de este acuerdo, Yelp era una página web más que ChatGPT podía o no decidir consultar. **Después del acuerdo, Yelp es un feed con acceso prioritario**. Esto convierte a Yelp en infraestructura de respuesta local dentro de ChatGPT, no en una fuente más del fan-out. La diferencia operativa es grande: una ficha mal mantenida en Yelp ahora pesa tanto como una ficha mal mantenida en Google Business Profile.

### 6.8.3 Implicaciones por mercado

**EE.UU., Canadá, UK, Alemania, Francia**: acción obligatoria. Auditar la ficha de Yelp: categorías, horarios, fotos, respuestas a reseñas, activar Request a Quote. Monitorizar menciones en ChatGPT con prompts de intención local.

**España y Latam**: impacto inmediato bajo porque Yelp tiene poca cobertura. Pero el PATRÓN es replicable. Vigilar acuerdos equivalentes con TripAdvisor, TheFork, El Tenedor, directorios locales. Google Reviews ya alimenta a Google. La pregunta operativa es cuándo —no si— ChatGPT firma con un directorio local hispano.

> **Marketplaces locales + Sponsored Agents = concentración de la demanda local**
> Hay que leer este acuerdo junto con el lanzamiento de Sponsored Agents (16 sep). Angi es a la vez app de ChatGPT (desde el 4 mar) y Sponsored Agent (desde el 16 sep). Los marketplaces locales controlan cada vez más el acceso a la demanda local dentro de los LLM. Si tu negocio depende de ellos, estás pagando una capa adicional de intermediación.

> **ACCIÓN OPERATIVA · Yelp y directorios para SEO local**
> - **Si operas en EE.UU./UK/DE/FR**: auditar y actualizar ficha de Yelp esta semana (categorías, fotos, horarios, Request a Quote activado).
> - **Si operas en ES/Latam**: inventariar en qué directorios locales está tu negocio y qué calidad tiene cada ficha. Priorizar los que probablemente serán los siguientes en firmar.
> - **Monitorizar**: añadir prompts de intención local a tu monitor de GEO ("mejor [servicio] en [barrio]", "[servicio] cerca de mí").
> - **Reseñas**: política de respuesta sistemática a reseñas en directorios licenciados. Las respuestas forman parte del contenido que ingiere el LLM.

## 6.9 Reference Building: la tripleta de entidad, el PR digital y la memoria larga y corta

El *link building* clásico perseguía enlaces. El *reference building* persigue que otros hablen de ti, en el contexto correcto, en sitios que los modelos leen. Es la misma intuición que recogen las menciones sin enlace (6.1) y el sesgo hacia el *earned media* documentado por Chen et al. (4.7), llevada a un método de trabajo.

### 6.9.1 La tripleta de entidad

Una IA enlaza conceptos y entidades. Para que una persona y una marca queden asociadas a un sector hace falta que cada pieza de contenido que se publique apunte a la misma tripleta: la persona, la marca y el sector o la idea. El ejemplo de GEO Metrics: enlazar a Nico Bignú con GEO Metrics y con visibilidad en IA. Cada vez que alguien pregunte por visibilidad en IA en España, el modelo podría llegar por la persona, por la marca, por un recurso, por un vídeo o por un podcast. Un podcast cuya transcripción quede indexada es, en esa lógica, un «backlink 2.0»: una mención sin enlace que posiciona a la marca como respuesta.

### 6.9.2 Memoria larga y memoria corta

Un modelo mezcla dos memorias. La **larga** es lo aprendido en el entrenamiento (fuentes como Wikipedia, y hasta hace poco Reddit, tratadas como terreno firme) y no se puede modificar. La **corta** es lo que recupera al buscar en el momento de la pregunta, con el índice de Bing en el caso de ChatGPT y el de Google en el de Gemini. Lo que se puede influir es la corta: lo que dicen de ti terceros en las páginas que el modelo recupera. Es una simplificación pedagógica, no una descripción técnica del modelo. El episodio de agosto (6.7) matiza además la idea de «fuente de verdad estable»: las fuentes que el entrenamiento hizo canónicas pueden perder peso de un día para otro.

### 6.9.3 PR digital: prioridad, no complemento

GEO Metrics defiende que hoy todo proyecto de SEO y GEO tiene un componente fuerte de PR digital, por dos razones. Una: si solo se produce contenido propio, un cambio de algoritmo puede relegarte, como le pasó a Reddit; distribuir la voz de marca en varios sitios da robustez. Otra: un medio con autoridad que menciona a la marca en el contexto correcto aporta una señal que el contenido propio no replica. Hay muchos niveles de PR, no solo el enlace: ofrecer datos originales a periodistas, pasar por podcasts y canales de YouTube, colaborar con creadores, ser entrevistado. Una mención en La Vanguardia o El País con contexto pesa más que varias menciones sin él.

### 6.9.4 Dónde dejar referencias según el tipo de negocio

| Tipo de negocio | Dónde invertir referencias | Por qué |
|---|---|---|
| **SaaS y servicios B2B** | Directorios de reseñas y comparativas (Capterra, Trustpilot), Crunchbase, medios del sector | La IA se mete en la conversación a través de reseñas y directorios que ya consulta para esa categoría |
| **E-commerce** | Fichas de producto propias y de los puntos de venta donde se vende, reseñas de producto | Si el producto solo se vende en un sitio, el modelo irá a esa ficha; si se vende en varios, conviene controlar la narrativa en cada uno |
| **Negocio local** | Reseñas (incluso con una acción física, como un QR en el local), fichas de empresa, directorios licenciados (6.8) | Las reseñas son la señal que los motores filtran con más cuidado, y los acuerdos de licencia como el de Yelp las convierten en feed |
| **Marca personal / autoridad** | LinkedIn, Substack, YouTube, podcasts | Todo lo que queda indexado y no está detrás de login o muro de pago es materia prima para el modelo |

### 6.9.5 Un caso medible

Tras la caída de Reddit, GEO Metrics publicó un análisis del fenómeno. Marketing4eCommerce lo recogió en un artículo propio, sin acuerdo previo: un enlace orgánico que además contextualiza a GEO Metrics cuando alguien pregunta qué le pasó a Reddit. Ese tipo de efecto se puede medir con el informe de citas: qué páginas externas hablan de ti, en qué respuestas aparecen y si conducen a visitas. Es la forma de saber si un enlace conseguido este mes tiene retorno, aunque no se pueda traducir todavía a ventas.

> **No pongas todos los huevos en la misma cesta**
> La lección de agosto no es «abandona Reddit». GEO Metrics lo resume así: antes no había que centrarse mucho en Reddit y ahora no hay que dejarlo de lado, porque sigue trayendo oportunidades en Perplexity y en Google y porque puede volver. Lo que no cambia es diseminar el mensaje de forma estratégica en varios sitios y medir el efecto por motor.

> **ACCIÓN OPERATIVA · Un mes de reference building**
> - Define tu tripleta (persona, marca, sector) y úsala en el titular o primer párrafo de cada pieza nueva.
> - Lista los diez dominios externos que los motores citan para tus 20 prompts más importantes. Ese es tu mapa de PR.
> - Prioriza tres sitios y define para cada uno un ángulo (dato original, entrevista, comparativa) en lugar de pedir un enlace.
> - Mide a los 30 días qué respuestas cambiaron, no solo si hay enlace.

# Capítulo 7. Personal Intelligence: la visibilidad personalizada como nueva dimensión

> **TL;DR DEL CAPÍTULO**
> - Personal Intelligence es ya gratis para usuarios free de Gemini en EE.UU. (17 mar 2026).
> - AI Mode Connected Apps añadió YouTube Music (16 jul), Calendar, Yahoo Fantasy y Sleeper (9 sep).
> - El monitoreo de temas de AI Mode (information agents, antes solo Ultra) llega a todo el mundo el 28 sep.
> - No hemos encontrado réplicas independientes del experimento iPullRank en este cuatrimestre.

Personal Intelligence es un concepto operacional reciente. La aparición del experimento controlado de iPullRank (publicado en mayo de 2026) y la expansión global de la funcionalidad confirmada en I/O 2026 introducen una dimensión nueva a la teoría del Share of Model que requiere un tratamiento dedicado. Importante: **todo lo que sigue se presenta como hipótesis sólida de optimización**, no como factor algorítmico confirmado por Google. El experimento de iPullRank es el único estudio publicado con datos cuantitativos y tiene limitaciones de tamaño y de transparencia del mecanismo subyacente.

## 7.1 El experimento de iPullRank: +46 puntos porcentuales de visibilidad

iPullRank publicó en mayo de 2026 un experimento controlado sobre cómo Personal Intelligence afecta a qué marcas aparecen en AI Mode de Google. Los datos fueron recogidos entre el 30 de marzo y el 15 de abril de 2026.

**Diseño**

- Tres cuentas de Google: (1) cuenta de control limpia, sin Personal Intelligence; (2) cuenta limpia conectada a Personal Intelligence, con señales de marca sembradas vía Gmail y Google Photos; (3) cuenta personal del autor (Garrett Sussman) con años de historial de Google.

- Varias categorías de producto testeadas (máquinas de café, zapatillas de running, bancos y servicios de streaming, entre otras). Seis tipos de prompt por categoría.

- Corpus de análisis: 1.922 respuestas de AI Mode, 22.064 filas a nivel de marca.

**Resultados principales**

- **Tasa de aparición de las marcas sembradas.** Subió del 23,9 % al 66,8 % (+46 puntos porcentuales) en cuentas con Personal Intelligence activo.

- **Placement en top-3.** Pasó del 4,5 % al 24,9 %.

- **Gmail.** Mostró el efecto más fuerte sobre visibilidad de marca. Los emails transaccionales, recibos de compra y emails de bienvenida con menciones consistentes de marca elevan dramáticamente la probabilidad de que esa marca aparezca en respuestas de AI Mode para el usuario.

- **Google Photos.** Impacto más débil y variable. En la mayoría de categorías, el efecto de las fotos fue marginal.

![Figura 7.1. Efecto cuantificado de las señales personales sobre la visibilidad de marca en AI Mode (iPullRank, marzo-abril 2026).](charts/cap7_personal_intelligence.png)

*Figura 7.1. Efecto cuantificado de las señales personales sobre la visibilidad de marca en AI Mode (iPullRank, marzo-abril 2026).*

> **APOYO VISUAL · Infografía del diseño experimental de iPullRank**
> ***Descripción para diseño:*** *Diagrama de tres cuentas en columna. Columna 1 "Cuenta limpia (control)": icono de cuenta de Google sin halo, sin actividad. Columna 2 "Cuenta con seeding": icono de cuenta de Google con un halo morado y debajo iconos de Gmail con marcas sembradas (logos genéricos de café/zapatillas/banco) más Google Photos con miniaturas. Columna 3 "Cuenta personal (Sussman)": icono de cuenta con halo más intenso e historial denso. Las tres columnas convergen en una caja inferior que dice "AI Mode · Gemini 3.5 Flash · 1.922 respuestas · 22.064 filas a nivel marca". Debajo, en la parte derecha, las cifras finales en grande: +46pp visibilidad y +20,4pp top-3. Paleta morados corporativos. Estilo editorial limpio.*

**Limitaciones documentadas del estudio**

Ventana de 17 días, tres cuentas: muestra pequeña para generalizar. Solo cuentas con Personal Intelligence activo por opt-in, no el comportamiento default. Las tarjetas de contexto personal no se capturaron completamente. El propio paper explicita: "No observamos los sistemas internos de retrieval, ranking, decisión del modelo ni el motor de Personal Intelligence de Google." **Estas limitaciones son fundamentales: las cifras +46pp y +20,4pp son indicativas, no extrapolables linealmente a otras cuentas, otras categorías o ventanas distintas.**

A fecha de junio de 2026, no hay réplicas independientes publicadas con metodología documentada. Google no ha confirmado ni negado públicamente el mecanismo específico descrito en el paper. Esto refuerza la lectura como hipótesis operativa sólida, no como factor algorítmico definitivo.

## 7.2 Expansión global de Personal Intelligence

En el I/O 2026 (19 de mayo), Google confirmó la expansión de Personal Intelligence a casi 200 países y 98 idiomas, disponible de forma gratuita para todos los usuarios. Lo que en marzo era una funcionalidad opt-in en mercados anglosajones es ahora una infraestructura disponible para la mayoría de la base de usuarios global.

## 7.3 Implicaciones para la medición del Share of Model

Esta es la implicación más disruptiva para la disciplina a nivel teórico.

**El problema del Share of Model universal.** El SoM estándar, medido con prompts uniformes desde una cuenta sin historial personal, puede estar midiendo una media estadística que no representa la experiencia de ningún usuario individual. Si la visibilidad varía +46pp dependiendo de las señales personales del usuario, ¿qué refleja exactamente el SoM medido en frío?

La respuesta metodológicamente honesta: el SoM sin señales personales mide la probabilidad de citación para un usuario sin historial relevante previo (*"visibilidad en frío"*). Es útil como benchmark comparativo entre marcas y como tracking de tendencias temporales. **No es representativo** de la experiencia de usuarios que ya conocen la marca o que han interactuado con ella vía email.

Nadie ha resuelto este problema de medición a junio de 2026. El paper de iPullRank lo documenta como hallazgo, no como solución. No hay metodología publicada que aborde la medición del SoM ajustado por señales personales. La fragmentación de la visibilidad por usuario es un problema abierto.

## 7.4 Estrategia: el email marketing como señal de GEO (hipótesis operativa)

Si Gmail influye en qué marcas aparecen en AI Mode, la consistencia y frecuencia de las comunicaciones de email con usuarios en ecosistema Google pasan a ser una variable a tener en cuenta en la visibilidad en IA, no solo un canal de conversión. **Importante:** todo lo que sigue es una hipótesis operativa derivada del experimento de iPullRank, no una confirmación oficial de Google. La recomendación de explorar inbox seeding tiene base lógica y un precedente empírico publicado, pero no debe presentarse a equipos directivos como factor algorítmico garantizado.

**Implicaciones prácticas**

- **Reportar SoM siempre con contexto explícito:** número de runs promediados, plataformas cubiertas, tipo de account usada (sin historial personal vs. con señales sembradas).

- **Implementar email marketing con branding consistente**, especialmente para audiencias en ecosistema Google. Estructurar las comunicaciones periódicas de email transaccional para inyectar menciones de marca consistentes en cabeceras, asuntos y cuerpos.

- **Segmentar la medición GEO mediante metodologías "persona-driven".** Crear simulaciones de monitorización de marca que utilicen navegadores limpios frente a navegadores con cuentas Google seedeadas con compras previas, permitiendo reportar un SoM dinámico basado en cohortes de clientes y no en promedios anónimos.

- **Para nichos YMYL** (banca, salud, servicios B2B regulados), evitar depender del seeding personalizado (Gmail) y enfocar el presupuesto en posicionamiento en el Grafo de Conocimiento y en referencias en entidades de extrema confianza (Wikipedia, Wikidata, medios licenciados).

- **Monitorizar las publicaciones de seguimiento de iPullRank** sobre signal decay (cuánto tiempo persiste el efecto de una señal de Gmail), variantes de comportamiento con emails abiertos vs. no abiertos, y más categorías de producto.

# Capítulo 8. Métricas y medición: el ecosistema nativo de telemetría llega en 2026

> **TL;DR DEL CAPÍTULO**
> - GSC Generative AI Performance Report es global desde el 31 de agosto, pero solo da impresiones (sin clics ni queries).
> - Bing Webmaster Tools añadió Citation Share el 16 jun: hoy es la única métrica "Share of Model" nativa.
> - Nuevo marco de 3 superficies: Retrieval (qué LEE) · Citation (qué CITA) · Ads (qué COMPRA).
> - Google Merchant Center AI Performance report activo en EE.UU., CA, AU, IN, NZ desde el 8 sep.

¿Cómo medimos el éxito si el usuario no hace clic? Necesitamos nuevas métricas para una nueva realidad. El cambio más relevante es la aparición de telemetría nativa: lo que hasta enero era exclusivamente medible con herramientas de terceros, hoy tiene contrapartida oficial dentro de los productos de Microsoft y Google.

## 8.1 El framework de tres capas

La medición robusta del GEO en junio de 2026 requiere gestionar tres capas simultáneas que son complementarias, no alternativas.

**Capa 1: tráfico referido desde IA (GA4, server logs)**

Lo que mide: visitantes reales que llegan al sitio después de ver una cita en una respuesta de IA y hacer clic. Limitación principal: cubre solo la fracción de usuarios que hace clic. El 93 % en AI Mode no hace clic. Además, muchos AI-referred visits aparecen como "direct" o "referral sin hostname" en GA4 por stripped referrers.

**Implementación:** configurar segmentos en GA4 para hostname = chatgpt.com, perplexity.ai, bing.com/chat, claude.ai, gemini.google.com, etc. Revisar server logs para user agents de bots de IA (GPTBot, ClaudeBot, PerplexityBot, CCBot, Google-Extended, OAI-SearchBot, ChatGPT-User).

**Nuevo canal de GA4:** Google Analytics 4 lanzó a mediados de 2026 el canal por defecto "AI Assistant Traffic", que agrupa y clasifica automáticamente el tráfico proveniente de asistentes conversacionales asignándole el medio nativo ai-assistant en los informes de adquisición.

**Capa 2: citación en IA (herramientas de terceros + GSC + Bing Webmaster Tools)**

Lo que mide: frecuencia con la que el sitio aparece como fuente en respuestas generadas por IA, independientemente de si el usuario hace clic.

**Capa 3: Share of Model estadístico (herramientas de terceros)**

Lo que mide: frecuencia estadística de mención de la marca a través de un corpus de prompts representativos del ICP. Requiere múltiples runs del mismo prompt para obtener medias estables.

**Caveat fundamental documentado por SparkToro (enero 2026):** menos de 1 en 100 probabilidades de que ChatGPT devuelva la misma lista de marcas en dos runs del mismo prompt. El SoM solo es estadísticamente estable cuando se promedia a través de muchos runs. Una medición puntual es ruido.

**Caveat Personal Intelligence (iPullRank, 2026):** el SoM medido con accounts limpias sin historial mide "visibilidad en frío", no la experiencia de usuarios con señales personales relevantes.

> **APOYO VISUAL · Infografía del framework de 3 capas de medición**
> ***Descripción para diseño:*** *Diagrama de tres bandas horizontales apiladas (estilo pirámide invertida o capas geológicas), de arriba abajo: Capa 1 (banda superior, más estrecha): "Tráfico AI-referred" — icono GA4 + logos de ChatGPT/Perplexity/Gemini/Claude. Texto pequeño: "Solo captura el ~7 % de usuarios que hace clic". Capa 2 (banda media): "Citación en IA" — icono de cita o documento con enlaces saliendo, + logos pequeños de GSC, Bing Webmaster, Clarity. Texto: "Frecuencia de aparición como fuente". Capa 3 (banda inferior, la más ancha): "Share of Model estadístico" — icono de muestreo o gráfico de barras + logo GEO Metrics. Texto: "Frecuencia de mención agregada por persona/cohorte". A la derecha de las tres capas, una flecha vertical etiquetada "Granularidad descendente · Cobertura ascendente". Paleta morados corporativos en degradado entre capas. Estilo editorial técnico.*

## 8.2 GSC Search Generative AI Performance Reports (lanzado el 3 de junio de 2026)

Google publicó el 3 de junio de 2026 en el Search Central Blog el lanzamiento de los Search Generative AI Performance Reports en Google Search Console. Los autores son Noam Maoz y Ofir Samet del equipo de GSC.

**Qué mide**

- Funcionalidades de IA generativa dentro de Search: AI Overviews y AI Mode.

- Funcionalidades de IA generativa dentro de Discover.

**Métricas disponibles en la primera versión**

- Impresiones (cuántas veces URLs del sitio aparecen en las funciones de IA).

- Páginas (qué URLs específicas aparecen).

- Países (visibilidad desglosada por país).

- Dispositivos (qué dispositivos usaban los usuarios, solo disponible para Search, no para Discover).

- Fechas (granularidad horaria, diaria, semanal y mensual).

**Lo que NO incluye todavía**

Datos de clics y métricas de query-level no están en esta primera versión. Google confirmó explícitamente que *"continuará trabajando con los propietarios de sitios para entender qué insights serían más útiles e introducirá métricas adicionales con el tiempo."*

**Toggle de opt-out**

Junto a los informes, Google lanzó un nuevo toggle dentro de Search Console que permite bloquear el contenido de aparecer en AI Overviews, AI Mode y AI Overviews en Discover. Este control tiene implicaciones estratégicas significativas para publishers que prefieran no licenciar su contenido para síntesis de IA.

**Estado del rollout**

Actualmente disponible para un subconjunto de sitios en Reino Unido. Google indicó que expandirá la disponibilidad globalmente después de las pruebas. No hay fecha confirmada para el rollout global.

**Implicación crítica para la guía**

Este lanzamiento valida retroactivamente la categoría de métricas de GEO como disciplina de medición oficial. Sin embargo, la ausencia de datos de clics y queries significa que GSC nativo solo ofrece una imagen parcial. Las herramientas de terceros como GEO Metrics, Profound, Otterly y Peec AI siguen siendo necesarias para completar el cuadro de mandos multi-plataforma.

**Matriz de decisión: ¿activar el opt-out o mantener opt-in?**

El toggle de Google obliga a tomar una decisión consciente que no existía antes. La elección depende del modelo de negocio del dominio y del valor relativo entre exposición de marca y protección de propiedad intelectual. La siguiente matriz orienta la decisión:

| Tipo de contenido / negocio | Recomendación | Razonamiento |
|---|---|---|
| Marcas B2C con foco en awareness y consideration | Mantener opt-in | La citación en AI Overviews y AI Mode actúa como señal de autoridad y empuja conversiones downstream (Quality Premium 4-5x). El coste de oportunidad de desaparecer del bloque de fuentes supera la pérdida de tráfico informacional. |
| E-commerce, retail, servicios financieros y de salud B2C | Mantener opt-in | Las queries comparativas y de recomendación pasan masivamente por motores de IA. Estar fuera del consideration set es perder el cliente antes de que llegue al sitio. |
| Publishers con monetización por publicidad display de alto volumen | Evaluar caso por caso | Si más del 60 % del tráfico llega de queries informacionales que el AI Overview ya responde sin clic, el opt-out puede frenar parcialmente la extracción de tráfico informacional por parte de la interfaz de la IA, protegiendo las impresiones de la publicidad display nativa del sitio. Validar con datos de GSC los últimos 90 días antes de decidir. |
| B2B premium con datos propietarios (informes, datasets, research de pago) | Considerar opt-out | Si el modelo de negocio se basa en vender acceso al contenido, permitir que la IA sintetice las conclusiones gratis erosiona el producto. El opt-out protege el muro de pago. |
| Sitios con muros de pago duros (paywall premium tipo FT, WSJ) | Considerar opt-out selectivo por sección | Negociar acuerdo de licencia con OpenAI/Google/Anthropic en paralelo al opt-out: monetizar el contenido a través del partnership en vez de a través del clic. |
| Marcas con riesgo elevado de alucinación negativa (sector farmacéutico, salud, finanzas reguladas) | Mantener opt-in + auditoría | El opt-out no elimina las menciones de la marca: solo evita usar el sitio como fuente. La marca puede seguir apareciendo en respuestas sin tu evidencia. Mejor opt-in para alimentar al modelo con datos correctos y monitorizar continuamente. |
| Contenido institucional, regulatorio o legal (gobierno, ONGs, organismos) | Opt-in | La función pública del contenido requiere máxima distribución. El opt-out contradice la misión. |
| Sitios con tráfico ya marginal o sin estrategia de monetización clara | Opt-in por defecto | Ningún downside identificable. La citación, si llega, es ganancia neta. |

**Caveats.** Esta matriz orienta la decisión pero no la determina mecánicamente. Algunos casos límite: dominios con secciones heterogéneas (parte gratuita + parte de pago) deben evaluar opt-out por subdominio o sección, no por dominio entero. El toggle se puede revertir, así que la decisión no es definitiva pero sí implica un período de calibración antes de volver a tener visibilidad equivalente.

## 8.3 Bing Webmaster Tools – AI Performance Report (9 de febrero de 2026)

Microsoft lanzó el AI Performance Report en Bing Webmaster Tools en public preview el 9-11 de febrero de 2026. Es el primer panel oficial del sector que da a los propietarios de sitios datos directos sobre cómo Copilot y las AI summaries de Bing usan su contenido.

**Métricas del dashboard**

- **Total Citations:** número de veces que el sitio apareció como fuente en respuestas generadas por IA durante el período seleccionado.

- **Grounding Queries:** las frases de búsqueda que Copilot genera internamente cuando necesita recuperar contenido para responder a una pregunta de usuario. Son distintas de las queries del usuario final. Una pregunta del usuario como "cómo gestionar un equipo remoto" puede descomponerse en grounding queries como "estrategias de gestión de equipos remotos 2026". Este dato tiene valor propio: permite entender el proceso de query fan-out que los LLMs aplican antes de recuperar fuentes.

- **Páginas citadas:** qué URLs específicas fueron usadas como grounding por Copilot.

- **Tendencias:** evolución temporal de las citas.

**Datos de rendimiento publicados por Microsoft**

Los journeys de usuario a través de Copilot son un 33 % más cortos y convierten un 76 % mejor que los paths de búsqueda tradicional. El AI referral traffic a los principales sitios web creció un 357 % interanual en junio de 2025.

**Limitación crítica**

Solo cubre experiencias de Microsoft: Copilot, Bing AI summaries y algunas integraciones de socios seleccionados. No incluye ChatGPT, Perplexity, Google AI Overviews, Claude ni Gemini. Es una imagen parcial del ecosistema total.

## 8.4 Microsoft Clarity Citations Dashboard (GA mayo 13, 2026)

Microsoft Clarity declaró la disponibilidad general del Citations Dashboard el 13 de mayo de 2026 (tras lanzamiento inicial en febrero). Esta herramienta cualitativa une el comportamiento del usuario con la visibilidad pre-clic generada en el entorno conversacional de Copilot.

- **Share of Authority (cuota de autoridad).** La métrica competitiva estrella. Mide el porcentaje de citaciones de un dominio en relación con la suma de las citaciones de todos los competidores que aparecieron exactamente en el mismo conjunto de consultas de grounding a lo largo del día. Elimina el sesgo de consultas vacías y mide la dominancia competitiva real en el grounding diario.

- **AI Referral Traffic.** Porcentaje de sesiones de navegación con origen verificado de un chatbot o asistente conversacional.

- **Integración cualitativa.** Mapas de calor y grabaciones de sesión específicamente para cohortes de usuarios referidos por asistentes de IA.

- **Monitoreo de bots de IA.** Integración directa con CDN (Cloudflare, Fastly, Amazon CloudFront, Akamai, Azure Front Door) para auditar IPs de rastreo y diferenciar bots de entrenamiento de búsqueda activa.

## 8.5 Métricas fundamentales de GEO (actualizadas)

8.  **Share of Model (SoM).** El porcentaje de veces que una marca es mencionada en las respuestas de un LLM específico para un conjunto de prompts estratégicos. Reportar siempre con (a) número de runs promediados, (b) plataformas cubiertas, (c) tipo de account usada.

9.  **Share of Authority (cuota de autoridad, vía Clarity).** Métrica competitiva nativa para ecosistema Microsoft.

10. **Frecuencia de citación.** Número absoluto de veces que tu dominio aparece como referencia.

11. **Grounding queries (Bing Webmaster Tools).** Las sub-consultas que el modelo genera internamente para recuperar tu contenido. Input estratégico de primer orden.

12. **Análisis de sentimiento.** ¿La mención es positiva, neutral o negativa? Forzar a las IAs a dar veredictos claros o que elijan entre opciones y los justifiquen, en lugar de medirlo en sus respuestas "libres" (que tienden a ser neutras por diseño).

13. **Tráfico desde IAs.** Usuarios que llegan directamente desde motores de respuesta. Capa 1 del framework.

14. **Logs de servidor (detección IA).** Identificación de visitas desde IPs o user agents de IAs. Permite rastrear actividad real de lectura e ingesta que no se refleja en Google Analytics.

15. **Tasa de alucinación negativa.** Frecuencia con la que los modelos generan información falsa perjudicial sobre la marca.

## 8.6 Herramientas del ecosistema – mapa actual (junio 2026)

- **GEO Metrics** (trygeometrics.com): plataforma multimotor (ChatGPT, Gemini, Claude, Perplexity, Copilot, DeepSeek, Grok, AI Mode). Funciones: AI Ranking, Answer Accuracy, Competitors Benchmarking, Sentiment Analysis, AI Recommendations, Keyword Research, AI Reports. MCP integration.

- **Profound** (profound.com): anonymized consumer-panel data + API-based visibility scoring. Sus datos de 680M citas y 27M de citas multiplatforma son la muestra más grande publicada en el sector.

- **Otterly** (otterly.ai): tracking a nivel de query con benchmarking competitivo. Más de 20.000 profesionales de marketing. Refresh semanal.

- **Peec AI:** AI search analytics con simplicidad. Visibilidad, posición y sentimiento en ChatGPT, Perplexity, Claude y Gemini. Actualización cada 24 horas.

- **Scrunch AI:** enterprise con SOC 2 Type II, SSO, Agent Experience Platform.

- **SE Ranking (AI tracker), Ahrefs Brand Radar, Semrush AI toolkit, Conductor:** extensiones AI integradas en los stacks SEO clásicos.

- **Cloudflare AI Crawl Control:** para propietarios de sitios en Cloudflare. AI crawlers al 22 % del tráfico total de bots en Q1 2026.

## 8.7 Auditoría de alucinaciones, Dark Visibility y defensa de marca

La métrica de "riesgo" es ahora tan importante como la de "visibilidad". Las marcas deben implementar auditorías continuas para proteger su reputación y para detectar omisiones competitivas.

**Tasa de alucinación negativa**

Frecuencia con la que los modelos generan información falsa perjudicial sobre la marca (productos descontinuados presentados como nuevos, precios erróneos, asociación con escándalos inexistentes, especificaciones técnicas inventadas). Es la cara visible del 11 % de claims atómicos no soportados que documenta el estudio de las 11.500 consultas. GEO Metrics permite trackear estos eventos para detectar el tipo de alucinación y las fuentes usadas por el modelo para sostenerla, lo que abre la vía a contraatacarlas.

**Dark Visibility (visibilidad oscura): la omisión competitiva**

Dark Visibility no mide cuándo la marca aparece: mide cuándo debería aparecer y no aparece. Es la métrica de omisión, no de mención. En el lenguaje de SparkToro, es la fracción del consideration set donde la marca está ausente pese a ser relevante.

**Por qué es estratégicamente más importante que el SoM puntual**

- **El SoM puntual mide el fragmento del consideration set donde estás.** Dark Visibility mide el fragmento donde no estás pero deberías estar. La diferencia es la oportunidad real de ganancia.

- **El consideration set es inestable run-to-run.** Una marca que aparece en el 40 % de las respuestas no aparece en el 60 % restantes. Ese 60 % es el espacio de trabajo de Dark Visibility: identificar qué consultas, qué cohortes y qué motores no te incluyen.

- **La omisión persistente refuerza el sesgo del modelo.** Si una marca está ausente del consideration set de una categoría durante varios meses, los modelos refuerzan su propia distribución sin ella. Detectar la omisión temprano permite intervenir con señales correctivas (PR digital, presencia en fuentes preferentes, refuerzo de entidades) antes de que el sesgo se cristalice.

**Cómo opera la suite de monitorización en este KPI**

Una plataforma de monitorización continua como GEO Metrics permite cruzar tres dimensiones: (a) el corpus de prompts relevantes del ICP de la marca, (b) el comportamiento esperado de los competidores en ese corpus, y (c) la presencia o ausencia de la marca en cada respuesta. La diferencia entre "marcas esperadas" y "marcas presentes" es el Dark Visibility cuantificado. Sobre esta base, el sistema sugiere acciones correctivas: qué fuentes de autoridad reforzar, qué entidades co-citar, qué señales de marca enriquecer.

**Defensa activa contra alucinaciones**

- **Inyección de datos correctivos.** A través de activos propios de alta autoridad (página oficial, comunicados de prensa, Wikipedia/Wikidata si la entidad es elegible) optimizados para sobrescribir la información errónea en el corpus.

- **Velocidad de corrección.** Crítica para evitar propagación entre modelos. Una alucinación detectada el día 1 y corregida en fuentes propias el día 2 tiene una probabilidad mucho mayor de ser sustituida en futuras recuperaciones RAG que una detectada al mes.

- **Monitorización cross-modelo.** Una alucinación que aparece en un modelo puede propagarse a otros en ciclos posteriores de scraping. La auditoría debe cubrir todos los motores relevantes simultáneamente.

## 8.8 El Quality Premium del tráfico AI-referred

Los datos más robustos disponibles sobre calidad del tráfico referido desde IA:

- Las visitas originadas en asistentes de IA convierten a una tasa media del 14,2 % frente al 2,8 % de la búsqueda orgánica tradicional. Es un incremento neto de 5x en calidad de adquisición de leads.

- Microsoft documentó que journeys vía Copilot convierten un 76 % mejor que búsqueda tradicional.

- Semrush (2026): los usuarios procedentes de asistentes de IA registran un 8 % más de engagement, visualizan un 12 % más de páginas por sesión y experimentan un 27 % menos de tasa de rebote en verticales de eCommerce.

**El gap de atribución.** La mayoría del AI-referred traffic no pasa headers de referrer limpios. Las visitas aparecen como "direct" o "referral sin hostname" en GA4. Para la mayoría de sitios, el tráfico AI-referred real es 3-5x superior al que se atribuye correctamente a IA en GA4 estándar.

**El dato contraintuitivo más importante.** AI tools aún representan menos del 2 % del tráfico web desktop total. Google orgánico recuperó el 94,3 % de cuota en US en el Q1 2026. La narrativa de "la IA está matando el tráfico web" no encaja con los datos de volumen absoluto. Lo que sí está pasando es que el tráfico de sitios informativos cae porque los AI Overviews absorben la respuesta sin generar clic, no porque la gente use IA en lugar de Search.

![Figura 8.1. Quality Premium del tráfico AI-referred. Menos del 2 % del volumen total, pero con tasas de conversión muy superiores.](charts/cap8_quality_premium.png)

*Figura 8.1. Quality Premium del tráfico AI-referred. Menos del 2 % del volumen total, pero con tasas de conversión muy superiores.*

## 8.9 Las tres superficies de medición: retrieval, citation y ads

Los eventos de este cuatrimestre obligan a reorganizar el dashboard ejecutivo. Ya no basta con medir "visibilidad en IA" como un único KPI. Hay tres superficies distintas, cada una con sus mediciones, sus fuentes de datos y sus palancas de acción. Mezclarlas lleva a conclusiones falsas.

![Figura 8.9.1. Marco de medición de 3 superficies GEO + GEM. Cada superficie tiene KPIs y herramientas propias.](charts/cap8_3capas_medicion.png)

*Figura 8.9.1. Marco de medición de 3 superficies GEO + GEM. Cada superficie tiene KPIs y herramientas propias.*

### 8.9.1 Superficie 1 · RETRIEVAL (qué LEE el modelo)

Mide qué páginas tuyas accede el modelo cuando responde. Es la superficie de ENTRADA del embudo. Si no estás aquí, no puedes estar en las dos siguientes.

| Métrica | Fuente | Observaciones |
|---|---|---|
| % páginas consultadas de la marca | Logs de user-agent (ChatGPT-User, Perplexity-User, OAI-SearchBot) | Base: Cloudflare Bot Analytics, Fastly, logs propios |
| Grounding queries en Bing WMT | Bing Webmaster Tools AI Performance (desde feb 2026) | Mapeo entre queries y páginas tuyas |
| Impresiones en IA generativa | GSC Generative AI Performance (global desde 31 ago) | Solo impresiones, sin clics ni queries |
| Crawl rate por categoría | Cloudflare (Search / Training / Agent) | Separar las tres categorías |
| Retrieval-to-Citation Ratio | Cálculo propio (consultadas ÷ citadas) | Ratio alto = fuente dependiente de riesgo |

### 8.9.2 Superficie 2 · CITATION (qué CITA el modelo)

Mide qué páginas tuyas acaban visibles en la respuesta final del usuario. Es la capa de salida orgánica. Lo que un año atrás llamábamos "GEO".

| Métrica | Fuente | Observaciones |
|---|---|---|
| Citation Share (nativo) | Bing Webmaster Tools (desde 16 jun 2026) | **Única métrica nativa Share of Model que hay hoy.** Lanzamiento en preview global. |
| Share of Model | Herramientas: GEO Metrics, Promptwatch, Qwairy, Pierview, Peec, Profound | Set propio de prompts; cuidar la metodología |
| Share of Authority | Microsoft Clarity (desde feb 2026) | Enfocado en el referral de asistentes |
| Fidelity Score | Herramientas de monitorización (Salesforce AI Research de referencia) | % de claims atómicos soportados por las fuentes citadas |
| Dark Visibility | Set propio de prompts donde la marca debería aparecer y no aparece | Capítulo 1.5 |
| Citas por motor | Desagregar por ChatGPT, Perplexity, Google AI Mode, Claude, Copilot | Los patrones divergen (ver cap. 6.7) |

### 8.9.3 Superficie 3 · ADS (qué COMPRA la marca)

Mide el rendimiento de las campañas pagadas en motores generativos. Es la capa que se añade en esta edición. Se desarrolla en profundidad en el capítulo 11.

| Métrica | Fuente | Observaciones |
|---|---|---|
| Share of Ads (SOV ads) | Herramientas propias; % apariciones patrocinadas de la marca sobre total de su categoría | Propuesta de GEO Metrics; no estandarizada |
| CPC, CPM, oCPC, oCPM | Ads Manager de OpenAI | oCPM es el modelo recomendado por OpenAI desde 16 sep |
| Event Quality Score (EQS) | Ads Manager de OpenAI | Escala 1-10; detecta IDs ausentes, eventos tardíos, duplicados |
| Conversiones por Pixel + CAPI | OpenAI Pixel + Conversions API deduplicadas | +69% cobertura y −22% CPA con las dos juntas (OpenAI) |
| Share of Agent | Para Sponsored Agents (piloto EE.UU.) | Nuevo; sin benchmarks |
| AI Mode Ads KPIs | Google Ads · AI Max · Merchant Center AI Performance (desde 8 sep en 5 mercados) | Solo EE.UU. tiene ads en AI Mode hoy |

> **ACCIÓN OPERATIVA · Rediseñar el dashboard ejecutivo con 3 superficies**
> - Separar KPIs orgánicos y pagados en secciones distintas del dashboard; no mezclar.
> - Añadir una fila por superficie con el KPI principal + variación semanal: Superficie 1 (grounding queries), Superficie 2 (Citation Share Bing + Share of Model GEO Metrics), Superficie 3 (SOV Ads + CPC).
> - Añadir el Retrieval-to-Citation Ratio como señal de alerta temprana: cuando sube bruscamente, el modelo ha cambiado algo en la selección.
> - Para equipos que no activan GEM todavía, mantener la Superficie 3 vacía pero visible. Es el espacio reservado para cuando la decisión cambie.

## 8.10 Telemetría nativa: lo que cambió entre junio y octubre

Las secciones 8.2 a 8.4 describen el estado de junio. Este es solo el delta, con las limitaciones que cada fabricante declara.

| Herramienta | Novedad | Limitación declarada |
|---|---|---|
| **Google Search Console** | El informe Generative AI está disponible en todo el mundo desde el 31 ago, junto con el control de exclusión de funciones generativas. El 24 sep se añadió un filtro multimodal (búsquedas basadas en imagen) | Solo impresiones por página, país, dispositivo y fecha. **Sin clics y sin queries.** Si el sitio no tiene suficientes impresiones en IA, el informe no aparece. No incluye experimentos de Search Labs |
| **Merchant Center** | El 8 sep se activó un informe de rendimiento en IA en EE.UU., Canadá, Australia, India y Nueva Zelanda, con términos de búsqueda, intenciones y atributos | Solo consultas en inglés. Sin clics |
| **Bing Webmaster Tools** | 16 jun: Intents (clasifica las grounding queries), Topics (clústeres temáticos), Citation Share y Compare (superpone dos periodos) | Citation Share es observacional, no muestra dominios de la competencia y no es cuota de tráfico. Solo cubre el ecosistema de Microsoft. Las recomendaciones GEO de SEO Week NYC (27 abr) no se incluyeron |
| **Microsoft Clarity** | El panel de Citations (GA el 13 may, ver 8.4) se completó con un panel de actividad de bots de IA (ene) y, según una fuente secundaria, con segmentación marca/no marca de las grounding queries (3 ago) | El cálculo de Share of Authority se aplica por día y excluye los días sin citas, lo que puede dar valores más altos que otros enfoques |
| **GA4** | El canal «AI Assistant» por defecto (15 may) etiqueta el tráfico de ChatGPT, Gemini, Claude y similares | El tráfico desde funciones de IA de Google no se separa del de búsqueda normal porque comparte referrer. Un análisis de Loamly (fuente secundaria) sobre 446.405 visitas desde IA encontró que el 70,6% llegó sin cabecera de referrer y se clasificó como directo |

**Qué cambia en la práctica.** Con GSC global y Citation Share de Bing, por primera vez hay dos mediciones nativas que no dependen de un tercero, aunque ninguna da clics y ninguna cubre ChatGPT. La señal de ChatGPT, que es la que más crece, sigue dependiendo de herramientas de terceros y de lo que llegue como tráfico en GA4. Por eso 8.11 y 8.12 describen el método con el que GEO Metrics cierra ese hueco.

> **ACCIÓN OPERATIVA · Montar la telemetría gratuita en una mañana**
> - Activa el informe Generative AI en Search Console y guarda una captura mensual: no se puede reconstruir hacia atrás.
> - En Bing Webmaster Tools, activa Citation Share e Intents y exporta las grounding queries.
> - Instala Clarity y revisa Citations. En GA4, comprueba que el canal AI Assistant recibe tráfico y compáralo con el directo.
> - Pon en el informe una nota sobre el tráfico directo: parte de él es IA sin referrer.

## 8.11 Metodología de GEO Metrics: monitorizar sin sesgo (pilar 2)

La tesis es sencilla y dura: monitorizar mal es peor que no monitorizar, porque da una falsa sensación de control y empuja a decisiones equivocadas. Un usuario real, cuando le pregunta algo a una IA, tiene la búsqueda web activa y recibe respuestas con fuentes en tiempo real. Ahí se toman las decisiones y ahí hay que observar.

### 8.11.1 Cinco reglas de monitoreo

| Regla | Qué implica |
|---|---|
| **1. La interfaz del cliente, no la API** | Usar siempre la interfaz que usa el cliente. Una llamada técnica directa devuelve datos que no son los que ve un usuario |
| **2. Sesión nueva en cada consulta** | Sin historial que sesgue la respuesta |
| **3. Búsqueda web activa** | Verificar que está activada antes de cada consulta |
| **4. Mismo prompt, mismo motor, mismo horario** | La consistencia hace comparables los datos entre periodos |
| **5. Registrar la respuesta completa** | No solo si aparece o no la marca |

**Qué registrar en cada consulta:** si aparece la marca, en qué posición dentro de la respuesta, qué fuentes cita la IA, qué dice exactamente y si es correcto, quién aparece en su lugar y qué tono usa.

**Un cuidado con el sentimiento.** Si se deja que la propia IA se autoevalúe, tiende a calificarlo todo de positivo o neutro. Es mejor forzarla a elegir entre opciones y justificarlo.

### 8.11.2 Por qué la interfaz y no la API

GEO Metrics cuenta que empezó en marzo de 2024 consultando la API con una sola clave, y que los datos se sesgaban y llegaban enseguida a una meseta. De ahí pasó a construir sus propios sistemas de captura sobre la interfaz, que requieren rotación de IPs, proxies residenciales y sesiones con distintos perfiles para acceder a datos que con un perfil gratuito no se ven. Esa ingeniería es cara y es, según la empresa, lo que la diferencia de un *prompt tracker* que manda una hoja de cálculo con 300 prompts a una API. [Observación y afirmación de GEO Metrics; el coste y la ventaja no tienen verificación externa]

### 8.11.3 El fan-out y la reducción de la variabilidad

GEO Metrics no lanza solo el prompt que da de alta el cliente. Según su descripción, desglosa la consulta en cuatro o cinco subconsultas, las recrea y las lanza en paralelo, de modo que la respuesta que el cliente ve es el resultado de varias iteraciones, con el fin de limar la variabilidad del modelo. Lo llaman *context tracker* porque lo que se monitoriza es un contexto, no una frase. No es determinista, y la empresa lo dice: lo que se busca es la parte que se mantiene, el patrón. Aunque la marca no salga siempre primero, cada vez que sale hay narrativa, percepción y citas que se repiten. El criterio es consistente con el dato de SparkToro de que menos de 1 de cada 100 ejecuciones devuelve la misma lista de marcas (Mito 3).

### 8.11.4 Tres tipos de prompt y los prompts de precisión

GEO Metrics recomienda enmarcar el Prompt Universe en tres tipos, de más a menos competido: los genéricos de categoría («mejores herramientas GEO en español»), los de comparativa («A frente a B») y los de marca. Los de marca son los que más hay que priorizar al principio y los más baratos de ganar, porque no hay benchmark con nadie.

Sobre ellos se montan los **prompts de precisión**: se da de alta una respuesta que la marca considera correcta, se compara con la que da la IA y se obtiene un sentimiento y una puntuación de precisión. Si no se parecen, la herramienta rastrea las páginas que la IA usó para construir la respuesta y propone acciones concretas: actualizar una ficha de un tercero (por ejemplo, un perfil de Trustpilot), corregir una página de precios que no casa con lo declarado. Es la versión operativa de la auditoría de alucinaciones de 8.7.

> **ACCIÓN OPERATIVA · Auditar la calidad de tu monitorización**
> - Comprueba que tu herramienta usa la interfaz con búsqueda web activa y sesión nueva, y pídele que lo documente.
> - Exige el número de ejecuciones por prompt: una sola ejecución no mide nada (Mito 3).
> - Separa los prompts de marca de los de categoría en el informe. No promedies ambos.
> - Añade al formulario de contacto la pregunta «¿cómo nos encontraste y qué le preguntaste a la IA?». Es el dato más valioso que ninguna herramienta te da.

## 8.12 Los tres pilares de la medición: termómetro, percepción y negocio (pilar 4)

El cuarto pilar del marco de GEO Metrics es medir, y propone tres pilares que se necesitan entre sí: sin uno, no funciona el otro.

| Pilar | Qué mide | Métricas típicas | Carácter del dato |
|---|---|---|---|
| **1 · Termómetro** (parte alta del embudo) | Si la marca aparece y cuánto perdura en las respuestas | Ratio de citación, Share of Voice, posición media | Aproximación, no determinista. Sirve para saber si estás en la memoria de la IA, y es maquillable según el conjunto de prompts |
| **2 · Percepción** | Cómo hablan de la marca y con qué información | Sentimiento, precisión (*accuracy*), narrativa, asociaciones | Aproximación. Distingue lo que es verídico de lo que se puede entender como verdad universal |
| **3 · Negocio** (parte baja del embudo) | Lo que llega y convierte | Tráfico desde IA hacia páginas concretas, conversiones | **Determinista**: se puede rastrear hasta la conversión |

El argumento central, repetido por Nico Bignú en SEO Room y SEO desde cero: si hay que apostar por una sola métrica al final del mes, que sea el tráfico que llegó desde la IA, a qué página, y qué hizo después. El resto son termómetros. Entre la visibilidad y la conversión hay un hueco que no cubre nadie: no se sabe cuántas veces se pregunta algo ni cómo lo pregunta cada persona (el *dark social* o *dark attribution* de las conversaciones privadas). Cerrar ese hueco es, según GEO Metrics, el verdadero problema del GEO.

### 8.12.1 Cómo se relacionan los tres marcos de medición de esta guía

A lo largo del capítulo 8 aparecen tres marcos de tres elementos. No compiten: responden a preguntas distintas.

| Marco | Dónde | Pregunta que responde | Los tres elementos |
|---|---|---|---|
| **Tres capas de medición** | 8.1 | ¿De dónde sale el dato? | Tráfico referido desde IA · Citación en IA · Share of Model estadístico |
| **Tres superficies** | 8.9 | ¿Dónde ocurre la visibilidad? | Retrieval (qué lee) · Citation (qué cita) · Ads (qué compra) |
| **Tres pilares** | 8.12 | ¿Qué pregunta de negocio contesta? | Termómetro · Percepción · Negocio |

En un dashboard ejecutivo, las filas pueden ser las superficies (8.9), las columnas los pilares (8.12) y cada celda se alimenta de la capa de datos que corresponda (8.1).

> **ACCIÓN OPERATIVA · Una tabla de una página para dirección**
> - Filas: Retrieval, Citation y Ads. Columnas: Termómetro, Percepción y Negocio. Rellena solo las celdas para las que tengas dato.
> - En la celda de Negocio de Citation, pon el tráfico de IA de GA4 con su caveat de directo (8.10).
> - Marca en color las celdas que son estimación y las que son medición. Dirección debe ver la diferencia.

# Capítulo 9. Mitos que el research de 2026 ha desmentido

> **TL;DR DEL CAPÍTULO**
> - Ocho mitos adicionales (10 a 17) desmentidos o matizados por la evidencia de junio a octubre de 2026.
> - Los más caros de creer: «Cloudflare bloquea Googlebot», «el tráfico de IA convierte 23 veces más» y «el AI Act obliga a etiquetar todo».

La rápida adopción comercial de las técnicas GEO ha provocado la proliferación de mitos técnicos. Este capítulo recoge los que el research con metodología publicada y las guías oficiales han desmentido entre febrero y junio de 2026.

**Mito 1. "Hay que crear un llms.txt para aparecer en búsqueda generativa"**

**La realidad.** Google publicó en mayo de 2026 la guía "Optimizing your website for generative AI features on Google Search" con texto explícito: "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in generative AI search." John Mueller lo comparó con el meta keywords tag y lo calificó de "a dumb idea".

**El matiz.** Chrome Developers añadió diagnóstico de llms.txt en la categoría experimental Agentic Browsing de Lighthouse 13.3, sin asignarle peso de puntuación. Su propósito es exclusivamente dotar de observabilidad técnica ante agentes de código (Cursor, SDKs de OpenAI, Anthropic, Vercel). No tener llms.txt no es un problema; tenerlo no es una palanca de visibilidad.

**El matiz práctico.** Tenerlo en el dominio no hace daño, pero no debe desplazar trabajo de indexabilidad, evidencia, estructura ni autoridad.

**Mito 2. "Es obligatorio chunkear el contenido en páginas de un solo tema"**

**La realidad.** Google confirmó explícitamente en mayo de 2026 que una página cubriendo múltiples temas es procesable sin problema. Los ingenieros de Google Search Relations (John Mueller y Martin Splitt) declararon que el algoritmo es capaz de mapear los matices conceptuales y la vecindad semántica de múltiples temáticas distintas dentro de una misma URL extensa, localizando y mostrando con precisión el segmento relevante.

**Veredicto.** Falso como regla general. La regla de los Answer Nuggets sigue siendo útil como heurística de redacción modular, pero no como obligación técnica de fragmentación.

**Mito 3. "El Share of Model es una métrica homogénea y universal"**

**La realidad.** SparkToro (enero 2026): menos de 1 en 100 probabilidades de que ChatGPT devuelva la misma lista de marcas en dos runs del mismo prompt. "AI doesn't have a rank. It has a consideration set." Y Personal Intelligence (iPullRank): la visibilidad de marcas en AI Mode varía hasta +46 puntos porcentuales según las señales personales del usuario. El SoM medido en frío y de forma puntual es ruido.

**Veredicto.** Falso. La métrica correcta es la frecuencia estadística a través de muchos runs, idealmente con reporte por cohortes de persona. El ranking posicional puntual es estadísticamente inestable.

**Mito 4. "Schema markup mejora las citas en IA"**

**La realidad.** Ahrefs publicó el 11 de mayo de 2026 el único estudio con diseño estadístico explícito sobre schema markup y citas de IA. Metodología: 1.885 páginas tratadas con JSON-LD entre agosto 2025 y marzo 2026, comparadas con 4.000 páginas de control. Ventana de medición: 30 días. Resultados: Google AI Mode +2,4 % (estadísticamente indistinguible de cero), ChatGPT +2,2 % (estadísticamente indistinguible de cero), Google AI Overviews -4,6 % (estadísticamente significativo: pérdida media de 12 citas diarias por página).

*Advertencia del propio estudio.* Una segunda investigación con diferente metodología podría encontrar efectos positivos, especialmente segmentando por tipo de schema o extendiendo la ventana a 90 días.

**Veredicto.** Schema markup es higiene básica de SEO técnico (sigue siendo necesario para rich results, organización clara de entidades y AAIO), pero no es una palanca directa de GEO. Las cifras circuladas en agencias y conferencias como "+44 % FAQ schema", "+2,3x AI answer presence" o "+3,2x más probable de aparecer en AI Overviews" no tienen metodología verificable publicada detrás.

**Mito 5. "Si rankeo \#1 en Google, aparezco en IA"**

**La realidad.** Ahrefs (marzo 2026): solo el 38 % de citas en AI Overviews vienen del top-10 de Google. Profound (2025-2026): el 80 % de fuentes citadas en AI search no aparecen en el top-10 para la misma query. Solo el 12 % coincide exactamente. ChatGPT tiene 6,82 % de overlap con el top-10 de Google. Y el 28,3 % de páginas más citadas por ChatGPT no tienen ninguna visibilidad en Google.

**Veredicto.** Falso. El SEO clásico es base necesaria pero no suficiente. Ranking y citación se gestionan como KPIs separados.

**Mito 6. "GEO necesita un playbook radicalmente separado del SEO"**

**La realidad.** Kevin Indig, Lily Ray y Mike King (iPullRank) coinciden: los fundamentos de la citabilidad en IA son los mismos que los de un buen SEO ejecutado con más intencionalidad. "Build genuine authority. Create content that actually answers questions. Make your brand something people talk about." Lily Ray: "GEO no reemplaza al SEO; amplifica las páginas que ya se ganaron el derecho a rankear."

**Veredicto.** Parcialmente falso. GEO no es "otra disciplina": es la extensión del buen SEO al ámbito de la recuperación y síntesis generativa, con énfasis nuevos (semantic completeness, brand mentions, information density, fan-out coverage) y nuevas capas de medición (citas, grounding queries, Share of Model, personalización).

**Mito 7. "Publicar con IA sin intervención humana es suficiente para que te citen"**

**La realidad.** Las Quality Rater Guidelines de mayo de 2026 incorporaron Compression Fidelity como nueva sub-rúbrica para penalizar scaled content abuse, y el May 2026 Core Update (completado el 2 de junio) añadió un Authorship Classifier que penaliza calendarios editoriales agresivos impulsados por IA pero carentes de firmas expertas verificables.

**Veredicto.** Falso. El AI-generated "slop" tiene patrones de baja perplexidad y burstiness artificial que son detectados por los filtros de calidad. La IA es una herramienta de producción, no un sustituto del expertise editorial.

**Mito 8. "Un acuerdo editorial garantiza visibilidad destacada en IA"**

**La realidad.** OpenAI confirma uso de contenido partner, pero también afirma que el ranking depende de múltiples factores y que no hay forma de garantizar la primera posición. Ninguna empresa de IA explica con claridad cómo se usa el contenido licenciado en el RAG en tiempo real versus en el entrenamiento del modelo base.

**Veredicto.** No demostrado. La licencia puede mejorar acceso, frescura y seguridad jurídica; no asegura visibilidad. La hipótesis de "gravedad estadística" sigue siendo plausible y teóricamente sólida, pero sin evidencia empírica publicada que la confirme.

**Mito 9. "No se puede medir nada en GEO"**

**La realidad.** Bing Webmaster Tools AI Performance Report (febrero 2026) reporta citas en IA. Google Search Console Generative AI Reports (3 de junio de 2026) reporta impresiones en AI Overviews y AI Mode. Microsoft Clarity Citations Dashboard (mayo 2026) introduce el Share of Authority. GA4 lanzó el canal AI Assistant Traffic. Más SISTRIX, Profound, Otterly, GEO Metrics, Peec, Scrunch y otros.

**Veredicto.** Falso. La medición es heterogénea y fragmentada (cada player solo expone su superficie), pero existe y es accionable. Lo que no existe todavía es una métrica unificada multi-plataforma con datos oficiales de los proveedores.

**Mitos adicionales (10 a 17)**

Los ocho mitos siguientes se desprenden de los eventos de junio a octubre de 2026. Cada uno cita la sección donde se desarrolla la evidencia.

**Mito 10. «Cloudflare ha bloqueado Googlebot y todos los crawlers de IA en las cuentas nuevas»**

**La realidad.** El 1 de julio Cloudflare anunció que a partir del 15 de septiembre bloquearía por defecto los crawlers de entrenamiento y de agentes en páginas con anuncios, y que los de uso mixto (nombró a Googlebot, Applebot y Bingbot) se tratarían con la regla más restrictiva. El 15 de septiembre rectificó: creó la categoría «Accountable» y el ajuste «Disallow AI Training», y los operadores Accountable pueden seguir rastreando para búsqueda. Lo que sí quedó bloqueado por defecto en páginas con anuncios fueron los agentes, como ChatGPT-User (2.7).

**Veredicto.** Falso en lo que se contó, cierto en lo que importa: el riesgo real es el bloqueo por defecto de agentes en páginas con anuncios.

**Mito 11. «Bloquear el entrenamiento te saca de las respuestas de la IA»**

**La realidad.** La búsqueda de ChatGPT depende de OAI-SearchBot, no de GPTBot; la de Claude, de Claude-SearchBot, no de ClaudeBot (3.7). Bloquear los de entrenamiento no te saca de la búsqueda. El matiz es la memoria paramétrica: existe la hipótesis de que no aparecer en el entrenamiento reduce la presencia de la marca en respuestas que no buscan en la web, como las que dependen de memoria personal o de voz. Es una hipótesis sin medición pública. GEO Metrics, a la pregunta de si bloquearía ambos, respondió que no bloquearía ninguno, y que el de entrenamiento importa sobre todo a largo plazo.

**Veredicto.** Falso como afirmación general. Decisión de negocio: los publishers cuyo producto es el contenido tienen motivos para bloquear el entrenamiento; las marcas que quieren ser recomendadas, normalmente no.

**Mito 12. «Reddit es imprescindible para el GEO» y su gemelo «Reddit ya no sirve»**

**La realidad.** Entre el 13 y el 17 de agosto la cuota de Reddit en las citas de ChatGPT Search pasó de una media del 3,83% al 0,52%, pero Reddit siguió siendo entre el 25% y el 34% de las páginas que ChatGPT consultaba, y en Perplexity sus citas se duplicaron en el mismo periodo (6.7). Reddit tampoco es el único caso: en 2025 hubo una rotación comparable, con recuperación en meses.

**Veredicto.** Ambas frases son falsas. Reddit informa a los modelos y ya no se cita igual en ChatGPT; sigue pesando en Perplexity y en Google. Se mide por motor.

**Mito 13. «El tráfico de IA convierte 2 o 23 veces más que el orgánico»**

**La realidad.** Las cifras de prima de conversión proceden de fuentes de parte, secundarias y con muestras pequeñas. Amsive, con 54 sitios, no encontró diferencia significativa: 4,87% de conversión de LLM frente a 4,60% de orgánico (p = 0,794). La sección 8.8 recoge datos favorables a la tesis del *Quality Premium*; el conjunto de la evidencia es contradictorio.

**Veredicto.** No contrastado como regla. La conclusión prudente es medirlo en tu propio sitio con GA4 y un píxel de conversión (8.12), no importarlo de un estudio.

**Mito 14. «Los anuncios de ChatGPT compran presencia en las respuestas»**

**La realidad.** OpenAI declara que los anuncios no influyen en las respuestas y que los anunciantes no pueden moldear, ordenar ni alterar lo que responde ChatGPT; los anuncios corren en sistemas separados del modelo de chat y aparecen en una tarjeta etiquetada bajo la respuesta (cap. 11). No hay verificación independiente de esa separación, ni en un sentido ni en el otro.

**Veredicto.** No demostrado en ninguna dirección. Hay que tratar GEO y GEM como superficies medibles por separado (8.9) y no suponer que el pago mueve lo orgánico.

**Mito 15. «WebMCP es ya un estándar del W3C que hay que implementar»**

**La realidad.** Es un borrador de un Community Group, editado por Google y Microsoft, en *origin trial* de Chrome 149 a 156, con la API todavía cambiando entre borradores y una adopción medida cercana a cero (2.8).

**Veredicto.** Prematuro como obligación. Razonable como piloto acotado en flujos de alto valor.

**Mito 16. «El AI Act obliga a etiquetar todo el contenido hecho con IA»**

**La realidad.** El artículo 50 del AI Act es aplicable desde el 2 de agosto de 2026, y el Omnibus digital de IA (Reglamento (UE) 2026/1744, en vigor desde el 27 de julio) aplazó el régimen de alto riesgo pero no la transparencia (11.13). El artículo 50 impone obligaciones distintas a actores distintos: avisar al usuario de que interactúa con una IA, marcar en formato legible por máquina el contenido sintético que generan los proveedores, etiquetar los deepfakes y revelar cierto texto publicado para informar al público sobre asuntos de interés público. No es una obligación general de etiquetar cada texto, y existen excepciones.

**Veredicto.** Falso como regla general y peligroso como simplificación en ambos sentidos. Esta guía no es asesoramiento legal.

**Mito 17. «El GEO aumenta la visibilidad un 40%»**

**La realidad.** Es una cifra de laboratorio de 2023-2024, medida sobre texto generado con un motor simulado, y que no se reproduce de forma estable en benchmarks competitivos (C-SEO Bench, GEO-BENCH). El propio paper muestra que, cuando todas las fuentes optimizan, las ganancias van a las peor posicionadas (4.7).

**Veredicto.** Falso como promesa comercial. Cierto como dato de laboratorio con límites.

# Capítulo 10. Plan de implementación estratégica (Roadmap 30-60-90 días)

> **TL;DR DEL CAPÍTULO**
> - Roadmap actualizado con las nuevas obligaciones del cuatrimestre: Cloudflare, 3 superficies, DSA.
> - Auditar Cloudflare (Search/Training/Agent) pasa a tarea obligatoria de la fase 1.
> - Activar Citation Share de Bing es la quick-win de medición nativa.
> - Para la fase 3 (90 días), preparar el repositorio de anuncios DSA es un nuevo entregable.

Para adaptar tu empresa a la realidad del GEO en junio de 2026, este es el plan de acción, en tres fases de 30, 60 y 90 días, con prioridades calibradas según los cambios documentados.

## Fase 1: Infraestructura, medición nativa y bots (días 0-30)

El objetivo es asegurar que tu "casa digital" sea legible para los agentes de IA y que tengas activada toda la telemetría nativa disponible.

- **Acción 1: Activar GSC Generative AI Reports.** Comprobar si el dominio tiene acceso a los informes (rollout inicial en UK). Configurar exportación mensual de impresiones, páginas y países en superficies de IA.

- **Acción 2: Configurar Bing Webmaster Tools AI Performance.** Es gratuito y disponible desde febrero de 2026. Monitorizar Total Citations, Grounding Queries y páginas citadas. Las grounding queries son el input más valioso disponible gratuitamente para entender el query fan-out de Copilot.

- **Acción 3: Instalar Microsoft Clarity con Citations Dashboard.** Vincular GSC + Bing Webmaster con Clarity para verificación cruzada. Activar Share of Authority como métrica competitiva. Integrar el CDN (Cloudflare/Fastly/Akamai) para auditar logs de bots de IA.

- **Acción 4: Configurar GA4 AI Assistant Traffic.** El canal por defecto está disponible. Validar segmentación y configurar segmentos custom para hostname = chatgpt.com, perplexity.ai, gemini.google.com, claude.ai, etc.

- **Acción 5: Política de bots por proveedor.** Decidir, por dominio o subdominio, qué bots permites: Googlebot (clásico), Google-Extended (entrenamiento), GPTBot (entrenamiento OpenAI), OAI-SearchBot (búsqueda en ChatGPT), ChatGPT-User (acciones de usuario), ClaudeBot, PerplexityBot, CCBot, GeminiBot. La separación operacional permite, por ejemplo, aparecer en ChatGPT Search sin permitir entrenamiento.

- **Acción 6: Optimización del presupuesto de rastreo agéntico.** Despliegue de llms.txt en directorio raíz para validación de Lighthouse Agentic Browsing. Tras la formalización de las Agentic Browsing Audits por parte de Google Chrome (capítulo 2.3), esta acción pasa de "opcional" a tarea obligatoria de higiene técnica. El archivo no garantiza más citas, pero protege el agentic crawl budget y evita romper la auditoría agéntica oficial de Lighthouse cuando el servidor responde mal a la petición (un 404 es N/A, pero un 5xx o un certificado roto sí rompen la auditoría). Coste de implementación: marginal. Coste reputacional de no hacerlo: auditorías agénticas rotas en informes técnicos compartidos con clientes y partners.

- **Acción 7: Datos estructurados.** Validar etiquetas Schema.org para Organization, Product y FAQPage. Para AAIO, añadir Action, Order y Reservation cuando aplique. (Pero no esperar que esto solo mueva la aguja de citas: es higiene técnica, no palanca.)

- **Acción 8: Auditoría SSR/CSR.** Confirmar que el contenido crítico (precios, especificaciones, respuestas) está disponible en HTML estático. El parsing falla en JavaScript con tasa del 23 % vs. 94 % en HTML.

- **Acción 9: GEO Metrics u otra herramienta de tracking multimotor.** Establecer línea base de Share of Model, sentimiento y citaciones en ChatGPT, Gemini, Claude, Perplexity, Copilot, AI Mode. Reportar con número de runs y plataformas cubiertas.

## Fase 2: Optimización de contenido y semántica (días 31-60)

El objetivo es que la IA entienda y elija tu contenido. Las prioridades han cambiado: ya no es "añadir más keywords", es maximizar information density, semantic completeness y citation worthiness.

- **Acción 1: Reescribir las top-20 páginas con Pirámide Invertida 2.0.** Cada sección empieza con la respuesta directa en 40-60 palabras antes de desarrollar.

- **Acción 2: Inyectar Quotations y Statistics.** Introducir un mínimo de una estadística numérica contrastada y una cita experta textual con atribución explícita en cada H2 informacional. El paper de Princeton documenta +41 % en PAWC por citas de expertos y +31 % por estadísticas.

- **Acción 3: Tablas comparativas.** Insertar al menos una tabla comparativa o lista ordenada en las 10 páginas con más tráfico orgánico potencial.

- **Acción 4: Crear páginas "Tu Marca vs Competidor".** Honestas y detalladas. Son oro para las IAs que buscan contrastar opciones.

- **Acción 5: Estrategia de autores con E-E-A-T verificable.** Cada artículo firmado por una persona real con sección de autor donde se muestre expertise. Es crítico ante el Authorship Classifier del May 2026 Core Update.

- **Acción 6: FAQs al final de los artículos clave.** Bloques con respuestas cortas. La regla de Answer Nuggets sigue vigente como heurística de redacción modular.

- **Acción 7: Optimización multimodal.** Transcripciones VTT para videos. ALT contextual rico en entidades para imágenes. VideoObject Schema con KeyMoments.

## Fase 3: Autoridad, personalización y agentes (días 61-90)

El objetivo es construir la reputación externa que alimenta la confianza de los modelos, sembrar señales personalizadas y preparar el sitio para la web agéntica.

- **Acción 1: Digital PR concentrado en medios licenciados.** Para mercado hispano: Prisa Media (El País, AS, Cadena SER), La Vanguardia, ABC, Vocento, Infobae, Le Monde, Future plc para tech. Una mención sin enlace en estos medios vale 3x más que un backlink (Onely: brand mentions 0,664 vs backlinks 0,218).

- **Acción 2: Estrategia en Reddit.** Identificar los 5 subreddits más relevantes de la categoría. Participación honesta y de valor. Crucial para Perplexity (Reddit es el 46,7 % de su top-10 fuentes).

- **Acción 3: Estrategia en YouTube.** Trackear los prompts que te interesan y los videos que aparecen citados. Crear videos cortos con transcripciones precisas que respondan a esas intenciones.

- **Acción 4: Inbox seeding.** Estructurar las comunicaciones periódicas de email transaccional para inyectar menciones de marca consistentes, habilitando el posicionamiento de Personal Intelligence en las cuentas Gmail de los clientes. Esto es una hipótesis derivada del experimento de iPullRank, no una confirmación oficial de Google.

- **Acción 5: Marcado WebMCP en flujos transaccionales.** Empezar por el formulario de checkout, registro de leads o reserva de citas. Atributos declarativos (toolname, tooldescription, toolparamdescription) para permitir navegación autónoma de agentes en Chrome.

- **Acción 6: Auditar Lighthouse Agentic Browsing.** Ejecutar de manera recurrente las auditorías de Lighthouse para certificar la integridad del árbol de accesibilidad y la correcta exposición de las APIs semánticas frente a los bots de IA.

- **Acción 7: Revisión de métricas.** Establecer línea base definitiva del cuadro de mandos: GSC Generative AI, Bing AI Performance, Clarity Citations, GA4 AI Assistant Traffic, GEO Metrics SoM. La unidad base es "query-family × persona × frecuencia de cita × outcome".

- **Acción 8: Monitorización de ChatGPT Core Updates.** Configurar alertas en SISTRIX, Profound o GEO Metrics para detectar redistribuciones sistémicas de citas tras actualizaciones de modelo.

> **APOYO VISUAL · Infografía del roadmap 30-60-90 días**
> ***Descripción para diseño:*** *Línea de tiempo horizontal con 3 segmentos. Segmento 1 (días 0-30) titulado "Infraestructura y telemetría nativa" — icono de servidor/dashboard + lista breve de las 9 acciones de Fase 1. Color morado claro (#A78BFA). Segmento 2 (días 31-60) titulado "Optimización de contenido y semántica" — icono de documento/texto + lista breve de las 7 acciones de Fase 2. Color morado medio (#6B46C1). Segmento 3 (días 61-90) titulado "Autoridad, personalización y agentes" — icono de red de menciones + agente + lista breve de las 8 acciones de Fase 3. Color morado oscuro (#4C1D95). Por encima de la línea, hitos clave marcados: "Día 15: línea base SoM establecida", "Día 45: refuerzo de top-20 páginas", "Día 75: primera ronda de Digital PR completada", "Día 90: cuadro de mandos cross-plataforma operativo". Paleta morados corporativos. Estilo editorial limpio.*

## 10.6 Tareas obligatorias adicionales

Las nuevas realidades del cuatrimestre junio-octubre añaden doce tareas al roadmap. Se distribuyen entre las tres fases existentes.

### Fase 1 (días 1-30): infraestructura y auditoría

- **Auditoría de Cloudflare (obligatoria).** Revisar Security > Bots > AI Crawlers en TODAS las zonas. Comprobar la categoría Agent en páginas con anuncios. Decidir política por tipo de dominio.

- **Activar Citation Share y Intents en Bing WMT.** Es gratis, es nativo y hoy es la única medición nativa Share of Model.

- **Activar el GSC Generative AI Performance Report.** Ya global (31 ago). Solo da impresiones, pero es la base. Alimentar el dashboard.

- **Separar los agentes de OpenAI y Claude en robots.txt y en la CDN** (OAI-SearchBot, GPTBot, ChatGPT-User, OAI-AdsBot, ClaudeBot, Claude-User, Claude-SearchBot). Ver 3.7 y 11.14.

- **Añadir al formulario de contacto «¿cómo nos encontraste y qué le preguntaste a la IA?»**. Es el dato de atribución que ninguna herramienta da (8.11).

### Fase 2 (días 31-60): instrumentación y toma de decisiones

- **Reorganizar el dashboard ejecutivo en 3 superficies** (ver 8.9). Separar Retrieval, Citation y Ads. No mezclar.

- **Decisión GEM**: ¿activar ChatGPT Ads o esperar? Aplicar la matriz de decisión del capítulo 11.11.

- **Construir el Prompt Universe** (diez dolores, tres prompts cada uno, clasificados en Descubrimiento, Comparación y Validación) y darlo de alta antes de publicar. Ver 5.8.

- **Documentación propia como prioridad SEO**: FAQ, centro de ayuda, páginas de comparativa y precios. Son el objetivo del fan-out con site: post-GPT-5.6.

### Fase 3 (días 61-90): capacidades avanzadas y preparación regulatoria

- **Si se activa GEM**: preparar la segmentación de la competencia y la creatividad asumiendo que el repositorio de anuncios DSA será público antes de enero de 2027. Todo lo que compres será auditable.

- **Cumplimiento del artículo 50 del AI Act antes del 2 de diciembre**: responsabilidad editorial del contenido con IA, aviso en chatbots propios y marcado de contenido sintético (11.13).

- **Framework de monitorización por motor**: ChatGPT, Perplexity, Google AI Mode, Claude, Copilot. Los patrones de citación divergen cada vez más.

> **ACCIÓN OPERATIVA · Primera semana en la nueva realidad**
> - Lunes: auditar Cloudflare (2 horas).
> - Martes: activar Citation Share en Bing WMT y asegurar que GSC Generative AI Performance Report está integrado al dashboard (1 hora).
> - Miércoles: inventario de documentación propia; identificar las 5 páginas que deberían ganar fan-out con site: y no lo tienen (3 horas).
> - Jueves: decisión formal de equipo: ¿activar GEM? Si sí, qué equipo lo lleva (producto / performance / marketing) (reunión 1 hora).
> - Viernes: comunicación a dirección con el marco de las 3 superficies y las métricas que vamos a usar (preparación 2 horas).

# Capítulo 11. GEM: la capa pagada del GEO

> **TL;DR DEL CAPÍTULO**
> - ChatGPT Ads es un canal real: $1B de run-rate (31 ago), 60+ países, España en self-serve desde el 31 ago. Pero sin benchmarks oficiales por sector todavía.
> - Para B2B esperar: los anuncios solo llegan a Free y Go. Para e-commerce con feed limpio, test disciplinado de 2-4 semanas.
> - CPC real: $1,72 a $12 USD; CTR 0,65% a 1,30%. Si no puedes pagar $3-5 por clic, no entres aún.
> - Google AI Mode Ads sigue siendo solo EE.UU. Perplexity abandonó la publicidad en febrero.
> - La DSA designó a ChatGPT como VLOSE: antes de enero de 2027, OpenAI debe publicar un repositorio público de anuncios.

Este capítulo documenta la aparición de la capa pagada del GEO durante 2026 y propone un marco operativo para integrarla con la capa orgánica. Es el bloque más denso de la edición porque el canal pasó de piloto a mercado global en seis meses y el ritmo de cambios no ha parado.

---

## 11.1 Nomenclatura: GEM, AEM, AI SEM, Generative Engine Marketing

El mercado todavía no ha fijado un término para "SEM en motores generativos". Circulan al menos cuatro:

| Acrónimo | Significado | Uso |
|---|---|---|
| **GEM** | Generative Engine Marketing | Uso creciente en agencias y en vendors de GEO tools (incluido GEO Metrics). Es el que recomendamos: simetría clara con SEO/SEM. |
| AEM | Answer Engine Marketing | Microsoft lo usó en material propio durante 2025. Hoy en declive. |
| AI SEM | AI Search Engine Marketing | Uso informal, descriptivo pero sin tracción. |
| Generative Engine Marketing | Formato largo de GEM | Útil cuando se escribe para audiencias que no conocen la sigla. |

En esta guía usamos **GEM** para la capa pagada y **GEO** para la capa ganada / orgánica, por simetría con SEO/SEM. El canal pagado ya tiene volumen de búsqueda relevante en España: "openai ads manager" tiene un CPC estimado de 15,89 € en Google Ads y "publicidad en chatgpt", 5,30 € (Withbaker, oct 2026).

> **La nomenclatura es provisional**
> Es muy probable que el mercado converja en 2027 hacia uno de estos términos. Mientras tanto, al proponer un informe o aprobar presupuesto conviene incluir la definición explícita: "GEM (Generative Engine Marketing): canal pagado dentro de motores de respuesta de IA, actualmente ChatGPT Ads y Google AI Mode Ads".

## 11.2 Cronología de ChatGPT Ads (feb 2026 → oct 2026)

ChatGPT Ads pasó de piloto a canal global con disponibilidad self-serve en seis meses. La cronología verificada:

![Figura 11.2.1. Cronología de ChatGPT Ads (feb-sep 2026). Fuentes: OpenAI, CNBC, Digiday, Angi IR.](charts/cap11_chatgpt_ads_cronologia.png)

*Figura 11.2.1. Cronología de ChatGPT Ads (feb-sep 2026). Fuentes: OpenAI, CNBC, Digiday, Angi IR.*

| Fecha | Hito |
|---|---|
| 16 ene 2026 | OpenAI publica principios de publicidad en ChatGPT |
| 9 feb 2026 | Piloto en EE.UU. (CPM ~60 USD y mínimo de ~200-250 k USD, según terceros) |
| abr 2026 | Compromiso mínimo baja a ~50 k USD (según fuentes sectoriales) |
| 5 may 2026 | **Ads Manager self-serve en EE.UU.** (CPC, Pixel, CAPI, sin gasto mínimo) |
| jun 2026 | Primeras cuentas con oCPC (CPC optimizado por conversión), según fuentes sectoriales |
| jun 2026 | LiveRamp = primer partner externo de Conversions API (solo EE.UU.) |
| 11 ago 2026 | **Lanzamiento confirmado en UK, México, Brasil, Japón, Corea del Sur** |
| 18 ago 2026 | OpenAI anuncia expansión a 31 mercados europeos |
| 24 ago 2026 | **ChatGPT Ads activo en España + 30 mercados UE/EEE** (compra inicial vía ventas, agencias, partners) |
| 29 ago 2026 | India vía agencias (según fuentes sectoriales) |
| 31 ago 2026 | **$1B run-rate anualizado + self-serve en Europa, India, MENA** |
| 3 sep 2026 | Plugin Ads Manager para ChatGPT y Codex; carrusel por tarjeta; más campos de matching (según fuentes sectoriales) |
| 10 sep 2026 | Piloto Amazon Ads: campañas de Amazon DSP se extienden a ChatGPT (EE.UU.) |
| 16 sep 2026 | **Sponsored Agents (piloto EE.UU. con Wayfair y Angi). oCPM pasa a GA. Integraciones HubSpot y Shopify. Event Quality Score** |
| 18 sep 2026 | Ads Manager disponible en 56 países según tabla de OpenAI |
| 23 sep 2026 | Expansión a Indonesia, Malasia, Filipinas, Singapur, Tailandia, Vietnam, Taiwán (60+ países) |
| 29 sep 2026 | **OpenAI DevDay: ninguna novedad sobre ads** (foco en agentes y Codex) |
| 30 sep 2026 | Email de producto: creación masiva de campañas, Insights API, separación de nombre marca |

## 11.3 Mecánica, formatos y modelos de puja

### 11.3.1 Dónde aparece el anuncio

El anuncio es una tarjeta patrocinada, etiquetada y separada, bajo la respuesta del asistente. Cada tarjeta incluye anunciante, logo, titular, texto, imagen y página de destino. OpenAI insiste en dos cosas: los anuncios no influyen en la respuesta y los anunciantes no ven las conversaciones (solo reciben datos agregados de impresiones y clics).

**Cobertura real del inventario**: según el panel de Similarweb (vía PPC Land, 17 ago), el 26% de las respuestas a usuarios Free y Go llevaba un anuncio. MediaPost (11 ago) documentó anuncios en temas irrelevantes.

### 11.3.2 Segmentación

La subasta no funciona con keywords. Funciona con contexto conversacional, señales de idioma y ubicación aproximada. En España se puede segmentar por ciudad o código postal (Withbaker).

**En Europa, en el lanzamiento, los anuncios NO están personalizados**. Se emparejan con el contexto de la conversación en curso y la geografía. OpenAI publicó una política de privacidad dedicada el 14 de agosto y exige consentimiento previo para cualquier personalización posterior. Hasta octubre no hay fecha anunciada para activar la personalización con consentimiento en el EEE.

### 11.3.3 Modelos de puja

| Modelo | Qué optimiza | Cuándo usarlo |
|---|---|---|
| **CPM** | Impresiones | Lanzamientos de marca o notoriedad; fase piloto con poco historial |
| **CPC** | Clics | Cuando no tienes conversiones trackeadas con calidad suficiente |
| **oCPC** | CPC optimizado por conversión tras clic | Con Pixel + CAPI deduplicados y volumen mínimo de conversiones |
| **oCPM** (recomendado por OpenAI desde 16 sep) | CPM optimizado por conversión basada en impresiones (post-clic y post-view-through) | Modelo que OpenAI considera principal; aprovecha el 52% de conversiones view-through que ocurren en la primera hora tras la impresión |

### 11.3.4 Formatos

- **Tarjeta estática**: un producto o oferta.

- **Carrusel multiproducto**: en producción desde principios de agosto. Según Sensor Tower (vía PPC Land), ~23% de los anuncios de ChatGPT en escritorio de EE.UU. en la segunda mitad de agosto eran carruseles.

- **Sponsored Agents**: ver 11.6.

- **Campañas de feed de producto**: gestión del feed desde el 2 jun; precio y valoraciones desde finales de julio; conexión Shopify, CSV, SFTP o URL.

### 11.3.5 La subasta

Subasta de segundo precio ponderada por relevancia. La calidad del creativo cuenta junto con la puja. El Event Quality Score (EQS, 1-10) puntúa la calidad de las fuentes de datos: detecta IDs ausentes, eventos tardíos o duplicados. OpenAI insiste en que estructurar bien el EQS es la variable con más impacto en el rendimiento de las campañas con oCPM.

## 11.4 Quién ve los anuncios y limitaciones

| Plan | Ve anuncios |
|---|---|
| **Free** | Sí |
| **Go** | Sí |
| **Plus** | **NO** (confirmado por OpenAI en el comunicado europeo del 24 ago) |
| **Pro** | **NO** |
| **Business** | **NO** |
| **Enterprise** | **NO** |
| **Edu** | **NO** |

Esta restricción es la razón principal por la que los pilotos B2B han tenido resultados pobres. El comprador B2B usa planes de pago. Si tu público objetivo es decisor en una empresa de más de 50 empleados, es muy probable que use ChatGPT Plus, Pro o Business y nunca vea tu anuncio.

### 11.4.1 Restricciones adicionales

- **Sin anuncios para menores de 18 años** ni en chats temporales, ni en el navegador Atlas durante el test.

- **EEE y Suiza**: sin personalización en el lanzamiento. Solo contexto conversacional + geografía.

- **Sectores con revisión adicional**: finanzas, salud, legal. Verificación de negocio obligatoria.

- **Sectores prohibidos**: apuestas y alcohol no permitidos. En la fase piloto también se excluyeron citas y política.

## 11.5 Coste, presupuesto y rendimiento real

### 11.5.1 CPC reales reportados

![Figura 11.5.1. CPC real de ChatGPT Ads por tipo de cuenta (2026). Fuentes: Choice OMG, SE Ranking, Search Engine Journal.](charts/cap11_cpc_real_rango.png)

*Figura 11.5.1. CPC real de ChatGPT Ads por tipo de cuenta (2026). Fuentes: Choice OMG, SE Ranking, Search Engine Journal.*

| Métrica | Dato | Fuente / muestra |
|---|---|---|
| Puja CPC inicial recomendada | 3-5 USD | OpenAI Help Center |
| CPC real reportado | 1,72-12 USD según sector; otro análisis llega a 22 USD | Pruebas con gasto publicado; SEJ |
| Test B2B SaaS (2 campañas, jun 2026) | 4,42 y 4,88 CAD | Choice OMG, datos de cuenta |
| CTR observado | 0,65-1,30% en tests B2B | MediaPost (11 ago) |
| CTR SE Ranking (97.000 impresiones) | 1,30% | SE Ranking |
| CPM lanzamiento → self-serve | ~60 USD → ~25 USD | Autodeclarado en r/PPC vía Tru Commerce |
| Presupuesto mínimo diario | 25 USD (cuentas USD); ~15 €/día (cuentas EUR) | travi.pl; flisko.si |
| Test caro reportado | Hostinger ~70.000 USD | Search Engine Journal |
| Benchmarks oficiales por sector | **No existen todavía**: "ChatGPT Ads does not yet have performance benchmarks across advertisers, industries, or campaign types" | OpenAI |

### 11.5.2 Cómo leer los $1.000 M de run-rate

**1.000 M USD de run-rate anualizado** (OpenAI, 31 ago) equivale a ~83 M USD al mes multiplicados por 12. **Pero Digiday estima que, con una subida constante, OpenAI habría INGRESADO realmente ~330 M USD en los primeros 8 meses**. Son dos cifras muy distintas y se confunden a menudo en la prensa.

Para dimensionar lo que viene:

- Según Axios, OpenAI dijo a inversores que espera **2.500 M USD de ingresos publicitarios en 2026 y 100.000 M USD al final de la década**. Es un objetivo declarado, no un dato.

- Para llegar a 2.500 M en 2026, Digiday calcula que el run-rate de salida de año tendría que acercarse a ~12.000 M USD. Eso implica multiplicar por 12 el run-rate actual en cuatro meses.

- Base de usuarios citada: **más de 1.000 M de usuarios semanales**, la gran mayoría en planes Free (CNBC).

### 11.5.3 Qué significa esto para un anunciante hoy

> **El caso Windmill Strategy sigue siendo representativo del B2B**
> El piloto B2B de Windmill Strategy fue: 1.470 USD de gasto, 39.284 impresiones, 259 clics y CERO conversiones. No es una excepción: refleja que ChatGPT Ads en B2B llega a un público equivocado (los decisores están en planes de pago, que no ven anuncios). Es evidencia que vale para cualquier B2B de ticket alto.

## 11.6 Sponsored Agents: el nuevo frente (piloto EE.UU., 16 sep)

El 16 de septiembre OpenAI anunció Sponsored Agents en "Reimagining advertising with AI". Un Sponsored Agent es un agente de la marca, etiquetado, que toma el relevo tras el clic. Responde preguntas de seguimiento dentro del chat y deriva al flujo del anunciante.

### 11.6.1 Angi: el primer caso

**Angi** (reformas y servicios del hogar en EE.UU.) usa Sponsored Agents para dimensionar proyectos del hogar y derivar al usuario a su flujo de solicitud de servicio. Es una extensión de su app de ChatGPT lanzada el 4 de marzo. **Wayfair** participa a escala limitada.

Newegg, Best Buy, Lowe's y VistaPrint aparecen como anunciantes visibles en la plataforma, pero no está confirmado que tengan Sponsored Agents. Solo hay test en EE.UU., sin self-serve.

### 11.6.2 Qué significa para la estrategia

Sponsored Agents es la primera fusión real entre el canal pagado y la capa agéntica. Mezcla SEM y customer service dentro de la misma conversación. Para marcas con ciclo de compra largo o alto componente consultivo (seguros, hipotecas, formación, servicios profesionales), cambia el ROI por clic potencial — pero sigue siendo EE.UU. only y en test cerrado.

## 11.7 Google AI Mode Ads y Direct Offers

**Situación a octubre 2026: EE.UU. sigue siendo el único mercado con anuncios en AI Mode** (Keywords Everywhere). Google ha presentado los formatos pero no los ha activado globalmente.

### 11.7.1 Formatos presentados en Google Marketing Live 2026

| Formato | Estado | Observaciones |
|---|---|---|
| Conversational Discovery Ads | Test (EE.UU., móvil y escritorio) | Anuncios conversacionales dentro de respuestas |
| Highlighted Answers | Test (EE.UU.) | Respuestas destacadas patrocinadas |
| Shopping ads con IA | Anunciado para "más adelante este año" | Pendiente |
| Business Agent for Leads | Beta abierta en EE.UU. | Agente de negocio para generación de leads |

### 11.7.2 Direct Offers (piloto desde la NRF, 11 ene 2026)

**Participantes**: Chewy, Gap, L'Oréal.

Direct Offers pasa del visor de producto a la propia respuesta de AI Mode. Bundles construidos por Gemini, checkout nativo para comerciantes UCP (Unified Commerce Platform), ofertas de viaje con Booking, Expedia ("soon") y creación nativa desde AI Max y PMax.

### 11.7.3 Novedades verano-otoño 2026 de Google

- **4 sep**: Ginny Marvin confirma "small experiment" con anuncios de texto de concordancia exacta y de frase en AI Mode cuando la intención es "explicit and direct". El test de 2025 usaba concordancia amplia.

- **28 ago**: un tracker detecta, con capturas, Shopping ads DENTRO de la respuesta de AI Mode, y un segundo formato que se confunde fácilmente con un resultado orgánico. Google no lo ha comentado.

- **22 sep**: Google inscribe automáticamente a los comerciantes Shopify elegibles de EE.UU. en el checkout nativo de AI Mode y Gemini (opt-out en Sales channels > Agentic).

- **2 oct**: los beneficios de fidelización del comerciante pasan a poder mostrarse en AI Mode y en la app de Gemini (solo EE.UU.).

### 11.7.4 Google vs OpenAI: dos filosofías distintas

| Aspecto | ChatGPT Ads (OpenAI) | AI Mode Ads (Google) |
|---|---|---|
| Enfoque | Sistema nuevo, contextual, sin keywords | Reutiliza infraestructura existente (keywords, Merchant Center, PMax/AI Max) |
| Ubicación | Tarjeta patrocinada bajo la respuesta | Formatos cada vez más integrados DENTRO de la respuesta |
| Alcance | Global (60+ países) | Solo EE.UU. en producción |
| Formato dominante | Carrusel y tarjeta estática | Shopping ads y texto corto |
| Riesgo de confusión | Bajo (tarjeta separada y etiquetada) | Alto (anuncios indistinguibles de resultados orgánicos en algunos casos) |
| Agentes | Sponsored Agents (piloto) | Business Agent for Leads (beta) |

## 11.8 Perplexity, Copilot y otros motores

### 11.8.1 Perplexity: no hay nada que comprar

Perplexity dejó de aceptar anunciantes nuevos en octubre de 2025 y confirmó el abandono total de la publicidad en febrero de 2026 ("no plans to bring them back"). The Information informó de que en 2024 Perplexity ingresó solo 20.000 USD en publicidad sobre 34 M USD de ingresos totales. Jesse Dwyer (Perplexity) habló ante Digiday de "less than 0.01%" de sus ingresos.

El modelo de Perplexity hoy es **Comet (gratis, global desde el 2 oct 2025) + Comet Plus (5 USD, con reparto de ingresos con publishers)**. Para marcas, la jugada es orgánica + presencia en Reddit (que Perplexity sí cita masivamente).

### 11.8.2 Microsoft Copilot: el canal publicitario de IA más maduro para comercio

Microsoft sí vende publicidad dentro de Copilot, y lo hace a través de Microsoft Advertising (la plataforma heredada de Bing Ads), no de una plataforma separada. Hay cuatro piezas distintas que conviene no mezclar:

| Pieza | Qué es | Estado / observaciones |
|---|---|---|
| **Copilot search ads** | Anuncios etiquetados como patrocinados bajo la respuesta orgánica de Copilot. Se compran como ubicación dentro de campañas Performance Max (formatos de búsqueda, producto y nativo) | En producción vía Microsoft Advertising |
| **Showroom ads** | Formato inmersivo: pantalla dividida en la que el usuario interactúa con la marca mientras Copilot sigue disponible para preguntas de seguimiento | Solo para anunciantes seleccionados en piloto |
| **Copilot Checkout** | Compra dentro del chat con Shopify y otros socios | Documentado por fuentes sectoriales; sin cifras públicas |
| **Brand Agents** | Asistentes de marca con IA desplegados en la web del comerciante | Documentado por fuentes sectoriales |

> **Cómo leer las cifras de rendimiento de Copilot**
> Microsoft afirma que los anuncios en la interfaz de Copilot son un 25% más eficaces que la búsqueda tradicional, y algunas agencias repiten cifras de +73% de CTR y +16% de conversión. Son datos propios del fabricante o de intermediarios que los citan, sin metodología pública verificable. Tratarlos como declaraciones del proveedor.

Implicación práctica: para un e-commerce que ya compra en Microsoft Advertising, activar la ubicación Copilot es un cambio de configuración dentro de una cuenta existente, no un canal nuevo. Para quien no está en Microsoft Advertising, el orden razonable es primero ChatGPT Ads o Google (según dónde esté la audiencia) y Copilot después. Copilot, además, se apoya en el índice de Bing: la higiene de Bing Webmaster Tools (cap. 8.3 y 8.10) sirve al orgánico y al pagado a la vez.

### 11.8.3 Claude, Grok y DeepSeek

Anthropic declara que los productos de Claude no muestran anuncios ni permiten que anunciantes paguen por promocionar marcas dentro de las conversaciones. Esto tiene una consecuencia estratégica: en Claude la visibilidad es exclusivamente orgánica, y sus tres crawlers (ClaudeBot, Claude-User y Claude-SearchBot) se gestionan por separado en robots.txt (ver 2.7).

## 11.9 Matriz GEO vs GEM: dos embudos complementarios

![Figura 11.9.1. GEO vs GEM: dos embudos complementarios en motores generativos. Fuentes: Seer Interactive, SE Ranking, OpenAI.](charts/cap11_geo_vs_gem_funnel.png)

*Figura 11.9.1. GEO vs GEM: dos embudos complementarios en motores generativos. Fuentes: Seer Interactive, SE Ranking, OpenAI.*

| Dimensión | GEO (orgánico) | GEM (pagado) |
|---|---|---|
| Qué se obtiene | Aparecer citado o recomendado dentro de la respuesta | Tarjeta patrocinada bajo la respuesta |
| Influencia en el texto de la respuesta | El contenido propio puede ser síntesis o cita | Ninguna (según OpenAI) |
| Quién lo ve | Todos los planes | Solo Free y Go |
| Cobertura de motores | ChatGPT, Perplexity, Gemini, Copilot, Claude, DeepSeek, Grok, otros | ChatGPT (60+ países), Google AI Mode (solo EE.UU.) y Copilot vía Microsoft Advertising. Perplexity y Claude: ninguno |
| Velocidad de activación | Gradual (semanas a meses) | Inmediata (desde el día 1 con self-serve) |
| Medición | Citation Share, Share of Model, Dark Visibility, Share of Authority | Vistas, clics, conversiones vía Pixel + CAPI; EQS; SOV ads |
| Coste | Inversión en contenido + autoridad + técnica | CPC/CPM/oCPC/oCPM |
| Horizonte de resultados | Trimestres | Días (hasta las primeras conversiones) |
| Riesgo | Volatilidad algorítmica (ver cap. 6.7) | Benchmarks por sector aún inexistentes |

> *La capa orgánica es la base. La pagada es el acelerador. Montar GEM sin GEO sólido es como pagar por tráfico a una web que no convertirá; montar GEO sin pensar en GEM es dejar sobre la mesa un canal que ya factura 1.000 M USD anualizados.*

## 11.10 Regulación: DSA, VLOSE y el repositorio público de anuncios

El 31 de agosto de 2026 la Comisión Europea designó a ChatGPT como **Very Large Online Search Engine (VLOSE)** bajo la Digital Services Act (DSA). Es el primer chatbot con esta categoría, como "servicio híbrido" porque responde a prompts y busca en la web.

### 11.10.1 La cifra que gatilla la designación

**~159,1 M de destinatarios activos mensuales medios de ChatGPT Search en la UE** (declaración DSA de OpenAI). El umbral es 45 M. Reddit y Roblox también fueron designados VLOP el mismo día, con lo que el total de servicios designados pasó a 28. La supervisión la hace la Comisión con Coimisiún na Meán (Irlanda).

### 11.10.2 Obligaciones relevantes para marketing y SEO

OpenAI tiene **cuatro meses para cumplir** (plazo: finales de diciembre de 2026 / enero de 2027). Las obligaciones relevantes para esta disciplina son:

| Obligación | Qué implica |
|---|---|
| Evaluación de riesgos sistémicos | OpenAI debe evaluar y mitigar riesgos de desinformación, protección de menores, derechos fundamentales |
| **Repositorio público de anuncios** | **Antes de enero de 2027. Contenido, anunciante, periodo de emisión, parámetros de segmentación de CADA anuncio serán auditables públicamente** |
| Transparencia sobre sistemas de recomendación | Explicar cómo se eligen las respuestas y los anuncios |
| Acceso a datos para investigadores verificados | Puede generar en 2027 los primeros datos independientes sobre cómo cita ChatGPT |
| Auditorías externas anuales | Obligatorias |

> **Implicación práctica: tu creatividad y segmentación serán públicas**
> Si activas GEM a partir de enero de 2027, asume que tu competencia podrá auditar: qué anuncios pusiste, cuándo, a quién y con qué parámetros. Prepara la creatividad y la estrategia asumiendo auditoría pública. Esto favorece a marcas disciplinadas y perjudica a quienes dependen de ventaja informacional.

### 11.10.3 RGPD y el lanzamiento sin personalización en Europa

El lanzamiento del 24 de agosto en el EEE sin personalización es, en la práctica, la respuesta de OpenAI al RGPD y a la DMA/DSA. OpenAI publicó una política de privacidad dedicada el 14 de agosto y exige consentimiento previo para cualquier personalización. No hay fecha anunciada para activar la personalización con consentimiento en el EEE.

## 11.11 Playbook: cuándo activar GEM y cuándo esperar

### 11.11.1 Matriz de decisión

| Caso | Decisión | Razonamiento |
|---|---|---|
| B2B ticket alto (SaaS enterprise, servicios profesionales B2B) | **Esperar** | El decisor usa planes de pago (Plus/Pro/Business) que NO ven anuncios. Volver cuando OpenAI active la monetización en planes de pago (si lo hace) |
| B2B ticket medio con decisores que usan Free | **Test disciplinado de 2-4 semanas** | Validar que llegas al público objetivo antes de escalar |
| E-commerce con feed limpio y margen para CPC $3-5 | **Test de 2-4 semanas con feed + oCPM** | El inventario de feed está maduro; oCPM es el modelo que OpenAI recomienda; +74% CTR observado con feed |
| E-commerce con feed sucio o margen bajo | **Esperar** | Primero limpieza de feed, luego test |
| Compra impulsiva de bajo precio | **No activar (Cleverly)** | ChatGPT no funciona como canal de impulso |
| Negocio hiperlocal | **No activar (Cleverly)** | La granularidad geográfica actual no es suficiente |
| Marca con GEO fuerte que quiere acelerar | **Test con tarjeta estática + CPC** | El canal pagado capitaliza la autoridad ya ganada |
| Marca sin GEO y poco presupuesto | **Esperar y construir GEO** | GEM sin GEO orgánico es como SEM sin landing. Ineficiente |
| Startup con producto nuevo y nicho definido | **Test de 2 semanas con $200-400 €** | Útil para validar hipótesis de mensaje |

### 11.11.2 Checklist técnico antes de activar

- **Pixel de OpenAI instalado y probado** (equivalente a Meta Pixel).

- **Conversions API (CAPI) integrada** y deduplicada con el Pixel. OpenAI reporta +69% cobertura y −22% CPA con las dos juntas.

- **Event Quality Score (EQS) ≥7** antes de activar oCPM.

- **Feed de producto limpio** (si aplica): categorías, precios actualizados, descripciones completas, al menos una imagen por producto.

- **Páginas de destino rápidas** (<2,5s LCP) y rastreables por OAI-SearchBot (comprobar Cloudflare).

- **Verificación de negocio pasada** (en sectores con revisión adicional: finanzas, salud, legal).

- **UTMs estáticos** definidos en el lado anunciante (ChatGPT Ads los permite).

- **Dashboard de 3 superficies** operativo (ver 8.9) para no confundir efecto pagado con efecto orgánico.

### 11.11.3 Qué NO hacer

- **No cambiar el nombre de marca en plena campaña**: desde el email de producto del 30 sep, cambiarlo pausa los anuncios hasta su aprobación.

- **No lanzar muchas campañas pequeñas**: OpenAI recomienda explícitamente pocas campañas bien dotadas (ejemplo: 100 k USD → 2 campañas de 50 k, no 10 de 10 k).

- **No ignorar el EQS**: una campaña con EQS bajo puede gastar presupuesto sin aprender.

- **No activar GEM si no puedes mantener la operación cuando aparezca el repositorio público DSA en enero 2027**: la creatividad y la segmentación serán auditables.

- **No mezclar KPIs de orgánico y pagado en el mismo dashboard**: separa capas (ver 8.9).

## 11.12 Medición de GEM: Share of Ads, Pixel + CAPI, Event Quality Score

### 11.12.1 Share of Ads (SOV ads): la métrica nueva

**Share of Ads** = (apariciones patrocinadas de la marca en un periodo) ÷ (total apariciones patrocinadas de su categoría en el mismo periodo). Es el equivalente "GEM" del Share of Model del lado orgánico. Hoy no hay métrica nativa; se calcula con herramientas de monitorización como GEO Metrics con un set propio de prompts de intención de compra. Es una propuesta de GEO Metrics.

### 11.12.2 Pixel + CAPI deduplicados

La métrica más importante para optimización. OpenAI documentó: +69% de cobertura de conversión mediana y −22% de CPA medido mediano frente a solo Pixel. En la práctica, es como funcionó Meta durante 2020-2023 cuando iOS 14 forzó a adoptar CAPI.

Variables clave de EQS:

- **Match quality**: % de eventos con email, teléfono o identificador externo que matchea con usuarios ChatGPT.

- **Latency**: tiempo entre evento real y envío. Idealmente <2 h; crítico >24 h.

- **Duplicación**: % de eventos deduplicados correctamente entre Pixel y CAPI.

- **Event completeness**: % de parámetros completos (value, currency, content_ids si aplica).

### 11.12.3 Encaje en el marco de las 3 superficies

Como se vio en 8.9, GEM es la Superficie 3 del marco. Las métricas no se suman con las de Retrieval y Citation: se cruzan. Preguntas típicas en el dashboard ejecutivo:

- ¿Hay queries donde pagamos (Superficie 3) pero no citamos (Superficie 2)? → oportunidad de reforzar orgánico.

- ¿Hay queries donde citamos pero no pagamos? → aprender dónde no hace falta GEM.

- ¿Hay queries donde ni citamos ni pagamos y la competencia sí? → Dark Visibility doble.

- ¿Cómo evoluciona el Retrieval-to-Citation Ratio (Superficie 1 ÷ Superficie 2) cuando activamos GEM? → ¿afecta GEM a la cuota orgánica?

> **ACCIÓN OPERATIVA · Primer mes de GEM (si has decidido activar)**
> - **Semana 1**: setup técnico (Pixel + CAPI + verificación de negocio + UTMs). No gastar aún.
> - **Semana 2**: 2 campañas de prueba, CPC manual, presupuesto diario mínimo ($25 USD o ~15 €). Comparar performance entre tarjeta estática y feed.
> - **Semana 3**: cuando EQS ≥7 y haya ≥50 conversiones semanales, pasar a oCPM. Mantener presupuesto.
> - **Semana 4**: análisis. ¿CPC real cae en el rango esperado? ¿Volumen de impresiones ≥10.000? ¿Conversiones trackeadas? Si sí a las tres, escalar a presupuesto operativo. Si no, pausar y diagnosticar.

## 11.13 Marco regulatorio más allá de la DSA: AI Act, Latinoamérica y litigios

La sección 11.10 cubre la DSA. Hay tres capas más que afectan a quien publica contenido o campañas con IA. Nada de lo que sigue es asesoramiento legal.

### 11.13.1 AI Act: el artículo 50 ya se aplica

| Fecha | Hito | Qué implica |
|---|---|---|
| **7 may 2026** | Acuerdo político sobre el Omnibus digital de IA | — |
| **20 jul 2026** | La Comisión adopta las guías definitivas del artículo 50 (51 páginas) y considera adecuado el Código de Prácticas sobre transparencia del contenido generado por IA | Aclara el alcance del marcado y el etiquetado |
| **27 jul 2026** | Entra en vigor el Reglamento (UE) 2026/1744 (Omnibus digital de IA) | Aplaza el alto riesgo del Anexo III a diciembre de 2027 y el del Anexo I a agosto de 2028. No aplaza la transparencia |
| **2 ago 2026** | El artículo 50 es aplicable | Avisar de la interacción con IA, etiquetar deepfakes, revelar cierto texto de interés público |
| **2 dic 2026** | Fin de la gracia del artículo 50(2) para sistemas generativos que ya estaban en el mercado | Marcado legible por máquina del contenido sintético |

**Por qué importa a GEO y a GEM.** Primero, quien publica con IA debe saber qué contenido entra en el supuesto de texto de interés público y qué revisión editorial lo excepciona. Segundo, la creatividad con IA que OpenAI sugiere a los anunciantes (copy, imágenes, traducción) puede ser contenido sintético sujeto a marcado y etiquetado. Tercero, un chatbot propio de marca debe avisar de que lo es.

### 11.13.2 Latinoamérica: casi todo son proyectos

| País | Estado a octubre de 2026 | Nota |
|---|---|---|
| **Perú** | Ley 31814 (2023) y reglamento por D.S. 115-2025-PCM | La única ley específica de IA vigente en la región según las fuentes consultadas |
| **Brasil** | PL 2338/2023 aprobado por el Senado y detenido en la Cámara de Diputados | Es el país con más registros en la base de datos de regulación de IA de la Universidad de los Andes (212 a 3 jul 2026) |
| **México** | Sin ley federal específica; 126 registros. Reformas de 2026 a la ley de derechos de autor, la laboral y la audiovisual propuestas y pendientes de publicación en el DOF | El riesgo de contenido está más cerca del derecho de autor que de una ley de IA |
| **Argentina** | «Recomendaciones para una Inteligencia Artificial fiable» (dic 2023), no vinculantes. Proyectos en el Congreso | El gobierno ha orientado la política al fomento más que a la regulación |
| **Chile** | Proyecto (Boletín 16821-19) pendiente | Enfoque de transparencia y supervisión humana inspirado en el europeo |
| **Colombia** | CONPES 4144 (2025) y marco ético de 2021. Muchos proyectos de ley, parte archivados | Sin ley específica |

Fuentes: informe de política pública de la Universidad de los Andes (agosto de 2026, con datos a 3 de julio), comparativas jurídicas y prensa especializada.. ChatGPT Ads está activo en México y Brasil desde el 11 de agosto. Las reglas de personalización en esos países las gobierna la normativa local de datos personales (por ejemplo, la LGPD en Brasil), no el régimen europeo.

### 11.13.3 Litigios y otros frentes abiertos

- **Amazon frente a Perplexity (Comet).** Medida cautelar el 9 de marzo contra el agente de compras de Comet, recurrida a los dos días. Es el precedente más relevante del comercio agéntico (3.7.3).

- **Perplexity.** Un tracker del sector contabiliza 11 demandas abiertas contra la compañía en tres países.

> **ACCIÓN OPERATIVA · Cumplimiento mínimo esta semana**
> - Si publicas contenido informativo con ayuda de IA, define quién tiene responsabilidad editorial y deja constancia de la revisión humana.
> - Si usas un chatbot propio, comprueba que avisa de que es una IA.
> - Si generas imágenes o vídeo con IA para campañas, consulta con tu asesoría el marcado y el etiquetado antes del 2 de diciembre.
> - Si operas en Latinoamérica, revisa primero tu normativa local de datos personales, que es la que sí aplica hoy.

## 11.14 Observar la competencia en ChatGPT Ads: el obstáculo de la sesión iniciada

A diferencia de Meta, que tiene una biblioteca pública de anuncios, ChatGPT Ads no tiene hoy ningún repositorio consultable. Eso cambia con la DSA (11.10), pero no hasta finales de 2026 o principios de 2027. Mientras tanto, hay un problema práctico.

**El obstáculo.** Los anuncios solo se muestran a usuarios con sesión iniciada en los planes Free y Go. Las herramientas de monitorización que consultan sin sesión no los ven. GEO Metrics lo describe así: hicieron pruebas en julio y agosto y, con la expansión de finales de agosto, los anuncios dejaron de mostrarse a quien no estaba logueado, de modo que muchas veces los prompts ya no devuelven anuncios. La empresa señala que esto afecta a todas las herramientas del sector, que están rediseñando su captura, y que algunas soluciones posibles entran en terreno incómodo respecto a las políticas de las plataformas.

**Qué se puede observar de forma legítima hoy:**

- Muestreo manual con cuentas Free o Go propias, con sesión iniciada y con contextos definidos de tu Prompt Universe, anotando marca, texto, precio, valoración, posición y frecuencia. Es lento, pero no tiene riesgo contractual.

- Lo que ve una persona real: el enlace, la imagen, el texto, la posición y si aparece más de un anuncio. Eso es lo que GEO Metrics pretende ofrecer, junto con el rate de aparición por prompt.

- Datos de paneles de terceros. Por ejemplo, Similarweb estimó que el 26% de las respuestas a usuarios Free y Go de ciertos paneles llevaba un anuncio, y Sensor Tower que los carruseles eran un 23% de los anuncios de ChatGPT en escritorio de EE.UU. en la segunda mitad de agosto. Son estimaciones de paneles, no censos.

- Repositorio público de anuncios exigido por la DSA (11.10), cuando OpenAI cumpla su plazo.

> **Si un proveedor promete seguimiento masivo de anuncios, pregunta cómo lo hace**
> Rotar cuentas o sesiones para extraer datos de una plataforma puede incumplir sus términos de servicio, con riesgo para el cliente que se apoya en esos datos. Exige al proveedor que explique la fuente y su fiabilidad, y que declare qué parte es muestreo.

### 11.14.1 Preparar la landing: OAI-AdsBot

OpenAI usa un agente propio, OAI-AdsBot, para validar la seguridad de las páginas de destino de los anuncios. Solo visita landing pages de anuncios y publica sus direcciones IP. Si una CDN o un firewall lo bloquea, la validación puede fallar, así que conviene comprobarlo antes de lanzar. Además, el cambio de nombre de marca en la cuenta pausa los anuncios hasta su nueva aprobación (11.2).

> **ACCIÓN OPERATIVA · Checklist previo a lanzar una campaña**
> - Permite OAI-AdsBot en la CDN y en las reglas de bots, y verifica las IP publicadas por OpenAI.
> - No cambies el nombre de marca de la cuenta con campañas activas.
> - Instala Pixel y Conversions API con deduplicación antes de gastar (11.12).
> - Define un presupuesto de prueba cerrado y una fecha de decisión a 2-4 semanas.

---

El capítulo 11 cierra aquí la fotografía del canal pagado a 7 de octubre de 2026. La próxima edición de esta guía (prevista para enero-febrero de 2027) incorporará lo que surja del **primer repositorio público de anuncios de ChatGPT bajo la DSA**, la posible activación de la monetización en planes de pago, el estado del Sponsored Agents fuera de EE.UU., y los primeros benchmarks de sector que OpenAI aún no ha publicado.

# Tablas de referencia y datos

**Tabla 1. Diferencias rápidas entre SEO y GEO (junio 2026)**

| Factor | SEO Tradicional | GEO (Búsqueda con IA) |
|---|---|---|
| ¿Qué optimizamos? | Página web (URL) | Fragmento de información (dato citable) |
| Métrica principal | Palabras clave / enlaces / posición media | Share of Model / frecuencia de cita / Share of Authority |
| Formato preferido | Artículos largos (retención) | Tablas, listas, citas y estadísticas (densidad) |
| Autoridad | Enlaces (PageRank) | Menciones de marca en sitios de confianza (3x más predictivas que backlinks) |
| Técnica | Meta etiquetas, schema básico | Datos estructurados, SSR, WebMCP, freshness |
| Medición nativa | Google Search Console clásico | GSC Generative AI Reports + Bing AI Performance + Clarity Citations |
| Personalización | Limitada (geo, dispositivo) | Estructural (Personal Intelligence vía Gmail) |
| Volatilidad | Core updates trimestrales/anuales | Core updates + variación run-to-run + ChatGPT Core Updates |

**Tabla 2. Tácticas de contenido y su impacto en visibilidad (Princeton + research 2026)**

| Táctica | Impacto cuantificado | Fuente |
|---|---|---|
| Citas de expertos (Quotation Addition) | +41 % PAWC, +28 % Subjective Impression | Princeton KDD 2024 |
| Adición de estadísticas | +31 % PAWC, +23 % Subjective Impression | Princeton KDD 2024 |
| Citar fuentes (inline citations) | +28 % PAWC, +28 % Subjective Impression | Princeton KDD 2024 |
| Fluency optimization (simplificación) | +28 % PAWC | Princeton KDD 2024 |
| Brand mentions (en terceros) | 0,664 correlación con citas en AIO (vs. 0,218 backlinks) | Onely 2026 |
| Semantic completeness | r=0,87 con citación; contenido 8,5/10+ es 4,2x más probable de ser citado | Wellows 2026 (15.847 AIO) |
| 15+ entidades reconocidas en página | 4,8x probabilidad de citación | Wellows 2026 |
| Schema markup (JSON-LD) | +2,4 % AI Mode, +2,2 % ChatGPT, -4,6 % AIO (significativo) | Ahrefs mayo 2026 |
| Personal Intelligence activo (Gmail) | +46pp visibilidad (23,9 % → 66,8 %) | iPullRank 2026 |
| Freshness (\<30 días) | 3,2x más citaciones (tras Gemini 3.x) | BrightEdge 2026 |
| Keyword stuffing | -9 % PAWC | Princeton KDD 2024 |

**Tabla 3. Distribución de tráfico y uso de IA (junio 2026)**

| Plataforma | Usuarios activos | Cuota / enfoque |
|---|---|---|
| ChatGPT | 700-800 M semanales | ~64-80 % del tráfico de IA. Generalista, creativo, código, búsqueda. GPT-5.5 Instant default |
| Google AI Mode (Gemini 3.5 Flash) | 1.000 M mensuales | Default global desde I/O 2026. Multimodal nativo |
| Google AI Overviews | Integrado en 48 % de queries | Síntesis sobre los SERPs clásicos. CTR pos \#1 cae 18 % cuando aparece |
| Perplexity | 100 M+ mensuales (con agentes) | Deep Research, B2B, financiero. 20B\$ valoración, 500M\$ ARR |
| Claude / Anthropic | Variable | B2B, análisis documental, computer use, MCP nativo |
| Microsoft Copilot | Integrado en ecosistema | Bing AI summaries + Copilot. Journeys -33 % tiempo, +76 % conversión |
| DeepSeek / Grok / otros | Crecimiento en nichos | Mercados regionales y casos específicos |

**Tabla 4. Decoupling rankings-citas: estudios disponibles a junio 2026**

| Estudio | Tamaño y ventana | Hallazgo principal |
|---|---|---|
| Ahrefs (julio 2025) | 1,9 M citas | 76 % de citas en AIO desde top-10 Google (línea base) |
| Ahrefs (marzo 2026) | 863 K keywords, 4 M URLs | Cayó a 37,9 % top-10; 31,2 % en 11-100; 31,0 % fuera del top-100 |
| BrightEdge (febrero 2026) | 5,47 M queries | 17 % de overlap top-10 (metodología distinta a Ahrefs) |
| Profound (2025-2026) | 680 M citas | 80 % de fuentes citadas no están en top-10 Google; 12 % overlap exacto |
| Ahrefs ChatGPT (2025-2026) | Multiplataforma | 6,82 % overlap ChatGPT vs top-10 Google; 28,3 % de páginas más citadas por ChatGPT sin visibilidad alguna en Google |
| Ahrefs AIO vs AI Mode (2026) | 730.000 pares | 13,7 % de overlap de citación entre AIO y AI Mode |

**Tabla 5. Análisis sectorial del decoupling (BrightEdge 2026)**

| Sector | Overlap con top-10 orgánico Google | Notas |
|---|---|---|
| Healthcare | 24 % | La mayor coincidencia. Filtros YMYL estrictos |
| Finance | 11 % | Foros alternativos y APIs financieras pesan más que portales corporativos |
| eCommerce / Retail | Bajo (62 % de citas fuera del top-100) | Favorece UGC y guías independientes |
| Tech / SaaS | Medio | Reddit + papers + docs oficiales como fuentes dominantes |
| Travel | Medio-bajo | TripAdvisor + Instagram + blogs locales |

# Conclusiones y perspectivas hacia 2027

La optimización para motores generativos ha pasado en seis meses de ser una disciplina experimental basada en estimaciones a una categoría reconocida de medición oficial. El lanzamiento simultáneo de paneles nativos en Bing Webmaster Tools, Microsoft Clarity y Google Search Console en el primer semestre de 2026 marca el momento en que el GEO deja de ser "SEO con otro envoltorio" para convertirse en una capa superior de visibilidad con sus propios KPIs, herramientas y reflejos operativos.

Tres consolidaciones definen el momento:

16. **El decoupling estructural entre ranking orgánico y citación en IA.** Documentado por varios datasets independientes con metodologías distintas pero dirección común. La consecuencia operativa es directa: ranking y citación son dos KPIs separados que requieren gestión separada.

17. **La aparición de la personalización como variable estructural.** Si la activación de señales personales en Gmail eleva la visibilidad de una marca 46 puntos porcentuales, el SoM medido en frío no representa la experiencia real de ningún usuario individual. La medición debe transicionar a paneles de personas y escenarios.

18. **La consolidación de la web agéntica.** Conviene mantener la distinción entre los dos protocolos que operan en planos distintos. MCP (Model Context Protocol), el estándar server-side donado por Anthropic a la Linux Foundation, es la pieza que pasó de protocolo experimental a infraestructura con 97M descargas mensuales del SDK. WebMCP, la especificación complementaria de la W3C anunciada por Google en I/O 2026, expone la lógica interactiva del navegador al agente y opera client-side. Junto a ellos, Web IQ, Information Agents de Google, ChatGPT Agent y Perplexity Computer forman la nueva capa de competencia. Las marcas con APIs bien documentadas (alcance MCP), datos estructurados de inventario y formularios marcados con WebMCP, y políticas legibles por máquina tienen acceso preferente a los workflows de los agentes que ejecutan tareas en nombre de los usuarios.

La narrativa de "la IA está matando el tráfico web" no encaja con los datos agregados: las herramientas de IA aún representan menos del 2 % del tráfico web desktop total. Pero la bifurcación es real: los sitios citados ganan; los no citados pierden. Y la única forma de ser citado es operar sobre los factores que el research empírico ha identificado, no sobre los hacks que el mercado ha vendido.

El futuro inmediato (2027 en adelante) apunta hacia una consolidación de los Information Agents y la generalización del agentic checkout. Las IAs no solo leerán para responder: actuarán y comprarán en nuestro nombre. Preparar la infraestructura digital hoy con datos estructurados, APIs accesibles y políticas legibles por máquina es la única garantía para mantener la relevancia en un mundo donde la IA se ha convertido en el principal portero de la información y el comercio.

**No optimices para el clic; optimiza para la verdad.** En la economía de la citación, ser la fuente de la verdad verificable es la única estrategia sostenible a largo plazo. Y ser la fuente preferida del agente que ejecuta la compra en nombre de tu cliente es el siguiente eslabón en la cadena.

**¿Te gustó la guía?**

**El SEO no ha muerto, simplemente ha evolucionado.**

Durante más de dos décadas nos obsesionamos con aparecer en la primera página de Google. Hoy, seguimos necesitando ese trabajo, pero ya no basta. Han llegado nuevos "amigos" a la mesa: los motores de respuesta de IA, los agentes que ejecutan tareas y los sistemas de personalización que fragmentan la visibilidad por usuario.

En **GEO Metrics** creemos que no se trata de abandonar lo que ya funciona, sino de sumarle una nueva capa de estrategia con instrumentos de medición y honestidad sobre lo que sabemos y lo que no:

- Te ayudamos a medir tu presencia en IA y entender qué motores te citan (y cuáles no), con qué sentimiento y qué fuentes están detrás de cada respuesta.

- Diseñamos una hoja de ruta para que tu marca siga visible en un mundo donde las búsquedas tradicionales ya no son suficientes.

- Monitorizamos los ChatGPT Core Updates, las actualizaciones de Gemini y los cambios algorítmicos para que no te pille por sorpresa.

👉 Si quieres asegurarte de que tu estrategia SEO evolucione hacia GEO, entra en **www.trygeometrics.com** y hablemos.

# Anexo A · Caja de herramientas operativas

Checklists, comandos y recetas prácticas para auditar la visibilidad orgánica (GEO) y la pagada (GEM).

## A.1 Checklist técnico GEO (orgánico)

- robots.txt revisado: NO bloquea OAI-SearchBot, Perplexity, Claude-SearchBot, Google-Extended, Bingbot

- SSR activado para contenido crítico (Erlin.ai: 94% parsing SSR vs 23% CSR)

- Schema.org completo: Organization, Product, Article, FAQ, HowTo, Review donde aplique

- Open Graph + Twitter Card limpios

- canonical tags consistentes

- Core Web Vitals en verde

- Sitemap XML limpio y accesible

- **Cloudflare auditado**: Security > Bots > AI Crawlers en todas las zonas

- **Bing WMT**: Citation Share e Intents activados

- **GSC Generative AI Performance Report**: integrado al dashboard

## A.2 Checklist técnico GEM (pagado)

- Cuenta en Ads Manager de OpenAI creada y verificada

- Pixel instalado y probado en producción

- CAPI integrada y deduplicada con el Pixel

- EQS ≥7 antes de activar oCPM

- Feed de producto limpio (si aplica): categorías, precios, descripciones, imágenes

- LCP <2,5s en páginas de destino

- OAI-SearchBot NO bloqueado en Cloudflare

- UTMs estáticos definidos

- Verificación de negocio pasada

- Dashboard de 3 superficies operativo

## A.3 Comandos útiles

**Verificar que un bot puede entrar:**

> *curl -A "OAI-SearchBot/1.0 (+https://openai.com/searchbot)" -I https://tudominio.com/pagina*

**Diferenciar tráfico de agentes IA en logs:**

> *grep -E 'ChatGPT-User|Perplexity-User|OAI-SearchBot|Claude-SearchBot|Google-Extended|Meta-ExternalAgent' access.log | awk '{print $1, $7}' | sort | uniq -c | sort -rn*

**Buscar menciones de marca en respuestas de LLM (prompt base):**

> *"¿Cuáles son las mejores herramientas de [categoría] en 2026?" / "Compara [tu marca] con [competidor]" / "¿Qué es [tu marca] y a quién sirve?" — ejecutar 20-30 veces por motor y agregar*

## A.4 Herramientas de monitorización de GEO + GEM

| Herramienta | Qué mide | Nativa o terceros |
|---|---|---|
| Bing Webmaster Tools | Citation Share, Intents, Topics, grounding queries | Nativa Microsoft |
| Google Search Console | Impresiones en AI generativa (sin clics ni queries) | Nativa Google |
| Microsoft Clarity | Share of Authority, tráfico asistentes | Nativa Microsoft |
| GA4 | Tráfico referido por asistentes (configurable) | Nativa Google |
| GEO Metrics | Share of Model, SOV Ads, Dark Visibility, Fidelity Score; cobertura multi-motor (ChatGPT, Perplexity, Gemini, Copilot, Claude) | Terceros (es la herramienta del autor) |
| Ads Manager de OpenAI | CPC, CPM, EQS, conversiones de GEM | Nativa OpenAI |
| Google Ads + Merchant Center AI Performance (desde 8 sep) | KPIs de Google AI Mode Ads | Nativa Google |

# Anexo B · Glosario técnico

Glosario de términos técnicos usados en la guía.

| Término | Definición |
|---|---|
| **AAIO (Agentic AI Optimization)** | Optimización de activos digitales para ser usados por agentes autónomos (reservas, compras, comparaciones) |
| **Accountable crawler** | Categoría introducida por Cloudflare el 15 sep 2026 para bots que cumplen 4 requisitos: opt-out de entrenamiento, opt-out de resúmenes, visibilidad URL-level y garantía de no penalización. Googlebot, Bingbot, Applebot, OpenAI, Anthropic, Amazon y Meta lo son |
| **AEO (Answer Engine Optimization)** | Optimización para que una fuente contribuya a respuestas directas (voz, chatbots, extractos). Google adopta explícitamente este nombre en 2026 |
| **AI Mode** | Modo de respuesta generativa de Google Search. 1.000 M+ usuarios/mes en 2026; no es default |
| **AI Mode Ads** | Anuncios dentro de AI Mode de Google. Solo activos en EE.UU. a octubre 2026 |
| **AI Overviews (AIO)** | Resúmenes generativos de Google que preceden a los resultados tradicionales |
| **ANP (Agent Network Protocol)** | Protocolo emergente para comunicación entre agentes |
| **A2A (Agent-to-Agent)** | Protocolo de interoperabilidad entre agentes. Versión 1.0 con soporte gRPC |
| **Brand Safety en GEO** | Medición de 3 dimensiones: cuánto me citan, cómo me usan (fidelidad), qué se inventan sobre mí |
| **C2PA** | Coalition for Content Provenance and Authenticity. Estándar de procedencia de contenido multimedia |
| **CAPI (Conversions API)** | API de conversiones del lado servidor. Pixel + CAPI deduplicados dan +69% cobertura y −22% CPA (OpenAI) |
| **Citation Share** | % de citas atribuidas a un sitio sobre todas las citas de una grounding query en Bing. Primera métrica nativa Share of Model (desde 16 jun 2026 en preview) |
| **Core Update** | Actualización mayor de un modelo o algoritmo. GPT-5.6 (jul 2026) actuó como primer core update de ChatGPT en 2026 |
| **CPC / CPM / oCPC / oCPM** | Modelos de puja en ChatGPT Ads. oCPM es el recomendado por OpenAI desde 16 sep: optimiza CPM por conversión basada en impresiones (post-clic + post-view-through) |
| **Dark Visibility** | Consultas donde la marca debería aparecer y no lo hace |
| **Decoupling rankings-citas** | Fenómeno 2026: el ranking SEO de Google y la citación en IA son dos cosas distintas con solo ~17-37,9% de overlap |
| **DSA (Digital Services Act)** | Reglamento UE que regula plataformas digitales. ChatGPT designado VLOSE el 31 ago 2026 |
| **Artículo 50 del AI Act** | Obligaciones de transparencia del AI Act, aplicables desde el 2 ago 2026: avisar de la interacción con IA, marcar el contenido sintético, etiquetar deepfakes y revelar cierto texto de interés público. El marcado de sistemas ya en el mercado tiene gracia hasta el 2 dic 2026 |
| **Brand Agents / Copilot Checkout** | Asistentes de marca con IA en la web del comerciante, y compra dentro del chat de Copilot con Shopify y socios (Microsoft Advertising) |
| **C-SEO** | Competitive SEO para IA: técnicas de reescritura para ganar visibilidad en motores generativos. C-SEO Bench (NeurIPS 2025) mostró que la mayoría son ineficaces en entornos competitivos |
| **Context tracker** | Término de GEO Metrics: monitorización de un contexto de búsqueda y no de una frase. Desglosa la consulta en subconsultas y repite la captura para reducir la variabilidad del modelo |
| **Earned media** | Menciones de terceros con autoridad (medios, reseñas, analistas), frente al contenido propio de la marca. Los motores muestran sesgo hacia él (Chen et al., 2025) |
| **OAI-AdsBot / OAI-SearchBot / GPTBot / ChatGPT-User** | Los cuatro agentes de OpenAI: validación de landing pages de anuncios, búsqueda en ChatGPT, entrenamiento, y acciones iniciadas por el usuario respectivamente |
| **Origin trial** | Programa de pruebas de Chrome que activa una función experimental en producción para usuarios reales, de forma acotada. WebMCP está en origin trial de Chrome 149 a 156 |
| **Prompt Universe** | Conjunto de preguntas en lenguaje natural que un cliente hace a una IA antes de comprar. Se clasifica en Descubrimiento, Comparación y Validación |
| **Prompts de precisión** | Prompts que se comparan con una respuesta que la marca da por correcta, para obtener sentimiento y una puntuación de precisión, y detectar qué fuentes hay que corregir |
| **Reference Building** | Evolución del link building: conseguir que terceros hablen de la marca, en el contexto correcto, en sitios que los modelos leen |
| **Tres capas, tres superficies, tres pilares** | Tres marcos distintos del capítulo 8. Capas (8.1): de dónde sale el dato. Superficies (8.9): dónde ocurre la visibilidad (retrieval, citation, ads). Pilares (8.12): qué pregunta de negocio contesta (termómetro, percepción, negocio) |
| **Tripleta de entidad** | Asociación persona, marca y sector que cada pieza de contenido debe reforzar para que un modelo enlace los tres conceptos |
| **Event Quality Score (EQS)** | Puntuación 1-10 que da OpenAI a la calidad de los datos de conversión. Clave para activar oCPM |
| **fan-out con site:** | Subconsultas que ChatGPT lanza usando el operador site:. Pasó del 0,37% al 16,8% el 8 ago 2026 con GPT-5.6 |
| **Fidelity Score** | % de claims atómicos de una respuesta de IA soportados por las fuentes citadas (Salesforce AI Research: 11.000 consultas → 11% no soportados) |
| **GEM (Generative Engine Marketing)** | Capa pagada del GEO. Hoy = ChatGPT Ads + Google AI Mode Ads. Simetría con SEO/SEM |
| **GEO (Generative Engine Optimization)** | Optimización para aparecer citado/recomendado en respuestas de motores generativos. Formalizado académicamente en 2023-24 (Aggarwal et al., KDD 2024) |
| **Google-Extended** | Token de robots.txt para opt-out de entrenamiento y grounding de Gemini. NO cubre AI Overviews ni AI Mode |
| **Grounding query** | Subconsulta que un LLM lanza al índice de búsqueda para obtener evidencia fresca |
| **Information Gain Score** | Métrica que mide cuánta información nueva aporta un contenido respecto a lo ya existente en el corpus |
| **LLMO (LLM Optimization)** | Presencia en los datos de entrenamiento estáticos del modelo + gestión de identidad en Knowledge Graphs |
| **MCP (Model Context Protocol)** | Protocolo de Anthropic para comunicación entre LLM y herramientas externas. Spec 2026-07-28 pasa a stateless. 400 M descargas/mes (oct 2026) |
| **Pay Per Use** | Modelo de monetización de Cloudflare (sustituye Pay Per Crawl). Cobra cuando el contenido se usa en una respuesta, no al rastrearlo |
| **Personal Intelligence** | Capa de personalización por usuario que usa Gmail, Photos, Calendar, Drive. En Gemini desde ene 2026 (free users en EE.UU. desde 17 mar) |
| **Pixel (OpenAI Pixel)** | Pixel de tracking para ChatGPT Ads. Equivalente a Meta Pixel |
| **Retrieval-to-Citation Ratio** | (% páginas consultadas de una fuente) ÷ (% citas visibles). Ratio alto = fuente dependiente que puede desaparecer. Introducido en esta edición |
| **Share of Ads (SOV ads)** | % de apariciones patrocinadas de una marca sobre total de su categoría. Propuesta de GEO Metrics |
| **Share of Authority** | Métrica de Microsoft Clarity sobre tráfico referido por asistentes |
| **Share of Model** | % de respuestas de un motor generativo donde aparece la marca para un set de prompts |
| **Sponsored Agent** | Agente de la marca, etiquetado, que toma el relevo tras el clic en un anuncio de ChatGPT. Piloto EE.UU. desde 16 sep 2026 con Wayfair y Angi |
| **SSR / CSR** | Server-Side Rendering vs Client-Side Rendering. Erlin.ai: 23% parsing CSR vs 94% SSR |
| **VLOSE / VLOP** | Very Large Online Search Engine / Platform bajo la DSA. ChatGPT designado VLOSE el 31 ago 2026 (159,1 M usuarios UE/mes) |
| **WebMCP** | Especificación W3C para que las páginas web declaren capacidades a agentes |
