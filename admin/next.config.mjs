/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['example.com' , 'res.cloudinary.com' , 'img.clerk.com'],
    },
};

export default nextConfig;
