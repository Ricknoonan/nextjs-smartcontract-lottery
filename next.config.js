/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    unoptimized: true,
}

const images = {
    loader: "akamai",
    path: "",
}

module.exports = { nextConfig, images }
