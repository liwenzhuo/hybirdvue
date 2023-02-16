const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: {
    tvueapp:'./assets/tvueapp.js',
  },  // path to our input file
  output: {
    filename: '[name].[chunkhash]-bundle.js',  // output bundle file name
    library: '[name]',
    path: path.resolve(__dirname, './static/webpack_bundles'),  // path to our Django static directory
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
};