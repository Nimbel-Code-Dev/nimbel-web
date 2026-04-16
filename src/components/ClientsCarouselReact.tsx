import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ClientLogoItem from "./ClientLogoItem";

interface ClientLogo {
  src: string;
  alt: string;
  name: string;
}

interface ClientsCarouselReactProps {
  headline: string;
  ariaLabel: string;
  clients: ClientLogo[];
}

function getBreakpoint(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  if (window.innerWidth < 640) return "mobile";
  if (window.innerWidth < 1024) return "tablet";
  return "desktop";
}

export default function ClientsCarouselReact({
  headline,
  ariaLabel,
  clients,
}: ClientsCarouselReactProps) {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">(
    () => getBreakpoint()
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setBreakpoint(getBreakpoint()), 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const isDesktop = breakpoint === "desktop";

  const carouselItems = clients.map((client) => (
    <ClientLogoItem
      key={client.src}
      src={client.src}
      alt={client.alt}
      name={client.name}
    />
  ));

  if (isDesktop) {
    return (
      <section
        className="w-full bg-white overflow-hidden"
        aria-label={ariaLabel}
        role="region"
      >
        <div className="flex items-center h-18 px-15 gap-15">
          <p className="shrink-0 text-nimbel-bg text-3xl font-semibold uppercase whitespace-nowrap font-display">
            {headline}
          </p>
          <div className="flex-1 overflow-hidden">
            <div
              className="flex items-center gap-15 w-max"
              style={{ animation: "marquee 24s linear infinite" }}
            >
              {clients.map((client) => (
                <img
                  key={client.src}
                  src={client.src}
                  alt={client.alt}
                  aria-label={`${client.name} logo`}
                  className="h-7 w-auto max-w-36 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              ))}
              {clients.map((client) => (
                <img
                  key={`dup-${client.src}`}
                  src={client.src}
                  alt={client.alt}
                  aria-hidden="true"
                  className="h-7 w-auto max-w-36 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full bg-white py-8 px-6"
      aria-label={ariaLabel}
      role="region"
    >
      <h2 className="text-nimbel-bg text-2xl font-semibold uppercase font-display mb-6">
        {headline}
      </h2>
      <Carousel
        items={carouselItems}
        itemsPerView={{ mobile: 2, tablet: 3, desktop: 6 }}
        gap={{ mobile: 16, tablet: 20, desktop: 24 }}
        autoplay={true}
        showDots={true}
        showArrows={true}
        loop={true}
        label={ariaLabel}
      />
    </section>
  );
}
