/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  env: {
    INTERNAL_TOKEN: process.env.INTERNAL_TOKEN,
    INTERNAL_PASSWORD: process.env.INTERNAL_PASSWORD
  }
};

module.exports = nextConfig;
