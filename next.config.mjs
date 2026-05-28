/** @type {import('next').Config} */
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages can't optimize images
  },
}

export default nextConfig