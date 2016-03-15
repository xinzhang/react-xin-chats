var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3080, 'localhost', function(err, result){
  if(err){
    return console.log(err);
  }

  console.log('Listening on localhost:3080')
});
