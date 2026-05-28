/** @type {import('next').Config} */
const nextConfig = {
  output: 'export',
  basePath: '/News-App-NextJS', // required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages can't optimize images
  },
}

export default nextConfig
