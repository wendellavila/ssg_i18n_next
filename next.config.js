/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/projects/ssg_i18n_next' : undefined;

const nextConfig = {
    basePath: basePath,
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