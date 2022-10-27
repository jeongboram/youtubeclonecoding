/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rules: [
    {
      test: /\.(png|jpg|gif|svg)$/, // 확장자가 png, jpg, gif, svg인것에 대해서만 등록
      loader: 'file-loader',
    },  
  ],
}

module.exports = nextConfig
