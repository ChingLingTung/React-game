/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_SERVER2: 'http://localhost:3002',
  },
}

module.exports = nextConfig
