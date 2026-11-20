---
name: "Modernizar un sistema legacy"
title: "Sistema legacy: cómo modernizarlo sin parar | Nimbel Code"
description: "Cómo modernizar un sistema legacy sin parar tu plataforma: el caso NewsUp, con el 98,2 % del contenido migrado sin intervención manual y sin perder datos."
datePublished: "2026-11-20"
author: albert
h1: "Cómo modernizar un sistema legacy sin parar tu plataforma ni disparar las horas de migración"
---

**Modernizar un sistema legacy sin parar la plataforma es posible si se migra por pasos pequeños y reversibles:** un programa convierte los datos automáticamente, comprueba que no se pierde nada antes de guardar cada cambio y aparta para revisión manual solo lo que no puede convertir con garantías. En NewsUp, así migramos el 98,2 % del contenido sin intervención manual.

## ¿Qué es un sistema legacy y por qué acaba frenando a tu empresa?

Un sistema legacy es software que sigue funcionando, pero está construido sobre un modelo antiguo que ya no encaja con lo que el negocio necesita. No está roto: el problema es que cada mejora cuesta más que la anterior, porque hay que hacerla compatible con lo viejo.

En [NewsUp](/casos/newsup/), una plataforma de salas de prensa online que desarrollamos y mantenemos en [Nimbel](/sobre-nimbel-code), pasaba justo eso. Hace unos meses estrenamos un editor nuevo para escribir notas de prensa. El contenido nuevo ya nacía con él, pero todo lo anterior seguía guardado en el formato antiguo. Durante unos meses convivieron los dos modelos, y eso tenía un coste:

- Cada funcionalidad nueva tenía que funcionar con los dos formatos, o no podía usarse con el contenido antiguo.
- Había dos editores y dos formas de mostrar el contenido que mantener.
- Algunas funcionalidades nuevas no podían construirse mientras quedara contenido antiguo.

Si tu empresa tiene un programa de gestión, una intranet o una aplicación que "funciona, pero nadie se atreve a tocar", probablemente estás en la misma situación.

## ¿Qué hay que saber del contenido antes de migrarlo?

Antes de decidir nada, medimos. En noviembre de 2026 analizamos una copia de los datos reales y esto es lo que encontramos en el contenido que había que migrar:

| Qué encontramos | Proporción |
|---|---|
| Contenidos con archivos descargables asociados | 82 % de los contenidos |
| Contenidos con formato (alineación, sangría) que la web pública nunca llegó a mostrar | Más del 36 % de los contenidos |
| Contenidos con vídeos de Vimeo incrustados | 1,8 % de los contenidos |
| Imágenes que apuntaban a un archivo que ya no existía en su sala de prensa | 3,1 % de las imágenes |

Este paso suele saltarse, y es el que más horas ahorra. Con los números delante sabes qué se puede automatizar, qué casos raros existen y cuánto trabajo manual va a quedar, antes de escribir una sola línea de la migración.

## ¿Se puede migrar sin que la plataforma deje de funcionar?

Sí. En NewsUp la web pública de cada sala de prensa siguió funcionando durante toda la migración, y los clientes pudieron seguir publicando contenido nuevo. Lo conseguimos con tres decisiones:

1. **Migrar en el sitio, no copiar.** Cada contenido se convierte manteniendo su identidad. Si hubiéramos creado copias nuevas, se habrían roto los enlaces ya compartidos, los correos enviados a periodistas y la relación entre las traducciones de un mismo contenido.
2. **Congelar solo lo que se migra.** Durante la conversión, el contenido antiguo no se podía editar, para asegurarnos de que ningún contenido que estábamos migrando se modificaba y garantizar así que no se perdían datos. Todo lo demás, incluido el editor nuevo, siguió funcionando con normalidad. Como ese contenido apenas se editaba ya, el impacto para los clientes fue mínimo.
3. **Pasos pequeños, cada uno con su vuelta atrás.** Dividimos la migración en siete pasos que se ponen en marcha por separado en la plataforma real. Cada uno se puede deshacer si algo sale mal, salvo el último, que solo se da cuando todo está comprobado.

| Paso | Qué hace | Si sale mal |
|---|---|---|
| 1 | Todo el contenido nuevo pasa a crearse con el editor moderno | Se vuelve a la versión anterior |
| 2 | La plataforma aprende a mostrar lo que el contenido antiguo necesita (colores, vídeos incrustados) | Se vuelve a la versión anterior |
| 3 | Copia de seguridad completa y pausa en la edición del contenido antiguo | Se borra la copia |
| 4 | Conversión automática: primero en un entorno de pruebas, luego en la plataforma real | Cada contenido vuelve a como estaba, desde su copia |
| 5 | Revisión de los pocos contenidos que no se pudieron convertir solos | Ese contenido vuelve a como estaba |
| 6 | Se elimina el código antiguo | Se vuelve a la versión anterior |
| 7 | Se eliminan los datos antiguos y la copia de seguridad | Sin vuelta atrás: solo se hace al final |

## ¿Cómo evitas perder datos en una migración?

Comprobando cada contenido antes de darlo por bueno, de forma automática. Nuestro programa de migración no se limita a convertir: después de convertir cada nota de prensa, verifica seis cosas comparando el antes y el después:

1. El resultado es válido para el editor nuevo.
2. El texto es exactamente el mismo y en el mismo orden.
3. Las imágenes y vídeos son los mismos.
4. Los enlaces son los mismos y en el mismo orden.
5. Hay el mismo número de puntos de lista, títulos y celdas de tabla.
6. El título sigue siendo el título.

Si falla cualquiera de ellas, ese contenido no se toca y queda apartado con el motivo apuntado.

Además, guardamos el estado anterior de cada contenido justo antes de convertirlo, en el mismo momento en que se convierte. Si algo no cuadra semanas después, se puede devolver un contenido concreto a como estaba, sin tocar el resto.

También distinguimos dos tipos de pérdida:

- **De presentación**: detalles de formato que la web pública nunca llegó a mostrar o que eran ruido de copiar y pegar desde Word, como un color negro forzado o restos del editor antiguo. Se descartan y se cuentan en el informe.
- **De contenido**: una imagen que no se encuentra o un vídeo de un proveedor no compatible. Esto nunca se descarta en silencio: el contenido se bloquea hasta que una persona lo revisa.

## ¿Cómo se reduce el coste en horas de una migración de datos?

Automatizando todo lo repetible y dejando para las personas solo lo que de verdad necesita criterio. En NewsUp, el trabajo manual se limitó a los contenidos bloqueados, y sabíamos cuántos eran antes de empezar.

Lo que más horas nos ahorró:

- **Ensayos con datos reales.** Lanzamos la migración completa como un ensayo general: el programa hacía todo el trabajo pero no guardaba nada, y lo hacía sobre una copia de los datos reales. Repetimos hasta que solo quedaron los casos bloqueados que esperábamos. Cuando llegó el momento de verdad, no hubo sorpresas.
- **Un programa que se puede relanzar sin miedo.** Si se interrumpe a medias o se vuelve a lanzar, no convierte nada dos veces. Eso permite migrar por salas de prensa o contenido a contenido, sin coordinar grandes ventanas de mantenimiento.
- **Corregir en bloque en vez de uno a uno.** En el primer ensayo vimos que muchas imágenes con problemas seguían el mismo patrón. En lugar de revisarlas una a una, añadimos un paso que las corrige automáticamente.
- **Decidir qué no merece la pena conservar.** Mantener formatos que el público nunca vio habría cambiado el aspecto de más de un tercio del contenido y nos habría obligado a ampliar el editor nuevo solo para eso.

El resultado: **el 98,2 % del contenido se migró de forma automática**. Solo el 1,8 % necesitó revisión manual. Las comprobaciones de la migración nos permitieron detectar esos casos y corregirlos de paso.

## ¿Qué queda cuando termina la migración?

Una plataforma sin rastro del modelo antiguo: un solo editor, un solo formato y un código más sencillo de mantener. Las funcionalidades nuevas de NewsUp ya no tienen que contemplar dos casos, y eso se nota en lo que tarda cada mejora en salir.

Y un beneficio que no buscábamos: los datos están más limpios que antes, porque la migración nos obligó a revisar casos que llevaban tiempo ahí.

Esa es la verdadera razón para modernizar un sistema legacy: no el cambio en sí, sino lo que te deja hacer después.

## ¿Cuándo NO hace falta migrar un sistema legacy?

No siempre compensa. Si tu sistema funciona, nadie necesita cambiarlo y no te frena para crecer, migrarlo es gastar dinero sin retorno. Merece la pena cuando cada cambio cuesta cada vez más, cuando hay funcionalidades que no puedes construir por culpa del modelo antiguo o cuando dependes de una tecnología que nadie sabe mantener.

En Nimbel Code, empresa de [desarrollo de software a medida](/desarrollo-de-apps), empezamos siempre por medir y te decimos con datos si la migración compensa o no. Si tienes un sistema que se ha quedado atrás, [escríbenos](/#contact) y lo vemos juntos.

## Dudas frecuentes

### ¿Cuánto tiempo está parada la plataforma durante una migración de datos?

Si la migración se diseña bien, nada. En NewsUp la web pública y el editor nuevo funcionaron durante todo el proceso. Solo se congeló el editor del contenido antiguo mientras se convertía.

### ¿Qué pasa si la migración sale mal?

Cada paso tiene su vuelta atrás. Guardamos una copia de seguridad completa antes de empezar y otra de cada contenido justo antes de convertirlo, así que se puede deshacer un contenido concreto sin tocar los demás.

### ¿Se pierden datos al modernizar un sistema antiguo?

No debería perderse contenido. Un programa compara cada dato antes y después de convertirlo, y lo que no se puede convertir con garantías queda apartado para que lo revise una persona. En NewsUp fue solo el 1,8 % del contenido. Sí se pueden descartar detalles de formato sin valor, y eso se decide y se documenta de antemano.

### ¿Cuánto cuesta migrar un sistema legacy?

Depende sobre todo de cuántos casos raros haya en los datos, y por eso lo primero que hacemos es medirlos. Cuanto más se automatiza la conversión, más bajo es el coste, porque las horas se concentran solo en los casos que necesitan criterio humano.

### ¿Hay que migrar todo de golpe?

No. Es más seguro hacerlo por pasos pequeños, cada uno puesto en marcha y comprobado por separado. Así un error afecta a un paso y no a toda la plataforma.
