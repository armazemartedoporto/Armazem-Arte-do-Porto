/* eslint-disable quotes */
/** @type {import('next').NextConfig} */

// O basePath só existe no GitHub Pages; em desenvolvimento o site abre em localhost:3000
const basePath = process.env.NODE_ENV === "production" ? "/Armazem-Arte-do-Porto" : "";

const nextConfig = {
  output: "export",
  //reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    // Exportação estática não tem servidor de otimização de imagens
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  assetPrefix: basePath,
  basePath,
};
// eslint-disable-next-line no-undef
module.exports = nextConfig;
