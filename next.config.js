/** @type {import('next').NextConfig} */

const API_KEY = "9e6f340a78667c4d57a6e5fb4c883ad7";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/source/:path",
        destination: "/destination/:path",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
