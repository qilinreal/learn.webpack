const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.css$/,             // 需要import
            use: ["style-loader"        // css文件将被加入html的head中
                , "css-loader"]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }, {
            test: /\.(csv|tsv)$/,
            use: ['csv-loader']
        }, {
            test: /\.xml$/,
            use: ['xml-loader']
        }]
    }
};
