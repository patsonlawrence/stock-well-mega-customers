const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: require('next-pwa/cache'),
});

const nextConfig = {
  reactStrictMode: true,

  // ✅ Add this to avoid cross-origin dev warning
  allowedDevOrigins: ['http://192.168.100.20'],
};

module.exports = withPWA(nextConfig);
