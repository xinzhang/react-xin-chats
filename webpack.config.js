var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'eval-source-map',  
  // entry: {
  //   main: [
  //     'webpack-dev-server/client?http://localhost:3080',
  //     'webpack/hot/only-dev-server',
  //     './src/main.jsx'
  //   ]
  // },
  entry: ['./src/main.jsx'],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build')
    //publicPath: '/public/'
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ],
  devServer: {
    cotnentBase: 'web',
    port: 3800,
    hot: true,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1']
        }        
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      }
    ]
  }
}
