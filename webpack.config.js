const path = require("path");

module.exports = {
    entry: {
        app: "./index.js",
        print: "./print.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
