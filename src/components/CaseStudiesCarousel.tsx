import React, { useState, useEffect, useRef, useCallback } from "react";

export interface CaseStudyItem {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
  cta: string;
  href: string;
  imgAlt: string;
}

interface Props {
  items: readonly CaseStudyItem[];
  locale: string;
}

const AUTOPLAY_MS = 6000;

function buildTitle(title: string, highlight: string): React.ReactNode {
  const idx = title.indexOf(highlight);
  if (idx === -1) return <span>{title}</span>;
  const before = title.slice(0, idx);
  const after = title.slice(idx + highlight.length);
  return (
    <>
      {before && <span>{before}</span>}
      <span className="text-nimbel-accent">{highlight}</span>
      {after && <span>{after}</span>}
    </>
  );
}

export default function CaseStudiesCarousel({ items, locale }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartXRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Including `current` in deps resets the interval on every slide change,
  // keeping the progress dot animation in sync.
  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [current, paused, prefersReducedMotion, items.length]);

  const goTo = useCallback((index: number) => setCurrent(index), []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(dx) > 40) {
      setCurrent((prev) =>
        dx < 0
          ? (prev + 1) % items.length
          : (prev - 1 + items.length) % items.length
      );
    }
  };

  return (
    <div
      role="region"
      aria-label={locale === "es" ? "Carrusel de casos de éxito" : "Case studies carousel"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/*
        CSS grid stacking: all slides share the same grid area so the container
        is always as tall as the tallest slide. Visibility is controlled via
        opacity only — no layout shifts, ever.
      */}
      <div style={{ display: "grid", gridTemplateAreas: '"stack"' }}>
        {items.map((item, i) => {
          const isActive = i === current;
          const imgSrc = `/assets/${item.id}-app.png`;

          return (
            <div
              key={item.id}
              style={{ gridArea: "stack" }}
              className={[
                "transition-opacity duration-500",
                isActive ? "opacity-100" : "opacity-0",
              ].join(" ")}
              aria-hidden={isActive ? undefined : true}
              // inert prevents focus/interaction on hidden slides (React 19)
              {...(!isActive ? { inert: true } : {})}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left: text */}
                <div className="flex flex-col gap-6 lg:gap-8">
                  <h3 className="font-mortend text-3xl sm:text-4xl xl:text-5xl font-bold text-nimbel-text uppercase leading-tight">
                    {buildTitle(item.title, item.titleHighlight)}
                  </h3>
                  <p className="text-nimbel-muted text-base lg:text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-3 uppercase tracking-widest py-5"
                  >
                    <span>{item.cta}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>

                {/* Right: image */}
                <div className="w-full aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-lg">
                  <img
                    src={imgSrc}
                    alt={item.imgAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div
        className="flex items-center justify-center gap-2 mt-10"
        role="tablist"
        aria-label={locale === "es" ? "Navegación de proyectos" : "Project navigation"}
      >
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-label={`${locale === "es" ? "Proyecto" : "Project"} ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            onClick={() => goTo(i)}
            className={[
              "relative overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nimbel-accent",
              i === current
                ? "w-8 h-2 bg-white/20"
                : "w-2 h-2 bg-white/40 hover:bg-white/60",
            ].join(" ")}
          >
            {i === current && (
              <span
                key={`fill-${current}`}
                className="absolute inset-0 bg-nimbel-accent origin-left rounded-full"
                style={{
                  animation: prefersReducedMotion
                    ? "none"
                    : `case-studies-progress ${AUTOPLAY_MS}ms linear forwards`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
