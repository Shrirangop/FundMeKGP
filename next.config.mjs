/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
            port: '',
            pathname: '/color/**',
          },

          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dmpocqdwd/**',
          },
        ],
      },
};

export default nextConfig;
