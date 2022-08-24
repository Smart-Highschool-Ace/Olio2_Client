const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript();

const withLess = require("@zeit/next-less");
module.exports = withLess({
  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  webpackDevMiddleware: config => {
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL,
      },
    ];
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  images: {
    domains: ["media.discordapp.net", "cdn.discordapp.com"],
  },
  env: {
    GQL_ENDPOINT: process.env.NEXT_PUBLIC_API_URL,
  },
});
