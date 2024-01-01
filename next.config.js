/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  basePath: '/github-pages',
};
module.exports = nextConfig;
