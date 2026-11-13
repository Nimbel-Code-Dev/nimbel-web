---
name: "NewsUp"
title: "Caso NewsUp: rescate de una plataforma de RRPP y prensa"
description: "Caso NewsUp: rescatamos y construimos su plataforma de RRPP, con sala de prensa digital, envío de comunicados, CRM de prensa y estadísticas."
datePublished: "2026-11-13"
---

# NewsUp — Plataforma de RRPP y comunicación corporativa

**De un prototipo que no se podía sacar a producción a una plataforma de RRPP con una docena de clientes, varios de ellos grandes empresas.**

## El problema
En 2019, Gerard Gil se dio cuenta de que las marcas y las agencias de comunicación seguían trabajando a la antigua: comunicados en PDF enviados por email, contactos de prensa en hojas de Excel y herramientas que no se hablaban entre sí. Muchos ni siquiera usaban una herramienta de envío de emails. El comunicado llegaba al periodista y ahí se quedaba: no había un sitio al que volver para descargar el kit de prensa o las fotos en alta calidad, ni forma de saber quién lo había leído. Gerard buscó un producto que lo resolviera todo junto y no lo encontró. Hoy hay competencia, pero entonces no existía nada parecido. Así que decidió construirlo él.

## Cuando llegamos
En verano de 2023, después de casi dos años con otros dos proveedores, NewsUp llegó a Nimbel. El primero dejó el proyecto a los pocos meses de empezar. Con el segundo, el equipo cambiaba constantemente, con perfiles junior que se iban relevando, y Gerard no tuvo el seguimiento ni el apoyo que necesitaba. Cuando revisamos el código, encontramos un prototipo: sin arquitectura, sin diseño propio y sin las medidas de seguridad básicas para salir a producción. No estaba pensado para crecer.

## Cómo lo hicimos
Gerard llegó escaldado. Después de dos proveedores, no quería empezar de cero con un tercero: quería ver cómo trabajábamos antes de confiar. Así que empezamos por encargos pequeños: arreglar, una a una, las partes del prototipo que no funcionaban. Al resolverlas, fuimos un poco más allá y le aconsejamos sobre el producto y sobre hacia dónde llevar la plataforma. Con la confianza llegaron los cambios grandes. Pieza a pieza, sustituimos el código heredado por una arquitectura nueva, hasta sacar NewsUp a producción. Hoy no queda nada del prototipo inicial.

## Qué hicimos
Una plataforma con un backend común y tres aplicaciones: el panel de trabajo, las salas de prensa públicas y la web del producto. Incluye:
- **Sala de prensa digital** con el dominio propio de cada cliente: comunicados, kits de prensa y galerías multimedia en alta resolución.
- **Gestión compartida entre marca y agencias.** Cada marca decide si lleva su sala de prensa sola, con una agencia o con varias a la vez. Las agencias entran en la sala de la marca y envían sus comunicados con sus propios contactos, sin que se mezclen: la agencia guarda su lista sin que la marca la vea, y la marca puede enviar a esos contactos sin verlos. Así, la plataforma se adapta al acuerdo al que lleguen marca y agencia.
- **Gestor de archivos multimedia (DAM)** para documentos, fotos y vídeos en alta calidad. Al subir un archivo a una categoría, se añade solo a sus colecciones de imágenes y vídeos: todo se organiza sin que nadie lo ordene a mano.
- **Envío de comunicados** con editor visual, envíos programados y automáticos, y teasers que llevan al periodista a la sala de prensa.
- **Información embargada.** La marca puede enviar un comunicado a los periodistas antes de hacer nada público, para que preparen su noticia antes de que se levante el telón. Antes de leerlo, el periodista firma que no publicará nada hasta una fecha y una hora concretas. El acceso va protegido con un token ligado a su cuenta y a su email: si lo reenvía a otra persona, no se abre.
- **CRM de prensa** con segmentación por etiquetas y gestión de duplicados.
- **Estadísticas** de aperturas, clics y actividad en la sala de prensa, con informes por campaña.
- Pagos y suscripciones integrados.

## La IA lleva la idea más lejos
NewsUp ya no solo resuelve lo que Gerard vio en 2019. Con inteligencia artificial, la plataforma hace por el usuario muchas tareas que antes eran manuales:
- Traduce los comunicados directamente a otros idiomas.
- Describe las imágenes y encuentra imágenes parecidas.
- Categoriza los archivos.
- Permite buscar con un buscador semántico, que entiende lo que buscas gracias a las descripciones generadas por IA.

El resultado es menos trabajo para marcas, agencias y periodistas, que encuentran antes lo que necesitan para escribir su noticia.

## Hoy
NewsUp trabaja con una docena de clientes, varios de ellos grandes empresas, y sigue creciendo. Seguimos trabajando con Gerard en la plataforma.

> «Nimbel no solo nos construyó la plataforma. Nos ayudaron a entender qué necesitábamos realmente y cómo escalarla sin depender de ellos para siempre. Eso marca la diferencia con cualquier agencia de desarrollo: te dejan con algo tuyo, no con una caja negra.»
>
> — Gerard Gil, fundador de NewsUp
