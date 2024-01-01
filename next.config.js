/** @type {import('next').NextConfig} */

const BACKEND_URL = process.env.NODE_ENV === 'production' ? '/next-gh-pages' : "";
const nextConfig = {
  output: 'export',
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  assetPrefix: BACKEND_URL,
  basePath: BACKEND_URL,
};
module.exports = nextConfig;
