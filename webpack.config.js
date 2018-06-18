var path = require('path');

module.exports = {
  entry: {
    App:'./app/assets/scripts/App.js',
    Vendor: './app/assets/scripts/Vendor.js',
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0']
        },
        test: /\.js$/,
        exclude: /node-modules/
      }
    ]
  }
}
