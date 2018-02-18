var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/frontend/index.js"),
    output: {
        path: path.resolve(__dirname, "public/build"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader"
            }
        ]
    }
};
