//
const path = require('path');
//
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
//
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const WebpackDeveSer
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
const name = process.env.name;

const config = require('./base.js');
//
const webpackConfig = {
    //
    mode: 'production',
    // mode: 'product ion',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
        //
        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "css/[name].css",
          // chunkFilename: "[id].css"
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.min.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],

            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "vue-style-loader"},

                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },

                    {loader: "css-loader"},

                    {loader: "sass-loader"}
                ]
            },
            // url-loader
            // file-loader
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: './img/[name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}

webpackConfig.entry = config[name].entry;

webpackConfig.output = config[name].output;

module.exports = webpackConfig;
