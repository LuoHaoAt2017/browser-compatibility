const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(pathname) {
    return path.resolve(__dirname, pathname);
}

module.exports = {
    mode: 'development',
    entry: {
        main: ["@babel/polyfill", resolve('src/main.js')]
    },
    output: {
        filename: 'main.bundle.js',
        path: resolve('./dist')
    },
    devtool: 'inline-source-map',
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
            inject: true,
            filename: 'index.html',
            template: path.resolve(__dirname, "./public/index.html"),
            favicon: path.resolve(__dirname, './public/logo.ico')
        }),
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