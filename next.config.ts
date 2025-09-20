import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
   webpack: (config) => {
    // Configuración para que SVGR funcione en Next.js
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // archivos JS/TS/JSX/TSX
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // esto hace que exporte default como componente React
            exportType: "default",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
