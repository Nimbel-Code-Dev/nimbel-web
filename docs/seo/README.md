# docs/seo

Fuente única de verdad de las decisiones SEO de nimbel.net. Esta carpeta la leen y escriben tanto Claude Code como un proyecto de Claude Cowork: léela siempre del disco, puede haber cambiado.

## Ficheros
- `keyword-map.md`: keywords elegidas y descartadas, la URL asignada a cada una y su estado.
- `decisiones.md`: registro cronológico de decisiones (la más reciente arriba), con qué se decidió y por qué.
- `backlog.md`: tareas SEO pendientes y hechas, por prioridad.
- `contenido-home.md`: texto SEO aprobado para la home que está pendiente de diseño.

Los requisitos SEO por componente de la construcción inicial de la landing están en [`SPECS.md`](../../SPECS.md).

## Flujo de trabajo
1. Se decide.
2. Se registra en `decisiones.md`.
3. Se refleja en `keyword-map.md` y/o `backlog.md`.
4. Se aplica en el código.
5. Se marca hecho en `backlog.md` y se actualiza el Estado en `keyword-map.md`.
