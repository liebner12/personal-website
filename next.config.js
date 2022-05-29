const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = withMDX(
  withPWA({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      runtimeCaching,
      buildExcludes: [/middleware-manifest.json$/],
    },
    experimental: {
      outputStandalone: true,
      concurrentFeatures: true,
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  })
);

module.exports = nextConfig;
