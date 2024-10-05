/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig

module.exports = {
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 250000,  // Ограничение на размер бандлов (250 KB)
    };
    return config;
  },
};
