/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
  serverExternalPackages: [],
  
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };
    
    return config;
  },
};

module.exports = nextConfig; 