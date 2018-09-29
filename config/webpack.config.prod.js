const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { BUILD_DIR } = process.env;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, BUILD_DIR),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
