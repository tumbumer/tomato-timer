'use strict';

const HtmlPlugin = require('html-webpack-plugin');

const { HOST, PORT } = process.env;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlPlugin({ template: 'src/index.html' })],
  devServer: {
    host: HOST,
    port: PORT,
  },
};
