const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { blogUserName } = require('../customfile');

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
            templateParameters: {
                title: '文章页',
                env: 'development',
                blogUserName,
            },
        }),
        new HtmlWebpackPlugin({
            filename: "list.html",
            template: './example/list-template.html',
            inject: false,
            templateParameters: {
                title: '列表页',
                env: 'development',
                blogUserName,
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../../example'),
    },
    mode: 'development',
};

module.exports = merge(base, dev);
