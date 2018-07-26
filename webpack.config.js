// created manually

// native path module
const path = require('path');
absPath = (end) => path.resolve(__dirname, end);
// settings to direct webpack
module.exports = {
  // control what it bundles and to where
  entry: absPath('app'),
  output: {
    path: absPath('build'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3001,
    contentBase: absPath('build')
  }
};