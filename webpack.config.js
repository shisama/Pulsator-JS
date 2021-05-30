const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./demo/demo.js",
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
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
