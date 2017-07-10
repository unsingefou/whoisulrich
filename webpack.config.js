var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bourbon = require("bourbon-neat").includePaths

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      // stylesheets: path.resolve(__dirname, 'app/assets/stylesheets/')
    },
    modules: [
      "node_modules",
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "src/components"),
      path.resolve(__dirname, "src/stylesheets")
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': path.resolve(__dirname, 'node_modules/react')
    }),
    new ExtractTextPlugin("./index.css")
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
      },
      {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader?modules', ],
        },
      {
        test: /\.scss|css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader: "css-loader?required"}, // translates CSS into CommonJS
            {
              loader: "sass-loader?required",
              options: {
                includePaths: [require('bourbon-neat').includePaths, require("bourbon").includePaths]
              }
            } // compiles Sass to CSS
          ]
        })
      }
		]
	},
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js'
  }
}
