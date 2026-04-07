# Convenciones del proyecto

### Regla general

- Nunca usar `npm install` ni `yarn`. Solo `pnpm`
- El `pnpm-lock.yaml` debe commitearse siempre

### estilos

- Evita usar estilos de tailwind usando pixeles directamente, Ejemplo: `w-4` en lugar de `w-[16px]`, si no hay una clase de tailwind que se ajuste a lo que quieres, usa la que mas se acerque.
