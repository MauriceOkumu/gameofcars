const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
      entry: './src/index.js',
    output: {
        path: path.join(__dirname ,'/dist'),
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [ 
                    {
                        loader: 'url-loader?limit=8192', 
                    options: {
                        outputPath: 'dist/'
                    }    
                },
                {
                    loader: 'image-webpack-loader',
                    options : {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: '65-90',
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },
                          // the webp option will enable WEBP
                          webp: {
                            quality: 75
                          },
                          enforce: 'pre'
                        }
                    
                }
                   
                   ]
            }
        ]
    },
    //stats: 'verbose',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            // filename: './index.html'
        }),
       new BundleAnalyzerPlugin()
    ]
};