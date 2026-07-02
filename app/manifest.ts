import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BUSINESS.name} - Higienização de Estofados`,
    short_name: BUSINESS.name,
    description: "Higienização profissional de estofados em João Pessoa - PB",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0e63c9",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
