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
  basePath: process.env.NODE_ENV === 'production' ? '/joblancarjayawebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/joblancarjayawebsite/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
