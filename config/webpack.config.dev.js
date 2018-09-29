const HtmlWebpackPlugin = require('html-webpack-plugin');

const { HOST, PORT } = process.env;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    host: HOST,
    port: PORT,
  },
};
