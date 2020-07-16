const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 不能用
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: "./index.js",
        print: "./print.js"
    },
    devtool: 'inline-source-map',
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
