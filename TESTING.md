# Testing Guide

## Running Tests Locally

### Run tests once
```bash
pnpm test
```

### Run tests in watch mode
```bash
pnpm test -- --watch
```

### Run tests with UI
```bash
pnpm test:ui
```

## Test Structure

Integration tests are located in `src/**/*.test.ts` and use:
- **Vitest** — Fast unit/integration test runner
- **jsdom** — DOM emulation for browser APIs
- **@testing-library/dom** — DOM utilities for testing

## Test Coverage

### Mobile Menu Tests (`src/scripts/mobileMenu.test.ts`)
- ✅ Menu renders correctly
- ✅ Opens/closes on toggle click
- ✅ Hamburger animates (3 lines → X)
- ✅ Closes when clicking a link
- ✅ Closes on Escape key
- ✅ Doesn't close on other keys
- ✅ Handles missing elements gracefully

## Deployment

Tests run automatically on Vercel before deployment:
1. Push to `main`
2. Vercel starts the build
3. `pnpm test` runs first (from `vercel.json` buildCommand)
4. If tests fail → deployment is blocked ❌
5. If tests pass → `pnpm build` runs and deploys ✅

Configuration: See `vercel.json` for build settings.

No separate CI/CD pipeline needed — Vercel is the single source of truth.

## Adding New Tests

1. Create a `.test.ts` file next to the code to test
2. Import test utilities: `import { describe, it, expect } from "vitest"`
3. Write your tests
4. Run `pnpm test` to verify

Example:
```typescript
import { describe, it, expect } from "vitest";

describe("My Feature", () => {
  it("should do something", () => {
    expect(true).toBe(true);
  });
});
```
