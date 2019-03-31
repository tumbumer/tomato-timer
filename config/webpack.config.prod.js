'use strict';

const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { BUILD_DIR } = process.env;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, BUILD_DIR),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlPlugin({ template: 'src/index.html' }), new MiniCssExtractPlugin()],
};
