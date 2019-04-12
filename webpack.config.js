const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
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
            }
        ]
    },
    stats: 'verbose',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};