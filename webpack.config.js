const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(pathname) {
    return path.resolve(__dirname, pathname);
}

module.exports = {
    mode: 'development',
    entry: {
        main: resolve('src/main.js')
    },
    output: {
        filename: 'main.bundle.js',
        path: resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('public/index.html')
        })
    ],
    resolve: {
        alias: {
            '@': resolve('src')
        }
    },
    devServer: {
        port: 8090
    }
}