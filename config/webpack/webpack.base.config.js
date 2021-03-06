const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    output: {
        library: 'BeautifyCNBlogs',
        libraryExport: 'default',
        libraryTarget: 'window',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                ['transform-class-properties'],
                            ],
                        }
                    }, {
                        loader: 'eslint-loader',
                        options: {
                            failOnWarning: true,
                            failOnError: true,
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'art-template-loader',
                options: {
                    htmlResourceRules: false,
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(__dirname, '../'),
                            }
                        }
                    },
                    'sass-loader',
                ],
            }
        ],
    },
    externals: {
        jquery: 'jQuery', // 博客园引入了 jquery，当前版本是 2.2.0 - 2018年10月14日
    }
};
