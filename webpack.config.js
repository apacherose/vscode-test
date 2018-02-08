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
      }
    ],
    /* rules: [
      {
        test: /\.css$/,
        include: '/css/',
        exclude: '/src/',
        use: [ 'style-loader', 'css-loader' ]
      }
    ] */
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
