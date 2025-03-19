import { defineConfig } from '@rspack/cli';
import * as rspack from '@rspack/core';

export default defineConfig({
    entry: {
        main: './src/index.ts'
    },
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /favicon.*$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /_headers/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new rspack.HtmlRspackPlugin({
            filename: 'index.html',
            template: 'src/template.html'
        })
    ],
    experiments: {
        css: true
    }
});
