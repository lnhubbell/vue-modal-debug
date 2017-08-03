var path = require('path')
var webpack = require('webpack')

module.exports = {
  // This is the "main" file which should include all other modules
  context: __dirname,
  entry: './src/main.js',
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // With the filename `build.js` so it's dist/build.js
    filename: 'build.js'
  },
  module: {
    // Special compilation rules
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {'vue$': 'vue/dist/vue.esm.js'}
  }
}
