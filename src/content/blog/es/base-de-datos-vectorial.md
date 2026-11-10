---
name: "Base de datos vectorial"
title: "Base de datos vectorial con PostgreSQL y RAG | Nimbel Code"
description: "Qué es una base de datos vectorial y por qué PostgreSQL, con pgvector, ya hace ese trabajo para que la IA responda con tus datos. Explicado sin jerga."
datePublished: "2026-11-07"
author: ruben
h1: "Base de datos vectorial: por qué PostgreSQL ya basta para hacer RAG"
---

**Una base de datos vectorial guarda el significado de textos o imágenes como listas de números (vectores) y encuentra los más parecidos a una pregunta.** Es la pieza que permite hacer RAG: dar a una IA la información de tu empresa justo antes de que responda, para que use tus datos y no generalidades. No hace falta montar una aparte: PostgreSQL, con la extensión pgvector, ya hace ese trabajo dentro de la base de datos que probablemente ya usas.

<!-- Animación hecha con Remotion (remotion/RagFlow.tsx); se regenera con `pnpm video:render` -->
<video autoplay muted loop playsinline preload="metadata" width="1200" height="900" poster="/assets/blog/rag-flow.webp" aria-label="Esquema en cuatro pasos: tus datos se convierten en vectores, PostgreSQL busca los más parecidos y la IA responde con ese contexto">
  <source src="/assets/blog/rag-flow.mp4" type="video/mp4" />
</video>

## El problema: una IA genérica no conoce tus datos

Un asistente de IA sabe mucho del mundo, pero no sabe nada de tu catálogo, de tus contratos ni de tu archivo de fotos. Nunca los ha visto.

Si le preguntas por ellos, pasan dos cosas: o responde en general, o se inventa algo que suena convincente. Ninguna de las dos sirve para trabajar.

Copiar y pegar documentos en el chat funciona con un par de archivos. Con miles, no: no caben, cuesta dinero enviarlos y nadie sabe cuáles son los buenos para cada pregunta.

## ¿Qué es RAG?

**RAG (Retrieval-Augmented Generation, "generación aumentada con recuperación") es una técnica en la que, antes de que la IA responda, se buscan en tus datos los fragmentos más relevantes y se le entregan como contexto.**

La IA no memoriza tu información ni se entrena con ella. La lee justo antes de responder, igual que tú lees una nota antes de entrar a una reunión.

Piensa en un examen a libro abierto en el que, además, alguien te marca las páginas exactas que necesitas. No tienes que saberte el libro: solo leer bien lo marcado. Eso es RAG. La parte difícil es marcar las páginas correctas, y ahí entran los embeddings.

## ¿Qué son los embeddings?

**Un embedding es una lista de números que representa el significado de un texto o de una imagen.** Convertir contenido en esas listas se llama vectorizar.

Lo útil es que dos cosas que significan algo parecido reciben números parecidos, aunque usen palabras distintas.

Imagina un mapa de ideas en el que cada frase tiene sus coordenadas. "Coche" y "vehículo" viven en el mismo barrio; "factura pendiente" y "pago atrasado", también. "Coche" y "factura" quedan lejos.

Por eso la búsqueda semántica (búsqueda por significado) encuentra lo que buscas aunque no escribas las palabras exactas del documento. Una búsqueda clásica por palabras no lo hace.

## ¿Por qué PostgreSQL ya lo resuelve?

**PostgreSQL, con la extensión pgvector, guarda los embeddings y calcula qué contenidos se parecen más a una pregunta, todo dentro de la propia base de datos.** No hace falta una base de datos vectorial aparte.

PostgreSQL es una de las bases de datos más usadas del mundo y es muy probable que tu empresa ya tenga una. pgvector es una extensión: un complemento que le añade estas capacidades.

Esto es lo que aporta:

- **Guarda los vectores junto al resto de tus datos.** El significado de un documento vive en la misma base que su título, su fecha o su autor. No hay que copiarlo a otro sistema ni mantener dos sitios sincronizados.
- **Calcula la distancia entre significados con una sola instrucción.** La fórmula más habitual se llama similitud coseno: mide si dos vectores "apuntan hacia el mismo sitio" en ese mapa de ideas. Ya viene programada; nadie tiene que escribir la matemática a mano.
- **Encuentra lo más parecido muy rápido gracias a índices HNSW.** Un índice es como el índice de un libro, pero ordenado por significado en lugar de por orden alfabético. Con él, buscar entre millones de registros lleva milisegundos en lugar de revisar uno a uno. A cambio, la búsqueda es aproximada: casi siempre da los mejores resultados, aunque no lo garantiza al cien por cien.
- **Combina el significado con filtros normales en la misma consulta.** Puedes pedir "contratos que hablen de penalizaciones por retraso, de este cliente, firmados este año y que este usuario tenga permiso para ver". Todo de una vez.

La conclusión es sencilla: las matemáticas difíciles ya están resueltas e integradas. El trabajo real está en decidir qué se vectoriza, cómo se mantiene al día y cómo se entrega a la IA.

## ¿Cómo recibe la IA el contexto?

**La IA recibe tu pregunta junto con los fragmentos que PostgreSQL ha encontrado, y responde a partir de ellos.** El flujo tiene cuatro pasos:

1. **Tus datos.** Documentos, fichas de producto, correos o imágenes que ya tienes.
2. **Se convierten en vectores.** Cada contenido se vectoriza una vez y se guarda en PostgreSQL. Cuando cambia, se actualiza.
3. **PostgreSQL busca los más parecidos.** Cuando alguien pregunta, la pregunta también se vectoriza y la base de datos devuelve los fragmentos más cercanos en significado, con los filtros que hagan falta.
4. **La IA responde con ese contexto.** Recibe la pregunta y esos fragmentos, y redacta la respuesta basándose en ellos. Si se diseña así, puede citar de qué documento sale cada dato.

## ¿Qué ventajas tiene?

| | IA genérica | IA con RAG sobre tu base de datos |
|---|---|---|
| ¿Conoce tus datos? | No | Sí, los fragmentos relevantes de cada pregunta |
| ¿De dónde sale la respuesta? | De lo que aprendió en general | De tus documentos, que puede citar |
| Información reciente | Solo hasta la fecha de su entrenamiento | La que haya en tu base de datos en ese momento |
| Invenciones | Frecuentes cuando no sabe | Menos, porque responde sobre texto concreto |
| Coste por consulta | Alto si le pegas documentos enteros | Menor: solo se envía lo relevante |
| Dónde están tus datos | En lo que copies al chat | En tu base de datos |
| Permisos | No los conoce | Cada usuario recupera solo lo que puede ver |

En resumen: la IA recibe solo la información relevante, responde con tus datos y se equivoca menos. Como envías menos texto, cada consulta cuesta menos. Y tus datos siguen viviendo en tu base de datos.

## ¿Qué hay que tener en cuenta al implementarlo?

**Activar pgvector es fácil; que el sistema responda bien depende de decisiones de diseño que conviene tomar con experiencia.** Las principales:

- **Qué describir y vectorizar, y cómo.** No todo el contenido se vectoriza igual. En una imagen, por ejemplo, a menudo conviene generar antes una descripción de lo que se ve. Y un documento largo hay que partirlo en trozos con sentido.
- **Mantener los vectores sincronizados.** Si un documento cambia y su vector no, la IA responderá con información vieja.
- **Elegir el umbral de "parecido suficiente".** Siempre hay un resultado "más parecido", aunque no tenga nada que ver. Hay que decidir a partir de qué punto se descarta para no meter ruido.
- **Controlar el consumo y el coste.** Cuántos fragmentos se envían, cuándo se vuelve a vectorizar y qué modelo se usa en cada paso afectan a la factura.
- **Respetar los permisos.** Cada usuario solo debe recuperar lo que tiene derecho a ver. Si el filtro falla, la IA puede revelar algo que no debía.

## Lo hemos aplicado en una plataforma propia

En Nimbel Code hemos aplicado RAG con PostgreSQL en una plataforma propia de gestión de contenidos multimedia y comunicación, con dos usos:

- **Búsqueda por significado en una biblioteca de imágenes y documentos.** El usuario escribe lo que busca con sus propias palabras y encuentra resultados aunque no coincidan con las del archivo.
- **"Encontrar imágenes parecidas".** A partir de una imagen, la plataforma muestra otras con un contenido visual similar.

Todo funciona sobre PostgreSQL, sin bases de datos vectoriales adicionales. Es el tipo de [IA aplicada a la operativa](/#services) que integramos en los proyectos de [desarrollo de apps](/desarrollo-de-apps) y software a medida.

## Dudas frecuentes

### ¿Necesito una base de datos vectorial aparte para hacer RAG?
No necesariamente. PostgreSQL con pgvector guarda los vectores y busca por similitud dentro de la misma base que ya usas. Una base vectorial dedicada solo tiene sentido en casos de volumen o requisitos muy particulares.

### ¿RAG entrena la IA con mis datos?
No. La IA no aprende ni guarda tu información: recibe los fragmentos relevantes en cada pregunta y los usa solo para esa respuesta.

### ¿Mis datos salen de mi base de datos?
Se guardan en tu base de datos. A la IA solo le llegan los fragmentos necesarios para cada respuesta. Si ni siquiera eso puede salir de tu infraestructura, se puede usar un modelo de IA alojado en ella.

### ¿Funciona con imágenes y no solo con texto?
Sí. Las imágenes también se pueden vectorizar, directamente o a partir de una descripción de su contenido. Eso permite buscarlas por lo que muestran y encontrar imágenes parecidas a otra.

### ¿Qué pasa cuando cambia la información?
Hay que volver a vectorizar lo que cambia. Si el sistema se diseña para hacerlo automáticamente, la IA siempre trabaja con la versión vigente de tus datos.

## ¿Quieres aplicarlo a tus datos?

Si tienes documentos, un catálogo o un archivo de imágenes y quieres que una IA trabaje con ellos, pero no sabes por dónde empezar, te ayudamos. Revisamos qué datos tienes, si encaja RAG y cómo montarlo sobre tu base de datos.

[Habla con nosotros](/#contact)
