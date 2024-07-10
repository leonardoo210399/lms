/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["utfs.io"]
    },
    productionBrowserSourceMaps: false, // Disable source maps in production
    webpack(config, { dev, isServer }) {
      if (!dev) {
        config.devtool = false; // Ensure source maps are not generated in production
      }
      return config;
    },
  };
  
  export default nextConfig;
  