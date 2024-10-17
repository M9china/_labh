/** @type {import('next').NextConfig} */
const nextConfig = {output: "standalone",
    experimental: {
        externalMiddlewareRewritesResolve: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "lh3.googleusercontent.com",
            port: '',
          },
        ],
      }
};

export default nextConfig;
