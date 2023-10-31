/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:path*",
          destination: `https://chinf-tw.github.io/hcsh-web/:path*`,
        },
      ],
    };
  },
  output: "export",
};

module.exports = nextConfig;
