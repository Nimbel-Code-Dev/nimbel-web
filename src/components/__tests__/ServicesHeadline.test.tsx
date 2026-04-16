import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import ServicesHeadlineReact from "@/components/ServicesHeadlineReact";

afterEach(() => cleanup());

// ── i18n fixtures ──────────────────────────────────────────────────────────
const esProps = {
  headline: "Desarrollo de aplicaciones a medida, Apps móvil y plataformas web",
  highlight1: "Desarrollo",
  highlight2: "plataformas",
  sectionLabel: "Servicios",
};

const enProps = {
  headline: "Custom application development, Mobile apps and web platforms",
  highlight1: "Custom",
  highlight2: "platforms",
  sectionLabel: "Services",
};

// ── Helpers ────────────────────────────────────────────────────────────────
/**
 * Returns the inline style `color` value from the first element that wraps
 * `text` exactly. Looks at elements with the nimbel-accent class.
 */
function getHighlightColor(container: HTMLElement, text: string): string | null {
  const spans = container.querySelectorAll<HTMLElement>("span.text-nimbel-accent");
  for (const span of spans) {
    if (span.textContent === text) return span.style.color;
  }
  return null;
}

// ── Test suite ─────────────────────────────────────────────────────────────
describe("ServicesHeadlineReact", () => {
  // ── Test 1: Renders h2 with semantic heading ──
  it("renders an h2 element (semantic HTML)", () => {
    render(<ServicesHeadlineReact {...esProps} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeTruthy();
  });

  // ── Test 2: Full headline text is present in ES ──
  it("renders full ES headline text", () => {
    render(<ServicesHeadlineReact {...esProps} />);
    const heading = screen.getByTestId("services-headline");
    expect(heading.textContent).toContain("Desarrollo");
    expect(heading.textContent).toContain("plataformas");
    expect(heading.textContent).toContain("de aplicaciones a medida");
  });

  // ── Test 3: Full headline text is present in EN ──
  it("renders full EN headline text (i18n support)", () => {
    render(<ServicesHeadlineReact {...enProps} />);
    const heading = screen.getByTestId("services-headline");
    expect(heading.textContent).toContain("Custom");
    expect(heading.textContent).toContain("platforms");
    expect(heading.textContent).toContain("application development");
  });

  // ── Test 4: highlight1 ('Desarrollo') is in #fe4819 color ──
  it("highlight1 'Desarrollo' renders with #fe4819 accent color", () => {
    const { container } = render(<ServicesHeadlineReact {...esProps} />);
    const color = getHighlightColor(container, "Desarrollo");
    // jsdom normalises hex → rgb(254, 72, 25)
    expect(color).toMatch(/rgb\(254,\s*72,\s*25\)|#fe4819/i);
  });

  // ── Test 5: highlight2 ('plataformas') is in #fe4819 color ──
  it("highlight2 'plataformas' renders with #fe4819 accent color", () => {
    const { container } = render(<ServicesHeadlineReact {...esProps} />);
    const color = getHighlightColor(container, "plataformas");
    expect(color).toMatch(/rgb\(254,\s*72,\s*25\)|#fe4819/i);
  });

  // ── Test 6: EN highlights render in correct color ──
  it("EN highlight1 'Custom' renders with accent color", () => {
    const { container } = render(<ServicesHeadlineReact {...enProps} />);
    const color = getHighlightColor(container, "Custom");
    expect(color).toMatch(/rgb\(254,\s*72,\s*25\)|#fe4819/i);
  });

  // ── Test 7: Responsive Tailwind classes present ──
  it("h2 has responsive text-size classes (mobile → desktop)", () => {
    render(<ServicesHeadlineReact {...esProps} />);
    const heading = screen.getByRole("heading", { level: 2 });
    // Check all four breakpoint classes exist on the heading element
    expect(heading.className).toContain("text-2xl");
    expect(heading.className).toContain("sm:text-3xl");
    expect(heading.className).toContain("lg:text-4xl");
    expect(heading.className).toContain("xl:text-5xl");
  });

  // ── Test 8: Section label is set as aria-label on the <section> ──
  it("renders aria-label on the wrapping section", () => {
    const { container } = render(<ServicesHeadlineReact {...esProps} />);
    const section = container.querySelector("section");
    expect(section).toBeTruthy();
    expect(section!.getAttribute("aria-label")).toBe("Servicios");
  });

  // ── Test 9: Non-highlighted text is still present (no content loss) ──
  it("text outside highlights is preserved intact", () => {
    render(<ServicesHeadlineReact {...esProps} />);
    const heading = screen.getByTestId("services-headline");
    // Validate the non-highlighted fragments remain in the output
    expect(heading.textContent).toContain(" de aplicaciones a medida, Apps móvil y ");
    expect(heading.textContent).toContain(" web");
  });

  // ── Test 10: Works when highlight words are NOT found in headline ──
  it("renders plain headline text when highlight words are absent", () => {
    render(
      <ServicesHeadlineReact
        headline="Our services"
        highlight1="Nonexistent"
        highlight2="AlsoMissing"
      />
    );
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading.textContent).toBe("Our services");
    // No accent spans rendered
    expect(heading.querySelectorAll("span.text-nimbel-accent")).toHaveLength(0);
  });
});
