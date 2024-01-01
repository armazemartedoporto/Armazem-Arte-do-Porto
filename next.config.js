/* eslint-disable quotes */
/** @type {import('next').NextConfig} */

// eslint-disable-next-line no-undef
const BACKEND_URL = process.env.NODE_ENV === "production" ? "/next-gh-pages" : "";

const nextConfig = {
  output: "export",
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  basePath: BACKEND_URL,
};
// eslint-disable-next-line no-undef
module.exports = nextConfig;
