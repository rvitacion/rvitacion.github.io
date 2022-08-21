/* eslint-disable global-require */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (_, params) => {
  const devMode = params.mode === "development";

  return {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
      path: path.resolve(__dirname, "docs"),
      publicPath: "auto",
      filename: "bundle.js"
    },
    target: "web",
    devtool: "source-map",
    devServer: {
      port: "8080",
      open: true,
      hot: true
    },
    watchOptions: {
      poll: 1000,
      ignored: "/node_modules/"
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: [devMode && require("react-refresh/babel")].filter(
                Boolean
              )
            }
          }
        },
        {
          test: /\.(sc|sa|c)ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          type: "asset/resource"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/img/favicon.ico"
      }),
      devMode && new ReactRefreshWebpackPlugin()
    ].filter(Boolean)
  };
};
