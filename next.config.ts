import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org", // Dominio de las imágenes de la API de películas
        pathname: "/t/p/**", // Ruta de las carpetas de pósters
      },
    ],
  },
  /* Si tienes otras opciones de configuración, van aquí abajo */
};

export default nextConfig;
