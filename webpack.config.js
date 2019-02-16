const path = require('path')

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: "bundle.js.map",
  },
  devtool: 'source-map',
  watch: true,
}