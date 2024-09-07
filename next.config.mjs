/** @type {import('next').NextConfig} */
const nextConfig = {output: "standalone",  experimental: {
    externalMiddlewareRewritesResolve: true,
  },};

export default nextConfig;
