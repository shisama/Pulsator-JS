const path = require("path");

module.exports = {
  mode: "production",
  entry: "./demo/demo.ts",
  output: {
    path: path.resolve(__dirname, "demo"),
    filename: "demo.bundle.js"
  },
  devServer: {
    open: true,
    host: "localhost",
    contentBase: path.join(__dirname, 'demo'),
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: 'source-map'
};
