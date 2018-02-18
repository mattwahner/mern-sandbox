var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/backend/index.js"),
    output: {
        path: __dirname,
        filename: "server.js"
    },
    target: "node",
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: path.resolve(__dirname, "src/backend"),
                loader: "babel-loader"
            }
        ]
    }
};
