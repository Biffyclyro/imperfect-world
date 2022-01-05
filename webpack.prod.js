const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/game.ts',
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'server.min.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new ESLintPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './assets',
          to: './assets'
        }
      ]
    })
  ]
};