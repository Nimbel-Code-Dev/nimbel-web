import React from "react";
import Carousel from "@/components/Carousel";

export interface CaseStudyItem {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
  cta: string;
  imgAlt: string;
}

interface CaseStudiesCarouselProps {
  items: readonly CaseStudyItem[];
  locale: string;
}

function buildTitle(title: string, highlight: string): React.ReactNode {
  const idx = title.indexOf(highlight);
  if (idx === -1) {
    return <span>{title}</span>;
  }
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

function CaseStudySlide({ item }: { item: CaseStudyItem }) {
  const imgSrc = `/assets/${item.id}-app.png`;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full px-6 lg:px-12 py-8">
      {/* Text side */}
      <div className="flex flex-col gap-6 lg:w-1/2 order-2 lg:order-1">
        <h3 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-nimbel-text leading-tight">
          {buildTitle(item.title, item.titleHighlight)}
        </h3>
        <p className="text-nimbel-muted text-base lg:text-lg leading-relaxed">
          {item.description}
        </p>
        <div>
          <a href="#contact" className="btn-primary uppercase tracking-wide text-sm">
            {item.cta}
          </a>
        </div>
      </div>

      {/* Image side */}
      <div className="lg:w-1/2 order-1 lg:order-2 w-full">
        <img
          src={imgSrc}
          alt={item.imgAlt}
          className="w-full h-auto rounded-xl object-cover shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function CaseStudiesCarousel({
  items,
  locale,
}: CaseStudiesCarouselProps) {
  const slides: React.ReactNode[] = items.map((item) => (
    <CaseStudySlide key={item.id} item={item} />
  ));

  return (
    <Carousel
      items={slides}
      autoplay={true}
      autoplayInterval={6000}
      showDots={true}
      showArrows={true}
      loop={true}
      itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
      gap={{ mobile: 0, tablet: 0, desktop: 0 }}
      label={locale === "es" ? "Carrusel de casos de éxito" : "Case studies carousel"}
    />
  );
}
