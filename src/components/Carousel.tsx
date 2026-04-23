import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface ItemsPerViewConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface GapConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface CarouselProps {
  items: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  itemsPerView?: ItemsPerViewConfig;
  gap?: GapConfig;
  label?: string;
}

const DEFAULT_ITEMS_PER_VIEW: ItemsPerViewConfig = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};

const DEFAULT_GAP: GapConfig = {
  mobile: 16,
  tablet: 20,
  desktop: 24,
};

function getBreakpoint(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  if (window.innerWidth < 640) return "mobile";
  if (window.innerWidth < 1024) return "tablet";
  return "desktop";
}

export default function Carousel({
  items,
  autoplay = true,
  autoplayInterval = 5000,
  showDots = true,
  showArrows = true,
  loop = true,
  itemsPerView: itemsPerViewProp,
  gap: gapProp,
  label = "Content carousel",
}: CarouselProps) {
  const itemsPerViewConfig = itemsPerViewProp ?? DEFAULT_ITEMS_PER_VIEW;
  const gapConfig = gapProp ?? DEFAULT_GAP;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">(
    () => getBreakpoint()
  );
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isNavigatingRef = useRef(false);

  const itemsPerView = itemsPerViewConfig[breakpoint];
  const gap = gapConfig[breakpoint];
  const totalItems = items.length;
  const totalPages = Math.max(1, totalItems - itemsPerView + 1);
  const isSingleItem = totalItems <= 1;

  // ── Detect prefers-reduced-motion ──
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── Responsive resize handler ──
  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setBreakpoint(getBreakpoint());
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // ── Reset currentIndex when breakpoint changes (clamp to valid range) ──
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, totalItems - itemsPerView)));
  }, [breakpoint, itemsPerView, totalItems]);

  // ── Navigation handlers (debounced) ──
  const navigate = useCallback(
    (targetIndex: number) => {
      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;
      setCurrentIndex(targetIndex);
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
      }, 300);
    },
    []
  );

  const handleNext = useCallback(() => {
    const maxIndex = Math.max(0, totalItems - itemsPerView);
    const nextIndex = currentIndex >= maxIndex ? (loop ? 0 : currentIndex) : currentIndex + 1;
    navigate(nextIndex);
  }, [currentIndex, totalItems, itemsPerView, loop, navigate]);

  const handlePrev = useCallback(() => {
    const maxIndex = Math.max(0, totalItems - itemsPerView);
    const prevIndex = currentIndex <= 0 ? (loop ? maxIndex : 0) : currentIndex - 1;
    navigate(prevIndex);
  }, [currentIndex, totalItems, itemsPerView, loop, navigate]);

  const handleGoTo = useCallback(
    (index: number) => {
      navigate(index);
    },
    [navigate]
  );

  // ── Autoplay ──
  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!autoplay || prefersReducedMotion || isSingleItem) return;
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, totalItems - itemsPerView);
        return prev >= maxIndex ? (loop ? 0 : prev) : prev + 1;
      });
    }, autoplayInterval);
  }, [autoplay, prefersReducedMotion, isSingleItem, autoplayInterval, loop, totalItems, itemsPerView, stopAutoplay]);

  useEffect(() => {
    if (!isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isHovered, startAutoplay, stopAutoplay]);

  // ── Keyboard navigation ──
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      // Only handle if focus is inside carousel region
      if (!target.closest("[data-carousel-region]")) return;

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          handleNext();
          stopAutoplay();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handlePrev();
          stopAutoplay();
          break;
        case "Home":
          e.preventDefault();
          handleGoTo(0);
          stopAutoplay();
          break;
        case "End":
          e.preventDefault();
          handleGoTo(Math.max(0, totalItems - itemsPerView));
          stopAutoplay();
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, handleGoTo, stopAutoplay, totalItems, itemsPerView]);

  // ── Touch / swipe ──
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartXRef.current;
      const dy = e.changedTouches[0].clientY - touchStartYRef.current;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx < 0) {
          handleNext();
        } else {
          handlePrev();
        }
        stopAutoplay();
      }
    },
    [handleNext, handlePrev, stopAutoplay]
  );

  // ── Compute track transform ──
  // Each item takes: (100% - gap * (itemsPerView-1)) / itemsPerView width
  // translateX offset = -(currentIndex * (itemWidth + gap))
  // We express this as a calc() in CSS using percentage-based widths.
  const itemWidthPercent = 100 / itemsPerView;
  const trackTranslateX = `calc(-${currentIndex} * (${itemWidthPercent}% + ${gap}px))`;

  const transitionStyle = prefersReducedMotion ? "none" : "transform 300ms ease-out";

  return (
    <div
      className="relative"
      role="region"
      aria-label={label}
      data-carousel-region
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Track container */}
      <div className="overflow-hidden w-full">
        <div
          className="flex"
          style={{
            transform: `translateX(${trackTranslateX})`,
            transition: transitionStyle,
            gap: `${gap}px`,
          }}
          aria-live="polite"
          aria-atomic="false"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="shrink-0"
              style={{ width: `calc(${itemWidthPercent}% - ${gap * (itemsPerView - 1) / itemsPerView}px)` }}
              aria-hidden={index < currentIndex || index >= currentIndex + itemsPerView}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Prev button */}
      {showArrows && !isSingleItem && (
        <button
          type="button"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-nimbel-text/90 shadow-md text-nimbel-bg hover:bg-nimbel-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nimbel-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
          onClick={() => {
            handlePrev();
            stopAutoplay();
          }}
          disabled={!loop && currentIndex === 0}
        >
          &#10094;
        </button>
      )}

      {showArrows && !isSingleItem && (
        <button
          type="button"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-nimbel-text/90 shadow-md text-nimbel-bg hover:bg-nimbel-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nimbel-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
          onClick={() => {
            handleNext();
            stopAutoplay();
          }}
          disabled={!loop && currentIndex >= totalPages - 1}
        >
          &#10095;
        </button>
      )}

      {/* Dots */}
      {showDots && !isSingleItem && (
        <div
          className="flex justify-center gap-2 mt-4"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentIndex ? "true" : undefined}
              className={[
                "w-2 h-2 rounded-full transition-all duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nimbel-accent",
                i === currentIndex ? "bg-nimbel-bg scale-125" : "bg-nimbel-muted",
              ].join(" ")}
              onClick={() => {
                handleGoTo(i);
                stopAutoplay();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
