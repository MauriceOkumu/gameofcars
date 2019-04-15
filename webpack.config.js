const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const  ImageminPlugin = require('imagemin-webpack-plugin').default;

const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

module.exports = {
      //entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                 exclude: /node_modules/,
                use: {loader: 'babel-loader'},
            },
            {
                test: /\html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, 
                    {
                        loader: 'css-loader',
                    }
                    
                ]
            },
            {
                test: /\.(jpeg|png|gif|svg)$i/,
                use: [ 
                    {loader: 'url-loader?limit=8192'},
                    {loader: 'file-loader'}
                   
                   ]
            }
        ]
    },
    stats: 'verbose',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ImageminPlugin({
            bail: false,
            cache: true,
            imageminOptions: {
                // Lossless optimization with custom option
                // Feel free to experement with options for better result for you
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
    ]
};