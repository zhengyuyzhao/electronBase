const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const VConsolePlugin = require('vconsole-webpack-plugin')

module.exports = (env, options) => {
  return {
    target: "electron-renderer",
    entry: path.resolve(__dirname, "..", "dist/main.js"),
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "..", "public"),
          to: path.resolve(__dirname, "..", "dist/public")
        },
        {
          from: path.resolve(__dirname, "..", "src/release.json"),
          to: path.resolve(__dirname, "..", "dist/package.json")
        }
      ])
    ]
  };
};
