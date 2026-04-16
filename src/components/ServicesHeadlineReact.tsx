import React from "react";

interface Props {
  headline: string;
  highlight1: string;
  highlight2: string;
  sectionLabel?: string;
}

/**
 * Splits `text` into segments, wrapping occurrences of `word` in a
 * highlighted <span>. The match is case-sensitive to preserve original casing.
 */
function splitWithHighlight(
  text: string,
  word: string,
  color: string
): React.ReactNode[] {
  if (!word) return [text];
  const parts = text.split(word);
  return parts.reduce<React.ReactNode[]>((acc, part, i) => {
    acc.push(part);
    if (i < parts.length - 1) {
      acc.push(
        <span key={i} style={{ color }} className="text-nimbel-accent">
          {word}
        </span>
      );
    }
    return acc;
  }, []);
}

/**
 * Applies two highlights sequentially on the same headline text.
 * Returns an array of React nodes ready to render inside an <h2>.
 */
function applyHighlights(
  headline: string,
  highlight1: string,
  highlight2: string
): React.ReactNode {
  // Split on highlight1 first
  const segments = splitWithHighlight(headline, highlight1, "#fe4819");

  // For each plain string segment, apply highlight2
  const result: React.ReactNode[] = [];
  segments.forEach((segment, idx) => {
    if (typeof segment === "string") {
      const sub = splitWithHighlight(segment, highlight2, "#fe4819");
      sub.forEach((s, subIdx) => result.push(<React.Fragment key={`${idx}-${subIdx}`}>{s}</React.Fragment>));
    } else {
      result.push(<React.Fragment key={`hl1-${idx}`}>{segment}</React.Fragment>);
    }
  });

  return result;
}

export default function ServicesHeadlineReact({
  headline,
  highlight1,
  highlight2,
  sectionLabel,
}: Props) {
  const headlineContent = applyHighlights(headline, highlight1, highlight2);

  return (
    <section
      aria-label={sectionLabel}
      className="w-full bg-nimbel-bg py-20 px-15 max-md:px-6 max-md:py-14"
    >
      <h2
        className="font-mortend text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-nimbel-text uppercase text-center leading-tight tracking-[-0.01em]"
        data-testid="services-headline"
      >
        {headlineContent}
      </h2>
    </section>
  );
}
