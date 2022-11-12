// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    // assetPrefix: isProd ? "/mojtabamoosavi-website" : undefined,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
