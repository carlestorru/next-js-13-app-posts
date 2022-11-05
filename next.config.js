/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.dicebear.com']
  },
  reactStrictMode: false
}

module.exports = nextConfig
