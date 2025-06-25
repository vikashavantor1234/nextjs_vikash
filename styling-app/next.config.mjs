/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            new URL('https://fakestoreapi.com/img/**')
        ],
    }
};

export default nextConfig;
