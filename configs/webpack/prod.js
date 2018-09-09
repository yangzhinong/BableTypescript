// production config
const merge = require('webpack-merge');

const {resolve} = require('resolve');
var path = require("path");
const commonConfig = require('./common');
const {getEntry} = require('./y.path');
var jsEntries =getEntry();

module.exports = merge(commonConfig, {
  mode: 'production',
  entry:jsEntries,
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [],
});

