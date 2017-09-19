const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
const webpack = require('webpack')

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loader: `style-loader!css-loader?${cssModules}` },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsplugin()
    )
}

module.exports = config
