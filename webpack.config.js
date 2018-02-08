const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/Boot.jsx'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : path.resolve(__dirname, 'src'),
        loader : 'babel-loader',
        query: {
            presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders:['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({ Promise: 'es6-promise' })
  ]
};
