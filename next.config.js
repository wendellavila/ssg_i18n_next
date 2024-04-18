/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    }
}
module.exports = nextConfig;