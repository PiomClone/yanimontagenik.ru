/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath и assetPrefix не нужны для custom domain
  // Раскомментируйте только если используете GitHub Pages без custom domain
  // basePath: '/yanimontagenik.ru',
  // assetPrefix: '/yanimontagenik.ru/',
}

export default nextConfig
