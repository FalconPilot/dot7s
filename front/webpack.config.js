const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader'
      }],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}
