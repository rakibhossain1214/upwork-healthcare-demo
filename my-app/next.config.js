/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: false,
// }

module.exports = {
  images: {
    domains: ['assets.vercel.com', 'storage.googleapis.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://storage.googleapis.com/:path*',
      },
    ]
  },
}