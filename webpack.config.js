const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
var path = require("path");

module.exports = {
  output: {
    filename: "[name].js",
    path: __dirname + "/docs",
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    port: 5500,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "image/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new FaviconsWebpackPlugin("./src/image/RT-favicon.png"),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/digital-marketing.html",
      filename: "digital-marketing.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/enterprise.html",
      filename: "enterprise.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/insights.html",
      filename: "insights.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
   experiments: {
    topLevelAwait: true //Needed for experimental top-level await
  }
};
