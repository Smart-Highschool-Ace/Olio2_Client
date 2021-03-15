const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript();

const withLess = require("@zeit/next-less");
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});
