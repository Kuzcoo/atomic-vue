const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.vue$/, loader: 'vue-loader', exclude: /node_modules/},
      {test: /\.scss$/, loader: ['vue-style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: 'development'
}