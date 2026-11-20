# docs/seo

Fuente única de verdad de las decisiones SEO de nimbel.net. Se edita solo desde Claude Code: léela siempre del disco (tras un `git pull`), puede haber cambiado.

## Ficheros
- `keyword-map.md`: keywords elegidas y descartadas, la URL asignada a cada una y su estado.
- `decisiones.md`: registro cronológico de decisiones (la más reciente arriba), con qué se decidió y por qué.
- `backlog.md`: historial de las tareas SEO hechas, con su commit. Desde el 2026-11-18, lo pendiente se sigue en la [guía de gestión comercial](https://github.com/Nimbel-Code-Dev/nimbel-kb/blob/main/ventas/guia-gestion-comercial-paso-a-paso.md#paso-4-perfil-web-y-escaparates) de la base.
- `contenido-home.md`: texto SEO aprobado para la home que está pendiente de diseño.
- `rediseno-sin-perder-posicionamiento.md`: qué no se toca, qué se comprueba en el PR y cómo se sigue una página ya publicada cuando se rediseña. Las fotos de partida de cada página van en `fotos/`.
- `Guia_SEO_para_IAs_Edicion_Octubre_2026.md`: referencia externa (GEO Metrics, datos a 2026-10-07). La escribe el proveedor de una herramienta que usamos y tiene contradicciones internas: se consulta, pero mandan las decisiones de `decisiones.md` (contraste en la entrada del 2026-11-03).

Los requisitos SEO por componente de la construcción inicial de la landing están en [`SPECS.md`](../../SPECS.md).

## Flujo de trabajo
1. Se decide.
2. Se registra en `decisiones.md`.
3. Se refleja en `keyword-map.md` y, si da trabajo, como tarea en la guía comercial de la base.
4. Se aplica en el código.
5. Se marca hecho en la tarea de la guía comercial y en `backlog.md`, y se actualiza el Estado en `keyword-map.md`.
