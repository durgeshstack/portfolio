import type { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Durgesh | Full Stack Developer",
    short_name: "Durgesh",
    description:
      "Durgesh - Full Stack Developer specializing in React, Next.js, Node.js, and scalable web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    lang: "en",
    dir: "ltr",
    scope: "/",
    categories: [
      "portfolio",
      "developer",
      "web development",
      "software engineering",
      "full stack",
      "javascript",
    ],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
