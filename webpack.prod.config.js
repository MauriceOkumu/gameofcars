const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.config');

module.exports = merge(common,
    {
      devtool: 'cheap-module-source-map',
      optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: true, 
            })
          ],

          runtimeChunk: false,
          splitChunks: {
              cacheGroups: {
                  default: false,
                  commons : {
                      test: /[\\/]node_modules[\\/]/,
                      name: 'vendors',
                      chunks: 'all',
                      minChunks: 2
                  }
              }
          }
      }
    });