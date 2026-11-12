// Redes de Nimbel Code: una sola lista para el pie y para Contacto
export interface SocialNetwork {
  id: "instagram" | "tiktok" | "linkedin" | "github";
  label: string;
  href: string;
}

export const socialNetworks: readonly SocialNetwork[] = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/nimbelcode.tech/" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@nimbelcode" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/nimbel-code-apps/" },
  { id: "github", label: "GitHub", href: "https://github.com/Nimbel-Code-Dev" },
];
