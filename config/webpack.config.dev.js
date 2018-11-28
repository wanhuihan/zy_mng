//
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
//
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const WebpackDeveSer
const name = process.env.name;

const config = require('./base.js');

const webpackConfig = {
    //
    mode: 'development',
    // mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new VueLoaderPlugin()
    ],
    //
    devServer: {
        contentBase: '/src/index.html'
    },
    //
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.min.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: 'url-loader'
            }
        ]
    }
}

webpackConfig.entry = config[name].entry;

webpackConfig.output = config[name].output;

module.exports = webpackConfig;
