/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server-side features
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add basePath for GitHub Pages
  basePath: '/joblancarjayawebsite',
  assetPrefix: '/joblancarjayawebsite/',
}

module.exports = nextConfig
