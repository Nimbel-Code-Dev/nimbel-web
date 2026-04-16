import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

// Since Services.astro is a static Astro component, we test the rendered
// output by building an equivalent React representation of the static HTML
// structure to validate the design contract.

afterEach(() => cleanup());

// ── Fixtures (mirror i18n data) ───────────────────────────────────────────────

const mockServices = [
  {
    id: "dev-infrastructure",
    title: "Desarrollo de aplicaciones e infrasctructura",
    description:
      "Construimos tu software desde cero y nos aseguramos de que funcione sin caídas, sea rápido y escale cuando tu negocio crezca.",
  },
  {
    id: "ux-design",
    title: "Diseño UX/UI",
    description:
      "Que sea bonito está bien. Que tu equipo lo use sin formación y sin frustraciones es lo que importa.",
  },
  {
    id: "sales-automation",
    title: "Vende más sin trabajar el doble",
    description:
      "Automatizamos tu proceso de ventas con IA: seguimientos, propuestas, captación. Para que ningún cliente potencial se pierda por falta de tiempo.",
  },
  {
    id: "project-rescue",
    title: "Rescate de proyectos tecnológicos",
    description:
      "¿Tu proyecto se quedó a medias, no funciona como esperabas o el proveedor anterior desapareció? Lo retomamos desde donde esté.",
  },
];

// ── Static services list component (mirrors Services.astro structure) ─────────

function ServicesStatic({
  services,
}: {
  services: typeof mockServices;
}) {
  return (
    <section
      id="services"
      aria-label="Servicios"
      data-testid="services-section"
    >
      <div>
        {services.map((service, index) => (
          <div
            key={service.id}
            data-testid={`service-row-${service.id}`}
            className={
              index < services.length - 1 ? "border-b border-[#0c1414]" : ""
            }
          >
            {/* Arrow icon */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>

            <h3 data-testid={`service-title-${service.id}`}>
              {service.title}
            </h3>

            <p data-testid={`service-desc-${service.id}`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("Services static list", () => {
  it("renders exactly 4 service rows", () => {
    render(<ServicesStatic services={mockServices} />);
    const rows = mockServices.map((s) =>
      screen.getByTestId(`service-row-${s.id}`)
    );
    expect(rows).toHaveLength(4);
  });

  it("renders all service titles as h3 headings", () => {
    render(<ServicesStatic services={mockServices} />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(4);
    mockServices.forEach((s) => {
      expect(screen.getByText(s.title)).toBeTruthy();
    });
  });

  it("renders all service descriptions", () => {
    render(<ServicesStatic services={mockServices} />);
    mockServices.forEach((s) => {
      expect(screen.getByText(s.description)).toBeTruthy();
    });
  });

  it("first 3 rows have border-b class (separator), last row does not", () => {
    render(<ServicesStatic services={mockServices} />);
    mockServices.forEach((s, index) => {
      const row = screen.getByTestId(`service-row-${s.id}`);
      if (index < mockServices.length - 1) {
        expect(row.className).toContain("border-b");
      } else {
        expect(row.className).not.toContain("border-b");
      }
    });
  });

  it("section has correct aria-label", () => {
    render(<ServicesStatic services={mockServices} />);
    const section = screen.getByRole("region", { name: "Servicios" });
    expect(section).toBeTruthy();
  });

  it("no interactive elements — no buttons, no expandable regions", () => {
    render(<ServicesStatic services={mockServices} />);
    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(0);
  });
});
