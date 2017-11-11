const path           = require("path");
const IS_PRODUCTION  = process.env.NODE_ENV === "production";
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  module : {
    loaders : [
      {
        loader : "babel-loader",
        test   : /\.js$/,
        include : [ "./src/" ],
        query : {
          presets : [
            "env",
            { targets : { browsers : [ "last 2 versions" ] } }
          ]
        }
      }
    ],
  },

  target  : "node",
  entry   : "./src/index.js",
  devtool : !IS_PRODUCTION ? "source-map" : undefined,

  output  : {
    filename : "index.js",
    path     : path.resolve("./")
  },

  plugins: (
    IS_PRODUCTION
      ? [new UglifyJsPlugin()]
      : []
  )
};