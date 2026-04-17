import { describe, expect, it } from "vitest";
import { useTranslations } from "@/i18n/utils";

// Extracted highlight logic matching ServicesHeadline.astro
function highlightText(text: string, word: string, className: string): string {
  const regex = new RegExp(`(${word})`, "gi");
  return text.replace(regex, `<span class="${className}">$1</span>`);
}

function buildHighlightedHeadline(headline: string, highlight1: string, highlight2: string): string {
  let result = headline;
  result = highlightText(result, highlight1, "text-nimbel-accent");
  result = highlightText(result, highlight2, "text-nimbel-accent");
  return result;
}

// ── i18n fixtures ──────────────────────────────────────────────────────────
const esT = useTranslations("es");
const enT = useTranslations("en");

const esHeadline = esT("services", "headline") as string;
const esHighlight1 = esT("services", "headlineHighlight1") as string;
const esHighlight2 = esT("services", "headlineHighlight2") as string;

const enHeadline = enT("services", "headline") as string;
const enHighlight1 = enT("services", "headlineHighlight1") as string;
const enHighlight2 = enT("services", "headlineHighlight2") as string;

// ── Test suite ─────────────────────────────────────────────────────────────
describe("ServicesHeadline", () => {
  it("ES headline contains highlight1 wrapped in text-nimbel-accent span", () => {
    const html = buildHighlightedHeadline(esHeadline, esHighlight1, esHighlight2);
    expect(html).toContain(`<span class="text-nimbel-accent">${esHighlight1}</span>`);
  });

  it("ES headline contains highlight2 wrapped in text-nimbel-accent span", () => {
    const html = buildHighlightedHeadline(esHeadline, esHighlight1, esHighlight2);
    expect(html).toContain(`<span class="text-nimbel-accent">${esHighlight2}</span>`);
  });

  it("EN headline contains highlight1 wrapped in text-nimbel-accent span", () => {
    const html = buildHighlightedHeadline(enHeadline, enHighlight1, enHighlight2);
    expect(html).toContain(`<span class="text-nimbel-accent">${enHighlight1}</span>`);
  });

  it("EN headline contains highlight2 wrapped in text-nimbel-accent span", () => {
    const html = buildHighlightedHeadline(enHeadline, enHighlight1, enHighlight2);
    expect(html).toContain(`<span class="text-nimbel-accent">${enHighlight2}</span>`);
  });

  it("non-highlighted text is preserved intact (ES)", () => {
    const html = buildHighlightedHeadline(esHeadline, esHighlight1, esHighlight2);
    expect(html).toContain("de aplicaciones a medida");
    expect(html).toContain("Apps móvil y");
    expect(html).toContain("web");
  });

  it("non-highlighted text is preserved intact (EN)", () => {
    const html = buildHighlightedHeadline(enHeadline, enHighlight1, enHighlight2);
    expect(html).toContain("application development");
    expect(html).toContain("Mobile apps and web");
  });

  it("returns plain text unchanged when highlight words are absent", () => {
    const text = "Our services";
    const html = buildHighlightedHeadline(text, "Nonexistent", "AlsoMissing");
    expect(html).toBe("Our services");
    expect(html).not.toContain("<span");
  });
});
