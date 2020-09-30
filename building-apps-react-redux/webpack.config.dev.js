const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  // Source map allow us to see the original code when we run it in the browser
  devtool: "cheap-module-source-app",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    // Publir url when it's referenced in the browser
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  // We tell webpack what files to handle
  module: {
    rules: [
      {
        // RegExp config. el \ indica que el seguent simbol no es de RegExp, son arxius que tenen un punt
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
