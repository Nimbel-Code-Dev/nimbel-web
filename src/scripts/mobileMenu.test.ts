import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { initMobileMenu } from "./mobileMenu";

describe("Mobile Menu", () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Setup DOM structure
    container = document.createElement("div");
    document.body.appendChild(container);

    // Create hamburger button
    const toggle = document.createElement("button");
    toggle.id = "menu-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.className = "md:hidden flex flex-col gap-1.25 p-2 cursor-pointer";

    // Create hamburger lines
    for (let i = 0; i < 3; i++) {
      const line = document.createElement("span");
      line.className =
        "hamburger-line block w-6 h-0.5 bg-nimbel-muted transition-all duration-300";
      toggle.appendChild(line);
    }

    // Create mobile menu
    const menu = document.createElement("div");
    menu.id = "mobile-menu";
    menu.className =
      "hidden md:hidden flex-col items-start gap-2 bg-nimbel-bg px-6 pb-6 border-t border-nimbel-muted/10";

    // Add menu links
    const link1 = document.createElement("a");
    link1.href = "#about";
    link1.textContent = "About";
    menu.appendChild(link1);

    const link2 = document.createElement("a");
    link2.href = "#services";
    link2.textContent = "Services";
    menu.appendChild(link2);

    container.appendChild(toggle);
    container.appendChild(menu);

    // Initialize the menu
    initMobileMenu();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("should render menu and toggle button", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    expect(toggle).toBeTruthy();
    expect(menu).toBeTruthy();
  });

  it("should open menu on toggle button click", () => {
    const toggle = document.getElementById("menu-toggle") as HTMLButtonElement;
    const menu = document.getElementById("mobile-menu") as HTMLElement;

    expect(menu.classList.contains("hidden")).toBe(true);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");

    toggle.click();

    expect(menu.classList.contains("hidden")).toBe(false);
    expect(menu.classList.contains("flex")).toBe(true);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
  });

  it("should close menu on toggle button click when open", () => {
    const toggle = document.getElementById("menu-toggle") as HTMLButtonElement;
    const menu = document.getElementById("mobile-menu") as HTMLElement;

    toggle.click(); // Open
    expect(menu.classList.contains("hidden")).toBe(false);

    toggle.click(); // Close
    expect(menu.classList.contains("hidden")).toBe(true);
    expect(menu.classList.contains("flex")).toBe(false);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("should animate hamburger lines on toggle", () => {
    const toggle = document.getElementById("menu-toggle") as HTMLButtonElement;
    const lines = toggle.querySelectorAll(".hamburger-line");

    expect(lines[0].classList.contains("rotate-45")).toBe(false);
    expect(lines[1].classList.contains("opacity-0")).toBe(false);
    expect(lines[2].classList.contains("-rotate-45")).toBe(false);

    toggle.click(); // Open

    expect(lines[0].classList.contains("rotate-45")).toBe(true);
    expect(lines[0].classList.contains("translate-y-[7px]")).toBe(true);
    expect(lines[1].classList.contains("opacity-0")).toBe(true);
    expect(lines[2].classList.contains("-rotate-45")).toBe(true);
    expect(lines[2].classList.contains("-translate-y-[7px]")).toBe(true);

    toggle.click(); // Close

    expect(lines[0].classList.contains("rotate-45")).toBe(false);
    expect(lines[1].classList.contains("opacity-0")).toBe(false);
    expect(lines[2].classList.contains("-rotate-45")).toBe(false);
  });

  it("should close menu when clicking a link", () => {
    const toggle = document.getElementById("menu-toggle") as HTMLButtonElement;
    const menu = document.getElementById("mobile-menu") as HTMLElement;
    const link = menu.querySelector("a") as HTMLAnchorElement;

    toggle.click(); // Open
    expect(menu.classList.contains("hidden")).toBe(false);

    link.click();

    expect(menu.classList.contains("hidden")).toBe(true);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("should close menu on Escape key", () => {
    const toggle = document.getElementById("menu-toggle") as HTMLButtonElement;
    const menu = document.getElementById("mobile-menu") as HTMLElement;

    toggle.click(); // Open
    expect(menu.classList.contains("hidden")).toBe(false);

    const escapeEvent = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(escapeEvent);

    expect(menu.classList.contains("hidden")).toBe(true);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("should not close menu on other keys", () => {
    const toggle = document.getElementById("menu-toggle") as HTMLButtonElement;
    const menu = document.getElementById("mobile-menu") as HTMLElement;

    toggle.click(); // Open
    expect(menu.classList.contains("hidden")).toBe(false);

    const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
    document.dispatchEvent(enterEvent);

    expect(menu.classList.contains("hidden")).toBe(false);
  });

  it("should handle missing menu gracefully", () => {
    const menu = document.getElementById("mobile-menu");
    menu?.remove();

    const toggle = document.getElementById("menu-toggle") as HTMLButtonElement;

    // Should not throw error
    expect(() => {
      toggle.click();
    }).not.toThrow();
  });
});
