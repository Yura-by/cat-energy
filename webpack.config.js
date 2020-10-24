module.exports = {
  mode: `development`,
  output: {
    filename: `bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }, {
        test: /\.(tsx|ts)?$/,
        use: [
          {loader: `babel-loader`},
          {loader: `ts-loader`}
        ]
      }
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
  devtool: `source-map`
};
