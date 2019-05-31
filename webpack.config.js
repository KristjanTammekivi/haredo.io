const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");
const cssdedupe = require("postcss-discard-duplicates");

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "cache-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [autoprefixer(), mqpacker(), cssdedupe()]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: { includePaths: [path.resolve(__dirname, "../src")] }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: 'src/template.html'
        }),
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ]
};
