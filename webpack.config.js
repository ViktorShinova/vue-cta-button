const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};

module.exports = [
  // Config 1: For browser environment
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-cta-button.min.js',
      libraryTarget: 'window',
      library: 'VueCtaButton',
    }
  }),
  // Config 2: For Node-based development environments
  merge(config, {
    entry: path.resolve(__dirname + '/src/CtaButton.vue'),
    output: {
      filename: 'vue-cta-button.js',
      libraryTarget: 'umd',
      library: 'vue-cta-button',
      umdNamedDefine: true
    }
  })
];
