const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.dev.config');
const  ImageminPlugin = require('imagemin-webpack-plugin').default;

const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

module.exports = merge(common,
    {
      devtool: 'cheap-module-source-map',
      optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: true, 
              test: /\.js(\?.*)?$/i,
              exclude: /\/node_modules/,
              cache: true,
              parallel: true,
            }),
            new ImageminPlugin({
            bail: false,
            cache: true,
            parallel: true,
            imageminOptions: {
                plugins: [
                  imageminGifsicle({
                    interlaced: true
                  }),
                  imageminJpegtran({
                    progressive: true
                  }),
                  imageminOptipng({
                    optimizationLevel: 5
                  }),
                  imageminSvgo({
                    removeViewBox: true
                  })
                ]
              }
            })
          ],

          runtimeChunk: false,
          splitChunks: {
              cacheGroups: {
                  default: false,
                  commons : {
                      test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                      chunks: 'all',
                      minChunks: 2,
                      reuseExistingChunk: true
                  }
              }
          }
      },
      
    
    });