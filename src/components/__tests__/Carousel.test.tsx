import { cleanup, fireEvent, render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Carousel from "@/components/Carousel";

afterEach(() => cleanup());

const makeItems = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <div key={i} data-testid={`item-${i}`}>
      Item {i + 1}
    </div>
  ));

describe("Carousel", () => {
  // ── Test 1: Renders all items ──
  it("renders all items correctly", () => {
    render(<Carousel items={makeItems(3)} autoplay={false} />);
    expect(screen.getByTestId("item-0")).toBeTruthy();
    expect(screen.getByTestId("item-1")).toBeTruthy();
    expect(screen.getByTestId("item-2")).toBeTruthy();
  });

  // ── Test 2: Next button advances slide ──
  it("next button advances slide", async () => {
    const user = userEvent.setup();
    render(<Carousel items={makeItems(5)} autoplay={false} />);
    const nextBtn = screen.getByRole("button", { name: /next slide/i });
    await user.click(nextBtn);
    // After click, the dot at index 1 should be active (aria-current="true")
    const dots = screen.getAllByRole("tab");
    expect(dots[1]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 3: Prev button goes back ──
  it("prev button goes back after advancing", async () => {
    const user = userEvent.setup();
    render(
      <Carousel
        items={makeItems(3)}
        autoplay={false}
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      />
    );
    // Navigate to slide 2 via dot
    const dots = screen.getAllByRole("tab");
    await user.click(dots[1]);
    expect(screen.getAllByRole("tab")[1]).toHaveAttribute("aria-current", "true");
    // Wait for debounce to clear
    await new Promise((r) => setTimeout(r, 350));
    // Now click prev
    const prevBtn = screen.getByRole("button", { name: /previous slide/i });
    await user.click(prevBtn);
    expect(screen.getAllByRole("tab")[0]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 4: Dot click jumps to slide ──
  it("dot click jumps to corresponding slide", async () => {
    const user = userEvent.setup();
    render(<Carousel items={makeItems(5)} autoplay={false} />);
    const dots = screen.getAllByRole("tab");
    await user.click(dots[2]);
    expect(dots[2]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 5: Keyboard ArrowLeft navigates ──
  it("ArrowLeft keyboard key navigates to prev (with loop)", async () => {
    render(<Carousel items={makeItems(3)} autoplay={false} loop={true} />);
    // With loop=true, ArrowLeft from index 0 goes to max
    const region = screen.getByRole("region");
    fireEvent.keyDown(region, { key: "ArrowLeft" });
    const dots = screen.getAllByRole("tab");
    // Should loop to last dot
    expect(dots[dots.length - 1]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 6: Keyboard ArrowRight navigates ──
  it("ArrowRight keyboard key navigates to next slide", () => {
    render(
      <Carousel
        items={makeItems(3)}
        autoplay={false}
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      />
    );
    const region = screen.getByRole("region");
    fireEvent.keyDown(region, { key: "ArrowRight" });
    const dots = screen.getAllByRole("tab");
    expect(dots[1]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 7: Home key goes to first slide ──
  it("Home key navigates to first slide", async () => {
    const user = userEvent.setup();
    render(
      <Carousel
        items={makeItems(4)}
        autoplay={false}
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      />
    );
    const region = screen.getByRole("region");
    // Go to last slide first
    fireEvent.keyDown(region, { key: "End" });
    const dotsAfterEnd = screen.getAllByRole("tab");
    expect(dotsAfterEnd[3]).toHaveAttribute("aria-current", "true");
    // Press Home
    await new Promise((r) => setTimeout(r, 350));
    fireEvent.keyDown(region, { key: "Home" });
    const dotsAfterHome = screen.getAllByRole("tab");
    expect(dotsAfterHome[0]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 8: End key goes to last slide ──
  it("End key navigates to last available slide", () => {
    render(
      <Carousel
        items={makeItems(4)}
        autoplay={false}
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      />
    );
    const region = screen.getByRole("region");
    fireEvent.keyDown(region, { key: "End" });
    const dots = screen.getAllByRole("tab");
    expect(dots[dots.length - 1]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 9: Autoplay rotates slides ──
  it("autoplay rotates slides using fake timers", () => {
    vi.useFakeTimers();
    render(
      <Carousel
        items={makeItems(3)}
        autoplay={true}
        autoplayInterval={1000}
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      />
    );
    const dots = screen.getAllByRole("tab");
    expect(dots[0]).toHaveAttribute("aria-current", "true");
    act(() => vi.advanceTimersByTime(1100));
    expect(dots[1]).toHaveAttribute("aria-current", "true");
    act(() => vi.advanceTimersByTime(1100));
    expect(dots[2]).toHaveAttribute("aria-current", "true");
    vi.useRealTimers();
  });

  // ── Test 10: Hover pauses autoplay ──
  it("hover pauses autoplay on desktop", () => {
    vi.useFakeTimers();
    render(
      <Carousel
        items={makeItems(3)}
        autoplay={true}
        autoplayInterval={1000}
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      />
    );
    const region = screen.getByRole("region");
    // Hover over carousel
    fireEvent.mouseEnter(region);
    act(() => vi.advanceTimersByTime(2000));
    // Should still be at index 0 since hover pauses it
    const dots = screen.getAllByRole("tab");
    expect(dots[0]).toHaveAttribute("aria-current", "true");
    vi.useRealTimers();
  });

  // ── Test 11: Single item hides buttons and dots ──
  it("single item hides next/prev buttons and dots", () => {
    render(<Carousel items={makeItems(1)} autoplay={false} />);
    expect(screen.queryByRole("button", { name: /next slide/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /previous slide/i })).toBeNull();
    expect(screen.queryByRole("tablist")).toBeNull();
  });

  // ── Test 12: Accessibility — roles and aria-labels ──
  it("has correct accessibility roles and aria-labels", () => {
    render(<Carousel items={makeItems(3)} autoplay={false} label="Test carousel" />);
    const region = screen.getByRole("region");
    expect(region).toHaveAttribute("aria-label", "Test carousel");
    expect(screen.getByRole("button", { name: /previous slide/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /next slide/i })).toBeTruthy();
    expect(screen.getByRole("tablist")).toBeTruthy();
    const dots = screen.getAllByRole("tab");
    expect(dots.length).toBeGreaterThan(0);
    expect(dots[0]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 13: Loop disabled — no wrap-around ──
  it("does not wrap when loop is false and at last slide", async () => {
    const user = userEvent.setup();
    render(
      <Carousel
        items={makeItems(3)}
        autoplay={false}
        loop={false}
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      />
    );
    const dots = screen.getAllByRole("tab");
    // Jump to last
    await user.click(dots[2]);
    // Next should do nothing
    const nextBtn = screen.getByRole("button", { name: /next slide/i });
    await user.click(nextBtn);
    expect(dots[2]).toHaveAttribute("aria-current", "true");
  });

  // ── Test 14: Touch swipe left advances slide ──
  it("swipe left advances to next slide", () => {
    render(
      <Carousel
        items={makeItems(3)}
        autoplay={false}
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      />
    );
    const region = screen.getByRole("region");
    fireEvent.touchStart(region, {
      touches: [{ clientX: 200, clientY: 100 }],
    });
    fireEvent.touchEnd(region, {
      changedTouches: [{ clientX: 100, clientY: 100 }],
    });
    const dots = screen.getAllByRole("tab");
    expect(dots[1]).toHaveAttribute("aria-current", "true");
  });
});
