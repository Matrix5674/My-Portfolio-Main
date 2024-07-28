

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint configuration (consider fixing errors for better code quality)
  eslint: {
    // Choose between ignoring or emitting warnings during production builds:
    // - ignoreDuringBuilds: true (not recommended, can mask issues)
    // - emitWarning: true (recommended, warns about potential problems)
  },

  // Configuration for static export and React Strict Mode
  output: 'export', // Set output to "export" for static generation
  reactStrictMode: true, // Enable React Strict Mode for additional checks

  images: {
    loader: 'custom',
    loaderFile: './imageloader.js',
  },
}

export default nextConfig;
