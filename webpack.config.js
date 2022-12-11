const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
        assetModuleFilename: "assets/images/[name].[contenthash][ext]",
      },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/icons/[name].[contenthash][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'template.html'),
        filename: 'index.html',
        }),
        new FileManagerPlugin({
            events: {
            onStart: {
                delete: ['dist'],
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },
};