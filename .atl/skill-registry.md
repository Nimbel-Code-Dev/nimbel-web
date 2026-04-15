# Skill Registry — nimbel-code

Generated: 2026-04-15
Project: test-code-claude

## User Skills

| Skill | Trigger Contexts |
|-------|-----------------|
| `playwright-cli` | E2E tests, browser automation, Playwright |
| `seo-audit` | SEO review, technical SEO, meta tags, performance |
| `judgment-day` | Adversarial code review, quality gate |
| `go-testing` | Go tests, Bubbletea TUI (not applicable here) |
| `skill-creator` | Creating new AI skills |
| `branch-pr` | PR creation, pull requests |
| `issue-creation` | GitHub issues, bug reports |

## Project Standards (Compact Rules)

### Package Manager
- ALWAYS use `pnpm`. Never `npm install` or `yarn`.
- Always commit `pnpm-lock.yaml`.

### Tailwind CSS
- No pixel values directly. Use Tailwind utility classes (e.g. `w-4` not `w-[16px]`).
- If no exact class exists, use the closest available.

### Commits
- Conventional commits only. No Co-Authored-By or AI attribution.

### Testing
- Strict TDD Mode: **ENABLED**
- Test runner: `pnpm test` (Vitest 4.1.4)
- Integration tests with jsdom + @testing-library/dom
- Tests must pass before deployment (Vercel buildCommand)

### TypeScript
- Strict mode (extends `astro/tsconfigs/strict`)
- Use non-null assertions (`!`) after guard clauses rather than refactoring
- No `// @ts-ignore` — prefer type assertions or `!`

## Convention Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Project conventions (pnpm, Tailwind rules) |
| `~/.claude/CLAUDE.md` | Global rules (commits, language, tools) |

## Code Context Map

| Extension/Path | Relevant Skills |
|---------------|-----------------|
| `*.astro` | seo-audit (for pages), judgment-day |
| `*.test.ts` | go-testing pattern (adapted for Vitest) |
| `src/scripts/*.ts` | judgment-day |
| `.github/**` | branch-pr, issue-creation |
