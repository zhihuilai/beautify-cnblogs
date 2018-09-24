const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let dev = {
    entry: {
        'beautify-cnblogs': path.resolve(__dirname, '../../src/index.js'),
    },
    devtool: 'inline-source-map',
    devServer: {
        public: 'www.cnblogs.com',
        contentBase: path.resolve(__dirname, '../../example'),
        port: 3001,
        overlay: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "post.html",
            template: './example/post-template.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            filename: "list.html",
            template: './example/list-template.html',
            inject: false,
        }),
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, '../../example'),
    },
    mode: 'development',
};

module.exports = merge(base, dev);
