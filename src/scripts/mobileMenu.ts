export function initMobileMenu(): void {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const lines = document.querySelectorAll(".hamburger-line");

  if (!toggle || !menu) return;

  function toggleMenu(): void {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const newState = !isOpen;

    toggle.setAttribute("aria-expanded", String(newState));
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    animateHamburger(lines, newState);
  }

  function closeMenu(): void {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    animateHamburger(lines, false);
  }

  toggle.addEventListener("click", toggleMenu);

  // Close menu on link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });
}

function animateHamburger(
  lines: NodeListOf<Element>,
  isOpen: boolean
): void {
  const [line1, line2, line3] = Array.from(lines);

  if (!line1 || !line2 || !line3) return;

  if (isOpen) {
    // Transform to X
    line1.classList.add("translate-y-[7px]", "rotate-45");
    line2.classList.add("opacity-0");
    line3.classList.add("-translate-y-[7px]", "-rotate-45");
  } else {
    // Transform back to hamburger
    line1.classList.remove("translate-y-[7px]", "rotate-45");
    line2.classList.remove("opacity-0");
    line3.classList.remove("-translate-y-[7px]", "-rotate-45");
  }
}
