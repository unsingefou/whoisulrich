var webpack = require("webpack");
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      // stylesheets: path.resolve(__dirname, 'app/assets/stylesheets/')
    },
    modules: [
      "node_modules",
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "src/components")
    ]
  },
  plugins: [
    // new ExtractTextPlugin("../stylesheets/webpack.css"),
    new webpack.ProvidePlugin({
      'React': path.resolve(__dirname, 'node_modules/react')
    }),
    new webpack.ProvidePlugin({
      $: path.resolve(__dirname, 'node_modules/jquery'),
      jQuery: path.resolve(__dirname, 'node_modules/jquery'),
      jquery: path.resolve(__dirname, 'node_modules/jquery'),
      "window.jQuery": path.resolve(__dirname, 'node_modules/jquery')
    })
  ],
  module: {
		loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
		]
	},
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js'
  }
}
