const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript();

const withLess = require("@zeit/next-less");
module.exports = withLess({
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.REACT_APP_API_URL,
      },
    ];
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  env: {
    GQL_ENDPOINT: process.env.REACT_APP_API_URL,
  },
});
