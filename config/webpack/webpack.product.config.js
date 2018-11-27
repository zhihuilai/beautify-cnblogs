const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const packageJson = require('../../package.json');
const base = require('./webpack.base.config');
const { blogUserName, jsList } = require('../customfile');
const jsName = 'beautify-cnblogs';
const version = packageJson.version;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const templateParameters = {
    env: 'production',
    blogUserName,
    jsName: `${jsName}-${version}.min.js`,
    jsList,
};

const minify = {
    collapseWhitespace: true,
};

let prod = {
    entry: {
        [`${jsName}`]: path.resolve(__dirname, '../../src/index.js'),
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
        new OptimizeCSSAssetsPlugin({}),
        new HtmlWebpackPlugin({
            filename: "footer.html",
            template: './src/template/footer.html',
            inject: false,
            templateParameters,
            minify,
        }),
        new HtmlWebpackPlugin({
            filename: "header.html",
            template: './src/template/header.html',
            inject: false,
            templateParameters,
            minify,
        }),
        new HtmlWebpackPlugin({
            filename: "sidebar.html",
            template: './src/template/sidebar.html',
            inject: false,
            templateParameters,
            minify,
        }),
        new MiniCssExtractPlugin({
            filename: `[name]-${version}.min.css`,
            chunkFilename: `[name]-${version}.min.css`,
        })
        // new FileManagerPlugin({
        //     onEnd: {
        //         copy: [{
        //             source: path.resolve(__dirname, `../dist/xxx`),
        //             destination: path.resolve(__dirname, `../dist/xxx`)
        //         }]
        //     }
        // }),
    ],
    output: {
        filename: `[name]-${version}.min.js`,
        path: path.resolve(__dirname, '../../dist'),
    },
    mode: 'production',
};

module.exports = merge(base, prod);
