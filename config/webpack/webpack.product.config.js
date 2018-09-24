const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const packageJson = require('../../package.json');
const base = require('./webpack.base.config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

let prod = {
    entry: {
        'beautify-cnblogs': path.resolve(__dirname, '../../src/index.js'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*'], {
            root: path.resolve(__dirname, '../../'),
        }),
        new UglifyJsPlugin({
            test: /.js$|.jsx$/i,
            uglifyOptions: {
                compress: {
                    pure_funcs: ['console.log', 'alert'], // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
                },
            },
        }),
        new HtmlWebpackPlugin({
            filename: "footer.html",
            template: './src/footer.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            filename: "header.html",
            template: './src/header.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            filename: "sidebar.html",
            template: './src/sidebar.html',
            inject: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
            chunkFilename: '[id].min.css',
        })
        // new FileManagerPlugin({
        //     onEnd: {
        //         copy: [{
        //             source: path.resolve(__dirname, `../dist/spa-downloader.min.js`),
        //             destination: path.resolve(__dirname, `../dist/spa-downloader-${packageJson.version}.min.js`)
        //         }]
        //     }
        // }),
    ],
    output: {
        filename: `[name]-${packageJson.version}.min.js`,
        path: path.resolve(__dirname, '../../dist'),
    },
    mode: 'production',
};

module.exports = merge(base, prod);
