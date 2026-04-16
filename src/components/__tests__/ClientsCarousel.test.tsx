import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ClientsCarouselReact from "@/components/ClientsCarouselReact";

afterEach(() => cleanup());

const mockClients = [
  { src: "/assets/clinic-de-barcelona.svg", alt: "Clínic de Barcelona logo", name: "Clínic de Barcelona" },
  { src: "/assets/mediage-comunicacion.png", alt: "Mediage Comunicación logo", name: "Mediage Comunicación" },
  { src: "/assets/unimedia.png", alt: "Unimedia Tech logo", name: "Unimedia Tech" },
  { src: "/assets/StartUB-Universitat-Barcelona.png", alt: "StartUB Universitat Barcelona logo", name: "StartUB Universitat Barcelona" },
  { src: "/assets/elmerkat.png", alt: "El Merkat logo", name: "El Merkat" },
  { src: "/assets/innocard.svg", alt: "Innocard logo", name: "Innocard" },
];

const defaultProps = {
  headline: "Confían en nosotros",
  ariaLabel: "Carrusel de logos de clientes",
  clients: mockClients,
};

// Helper to mock window.innerWidth
function setViewportWidth(width: number) {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
}

describe("ClientsCarouselReact", () => {
  // ── Test 1: Desktop renders marquee (no carousel dots) ──
  it("renders marquee on desktop (>= 1024px) without carousel dots", () => {
    setViewportWidth(1280);
    render(<ClientsCarouselReact {...defaultProps} />);
    // On desktop, no carousel dots tablist should be present
    expect(screen.queryByRole("tablist")).toBeNull();
    // Marquee images: renders each logo twice (original + duplicate)
    const images = screen.getAllByRole("img");
    // 6 logos × 2 (marquee duplicate) = 12, aria-hidden ones won't have role=img
    // Non-hidden images: 6
    const visibleImages = images.filter(
      (img) => img.getAttribute("aria-hidden") !== "true"
    );
    expect(visibleImages.length).toBe(mockClients.length);
  });

  // ── Test 2: Mobile renders carousel with dots ──
  it("renders carousel on mobile (< 640px) with dot navigation", () => {
    setViewportWidth(375);
    render(<ClientsCarouselReact {...defaultProps} />);
    // Carousel dots (tablist) should be present
    expect(screen.getByRole("tablist")).toBeTruthy();
  });

  // ── Test 3: Tablet renders carousel with dots ──
  it("renders carousel on tablet (640-1023px) with dot navigation", () => {
    setViewportWidth(768);
    render(<ClientsCarouselReact {...defaultProps} />);
    expect(screen.getByRole("tablist")).toBeTruthy();
  });

  // ── Test 4: Mobile/tablet shows headline as h2 ──
  it("renders h2 heading on mobile viewport", () => {
    setViewportWidth(375);
    render(<ClientsCarouselReact {...defaultProps} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe("Confían en nosotros");
  });

  // ── Test 5: Desktop shows headline as paragraph (not h2) ──
  it("renders headline text on desktop without h2 tag", () => {
    setViewportWidth(1280);
    render(<ClientsCarouselReact {...defaultProps} />);
    // On desktop, headline is a <p> tag
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(screen.getByText("Confían en nosotros")).toBeTruthy();
  });

  // ── Test 6: All client logos have correct alt texts ──
  it("all client logos render with correct alt text", () => {
    setViewportWidth(375);
    render(<ClientsCarouselReact {...defaultProps} />);
    // Each logo should have alt text
    mockClients.forEach((client) => {
      expect(screen.getByAltText(client.alt)).toBeTruthy();
    });
  });

  // ── Test 7: aria-label on region ──
  it("has aria-label on the section region", () => {
    setViewportWidth(1280);
    const { container } = render(<ClientsCarouselReact {...defaultProps} />);
    const section = container.querySelector("section");
    expect(section).toBeTruthy();
    expect(section!.getAttribute("aria-label")).toBe("Carrusel de logos de clientes");
    expect(section!.getAttribute("role")).toBe("region");
  });

  // ── Test 8: Mobile carousel navigation with next button ──
  it("carousel next button navigates on mobile", async () => {
    setViewportWidth(375);
    render(
      <ClientsCarouselReact
        {...defaultProps}
      />
    );
    const nextBtn = screen.getByRole("button", { name: /next slide/i });
    expect(nextBtn).toBeTruthy();
    fireEvent.click(nextBtn);
    // After clicking next, the second dot should become active
    const dots = screen.getAllByRole("tab");
    expect(dots[1]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 9: Carousel prev button is present on mobile ──
  it("carousel prev button is present on mobile", () => {
    setViewportWidth(375);
    render(<ClientsCarouselReact {...defaultProps} />);
    const prevBtn = screen.getByRole("button", { name: /previous slide/i });
    expect(prevBtn).toBeTruthy();
  });

  // ── Test 10: i18n — English headline renders ──
  it("renders English headline when provided", () => {
    setViewportWidth(375);
    render(
      <ClientsCarouselReact
        headline="Trusted by"
        ariaLabel="Client logos carousel"
        clients={mockClients}
      />
    );
    expect(screen.getByText("Trusted by")).toBeTruthy();
  });
});
