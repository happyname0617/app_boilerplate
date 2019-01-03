const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(tsx?$)/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              camelCase: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'scss' ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/client/index.html'})
  ]
}
