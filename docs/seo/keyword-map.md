# Keyword map — nimbel.net

Última actualización: 2026-11-07 · Fuente: Semrush (base de datos España) + Google Search Console + DataForSEO (desde 2026-11-07)

> Volúmenes <100 son estimaciones poco fiables de Semrush: sirven para priorizar, no como cifra real.

## Criterio
- Cliente principal: profesional con negocio o conocimiento de su sector que quiere lanzar su propia app o SaaS y no tiene equipo técnico (todos los clientes actuales son así).
- Cliente secundario: empresa que quiere digitalizar su operativa sin montar un equipo técnico.
- En ambos casos: quieren delegar la tecnología; no son perfiles técnicos que quieran hacerlo ellos mismos.
- Priorizar keywords con "empresa", "cuánto cuesta", "externalizar", "mantenimiento", "rescate".
- Evitar "gratis", "tutorial", "cómo hacer", "qué es", "sin saber programar", "sin código".
- Una keyword principal por URL (sin canibalizar). Las secundarias pueden compartir URL con su principal.
- Las páginas de caso (`/casos/<slug>/`, `/en/cases/<slug>/`) no llevan keyword principal: son prueba social (`decisiones.md`, 2026-11-02).
- El índice del blog (`/blog/`) tampoco lleva keyword principal: es un listado. Cada artículo (`/blog/<slug>/`) sí la necesita (`decisiones.md`, 2026-11-07).
- Cada pregunta tiene una sola respuesta en la web: no repetir preguntas entre páginas ni entre bloques de dudas (`decisiones.md`, 2026-11-03).
- Densidad sobre extensión: sin objetivo de número de palabras; datos concretos y respuesta directa al inicio de cada H2.

## Keywords elegidas
| Keyword principal | Variantes / secundarias | URL asignada | Intención | Vol/mes | KD | Estado |
|---|---|---|---|---|---|---|
| desarrollo de software a medida | software a medida (1.300), desarrollo software a medida (480), desarrollo a medida de software (390) | / | Comercial | 1.000 | 8 | Hecho 2026-10-28 |
| software a medida para empresas | — | / | Comercial | 210 | 5 | Hecho 2026-10-28 |
| empresas de desarrollo de software a medida | — | / + reseñas | Comercial | 110 | 29 | Pendiente |
| empresa desarrollo software barcelona | — | / | Comercial local | 90 | 14 | En curso: solo en el title |
| empresa de desarrollo de apps | empresa desarrollo apps (390, KD 32), empresas de desarrollo de apps (260, KD 20), empresa desarrollo de apps (210, KD 26), empresa desarrollo app (140, KD 11), empresas desarrollo apps (140, KD 25), empresa de desarrollo app (70, KD 13) | /desarrollo-de-apps | Comercial (CPC 10–18 $) | 260 | 16 | Hecho 2026-11-01 |
| desarrollo de apps para empresas | desarrollo de app para empresa (70, KD 8), desarrollo saas a medida (30) | /desarrollo-de-apps | Comercial | 110 | 8 | Hecho 2026-11-01 |
| desarrollo de apps barcelona | — | /desarrollo-de-apps | Comercial local | 210 | 5 | Hecho 2026-11-01 |
| cuánto cuesta crear una app | cuánto cuesta crear una app web (40, KD 8), …en España (30), …en euros (30), cuánto cuesta un software a medida (~100, KD 3), cuánto sale hacer un software a medida (70) | /cuanto-cuesta-crear-una-app (nueva; sustituye a /cuanto-cuesta-software-a-medida) | Investigación comercial | 210 | 18 | Validada — pendiente de crear |
| externalizar desarrollo de software | criterios para externalizar desarrollo de software, equipo interno vs desarrollo externalizado | /externalizar-desarrollo-software (nueva) | Investigación comercial | ~50 | n/d | Pendiente |
| custom software development barcelona | — | /en | Comercial | GSC: posición 4 | n/d | En curso: en el title desde 2026-11-02 |
| base de datos vectorial | pgvector (480), búsqueda semántica (50), que es una base de datos vectorial (40), RAG con PostgreSQL | /blog/base-de-datos-vectorial | Informativa (autoridad y GEO, no captación directa) | 260 (DataForSEO) | 32 (Semrush) | Hecho 2026-11-07 (primer artículo del blog) |

## Prompt Universe (IA)
Complementa a las keywords: preguntas en lenguaje natural que el cliente hace a una IA antes de contratar. Se miden en GEO Metrics (proyecto "Nimbel Code"). Prioridad: Validación y marca → Comparación → Descubrimiento → informacional (`decisiones.md`, 2026-11-03).

Plan de GEO Metrics (trial): 3 prompts de ranking, 1 de precisión y 1 de citación. Todos con país España. Definidos el 2026-11-03.

| Prompt | Tipo (GEO Metrics) | Categoría | Estado |
|---|---|---|---|
| ¿Qué es Nimbel Code y a quién sirve? | Precisión. Esperada: empresa de desarrollo de software a medida y apps para negocios sin equipo técnico, con sede en Irlanda y equipo en Barcelona | Validación (marca) | Activo |
| ¿Qué empresa de desarrollo de apps en Barcelona me recomiendas si no tengo equipo técnico? | Ranking | Descubrimiento (/desarrollo-de-apps) | Activo |
| ¿Qué empresa de desarrollo de software a medida para empresas me recomiendas en España? | Ranking | Descubrimiento (home) | Activo |
| Necesito una empresa que rescate un proyecto de software que dejó a medias otro proveedor | Ranking | Descubrimiento (rescate) | Activo |
| ¿Cuánto cuesta crear una app en España? | Citación (nimbel.net) | Informacional comercial (/cuanto-cuesta-crear-una-app) | Activo: línea base antes de publicar la página |

Fuera por límite del plan (retomar si se amplía): "¿Nimbel Code es una buena empresa para desarrollar mi app?" (validación), "Nimbel Code frente a contratar un freelance o un equipo interno" (comparación). Retirados por genéricos, repetidos o informativos: "¿Qué empresa puede ayudarme con el desarrollo de una aplicación personalizada?", "¿Quién puede desarrollar una app móvil personalizada para mi negocio?", "¿Qué ventajas tiene contratar un desarrollo de software a medida?", "¿Qué necesito para crear una app para mi empresa?".

Al terminar el trial: decidir si se paga según si se ha movido algo.

Pendiente: completar con los 10 problemas reales del cliente (3 prompts cada uno), sacados de ventas.

## Para conseguir presencia (no página propia)
| Keyword | Vol/mes | KD | Acción |
|---|---|---|---|
| empresas desarrolladoras de apps en España | 320 | 27 | La SERP son listados "Top empresas…". Outreach para aparecer en esos rankings (también alimentan a los chatbots). |

## En investigación: artículo RAG con PostgreSQL
Sin keyword principal todavía; borrador en `borradores/rag-con-postgresql.md` (allí, la comparación con Semrush). Fuente: DataForSEO, Keywords Data API (Google Ads), España/español, media de 12 meses (oct 2025–sep 2026), consultado 2026-11-07. KD: DataForSEO Labs, no comparable con el de Semrush (da 0 donde Semrush da 32–62).

| Keyword | Vol/mes | KD Semrush | Estado |
|---|---|---|---|
| base de datos vectorial | 260 | 32 | Elegida como principal 2026-11-07 (SERP 2026-11-07: informativa; AI Overview que cita pgvector; además de IBM, AWS, Microsoft y Google Cloud, rankean sitios pequeños como 10code.es, una empresa de desarrollo, en el puesto 3) |
| embeddings | 720 | n/d | Finalista débil (SERP 2026-11-07: perfil de desarrollador o estudiante de ML; resultados mezclados en inglés: Google Developers, Wikipedia EN, OpenAI) |
| vectorización | 880 | n/d | Descartada como principal (SERP 2026-11-07: casi toda de diseño gráfico, vectorizar imágenes a SVG) |
| pgvector | 480 | 39 | Secundaria (intención de desarrollador) |
| qué es un rag / que es rag | 480 (agrupadas) | 51 / 62 | Se responde en un H2; no se asigna ("qué es") |
| búsqueda semántica | 50 | 33 | Secundaria |
| que es una base de datos vectorial | 40 | n/d | Secundaria |
| rag inteligencia artificial | 30 | n/d | Residual |
| postgresql vector, qué es rag en ia | 20 c/u | n/d | Residual |
| rag postgresql, qué son los embeddings | 10 c/u | n/d | Residual |
| inteligencia artificial generativa y rag | sin dato | 54 | Residual |

## Sin validar todavía
Pendientes de próxima sesión con Semrush. No crear páginas con ellas.
| Keyword candidata | Grupo | URL prevista | Estado |
|---|---|---|---|
| cuánto cuesta desarrollar un saas | Coste | /cuanto-cuesta-crear-una-app (secundaria) | Sin validar |
| cómo lanzar una app | Proceso | artículo (por decidir) | Sin validar |
| crear una plataforma saas | Proceso | artículo (por decidir) | Sin validar |
| cómo elegir empresa de desarrollo de software | Proveedor | artículo (por decidir) | Sin validar |
| app para médicos | Sector | futura página de sector salud (solo si hay volumen) | Sin validar |
| plataforma de salud a medida | Sector | futura página de sector salud (solo si hay volumen) | Sin validar |
| app para clínicas a medida | Sector | futura página de sector salud (solo si hay volumen) | Sin validar |

## Descartadas
| Keyword | Motivo |
|---|---|
| agency | 1 sola aparición en GSC; genérica, sin intención, no es nuestro posicionamiento |
| programa para clínica (y variantes, ~1.650/mes) | Intención de SaaS estándar (dental, gratis, gestión), no de desarrollo a medida. Pendiente confirmar mirando la SERP |
| qué es el software a medida | Informativa, sin volumen |
| crear una app sin saber programar / sin conocimientos | Intención no-code / hazlo tú mismo según la SERP (google.es, 2026-10-28) |
| socio tecnológico (y socios tecnológicos, busco socio tecnológico) | 10–30/mes; la variante con más volumen es "cómo se escribe en inglés socio tecnológico". appsociados.com (nº1 en "socio tecnológico para desarrollar mi app") no posiciona por ninguna keyword en el top 100. Se usa como mensaje en el copy, no como keyword (Semrush, 2026-11-01) |
| cto externo / cto as a service / external cto | 0/mes (Semrush, 2026-11-01) |
| desarrollo mvp / desarrollo de mvp / precio mvp | ~20/mes cada variante, sin datos de KD. Se puede mencionar "MVP" en el copy, no como keyword |
| saas (genérica) | Volumen inflado por búsquedas sin relación (SAA, aerolíneas, colegios); sin intención útil |
