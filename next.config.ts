import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Habilitar dominios externos para next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Next.js convierte automáticamente a WebP/AVIF según el browser
    formats: ['image/avif', 'image/webp'],
    // Permitir SVG para ilustraciones internas
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
