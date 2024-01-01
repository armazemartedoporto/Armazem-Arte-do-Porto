/* eslint-disable quotes */
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  //assetPrefix: "/github-pages",
  asePath: "/github-pages",
};
// eslint-disable-next-line no-undef
module.exports = nextConfig;
