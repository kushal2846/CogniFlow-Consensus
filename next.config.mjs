/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/n8n/:path*',
        destination: 'http://localhost:5678/:path*', // Proxy to n8n
      },
      {
        // Handle n8n websocket integration or other subpaths
        source: '/n8n/:path*/:more*',
        destination: 'http://localhost:5678/:path*/:more*',
      }
    ];
  },
};

export default nextConfig;
