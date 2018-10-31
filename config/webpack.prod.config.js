const merge = require('webpack-merge');

//Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssestsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

//Configs
const baseConfig = require('./webpack.base.config.js');

const prodCofiguration = env => {
  return merge([
    {
      optimization: {
        /*
         the chunks config below takes common code from vendor (node_modules) packages and extracts all common code. this could cause the program to run slowly, and/or load code not needed for a particular view. it might be better to load common code based upon routes instead.
        */
        // runtimeChunk: 'single',
        // splitChunks: {
        //   cacheGroups: {
        //     vendor: {
        //       test: /[\\/]node_modules[\\/]/,
        //       name: 'vendors',
        //       chunks: 'all'
        //     }
        //   }
        // },
        minimizer: [new UglifyJsPlugin]
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssestsPlugin(),
        new Visualizer({ filename: './statistics.html' })
      ]
    }
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodCofiguration(env));
};