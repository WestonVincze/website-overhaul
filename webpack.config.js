module.exports = {
  module: {
    loaders: [
      {
        test: /\.woff$/,
        loader: "url?limit=10240&mimetype=application/font-woff",
      },
      {
        test: /\.ttf$/,
        loader: "url?limit=10240&mimetype=application/x-font-ttf",
      },
      {
        test: /\.eot$/,
        loader: "url?limit=10240&mimetype=application/vnd.ms-fontobject",
      },
    ],
  },
};
