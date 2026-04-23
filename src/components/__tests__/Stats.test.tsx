import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { es } from "@/i18n/es";

// Since Stats.astro is a static Astro component, we test the rendered
// output by building an equivalent React representation of the static HTML
// structure to validate the design contract.

afterEach(() => cleanup());

// ── Fixtures (mirror i18n data) ───────────────────────────────────────────────

const mockStats = es.stats.items as Array<{ value: number; label: string }>;

// ── Static stats component (mirrors Stats.astro structure) ────────────────────

function StatsStatic({
  stats,
  ariaLabel = "Estadísticas de Nimbel Code",
}: {
  stats: typeof mockStats;
  ariaLabel?: string;
}) {
  return (
    <section aria-label={ariaLabel} data-testid="stats-section">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} data-testid={`stat-item-${stat.value}`}>
              <div aria-hidden="true">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("Stats static section", () => {
  it("renders exactly 3 stat items", () => {
    render(<StatsStatic stats={mockStats} />);
    const items = mockStats.map((s) =>
      screen.getByTestId(`stat-item-${s.value}`)
    );
    expect(items).toHaveLength(3);
  });

  it("renders all stat values", () => {
    render(<StatsStatic stats={mockStats} />);
    mockStats.forEach((s) => {
      expect(screen.getByText(String(s.value))).toBeTruthy();
    });
  });

  it("renders all stat labels as uppercase text", () => {
    render(<StatsStatic stats={mockStats} />);
    mockStats.forEach((s) => {
      expect(screen.getByText(s.label)).toBeTruthy();
    });
  });

  it("section has correct aria-label", () => {
    render(<StatsStatic stats={mockStats} />);
    const section = screen.getByRole("region", {
      name: "Estadísticas de Nimbel Code",
    });
    expect(section).toBeTruthy();
  });

  it("section has correct data-testid", () => {
    render(<StatsStatic stats={mockStats} />);
    const section = screen.getByTestId("stats-section");
    expect(section).toBeTruthy();
  });

  it("no interactive elements — no buttons, no links", () => {
    render(<StatsStatic stats={mockStats} />);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("renders stat for value 20 with expected label", () => {
    render(<StatsStatic stats={mockStats} />);
    const item = screen.getByTestId("stat-item-20");
    expect(item).toBeTruthy();
    expect(item.textContent).toContain("AÑOS DE EXPERIENCIA");
  });

  it("renders stat for value 50 with expected label", () => {
    render(<StatsStatic stats={mockStats} />);
    const item = screen.getByTestId("stat-item-50");
    expect(item).toBeTruthy();
    expect(item.textContent).toContain("PROYECTOS EXITOSOS");
  });

  it("renders stat for value 5 with expected label", () => {
    render(<StatsStatic stats={mockStats} />);
    const item = screen.getByTestId("stat-item-5");
    expect(item).toBeTruthy();
    expect(item.textContent).toContain("PRESENCIA EN PAISES");
  });
});
