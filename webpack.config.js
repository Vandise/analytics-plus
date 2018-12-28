var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    analyticsplus: "./src/index",
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env["NODE_ENV"] || "production"),
      },
    }),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel", exclude: /node_modules/ },
      { test: /\.json$/, loader: "json" },
      { test: /\.ya?ml/, loader: "json!yaml" },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".yml"],
  },
};
