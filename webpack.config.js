var webpack = require('webpack');

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "vue-dynamic-template.js",
    library: ["vueDynamicTemplate"],
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      }
    ]
  },
}

if (process.env.NODE_ENV === 'production') {
  module.exports.output.filename = "vue-dynamic-template.min.js",
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
  ];
} else {
  module.exports.devtool = '#source-map'
}
