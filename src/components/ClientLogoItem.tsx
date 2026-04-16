import React from "react";

interface ClientLogoItemProps {
  src: string;
  alt: string;
  name: string;
}

export default function ClientLogoItem({ src, alt, name }: ClientLogoItemProps) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        aria-label={`${name} logo`}
        className="h-7 w-auto max-w-36 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
}
