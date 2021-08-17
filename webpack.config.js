'use strict';

let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin({
    filename: 'main.css',
    chunkFilename: '[id].css'
  })],
};
