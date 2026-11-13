/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/website/case-studies',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/website/portfolio',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
